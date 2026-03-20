import type { Tokens } from "../tokens.interface";

export interface AuthServiceResults {
  readonly accessToken: Tokens['accessToken'];
  readonly refreshToken?: Tokens['refreshToken'];
}