import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDto } from './dto/user-create.dto';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() dto: UserCreateDto) {
    return this.usersService.createUser(dto);
  }


}
