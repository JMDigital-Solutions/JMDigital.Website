import { navbarAnimations } from './navbar.component.animations';
import { Component, OnInit, Output, EventEmitter, NgZone, Inject, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { NavItemModel } from '../../models/NavItemModel';

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

	tabLinks: NavItemModel[] = [
		{ Link: 'home', Label: 'Inicio' },
		{ Link: 'acerca', Label: 'Conocé Más' },
		{ Link: 'contacto',	Label: 'Contacto' }
	];

	isCollapsed = true;
	shrinkNav = false;

	@HostListener('window:scroll', [])
	onWindowScroll() {
		if (window.pageYOffset > 100) {
			this.zone.run(() => {
				this.shrinkNav = true;
			});
		} else {
			this.zone.run(() => {
				this.shrinkNav = false;
			});
		}
	}

	constructor(private zone: NgZone) {}

	ngOnInit() {}
}
