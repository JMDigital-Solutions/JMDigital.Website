export class MailModel {
	constructor(
		public fullName: String,
		public email: String,
		public phoneNbr: String,
		public message: String,
		public captchaToken: String
	) {}
}
