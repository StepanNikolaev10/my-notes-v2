import type { IUser } from '../../../../shared/interfaces/user.interface';

export class UserCreateDto { // по сути тип, но для использования декораторов это класс
  readonly email: IUser['email'];
  readonly username: IUser['username'];
  readonly password: IUser['password'];
}