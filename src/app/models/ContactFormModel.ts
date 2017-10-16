export class ContactFormModel {

    constructor(
        public name:String = "",
        public lastName:String = "",
        public email:String = "",
        public phone:String = "",
        public message:String = "",
        public isSubmited: boolean = false
    ) {}
        
}