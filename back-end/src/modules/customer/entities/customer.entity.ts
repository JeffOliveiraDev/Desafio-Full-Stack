import { randomUUID } from 'crypto';

export class Customer {
  static newId = 1;
  readonly id: string;
  nome: string;
  email: string;
  telefone: number;
  registrado: string;
  senha: string;
  readonly customer_id: number;

  constructor() {
    this.id = randomUUID();
    this.customer_id = Customer.newId;
    Customer.newId++;
  }
}
