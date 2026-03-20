import type { User } from "@my-notes/types";
import type { Tokens } from "../tokens.interface";

export interface AuthServiceArgs {
  registration: {
    readonly email: User['email'];
    readonly username: User['username'];
    readonly password: User['password']
  }

  login: {
    readonly email: User['email'];
    readonly password: User['password']
  }

  refresh: {
    readonly currentRefreshTokenPayload: Tokens['refreshTokenPayload'];
  }

}