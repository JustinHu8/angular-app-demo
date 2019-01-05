import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './../../services/transactions.service';

@Component({
  selector: 'app-dev-test',
  templateUrl: './dev-test.component.html',
  styleUrls: ['./dev-test.component.scss']
})
export class DevTestComponent implements OnInit {
  transactions: any;
  transactionsTest1: any;
  transactionsTest2: any;

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.transactionsService.getTransactions('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/transactions').subscribe((response) => {
      this.transactions = response;

    }, error => {
      console.log('error ' + error.error);
    });
  }

}

