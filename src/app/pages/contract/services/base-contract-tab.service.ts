import { Injectable, Injector } from '@angular/core';
import { BaseDataListService } from 'src/app/abstracts/services/base-data-list.service';
import {
  DataListRequestPayload,
  FilterComparison,
  TableDataCell
} from '@models/base-data-list';
import { AuthService } from 'src/app/guard/services/auth.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter } from '@models/base/data.interface';
@Injectable({
  providedIn: 'root'
})
export abstract class BaseContractTabService<T> extends BaseDataListService<T> {
  supplierId: string;
  fillerParams: any;
  columnChecked: Array<TableDataCell>;
  columnNotChecked: Array<TableDataCell>;

  private subjectLoadingDelete: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private subjectLoadingApproval: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private subjectLoadingSubmit: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private subjectLoadingReject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private subjectLoadingRecall: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  loadingDelete$: Observable<boolean> =
    this.subjectLoadingDelete.asObservable();
  loadingApproval$: Observable<boolean> =
    this.subjectLoadingApproval.asObservable();
  loadingSubmit$: Observable<boolean> =
    this.subjectLoadingSubmit.asObservable();
  loadingReject$: Observable<boolean> =
    this.subjectLoadingReject.asObservable();
  loadingRecall$: Observable<boolean> =
    this.subjectLoadingRecall.asObservable();
  protected _subjectItemActivateFilter = new BehaviorSubject<string>('');
  public itemActivateFilter$: Observable<string> =
    this._subjectItemActivateFilter.asObservable();
  setItemActivateFilter(value: string): void {
    this._subjectItemActivateFilter.next(value);
  }

  protected _subjectPinnedFilter = new BehaviorSubject<string>('');
  public pinnedFilter$: Observable<string> =
    this._subjectPinnedFilter.asObservable();
  setPinnedFilter(value: string): void {
    this._subjectPinnedFilter.next(value);
  }

  setLoadingApproval(value: boolean): void {
    this.subjectLoadingApproval.next(value);
  }
  setLoadingDelete(value: boolean): void {
    this.subjectLoadingDelete.next(value);
  }
  setLoadingSubmit(value: boolean): void {
    this.subjectLoadingSubmit.next(value);
  }
  setLoadingReject(value: boolean): void {
    this.subjectLoadingReject.next(value);
  }
  setLoadingRecall(value: boolean): void {
    this.subjectLoadingRecall.next(value);
  }
  constructor(
    injector: Injector,
    //protected authService: AuthService
  ) {
    super(injector);
  }

  public override getPayload(): DataListRequestPayload {
    const search = {
      fieldName: 'keyword',
      comparison: FilterComparison.Contains,
      fieldValue: this.searchText.trim()
    };

    // const isCanApproval =
    //   !!this.authService.getCurrentUserParse()['Vela_Core_Contract_Approve'] ||
    //   !!this.authService.getCurrentUserParse()[
    //     'Vela_Core_ContractSupplier_Approve'
    //   ];
    // const isCanCreate =
    //   !!this.authService.getCurrentUserParse()['Vela_Core_Contract_Create'] ||
    //   !!this.authService.getCurrentUserParse()[
    //     'Vela_Core_ContractSupplier_Create'
    //   ];
    this.filter = structuredClone(this.filter);
    // const approvalStatus = {
    //   fieldName: 'status',
    //   comparison: FilterComparison.NotEqual,
    //   fieldValue: 'New'
    // };

    // if (isCanApproval && !isCanCreate) {
    //   this.filter.push(approvalStatus);
    // }
    return {
      includes: [],
      filters: this.searchText ? [...this.filter, search] : this.filter,
      sorts: this.sorts,
      page: this.asyncPipe.transform(this.pageIndex$),
      pageSize: this.asyncPipe.transform(this.pageSize$)
    };
  }
  getActivateFilterPayload(): Array<Filter> {
    const currentActivateFilter = this._subjectItemActivateFilter.value;
    //const currentEmailUser = this.authService.getCurrentUserParse()['email'];

    switch (currentActivateFilter) {
      case 'ALL':
        return [];
      case 'My':
        return [
          // {
          //   fieldName: 'myPinned',
          //   comparison: FilterComparison.Contains,
          //   fieldValue: currentEmailUser
          // }
        ];
      case 'Recently':
        return [
          {
            fieldName: 'recently',
            comparison: FilterComparison.Contains,
            fieldValue: ''
          }
        ];

      default:
        return [];
    }
  }
  setSupplierID(value: string): void {
    this.supplierId = value;
  }
  setFilterParams(value: any): void {
    this.fillerParams = value;
  }
}
