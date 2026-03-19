import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Response } from 'express';
import { AuthResDto } from './dto/res/auth-res.dto';
import { ConfigService } from '@nestjs/config';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';
import { GetRtPayload } from './decorators/get-rt-payload.decorator';
import type { RefreshTokenPayload } from './interfaces/tokens-payload.interface';
import { UserRegistrationDto } from './dto/req/user-registration.dto';
import { UserLoginDto } from './dto/req/user-login.dto';
import { plainToInstance } from 'class-transformer';

@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}
  
  @Post('/registration')
  async registration(
    @Body() dto: UserRegistrationDto,
    @Res({ passthrough: true }) res: Response
  ): Promise<AuthResDto> {
    const jwts = await this.authService.registration(dto);
    res.cookie('refreshToken', jwts.refreshToken, { 
      httpOnly: true,
      maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRES_IN')! * 1000, // знак ! стоит потому что приложение не запустится без env, стоит Joi schema
    });
    return plainToInstance(AuthResDto, { accessToken: jwts.accessToken });
  }

  @Post('/login')
  async login(
    @Body() dto: UserLoginDto,
    @Res({ passthrough: true }) res: Response
  ): Promise<AuthResDto> {
    const jwts = await this.authService.login(dto);
    res.cookie('refreshToken', jwts.refreshToken, { 
      httpOnly: true,
      maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRES_IN')! * 1000, // знак ! стоит потому что приложение не запустится без env, стоит Joi schema
    });
    return plainToInstance(AuthResDto, { accessToken: jwts.accessToken });
  }

  @Post('/refresh')
  @UseGuards(JwtRefreshAuthGuard)
  async refresh(
    @GetRtPayload() currentRefreshTokenPayload: RefreshTokenPayload,
    @Res({ passthrough: true }) res: Response
  ): Promise<AuthResDto> {
    const refreshResult = await this.authService.refresh(currentRefreshTokenPayload);
    if(refreshResult.refreshToken) {
      res.cookie('refreshToken', refreshResult.refreshToken, { 
        httpOnly: true,
        maxAge: this.configService.get<number>('JWT_REFRESH_EXPIRES_IN')! * 1000, // знак ! стоит потому что приложение не запустится без env, стоит Joi schema
      });
    }
    return plainToInstance(AuthResDto, { accessToken: refreshResult.accessToken });
  }

}

