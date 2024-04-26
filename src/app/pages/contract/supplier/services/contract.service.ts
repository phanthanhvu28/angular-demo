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
import { ERROR_MESSAGE } from '../../const';
import { ContractResponse, ResultDataAction } from '../../models';
import { BaseContractTabService } from '../../services';

import { DataFilterContract, FilterUpload } from '../models';
import ContractData from '../models/contract.model';
import { CONTRACT_LIST_COLS } from '../pages';
import { ApiContract } from '../api';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/pages/auth/service';

@Injectable({
  providedIn: 'root'
})
export class ContractService extends BaseContractTabService<any> {
  private subjectDataDetail = new BehaviorSubject<
    ContractResponse<ContractData>
  >(null);

  dataDetail$: Observable<ContractResponse<ContractData>> =
    this.subjectDataDetail.asObservable();
  //filter
  private subjectFilterSelection = new BehaviorSubject<
    FilterUpload<DataFilterContract>
  >(null);

  filterSelection$: Observable<FilterUpload<DataFilterContract>> =
    this.subjectFilterSelection.asObservable();

  // Create-edit
  private subjectCreateEditContract = new BehaviorSubject<
    ContractResponse<ContractData>
  >(null);
  createEditContract$: Observable<ContractResponse<ContractData>> =
    this.subjectCreateEditContract.asObservable();

  //

  constructor(
    injector: Injector,
    private api: ApiContract,
    private vcNotificationService: VcNotificationService,
    authService: AuthService
  ) {
    super(injector);
    this.setDataItemCells(CONTRACT_LIST_COLS);
  }

  setDataDetail(value): void {
    this.subjectDataDetail.next(value);
  }

  setFilterSelection(value: FilterUpload<DataFilterContract>): void {
    this.subjectFilterSelection.next(value);
  }

  setChangeCreateEditContract(value): void {
    this.subjectCreateEditContract.next(value);
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
        finalize(() => this.setLoadingDelete(false)),
        takeUntil(this.destroy$)
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Deleted contract successfully!'
        );
        this.setDataDetail(res);
        this.router.navigate(['contract/supplier/contract']);
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
          'Submitted contract successfully!'
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
          'Recall contract successful!'
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
          'Reject contract successful!'
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
          `Approval contract successful! And ${
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
          'Created contract successfully!'
        );
        this.setChangeCreateEditContract(res);

        this.router.navigate(['contract/supplier/contract', res.data.code]);
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

            return err;
          });
        }),
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Updated contract successfully!'
        );
        this.setChangeCreateEditContract(res);
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
