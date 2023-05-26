import { Injectable } from '@nestjs/common';
import { CustomerRepository } from '../customer.repository';
import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { Customer } from '../../entities/customer.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CustomerPrismaRepository implements CustomerRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCustomerDto): Promise<Customer> {
    const customer = new Customer();
    Object.assign(customer, {
      ...data,
    });

    const newCustomer = await this.prisma.customer.create({
      data: { ...customer },
    });

    return plainToInstance(Customer, newCustomer);
  }

  async findAll(): Promise<Customer[]> {
    const customers = await this.prisma.customer.findMany();
    return plainToInstance(Customer, customers);
  }

  //   findAll(): Customer[] | Promise<Customer[]> {
  //     return plainToInstance(Customer, this.database);
  //   }

  async findOne(id: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { id },
    });

    return plainToInstance(Customer, customer);
  }
  async findByMail(email: string): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { email },
    });
    return plainToInstance(Customer, customer);
  }
  async update(id: string, data: UpdateCustomerDto): Promise<Customer> {
    const customer = await this.prisma.customer.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Customer, customer);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({
      where: { id },
    });
  }
}
