import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';

@Component({
	moduleId: module.id,
	selector: 'ne2-app',
	template: `
		<h1>{{title}}</h1>
		<p>Using Bootstrap and AngularJS {{angularVersion}}</p>
		<nav>
			<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
			<a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title: string = 'NAIC Angular 2 Template App';
	angularVersion: number = 2;
}
