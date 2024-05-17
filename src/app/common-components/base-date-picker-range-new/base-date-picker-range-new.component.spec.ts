import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDatePickerRangeNewComponent } from './base-date-picker-range-new.component';

describe('BaseDatePickerRangeNewComponent', () => {
  let component: BaseDatePickerRangeNewComponent;
  let fixture: ComponentFixture<BaseDatePickerRangeNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDatePickerRangeNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseDatePickerRangeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
