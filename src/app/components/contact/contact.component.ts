import { ContactFormModel } from '../../models/ContactFormModel';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
	moduleId: module.id,
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss']
})
export class ContactComponent implements OnInit {

	_contactModel: ContactFormModel = new ContactFormModel();

	private _modalRef: BsModalRef;

	get ContactModel() {
		return this._contactModel;
	}

	constructor( private _modalService: BsModalService ) { }

	ngOnInit() {
	}

	onSubmit(contactForm) {
		this._contactModel.isSubmited = true;
	}

}
