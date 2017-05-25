import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from "app/contact-list/contact-list.component";
import { ContactComponent } from "app/contact/contact.component";

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent
  },
  {
    path: 'contacts/:id',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
