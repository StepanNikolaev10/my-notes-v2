import { Injectable } from '@nestjs/common';
import { UserCreate } from './interfaces/user-create.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  async createUser(dto: UserCreate) {
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
