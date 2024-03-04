import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CustomerLayoutPage, 
  CustomerTrialContractListPage,
  CustomerContractListPage,
  CustomerAnnexListPage,
  CustomerAgreementListPage
  
} from './pages';

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
        path: 'contract',
        component: CustomerContractListPage,
        data: {
          title: 'Contract'
        }
      },
      {
        path: 'annex',
        component: CustomerAnnexListPage,
        data: {
          title: 'Annex'
        }
      },
      {
        path: 'trial-contract',
        component: CustomerTrialContractListPage,
        data: {
          title: 'Trial Contract'
        }
      },
      {
        path: 'agreement',
        component: CustomerAgreementListPage,
        data: {
          title: 'Agreement'
        }
      }
    ]
  },
  { path: '**', redirectTo: 'contract' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
