import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { RecordDetail } from '../record/record-detail';

@Component({
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordForm {


    success_message  = this.toastCtrl.create({
        message: 'Ficha criada com sucesso!',
        duration: 3000
    });

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  openRecordFormPage(){
    this.navCtrl.push(RecordForm);
  }

  save(){
    
    this.navCtrl.push(RecordDetail);
    this.success_message.present();
  }

}