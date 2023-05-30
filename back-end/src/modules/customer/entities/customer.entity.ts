import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Customer {
  static newId = 1;
  readonly id: string;
  nome: string;
  email: string;
  telefone: string;
  registrado: string;

  @Exclude()
  senha: string;

  constructor() {
    this.id = randomUUID();
  }
}
