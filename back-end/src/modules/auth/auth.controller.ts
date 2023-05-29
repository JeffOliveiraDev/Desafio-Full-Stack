import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

interface ICustomerLogin {
  email: string;
  senha: string;
}

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() customer: ICustomerLogin) {
    return this.authService.login(customer.email);
  }
}
