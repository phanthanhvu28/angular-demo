import { Component, ElementRef } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { ContractService } from '../../services/contract.service';
import { take, timer } from 'rxjs';
import { Utils } from 'src/app/utils/utils';


@Component({
  selector: 'app-customer-contract-list.page',
  templateUrl: './customer-contract-list.page.html',
  styleUrls: ['./customer-contract-list.page.less'],
  providers: [ContractService]
})
export class CustomerContractListPage extends AbsBaseDataListComponent<any> {
  constructor(
    el: ElementRef,
    private contractService: ContractService   
  ) {
    super(el);
    
  }

  getDataListService() {
    this.currentTabService = this.contractService;
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        //this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

        Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
      });
    //this.contractUploadService.getFilterUploadContract();
  }
  

}
