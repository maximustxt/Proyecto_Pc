import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadeonRX7900Component } from './radeon-rx7900.component';

describe('RadeonRX7900Component', () => {
  let component: RadeonRX7900Component;
  let fixture: ComponentFixture<RadeonRX7900Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadeonRX7900Component]
    });
    fixture = TestBed.createComponent(RadeonRX7900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
