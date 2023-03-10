import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Contacts } from '../contacts/contact.model';

@Component({
  selector: 'cms-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
@Input() contact!: Contacts;
@Output() contactSelected = new EventEmitter<void>();

constructor() {}

ngOnInit() {
    
}

onSelected() {
this.contactSelected.emit();
}

}
