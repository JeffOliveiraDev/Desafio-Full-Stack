import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './repositories/users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(protected userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByMail(createUserDto.email);
    if (findUser) {
      throw new ConflictException('Usuário já cadastrado');
    }
    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findByMail(email: string) {
    const user = await this.userRepository.findByMail(email);
    // if (!customer) {
    //   throw new NotFoundException('Usuário não encontrado');
    // }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.update(id, updateUserDto);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }
}
