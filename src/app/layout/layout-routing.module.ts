import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HomesComponent } from '../homes/homes.component';
import { NewsComponent } from '../news/news.component';
import { ProductsComponent } from '../products/products.component';
import { FormComponent } from '../form/form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ServerapiComponent } from '../serverapi/serverapi.component';
import { NotFoundComponentComponent } from '../not-found-component/not-found-component.component';

// const routes: Routes = [{ path: '', component: LayoutComponent }];

const routes: Routes = [
  {path:'',component:HomesComponent},
  {path:'news',component:NewsComponent},
  {path:'products',component:ProductsComponent},
  {path:'form',component:FormComponent},
  {path:'reactvie-form',component:ReactiveFormComponent},
  {path:'server-api',component:ServerapiComponent},
  
  {path: 'popup-modal', loadChildren: () => import('../popup-modal/popup-modal.module').then(m => m.PopupModalModule) },
  {path: 'zorro-table', loadChildren: () => import('../zorro-table/zorro-table.module').then(m => m.ZorroTableModule) },
  {path: 'layout', loadChildren: () => import('../layout/layout.module').then(m => m.LayoutModule) },
  {path:'**',component:NotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
