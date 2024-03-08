import { Component, ElementRef, ViewChild } from '@angular/core';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { Observable, take, takeUntil, timer } from 'rxjs';

import { ItemOptions } from '@models/base-data-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
//import { ModalCreateEditContractComponent } from '../../components';
import ContractData, { DataFilterContract } from '../../models/contract.model';
import { ContractService } from '../../services';
import { CONTRACT_OPTIONS_FILTER_PINNED, LIST_CONTRACT_OPTION } from '../../../const';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.page.html',
  styleUrls: ['./contract-list.page.less'],
  providers: [ContractService]
})
export class ContractListPage extends AbsBaseDataListComponent<ContractData> {
  filterSelection: DataFilterContract;
  itemActivateFilter$: Observable<string> =
    this.contractService.itemActivateFilter$;
  pinnedFilter$: Observable<string> = this.contractService.pinnedFilter$;
  listOptionsFilterPinned: Array<ItemOptions> = CONTRACT_OPTIONS_FILTER_PINNED;
  nvSelections: { [key: string]: Array<ItemOptions> } = LIST_CONTRACT_OPTION;

  // @ViewChild('modalCreateContract')  modalCreateContract: ModalCreateEditContractComponent;
  constructor(
    el: ElementRef,
    private contractService: ContractService,
    private router: Router,
    private route: ActivatedRoute    
  ) {
    super(el);
    this.setNvConfig();
    this.contractService.filterSelection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
       // this.filterSelection = res?.data;
      });
  }

  getDataListService() {
    this.currentTabService = this.contractService;
    timer(100)
      .pipe(take(1))
      .subscribe(() => {
        this.tableHeight = Utils.getTableHeight(this.el.nativeElement);

        Utils.setTableHeight(this.el.nativeElement, this.tableHeight - 62);
      });
  }

  onFilter(e): void {
    this.setFilterData(e);
  }

  setNvConfig() {}
  override onSortOrderChange(event: Array<string>): void {
    const sortKeyList = structuredClone(event);

    const pairKeySort = {
      CreditLimitedDesc: 'CreditCurrencyDesc',
      CreditLimited: 'CreditCurrency',
      CreditTermDesc: 'UnitTermDesc',
      CreditTerm: 'UnitTerm'
    };
    for (const key in pairKeySort) {
      if (sortKeyList.includes(key)) {
        sortKeyList.push(pairKeySort[key]);
        continue;
      }
      const foundIndex = sortKeyList.indexOf(key);
      sortKeyList.slice(foundIndex, 1);
    }

    this.currentTabService.sorts = sortKeyList;
    this.getTableData();
  }
  gotoDetail(id): void {
    this.router.navigate(['./', id], {
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

    this.contractService.setItemActivateFilter(data.value);
    this.currentTabService.getTableData();
  }
}
