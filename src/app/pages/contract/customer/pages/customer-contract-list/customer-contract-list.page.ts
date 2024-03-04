import { Component, ElementRef } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { ContractService } from '../../services/contract.service';
import { Observable, take, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemOptions } from '@models/base-data-list';
import { LIST_CONTRACT_OPTION } from '../../../components/const/contract.const';


@Component({
  selector: 'app-customer-contract-list.page',
  templateUrl: './customer-contract-list.page.html',
  styleUrls: ['./customer-contract-list.page.less'],
  providers: [ContractService]
})
export class CustomerContractListPage extends AbsBaseDataListComponent<any> {
  nvSelections: { [key: string]: Array<ItemOptions> } = LIST_CONTRACT_OPTION;
  itemActivateFilter$: Observable<string> =
    this.contractService.itemActivateFilter$;
  
  constructor(
    el: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService   
  ) {
    super(el);
    
  }

  getDataListService() {
    this.currentTabService = this.contractService;
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

        Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
      });
    //this.contractUploadService.getFilterUploadContract();
  }
  onFilter(e): void {
    this.setFilterData(e);
  }
  gotoDetail(id): void {
    this.router.navigate(['./', id], {
      relativeTo: this.route
    });
  }
  showUploadModal(): void {
   // this.modalCreateContract.show();
    //this.contractUploadService.getFilterUploadContract();
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

    this.contractService.setItemActivateFilter(data.value);
    this.currentTabService.getTableData();
  }

}
