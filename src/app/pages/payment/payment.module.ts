import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { IonicModule } from 'ionic-angular';
import { PaymentFormComponent } from './payment-form';
import { PaymentService } from '../../services/payment.service';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        FormsModule,
        BrMaskerModule
    ],
    declarations : [
      PaymentFormComponent
    ],
    exports : [
        PaymentFormComponent
    ],
    entryComponents: [
        PaymentFormComponent
    ],
    providers : [
        PaymentService
    ]
})
export class PaymentModule{

}