import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login.component';
import { HomePage } from '../home/home';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        HomePage,
        LoginComponent
      ],
    exports : [
        LoginComponent
    ],
    entryComponents: [
        HomePage,
        LoginComponent
    ]
})
export class LoginModule{

}