import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemOptions } from '@models/base-data-list';
import { Observable, take, takeUntil, timer } from 'rxjs';
import { AbsBaseDataListComponent } from 'src/app/abstracts/components/base-data-list/base-data-list.component';
import { Utils } from 'src/app/utils/utils';
import {
  ANNEX_OPTIONS_FILTER_PINNED,
  ContractScopesOfWorkNameByCode,
  ICON_SCOPE_OF_WORK,
  LIST_ANNEX_OPTION_SUPPLIER,
  ScopeOfWorkData
} from '../../../const';
//import { ModalCreateEditAnnexComponent } from '../../components';
import AnnexData, { DataFilterAnnex } from '../../models/annex.model';
import { AnnexService } from '../../services';

@Component({
  selector: 'app-annex-list',
  templateUrl: './annex-list.page.html',
  styleUrls: ['./annex-list.page.less'],
  providers: [AnnexService]
})
export class AnnexListPage extends AbsBaseDataListComponent<AnnexData> {
  filterSelection: DataFilterAnnex;
  itemActivateFilter$: Observable<string> =
    this.annexService.itemActivateFilter$;
  pinnedFilter$: Observable<string> = this.annexService.pinnedFilter$;
  listOptionsFilterPinned: Array<ItemOptions> = ANNEX_OPTIONS_FILTER_PINNED;
  nvSelections: { [key: string]: Array<ItemOptions> } =
    LIST_ANNEX_OPTION_SUPPLIER;
  ICON_SCOPE = ICON_SCOPE_OF_WORK;
  contractScopesOfWorkNameByCode = ContractScopesOfWorkNameByCode;
  // @ViewChild('modalCreateAnnex')
  // modalCreateAnnex: ModalCreateEditAnnexComponent;
  constructor(
    el: ElementRef,
    private annexService: AnnexService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    super(el);
    this.setNvConfig();
    this.annexService.filterSelection$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.filterSelection = res?.data;
      });
  }

  getDataListService() {
    this.currentTabService = this.annexService;
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
  gotoContract(id): void {
    this.router.navigate(['../contract', id], {
      relativeTo: this.route
    });
  }
  showUploadModal(): void {
   // this.modalCreateAnnex.show();
    this.annexService.getFillerUpload();
  }
  refresh(): void {
    this.getTableData();
  }
  setPinnedFilter(data): void {
    if (!data.value) {
      return;
    }
    this.annexService.updatePinnedFilter(data.value);
  }
  setItemActivateFilter(data): void {
    if (!data.value) {
      return;
    }

    this.annexService.setItemActivateFilter(data.value);
    this.currentTabService.getTableData();
  }
}
