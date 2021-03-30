import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCategoriasComponent } from './banner-categorias.component';

describe('BannerCategoriasComponent', () => {
  let component: BannerCategoriasComponent;
  let fixture: ComponentFixture<BannerCategoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCategoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
