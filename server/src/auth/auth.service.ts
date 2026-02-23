import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserCreateDto } from 'src/users/dto/user-create.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/user.entity';
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async registration(dto: UserCreateDto): Promise<AuthResponseDto> {
    const candidate = await this.usersService.getUserByEmail(dto.email);
    if(candidate) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await bcrypt.hash(dto.password, 5)
    const user = await this.usersService.createUser({...dto, password: hashPassword})
    return this.generateJwts(user)
  }

  async login(dto: UserLoginDto): Promise<AuthResponseDto> {
    const user = await this.validateUser(dto)
    return this.generateJwts(user)
  }

  private async generateJwts(user: User) {
    const accessPayload = {
      userId: user.id,
    };
    const refreshPayload = {
      userId: user.id,
      jti: uuidv4()
    };

    const accessToken = this.jwtService.sign(accessPayload);
    const refreshToken = this.jwtService.sign(refreshPayload, {
      secret: process.env.REFRESH_PRIVATE_KEY || 'REFRESH_SECRET',
      expiresIn: '15d',
    });

    return { accessToken, refreshToken };
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
