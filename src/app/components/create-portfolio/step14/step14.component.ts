import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from './../../../services/transactions.service';

@Component({
  selector: 'app-step14',
  templateUrl: './step14.component.html',
  styleUrls: ['./step14.component.scss']
})
export class Step14Component implements OnInit {
  showLoadingScreen: boolean;
  router: Router;
  transactions: any;

  constructor(router: Router,
    private transactionsService: TransactionsService) {
    this.router = router;
  }

  ngOnInit() {
  }

  completeApplication() {

    this.showLoadingScreen = true;
      // setTimeout(() => {
      //   this.router.navigateByUrl('/dash-board/track-savings/overview');
      // }, 4000);

    // tslint:disable-next-line:max-line-length
    this.transactionsService.getTransactions('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/transactions').subscribe((response) => {
      this.transactions = response;
      this.router.navigateByUrl('/dash-board/track-savings/overview');
    }, error => {
      this.router.navigateByUrl('/dash-board/track-savings/overview');
      console.log('error ' + error.error);
    });

  }

}
