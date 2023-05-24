import { Injectable } from '@nestjs/common';

@Injectable()
export class ContatosService {
  create(nome: string, email: string, telefone: string, registrado: string) {
    return { nome, email, telefone, registrado };
  }
}
