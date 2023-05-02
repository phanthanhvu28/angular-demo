import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZorroFormComponent } from './zorro-form.component';

const routes: Routes = [{ path: '', component: ZorroFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZorroFormRoutingModule { }
