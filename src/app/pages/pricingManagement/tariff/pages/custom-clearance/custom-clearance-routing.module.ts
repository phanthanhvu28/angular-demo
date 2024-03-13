import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomClearancePage } from './custom-clearance.page';
import { SmcPage } from './smc/smc.page';
import { VasPage } from './vas/vas.page';


const routes: Routes = [
  {
    path: '',
    component: CustomClearancePage,
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
      }     
    ]
  },  

  { path: '**', redirectTo: 'tariff' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomClearanceRoutingModule {}
