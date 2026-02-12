import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async createUser(dto: UserCreateDto) {
    const user = this.userRepository.create(dto);
    await this.userRepository.save(user)
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({where: { email }});
    if (user) {
      return user;
    }
  }

}
