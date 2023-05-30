import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  nome: string;
  email: string;
  telefone: string;
  registrado: string;
  customerId?: string;

  constructor() {
    this.id = randomUUID();
  }
}
