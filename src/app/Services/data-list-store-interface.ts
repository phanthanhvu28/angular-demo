import { Observable } from "rxjs/internal/Observable";

export interface IDataListStore<T> {

    totalItem$: Observable<number>,
    loading$: Observable<boolean>,
    dataItems$: Observable<Array<T>>,
    pageIndex$: Observable<number>,
    pageSize$: Observable<number>,
    searchText: string,
    sortKey$: Observable<string>,
    sortOrder$: Observable<string>,
    loadData(): void,
    refresh(): void,
    reset(): void,
    goToPage(pageIndex: number): void,
    changePageSize(pageSize: number): void,
    changeSearch(searchText: string): void,
    changeSort(sortKey: string, sortOrder: string): void,
}