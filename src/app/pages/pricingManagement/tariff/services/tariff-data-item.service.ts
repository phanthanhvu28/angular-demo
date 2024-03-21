import { Injectable, Injector } from '@angular/core';
import { ExportPayload } from '@models/base-data-list';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  Observable,
  takeUntil
} from 'rxjs';
import { BaseDataListService } from 'src/app/abstracts/services/base-data-list.service';
import { UpdatedItemMarkup } from '../models/item-markup.model';
import { TariffDraftResponse } from '../models/result-list.model';

@Injectable({
  providedIn: 'root'
})
export abstract class TariffDataItemService<
  T
> extends BaseDataListService<T> {
  private _mapItemMarkups: Map<string, UpdatedItemMarkup> = new Map<
    string,
    UpdatedItemMarkup
  >();
  private subjectMapItemMarkups = new BehaviorSubject<
    Map<string, UpdatedItemMarkup>
  >(this._mapItemMarkups);

  public mapItemMarkups$: Observable<Map<string, UpdatedItemMarkup>> =
    this.subjectMapItemMarkups.asObservable();

  constructor(injector: Injector) {
    super(injector);
    this.watchItemMarkupChange();
  }

  public abstract updateItemMarkupHandler(
    markupItems: Map<string, UpdatedItemMarkup>,
    callback?: Observable<TariffDraftResponse>
  ): Observable<TariffDraftResponse>;

  protected transformDataItem(data: Array<any>): Array<any> {
    const newData = structuredClone(data);
    newData.forEach((dataItem) => {
      dataItem['selected'] = false;
    });

    return newData;
  }

  public get mapItemMarkups(): Map<string, UpdatedItemMarkup> {
    return this._mapItemMarkups;
  }

  protected setMarkupItem(item: UpdatedItemMarkup): void {
    this._mapItemMarkups.set(item.itemId, item);
    this.subjectMapItemMarkups.next(this._mapItemMarkups);
  }

  protected getExportPayload(sheetTitle: string = 'Default'): ExportPayload {
    const { filters, sorts } = this.getPayload();
    const asyncDataCells = this.asyncPipe.transform(this.dataItemCells$);

    const columns = [];
    for (const cellItem of asyncDataCells) {
      if (
        !cellItem.key ||
        cellItem?.key === 'processAction' ||
        !!cellItem.isHidden
      ) {
        continue;
      }
      const exportCellKey =
        cellItem.key[0].toLocaleUpperCase() + cellItem.key.slice(1);
      columns.push(exportCellKey);
    }

    return { filters, sorts, columns, sheetTitle };
  }

  protected setExportPayloadSheetTile(
    payloads: Array<ExportPayload>,
    tabName: string = 'Tariff Service'
  ): Array<ExportPayload> {
    const newPayload = payloads.map((sheetItem) => {
      let title = `${tabName}`;
      if (sheetItem.sheetTitle.includes('Rejected')) {
        title = `${tabName}-Rejected`;
      }
      if (sheetItem.sheetTitle.includes('Approved')) {
        title = `${tabName}-Approved`;
      }
      sheetItem.sheetTitle = title;
      return sheetItem;
    });

    return newPayload;
  }

  protected downloadFileWithLink(data: string): any {
    const hiddenElement = document.createElement('a');
    hiddenElement.href = data;
    hiddenElement.target = '_blank';
    hiddenElement.click();
    hiddenElement.remove();
  }

  protected watchItemMarkupChange(): void {
    this.mapItemMarkups$
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(this.DEFAULT_DEBOUNCE_SECONDS),
        distinctUntilChanged((prev, curr) => prev.size !== curr.size)
      )
      .subscribe((markupItems) => {
        this.updateItemMarkupHandler(markupItems)
          .pipe(takeUntil(this.destroy$))
          .subscribe(({ isError }) => {
            if (!isError) {
              return this._mapItemMarkups.clear();
            }
            this.getTableData();
          });
      });
  }
}
