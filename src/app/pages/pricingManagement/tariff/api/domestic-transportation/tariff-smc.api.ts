import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataListRequestPayload, ExportPayload } from '@models/base-data-list';
import { Observable, catchError, forkJoin, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import {
  ProcessFlowModel,
  ProcessFlowResponseModel
} from '../../models/process-flow.model';
import {
  ResultListModel,
  TariffDetailResponse,
  TariffDraftResponse
} from '../../models/result-list.model';

import { DTTariffMains } from '../../models/tariff-dt-main.model';
import { TariffProductCode } from '../../tariff.const';
import { FilterDTTransportationDetail, 
    FilterDTTransportationList, 
    ItemAction, 
    ResultModel, 
    TariffDTMainDetailItem, 
    TariffFilter, 
    UpdatedItemMarkup } from '../../models';

const baseUrl: string = `${environment.baseUrlTariff}/api/v1`;
@Injectable({
  providedIn: 'root'
})
export class TariffSmcApi {
  constructor(protected httpClient: HttpClient) {}

  getProcessFlow(): Observable<Array<ProcessFlowModel>> {
    return this.httpClient
      .get<ResultListModel<DTTariffMains>>(`${baseUrl}/Common/processFlows`, {
        params: {
          productCode: TariffProductCode.DTTariffMain
        }
      })
      .pipe(
        this.onCatchException('getProcessFlow'),
        map((res: ProcessFlowResponseModel) => res.data)
      );
  }

  changeMarkupsMultiple(
    tariffId: string,
    listChanges: Array<{ Filters: Array<TariffFilter> }>
  ): Observable<ResultModel<boolean>[]> {
    const listRequests = [];

    for (const itemChange of listChanges) {
      const changeMarkupRequest = this.httpClient.post(
        `${baseUrl}/DTTariffMains/${tariffId}/markups`,
        itemChange
      );
      listRequests.push(changeMarkupRequest);
    }

    return forkJoin(listRequests);
  }

  getFilters(): Observable<FilterDTTransportationList> {
    return this.httpClient
      .post<ResultModel<FilterDTTransportationList>>(
        `${baseUrl}/DTTariffMains/filters`,
        {}
      )
      .pipe(
        this.onCatchException('getFilters'),
        map(
          (e: ResultModel<FilterDTTransportationList>) =>
            e.data || ({} as FilterDTTransportationList)
        )
      );
  }

  getFiltersItems(): Observable<FilterDTTransportationDetail> {
    return this.httpClient
      .post<ResultModel<FilterDTTransportationDetail>>(
        `${baseUrl}/DTTariffMains/filters/items`,
        {}
      )
      .pipe(
        this.onCatchException('getFiltersItems'),
        map(
          (e: ResultModel<FilterDTTransportationDetail>) =>
            e.data || ({} as FilterDTTransportationDetail)
        )
      );
  }

  getAll(
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<DTTariffMains>> {
    return this.httpClient.post<ResultListModel<DTTariffMains>>(
      `${baseUrl}/DTTariffMains`,
      payload
    );
  }

  getById(id: string): Observable<{ totalItems: number; items: any }> {
    return this.httpClient
      .get<ResultListModel<DTTariffMains>>(
        `${baseUrl}/DTTariffMains/${id}/items`
      )
      .pipe(
        this.onCatchException('getById'),
        map(({ totalItems, data }: ResultListModel<DTTariffMains>) => ({
          totalItems,
          items: data
        }))
      );
  }

  // NEW TARIFF
  getTariffTemps(    
    payload: DataListRequestPayload = {}
  ): Observable<ResultListModel<TariffDTMainDetailItem>> {
    console.log("NEW TARIFF URL:",`${baseUrl}/DTTariffMains/temps`)
    return this.httpClient.post<ResultListModel<TariffDTMainDetailItem>>(
      `${baseUrl}/DTTariffMains/temps`,
      payload
    );
  }

  updateItemMarkup(
    tariffId: string,
    items: Array<UpdatedItemMarkup> | [] = []
  ): Observable<boolean> {
    return this.httpClient
      .patch<ResultModel<boolean>>(
        `${baseUrl}/DTTariffMains/${tariffId}/markups`,
        [...items]
      )
      .pipe(
        this.onCatchException('updateItemMarkup'),
        map(({ isError }: ResultModel<boolean>) => isError)
      );
  }

  submitNew(
    id: string,
    validFrom: Date,
    validTo: Date
  ): Observable<TariffDraftResponse> {
    return this.httpClient
      .patch<ResultModel<any>>(`${baseUrl}/DTTariffMains/submit`, {
        tariffId: id,
        validFrom,
        validTo
      })
      .pipe(
        this.onCatchException('submitNew'),
        map((e: ResultModel<TariffDraftResponse>) => e)
      );
  }

  submit(
    tariffId: string,
    validFrom: Date,
    validTo: Date
  ): Observable<ResultModel<TariffDraftResponse>> {
    const payload = {
      tariffId,
      validFrom,
      validTo
    };
    return this.httpClient
      .patch<ResultModel<TariffDraftResponse>>(
        `${baseUrl}/DTTariffMains/submit`,
        payload
      )
      .pipe(
        this.onCatchException('submit'),
        map((e: ResultModel<TariffDraftResponse>) => e)
      );
  }

  nextSubmit(tariffId: string): Observable<ResultModel<TariffDraftResponse>> {
    return this.httpClient
      .patch<ResultModel<TariffDraftResponse>>(
        `${baseUrl}/DTTariffMains/nextsubmit`,
        {
          tariffId
        }
      )
      .pipe(
        this.onCatchException('nextSubmit'),
        map((e: ResultModel<TariffDraftResponse>) => e)
      );
  }

  reSubmit(tariffId: string): Observable<ResultModel<TariffDraftResponse>> {
    return this.httpClient
      .patch<ResultModel<TariffDraftResponse>>(
        `${baseUrl}/DTTariffMains/resubmit`,
        {
          tariffId
        }
      )
      .pipe(
        this.onCatchException('reSubmit'),
        map((e: ResultModel<TariffDraftResponse>) => e)
      );
  }

  createDraft(
    id: string,
    validFrom: Date,
    validTo: Date
  ): Observable<TariffDraftResponse> {
    return this.httpClient
      .patch<ResultModel<TariffDraftResponse>>(
        `${baseUrl}/DTTariffMains/draft`,
        {
          tariffId: id,
          validFrom,
          validTo
        }
      )
      .pipe(
        this.onCatchException('createDraft'),
        map((e: ResultModel<TariffDraftResponse>) => e)
      );
  }

  reuseMarkup(id: string): Observable<ResultModel<any>> {
    return this.httpClient
      .post<ResultModel<any>>(`${baseUrl}/DTTariffMains/ReuseMarkups`, {
        tariffId: id
      })
      .pipe(
        this.onCatchException('reuseMarkup'),
        map((e: ResultModel<any>) => e)
      );
  }

  // DETAIL TARIFF
  getTariffDetailByCode(
    tariffCode: string,
    payload: DataListRequestPayload = {}
  ): Observable<TariffDetailResponse<TariffDTMainDetailItem>> {
    return this.httpClient
      .post<TariffDetailResponse<TariffDTMainDetailItem>>(
        `${baseUrl}/DTTariffMains/${tariffCode}/items`,
        payload
      )
      .pipe(
        this.onCatchException('getTariffDetailByCode'),
        map((e: TariffDetailResponse<TariffDTMainDetailItem>) => e)
      );
  }

  setTariffItemActions(
    tariffId: string,
    payload: Array<ItemAction> = []
  ): Observable<ResultModel<null>> {
    return this.httpClient
      .patch<ResultModel<null>>(
        `${baseUrl}/DTTariffMains/${tariffId}/itemActions`,
        payload
      )
      .pipe(
        this.onCatchException('setTariffItemActions'),
        map((e: ResultModel<null>) => e)
      );
  }

  // EXPORT TARIFF
  exportTariffItem(
    tariffID: string,
    payload: Array<ExportPayload> = []
  ): Observable<ResultModel<null>> {
    return this.httpClient
      .post<ResultModel<null>>(
        `${baseUrl}/DTTariffMains/exports/${tariffID}`,
        payload
      )
      .pipe(
        this.onCatchException('exportTariffItem'),
        map((e: ResultModel<null>) => e)
      );
  }

  onCatchException(
    catchFuncName: string = 'TariffDataServiceBase',
    requestData: any = {}
  ) {
    return catchError((err) => {
      const message =
        Date.now().toString() + '_' + 'Could not load ' + catchFuncName;
      localStorage.setItem(message, JSON.stringify({ err, requestData }));

      return throwError(() => (err.error ? err.error : err));
    });
  }
}
