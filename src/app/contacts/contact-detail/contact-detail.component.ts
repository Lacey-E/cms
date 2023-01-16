import { Component } from '@angular/core';
import { Contacts } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
detailContact: Contacts[] = [
  new Contacts("1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../assets/images/jacksonk.jpg"),
  new Contacts("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg")
];

}
