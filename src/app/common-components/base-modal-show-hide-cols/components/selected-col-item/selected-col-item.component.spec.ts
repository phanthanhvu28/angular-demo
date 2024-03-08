import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedColItemComponent } from './selected-col-item.component';

describe('SelectedColItemComponent', () => {
  let component: SelectedColItemComponent;
  let fixture: ComponentFixture<SelectedColItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedColItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedColItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
