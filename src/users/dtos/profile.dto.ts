import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

// DTO para crear un perfil
export class CreateProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}

// clona y hace opcional cada propiedad de CreateProfileDto sea opcional
export class UpdateProfileDto extends PartialType(CreateProfileDto) {}
