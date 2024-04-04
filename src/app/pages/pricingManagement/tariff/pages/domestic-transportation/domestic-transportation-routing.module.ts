import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DomesticTransportationComponent } from './domestic-transportation.component';
import { SmcPage } from './smc/smc.page';
import { VasPage } from './vas/vas.page';
import { BlcPage } from './blc/blc.page';
import { DeatailSmcComponent } from './detail/smc/detail-smc.component';
import { NewTariffSmcComponent } from './new/new.component';
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
    path: 'smc/new',
    //canActivate: [CreatereGuard],
    component: NewTariffSmcComponent,
    //loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
    data: {
      title: 'New tariff'
    }
  },
  {
    path: ':smc/:tariffCode',
    component: DeatailSmcComponent,
    data: {
      title: 'smc'
    }
  },
  { path: '**', redirectTo: 'tariff' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomesticTransportationRoutingModule {}
