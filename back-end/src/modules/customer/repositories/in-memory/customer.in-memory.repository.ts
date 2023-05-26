import { plainToInstance } from 'class-transformer';
import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { Customer } from '../../entities/customer.entity';
import { CustomerRepository } from '../customer.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerInMemoryRepository implements CustomerRepository {
  protected database: Customer[] = [];

  create(data: CreateCustomerDto): Customer | Promise<Customer> {
    const newCostumer = new Customer();
    Object.assign(newCostumer, {
      ...data,
    });
    this.database.push(newCostumer);

    return plainToInstance(Customer, newCostumer);
  }

  findAll(): Customer[] | Promise<Customer[]> {
    return plainToInstance(Customer, this.database);
  }
  findOne(id: string): Customer | Promise<Customer> {
    const customer = this.database.find((element) => {
      return element.id === id;
    });
    return plainToInstance(Customer, customer);
  }

  findByMail(email: string): Customer | Promise<Customer> {
    const customer = this.database.find((element) => {
      return element.email === email;
    });
    return plainToInstance(Customer, customer);
  }

  update(id: string, data: UpdateCustomerDto): Customer | Promise<Customer> {
    const customerIndex = this.database.findIndex(
      (element) => element.id === id,
    );
    this.database[customerIndex] = {
      ...this.database[customerIndex],
      ...data,
    };
    return plainToInstance(Customer, this.database[customerIndex]);
  }
  delete(id: string): void | Promise<void> {
    const customerIndex = this.database.findIndex(
      (element) => element.id === id,
    );
    this.database.splice(customerIndex, 1);
  }
}
