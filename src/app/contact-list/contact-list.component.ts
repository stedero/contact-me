import { Component, OnInit } from '@angular/core';
import { Contact} from '../domain/contact';
import { StorageService } from "../storage/storage-service";

@Component({
  selector: 'contact-me-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contact: Contact;
  public contacts: Array<Contact>;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.contact = new Contact('', '');
    this.contacts = this.storageService.read();
  }

  onSubmit() {
    this.contacts.push(this.contact);
    this.storageService.write(this.contacts);
  }

}
