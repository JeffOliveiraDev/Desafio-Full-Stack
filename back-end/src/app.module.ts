import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [CustomerModule, ContactsModule],
})
export class AppModule {}
