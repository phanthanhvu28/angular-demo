import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroFormComponent } from './zorro-form.component';

describe('ZorroFormComponent', () => {
  let component: ZorroFormComponent;
  let fixture: ComponentFixture<ZorroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZorroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
