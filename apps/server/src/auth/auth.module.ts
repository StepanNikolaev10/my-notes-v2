import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { SessionsModule } from 'src/sessions/sessions.module';
import { JwtModule } from '@nestjs/jwt';
import { TokensService } from './tokens.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokensService],
  imports: [
    UsersModule,
    JwtModule.register({}),
    SessionsModule
  ],
})
export class AuthModule {}
