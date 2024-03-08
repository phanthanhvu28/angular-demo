import { Component, Injector, Optional } from '@angular/core';
import { NvMessageService } from '@common-components/base-modal-message/services/nv-message.service';
import { VcNotificationService } from '@shared/services';
import { Observable, ReplaySubject } from 'rxjs';
import { BaseContractTabService } from '../services';
import { NvSafeAny } from '@models/base/data.interface';

@Component({
  template: ''
})
export abstract class AbsBaseContractComponent<T = NvSafeAny> {
  protected destroy$: ReplaySubject<boolean> = new ReplaySubject(1);
  public filler$?: Observable<Object>;
  loadingDelete$: Observable<boolean>;
  loadingApproval$: Observable<boolean>;
  loadingSubmit$: Observable<boolean>;
  loadingReject$: Observable<boolean>;
  loadingRecall$: Observable<boolean>;

  protected vcNotificationService: VcNotificationService;
  protected nvMessageService: NvMessageService;

  constructor(
    @Optional() injector?: Injector,
    @Optional() protected service?: BaseContractTabService<T>
  ) {
    this.vcNotificationService = injector?.get(VcNotificationService);
    this.nvMessageService = injector?.get(NvMessageService);
    this.initial();
  }

  private initial(): void {
    if (!this.service) {
      return;
    }
    this.loadingDelete$ = this.service.loadingDelete$;
    this.loadingApproval$ = this.service.loadingApproval$;
    this.loadingSubmit$ = this.service.loadingSubmit$;
    this.loadingReject$ = this.service.loadingReject$;
    this.loadingRecall$ = this.service.loadingRecall$;
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
