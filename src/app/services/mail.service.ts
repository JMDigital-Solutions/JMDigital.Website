import { MailModel } from '../models/MailModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class MailService {

	constructor(private _http: HttpClient) { }

	sendMail(mail: MailModel) {
		console.log(mail);
		return this._http.post<string[]>('https://api.jmdigital.com.ar/api/mail', mail)
			.map(
				(values) => {
					const data = values;
					return data;
				}
			);
	}

}
