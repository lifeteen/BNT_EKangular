import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetalComponent } from './products-detal.component';

describe('ProductsDetalComponent', () => {
  let component: ProductsDetalComponent;
  let fixture: ComponentFixture<ProductsDetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
