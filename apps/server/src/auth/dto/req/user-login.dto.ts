import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import type { IUserLoginDto } from "../types/auth-req-dtos.interfaces";

export class UserLoginDto implements IUserLoginDto {
  @IsNotEmpty({ message: 'Email cannot be empty' })
  @IsString({ message: 'Email must be a string' })
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsNotEmpty({ message: 'Password cannot be empty' })
  readonly password: string;
}