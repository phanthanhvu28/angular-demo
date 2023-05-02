import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZorroTabComponent } from './zorro-tab.component';

const routes: Routes = [{ path: '', component: ZorroTabComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZorroTabRoutingModule { }
