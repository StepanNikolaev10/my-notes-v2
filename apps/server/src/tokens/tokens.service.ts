import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import type { User } from '@my-notes/types';
import { AccessTokenPayload, RefreshTokenPayload } from './interfaces/tokens-payload.interface';

@Injectable()
export class TokensService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  async generateAccessToken(userId: User['id']): Promise<string> {
    const payload: AccessTokenPayload = {
      userId: userId,
    };

    const accessToken = this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: this.configService.get<number>('JWT_ACCESS_EXPIRES_IN'),
    });

    return accessToken;
  }

  async generateRefreshToken(userId: User['id'], newSessionId: string): Promise<string> {
    const payload: RefreshTokenPayload = {
      userId: userId,
      sessionId: newSessionId
    };

    const refreshToken = this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<number>('JWT_REFRESH_EXPIRES_IN'),
    });

    return refreshToken;
  }

  async verifyAccessToken(token: string): Promise<AccessTokenPayload> {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET')
    });
  }

  async verifyRefreshToken(token: string): Promise<RefreshTokenPayload> {
    return await this.jwtService.verifyAsync(token, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET')
    });
  }

}
