import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CustomerModule, ContactsModule, AuthModule, UsersModule],
})
export class AppModule {}
