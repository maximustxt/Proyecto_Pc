import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosJBLComponent } from './productos-jbl.component';

describe('ProductosJBLComponent', () => {
  let component: ProductosJBLComponent;
  let fixture: ComponentFixture<ProductosJBLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosJBLComponent]
    });
    fixture = TestBed.createComponent(ProductosJBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
