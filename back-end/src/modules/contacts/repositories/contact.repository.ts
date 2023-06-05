import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { Contact } from '../entities/contact.entitie';

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto): Promise<Contact> | Contact;
  abstract findOne(id: string): Promise<Contact | undefined> | Contact;
  abstract findAll(
    contacts: string | undefined,
  ): Promise<Contact[] | object> | Contact[];
  abstract findByMail(email: string): Promise<Contact> | Contact;
  abstract update(
    id: string,
    data: UpdateContactDto,
  ): Promise<Contact> | Contact;

  abstract delete(id: string): Promise<void> | void;
}
