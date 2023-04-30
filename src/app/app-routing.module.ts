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
  {path:'**',component:NotFoundComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
