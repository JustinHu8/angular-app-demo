import { Component, OnInit } from '@angular/core';
import { CreditRatingServiceService } from './../../../../services/credit-rating-service.service';
import { TransactionsService } from './../../../../services/transactions.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  creditScoreResult = {};
  transactions: any;

  public chartType = 'doughnut';

  public chartData: Array<any> = [100000, 25000];

  public chartLabels: Array<any> = ['To go', 'You already saved'];

  public chartColors: Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    hoverBorderWidth: 0,
    borderWidth: 1,
    borderColor: ['#ef241c', '#ef241c'],
    // tslint:disable-next-line:max-line-length
    backgroundColor: ['rgba(255, 4, 4, 0.336)', 'rgba(255, 4, 4, 0.9)'],
    // tslint:disable-next-line:max-line-length
    hoverBackgroundColor: ['rgba(255, 4, 4, 0.336)', 'rgba(255, 4, 4, 0.892)']
  }];

  public chartOptions: any = {
      responsive: true
  };

  filteredTransactions = [{
    'date': '30 Oct 2018, 7.45 PM',
    'description': 'TRANSFER FROM SMASHED AVO FUND',
    'amount': '+$1000.00'
  },
  {
    'date': '30 Sep 2018, 8.22 PM',
    'description': 'TRANSFER FROM SMASHED AVO FUND',
    'amount': '+$1000.00'
  },
  {
    'date': '28 Aug 2018, 9.24 PM',
    'description': 'TRANSFER FROM SMASHED AVO FUND',
    'amount': '+$2000.00'
  },
  {
    'date': '29 Jul 2018, 3.22 PM',
    'description': 'TRANSFER FROM SMASHED AVO FUND',
    'amount': '+$1000.00'
  },
  ];

  constructor(
    private transactionsService: TransactionsService,
    private creditRatingService: CreditRatingServiceService
  ) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.transactionsService.getTransactions('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/transactions').subscribe((response) => {

      if (response.Data && response.Data.Transaction) {
        this.transactions = response.Data.Transaction;
        this.filteredTransactions = this.getFilteredTransactions(this.transactions);
      }

      this.creditRatingService.getCreditScore('https://myhelloworld-219901.appspot.com/transactions?id=mil1').subscribe((response) => {
        this.creditScoreResult = response;

      }, error => {
        console.log('error ' + error.error);
      });

    }, error => {
      console.log('error ' + error.error);
    });

  }

  getFilteredTransactions(transactions) {

    const filteredTransactions = [];

    _.forEach(transactions, (transaction) => {
      if (transaction.CreditDebitIndicator === 'Debit' && transaction.Status !== 'Rejected') {
        filteredTransactions.push({
          amount: transaction.Amount.Amount,
          description: transaction.MerchantDetails.MerchantName,
          date: transaction.ValueDateTime
        });
      }
    });

    return filteredTransactions;

  }

}
