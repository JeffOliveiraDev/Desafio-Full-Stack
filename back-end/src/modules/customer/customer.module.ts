import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './repositories/customer.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CustomerPrismaRepository } from './repositories/prisma/customer-prisma.repository';

@Module({
  controllers: [CustomerController],
  providers: [
    CustomerService,
    PrismaService,
    {
      provide: CustomerRepository,
      useClass: CustomerPrismaRepository,
    },
  ],
  exports: [CustomerService],
})
export class CustomerModule {}
