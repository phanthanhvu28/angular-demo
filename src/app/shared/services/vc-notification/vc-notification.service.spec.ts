import { TestBed } from '@angular/core/testing';

import { VcNotificationService } from './vc-notification.service';

describe('VcNotificationService', () => {
  let service: VcNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
