import { trigger, state, animate, transition, style, keyframes, animation,
	useAnimation, query, stagger, group, animateChild } from '@angular/animations';

import { bounceInLeftAnimation } from '../../animations/animations';

export const navbarAnimations = trigger('navbarAnimations', [

	state('shrink', style({
		backgroundColor: '#00796B',
		boxShadow: '0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12)',
	})),

	transition('* => shrink', [
		group([
			query('.nav', animate('50s ease-in-out'), { optional: true }),
		]),

	]),

	transition('void => *', [

		group([
			query('li.mat-tab-link', style({ opacity: 0 }), { optional: true }),

			query('li.mat-tab-link',
				stagger(300, useAnimation(bounceInLeftAnimation)), { optional: true }
			),
		]),
	]),
]);
