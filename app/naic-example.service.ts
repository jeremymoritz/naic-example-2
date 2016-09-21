import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

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
}