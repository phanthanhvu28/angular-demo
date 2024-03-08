import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalShowHideColsComponent } from './base-modal-show-hide-cols.component';

describe('BaseModalShowHideColsComponent', () => {
  let component: BaseModalShowHideColsComponent;
  let fixture: ComponentFixture<BaseModalShowHideColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseModalShowHideColsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseModalShowHideColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
