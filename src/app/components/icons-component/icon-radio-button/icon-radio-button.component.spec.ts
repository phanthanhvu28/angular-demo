import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRadioButtonComponent } from './icon-radio-button.component';

describe('IconRadioButtonComponent', () => {
  let component: IconRadioButtonComponent;
  let fixture: ComponentFixture<IconRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconRadioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
