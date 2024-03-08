import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BaseDropdownPinnedComponent } from './base-dropdown-pinned.component';
import { BaseDirectiveModule } from '@directives/directives.module';
import { IconsComponentModule } from '@components/icons-component/icons-component.module';

@NgModule({
  declarations: [BaseDropdownPinnedComponent],
  imports: [
    CommonModule,
    NzDropDownModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    IconsComponentModule,
    BaseDirectiveModule
  ],
  exports: [BaseDropdownPinnedComponent]
})
export class BaseDropdownPinnedModule {}
