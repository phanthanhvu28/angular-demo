import { Component, ElementRef, Injector } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ModalMessageData } from '@common-components/base-modal-message/models/typings';
import { NvMessageService } from '@common-components/base-modal-message/services/nv-message.service';
import { Observable, take, takeUntil, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { AbsTariffDataItemsComponent } from '../../../components/tariff-data-items/tariff-data-list.component';
import { NewTariffDataModel } from '../../../models/result-list.model';
import { TariffDTMainDetailItem } from '../../../models/tariff-dt-main-details.model';
import { DTTariffMains } from '../../../models/tariff-dt-main.model';
import { TransportNewTariffService } from './services/transport-new-tariff.service';
// import { SERVICES_MAP } from '../domestic-transportation.constant';
// import { BlcNewTariffService } from './services/blc-new-tariff.service';
// import { TransportNewTariffService } from './services/transport-new-tariff.service';
// import { VasNewTariffService } from './services/vas-new-tariff.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.less'],
  providers: [
     TransportNewTariffService,
    // VasNewTariffService,
    // BlcNewTariffService
  ]
})
export class NewTariffSmcComponent extends AbsTariffDataItemsComponent<DTTariffMains> {
  formDate: FormGroup;
  activatedTab: string;

  hasTariffActive: boolean = false;
  isVisibleModalFilter = false;
  isVisibleModalChangePercentMarkup = false;
  isVisibleModalViewChangeResult: boolean = false;
  listViewChangeResult = [];

  listAlertFlag = [];
  public newTariffData$: Observable<NewTariffDataModel>;
  constructor(
    el: ElementRef,
    private router: Router,
    injector: Injector,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private messageService: NvMessageService,
    private tariffNewService:TransportNewTariffService
  ) {
    super(el,injector);
    this.formDate = this.fb.group({
      validFrom: ['', { disabled: true }],
      validTo: ['']
    });
    console.log("new component");

  }

  ngAfterViewInit(): void {
    this.currentTabService = this.tariffNewService;
    console.log("ngAfterViewInit");

    this.newTariffData$ = this.currentTabService.newTariffData$;
    this.newTariffData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: NewTariffDataModel) => {
        if (!res) return;
        this.formDate.controls['validFrom'].setValue(res.validFrom);
        this.formDate.controls['validTo'].setValue(res.validTo);

        this.setAggregateCount(res?.aggregateCount);
        this.hasTariffActive = res.hasTariffActive;
      });
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        this.tableHeight = Utils.getTableHeight(this.el.nativeElement);
        Utils.setTableHeight(this.el.nativeElement, this.tableHeight);
      });
  }

  onBack(): void {
    const url = `../`;
    this.router.navigate([url], { relativeTo: this.activatedRoute });
  }

  onExport(): void {
    this.currentTabService.exportTariffItem();
  }

  onCreate(): void {
    const { validFrom, validTo } = this.formDate.value;
    this.currentTabService
      .onCreate(validFrom, validTo)
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ data, isError }) => {
        if (!isError) {
          this.reloadAfterSubmit(data.tariffCode);
        }
      });
  }

  onSubmit(): void {
    const messageContent: ModalMessageData = {
      title: 'Do you want to submit?',
      buttons: [
        {
          label: 'Confirm',
          class: 'base-button--primary',
          command: (close: () => void) => {
            close();
            onConfirmSubmit.bind(this)();
          }
        }
      ]
    };
    this.messageService.showMessage(messageContent);
    function onConfirmSubmit(): void {
      const { validFrom, validTo } = this.formDate.value;
      this.currentTabService
        .onSubmit(validFrom, validTo)
        .pipe(takeUntil(this.destroy$))
        .subscribe(({ data, isError }) => {
          if (!isError) {
            this.reloadAfterSubmit(data.tariffCode);
          }
        });
    }
  }

  setAggregateCount(aggregateCount): void {
    if (!aggregateCount) return;

    const listAlertFlag = [];

    if (aggregateCount.NewestItems) {
      listAlertFlag.push(aggregateCount.NewestItems + ' new cost');
    }

    if (aggregateCount.ChangedAvgCosts) {
      listAlertFlag.push(aggregateCount.ChangedAvgCosts + ' change cost');
    }

    if (aggregateCount.ChangedMarkups) {
      listAlertFlag.push(aggregateCount.ChangedMarkups + ' change % markup');
    }

    if (aggregateCount.ConstantItems) {
      listAlertFlag.push(aggregateCount.ConstantItems + ' Constant');
    }

    if (aggregateCount.ChangedBothAvgCostMarkup) {
      listAlertFlag.push(
        aggregateCount.ChangedBothAvgCostMarkup + ' change cost & % markup'
      );
    }

    this.listAlertFlag = listAlertFlag;
  }

  openFilterModal(): void {
    this.isVisibleModalFilter = true;
  }

  onClickReuseMarkup(): void {
    this.currentTabService
      .onReuseMarkup()
      .pipe(takeUntil(this.destroy$))
      .subscribe((resp) => {
        if (resp?.data) {
          this.listViewChangeResult = resp?.data;
          this.isVisibleModalViewChangeResult = true;
        }
      });
  }

  onClickOpenModalChangePercentMarkup(): void {
    this.isVisibleModalChangePercentMarkup = true;
  }

  onChangeMarkup(value: number, model: TariffDTMainDetailItem): void {
    this.currentTabService.onChangeMarkup(model, value);
  }
  onChangeFlat(value: number, model: TariffDTMainDetailItem): void {
    this.currentTabService.onChangeFlat(model, value);
  }

  getDataListService(): void {
   
    this.currentTabService = this.tariffNewService;
    this.newTariffData$ = this.currentTabService.newTariffData$;

    console.log("newTariffData==>",this.newTariffData$);

    // timer(100)
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

    //     Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
    //   });

    //this.newTariffData$.pipe(takeUntil(this.destroy$))
      
     
    // this.activatedRoute.paramMap
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((params: ParamMap) => {
    //     this.activatedTab = params.get('tab');
    //     this.currentTabService = Utils.getServiceBy(
    //       this.activatedTab,
    //       'new',
    //       this.injector,
    //       SERVICES_MAP
    //     );
    //   });
  }

  private reloadAfterSubmit(tariffCode: string): void {
    const url = `../${tariffCode}`;
    this.router.navigate([url], { relativeTo: this.activatedRoute });
  }
}
