import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAnnexListPage } from './customer-annex-list.page';

describe('CustomerAnnexListComponent', () => {
  let component: CustomerAnnexListPage;
  let fixture: ComponentFixture<CustomerAnnexListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAnnexListPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerAnnexListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
