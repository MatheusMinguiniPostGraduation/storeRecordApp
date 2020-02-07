import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from 'ionic-angular';
import { LoginComponent } from './login/login.component';
import { Auth } from '../../core/auth.service';
import { HomeComponent } from './home.component';

@NgModule({

    declarations: [
        HomeComponent,
        LoginComponent
    ],
    /*Components that are not found in html and created dynamically with ComponentFactoryResolver. 
    Angular needs this hint to find them and compile. 
    All other components should just be listed in the declarations array.*/
    entryComponents: [
        HomeComponent,
        LoginComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    providers : [
        Auth
    ]
})
export class HomeModule{

}