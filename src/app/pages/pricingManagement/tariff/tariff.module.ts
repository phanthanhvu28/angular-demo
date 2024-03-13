import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { ValidTabGuard } from './guards/is-valid-tab.guard';
import { TariffRoutingModule } from './tariff-routing.module';
import { TariffSmcService } from './pages/domestic-transportation/services';

@NgModule({
  declarations: [],
  imports: [CommonModule, TariffRoutingModule],
  providers: []
})
export class TariffModule {}
