import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTrialContractListPage } from './customer-trial-contract-list.page';

describe('CustomerTrialContractListComponent', () => {
  let component: CustomerTrialContractListPage;
  let fixture: ComponentFixture<CustomerTrialContractListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTrialContractListPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTrialContractListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
