import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step7',
  templateUrl: './step7.component.html',
  styleUrls: ['./step7.component.scss']
})
export class Step7Component implements OnInit {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }

  chooseCategory() {
    this.router.navigateByUrl('/step8');
  }
}
