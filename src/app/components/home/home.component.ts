import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'home',
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor(private _router: Router) { }

	ngOnInit() {
	}

	navigate() {

		this._router.events.subscribe(() => {
			window.scrollTo(0, 0);
		});

		this._router.navigate(['/acerca']);
	}

}
