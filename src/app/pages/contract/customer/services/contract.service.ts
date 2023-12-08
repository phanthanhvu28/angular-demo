import { Injectable, Injector } from '@angular/core';
import {
    BehaviorSubject,
    Observable,
    catchError,
    finalize,
    takeUntil,
    throwError
  } from 'rxjs';
import { TariffDataListService } from 'src/app/abstracts/services/base-data-list.service';
import { ApiContract } from '../apis';
import { CONTRACT_LIST_COLS } from '../pages/customer-contract-list/table-contract.const';
import { DataListRequestPayload, FilterComparison } from 'src/app/models/base-data-list';
@Injectable({
    providedIn: 'root'
  })
export class ContractService extends TariffDataListService<any>{
    constructor(
        injector: Injector,
        private api: ApiContract        
      ) {
        super(injector);
        this.setDataItemCells(CONTRACT_LIST_COLS);
      }
      
    public getTableData(): void {
        this.setLoading(true);
        this.api
      .getAll(this.getPayload())
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res) => {
        this.setDataItems(res.items);
        this.setTotalItem(res.totalItems);
      });
    }

    override getPayload(): DataListRequestPayload {
        const search = {
          fieldName: 'keyword',
          comparison: FilterComparison.Contains,
          fieldValue: this.searchText
        };
    
        return {
          includes: [],
          filters: this.searchText ? [...this.filter, search] : this.filter,
          sorts: this.sorts,
          page: this.pageIndexNumber,
          pageSize: this.pageSizeNumber
        };
      }

}