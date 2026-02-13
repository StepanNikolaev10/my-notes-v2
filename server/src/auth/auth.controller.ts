import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateDto } from 'src/users/dto/user-create.dto';
import { UserLoginDto } from './dto/user-login.dto';


@Controller('auth')
export class AuthController {

  constructor( private authService: AuthService) {}
  
  @Post('/registration')
  registration(@Body() dto: UserCreateDto) {
    return this.authService.registration(dto)
  }

  @Post('/login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.login(dto)
  }

}
