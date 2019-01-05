import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSavingsComponent } from './track-savings.component';

describe('TrackSavingsComponent', () => {
  let component: TrackSavingsComponent;
  let fixture: ComponentFixture<TrackSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
