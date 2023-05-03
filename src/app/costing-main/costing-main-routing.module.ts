import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostingMainComponent } from './costing-main.component';

const routes: Routes = [{ path: '', component: CostingMainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CostingMainRoutingModule { }
