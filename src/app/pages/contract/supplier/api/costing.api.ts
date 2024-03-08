import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataListRequestPayload } from '@models/base-data-list';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultListModel } from '../../models';
import CostingAnnexData from '../models/costing-annex.model';

const endPoint = 'annexCosting';
const baseUrl = `${environment.config.API_URL.CONTRACT_SUPPLIER.BASE_URL}/api/v1`;
@Injectable({
  providedIn: 'root'
})
export class ApiCosting {
  constructor(private http: HttpClient) {}
  // DT
  public getDTMain(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/dtmain/supplier`,
      payload
    );
  }
  public getDTVas(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/dtvas/supplier`,
      payload
    );
  }
  public getDTBLC(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/dtblc/supplier`,
      payload
    );
  }
  // CC
  public getCCMain(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/ccmain/supplier`,
      payload
    );
  }
  public getCCVas(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/ccvas/supplier`,
      payload
    );
  }
  // WH
  public getWHMain(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/whmain/supplier`,
      payload
    );
  }
  public getWHVas(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/whvas/supplier`,
      payload
    );
  }
  // FM
  public getFMMain(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/fmmain/supplier`,
      payload
    );
  }
  public getFMVas(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/fmvas/supplier`,
      payload
    );
  }
  public getFMBLC(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/fmblc/supplier`,
      payload
    );
  }
  public getFMSurcharge(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<CostingAnnexData>> {
    return this.http.post<ResultListModel<CostingAnnexData>>(
      `${baseUrl}/${endPoint}/fmsurcharge/supplier`,
      payload
    );
  }
}
