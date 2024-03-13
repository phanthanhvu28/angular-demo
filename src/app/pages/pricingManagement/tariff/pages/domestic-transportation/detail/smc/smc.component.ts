import { Component } from '@angular/core';
import { AbsTariffDataItemsComponent } from '../../../../components/tariff-data-items/tariff-data-list.component';
import { TariffDTMainDetailItem } from '../../../../models';

@Component({
  selector: 'app-smc',
  templateUrl: './smc.component.html',
  styleUrls: ['./smc.component.less']
})
export class SmcComponent extends AbsTariffDataItemsComponent<TariffDTMainDetailItem>  {
  protected override openFilterModal(event: any): void {
    throw new Error('Method not implemented.');
  }
  protected override getDataListService(): void {
    throw new Error('Method not implemented.');
  }

}
