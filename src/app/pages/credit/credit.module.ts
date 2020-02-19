import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';


import { BrMaskerModule } from 'brmasker-ionic-3';
import { SaleModule } from '../sale/sale.module';
import { CreditSearchComponent } from './credit-search';
import { CreditService } from '../../services/credit.service';
import { SaleService } from '../../services/sale.service';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        FormsModule, 
        BrMaskerModule,
        SaleModule
    ],
    declarations : [
       CreditSearchComponent
    ],
    exports : [
        CreditSearchComponent
    ],
    entryComponents: [
        CreditSearchComponent
    ],
    providers : [
        CreditService,
        SaleService
    ]
})
export class CreditModule{}