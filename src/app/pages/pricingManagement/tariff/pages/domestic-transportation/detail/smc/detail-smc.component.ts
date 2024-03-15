import { Component, ElementRef, Injector } from '@angular/core';
import { AbsTariffDataItemsComponent } from '../../../../components/tariff-data-items/tariff-data-list.component';
import { TariffDTMainDetailItem, TariffDetailResponseData } from '../../../../models';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { TransportDetailTariffService } from '../services/detail-smc.service';
import { Observable, take, takeUntil, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { ProcessActions } from '../../../../tariff.const';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-smc',
  templateUrl: './detail-smc.component.html',
  styleUrls: ['./detail-smc.component.less'],
  providers:[
    TransportDetailTariffService
  ]
})
export class DeatailSmcComponent extends AbsTariffDataItemsComponent<TariffDTMainDetailItem>  {
  
  public currentTariffStatus$: Observable<string>;
  public currentTariffItemData$: Observable<TariffDetailResponseData>;
  formDate: FormGroup;
  activatedTab: string;

  tariffCode: string = '';

  listAlertFlag = [];

  listApprovalProcess = [];

  isVisibleModalFilter = false;
  isVisibleModalChangePercentMarkup = false;
  isVisibleDeclineReasonModal = false;
  isVisibleModalViewChangeResult: boolean = false;
  listViewChangeResult = [];

  levelResetRejected: number = -1;
  isSelectedItem: boolean = false;
  isApproved: boolean = false;

  private _declineItem: string = '';
  public readonly ProcessActions = ProcessActions;
  constructor(
    el: ElementRef,
    private injector: Injector,
    private tariffDetailService: TransportDetailTariffService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){
    super(el);

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.tariffCode = params.get('tariffCode');      
      });
  }
  ngAfterViewInit(): void {
    this.currentTariffStatus$ = this.currentTabService.tariffItemStatus$;
    this.currentTariffItemData$ = this.currentTabService.tariffItemData$;

    this.transformMapApprovalProcess();

    this.currentTabService.tariffItemData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: TariffDetailResponseData) => {
        if (!res) return;

        // TODO: check user have permission to access tariff 'Draft'
        // const canAccessDetailDraft = DetailTariffHelpers.getDraftPermission(
        //   this.currentUser,
        //   res.status
        // );
        // if (!canAccessDetailDraft) {
        //   this.router.navigateByUrl('/403');
        //   return;
        // }

        //this.isApproved =          res.status.toLocaleLowerCase() === StatusEnum.Approved;

        this.levelResetRejected =
          res.levelResetRejected !== null ? res.levelResetRejected : -1;

        this.formDate.controls['validFrom'].setValue(res.validFrom);
        this.formDate.controls['validTo'].setValue(res.validTo);

        this.updateColsAndUserAction(res);
       // this.setAggregateCount(res?.aggregateCount);
        //this.updateTableHeight();
      });
  }
  override initial(): void {
    super.initial();
  }

  openFilterModal(event: any): void {
    throw new Error('Method not implemented.');
  }
 getDataListService(): void { 
  console.log(this.tariffCode)
  this.currentTabService = this.tariffDetailService;
  this.currentTabService.tariffCode = this.tariffCode;

  timer(100)
      .pipe(take(1))
      .subscribe(() => {
        this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

        Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
      });
  }

  onSubmit(): void {

  }
  onConfirm(): void {
  }
  onClickReuseMarkup(): void {
  }
  onClickOpenModalChangePercentMarkup(): void {
    
  }
  onClickApprove(applyAll: boolean = false): void {
  }
  onClickDecline(applyAll: boolean = false): void {
  }
  onChangeMarkup(value: number, model: TariffDTMainDetailItem): void {
   
  }
  onChangeFlat(value: number, model: TariffDTMainDetailItem): void {
    this.currentTabService.onChangeFlat(model, value);
  }

  onSelectedItem(): void {
   
  }
  onClickApproveItem({ id, processAction }: TariffDTMainDetailItem): void {
  
  }
  onClickDeclineItem({ id, processAction }: TariffDTMainDetailItem): void {
   
  }
  onExport(): void {
  }
  onBack(): void {
    const url = `../`;
    this.router.navigate([url], { relativeTo: this.activatedRoute });
  }
  transformMapApprovalProcess(): void {
    this.currentTabService.processFlows$
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        if (resp) {
          this.listApprovalProcess = resp.map((item) => {
            return {
              avatarUrl: item.avatarUrl,
              name: item.username,
              status: item.generalStatus,
              role: item.roleDisplayName,
              // date: this.datePipe.transform(
              //   item.processActionAt || item.nextActionDueDateAt,
              //   'dd/MM/yyyy'
              // ),
              isComplete: !!item.processActionAt
            };
          });
        }
      });
  }
}
