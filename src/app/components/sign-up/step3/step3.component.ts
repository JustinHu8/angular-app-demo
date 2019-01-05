import { Component, OnInit } from '@angular/core';
import { CreditRatingServiceService } from './../../../services/credit-rating-service.service';
import { TransactionsService } from './../../../services/transactions.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  router: Router;
  transactions: any;
  creditScoreResult = {};

  selectedBank: string;

  myControl = new FormControl();
  options: string[] = ['HSBC', 'Common Wealth', 'ANZ', 'NAB', 'Westpac'];
  filteredOptions: Observable<string[]>;

  showLoadingScreen: boolean;

  constructor(
    private transactionsService: TransactionsService,
    private creditRatingService: CreditRatingServiceService,
    router: Router
  ) {
    this.router = router;
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  authorizeAccessToTransactions() {
    // tslint:disable-next-line:max-line-length
    this.transactionsService.getTransactions('https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/transactions').subscribe((response) => {
      this.transactions = response;

    }, error => {
      console.log('error ' + error.error);
    });
  }

  // Check if we have customer's agreement
  // if we have the customer's agreement
  // we send request with customer's financial details
  // to credit scoring API
  retrieveCreditRating() {

    this.creditRatingService.getCreditScore('https://myhelloworld-219901.appspot.com/rating?id=mil1').subscribe((response) => {
      this.creditScoreResult = response;
      // this.creditScoreResult = {
      //   'b': 'b'
      // };
      this.showLoadingScreen = true;
      setTimeout(() => {
        this.router.navigateByUrl('/step4');
      }, 4000);

    }, error => {
      console.log('error ' + error.error);
      this.router.navigateByUrl('/step4');
    });
  }

}
