import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { StorageService } from './storage/storage-service';
import { LocalStorageService } from './storage/local-storage.service';
import { MockStorageService } from "./storage/mock-storage.service";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ { provide: StorageService, useClass: LocalStorageService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
