import { Type } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty, MinLength, IsOptional, ValidateNested } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ValidateNested()
  @Type(() => CreateProfileDto)
  @IsNotEmpty()
  profile: CreateProfileDto;
}

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(10)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
