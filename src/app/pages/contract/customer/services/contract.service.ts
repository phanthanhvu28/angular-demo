import { Injectable, Injector } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    catchError,
    finalize,
    takeUntil,
    throwError
  } from 'rxjs';

import { ApiContract } from '../apis';
import { CONTRACT_LIST_COLS } from '../pages/customer-contract-list/table-contract.const';
import { DataListRequestPayload, FilterComparison } from 'src/app/models/base-data-list';
import { BaseContractTabService } from '../../services/base-contract-tab.service';
import { AuthService } from 'src/app/guard/services/auth.service';
import { ContractResponse, ResultDataAction } from '../../models';
import ContractData from '../models/contract-data.model';
import { DataFilterContract, FilterUpload } from '../models/filter-upload.model';
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
  ) {
    super(injector, authService);
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

}