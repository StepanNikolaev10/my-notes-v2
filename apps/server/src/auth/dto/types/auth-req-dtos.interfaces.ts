import type { User } from "@my-notes/types";

export interface IUserLoginDto {
  readonly email: User['email'];
  readonly password: User['password'];
}

export interface IUserRegistrationDto {
  readonly email: User['email'];
  readonly username: User['username'];
  readonly password: User['password'];
}