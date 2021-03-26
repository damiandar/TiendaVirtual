import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderReviewComponent } from './slider-review.component';

describe('SliderReviewComponent', () => {
  let component: SliderReviewComponent;
  let fixture: ComponentFixture<SliderReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
