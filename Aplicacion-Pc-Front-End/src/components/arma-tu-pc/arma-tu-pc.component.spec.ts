import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmaTuPcComponent } from './arma-tu-pc.component';

describe('ArmaTuPcComponent', () => {
  let component: ArmaTuPcComponent;
  let fixture: ComponentFixture<ArmaTuPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmaTuPcComponent]
    });
    fixture = TestBed.createComponent(ArmaTuPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
