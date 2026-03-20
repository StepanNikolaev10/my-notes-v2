import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { SessionsService } from './sessions.service';
import { TokensService } from './tokens.service';
import type { AuthServiceArgs } from './types/service-args/auth-service-args.interface';
import type { AuthServiceResults } from './types/service-results/auth-service-results.interface';
import type { User } from '@my-notes/types';
import type { SessionsServiceArgs } from './types/service-args/sessions-service-args.interface';
import { TokensServiceArgs } from './types/service-args/tokens-service-args.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly sessionsService: SessionsService,
    private readonly tokensService: TokensService,
  ) {}

  async registration(args: AuthServiceArgs['registration']): Promise<AuthServiceResults> {
    const candidate = await this.usersService.getUserByEmail(args.email);
    if(candidate) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
    }
    
    const hashPassword = await bcrypt.hash(args.password, 5)
    const user = await this.usersService.createUser({...args, password: hashPassword})


    const generateAccessTokenArgs: TokensServiceArgs['generateAccessToken'] = {
      userId: user.id
    }
    const newSessionId = uuidv4();
    const generateRefreshTokenArgs: TokensServiceArgs['generateRefreshToken'] = {
      userId: user.id,
      newSessionId: newSessionId
    }
    const jwts = {
      accessToken: await this.tokensService.generateAccessToken(generateAccessTokenArgs),
      refreshToken: await this.tokensService.generateRefreshToken(generateRefreshTokenArgs)
    }

    const createSessionArgs: SessionsServiceArgs['createSession'] = {
      userId: user.id,
      sessionId: newSessionId,
    }
    await this.sessionsService.createSession(createSessionArgs);

    return jwts;
  }

  async login(args: AuthServiceArgs['login']): Promise<AuthServiceResults> {
    const user = await this.validateUser(args);

    const newSessionId = uuidv4();

    const jwts = {
      accessToken: await this.tokensService.generateAccessToken({ userId: user.id }),
      refreshToken: await this.tokensService.generateRefreshToken({ userId: user.id, newSessionId: newSessionId})
    }

    const createSessionArgs: SessionsServiceArgs['createSession'] = {
      userId: user.id,
      sessionId: newSessionId,
    }
    await this.sessionsService.createSession(createSessionArgs);

    return jwts;
  }

  async refresh(args: AuthServiceArgs['refresh']): Promise<AuthServiceResults> {
    const session = await this.sessionsService.getSession(args.currentRefreshTokenPayload.sessionId);
    if (!session) throw new UnauthorizedException('Session expired or invalid');

    const newSessionId = uuidv4();
    
    const updateSessionArgs: SessionsServiceArgs['updateSession'] = {
      userId: args.currentRefreshTokenPayload.userId,
      currentSessionId: args.currentRefreshTokenPayload.sessionId,
      newSessionId: newSessionId,
    }

    const refreshResult = await this.sessionsService.updateSession(updateSessionArgs);

    if (refreshResult !== 'OK' && refreshResult !== 'ALREADY_UPDATED') {
      throw new UnauthorizedException('Session expired or invalid')
    }

    const accessToken = await this.tokensService.generateAccessToken({ userId: args.currentRefreshTokenPayload.userId });
    
    if(refreshResult === 'OK') {
      const refreshToken = await this.tokensService.generateRefreshToken({ userId: args.currentRefreshTokenPayload.userId, newSessionId}); 
      return {
        accessToken: accessToken,
        refreshToken: refreshToken
      }
    } else {
      return {
        accessToken: accessToken,
      }
    }
  
  }

  private async validateUser(args: AuthServiceArgs['login']): Promise<User> {
    const user = await this.usersService.getUserByEmail(args.email);
    if(!user) {
      throw new UnauthorizedException({message: 'Некорректный емейл'})
    }
    const passwordEquals = await bcrypt.compare(args.password, user.password);
    if (!passwordEquals) {
      throw new UnauthorizedException({message: 'Некорректный пароль'})
    }
    return user;
  }

}
