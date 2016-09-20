import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from './hero';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HomeComponent} from './home.component';

const naicViews: any[] = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}, {
		path: 'heroes',
		component: HeroesComponent
	}, {
		path: 'dashboard',
		component: DashboardComponent
	}, {
		path: 'detail/:id',
		component: HeroDetailComponent
	}, {
		path: 'home',
		component: HomeComponent
	}
];
const supervisors: any[] = [
	{name: 'Alvin', department: 'HR'},
	{name: 'Simon', department: 'Engineering'},
	{name: 'Theodore', department: 'Accounts Payable'}
];

@Injectable()
export class NaicExampleService {
	styles: any[];
	views: any;
	content: any;
	supervisor: any;

	private heroesUrl = 'app/heroes';	//	URL to web api
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) {
		this.styles = [
			{code: 'default', icon: 'magnet'},
			{code: 'primary', icon: 'key'},
			{code: 'success', icon: 'check'},
			{code: 'info', icon: 'info-circle'},
			{code: 'warning', icon: 'exclamation-triangle'},
			{code: 'danger', icon: 'trash-o'}
		];
		this.views = naicViews;
		this.content = null;
		// this.supervisor = null;
		this.supervisor = _.sample(supervisors);

		//	add titles to existing styles
		this.styles = _.map(this.styles, (style: any) => _.merge(style, {text: _.capitalize(style.code)}));
	}
}