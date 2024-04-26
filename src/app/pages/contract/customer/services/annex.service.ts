import { Injectable, Injector } from '@angular/core';
import { VcNotificationService } from '@shared/services';
import { isNil } from 'ng-zorro-antd/core/util';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  takeUntil,
  throwError
} from 'rxjs';
import { ContractResponse, ResultDataAction } from '../../models';
import { BaseContractTabService } from '../../services';
import { ApiAnnex } from '../apis';
import { AnnexData, BillingData } from '../models';
import {
  DataFilterAnnex,
  DataFilterAnnexSelectCustomer,
  FilterUpload
} from '../models/filter-upload.model';
//import { ANNEX_LIST_COLS } from '../pages/customer-annex-list/table-annex-list.const';
import { ERROR_MESSAGE } from '../../const';
import { AuthService } from 'src/app/pages/auth/service';

@Injectable({
  providedIn: 'root'
})
export class AnnexService extends BaseContractTabService<any> {
  private subjectDataDetail = new BehaviorSubject<ContractResponse<AnnexData>>(
    null
  );

  dataDetail$: Observable<ContractResponse<AnnexData>> =
    this.subjectDataDetail.asObservable();
  //filter
  private subjectFilterSelection = new BehaviorSubject<
    FilterUpload<DataFilterAnnex>
  >(null);

  filterSelection$: Observable<FilterUpload<DataFilterAnnex>> =
    this.subjectFilterSelection.asObservable();

  private subjectFilterSelectedCustomer = new BehaviorSubject<
    FilterUpload<DataFilterAnnexSelectCustomer>
  >(null);
  filterSelectedCustomer$: Observable<
    FilterUpload<DataFilterAnnexSelectCustomer>
  > = this.subjectFilterSelectedCustomer.asObservable();

  private subjectDataBilling = new BehaviorSubject<Array<BillingData>>(null);
  dataBilling$: Observable<Array<BillingData>> =
    this.subjectDataBilling.asObservable();
  //
  private subjectCreateEditAnnex = new BehaviorSubject<
    ContractResponse<AnnexData>
  >(null);
  createEditAnnex$: Observable<ContractResponse<AnnexData>> =
    this.subjectCreateEditAnnex.asObservable();
  // Create-edit

  //
  constructor(
    injector: Injector,
    private api: ApiAnnex,
    authService: AuthService,
    private vcNotificationService: VcNotificationService
  ) {
    super(injector);
    //this.setDataItemCells(ANNEX_LIST_COLS);
  }

  setDataDetail(value): void {
    this.subjectDataDetail.next(value);
  }
  setChangeCreateEditAnnex(value): void {
    this.subjectCreateEditAnnex.next(value);
  }
  setDataBilling(value): void {
    this.subjectDataBilling.next(value);
  }
  setFilterSelection(value: FilterUpload<DataFilterAnnex>): void {
    this.subjectFilterSelection.next(value);
  }
  setFilterSelectedCustomer(
    value: FilterUpload<DataFilterAnnexSelectCustomer>
  ): void {
    this.subjectFilterSelectedCustomer.next(value);
  }
  getTableData(): void {
    if (!this._subjectPinnedFilter.value) {
      this.api
        .getUserPin()
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => this.getList())
        )
        .subscribe((res) => {
          const pinnedValue = res.data || 'All';
          this.setItemActivateFilter(pinnedValue);
          this.setPinnedFilter(pinnedValue);
        });
      return;
    }
    this.getList();
  }
  getList(): void {
    this.setLoading(true);
    const payload = this.getPayload();
    payload.filters = [...this.getActivateFilterPayload(), ...payload.filters];
    this.api
      .getAll(payload)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res) => {
        this.setDataItems(res.items);
        this.setTotalItem(res.totalItems);
      });
  }
  getFillerUpload(): void {
    this.api
      .getFillerUpload()
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.setFilterSelection(res);
      });
  }
  getFillerSelectedCustomer(
    code: string,
    annexCode?: string,
    isEdit?: boolean
  ): void {
    if (isEdit) {
      this.api
        .getFillerSelectCustomerEdit(code, annexCode)
        .pipe(
          catchError((err: ResultDataAction) => {
            return throwError(() => {
              if (err.isError) {
                //this.vcNotificationService.error('Error', err.errorMessage);
              }
            });
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((res) => {
          this.setFilterSelectedCustomer(res);
        });
    } else {
      this.api
        .getFillerSelectCustomer(code)
        .pipe(
          catchError((err: ResultDataAction) => {
            return throwError(() => {
              if (err.isError) {
                //this.vcNotificationService.error('Error', err.errorMessage);
              }
            });
          }),
          takeUntil(this.destroy$)
        )
        .subscribe((res) => {
          this.setFilterSelectedCustomer(res);
        });
    }
  }
  getDataBillingSelectedCustomer(
    code: string,
    annexCode?: string,
    isEdit?: boolean
  ): void {
    if (isEdit) {
      this.api
        .getBillingSelectCustomerEdit(code, annexCode)
        .pipe(
          catchError((err: ResultDataAction) => {
            return throwError(() => {
              if (err.isError) {
                //this.vcNotificationService.error('Error', err.errorMessage);
              }
            });
          })
        )
        .subscribe((res) => {
          this.setDataBilling(res.data);
        });
    } else {
      this.api
        .getBillingSelectCustomer(code)
        .pipe(
          catchError((err: ResultDataAction) => {
            return throwError(() => {
              if (err.isError) {
                //this.vcNotificationService.error('Error', err.errorMessage);
              }
            });
          })
        )
        .subscribe((res) => {
          this.setDataBilling(res.data);
        });
    }
  }
  getDetail(id: string): void {
    this.api
      .getDetail(id)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),

        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        if (isNil(res)) {
          return;
        }
        this.setDataDetail(res);
      });
  }
  delete(id: string): void {
    this.setLoadingDelete(true);
    this.api
      .delete(id)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        finalize(() => this.setLoadingDelete(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Deleted annex successfully!'
        );
        this.setDataDetail(res);
        this.router.navigate(['contract/customer/annex']);
      });
  }
  submit(id: string): void {
    this.setLoadingSubmit(true);
    this.api
      .submit(id)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        finalize(() => this.setLoadingSubmit(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Submitted annex successfully!'
        );
        this.setDataDetail(res);
      });
  }
  recall(id: string): void {
    this.setLoadingRecall(true);
    this.api
      .recall(id)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        finalize(() => this.setLoadingRecall(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Recall annex successful!'
        );
        this.setDataDetail(res);
      });
  }
  reject(id: string, reason): void {
    this.setLoadingReject(true);
    this.api
      .reject(id, reason)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        finalize(() => this.setLoadingReject(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Reject annex successful!'
        );
        this.setDataDetail(res);
      });
  }
  approval(id: string): void {
    this.setLoadingApproval(true);
    this.api
      .approval(id)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        finalize(() => this.setLoadingApproval(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          `Approval annex successful! And ${
            res.data.status === 'Active' ? 'activated!' : 'waiting active!'
          }`
        );
        this.setDataDetail(res);
      });
  }

  create(payload): void {
    this.setLoading(true);
    this.api
      .create(payload)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Created annex successfully!'
        );
        this.setChangeCreateEditAnnex(res);
        this.router.navigate(['contract/customer/annex', res.data.code]);
      });
  }
  upload(payload, closeModal: () => void): void {
    this.setLoading(true);
    this.api
      .upload(payload)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                closeModal();
                this.getDetail(payload.code);
              }
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Updated annex successfully!'
        );
        this.setChangeCreateEditAnnex(res);
      });
  }
  updatePinnedFilter(pinned: string): void {
    this.api
      .savePin(pinned)
      .pipe(
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        if (res.isError) {
          this.vcNotificationService.error('', 'You have pinned failed!');
          return;
        }
        this.setItemActivateFilter(pinned);
        this.setPinnedFilter(pinned);
        this.vcNotificationService.success('', 'You have pinned successfully!');
      });
  }
}
