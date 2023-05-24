import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerRepository } from './repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(protected customerRepository: CustomerRepository) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.customerRepository.create(createCustomerDto);

    return customer;
  }

  async findAll() {
    const customer = await this.customerRepository.findAll();
    return customer;
  }

  async findOne(id: string) {
    const customer = await this.customerRepository.findOne(id);
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.customerRepository.update(
      id,
      updateCustomerDto,
    );
    return customer;
  }

  async remove(id: string) {
    await this.customerRepository.delete(id);
    return;
  }
}
