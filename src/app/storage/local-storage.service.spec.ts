import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';
import { Contact } from "../domain/contact";

describe('LocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
  });

  it('create', inject([LocalStorageService], (service: LocalStorageService) => {
    expect(service).toBeTruthy();
  }));

  it('write and read', inject([LocalStorageService], (service: LocalStorageService) => {
    let contact: Contact = new Contact('Bert Bokkepoot', '778866');
    let contacts: Array<Contact> = [contact];
    service.write(contacts);
    expect(service.read()).toEqual(contacts);
  }));

  it('find a contact by id', inject([LocalStorageService], (service: LocalStorageService) => {
    let contact: Contact = new Contact('Bert Bokkepoot', '778866');
    service.write([contact]);
    expect(service.get('bert-bokkepoot')).toEqual(contact);
  }));

});
