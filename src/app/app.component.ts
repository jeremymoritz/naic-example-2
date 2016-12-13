import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NaicExampleService} from './naic-example.service';

import * as _ from 'lodash';

@Component({
	moduleId: module.id,
	selector: 'ne2-app',
	template: `
		<ne2-nav></ne2-nav>
		<div class="container">
			<ne2-header></ne2-header>
			<router-outlet></router-outlet>
		</div>
	`
})
export class AppComponent {
	constructor(private nes: NaicExampleService) {
		//	changing this service value (will persist to other components);
		_.assign(nes, {serviceVariable: 'This is a service variable, available across multiple scopes through dependency injection'});
	}
}
