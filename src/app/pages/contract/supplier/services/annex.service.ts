import { Injectable, Injector } from '@angular/core';
import { ParamMap } from '@angular/router';
import { VcNotificationService } from '@shared/services';
import { isNil } from 'ng-zorro-antd/core/util';
import {
  BehaviorSubject,
  Observable,
  catchError,
  finalize,
  takeUntil,
  tap,
  throwError
} from 'rxjs';
import { AuthService } from 'src/app/guard/services/auth.service';
import { ERROR_MESSAGE } from '../../const';
import {
  ContractResponse,
  ResultDataAction,
  ResultListModel
} from '../../models';
import { BaseContractTabService } from '../../services';

import AnnexData, {
  DataFilterAnnex,
  DataFilterAnnexSelectSupplier
} from '../models/annex.model';
import { ANNEX_LIST_COLS } from '../pages';
import { ApiAnnex } from '../api';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnexService extends BaseContractTabService<any> {
  id: string;
  private subjectDataDetail = new BehaviorSubject<ContractResponse<AnnexData>>(
    null
  );
  private subjectSelectedSupplier = new BehaviorSubject<
    ContractResponse<DataFilterAnnexSelectSupplier>
  >(null);
  selectedSupplier$: Observable<
    ContractResponse<DataFilterAnnexSelectSupplier>
  > = this.subjectSelectedSupplier.asObservable();
  dataDetail$: Observable<ContractResponse<AnnexData>> =
    this.subjectDataDetail.asObservable();
  //filter
  private subjectFilterSelection = new BehaviorSubject<
    ContractResponse<DataFilterAnnex>
  >(null);

  filterSelection$: Observable<ContractResponse<DataFilterAnnex>> =
    this.subjectFilterSelection.asObservable();

  // Create-edit
  private subjectCreateEditAnnex = new BehaviorSubject<
    ContractResponse<AnnexData>
  >(null);
  createEditAnnex$: Observable<ContractResponse<AnnexData>> =
    this.subjectCreateEditAnnex.asObservable();

  //
  selectedSupplier;
  constructor(
    injector: Injector,
    private api: ApiAnnex,
    private vcNotificationService: VcNotificationService,
    authService: AuthService
  ) {
    super(injector);
    this.setDataItemCells(ANNEX_LIST_COLS);
    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap: ParamMap) => {
        this.id = paramMap.get('id');
      });
  }

  setDataDetail(value): void {
    this.subjectDataDetail.next(value);
  }

  setFilterSelection(value: ContractResponse<DataFilterAnnex>): void {
    this.subjectFilterSelection.next(value);
  }

  setChangeCreateEditAnnex(value): void {
    this.subjectCreateEditAnnex.next(value);
  }
  setSelectedSupplier(value): void {
    this.subjectSelectedSupplier.next(value);
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
        this.router.navigate(['contract/supplier/annex']);
      });
  }
  submit(id: string): void {
    this.setLoadingSubmit(true);
    this.api
      .submit(id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          var err = error.error as ResultDataAction;
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              this.vcNotificationService.error('Error', err.errorMessage);
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

  create(payload): Observable<ResultListModel<AnnexData>> {
    this.setLoading(true);
    return this.api.create(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
          return err;
        });
      }),
      tap((res) => {
        this.vcNotificationService.success(
          'Success',
          'Created annex successfully!'
        );
        this.setChangeCreateEditAnnex(res);
        this.setDataDetail(res);
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  upload(payload): Observable<ResultListModel<AnnexData>> {
    this.setLoading(true);
    return this.api.upload(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
          return err;
        });
      }),
      tap((res) => {
        this.vcNotificationService.success(
          'Success',
          'Updated annex successfully!'
        );
        this.setChangeCreateEditAnnex(res);
        this.setDataDetail(res);
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
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
  getSelectedSupplier(code: string) {
    this.api
      .getFillerSelectSupplier(code)
      .pipe(
        takeUntil(this.destroy$),
        catchError((err: ResultDataAction) => {
          return throwError(() => {
            if (err.isError) {
              //this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        })
      )
      .subscribe((res) => {
        this.setSelectedSupplier(res);
      });
  }
}
