import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacasDeVideoComponent } from './placas-de-video.component';

describe('PlacasDeVideoComponent', () => {
  let component: PlacasDeVideoComponent;
  let fixture: ComponentFixture<PlacasDeVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacasDeVideoComponent]
    });
    fixture = TestBed.createComponent(PlacasDeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
