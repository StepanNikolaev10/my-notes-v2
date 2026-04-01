import type { User } from "src/users/types/user.interface";

export interface IUserLoginDto {
  readonly email: User['email'];
  readonly password: User['password'];
}

export interface IUserRegistrationDto {
  readonly email: User['email'];
  readonly username: User['username'];
  readonly password: User['password'];
}