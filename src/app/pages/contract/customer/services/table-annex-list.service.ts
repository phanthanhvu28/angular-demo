import { Injectable, Injector } from '@angular/core';
import { BaseContractTabService } from '../../services/base-contract-tab.service';

import { ApiAnnex } from '../apis';
import {
  TABLE_ANNEX_LIST_COLS,
  TABLE_ANNEX_LIST_FULLSCREEN_COLS
} from '../components/table-annex-list/table-annex-list.const';
import { finalize, takeUntil } from 'rxjs';
import { ParamMap } from '@angular/router';
import {
  DataListRequestPayload,
  FilterComparison
} from '@models/base-data-list';
import { AuthService } from 'src/app/pages/auth/service';

@Injectable({
  providedIn: 'root'
})
export class TableAnnexListService extends BaseContractTabService<any> {
  idContact: string;
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
    authService: AuthService,
    private api: ApiAnnex
  ) {
    super(injector);
    this.setColTable();

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((paramMap: ParamMap) => {
        this.idContact = paramMap.get('id');
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
      .getAllByContract(this.idContact, this.getPayload())
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
