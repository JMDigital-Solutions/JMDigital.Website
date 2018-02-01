import { Component, OnInit } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { }

	ngOnInit(): void {

	}

}
