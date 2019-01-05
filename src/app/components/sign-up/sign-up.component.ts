import { Component, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements AfterViewInit {
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  };
  carouselItems = [
    { title : 'NO MORE FOMO WITH THE SMASHED AVO FUND',
      subTitle : 'Avo Fund aims to help you make and save money for that home loan deposit you need.',
      img : ''},
    { title : 'Add avocados on your toast, and still afford a property',
    subTitle : 'Avo Fund aims to help you make and save money for that home loan deposit you need.',
    img : ''},
    { title : 'Add eggs on your smashed avocado toast to maximise your savings',
    subTitle : 'Avo Fund aims to help you make and save money for that home loan deposit you need.',
    img : ''},
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
