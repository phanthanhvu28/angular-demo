import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CustomerLayoutPage
} from './pages';
import { CustomerContractListPage } from './pages/customer-contract-list/customer-contract-list.page';
const routes: Routes = [
  {
    path: '',
    component: CustomerLayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'contract',
        pathMatch: 'full'
      },
      {
        path: 'contract/customer',
        component: CustomerContractListPage,
        data: {
          title: 'Contract'
        }
      },
    ]
  },
  { path: '**', redirectTo: 'contract' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
