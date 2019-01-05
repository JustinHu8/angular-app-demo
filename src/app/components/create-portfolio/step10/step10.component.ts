import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.scss']
})
export class Step10Component implements OnInit {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 6000;
  min = 1000;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 1200;
  vertical = false;

  constructor() { }

  ngOnInit() {
  }

}
