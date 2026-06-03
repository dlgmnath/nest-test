import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsString, IsEmail, IsNotEmpty, MinLength, ValidateNested } from 'class-validator';
import { CreateProfileDto } from './profile.dto';

// DTO para crear un usuario
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

// clona y hace opcional cada propiedad de CreateUserDto sea opcional
export class UpdateUserDto extends PartialType(CreateUserDto) {}
