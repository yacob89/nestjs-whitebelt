import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { v7 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id) || ({} as User);
  }

  createUser(createUserDto: CreateUserDto): User {
    const { name, pin } = createUserDto;
    const user: User = {
      id: uuid(),
      name,
      pin,
      accounts: [],
    };

    this.users.push(user);
    return user;
  }
}
