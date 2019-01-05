import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  ids = [
    {value: 'licence', viewValue: `Driver's licence`},
    {value: 'passport', viewValue: 'Passport'}
  ];

  states = [
    {value: 'NSW', viewValue: `NSW`},
    {value: 'SA', viewValue: 'SA'},
    {value: 'WA', viewValue: `WA`},
    {value: 'ACT', viewValue: 'ACT'},
    {value: 'NT', viewValue: 'NT'},
    {value: 'TAS', viewValue: `TAS`},
    {value: 'VIC', viewValue: 'VIC'},
    {value: 'QLD', viewValue: 'QLD'}
  ];

  selectedID: string;

  selectedState: string;

  constructor() { }

  ngOnInit() {
  }

}
