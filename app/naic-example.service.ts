import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {State} from './state';

let supervisors: any[] = [
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
	serviceVariable: string = '';

	private statesUrl = 'app/statesDb';	//	URL to web api
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
		this.views = [];
		this.content = null;
		// this.supervisor = null;
		this.supervisor = _.sample(supervisors);

		//	add titles to existing styles
		this.styles = _.map(this.styles, (style: any) => _.merge(style, {text: _.capitalize(style.code)}));
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);

		return Promise.reject(error.message || error);
	}

	getStates(): Promise<State[]> {
		return this.http.get(this.statesUrl)
			.toPromise()
			.then(response => response.json().data as State[])
			.catch(this.handleError);
	}
}