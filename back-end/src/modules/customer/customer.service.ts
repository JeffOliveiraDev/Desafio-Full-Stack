import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(protected customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const findCustomer = await this.customerRepository.findByMail(
      createCustomerDto.email,
    );
    if (findCustomer) {
      throw new ConflictException('Cliente já cadastrado');
    }
    const customer = await this.customerRepository.create(createCustomerDto);

    return customer;
  }

  async findAll() {
    const customers = await this.customerRepository.findAll();
    return customers;
  }

  async findOne(id: string) {
    const customer = await this.customerRepository.findOne(id);
    if (!customer) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.update(
      id,
      updateCustomerDto,
    );
    if (!customer) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return customer;
  }

  async remove(id: string) {
    const customer = await this.customerRepository.findOne(id);
    if (!customer) {
      throw new NotFoundException('Usuário não encontrado');
    }
    await this.customerRepository.delete(id);
    return;
  }
}
