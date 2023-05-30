import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [CustomerModule, ContactsModule, AuthModule],
})
export class AppModule {}
