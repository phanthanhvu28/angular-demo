import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';

import { IDataListStore } from '../Services/data-list-store-interface';

@Component({
  template: '',
})
export abstract class BaseDataList<T> implements OnInit {
  public clientPagination: boolean = false;
  public searchText: string = '';
  public loading$ = new Observable<boolean>();
  public dataItems$! : Observable<Array<T>>;
  public totalItem$ = new Observable<number>();
  public pageIndex$ = new Observable<number>();
  public pageSize$ = new Observable<number>();
  public searchText$ = new Observable<string>();

  private sortChangeTimeOut :any;
  private searchKeydownTimeOut : any;
  private _dataListStore: any;

  public abstract getDataListStore(): IDataListStore<T>;

  public ngOnInit(): void {
    this._dataListStore = this.getDataListStore();
    this.loading$ = this._dataListStore.loading$;
    this.dataItems$ = this._dataListStore.dataItems$;
    this.totalItem$ = this._dataListStore.totalItem$;
    this.pageIndex$ = this._dataListStore.pageIndex$;
    this.pageSize$ = this._dataListStore.pageSize$;
    this.searchText = this._dataListStore.searchText;
    // this.changeColumnWidth();
    this._dataListStore.loadData();
  }

  public refresh(): void {
    this._dataListStore.refresh();
  }

  protected changePageIndex(pageIndex: number): void {
    this._dataListStore.goToPage(pageIndex);
  }

  protected changePageSize(pageSize: any): void {
    this._dataListStore.changePageSize(pageSize);
  }

  protected changeSort(key: string, direction: string): void {
    if (this.sortChangeTimeOut !== null) {
      return;
    }
    this.sortChangeTimeOut = setTimeout(() => {
      this._dataListStore.changeSort(key, direction);
      this.sortChangeTimeOut = null;
    }, 200);
  }

  protected changeSearch(): void {
    this._dataListStore.changeSearch(this.searchText);
  }
  protected onSearchKeydown(event: any): void {
    if (this.searchKeydownTimeOut !== null) {
      clearTimeout(this.searchKeydownTimeOut);
    }

    this.searchKeydownTimeOut = setTimeout(() => {
      this._dataListStore.changeSearch(event.target.value);
      this.searchKeydownTimeOut = null;
    }, 500);
  }
}
