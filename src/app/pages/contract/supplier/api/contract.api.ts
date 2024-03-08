import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataListRequestPayload } from '@models/base-data-list';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ContractResponse,
  ResultDataAction,
  ResultListModel
} from '../../models';
import ContractData, { DataFilterContract } from '../models/contract.model';
import { FilterUpload } from '../models';

const endPoint = 'contract';
const baseUrl = `${environment.config.API_URL.CONTRACT_SUPPLIER.BASE_URL}/api/v1`;
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
  public getDetail(id: string): Observable<ContractResponse<ContractData>> {
    return this.http.get<ContractResponse<ContractData>>(
      `${baseUrl}/${endPoint}/${id}`
    );
  }
  public getFillerUpload(): Observable<FilterUpload<DataFilterContract>> {
    return this.http.post<FilterUpload<DataFilterContract>>(
      `${baseUrl}/${endPoint}/filter/upload`,
      {}
    );
  }

  public delete(code: string): Observable<ResultDataAction> {
    return this.http.delete<ResultDataAction>(`${baseUrl}/${endPoint}/delete`, {
      body: {
        Code: code
      }
    });
  }
  public submit(code: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(`${baseUrl}/${endPoint}/submit`, {
      Code: code
    });
  }
  public recall(code: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(`${baseUrl}/${endPoint}/recall`, {
      Code: code
    });
  }
  public reject(code: string, reason: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(`${baseUrl}/${endPoint}/reject`, {
      Code: code,
      Reason: reason
    });
  }
  public approval(code: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(
      `${baseUrl}/${endPoint}/approval`,
      {
        Code: code
      }
    );
  }
  public inactive(code: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(
      `${baseUrl}/${endPoint}/inactive`,
      {
        Code: code
      }
    );
  }
  public active(code: string): Observable<ResultDataAction> {
    return this.http.patch<ResultDataAction>(`${baseUrl}/${endPoint}/active`, {
      Code: code
    });
  }

  public create(
    payload: ContractData
  ): Observable<ResultListModel<ContractData>> {
    return this.http.post<ResultListModel<ContractData>>(
      `${baseUrl}/${endPoint}/Create`,
      payload
    );
  }
  public upload(
    payload: ContractData
  ): Observable<ResultListModel<ContractData>> {
    return this.http.post<ResultListModel<ContractData>>(
      `${baseUrl}/${endPoint}/update`,
      payload
    );
  }
  public getUserPin(): Observable<ResultDataAction> {
    return this.http.get<ResultDataAction>(`${baseUrl}/${endPoint}/UserPins`);
  }
  public savePin(pinData: string): Observable<ResultDataAction> {
    return this.http.post<ResultDataAction>(`${baseUrl}/${endPoint}/UserPins`, {
      PinnedData: pinData
    });
  }
  public getDataSelectSupplier(idCustomer): Observable<any> {
    return this.http.get<any>(
      `${baseUrl}/trialContract/${idCustomer}/customer`
    );
  }
}
