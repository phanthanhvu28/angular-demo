import { NgModule ,CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomesComponent } from './homes/homes.component';
import { BoldDirective } from './directives/bold.directive';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServerapiComponent } from './serverapi/serverapi.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US,fr_FR } from 'ng-zorro-antd/i18n';

import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import { NzProgressModule } from 'ng-zorro-antd/progress';

import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
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
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzI18nModule } from 'ng-zorro-antd/i18n';


/////////

// import { IconDefinition } from '@ant-design/icons-angular';
// import * as AllIcons from '@ant-design/icons-angular/icons';

// import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';

import {
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline
} from '@ant-design/icons-angular/icons';
import { ConfigService, initConfig } from './services/config.service';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

//const icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
registerLocaleData(en);

export function HttpLoaderFactory(http: HttpClient) {
  // return new TranslateHttpLoader(http);
}


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    UnauthorizedComponent,
    NewsComponent,
    ProductsComponent,
    NotFoundComponentComponent,
    HomesComponent,
    BoldDirective,
    FormComponent,
    ReactiveFormComponent,
    ServerapiComponent,   
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    HttpClientModule,
    NzNotificationModule,
    NzModalModule,
    // ReactiveFormsModule,
    // MatToolbarModule,
    // MatSidenavModule,

    
    // NzLayoutModule,
    // NzMenuModule,
    // NzResizableModule,
    // NzProgressModule,
    
    // NzTabsModule,
    // NzStepsModule,
    // NzButtonModule,
    // NzBreadCrumbModule,
    // NzImageModule,
    // NzInputModule,
    // NzInputNumberModule,
    // NzListModule,
    // NzMentionModule,
    // NzMessageModule,
    // NzNotificationModule,
    // NzPageHeaderModule,
    // NzIconModule,

    // NzAffixModule,
    // NzAlertModule,
    // NzAnchorModule,
    // NzAutocompleteModule,
    // NzAvatarModule,
    // NzBackTopModule,
    // NzBadgeModule,
    // NzCardModule,
    // NzCarouselModule,
    // NzCascaderModule,
    // NzCheckboxModule,
    // NzCollapseModule,
    // NzCommentModule,
    // NzNoAnimationModule,
    // NzTransButtonModule,
    // NzWaveModule,
    // NzDatePickerModule,
    // NzDescriptionsModule,
    // NzDividerModule,
    // NzDrawerModule,
    // NzDropDownModule,
    // NzEmptyModule,
    // NzFormModule,
    // NzGridModule,
    // NzI18nModule   
    
  ],
  // providers: [{ provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }],
  providers: [ { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons } ,
    {
      provide: APP_INITIALIZER,
      useFactory: initConfig,
      deps: [ConfigService],
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
