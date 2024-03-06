import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCurrencyContractComponent } from './icon-currency-contract.component';

describe('IconCurrencyContractComponent', () => {
  let component: IconCurrencyContractComponent;
  let fixture: ComponentFixture<IconCurrencyContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCurrencyContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconCurrencyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
