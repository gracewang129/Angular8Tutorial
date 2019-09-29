import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTopfourComponent } from './customer-topfour.component';

describe('CustomerTopfourComponent', () => {
  let component: CustomerTopfourComponent;
  let fixture: ComponentFixture<CustomerTopfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTopfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTopfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
