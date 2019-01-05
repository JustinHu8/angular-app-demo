import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step12',
  templateUrl: './step12.component.html',
  styleUrls: ['./step12.component.scss']
})
export class Step12Component implements OnInit {
  selectedCba: boolean;
  selectedAnz: boolean;
  selectedWestpac: boolean;
  selectedNab: boolean;
  selectedHsbc: boolean;

  constructor() { }

  ngOnInit() {
  }

  chooseBank(bank: string) {
    switch (bank) {
      case 'cba':
          this.selectedCba = !this.selectedCba;
          break;
      case 'anz':
          this.selectedAnz = !this.selectedAnz;
          break;
      case 'westpac':
          this.selectedWestpac = !this.selectedWestpac;
          break;
      case 'nab':
          this.selectedNab = !this.selectedNab;
          break;
      case 'hsbc':
          this.selectedHsbc = !this.selectedHsbc;
          break;
  }
  }

}
