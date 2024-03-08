import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TariffMainComponent } from './tariff-main.component';

const routes: Routes = [{ path: '', component: TariffMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffMainRoutingModule { }
