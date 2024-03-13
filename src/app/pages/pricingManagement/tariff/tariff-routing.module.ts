import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ValidTabGuard } from './guards/is-valid-tab.guard';
import {
  CC_TABS_PROVIDER,
  DT_TABS_PROVIDER,
  FM_TABS_PROVIDER,
  WH_TABS_PROVIDER
} from './tariff.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'domestic-transportation',
    pathMatch: 'full'
  }, 
  {
    path: 'domestic-transportation',   
    loadChildren: () =>
      import('./pages/domestic-transportation/domestic-transportation.module').then((m) => m.DomesticTransportationModule)
  },
//   {
//     path: 'freight-management',
//     canActivateChild: [ValidTabGuard],
//     data: {
//       tabsProvider: FM_TABS_PROVIDER
//     },
//     loadChildren: () =>
//       import('./pages/freight-management/freight-management.module').then(
//         (m) => m.FreightManagementModule
//       )
//   },
  {
    path: 'custom-clearance',    
    loadChildren: () =>
      import('./pages/custom-clearance/custom-clearance.module').then(
        (m) => m.CustomClearanceModule
      )
  },
//   {
//     path: 'warehouse',
//     canActivateChild: [ValidTabGuard],
//     data: {
//       tabsProvider: WH_TABS_PROVIDER
//     },
//     loadChildren: () =>
//       import('./pages/warehouse/warehouse.module').then(
//         (m) => m.WarehouseModule
//       )
//   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffRoutingModule {}
