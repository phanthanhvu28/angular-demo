import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, catchError, map, tap, throwError } from 'rxjs';
import { CostingMainModel } from '../models/costing-main-model';
import { environment } from 'src/environments/environment';
import { CostingMainResponse } from '../models/CostingMainResponse';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class CostingService {

  data: any;
  error: any;
  loading: boolean=true;


  constructor(private http: HttpClient) { }

  //private subjects = new BehaviorSubject<CostingMainModel[]>([]);

  //countryUnitVietnams$: Observable<CostingMainModel[]> = this.subjects.asObservable();
  //randomUserUrl = 'https://api.randomuser.me/';
  getCostingMains2(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    keyword: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ items: CostingMainModel[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('PageSize', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`)
      .append('keyword', `${keyword}`);
      filters.forEach(filter => {
        filter.value.forEach(value => {
          params = params.append(filter.key, value);
        });
      });
    return this.http
      .get<{ items: CostingMainModel[] }>(`${baseUrl}/api/v1/DTCostings/searchCosting`, { params })
      .pipe(catchError((err) => {return throwError(() => new Error(err))}));
      // .pipe(catchError((err) => {
      //   const message = 'Could not load Costings';
      //   console.log(message, err);
      //   return throwError(() => new Error(err));
      // }
      // ));
  }


  getCostingMains(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    keyword: string | null,) {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('results', `${pageSize}`)
      .append('PageSize', `${pageSize}`)
      .append('sortField', `${sortField}`)
      .append('sortOrder', `${sortOrder}`)
      .append('keyword', `${keyword}`);

    return this.http
      .get<CostingMainResponse>(`${baseUrl}/api/v1/DTCostings/searchCosting`, { params })
      .pipe(
        catchError((err) => {
          const message = 'Could not load Costings';
          console.log(message, err);
          return throwError(() => new Error(err));
        }),
        tap((countryUnitVietnams) => {
          console.log(`Fetched ${countryUnitVietnams} products`);
        })
      )
    //.subscribe();
  }

  loadData() {
    this.loading = true;
    this.http.get<any>('https://api.example.com/data').pipe(
      map(response => response.data),
      catchError(error => {
        this.error = error;
        return [];
      })
    ).subscribe(data => {
      this.data = data;
      this.loading = false;
    });
  }

}
