import { Injectable, Injector } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    catchError,
    finalize,
    takeUntil,
    throwError
  } from 'rxjs';
  import { VcNotificationService } from '@shared/services';
import { ApiContract } from '../apis';
import { CONTRACT_LIST_COLS } from '../pages/customer-contract-list/table-contract.const';
import { DataListRequestPayload, FilterComparison } from 'src/app/models/base-data-list';
import { BaseContractTabService } from '../../services/base-contract-tab.service';

import { ContractResponse, ResultDataAction } from '../../models';
import ContractData from '../models/contract-data.model';
import { DataFilterContract, FilterUpload } from '../models/filter-upload.model';
import { ERROR_MESSAGE } from '../../const';
import { isNil } from 'ng-zorro-antd/core/util';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'src/app/pages/auth/service';
@Injectable({
    providedIn: 'root'
  })
export class ContractService extends BaseContractTabService<any>{

  private subjectFilterSelection = new BehaviorSubject<
  FilterUpload<DataFilterContract>
>(null);
private subjectDataRespond = new BehaviorSubject<ResultDataAction>(null);

filterSelection$: Observable<FilterUpload<DataFilterContract>> =
  this.subjectFilterSelection.asObservable();
subjectDataRespond$: Observable<ContractResponse<ResultDataAction>> =
  this.subjectDataRespond;
setSubjectDataRespond(value) {
  this.subjectDataRespond.next(value);
}
private subjectCreateCustomer = new BehaviorSubject<any>(null);
createCustomer$: Observable<ResultDataAction> = this.subjectCreateCustomer;
private subjectDataDetail = new BehaviorSubject<ResultDataAction>(null);

dataDetail$: Observable<ContractResponse<ContractData>> =
  this.subjectDataDetail.asObservable();

  constructor(
    injector: Injector,
    private api: ApiContract,
    authService: AuthService,
    private vcNotificationService: VcNotificationService
  ) {
    super(injector);
    this.setDataItemCells(CONTRACT_LIST_COLS);
  }
  
  public override getTableData(): void {
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
    //payload.filters = [...this.getActivateFilterPayload(), ...payload.filters];
    payload.filters = [ ...payload.filters];
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
  setDataDetail(value) {
    this.subjectDataDetail.next(value);
  }
  submit(id: string) {
    this.setLoadingSubmit(true);
    this.api
      .submit(id)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          var err = error.error as ResultDataAction;
          console.log("Error",error);
          console.log("err",err);
          return throwError(() => {
            if (err.isError) {
              if (err.errorCode === ERROR_MESSAGE.CODE_ERROR_MATCH_PAYLOAD) {
                this.getDetail(id);
              }
              this.vcNotificationService.error('Error', err.errorMessage);
            }
          });
        }),
        takeUntil(this.destroy$),
        finalize(() => this.setLoadingSubmit(false))
      )
      .subscribe((res) => {
        this.vcNotificationService.success(
          'Success',
          'Submitted contract successfully!'
        );
        this.setDataDetail(res);
      });
  }
}