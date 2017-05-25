import { Injectable } from '@angular/core';
import { Contact } from '../domain/contact';

@Injectable()
export abstract class StorageService {

    abstract read(): Array<Contact>;

    abstract write(contacts: Array<Contact>);

    abstract get(id: string): Contact;

}
