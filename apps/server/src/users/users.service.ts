import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
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
