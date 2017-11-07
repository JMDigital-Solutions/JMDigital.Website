import { ContactFormModel } from '../../models/ContactFormModel';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {

	_contactModel: ContactFormModel = new ContactFormModel();
	@ViewChild('contactForm') contactForm: NgForm;

	get ContactModel() {
		return this._contactModel;
	}

	constructor() { }

	ngOnInit() {
	}

	onSubmit() {
		this._contactModel.isSubmited = true;
		console.log(this.contactForm);
	}

}
