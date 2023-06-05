import { Injectable } from '@nestjs/common';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userEmail: string, userPassword: string) {
    const user = await this.userService.findByMail(userEmail);

    if (user) {
      const passwordMatch = await compare(userPassword, user.senha);
      if (passwordMatch) {
        return { email: user.email };
      }
      return null;
    }
  }

  async login(email: string) {
    const user = await this.userService.findByMail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
    };
  }
}
