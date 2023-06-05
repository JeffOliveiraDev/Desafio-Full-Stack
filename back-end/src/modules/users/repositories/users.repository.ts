import { UpdateUserDto } from '../dto/update-user.dto';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

export abstract class UserRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;

  abstract findByMail(email: string): Promise<User> | User;
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract delete(id: string): Promise<void> | void;
}
