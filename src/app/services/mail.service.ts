import { MailModel } from '../models/MailModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class MailService {

	private _apiUrl = 'https://api.jmdigital.com.ar/api';

	constructor(private _http: HttpClient) { }

	sendMail(mail: MailModel) {
		return this._http.post<string[]>('/SendMail', mail, { withCredentials: true })
			.map(
				(values) => {
					return values;
				}
			);
	}

}
