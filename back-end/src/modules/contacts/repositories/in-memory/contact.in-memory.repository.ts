import { Injectable } from '@nestjs/common';
import { ContactsRepository } from '../contact.repository';
import { CreateContactDto } from '../../dto/create-contact.dto';
import { Contact } from '../../entities/contact.entitie';
import { plainToInstance } from 'class-transformer';
import { UpdateContactDto } from '../../dto/update-contact.dto';

@Injectable()
export class ContactInMemoryRepository implements ContactsRepository {
  private database: Contact[] = [];

  async create(data: CreateContactDto): Promise<Contact> {
    const newContact = new Contact();
    Object.assign(newContact, {
      ...data,
    });

    this.database.push(newContact);

    return newContact;
  }
  async findOne(id: string): Promise<Contact> {
    const contact = this.database.find((element) => element.id === id);

    return contact;
  }
  findByMail(email: string): Contact | Promise<Contact> {
    const contact = this.database.find((element) => {
      return element.email === email;
    });
    return plainToInstance(Contact, contact);
  }

  private contactsby(allContacts: Contact[], key: string) {
    return allContacts.reduce((acc, cur) => {
      (acc[cur[key]] = acc[cur[key]] || []).push(cur);
      return acc;
    }, {});
  }

  async findAll(contacts: string): Promise<object | Contact[]> {
    if (contacts) {
      return this.contactsby(this.database, contacts);
    }
    return this.database;
  }

  update(id: string, data: UpdateContactDto): Contact | Promise<Contact> {
    const contactIndex = this.database.findIndex(
      (element) => element.id === id,
    );
    this.database[contactIndex] = {
      ...this.database[contactIndex],
      ...data,
    };
    return plainToInstance(Contact, this.database[contactIndex]);
  }

  delete(id: string): void | Promise<void> {
    const contactIndex = this.database.findIndex(
      (element) => element.id === id,
    );
    this.database.splice(contactIndex, 1);
  }
}
