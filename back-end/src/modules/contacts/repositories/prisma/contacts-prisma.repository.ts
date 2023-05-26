import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { UpdateContactDto } from '../../dto/update-contact.dto';
import { Contact } from '../../entities/contact.entitie';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsPrismaRepository implements ContactsRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateContactDto): Promise<Contact> {
    const contact = new Contact();
    Object.assign(contact, { ...data });
    const newContact = await this.prisma.contact.create({
      data: {
        id: contact.id,
        nome: contact.nome,
        email: contact.email,
        registrado: contact.registrado,
        telefone: contact.telefone,
        customerId: contact.customerId,
      },
    });

    return newContact;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  }

  private contactsby(allContacts: Contact[], key: string) {
    return allContacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Contact[]> {
    const contacts = await this.prisma.contact.findMany();
    if (group) {
      return this.contactsby(contacts, group);
    }
    return contacts;
  }

  async findByMail(email: string): Promise<Contact> {
    const contact = await this.prisma.contact.findUnique({
      where: { email },
    });
    return plainToInstance(Contact, contact);
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data },
    });

    return plainToInstance(Contact, contact);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    });
  }
}
