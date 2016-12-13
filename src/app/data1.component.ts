import {Component, OnInit} from '@angular/core';

import {NaicExampleService} from './naic-example.service';
import * as _ from 'lodash';

@Component({
  selector: 'ne2-data1',
  templateUrl: './data1.component.html',
  styles: [`
    img {
      margin: auto;
      display: block
    }
  `]
})
export class Data1Component implements OnInit {
  controllerVariable: string = 'Available only here';
  _: any = _; //  use LoDash in the view
  panelStyles: any[];

  constructor(private nes: NaicExampleService) {}

  ngOnInit(): void {
    this.panelStyles = _.map(this.nes.styles, 'code');
  }
}