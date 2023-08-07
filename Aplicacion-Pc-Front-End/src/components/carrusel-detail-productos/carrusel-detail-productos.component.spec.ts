import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDetailProductosComponent } from './carrusel-detail-productos.component';

describe('CarruselDetailProductosComponent', () => {
  let component: CarruselDetailProductosComponent;
  let fixture: ComponentFixture<CarruselDetailProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselDetailProductosComponent]
    });
    fixture = TestBed.createComponent(CarruselDetailProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
