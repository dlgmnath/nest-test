import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  password: string | undefined;

  @IsEmail()
  @IsNotEmpty()
  email: string | undefined;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(10)
  password: string | undefined;

  @IsEmail()
  @IsNotEmpty()
  email: string | undefined;
}
