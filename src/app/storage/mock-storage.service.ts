import { Injectable, OnInit } from '@angular/core';
import { StorageService } from "./storage-service";
import { Contact } from "../domain/contact";
import { CONTACTS } from "app/mock-contacts";

export class MockStorageService extends StorageService {
  contacts: Array<Contact> = CONTACTS;

  read(): Array<Contact> {
    return this.contacts;
  }

  write(contacts: Array<Contact>) {
    this.contacts = contacts;
  }

  get(id: string): Contact {
    return this.contacts.find(contact => contact.id === id);
  }

}
