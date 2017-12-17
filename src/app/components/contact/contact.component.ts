import { MailModel } from '../../models/MailModel';
import { CanComponentDeactivateService } from '../../services/can-deactivate-guard.service';
import { MailService } from '../../services/mail.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { DialogDataModel } from '../../models/DialogDataModel';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
	moduleId: module.id,
	selector: 'app-contact',
	templateUrl: 'contact.component.html',
	styleUrls: ['contact.component.scss'],
	providers: [MailService]
})
export class ContactComponent implements OnInit, CanComponentDeactivateService {

	private _isSubmited: Boolean = false;
	_mailModel: MailModel;
	_dialogData: DialogDataModel;

	@ViewChild('contactForm') contactForm: NgForm;

	constructor(private _mailService: MailService,
		public dialog: MatDialog) { }

	ngOnInit() {
		this._mailModel = {
			name: '',
			lastName: '',
			message: '',
			captchaToken: '',
			email: '',
			phoneNbr: ''
		};
	}

	openDialog() {
		const dialogRef = this.dialog.open(DialogComponent, {
			width: '250px',
			data: { name: 'Juan Manuel', animal: 'Perro' }
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
			console.log(result);
		});
	}

	onSubmit() {

		if (!this._isSubmited && this.contactForm.dirty) {
			this._isSubmited = true;
			this._mailService.sendMail(this._mailModel)
				.subscribe(
				(values) => {
					const data = values;
					this._isSubmited = true;
				},
				(error) => {
					this._isSubmited = false;
					this._dialogData = { title: 'Error', body: 'Se ha producido un error al intentar enviar el mail. Inténtelo de nuevo mas tarde.' };
					const dialogRef = this.dialog.open(DialogComponent, {
						minWidth: '662px',
						disableClose: true,
						autoFocus: true,
						data: this._dialogData
					});
				});
		}
	}

	canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
		if (!this._isSubmited && this.contactForm.dirty) {
			return confirm('¿Desea irse sin enviar su consulta?');
		} else {
			return true;
		}
	}
}