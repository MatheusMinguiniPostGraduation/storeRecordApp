import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { ReportComponent } from './report.component';
import { ChartsModule } from 'ng2-charts';
import { CostumerService } from '../../services/costumer.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        ChartsModule
    ],
    declarations : [
        ReportComponent
    ],
    exports : [
        ReportComponent
    ],
    entryComponents: [
        ReportComponent
    ],
    providers : [
        CostumerService
    ]
})
export class ReportModule{}