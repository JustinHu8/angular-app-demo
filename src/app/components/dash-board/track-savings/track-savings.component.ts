import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './../../../animations/slideInAnimation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track-savings',
  templateUrl: './track-savings.component.html',
  styleUrls: ['./track-savings.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class TrackSavingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
