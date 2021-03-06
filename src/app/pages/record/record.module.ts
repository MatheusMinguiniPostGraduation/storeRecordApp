import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RecordDetailComponent } from './record-detail';
import { RecordFormComponent } from './record-form';
import { RecordSearchComponent } from './record-search';
import { IonicModule } from 'ionic-angular';
import { MenuComponent } from '../menu/menu.component';
import { RecordService } from '../../services/record.service';
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
        RecordDetailComponent,
        RecordFormComponent, 
        RecordSearchComponent,
        MenuComponent
    ],
    exports : [
        RecordDetailComponent,
        RecordFormComponent, 
        RecordSearchComponent
    ],
    entryComponents: [
        MenuComponent,
        RecordDetailComponent,
        RecordFormComponent, 
        RecordSearchComponent
    ],
    providers : [
        RecordService
    ]
})
export class RecordModule{}