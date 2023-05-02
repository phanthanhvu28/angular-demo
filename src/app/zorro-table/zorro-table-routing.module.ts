import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZorroTableComponent } from './zorro-table.component';

const routes: Routes = [{ path: '', component: ZorroTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZorroTableRoutingModule { }
