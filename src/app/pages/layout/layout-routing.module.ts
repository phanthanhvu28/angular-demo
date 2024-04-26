import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../../products/products.component';
import { ZorroTableModule } from '../../zorro-table/zorro-table.module';
ZorroTableModule
//import { AuthGuardService } from 'src/app/guard/guards/auth-guard.service';
//import { UnauthorizedComponent } from 'src/app/unauthorized/unauthorized.component';
// import { FreightManagementComponent } from '../costing/freight-management/freight-management.component';
// import { WarehouseDashboardComponent } from '../costing/warehouse/dashboard/warehouse-dashboard.component';
// import { WHCapacityDetailComponent } from '../costing/warehouse/details/wh-capacity-detail/wh-capacity-detail.component';
// import { WHCostingDetailComponent } from '../costing/warehouse/details/wh-costing-detail/wh-costing-detail.component';
// import { WHVasDetailComponent } from '../costing/warehouse/details/wh-vas-detail/wh-vas-detail.component';
// import { WarehouseComponent } from '../costing/warehouse/warehouse.component';
// import { DashboardComponent } from '../dashboard/dashboard.component';
// import { MarketSegmentComponent } from '../master-data/industry/market-segment/market-segment.component';
// import { AirlineComponent } from '../master-data/network/airline/airline.component';
// import { CountryUnitInternationalComponent } from '../master-data/network/country-unit-international/county-unit-international.component';
// import { CountryUnitVietnamComponent } from '../master-data/network/country-unit-vietnam/county-unit-vietnam.component';
// import { CustomsSubDepartmentComponent } from '../master-data/network/customs-sub-department/customs-sub-department.component';
// import { PortInternationalComponent } from '../master-data/network/port-international/port-international.component';
// import { PortVietnamComponent } from '../master-data/network/port-vietnam/port-vietnam.component';
// import { ShippingLineComponent } from '../master-data/network/shipping-line/shipping-line.component';
// import { CapacityComponent } from '../master-data/services/Capacity/capacity.component';
// import { ChargeComponent } from '../master-data/services/charge/charge.component';
// import { CommodityComponent } from '../master-data/services/commodity/commodity.component';
// import { CustomsProcedureComponent } from '../master-data/services/customs-procedure/customs-procedure.component';
// import { IncotermComponent } from '../master-data/services/incoterm/incoterm.component';
// import { ProductComponent } from '../master-data/services/product/product.component';
// import { UnitComponent } from '../master-data/services/units/unit.component';
// import { VolumeComponent } from '../master-data/services/volume/volume.component';
// import { SupplierComponent } from '../partner/supplier/supplier.component';
import { LayoutComponent } from './layout.component';
import { UnauthorizedComponent } from 'src/app/unauthorized/unauthorized.component';

// import { RouteDataModel } from 'src/app/models/layout-header';
// import { FreightManagementTabComponent } from '../costing/freight-management/freight-management-tab.component';
// import { NotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
    //   {
    //     path: '',
    //     redirectTo: '/dashboard',
    //     pathMatch: 'full'
    //   },
      {
        path:'test/products',
        component:ProductsComponent
      }
      ,{
        path: 'test/table', 
        loadChildren: () => import('../../zorro-tab/zorro-tab.module').then(m => m.ZorroTabModule) 
        },
    //   ,
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
      { path: 'unauthorized', component: UnauthorizedComponent },
    //   {
    //     path: 'master-data',
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'network',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'network',
    //         children: [
    //           {
    //             path: '',
    //             redirectTo: 'port-international',
    //             pathMatch: 'full'
    //           },
    //           {
    //             path: 'port-international',
    //             component: PortInternationalComponent
    //           },
    //           {
    //             path: 'port-vietnam',
    //             component: PortVietnamComponent,
    //             data: {
    //               breadscrumbProvider: [
    //                 {
    //                   label: 'Master Data',
    //                   url: '/master-data'
    //                 },
    //                 {
    //                   label: 'Network',
    //                   url: '/master-data/network'
    //                 },
    //                 {
    //                   label: 'Port Vietnam',
    //                   url: '/master-data/network/port-vietnam'
    //                 }
    //               ]
    //             }
    //           },
    //           {
    //             path: 'country-unit-international',
    //             component: CountryUnitInternationalComponent
    //           },
    //           {
    //             path: 'country-unit-vietnam',
    //             component: CountryUnitVietnamComponent
    //           },
    //           {
    //             path: 'airline',
    //             component: AirlineComponent
    //           },
    //           {
    //             path: 'shipping-line',
    //             component: ShippingLineComponent
    //           },
    //           {
    //             path: 'customs-sub-department',
    //             component: CustomsSubDepartmentComponent
    //           }
    //         ]
    //       },
    //       {
    //         path: 'services',
    //         children: [
    //           {
    //             path: '',
    //             redirectTo: 'product',
    //             pathMatch: 'full'
    //           },
    //           {
    //             path: 'product',
    //             component: ProductComponent
    //           },
    //           {
    //             path: 'volume',
    //             component: VolumeComponent
    //           },
    //           {
    //             path: 'charge',
    //             component: ChargeComponent
    //           },
    //           {
    //             path: 'commodity',
    //             component: CommodityComponent
    //           },
    //           {
    //             path: 'capacity',
    //             component: CapacityComponent
    //           },
    //           {
    //             path: 'unit',
    //             component: UnitComponent
    //           },
    //           {
    //             path: 'incoterm',
    //             component: IncotermComponent
    //           },
    //           {
    //             path: 'customs-procedure',
    //             component: CustomsProcedureComponent
    //           }
    //         ]
    //       },
    //       {
    //         path: 'industry',
    //         children: [
    //           {
    //             path: '',
    //             redirectTo: 'market-segment',
    //             pathMatch: 'full'
    //           },
    //           {
    //             path: 'market-segment',
    //             component: MarketSegmentComponent
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     path: 'partner',
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'customer',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'customer',
    //         loadChildren: () =>
    //           import('src/app/pages/partner/customer/customer.module').then(
    //             (m) => m.CustomerModule
    //           ),
    //         data: {
    //           breadcrumbProvider: [
    //             {
    //               label: 'Partner',
    //               url: 'partner'
    //             },
    //             {
    //               label: 'Customer',
    //               url: 'partner/customer'
    //             }
    //           ]
    //         }
    //       },
    //       {
    //         path: 'supplier',
    //         component: SupplierComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'rfi',
    //     data: {
    //       routingLabel: 'RFI'
    //     },
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'customer',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'customer',
    //         loadChildren: () =>
    //           import('src/app/pages/quotation/pages/rfi/rfi.module').then(
    //             (m) => m.RFIModule
    //           )
    //       },
    //       {
    //         path: 'supplier',
    //         component: DashboardComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'costing',
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'request-cost',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'request-cost',
    //         component: DashboardComponent
    //       },
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import(
    //             'src/app/pages/costing/domestic-transportation/domestic-transportation.module'
    //           ).then((m) => m.DomesticTransportationModule)
    //       },
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import(
    //             '../costing/freight-management/freight-management.module'
    //           ).then((m) => m.FreightManagementModule)
    //       },
    //       // {
    //       //   path: 'freight-management',
    //       //   component: FreightManagementComponent
    //       // },
    //       // {
    //       //   path: 'freight-management-tab',
    //       //   component: FreightManagementTabComponent
    //       // },
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import(
    //             '../costing/custom-clearance/custom-clearance.module'
    //           ).then((m) => m.CustomClearanceModule)
    //       },
    //       {
    //         path: '',
    //         loadChildren: () =>
    //           import('../costing/warehouse/warehouse.module').then(
    //             (m) => m.WarehouseModule
    //           )
    //       }
    //     ]
    //   },
      {
        path: 'pricing-management',
        children: [
          {
            path: '',
            redirectTo: 'tariff',
            pathMatch: 'full'
          },
          {
            path: 'tariff',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import(
                    'src/app/pages/pricingManagement/tariff/tariff.module'
                  ).then((m) => m.TariffModule)
              }
            ]
          },
          // {
          //   path: 'pricing',
          //   component: DashboardComponent
          // },
          // {
          //   path: 'market-tariff',
          //   component: DashboardComponent
          // },
          // {
          //   path: 'promotion',
          //   component: DashboardComponent
          // }
        ]
      },
    //   {
    //     path: 'quotation',
    //     children: [
    //       {
    //         path: 'pnl',
    //         loadChildren: () =>
    //           import('../quotation/pages/pnl/pnl.module').then(
    //             (m) => m.PnlModule
    //           )
    //       },
    //       {
    //         path: 'quotation',
    //         loadChildren: () =>
    //           import('../quotation/pages/quotation/quotation.module').then(
    //             (m) => m.QuotationModule
    //           )
    //       }
    //     ]
    //   },
       {
        path: 'contract',
         loadChildren: () =>
           import('src/app/pages/contract/contract.module').then(
             (m) => m.ContractModule
           )
       },
    //   {
    //     path: 'booking',
    //     // component: DashboardComponent
    //     // TODO: open when use to staging
    //     loadChildren: () =>
    //       import('src/app/pages/booking/booking.module').then(
    //         (m) => m.BookingModule
    //       )
    //   },
    //   {
    //     path: 'operations-excellence',
    //     loadChildren: () =>
    //       import(
    //         '../../modules/operations-excellence/operations-excellence.module'
    //       ).then((m) => m.OperationsExcellenceModule)
    //   },
    //   {
    //     path: 'contract',
    //     loadChildren: () =>
    //       import('src/app/pages/contract/contract.module').then(
    //         (m) => m.ContractModule
    //       )
    //   },
    //   {
    //     path: 'shipment',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'exception-management',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'soa',
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'payment',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'payment',
    //         component: DashboardComponent
    //       },
    //       {
    //         path: 'billing',
    //         component: DashboardComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'report',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'kpi',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'support',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'authorization',
    //     children: [
    //       {
    //         path: '',
    //         redirectTo: 'account',
    //         pathMatch: 'full'
    //       },
    //       {
    //         path: 'account',
    //         component: DashboardComponent
    //       },
    //       {
    //         path: 'department',
    //         component: DashboardComponent
    //       }
    //     ]
    //   },
    //   {
    //     path: 'docs',
    //     loadChildren: () =>
    //       import('src/app/pages/document-page/document-page.module').then(
    //         (m) => m.DocumentPageModule
    //       )
    //   },
    //   {
    //     path: '403',
    //     loadChildren: () =>
    //       import(
    //         'src/app/pages/page-error-forbidden/page-error-forbidden.module'
    //       ).then((m) => m.ForbiddenPageModule)
    //   },
    //   {
    //     path: '404',
    //     data: {
    //       displayBreadscrumb: false
    //     },
    //     component: NotFoundComponent
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
