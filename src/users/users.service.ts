import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './user.dto';
import { CreateUserDto } from './user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  findById(id: number) {
    throw new Error('Method not implemented.' + id);
  }
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async create(body: CreateUserDto): Promise<User> {
    const newUser = await this.userRepository.save(body);
    return newUser;
  }

  async update(id: number, changes: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    const updatedUserData = this.userRepository.merge(user, changes);
    return updatedUserData;
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    await this.userRepository.remove(user);
  }

  private async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
