import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSignoutCallbackComponent } from './public-signout-callback.component';

describe('PublicSignoutCallbackComponent', () => {
  let component: PublicSignoutCallbackComponent;
  let fixture: ComponentFixture<PublicSignoutCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSignoutCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSignoutCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
