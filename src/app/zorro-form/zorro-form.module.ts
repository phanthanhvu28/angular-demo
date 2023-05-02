import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZorroFormRoutingModule } from './zorro-form-routing.module';
import { ZorroFormComponent } from './zorro-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // import ReactiveFormsModule


@NgModule({
  declarations: [
    ZorroFormComponent
  ],
  imports: [
    CommonModule,
    // FormGroup, FormControl, Validators,
    FormsModule, ReactiveFormsModule,
    ZorroFormRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class ZorroFormModule { }
