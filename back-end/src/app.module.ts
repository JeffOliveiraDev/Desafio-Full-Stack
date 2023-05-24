import { Module } from '@nestjs/common';
import { CustomerModule } from './modules/customer/customer.module';
import { ContatosModule } from './modules/contatos/contatos.module';

@Module({
  imports: [CustomerModule, ContatosModule],
})
export class AppModule {}
