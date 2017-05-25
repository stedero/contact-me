import { Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { Contact } from '../domain/contact';

export class LocalStorageService extends StorageService {

  read(): Array<Contact> {
    let contacts: Array<Contact> = [];
    if (localStorage.xxxcontacts) {
      contacts = JSON.parse(localStorage.xxxcontacts)
                     .map(c => new Contact(c['name'], c['phone']));
    }
    return contacts;
  }

  write(contacts: Array<Contact>) {
    localStorage.xxxcontacts = JSON.stringify(contacts);
  }

  get(id: string): Contact {
    return this.read().find(contact => contact.id === id);
  }

}
