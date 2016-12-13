import {Component} from '@angular/core';

@Component({
	selector: 'ne2-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {
	title: string = 'NAIC Angular 2 Template App';
	angularVersion: number = 2;
}
