import { AsyncPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { VcNotificationService } from '@shared/services';
import {
  BehaviorSubject,
  Observable,
  catchError,
  delay,
  finalize,
  takeUntil,
  tap,
  throwError
} from 'rxjs';
import { ResultDataAction, ResultListModel } from '../../models';
import { AbsBaseContractService } from '../../services';
import CostingAnnexData, {
  CostingData,
  CostingItemsCount
} from '../models/costing-annex.model';
import { DataListRequestPayload } from '@models/base-data-list';
import {
  ContractChargeNameByProductCode,
  ContractScopesOfWorkCode
} from '../../const';
import { ApiCosting } from '../api';

@Injectable({
  providedIn: 'root'
})
export class CostingService extends AbsBaseContractService {
  private subjectLoading = new BehaviorSubject<boolean>(false);

  public loading$: Observable<boolean> = this.subjectLoading.asObservable();
  private subjectDataCosting = new BehaviorSubject<{
    [key: string]: CostingAnnexData;
  }>(null);
  dataCosting$: Observable<{
    [key: string]: CostingAnnexData;
  }> = this.subjectDataCosting.asObservable();

  costingItemsCount: CostingItemsCount = new CostingItemsCount();
  constructor(
    private api: ApiCosting,
    private vcNotificationService: VcNotificationService,
    private asyncPipe: AsyncPipe
  ) {
    super();
  }
  setCostingItemsCount(value: CostingItemsCount): void {
    this.costingItemsCount.setValue(value);
  }
  setLoading(value: boolean): void {
    this.subjectLoading.next(value);
  }
  setDataCosting(value: { [key: string]: CostingAnnexData }): void {
    const dataCosting = this.asyncPipe.transform(this.dataCosting$);

    this.subjectDataCosting.next(
      structuredClone({ ...structuredClone(dataCosting), ...value })
    );
  }
  //DT
  getDataCostingDTMain(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getDTMain(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingDTVAS(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getDTVas(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => {
        this.setLoading(false);
      })
    );
  }
  getDataCostingDTBLC(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getDTBLC(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  //FM
  getDataCostingFMMain(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getFMMain(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingFMVAS(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getFMVas(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingFMBLC(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getFMBLC(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingFMSurcharge(
    payload
  ): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getFMSurcharge(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  //CC
  getDataCostingCCMain(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getCCMain(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingCCVAS(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getCCVas(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  //WH
  getDataCostingWHMain(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getWHMain(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }
  getDataCostingWHVAS(payload): Observable<ResultListModel<CostingAnnexData>> {
    this.setLoading(true);
    return this.api.getWHVas(payload).pipe(
      catchError((err: ResultDataAction) => {
        return throwError(() => {
          if (err.isError) {
            //this.vcNotificationService.error('Error', err.errorMessage);
          }
        });
      }),
      takeUntil(this.destroy$),
      finalize(() => this.setLoading(false))
    );
  }

  public getDataCosting(
    nvProductCode: string,
    nvChargeCode: string,
    payload: DataListRequestPayload
  ): Observable<ResultListModel<CostingAnnexData>> {
    const dataCostingApi: {
      [key: string]: {
        [key: string]: Observable<ResultListModel<CostingAnnexData>>;
      };
    } = {
      [ContractScopesOfWorkCode.dt]: {
        [ContractChargeNameByProductCode.ServiceMainCharges]:
          this.getDataCostingDTMain(payload),
        [ContractChargeNameByProductCode.ValueAddedServices]:
          this.getDataCostingDTVAS(payload),
        [ContractChargeNameByProductCode.BasicLocalCharges]:
          this.getDataCostingDTBLC(payload)
      },
      [ContractScopesOfWorkCode.fm]: {
        [ContractChargeNameByProductCode.ServiceMainCharges]:
          this.getDataCostingFMMain(payload),
        [ContractChargeNameByProductCode.ValueAddedServices]:
          this.getDataCostingFMVAS(payload),
        [ContractChargeNameByProductCode.BasicLocalCharges]:
          this.getDataCostingFMBLC(payload),
        [ContractChargeNameByProductCode.Surcharges]:
          this.getDataCostingFMSurcharge(payload)
      },
      [ContractScopesOfWorkCode.cc]: {
        [ContractChargeNameByProductCode.ServiceMainCharges]:
          this.getDataCostingCCMain(payload),
        [ContractChargeNameByProductCode.ValueAddedServices]:
          this.getDataCostingCCVAS(payload)
      },
      [ContractScopesOfWorkCode.wh]: {
        [ContractChargeNameByProductCode.ServiceMainCharges]:
          this.getDataCostingWHMain(payload),
        [ContractChargeNameByProductCode.ValueAddedServices]:
          this.getDataCostingWHVAS(payload)
      }
    };
    return dataCostingApi?.[nvProductCode]?.[nvChargeCode].pipe(
      tap((res) => this.setDataCosting({ [nvChargeCode]: res.data }))
    );
  }
}
