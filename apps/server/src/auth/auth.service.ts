import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';
import { SessionsService } from 'src/sessions/sessions.service';
import { TokensService } from 'src/tokens/tokens.service';
import { UserRegistrationDto } from './dto/req/user-registration.dto';
import { UserLoginDto } from './dto/req/user-login.dto';
import { UpdateSession } from 'src/sessions/interfaces/update-session-payload.interface';
import { User } from '@my-notes/types';
import type { RefreshTokenPayload } from 'src/tokens/interfaces/tokens-payload.interface';
import { AuthServiceRes } from './interfaces/AuthServiceRes.interface';
import { CreateSessionPayload } from 'src/sessions/interfaces/create-session-payload.interface';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly sessionsService: SessionsService,
    private readonly tokensService: TokensService,
  ) {}

  async registration(dto: UserRegistrationDto): Promise<AuthServiceRes> {
    const candidate = await this.usersService.getUserByEmail(dto.email);
    if(candidate) {
      throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST)
    }
    
    const hashPassword = await bcrypt.hash(dto.password, 5)
    const user = await this.usersService.createUser({...dto, password: hashPassword})

    const newSessionId = uuidv4();

    const jwts = {
      accessToken: await this.tokensService.generateAccessToken(user.id),
      refreshToken: await this.tokensService.generateRefreshToken(user.id, newSessionId)
    }

    const createSessionPayload: CreateSessionPayload = {
      userId: user.id,
      sessionId: newSessionId,
    }
    await this.sessionsService.createSession(createSessionPayload);

    return jwts;
  }

  async login(dto: UserLoginDto): Promise<AuthServiceRes> {
    const user = await this.validateUser(dto);

    const newSessionId = uuidv4();

    const jwts = {
      accessToken: await this.tokensService.generateAccessToken(user.id),
      refreshToken: await this.tokensService.generateRefreshToken(user.id, newSessionId)
    }

    const createSessionPayload: CreateSessionPayload = {
      userId: user.id,
      sessionId: newSessionId,
    }
    await this.sessionsService.createSession(createSessionPayload);

    return jwts;
  }

  async refresh(currentRefreshTokenPayload: RefreshTokenPayload): Promise<AuthServiceRes> {
    const session = await this.sessionsService.getSession(currentRefreshTokenPayload.sessionId);
    if (!session) throw new UnauthorizedException('Session expired or invalid');

    const newSessionId = uuidv4()
    
    const updateSessionPayload: UpdateSession = {
      userId: currentRefreshTokenPayload.userId,
      currentSessionId: currentRefreshTokenPayload.sessionId,
      newSessionId: newSessionId,
    }

    const refreshResult = await this.sessionsService.updateSession(updateSessionPayload);

    const accessToken = await this.tokensService.generateAccessToken(currentRefreshTokenPayload.userId);
    if(refreshResult === 'OK') {
      const refreshToken = await this.tokensService.generateRefreshToken(currentRefreshTokenPayload.userId, newSessionId); 
      return {
        accessToken: accessToken,
        refreshToken: refreshToken
      }
    } else if(refreshResult === 'ALREADY_UPDATED') {
      return {
        accessToken: accessToken,
      }
    } else {
      throw new UnauthorizedException('Session expired or invalid');
    }
  
  }

  private async validateUser(dto: UserLoginDto): Promise<User> {
    const user = await this.usersService.getUserByEmail(dto.email);
    if(!user) {
      throw new UnauthorizedException({message: 'Некорректный емейл'})
    }
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (!passwordEquals) {
      throw new UnauthorizedException({message: 'Некорректный пароль'})
    }
    return user;
  }

}
