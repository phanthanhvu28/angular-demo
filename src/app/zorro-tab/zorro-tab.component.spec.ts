import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroTabComponent } from './zorro-tab.component';

describe('ZorroTabComponent', () => {
  let component: ZorroTabComponent;
  let fixture: ComponentFixture<ZorroTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZorroTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
