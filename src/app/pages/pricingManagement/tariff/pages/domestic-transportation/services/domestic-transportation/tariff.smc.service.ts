import { Injectable, Injector } from "@angular/core";
import { BaseDataListService } from "src/app/abstracts/services/base-data-list.service";
import { DTTariffMains, ResultListModel } from "../../../../models";
import { TRANSPORT_LIST_COLS } from "../../../list-tariff-const";
import { TariffSmcApi } from "../../../../api";
import { DataListRequestPayload } from "@models/base-data-list";
import { catchError, finalize, of, takeUntil } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TariffSmcService extends BaseDataListService<DTTariffMains>{
    constructor(injector: Injector,
        private api: TariffSmcApi)
    {
    super(injector);
    this.setDataItemCells(TRANSPORT_LIST_COLS)
    }
    
    
    public getTableData(): void {
        const payload: DataListRequestPayload = this.getPayload();
        
        this.setLoading(true);
        this.api
        .getAll(payload)
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => this.setLoading(false)),
          catchError((error) => {
            this.checkErrorAPI(error);
            return of(error);
          })
        )
        .subscribe((res: ResultListModel<DTTariffMains>) => {
          this.setDataItems(res.items);
          this.setTotalItem(res.totalItems);
          //this.aggregateCount = res.data?.aggregateCount;
        });
    }
   

}