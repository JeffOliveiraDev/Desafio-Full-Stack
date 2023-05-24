import { CreateCustomerDto } from '../../dto/create-customer.dto';
import { UpdateCustomerDto } from '../../dto/update-customer.dto';
import { Customer } from '../../entities/customer.entity';
import { CustomerRepository } from '../customer.repository';

export class CustomerInMemoryRepository implements CustomerRepository {
  protected database: Customer[] = [];

  create(data: CreateCustomerDto): Customer | Promise<Customer> {
    const newCostumer = new Customer();
    Object.assign(newCostumer, {
      ...data,
    });
    this.database.push(newCostumer);

    return newCostumer;
  }

  findAll(): Customer[] | Promise<Customer[]> {
    return this.database;
  }
  findOne(id: string): Customer | Promise<Customer> {
    const customer = this.database.find((element) => {
      return element.customer_id === parseInt(id);
    });
    return customer;
  }
  update(id: string, data: UpdateCustomerDto): Customer | Promise<Customer> {
    const customerIndex = this.database.findIndex(
      (element) => element.customer_id === parseInt(id),
    );
    this.database[customerIndex] = {
      ...this.database[customerIndex],
      ...data,
    };
    return this.database[customerIndex];
  }
  delete(id: string): void | Promise<void> {
    const customerIndex = this.database.findIndex(
      (element) => element.customer_id === parseInt(id),
    );
    this.database.splice(customerIndex, 1);
  }
}
