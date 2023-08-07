import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebooksAeroComponent } from './notebooks-aero.component';

describe('NotebooksAeroComponent', () => {
  let component: NotebooksAeroComponent;
  let fixture: ComponentFixture<NotebooksAeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotebooksAeroComponent]
    });
    fixture = TestBed.createComponent(NotebooksAeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
