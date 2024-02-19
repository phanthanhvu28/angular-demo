import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { IconsComponentModule } from 'src/app/components/icons-component/icons-component.module';
// import { IconsProviderModule } from 'src/app/icons-provider.module';
// import { CustomClearanceModule } from '../costing/custom-clearance/custom-clearance.module';
// import { DomesticTransportationModule } from '../costing/domestic-transportation/domestic-transportation.module';
// import { FreightManagementModule } from '../costing/freight-management/freight-management.module';
// import { WarehouseModule } from '../costing/warehouse/warehouse.module';

// import { DashboardModule } from '../dashboard/dashboard.module';
// import { MarketSegmentModule } from '../master-data/industry/market-segment/market-segment.module';
// import { AirlineModule } from '../master-data/network/airline/airline.module';
// import { CountryUnitInternationalModule } from '../master-data/network/country-unit-international/county-unit-international.module';
// import { CountryUnitVietnamModule } from '../master-data/network/country-unit-vietnam/county-unit-vietnam.module';
// import { CustomsSubDepartmentModule } from '../master-data/network/customs-sub-department/customs-sub-department.module';
// import { PortInternationalModule } from '../master-data/network/port-international/port-international.module';
// import { PortVietnamModule } from '../master-data/network/port-vietnam/port-vietnam.module';
// import { ShippingLineModule } from '../master-data/network/shipping-line/shipping-line.module';
// import { CapacityModule } from '../master-data/services/Capacity/capacity.module';
// import { ChargeModule } from '../master-data/services/charge/charge.module';
// import { CommodityModule } from '../master-data/services/commodity/commodity.module';
// import { ProductModule } from '../master-data/services/product/product.module';
// import { UnitModule } from '../master-data/services/units/unit.module';
// import { VolumeModule } from '../master-data/services/volume/volume.module';
// import { CustomsProcedureModule } from '../master-data/services/customs-procedure/customs-procedure.module';
// import { IncotermModule } from '../master-data/services/incoterm/incoterm.module';
// import { NotFoundComponent } from '../page-not-found/page-not-found.component';
// import { SupplierModule } from '../partner/supplier/supplier.module';
// import { BreadscrumbComponent } from './components/breadscrumb/breadscrumb.component';
 import { HeaderComponent } from './components/header/header.component';

 import { ProductsComponent } from '../../products/products.component';
import { ZorroTableModule } from '../../zorro-table/zorro-table.module';


import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzProgressModule } from 'ng-zorro-antd/progress';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';


import { NzImageModule } from 'ng-zorro-antd/image';

import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

import { NzListModule } from 'ng-zorro-antd/list';
import { NzMentionModule } from 'ng-zorro-antd/mention';

import { NzMessageModule } from 'ng-zorro-antd/message';

import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';


import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCommentModule } from 'ng-zorro-antd/comment';

import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzTransButtonModule } from 'ng-zorro-antd/core/trans-button';
import { NzWaveModule } from 'ng-zorro-antd/core/wave';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { CustomerLayoutPage } from '../contract/customer/pages';
import { IconsComponentModule } from 'src/app/components/icons-component/icons-component.module';

@NgModule({
  declarations: [
    LayoutComponent,
    // NotFoundComponent,
     HeaderComponent,
     //CustomerLayoutPage
    // BreadscrumbComponent

  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    HttpClientModule,
    //IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    //DashboardModule,
    ReactiveFormsModule,    
    ZorroTableModule,
    // ProductModule,
    // CountryUnitVietnamModule,
    // AirlineModule,
    // ShippingLineModule,
    // CustomsSubDepartmentModule,
    // CountryUnitInternationalModule,
    // CapacityModule,
    // PortInternationalModule,
    // ChargeModule,
    // PortVietnamModule,
    // VolumeModule,
    // CustomsProcedureModule,
    // IncotermModule,
    // CommodityModule,
    // UnitModule,
    // MarketSegmentModule,
    // DomesticTransportationModule,
    // FreightManagementModule,
    // CustomClearanceModule,
    // WarehouseModule,
    // SupplierModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzInputModule,
    NzLayoutModule,
    NzMenuModule,
    NzResizableModule,
    NzProgressModule,
    
    NzTabsModule,
    NzStepsModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzInputModule,
    NzInputNumberModule,
    NzListModule,
    NzMentionModule,
    NzMessageModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzIconModule,

    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzCommentModule,
    NzNoAnimationModule,
    NzTransButtonModule,
    NzWaveModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
   IconsComponentModule
  ],
  exports: [LayoutComponent],
  providers: [DatePipe, AsyncPipe, Title]
})
export class LayoutModule {}
