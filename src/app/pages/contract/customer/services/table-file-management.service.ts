import { Injectable, Injector } from '@angular/core';
import { BaseContractTabService } from '../../services/base-contract-tab.service';

import { AuthService } from 'src/app/guard/services/auth.service';
import { getTableContractCols } from '../../components/table-file-management/table-file-management.const';

@Injectable({
  providedIn: 'root'
})
export class TableFileManagementService extends BaseContractTabService<any> {
  constructor(injector: Injector, authService: AuthService) {
    super(injector);
    this.setDataItemCells(getTableContractCols(false, false));
  }

  setColEdit(isEdit: boolean, isAnnex: boolean): void {
    this.setDataItemCells(getTableContractCols(isAnnex, isEdit));
  }
  getTableData(): void {
    // this.setDataItems(res.items);
    // this.setTotalItem(res.totalItems);
  }
}
