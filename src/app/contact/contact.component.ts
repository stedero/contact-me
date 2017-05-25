import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from "../domain/contact";
import { StorageService } from "../storage/storage-service";

@Component({
  selector: 'contact-me-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact: Contact;

  constructor(private storageService: StorageService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.contact = this.storageService.get(params['id']);
    });
  }

}
