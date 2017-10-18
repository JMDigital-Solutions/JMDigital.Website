import { ContactFormModel } from '../../models/ContactFormModel';
import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {

	_contactModel: ContactFormModel = new ContactFormModel();

	get ContactModel() {
		return this._contactModel;
	}

	constructor() { }

	ngOnInit() {
	}

	onSubmit(contactForm) {
		this._contactModel.isSubmited = true;
	}

}
