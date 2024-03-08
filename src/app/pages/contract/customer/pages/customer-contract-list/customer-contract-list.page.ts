import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { ContractService } from '../../services/contract.service';
import { Observable, take, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemOptions } from '@models/base-data-list';

import { ModalCreateEditContractComponent } from '../../components/modal-create-edit-contract/modal-create-edit-contract.component';
import { DataFilterContract } from '../../models/filter-upload.model';
import { CONTRACT_OPTIONS_FILTER_PINNED, LIST_CONTRACT_OPTION } from '../../../const';

@Component({
  selector: 'app-customer-contract-list.page',
  templateUrl: './customer-contract-list.page.html',
  styleUrls: ['./customer-contract-list.page.less'],
  providers: [ContractService]
})
export class CustomerContractListPage extends AbsBaseDataListComponent<any> {
  pinnedFilter$: Observable<string> = this.contractService.pinnedFilter$;
  listOptionsFilterPinned: Array<ItemOptions> = CONTRACT_OPTIONS_FILTER_PINNED;
  nvSelections: { [key: string]: Array<ItemOptions> } = LIST_CONTRACT_OPTION;
  filterSelection: DataFilterContract;
  @ViewChild('modalCreateContract') modalCreateContract: ModalCreateEditContractComponent;

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
   this.modalCreateContract.showModal();
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
