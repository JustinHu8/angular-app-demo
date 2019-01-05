import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  public chartType = 'line';

  public chartData: Array<any> = [{
    label: 'My First dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 4, 4, 0.5)',
    ],
    borderColor: [
      'rgba(255, 4, 4, 0.9)',
    ],
    borderWidth: 2
  },
  {
    label: 'My Second dataset',
    data: [28, 48, 40, 19, 86, 27, 90],
    backgroundColor: [
      'rgba(0, 137, 132, .2)',
    ],
    borderColor: [
      'rgba(0, 10, 130, .7)',
    ],
    borderWidth: 2
  }];

  public chartLabels: Array<any> = ['01', '02', '03', '04', '05', '06', '07'];

  public chartColors: Array<any> = [{
    label: 'With Smashed Avo',
    data: [30, 59, 56, 60, 70, 80, 81],
    backgroundColor: [
      'rgba(255, 4, 4, 0.5)',
    ],
    borderColor: [
      'rgba(255, 4, 4, 0.9)',
    ],
    borderWidth: 2
  },
  {
    label: 'My Second dataset',
    data: [28, 48, 40, 19, 86, 27, 90],
    backgroundColor: [
      'rgba(0, 137, 132, .2)',
    ],
    borderColor: [
      'rgba(0, 10, 130, .7)',
    ],
    borderWidth: 2
  }];

  public chartOptions: any = {
      responsive: true
  };

  constructor() { }

  ngOnInit() {
  }

}
