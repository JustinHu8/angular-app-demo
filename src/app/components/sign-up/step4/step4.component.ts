import { Component, OnInit } from '@angular/core';
import { CreditRatingServiceService } from './../../../services/credit-rating-service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {
  router: Router;
  creditScoreResult = {};
  transactionSummary: any;

  selectedBank: string;

  public chartType = 'pie';

  public chartData: Array<any> = [100, 50, 100, 40, 120];

  public chartLabels: Array<any> = ['Groceries', 'Transport', 'Fun', 'You can afford', 'Rent'];

  public chartColors: Array<any> = [{
      hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
      hoverBorderWidth: 0,
      borderWidth: 1,
      borderColor: ['#ef241c', '#ef241c', '#ef241c', '#ef241c', '#ef241c'],
      // tslint:disable-next-line:max-line-length
      backgroundColor: ['rgba(255, 4, 4, 0.336)', 'rgba(255, 4, 4, 0.562)', 'rgba(255, 4, 4, 0.764)', 'rgba(255, 4, 4, 0.9)', 'rgba(255, 4, 4, 0.4)'],
      // tslint:disable-next-line:max-line-length
      hoverBackgroundColor: ['rgba(255, 4, 4, 0.336)', 'rgba(255, 4, 4, 0.562)', 'rgba(255, 4, 4, 0.764)', 'rgba(255, 4, 4, 0.9)', 'rgba(255, 4, 4, 0.4)']
  }];

  public chartOptions: any = {
      responsive: true
  };

  constructor(
    private creditRatingService: CreditRatingServiceService,
    router: Router
  ) { }

  ngOnInit() {
    this.creditRatingService.getCreditScore('https://myhelloworld-219901.appspot.com/transaction_summary?id=mil1').subscribe((response) => {
      this.transactionSummary = response;

      this.chartLabels = Object.keys(this.transactionSummary);
      this.chartData = Object.values(this.transactionSummary);

    }, error => {
      console.log('error ' + error.error);

    });
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
