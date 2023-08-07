import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeforceRTX40Component } from './geforce-rtx40.component';

describe('GeforceRTX40Component', () => {
  let component: GeforceRTX40Component;
  let fixture: ComponentFixture<GeforceRTX40Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeforceRTX40Component]
    });
    fixture = TestBed.createComponent(GeforceRTX40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
