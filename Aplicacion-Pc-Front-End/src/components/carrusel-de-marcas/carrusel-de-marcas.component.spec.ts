import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDeMarcasComponent } from './carrusel-de-marcas.component';

describe('CarruselDeMarcasComponent', () => {
  let component: CarruselDeMarcasComponent;
  let fixture: ComponentFixture<CarruselDeMarcasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarruselDeMarcasComponent]
    });
    fixture = TestBed.createComponent(CarruselDeMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
