import { Component, Input } from '@angular/core';
import { Contacts } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

@Input() contact!: Contacts;


}
