import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './repositories/customer.repository';
import { CustomerInMemoryRepository } from './repositories/in-memory/customer.in-memory.repository';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    {
      provide: CustomerRepository,
      useClass: CustomerInMemoryRepository,
    },
  ],
})
export class CustomerModule {}
