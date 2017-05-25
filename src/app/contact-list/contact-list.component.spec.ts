import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListComponent } from './contact-list.component';
import { MockStorageService } from "../storage/mock-storage.service";
import { StorageService } from "../storage/storage-service";
import { LocalStorageService } from "../storage/local-storage.service";
import { RouterTestingModule } from '@angular/router/testing';
import { CONTACTS } from "app/mock-contacts";
import { Contact } from "../domain/contact";
import { FormsModule } from "@angular/forms";


describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ ContactListComponent ],
      providers: [ { provide: StorageService, useClass: MockStorageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('have all mocked contacts', () => {
    expect(component.contacts).toEqual(CONTACTS);
  });

  it('handle submit', () => {
    component.contact = new Contact('Jantje Beton', '06-27754423');
    component.onSubmit();
    let contacts: Array<Contact> = component.contacts;
    let addedContact = contacts[contacts.length - 1];
    expect(addedContact.name).toEqual('Jantje Beton');
  });

});
