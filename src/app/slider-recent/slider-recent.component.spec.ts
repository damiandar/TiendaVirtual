import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRecentComponent } from './slider-recent.component';

describe('SliderRecentComponent', () => {
  let component: SliderRecentComponent;
  let fixture: ComponentFixture<SliderRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
