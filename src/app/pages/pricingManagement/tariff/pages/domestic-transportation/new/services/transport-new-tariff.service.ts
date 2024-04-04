import { Injectable, Injector } from '@angular/core';
import { DataListRequestPayload, ExportPayload } from '@models/base-data-list';
import {
  BehaviorSubject,
  catchError,
  finalize,
  Observable,
  of,
  switchMap,
  takeUntil
} from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import {
  FilterDTTransportationDetail,
  TariffFilter
} from '../../../../models/filter.model';
import { UpdatedItemMarkup } from '../../../../models/item-markup.model';
import {
  NewTariffDataModel,
  ResultListModel,
  TariffDraftResponse
} from '../../../../models/result-list.model';
import { ResultModel } from '../../../../models/result.model';
import { TariffDTMainDetailItem } from '../../../../models/tariff-dt-main-details.model';
import { TariffDataItemService } from '../../../../services/tariff-data-item.service';
import { TRANSPORT_NEW_COLS } from '../new.const';
import { TariffSmcApi } from '../../../../api';

@Injectable({
  providedIn: 'root'
})
export class TransportNewTariffService extends TariffDataItemService<TariffDTMainDetailItem> {
  private subjectTempsData = new BehaviorSubject<NewTariffDataModel>(null);
  public newTariffData$: Observable<NewTariffDataModel> =
    this.subjectTempsData.asObservable();

  private tariffId: string = '';
  selectedDateRange: any = [];

  constructor(
    private tariffApi: TariffSmcApi,
    injector: Injector) 
  {
    super(injector);
    this.setDataItemCells(TRANSPORT_NEW_COLS);
  }

  public getTableData(): void {
    this.updateItemMarkupHandler(this.mapItemMarkups).subscribe();

    const payload: DataListRequestPayload = this.getPayload();

    this.setLoading(true);
    this.tariffApi
      .getTariffTemps(payload)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false)),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((res: ResultListModel<TariffDTMainDetailItem>) => {
        if (res.data) {
          this.tariffId = res.data.tariffId;
          this.subjectTempsData.next(res.data);
        }
        this.setDataItems(res.items);
        this.setTotalItem(res.totalItems);
      });
  }

  public getFiltersItems(): Observable<FilterDTTransportationDetail> {
    return this.tariffApi.getFiltersItems().pipe(
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      })
    );
  }

  public changeMarkupsMultiple(
    tariffId: string,
    listChanges: Array<{ Filters: Array<TariffFilter> }>
  ): Observable<ResultModel<boolean>[]> {
    return this.tariffApi.changeMarkupsMultiple(tariffId, listChanges).pipe(
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      })
    );
  }

  public onChangeMarkup(
    model: TariffDTMainDetailItem,
    value: number = 0
  ): void {
    const updatedItem = Utils.calculateAvgCostByMakup(value, model);
    this.setMarkupItem(updatedItem);
  }

  public onChangeFlat(model: TariffDTMainDetailItem, value: number = 0): void {
    const updatedItem = Utils.calculateAvgCostByFlat(value, model);
    this.setMarkupItem(updatedItem);
  }

  onSubmit(validFrom: Date, validTo: Date): Observable<TariffDraftResponse> {
    return this.onSubmitNew(validFrom, validTo).pipe(
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      })
    );
  }
  onCreate(validFrom: Date, validTo: Date): Observable<TariffDraftResponse> {
    return this.onCreateDraft(validFrom, validTo).pipe(
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      })
    );
  }

  onReuseMarkup(): Observable<ResultModel<any>> {
    return this.tariffApi.reuseMarkup(this.tariffId).pipe(
      takeUntil(this.destroy$),
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      }),
      finalize(() => this.getTableData())
    );
  }

  protected exportTariffItem(exportData: Array<ExportPayload>): void {
    let payloads = exportData;
    if (!payloads) {
      payloads = [this.getExportPayload('DT-SMC')];
    }

    this.tariffApi
      .exportTariffItem(
        this.tariffId,
        this.setExportPayloadSheetTile(payloads, 'DT-SMC')
      )
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe(({ data }) => this.downloadFileWithLink(data));
  }

  private onSubmitNew(
    validFrom: Date,
    validTo: Date
  ): Observable<TariffDraftResponse> {
    return this.updateItemMarkupHandler(
      this.mapItemMarkups,
      this.tariffApi.submitNew(this.tariffId, validFrom, validTo)
    ) as Observable<TariffDraftResponse>;
  }

  private onCreateDraft(
    validFrom: Date,
    validTo: Date
  ): Observable<TariffDraftResponse> {
    return this.updateItemMarkupHandler(
      this.mapItemMarkups,
      this.tariffApi.createDraft(this.tariffId, validFrom, validTo)
    ) as Observable<TariffDraftResponse>;
  }

  updateItemMarkupHandler(
    markupItems: Map<string, UpdatedItemMarkup>,
    callback?: Observable<TariffDraftResponse>
  ): Observable<TariffDraftResponse> {
    const response = { isError: false };
    if (markupItems.size <= 0) {
      return callback ? callback : of(response);
    }

    return this.tariffApi
      .updateItemMarkup(this.tariffId, [...markupItems.values()])
      .pipe(
        takeUntil(this.destroy$),
        switchMap((isError) => {
          response.isError = isError;
          if (isError) {
            return of(response);
          }

          if (callback) {
            return callback;
          }

          this.mapItemMarkups.clear();
          return of(response);
        }),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      );
  }
}
