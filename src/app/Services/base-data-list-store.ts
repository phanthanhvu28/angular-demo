import { BehaviorSubject, Observable, finalize, tap } from 'rxjs';
import { IDataListStore } from './data-list-store-interface';
import { PagingDataItemsResult } from '../models/common-model';

export abstract class BaseDataListStore<T> implements IDataListStore<T> {
  private subjectTotalItem = new BehaviorSubject<number>(0);
  private subjectLoading = new BehaviorSubject<boolean>(false);
  private subjectDataItems = new BehaviorSubject<Array<T>>([]);
  private subjectPageIndex = new BehaviorSubject<number>(1);
  private subjectPageSize = new BehaviorSubject<number>(10);
  private subjectSortKey = new BehaviorSubject<string>('');
  private subjectSortOrder = new BehaviorSubject<string>('ascend');

  public totalItem$: Observable<number> = this.subjectTotalItem.asObservable();
  public loading$: Observable<boolean> = this.subjectLoading.asObservable();
  public dataItems$: Observable<T[]> = this.subjectDataItems.asObservable();
  public pageIndex$: Observable<number> = this.subjectPageIndex.asObservable();
  public pageSize$: Observable<number> = this.subjectPageSize.asObservable();
  public searchText: string = '';
  public sortKey$: Observable<string> = this.subjectSortKey.asObservable();
  public sortOrder$: Observable<string> = this.subjectSortOrder.asObservable();

  public abstract GetPagingDataItems(
    filter: string,
    skip: number,
    pageSize: number,
    sortKey: string,
    sortDirection: string
  ): Observable<PagingDataItemsResult<T>>;

  protected getSkipCount(): number {
    return (this.subjectPageIndex.value - 1) * this.subjectPageSize.value;
  }

  protected getPageSize(): number {
    return this.subjectPageSize.value;
  }

  protected getSortOrder(): string {
    return this.subjectSortOrder.value;
  }

  protected getSortKey(): string {
    return this.subjectSortKey.value;
  }

  protected getSearchText(): string {
    return this.searchText;
  }

  protected setTotalItem(totalItem: number): void {
    this.subjectTotalItem.next(totalItem);
  }

  protected setDataItems(dataItems: Array<T>): void {
    this.subjectDataItems.next(dataItems);
  }
  protected setLoading(isLoading: boolean): void {
    this.subjectLoading.next(isLoading);
  }

  loadData(): void {
    this.setLoading(true);
    this.GetPagingDataItems(
      this.getSearchText(),
      this.getSkipCount(),
      this.getPageSize(),
      this.getSortKey(),
      this.getSortOrder()
    )
      .pipe(
        tap((result) => {
          this.setTotalItem(result.totalCount);
          this.setDataItems(result.items);
        }),
        finalize(() => {
          this.setLoading(false);
        })
      )
      .subscribe();
  }
  refresh(): void {
    this.loadData();
  }
  reset(): void {
    this.subjectTotalItem.next(0);
    this.subjectLoading.next(false);
    this.subjectDataItems.next([]);
    this.subjectPageIndex.next(1);
    this.subjectPageSize.next(10);
    this.searchText = '';
    this.subjectSortKey.next('');
    this.subjectSortOrder.next('ascend');
  }
  goToPage(pageIndex: number): void {

    this.subjectPageIndex.next(pageIndex);
    this.loadData();

  }
  changePageSize(pageSize: number): void {
    this.subjectPageIndex.next(1);
    this.subjectPageSize.next(pageSize);
    this.loadData();
  }
  changeSearch(searchText: string): void {
    this.searchText = searchText;
    this.goToPage(1);
  }
  changeSort(sortKey: string, sortOrder: string): void {
    this.subjectSortKey.next(sortKey);
    this.subjectSortOrder.next(sortOrder);
    this.loadData();
  }

  public setDefaultPageSize(pageSize: number): void {
    this.subjectPageIndex.next(1);
    this.subjectPageSize.next(pageSize);
  }
}
