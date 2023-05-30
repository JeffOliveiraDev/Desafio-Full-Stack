import { Injectable } from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { compare } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomerService,
    private jwtService: JwtService,
  ) {}

  async validateCustomer(customerEmail: string, customerPassword: string) {
    const customer = await this.customerService.findByMail(customerEmail);

    if (customer) {
      const passwordMatch = await compare(customerPassword, customer.senha);
      if (passwordMatch) {
        return { email: customer.email };
      }
      return null;
    }
  }

  async login(email: string) {
    const customer = await this.customerService.findByMail(email);
    return {
      token: this.jwtService.sign({ email }, { subject: customer.id }),
    };
  }
}
