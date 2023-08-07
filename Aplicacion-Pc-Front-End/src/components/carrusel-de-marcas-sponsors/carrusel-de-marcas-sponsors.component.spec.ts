import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDeMarcasSponsorsComponent } from './carrusel-de-marcas-sponsors.component';

describe('CarruselDeMarcasSponsorsComponent', () => {
  let component: CarruselDeMarcasSponsorsComponent;
  let fixture: ComponentFixture<CarruselDeMarcasSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselDeMarcasSponsorsComponent]
    });
    fixture = TestBed.createComponent(CarruselDeMarcasSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
