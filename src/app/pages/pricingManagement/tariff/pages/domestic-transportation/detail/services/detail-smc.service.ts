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
import { TariffFilter } from '../../../../models/filter.model';
import {
  ItemAction,
  UserActionRoleModel
} from '../../../../models/item-action.model';
import { UpdatedItemMarkup } from '../../../../models/item-markup.model';
import {
  TariffDetailResponse,
  TariffDetailResponseData,
  TariffDraftResponse
} from '../../../../models/result-list.model';
import { ResultModel } from '../../../../models/result.model';
import { TariffDTMainDetailItem } from '../../../../models/tariff-dt-main-details.model';
import { TariffDataItemService } from '../../../../services/tariff-data-item.service';
import { ProcessActions } from '../../../../tariff.const';
import {
  TRANSPORT_APPROVAL_DETAIL_COLS,
  TRANSPORT_EDIT_DETAIL_COLS,
  TRANSPORT_REJECTED_CHECK_DETAIL_COLS,
  TRANSPORT_REJECTED_CREATERE_DETAIL_COLS,
  TRANSPORT_REJECTED_VIEW_DETAIL_COLS,
  TRANSPORT_VIEW_DETAIL_COLS
} from '../detail.const';
import { TariffSmcApi } from '../../../../api';

@Injectable({
  providedIn: 'root'
})
export class TransportDetailTariffService extends TariffDataItemService<TariffDTMainDetailItem> {
  private subjectTariffItemStatus = new BehaviorSubject<string>('');
  private subjectTariffItemData = new BehaviorSubject<TariffDetailResponseData>(
    null
  );

  public tariffItemStatus$: Observable<string> =
    this.subjectTariffItemStatus.asObservable();
  public tariffItemData$: Observable<TariffDetailResponseData> =
    this.subjectTariffItemData.asObservable();

  public tariffId: string = '';
  public tariffCode: string = '';

  constructor(
    private tariffService: TariffSmcApi,
    injector: Injector
  ) {
    super(injector);
    this.setDataItemCells(TRANSPORT_APPROVAL_DETAIL_COLS);
  }

  public getTableData(): void {
    this.updateItemMarkupHandler(this.mapItemMarkups).subscribe();

    const payload: DataListRequestPayload = this.getPayload();

    this.setLoading(true);
    this.tariffService
      .getTariffDetailByCode(this.tariffCode, payload)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        }),
        finalize(() => this.setLoading(false))
      )
      .subscribe((res: TariffDetailResponse<TariffDTMainDetailItem>) => {
        if (res.data) {
          this.subjectTariffItemData.next(res.data);

          const { processFlows, status, tariffId } = res.data;
          this.setProcessFlows(processFlows);
          this.subjectTariffItemStatus.next(status);
          this.tariffId = tariffId.toString();
        }
        this.setDataItems(this.transformDataItem([...res.items]));
        this.setTotalItem(res.totalItems);
      });
  }

  public changeMarkupsMultiple(
    tariffId: string,
    listChanges: Array<{ Filters: Array<TariffFilter> }>
  ): Observable<ResultModel<boolean>[]> {
    return this.tariffService.changeMarkupsMultiple(tariffId, listChanges).pipe(
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      })
    );
  }

  onSubmit(validFrom: Date, validTo: Date): void {
    this.updateItemMarkupHandler(
      this.mapItemMarkups,
      this.tariffService.submit(this.tariffId, validFrom, validTo)
    )
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((_) => {
        this.getTableData();
        Utils.fireEvent(new Event('RELOAD_PAGE'));
      });
  }

  onNextSubmit(): void {
    this.updateItemMarkupHandler(
      this.mapItemMarkups,
      this.tariffService.nextSubmit(this.tariffId)
    )
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((_) => {
        this.getTableData();
        Utils.fireEvent(new Event('RELOAD_PAGE'));
      });
  }

  onReSubmit(): void {
    this.updateItemMarkupHandler(
      this.mapItemMarkups,
      this.tariffService.reSubmit(this.tariffId)
    )
      .pipe(
        takeUntil(this.destroy$),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((_) => {
        this.getTableData();
        Utils.fireEvent(new Event('RELOAD_PAGE'));
      });
  }

  public setTariffItemActions(
    action: ProcessActions,
    isAll: boolean,
    reason: string = ''
  ): void {
    const payload: Array<ItemAction> = this.getItemActionPayload(
      action,
      isAll,
      reason
    );

    this.setLoading(true);
    this.tariffService
      .setTariffItemActions(this.tariffId, payload)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false)),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((_) => {
        if (action === ProcessActions.decline && isAll) {
          return this.onNextSubmit();
        }
        this.getTableData();
      });
  }
  public setTariffItemAction(
    id: string,
    action: ProcessActions,
    reason: string = ''
  ): void {
    const payload: ItemAction = { itemId: id, processAction: action };
    if (reason) {
      payload.reason = reason;
    }
    this.setLoading(true);
    this.tariffService
      .setTariffItemActions(this.tariffId, [payload])
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.setLoading(false)),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      )
      .subscribe((_) => this.getTableData());
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

  onReuseMarkup(): Observable<ResultModel<any>> {
    return this.tariffService.reuseMarkup(this.tariffId).pipe(
      takeUntil(this.destroy$),
      catchError((error) => {
        this.checkErrorAPI(error);
        return of(error);
      }),
      finalize(() => this.getTableData())
    );
  }

  setColProvider(userAction: UserActionRoleModel): void {
    const asyncData = this.asyncPipe.transform(this.tariffItemData$);
    const isRejected: boolean = asyncData.levelResetRejected !== null;
    if (userAction.isApprover) {
      const colsProvider = isRejected
        ? TRANSPORT_REJECTED_CHECK_DETAIL_COLS
        : TRANSPORT_APPROVAL_DETAIL_COLS;
      return this.setDataItemCells(colsProvider);
    }

    if (userAction.isEditer || userAction.isCreatere) {
      const colsProvider = isRejected
        ? TRANSPORT_REJECTED_CREATERE_DETAIL_COLS
        : TRANSPORT_EDIT_DETAIL_COLS;
      return this.setDataItemCells(colsProvider);
    }

    if (isRejected && userAction.isViewerInProcess) {
      return this.setDataItemCells(TRANSPORT_REJECTED_VIEW_DETAIL_COLS);
    }

    return this.setDataItemCells(TRANSPORT_VIEW_DETAIL_COLS);
  }

  private getItemActionPayload(
    action: ProcessActions,
    isAll: boolean,
    reason: string = ''
  ): Array<ItemAction> {
    if (isAll) {
      return [
        {
          itemId: '0',
          processAction: action,
          reason
        }
      ];
    }
    const payload: Array<ItemAction> = [];
    const asyncDataITem = this.asyncPipe.transform(this.dataItems$);
    asyncDataITem.forEach((item: TariffDTMainDetailItem) => {
      if (item['selected']) {
        payload.push({
          itemId: item.id.toString(),
          processAction: action,
          reason
        });
      }
    });
    return payload;
  }

  protected exportTariffItem(exportData: Array<ExportPayload>): void {
    let payloads = exportData;
    if (!payloads) {
      payloads = [this.getExportPayload('DT-SMC')];
    }

    this.tariffService
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

  updateItemMarkupHandler(
    markupItems: Map<string, UpdatedItemMarkup>,
    callback?: Observable<TariffDraftResponse>
  ): Observable<TariffDraftResponse> {
    if (markupItems.size <= 0) {
      if (callback) {
        return callback;
      }

      return callback ? callback : of({ isError: false });
    }

    return this.tariffService
      .updateItemMarkup(this.tariffId, [...markupItems.values()])
      .pipe(
        takeUntil(this.destroy$),
        switchMap((isError) => {
          if (isError) {
            return of({ isError });
          }

          this.mapItemMarkups.clear();
          if (callback) {
            return callback;
          }

          return of({ isError });
        }),
        catchError((error) => {
          this.checkErrorAPI(error);
          return of(error);
        })
      );
  }
}
