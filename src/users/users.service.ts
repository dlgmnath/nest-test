import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { UpdateUserDto } from './updateUser.dto';
import { CreateUserDto } from './createUser.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    const position = this.findOne(id);
    if (position === -1) {
      throw new Error('User not found');
    }
    return this.users[position];
  }

  create(user: CreateUserDto): User {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  delete(id: number): void {
    const position = this.findOne(id);
    if (position === -1) {
      throw new Error('User not found');
    }
    this.users.splice(position, 1);
  }

  update(id: number, updatedUser: UpdateUserDto): User {
    const position = this.findOne(id);
    const currentData = this.users[position];
    const newUser = { ...currentData, ...updatedUser, id };
    this.users[position] = newUser;
    return newUser;
  }

  private findOne(id: number): number {
    const position = this.users.findIndex((user) => user.id === id);
    if (position === -1) {
      throw new Error('User not found');
    }
    return position;
  }
}
