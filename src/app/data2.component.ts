import {Component, OnInit} from '@angular/core';

import {NaicExampleService} from './naic-example.service';
import * as _ from 'lodash';

@Component({
	selector: 'ne2-data2',
	templateUrl: './data2.component.html'
})
export class Data2Component implements OnInit {
	alertObjects: any[];

	constructor(private nes: NaicExampleService) {}

	ngOnInit(): void {
		this.alertObjects = _.map(
			_.without(_.map(this.nes.styles, 'code'), 'default', 'primary'), (style: any) => {
				var header = '';
				var message = '';

				//	one of few good cases for switch/case (IMO)
				switch(style) {
					case 'success':
						header = 'Congratulations';
						message = 'You have succeeded in what you were trying to do.';
						break;
					case 'warning':
						header = 'Warning';
						message = 'Reading this alert may be hazardous to your health.';
						break;
					case 'danger':
						header = 'Danger';
						message = 'Something went wrong.';
						break;
					case 'info':
						/* falls through */
					default:
						header = 'Information';
						message = `This alert has information, but it's not super important.`;
				}

				return {
					style: style,
					header: header,
					message: message
				};
			}
		);
	}

	sortedAlertObjects(reverse: boolean = false): any[] {
		return _.orderBy(this.alertObjects, 'style', reverse ? 'desc' : 'asc');
	}
}
