import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { IonCurrencyMaskComponent } from './ion-currency-mask/ion-currency-mask.component';


export * from './ion-currency-mask/ion-currency-mask.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [
    IonCurrencyMaskComponent
  ],
  exports: [
    IonCurrencyMaskComponent
  ]
})
export class IonCurrencyMaskModule { }
