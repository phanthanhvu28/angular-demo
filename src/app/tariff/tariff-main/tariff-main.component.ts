import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Observable } from 'rxjs';
import { IDataListStore } from 'src/app/Services/data-list-store-interface';
import { TariffMainService } from 'src/app/Services/tariff-main.service';
import { BaseDataList } from 'src/app/common/base-data-list';
import { DTTariffMains } from 'src/app/models/tariff-main';

@Component({
  selector: 'app-tariff-main',
  templateUrl: './tariff-main.component.html',
  styleUrls: ['./tariff-main.component.less'],
})
export class TariffMainComponent extends BaseDataList<DTTariffMains> {

  loading: boolean = false;
  widthColumns: Array<string> = ["50px", "120px", "1", "1", "1", "1", "1", "110px", "80px"];
  buttonSize: NzButtonSize = 'large';
  isShowFilter: boolean = false;
  // filters: BaseControlType<string>[] = [];
  // itemsState: BaseControlType<string>[] = [];

  
  
  constructor( private router: Router,private dataListStore: TariffMainService) {    
    super();
  }

  public getDataListStore(): IDataListStore<DTTariffMains> {
    //this.dataListStore.setDefaultSort('CreateAt', 'ascend');
    return this.dataListStore;
  }

  public override ngOnInit(): void {   
    super.ngOnInit();
    // this.getFilterItems();
  }

  setIsDisabaleFilter(value: boolean): void {
    this.isShowFilter = value;
  }
  public goToDetails(id: number): void {
    this.router.navigate(['/pricing-management/tariff/transportation/transport', id]);
  }  

}
