import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { IonicModule } from 'ionic-angular';
import { PaymentFormComponent } from './payment-form';
import { PaymentService } from '../../services/payment.service';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { PaymentSearchComponent } from './payment-search';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrMaskerModule
    ],
    declarations : [
      PaymentFormComponent,
      PaymentSearchComponent
    ],
    exports : [
        PaymentFormComponent,
        PaymentSearchComponent
    ],
    entryComponents: [
        PaymentFormComponent,
        PaymentSearchComponent
    ],
    providers : [
        PaymentService
    ]
})
export class PaymentModule{

}