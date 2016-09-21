import {Component, OnInit} from '@angular/core';

import {State} from './state';
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
	usStateOptions: State[];

	constructor(private nes: NaicExampleService) {}

	loadStates(): void {
		this.nes.getStates().then(returnedStates => this.usStateOptions = returnedStates);
	}

	ngOnInit(): void {
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
		this.loadStates();
	}
}
