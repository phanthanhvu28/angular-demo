import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomesticTransportationComponent } from './domestic-transportation.component';
import { SmcPage } from './smc/smc.page';
import { VasPage } from './vas/vas.page';
import { BlcPage } from './blc/blc.page';
import { SmcComponent } from './detail/smc/smc.component';
//import { CreatereGuard } from 'src/app/guard/guards/is-createre.guard';

const routes: Routes = [
  {
    path: '',
    component: DomesticTransportationComponent,
    children: [
      {
        path: '',
        redirectTo: 'smc',
        pathMatch: 'full'
      },
      {
        path: 'smc',
        component: SmcPage,
        data: {
          title: 'smc'
        }
      },
      {
        path: 'vas',
        component: VasPage,
        data: {
          title: 'vas'
        }
      },
      {
        path: 'blc',
        component: BlcPage,
        data: {
          title: 'blc'
        }
      }
    ]
  },
  {
    path: 'smc/:id',
    component: SmcComponent,
    data: {
      title: 'smc'
    }
  },
  // {
  //   path: 'annex/:id',
  //   component: AnnexDetailPage,
  //   data: {
  //     title: 'Annex'
  //   }
  // },

  { path: '**', redirectTo: 'tariff' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomesticTransportationRoutingModule {}
