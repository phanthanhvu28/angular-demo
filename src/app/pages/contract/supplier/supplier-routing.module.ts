import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierPage } from './supplier.page';
import {
  AnnexDetailPage,
  AnnexListPage,
  ContractDetailPage,
  ContractListPage
} from './pages';

const routes: Routes = [
  {
    path: '',
    component: SupplierPage,
    children: [
      {
        path: '',
        redirectTo: 'contract',
        pathMatch: 'full'
      },
      {
        path: 'contract',
        component: ContractListPage,
        data: {
          title: 'Contract'
        }
      },

      {
        path: 'annex',
        component: AnnexListPage,
        data: {
          title: 'Annex'
        }
      }
    ]
  },
  {
    path: 'contract/:id',
    component: ContractDetailPage,
    data: {
      title: 'Contract'
    }
  },
  {
    path: 'annex/:id',
    component: AnnexDetailPage,
    data: {
      title: 'Annex'
    }
  },

  { path: '**', redirectTo: 'contract' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule {}
