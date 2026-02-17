import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.PRIVATE_KEY || 'SECRET_KEY',
      signOptions: {
        expiresIn: '5m'
      },
      global: true
    })  
  ],
  exports: [JwtModule]
})
export class AuthModule {}
