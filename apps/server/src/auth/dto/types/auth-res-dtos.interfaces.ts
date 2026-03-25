import type { Tokens } from "src/auth/types/tokens.interface";

export interface IAuthResDto {
  readonly accessToken: Tokens['accessToken']
}