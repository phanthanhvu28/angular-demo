import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroDrawerComponent } from './zorro-drawer.component';

describe('ZorroDrawerComponent', () => {
  let component: ZorroDrawerComponent;
  let fixture: ComponentFixture<ZorroDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZorroDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
