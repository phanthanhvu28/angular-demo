import { Component, ElementRef, Injector } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { DTTariffMains, ItemOptions } from '../../../models';
import { Observable, take, takeUntil, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TariffSmcService } from '../services';
import { TableRowHighlightConfig } from '@models/base-data-list';
import { TransportNewTariffService } from '../new/services/transport-new-tariff.service';

@Component({
  selector: 'app-smc',
  templateUrl: './smc.page.html',
  styleUrls: ['./smc.page.less'],
  providers: [TariffSmcService]
})
export class SmcPage extends AbsBaseDataListComponent<DTTariffMains>{

  public highlightConfig: TableRowHighlightConfig = {
    when: {
      status: 'Active'
    },
    by: 'validTo'
  };
  constructor(
    el: ElementRef,
    private injector: Injector,
    private tariffService: TariffSmcService,
    private router: Router,
    private route: ActivatedRoute    
  ) {
    //super(el);
    super(el,injector);   

   // this.setNvConfig();
    // this.contractService.filterSelection$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((res) => {
    //    // this.filterSelection = res?.data;
    //   });
  }
  override initial(): void {
    super.initial();
  }
  
  getDataListService(): void {
    this.currentTabService = this.tariffService;
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

        Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
      });
  }

  public gotoDetail(tariffCode): void {
    const url = `${tariffCode}`;

    this.router.navigate([url], {
      relativeTo: this.route
    });
  }
  showUploadModal(): void {
    //this.modalCreateContract.show();
    //this.contractService.getFillerUpload();
  }
  refresh(): void {
    this.getTableData();
  }
  setPinnedFilter(data): void {
    if (!data.value) {
      return;
    }
    //this.contractService.updatePinnedFilter(data.value);
  }
  setItemActivateFilter(data): void {
    if (!data.value) {
      return;
    }

    //this.contractService.setItemActivateFilter(data.value);
    this.currentTabService.getTableData();
  }
  goToNew(): void {
    console.log("goToNew")
    const url = `new`;
    const extras: NavigationExtras = {
      relativeTo: this.route
    };

    // if (this.hasTariffActive) {
    //   extras.queryParams = { hasTariffActive: this.hasTariffActive };
    // }

    this.router.navigate([url], extras);
  }

}
