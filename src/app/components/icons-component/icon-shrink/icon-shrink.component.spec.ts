import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconShrinkComponent } from './icon-shrink.component';

describe('IconShrinkComponent', () => {
  let component: IconShrinkComponent;
  let fixture: ComponentFixture<IconShrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconShrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconShrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
