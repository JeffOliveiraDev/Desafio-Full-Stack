import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactsRepository } from './repositories/contact.repository';
import { UpdateContactDto } from './dto/update-contact.dto';

@Injectable()
export class ContactsService {
  constructor(private contactRepository: ContactsRepository) {}

  async create(createContactDto: CreateContactDto) {
    const contact = await this.contactRepository.create(createContactDto);

    return contact;
  }

  async findAll(contacts: string | undefined) {
    return this.contactRepository.findAll(contacts);
  }
  async findOne(id: string) {
    const findContact = await this.contactRepository.findOne(id);
    if (!findContact) {
      throw new NotFoundException('Contato não encontrado');
    }
    return findContact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const contact = await this.contactRepository.update(id, updateContactDto);
    if (!contact) {
      throw new NotFoundException('Contato não encontrado');
    }
    return contact;
  }

  async remove(id: string) {
    const contact = await this.contactRepository.findOne(id);
    if (!contact) {
      throw new NotFoundException('Contato não encontrado');
    }
    await this.contactRepository.delete(id);
    return;
  }
}
