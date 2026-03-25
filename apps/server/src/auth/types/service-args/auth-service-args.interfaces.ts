import type { User } from "@my-notes/types";
import type { Tokens } from "../tokens.interface";


export interface RegistrationArgs {
  readonly email: User['email'];
  readonly username: User['username'];
  readonly password: User['password']
}

export interface LoginArgs {
  readonly email: User['email'];
  readonly password: User['password']
}

export interface RefreshArgs {
  readonly currentRefreshTokenPayload: Tokens['refreshTokenPayload'];
}