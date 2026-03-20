import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import type { User } from '@my-notes/types';
import type { TokensServiceArgs } from './types/service-args/tokens-service-args.interface';
import type { Tokens } from './types/tokens.interface';
import { TokensServiceResults } from './types/service-results/tokens-service-results.interface';

@Injectable()
export class TokensService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async generateAccessToken(args: TokensServiceArgs['generateAccessToken']): Promise<TokensServiceResults['generateAccessToken']> {
    const payload: Tokens['accessTokenPayload'] = {
      userId: args.userId,
    };

    const accessToken = this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.configService.get<number>('JWT_ACCESS_EXPIRES_IN'),
    });

    return accessToken;
  }

  async generateRefreshToken(args: TokensServiceArgs['generateRefreshToken']): Promise<TokensServiceResults['generateRefreshToken']> {
    const payload: Tokens['refreshTokenPayload'] = {
      userId: args.userId,
      sessionId: args.newSessionId
    };

    const refreshToken = this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<number>('JWT_REFRESH_EXPIRES_IN'),
    });

    return refreshToken;
  }

  async verifyAccessToken(token: TokensServiceArgs['verifyAccessToken']): Promise<TokensServiceResults['verifyAccessToken']> {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET')
    });
  }

  async verifyRefreshToken(token: TokensServiceArgs['verifyRefreshToken']): Promise<TokensServiceResults['verifyRefreshToken']> {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET')
    });
  }

}
