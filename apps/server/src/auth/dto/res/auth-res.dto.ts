import { Expose } from "class-transformer";
import { IAuthResDto } from "../types/auth-res-dtos.interfaces";

export class AuthResDto implements IAuthResDto {
  @Expose()
  readonly accessToken: string;
}