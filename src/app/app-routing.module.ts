import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomesComponent } from './homes/homes.component';
import { FormComponent } from './form/form.component';
import { ServerapiComponent } from './serverapi/serverapi.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LoginComponent } from './pages/layout/login/login.component';
import { PublicSigninCallbackComponent } from './pages/public/pages/public-signin-callback/public-signin-callback.component';
import { PublicSignoutCallbackComponent } from './pages/public/pages/public-signout-callback/public-signout-callback.component';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [

  { path: '',    canActivate: [AuthGuard],loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule) },
  // {path:'',component:HomesComponent},
  // {path:'news',component:NewsComponent},
  // {path:'products',component:ProductsComponent},
  // {path:'form',component:FormComponent},
  // {path:'reactvie-form',component:ReactiveFormComponent},
  // {path:'server-api',component:ServerapiComponent},
  
  // {path: 'popup-modal', loadChildren: () => import('./popup-modal/popup-modal.module').then(m => m.PopupModalModule) },
  // {path: 'zorro-table', loadChildren: () => import('./zorro-table/zorro-table.module').then(m => m.ZorroTableModule) },
   
  // { path: 'zorro-tab', loadChildren: () => import('./zorro-tab/zorro-tab.module').then(m => m.ZorroTabModule) },

  // { path: 'zorro-form', loadChildren: () => import('./zorro-form/zorro-form.module').then(m => m.ZorroFormModule) },

  // { path: 'zorro-drawer', loadChildren: () => import('./zorro-drawer/zorro-drawer.module').then(m => m.ZorroDrawerModule) },

  // { path: 'costing-main', loadChildren: () => import('./costing-main/costing-main.module').then(m => m.CostingMainModule) },
  {
    path: 'signin-callback',
    component: PublicSigninCallbackComponent
  },
  {
    path: 'signout-callback',
    component: PublicSignoutCallbackComponent
  },
  {path:'**',component:NotFoundComponentComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
