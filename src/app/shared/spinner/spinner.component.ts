import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
	selector: 'loading-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

	@Input('loading') loading: Boolean;

	constructor() { }

	ngOnInit() {
	}

}
