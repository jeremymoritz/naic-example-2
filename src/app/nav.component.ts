import {Component} from '@angular/core';
import * as $ from 'jquery';

@Component({
	moduleId: module.id,
	selector: 'ne2-nav',
	templateUrl: './nav.component.html'
})
export class NavComponent {
	navLinks: any[];

	constructor() {
		this.navLinks = [
			{
				path: '/home',
				display: 'Home',
				icon: 'home'
			}, {
				path: '/data1',
				display: 'Data',
				icon: 'magnet'
			}, {
				path: '/data2',
				display: 'More Stuff',
				icon: 'bar-chart-o'
			}, {
				path: '/data3',
				display: 'Additional Content',
				icon: 'flag'
			}
		];
	}

	collapseNavbar(): void {
		$('#naic-navbar-collapse.in').closest('.navbar').find('.navbar-toggle').click();
	}
}