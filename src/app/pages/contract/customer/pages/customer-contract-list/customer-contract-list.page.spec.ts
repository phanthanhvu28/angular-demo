import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContractListPage } from './customer-contract-list.page';

describe('CustomerContractListPage', () => {
  let component: CustomerContractListPage;
  let fixture: ComponentFixture<CustomerContractListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerContractListPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerContractListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
