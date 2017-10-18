import { navbarAnimations } from './navbar.component.animations';
import { Component, OnInit, Output, EventEmitter, NgZone, Inject, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
	moduleId: module.id,
	selector: 'app-navbar',
	templateUrl: 'navbar.component.html',
	styleUrls: ['navbar.component.scss'],
	animations: [
		navbarAnimations
	]
})
export class NavbarComponent implements OnInit {

	tabLinks: NavLinks[] = [
		{ link: 'home', label: 'Inicio' },
		{ link: 'acerca', label: 'Conocé Más' },
		{ link: 'contacto',	label: 'Contacto' }
	];

	shrinkNav = false;

	// @HostListener('window:scroll', [])
	// onWindowScroll() {
	// 	if (window.pageYOffset > 100) {
	// 		this.zone.run(() => {
	// 			this.shrinkNav = true;
	// 		});
	// 	} else {
	// 		this.zone.run(() => {
	// 			this.shrinkNav = false;
	// 		});
	// 	}
	// }

	constructor(private zone: NgZone) {}

	ngOnInit() {}
}

export interface NavLinks {
	link: string;
	label: string;
}
