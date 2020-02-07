import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from 'ionic-angular';
import { LoginComponent } from './login.component';
import { HomePage } from '../home/home';
import { MessagesUtils } from '../../services/mensagem.service';
import { Auth } from '../../services/auth.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
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
        Auth,
        MessagesUtils
    ]
})
export class LoginModule{

}