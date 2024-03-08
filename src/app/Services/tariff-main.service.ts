import { Injectable } from '@angular/core';
import { BaseDataListStore } from './base-data-list-store';
import { DTTariffMains, DTTariffMainsPaging } from '../models/tariff-main';
import { Observable, catchError, map, throwError } from 'rxjs';
import { PagingDataItemsResult } from '../models/common-model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = environment.baseUrlTariff;

@Injectable({
  providedIn: 'root',
})
export class TariffMainService extends BaseDataListStore<DTTariffMains> {
  
  public override GetPagingDataItems(
    filter: string,
    skip: number,
    pageSize: number,
    sortKey: string,
    sortDirection: string
  ): Observable<PagingDataItemsResult<DTTariffMains>> {
    let params = new HttpParams()
      .append('keyWord', `abc`)
      .append('status', ``)
      .append('page', `${skip}`)
      .append('pageSize', `${pageSize}`)
      .append('includes', `${[]}`)
      .append('sorts', `${[sortDirection]}`)
      .append('filters', `${[]}`);

    return this.http
      .get<DTTariffMainsPaging>(`${baseUrl}/api/v1/DTTariffs`, { params })
      .pipe(
        catchError((err) => {
          const message = 'Could not load DTTariffs';
          console.log(message, err);
          return throwError(() => new Error(err));
        }),
        map((result) => ({
          totalCount: result.totalItems,
          items: result.items,
        }))
      );
  }

 

  constructor(private http: HttpClient) {
    super();
  }

  
}
