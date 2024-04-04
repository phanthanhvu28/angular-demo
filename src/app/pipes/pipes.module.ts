import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidDisplayValuePipe } from './validDisplayValue.pipe';
import { NumberMaxLengthMaskPipe } from './maxlengthInputMask.pipe';
import { DecimalNumberPipe } from './decimalNumber.pipe';
import { NumberByCurrencyPipe } from './numberByCurrency.pipe';


const PIPES_MODULE = [
  
  ValidDisplayValuePipe,
  NumberMaxLengthMaskPipe,
  DecimalNumberPipe,
  NumberByCurrencyPipe  

];

@NgModule({
  declarations: [...PIPES_MODULE],
  imports: [CommonModule],
  exports: [...PIPES_MODULE]
})
export class PipesModule {}
