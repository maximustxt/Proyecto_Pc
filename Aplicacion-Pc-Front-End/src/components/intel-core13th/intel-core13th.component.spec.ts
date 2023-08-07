import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelCore13thComponent } from './intel-core13th.component';

describe('IntelCore13thComponent', () => {
  let component: IntelCore13thComponent;
  let fixture: ComponentFixture<IntelCore13thComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntelCore13thComponent]
    });
    fixture = TestBed.createComponent(IntelCore13thComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
