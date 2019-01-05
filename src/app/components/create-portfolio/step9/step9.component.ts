import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.scss']
})
export class Step9Component implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 30;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 70;
  vertical = false;

  constructor() { }

  ngOnInit() {
  }

}
