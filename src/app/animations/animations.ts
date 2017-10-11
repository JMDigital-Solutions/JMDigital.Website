import { trigger, state, animate, transition, style, keyframes, animation, useAnimation, query, stagger } from '@angular/animations';

export const bounceInLeftAnimation = animation(
	animate('2.3s cubic-bezier(0.215, 0.610, 0.355, 1.000)', keyframes([
		style({
			offset: 0,
			opacity: 0,
			transform: 'translateX(-100%)'
		}),
		style({
			offset: .6,
			opacity: 1,
			transform: 'translateX(25%)'
		}),
		style({
			offset: .75,
			opacity: 1,
			transform: 'translateX(-10%)'
		}),
		style({
			offset: .95,
			transform: 'translateX(1%)'
		}),
	]))
);
