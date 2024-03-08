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
import {
  DataFilterAnnex,
  DataFilterAnnexSelectCustomer,
  FilterUpload
} from '../models/filter-upload.model';
import { AnnexData, BillingData } from '../models';
const baseUrl = `${environment.config.API_URL.CONTRACT_CUSTOMER.BASE_URL}/api/v1`;
const endPoint = 'annex';

@Injectable({
  providedIn: 'root'
})
export class ApiAnnex {
  constructor(private http: HttpClient) {}
  public getAll(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<AnnexData>> {
    return this.http.post<ResultListModel<AnnexData>>(
      `${baseUrl}/${endPoint}`,
      payload
    );
  }
  public getAllByContract(
    id,
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<AnnexData>> {
    return this.http.post<ResultListModel<AnnexData>>(
      `${baseUrl}/${endPoint}/${id}`,
      payload
    );
  }
  public getDetail(id: string): Observable<ContractResponse<AnnexData>> {
    return this.http.get<ContractResponse<AnnexData>>(
      `${baseUrl}/${endPoint}/${id}`
    );
  }
  public getFillerUpload(): Observable<FilterUpload<DataFilterAnnex>> {
    return this.http.post<FilterUpload<DataFilterAnnex>>(
      `${baseUrl}/${endPoint}/filter/upload`,
      {}
    );
  }
  public getFillerSelectCustomer(
    code: string
  ): Observable<FilterUpload<DataFilterAnnexSelectCustomer>> {
    return this.http.post<FilterUpload<DataFilterAnnexSelectCustomer>>(
      `${baseUrl}/${endPoint}/filter/info-customer`,
      { CustomerCode: code }
    );
  }
  public getFillerSelectCustomerEdit(
    code: string,
    annexCode: string
  ): Observable<FilterUpload<DataFilterAnnexSelectCustomer>> {
    return this.http.post<FilterUpload<DataFilterAnnexSelectCustomer>>(
      `${baseUrl}/${endPoint}/filter/edit-info-customer`,
      { CustomerCode: code, AnnexCode: annexCode }
    );
  }
  public getBillingSelectCustomer(
    code: string
  ): Observable<FilterUpload<DataFilterAnnexSelectCustomer>> {
    return this.http.post<FilterUpload<DataFilterAnnexSelectCustomer>>(
      `${baseUrl}/${endPoint}/billing/branch-customer`,
      { CustomerCode: code }
    );
  }
  public getBillingSelectCustomerEdit(
    code: string,
    annexCode: string
  ): Observable<FilterUpload<DataFilterAnnexSelectCustomer>> {
    return this.http.post<FilterUpload<DataFilterAnnexSelectCustomer>>(
      `${baseUrl}/${endPoint}/billing/edit-branch-customer`,
      { CustomerCode: code, AnnexCode: annexCode }
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

  public create(payload: AnnexData): Observable<ResultListModel<AnnexData>> {
    return this.http.post<ResultListModel<AnnexData>>(
      `${baseUrl}/${endPoint}/Create`,
      payload
    );
  }
  public upload(payload: AnnexData): Observable<AnnexData> {
    return this.http.post<AnnexData>(`${baseUrl}/${endPoint}/update`, payload);
  }
  public getUserPin(): Observable<ResultDataAction> {
    return this.http.get<ResultDataAction>(`${baseUrl}/${endPoint}/UserPins`);
  }
  public savePin(pinData: string): Observable<ResultDataAction> {
    return this.http.post<ResultDataAction>(`${baseUrl}/${endPoint}/UserPins`, {
      PinnedData: pinData
    });
  }
}
