import { IsAlphanumeric, IsEmail, isNotEmpty, IsNotEmpty, IsString } from "class-validator";


// Basically my validations?

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
