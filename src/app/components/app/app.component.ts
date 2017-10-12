import { Component, NgZone, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {

	constructor(private _router: Router) { }

	ngOnInit(): void {
		this._router.events.subscribe(() => {
			window.scrollTo(0, 0);
		});
	}

}
