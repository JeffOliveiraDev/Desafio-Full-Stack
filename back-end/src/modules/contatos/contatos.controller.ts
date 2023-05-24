import { Body, Controller, Post } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { CreateContactDTO } from './dtos/create-contact.dto';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  create(@Body() createContactDTO: CreateContactDTO) {
    return this.contatosService.create(
      createContactDTO.nome,
      createContactDTO.email,
      createContactDTO.registrado,
      createContactDTO.telefone,
    );
  }
}
