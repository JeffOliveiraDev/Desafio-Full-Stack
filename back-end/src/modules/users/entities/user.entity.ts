import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  nome: string;
  email: string;
  telefone: string;

  @Exclude()
  senha: string;

  constructor() {
    this.id = randomUUID();
  }
}
