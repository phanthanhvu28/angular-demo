import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomesComponent } from './homes/homes.component';
import { FormComponent } from './form/form.component';
import { ServerapiComponent } from './serverapi/serverapi.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [

  {path:'',component:HomesComponent},
  {path:'news',component:NewsComponent},
  {path:'products',component:ProductsComponent},
  {path:'form',component:FormComponent},
  {path:'reactvie-form',component:ReactiveFormComponent},
  {path:'server-api',component:ServerapiComponent},
  
  {path: 'popup-modal', loadChildren: () => import('./popup-modal/popup-modal.module').then(m => m.PopupModalModule) },
  {path: 'zorro-table', loadChildren: () => import('./zorro-table/zorro-table.module').then(m => m.ZorroTableModule) },
   
  { path: 'zorro-tab', loadChildren: () => import('./zorro-tab/zorro-tab.module').then(m => m.ZorroTabModule) },

  { path: 'zorro-form', loadChildren: () => import('./zorro-form/zorro-form.module').then(m => m.ZorroFormModule) },

  { path: 'zorro-drawer', loadChildren: () => import('./zorro-drawer/zorro-drawer.module').then(m => m.ZorroDrawerModule) },

  { path: 'costing-main', loadChildren: () => import('./costing-main/costing-main.module').then(m => m.CostingMainModule) },
  {path:'**',component:NotFoundComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
