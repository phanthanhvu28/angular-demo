import { Injectable, Injector } from '@angular/core';

import { finalize, takeUntil } from 'rxjs';
import { ParamMap } from '@angular/router';
import {
  DataListRequestPayload,
  FilterComparison
} from '@models/base-data-list';
import { BaseContractTabService } from '../../../services';
import {
  TABLE_ANNEX_LIST_COLS,
  TABLE_ANNEX_LIST_FULLSCREEN_COLS
} from './table-annex-list.const';
import { ApiAnnex } from '../../api';


@Injectable({
  providedIn: 'root'
})
export class TableAnnexListService extends BaseContractTabService<any> {
  supplierCode: string;
  isFullScreen: boolean = false;
  setIsFullScreen(value) {
    this.isFullScreen = value;
    this.setColTable();
  }
  setColTable() {
    this.setDataItemCells(
      this.isFullScreen
        ? TABLE_ANNEX_LIST_FULLSCREEN_COLS
        : TABLE_ANNEX_LIST_COLS
    );
  }
  constructor(
    injector: Injector,    
    private api: ApiAnnex
  ) {
    super(injector);
    this.setColTable();

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap: ParamMap) => {
        this.supplierCode = paramMap.get('id');
      });
  }

  public override getPayload(): DataListRequestPayload {
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
  getTableData(): void {
    this.setLoading(true);
    this.api
      .getAnnexBySupplier(this.getPayload(), this.supplierCode)
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
