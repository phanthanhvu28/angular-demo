import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorroTableComponent } from './zorro-table.component';

describe('ZorroTableComponent', () => {
  let component: ZorroTableComponent;
  let fixture: ComponentFixture<ZorroTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorroTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZorroTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
