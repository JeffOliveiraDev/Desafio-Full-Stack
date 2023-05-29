import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'email',
      passwordField: 'senha',
    });
  }
  async validate(email: string, senha: string) {
    const customer = await this.authService.validateCustomer(email, senha);
    if (!customer) {
      throw new UnauthorizedException('Senha ou email inválidos');
    }
    return customer;
  }
}
