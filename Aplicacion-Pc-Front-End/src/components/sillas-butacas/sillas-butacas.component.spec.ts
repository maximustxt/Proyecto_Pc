import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillasButacasComponent } from './sillas-butacas.component';

describe('SillasButacasComponent', () => {
  let component: SillasButacasComponent;
  let fixture: ComponentFixture<SillasButacasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SillasButacasComponent]
    });
    fixture = TestBed.createComponent(SillasButacasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
