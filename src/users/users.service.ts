import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './user.dto';
import { CreateUserDto } from './user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return await this.findOne(id);
  }

  async create(body: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOneBy({ email: body.email });
    if (existingUser) {
      throw new ConflictException('Hubo un error con el usuario');
    }
    return await this.userRepository.save(body);
  }

  async update(id: number, changes: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (changes.email && changes.email !== user.email) {
      const existingUser = await this.userRepository.findOneBy({ email: changes.email });
      if (existingUser && existingUser.id !== id) {
        throw new ConflictException('Hubo un error con el usuario');
      }
    }
    const updatedUserData = this.userRepository.merge(user, changes);
    return await this.userRepository.save(updatedUserData);
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  private async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
