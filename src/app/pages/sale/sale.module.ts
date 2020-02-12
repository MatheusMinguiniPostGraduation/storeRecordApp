import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { SaleService } from '../../services/sale.service';
import { SaleFormComponent } from './sale-form';
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
        SaleFormComponent,
    ],
    exports : [
        SaleFormComponent
    ],
    entryComponents: [
       
        SaleFormComponent, 
    ],
    providers : [
        SaleService
    ]
})
export class SaleModule{

}