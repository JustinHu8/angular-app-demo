import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step11',
  templateUrl: './step11.component.html',
  styleUrls: ['./step11.component.scss']
})
export class Step11Component implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 20;
  vertical = false;

  repaymentPeriods = [
    {value: '1 Year', viewValue: `1 Year`},
    {value: '2 Years', viewValue: `2 Years`},
    {value: '3 Years', viewValue: `3 Years`},
    {value: '4 Years', viewValue: `4 Years`},
    {value: '5 Years', viewValue: `5 Years`},
  ];

  selectedID: string;

  constructor() { }

  ngOnInit() {
  }

}
