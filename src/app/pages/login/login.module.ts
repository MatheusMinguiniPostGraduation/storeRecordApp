import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from 'ionic-angular';
import { LoginComponent } from './login.component';
import { HomePage } from '../home/home';
import { ServiceAPI } from '../../services/api.service';
import { MessagesUtils } from '../../services/mensagem.service';



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
    ],
    providers : [
        ServiceAPI,
        MessagesUtils
    ]
})
export class LoginModule{

}