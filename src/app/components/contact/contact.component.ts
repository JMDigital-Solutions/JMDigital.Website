import { MailModel } from '../../models/MailModel';
import { CanComponentDeactivateService } from '../../services/can-deactivate-guard.service';
import { MailService } from '../../services/mail.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
	moduleId: module.id,
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss'],
	providers: [ MailService ]
})
export class ContactComponent implements OnInit, CanComponentDeactivateService {

	private _isSubmited: Boolean = false;
	_mailModel: MailModel;

	name: String;
	lastName: String;
	email: String;
	phone: String;
	message: String;

	@ViewChild('contactForm') contactForm: NgForm;

	constructor(private _mailService: MailService) { }

	ngOnInit() {
	}

	onSubmit() {
		if (!this._isSubmited && this.contactForm.dirty) {
			this._isSubmited = true;
			this.buildMailModel();
			this._mailService.sendMail(this._mailModel)
				.subscribe(
					(values) => {
						const data = values;
						console.log(data);
					},
					(error) => {
						console.log(error);
						this._isSubmited = false;
					}
				);
		}
	}

	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
		if (!this._isSubmited && this.contactForm.dirty) {
			return confirm('¿Desea irse sin enviar su consulta?');
		} else {
			return true;
		}
	}

	buildMailModel() {
		this._mailModel = new MailModel(this.name + ' ' + this.lastName, this.email, this.phone, this.message);
	}

}
