import {Component} from '@angular/core';

import {NaicExampleService} from './naic-example.service';
import * as moment from 'moment';

@Component({
  selector: 'ne2-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  momentStamp: string;
  clickCounter: any;

  constructor(private nes: NaicExampleService) {
    this.momentStamp = moment().format('MMM DD, YYYY');
    this.clickCounter = {
      clicks: 0,
      increment: () => this.clickCounter.clicks++
    }
  }
}