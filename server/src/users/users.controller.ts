import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() dto: CreateUserDTO) {
    return this.usersService.createUser(dto);
  }


}
