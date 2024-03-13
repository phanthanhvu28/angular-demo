import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseStatusLabelComponent } from './base-status-label.component';

@NgModule({
  declarations: [BaseStatusLabelComponent],
  imports: [CommonModule],
  exports: [BaseStatusLabelComponent]
})
export class BaseStatusLabelModule {}
