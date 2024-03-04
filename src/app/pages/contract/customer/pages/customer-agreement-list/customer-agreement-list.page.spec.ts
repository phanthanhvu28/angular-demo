import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAgreementListPage } from './customer-agreement-list.page';

describe('CustomerAgreementListpage', () => {
  let component: CustomerAgreementListPage;
  let fixture: ComponentFixture<CustomerAgreementListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAgreementListPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAgreementListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
