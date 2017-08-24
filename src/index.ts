import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCurrencyMaskComponent } from './ion-currency-mask/ion-currency-mask.component';


export * from './ion-currency-mask/ion-currency-mask.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IonCurrencyMaskComponent
  ],
  exports: [
    IonCurrencyMaskComponent
  ]
})
export class IonCurrencyMaskModule { }
