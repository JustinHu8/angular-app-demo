import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../../animations/slideInAnimation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class DashBoardComponent implements OnInit {

  constructor(private Activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
