import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArmarPcComponent } from './info-armar-pc.component';

describe('InfoArmarPcComponent', () => {
  let component: InfoArmarPcComponent;
  let fixture: ComponentFixture<InfoArmarPcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoArmarPcComponent]
    });
    fixture = TestBed.createComponent(InfoArmarPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
