import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostingMainComponent } from './costing-main.component';

describe('CostingMainComponent', () => {
  let component: CostingMainComponent;
  let fixture: ComponentFixture<CostingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostingMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
