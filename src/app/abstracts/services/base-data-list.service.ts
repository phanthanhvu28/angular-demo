import { AsyncPipe } from '@angular/common';
import { Injectable, Injector, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NvMessageService } from '@common-components/base-modal-message/services/nv-message.service';
import { BehaviorSubject, Observable, ReplaySubject, takeUntil } from 'rxjs';
import { DataListRequestPayload, FilterComparison, ProcessFlowModel, TableDataCell } from 'src/app/models/base-data-list';
import { ResultModel } from 'src/app/pages/pricingManagement/tariff/models';
import { TariffErrorCode } from 'src/app/pages/pricingManagement/tariff/tariff.const';

@Injectable({
    providedIn: 'root'
  })
export abstract class BaseDataListService<T> {
    protected readonly DEFAULT_DEBOUNCE_SECONDS = 0 * 1000;

    protected pageIndexNumber: number = 1;
    protected pageSizeNumber: number = 10;
    protected searchText: string = '';
  
    private subjectLoading = new BehaviorSubject<boolean>(false);
    private subjectDataItems = new BehaviorSubject<Array<any>>([]);
    private subjectDataItemCells = new BehaviorSubject<Array<TableDataCell>>([]);
    private subjectTotalItem = new BehaviorSubject<number>(0);
    private subjectPageIndex = new BehaviorSubject<number>(this.pageIndexNumber);
    private subjectPageSize = new BehaviorSubject<number>(this.pageSizeNumber);
    private subjectSearchText = new BehaviorSubject<string>(""); 

    public loading$: Observable<boolean> = this.subjectLoading.asObservable();
    public dataItemCells$: Observable<Array<TableDataCell>> =this.subjectDataItemCells.asObservable();
    public dataItems$: Observable<Array<any>> =this.subjectDataItems.asObservable();

    public totalItem$: Observable<number> = this.subjectTotalItem.asObservable();
    public pageIndex$: Observable<number> = this.subjectPageIndex.asObservable();
    public pageSize$: Observable<number> = this.subjectPageSize.asObservable();
    public searchText$: Observable<string> =this.subjectSearchText.asObservable();
   

    private subjectProcessFlows = new BehaviorSubject<Array<ProcessFlowModel>>(      []    );

    public processFlows$: Observable<Array<ProcessFlowModel>> = this.subjectProcessFlows.asObservable();

  // Filter && Search && Pagination
    filter: Array<any> = [];
    sorts: Array<string> = [];
    destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

    asyncPipe: AsyncPipe;
    router: Router;
    activatedRoute: ActivatedRoute;
    messageService: NvMessageService;

    constructor(@Optional() protected injector: Injector) {
        this.asyncPipe = this.injector.get(AsyncPipe);
        this.router = this.injector.get(Router);
        this.activatedRoute = this.injector.get(ActivatedRoute);
        this.messageService = this.injector.get(NvMessageService);

        this.pageIndex$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
            this.pageIndexNumber = res;
          });
          this.pageSize$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
            this.pageSizeNumber = res;
          });
    }

    public abstract getTableData(): void;
    searchHandler(searchText: string): void {
        this.searchText = searchText;
        this.subjectPageIndex.next(1);
        this.getTableData();
    }
    protected setSearchText(value: string): void {
        this.subjectSearchText.next(value);
    }
    
    public getPayload(): DataListRequestPayload {
        const search = {
          fieldName: 'tariffCode',
          comparison: FilterComparison.Contains,
          fieldValue: this.searchText
        };
    
        return {
          includes: [],
          filters: this.searchText ? [...this.filter, search] : this.filter,
          sorts: this.sorts,
          page: this.pageIndexNumber,
          pageSize: this.pageSizeNumber
        };
      }
    
      // Panigation
      protected goToPage(pageIndex: number): void {
        this.subjectPageIndex.next(pageIndex);
        this.getTableData();
      }
    
      protected setDefaultPageSize(pageSize: number): void {
        this.subjectPageIndex.next(1);
        this.subjectPageSize.next(pageSize);
      }
    
      protected changePageSize(pageSize: number): void {
        this.subjectPageIndex.next(1);
        this.subjectPageSize.next(pageSize);
        this.getTableData();
      }
    
      protected destroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
      }
    
      protected setLoading(isLoading: boolean): void {
        this.subjectLoading.next(isLoading);
      }
      protected setDataItemCells(columns: Array<TableDataCell>): void {
        this.subjectDataItemCells.next(columns);
      }
      public setDataItems(dataBody: Array<any>): void {
        this.subjectDataItems.next(dataBody);
      }
    
      protected setPageIndex(pageIndex: number): void {
        this.subjectPageIndex.next(pageIndex);
      }
      protected setPageSize(pageSize: number): void {
        this.subjectPageSize.next(pageSize);
      }
    
      protected setTotalItem(totalItem: number): void {
        this.subjectTotalItem.next(totalItem);
      }

      protected checkErrorAPI(error: ResultModel<null>): void {
        const { errorCode, errorMessage } = error;
        if (errorCode === TariffErrorCode.AlreadyHaveTariffInProcess) {
          this.messageService.showErrorMessage({
            content: errorMessage,
            buttons: [
              { label: 'Close' },
              {
                label: 'Back to list',
                class: 'base-button--primary',
                command: (close) => {
                  close();
                  this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute
                  });
                }
              }
            ]
          });
          return;
        }
        if (errorCode === TariffErrorCode.NotFound) {
          this.messageService.showNoDataMessage({
            content: errorMessage,
            hasCloseIcon: false,
            buttons: [
              {
                label: 'Back to list',
                class: 'base-button--primary',
                command: (close) => {
                  close();
                  this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute
                  });
                }
              }
            ]
          });
          return;
        }
        if (errorCode === TariffErrorCode.AccessDeny) {
          this.messageService.showForbiddenMessage({
            content: errorMessage,
            hasCloseIcon: false,
            buttons: [
              {
                label: 'Back to list',
                class: 'base-button--primary',
                command: (close) => {
                  close();
                  this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute
                  });
                }
              }
            ]
          });
          return;
        }
        if (errorCode === TariffErrorCode.NotFoundCostData) {
          this.messageService.showNoDataMessage({
            content: errorMessage,
            hasCloseIcon: false,
            buttons: [
              {
                label: 'Back to list',
                class: 'base-button--primary',
                command: (close) => {
                  close();
                  this.router.navigate(['../'], {
                    relativeTo: this.activatedRoute
                  });
                }
              }
            ]
          });
          return;
        }
        this.messageService.showErrorMessage({ content: errorMessage });
        return;
      }

      protected setProcessFlows(processFlows: Array<ProcessFlowModel> = []): void {
        this.subjectProcessFlows.next(processFlows);
      }
      
}

     
