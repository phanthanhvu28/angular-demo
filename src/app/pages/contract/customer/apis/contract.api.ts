import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataListRequestPayload } from 'src/app/models/base-data-list';
import { ResultListModel } from '../../models';
import ContractData from '../models/contract-data.model';
import { environment } from 'src/app/environments/environment';


const baseUrl = `${environment.config.API_URL.CONTRACT.BASE_URL}/api/v1`;
const endPoint = 'contract';

@Injectable({
    providedIn: 'root'
  })
export class ApiContract {
    constructor(private http: HttpClient) {}

    public getAll(
        payload: DataListRequestPayload = {}
      ): Observable<ResultListModel<ContractData>> {
        return this.http.post<ResultListModel<ContractData>>(
          `${baseUrl}/${endPoint}`,
          payload
        );
      }
}