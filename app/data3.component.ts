import {Component, OnInit} from '@angular/core';

import {NaicExampleService} from './naic-example.service';

@Component({
	moduleId: module.id,
	selector: 'ne2-data3',
	templateUrl: './data3.component.html'
})
export class Data3Component implements OnInit {
	buttons: any[];
	buttonStates: any[];
	thisForm: any;
	usStateOptions: any[];

	constructor(private nes: NaicExampleService) {
			this.buttons = _.shuffle(this.nes.styles);
			//	create an object with the button codes set as undefined (toggle active state in view)
			this.buttonStates = _.zipObject(_.map(this.buttons, 'code'));	//	returns {primary: undefined, success: undefined, etc...}
			this.thisForm = {
				name: '',
				address: '',
				city: '',
				state: '',
				postalCode: ''	//	postalCode may be better than zipCode because Canada, Australia, etc. (on the other hand... maybe that doesn't matter here)
			};
			this.usStateOptions = [
				{name: 'Kansas', abbreviation: 'KS'},
				{name: 'Missouri', abbreviation: 'MO'}
			];
	}

	ngOnInit(): void {
		//	FIXME: update this to use NAIC assets instead of github
		// $http({
		// 	method: 'GET',
		// 	url: 'https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json'
		// }).then((response: any) => {
		// 	this.usStateOptions = response.data;
		// }, (response: any) => {
		// 	console.log('Error getting States! ' + response);
		// });
	}
}

// app.component('data3', {
// 	controller: [
// 		'$http',
// 		'NaicExampleService',	//	factory allows us to share variables, functions, etc. among sibling controllers
// 		function data3Controller($http: any, nes: any) {
// 		}
// 	]
// });
