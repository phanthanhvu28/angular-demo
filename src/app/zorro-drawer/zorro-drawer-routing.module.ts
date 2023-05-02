import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZorroDrawerComponent } from './zorro-drawer.component';

const routes: Routes = [{ path: '', component: ZorroDrawerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZorroDrawerRoutingModule { }
