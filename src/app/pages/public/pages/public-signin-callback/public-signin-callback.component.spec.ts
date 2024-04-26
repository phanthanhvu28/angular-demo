import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSigninCallbackComponent } from './public-signin-callback.component';

describe('PublicSigninCallbackComponent', () => {
  let component: PublicSigninCallbackComponent;
  let fixture: ComponentFixture<PublicSigninCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicSigninCallbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicSigninCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
