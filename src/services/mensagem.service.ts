import { ToastController } from 'ionic-angular';
import { NgModule, Injectable } from '@angular/core';


@Injectable()
export class MessagesUtils {
    private _successText : string;
    private _errorText : string;

    private _message_success_body = {
        title : 'Sucesso',
        message: 'Mensagem padrão',
        cssClass: 'toast-default',
        duration: 3000
        
    }

    private _message_error_body = {
        title : 'Falha',
        message: 'Mensagem padrão',
        cssClass: 'toast-default',
        duration: 3000
    }
  
    constructor( public toastCtrl: ToastController ){
        
        this._successText = 'Operação realizada com sucesso';
        this._errorText = 'Reporte o Erro: 16 99706-3747'
    }
 

    showSuccessfullMessage(message? : string){

        debugger;

        this._message_success_body.message = this._successText;
        this._message_success_body.cssClass = 'toast-success';

        if(message){
            this._message_success_body.message = message;
        }
        
        this.toastCtrl.create(this._message_success_body).present();
    }

    showErrorMessage(message? : string){

        this._message_error_body.message = this._errorText;
        this._message_error_body.cssClass = 'toast-error';

        if(message){
            this._message_error_body.message = message;
        }
        
        this.toastCtrl.create(this._message_error_body).present();
    }
  }