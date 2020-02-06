import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';

import { RecordDetailComponent } from '../record/record-detail';

import { RecordVO } from '../../vo/RecordVO';
import { MessagesUtils } from '../../services/mensagem.service';

@Component({
  providers: [ MessagesUtils ],
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordFormComponent {

  private _record : RecordVO;
  
  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public http: HttpClient,
              public message_service : MessagesUtils) {}


  openRecordDetailPage(){
    this.navCtrl.push(RecordDetailComponent);
  }

  save(){

    this.message_service.showSuccessfullMessage();

    this.openRecordDetailPage();

   /* this.http
    .post(this.configuration.getResourceAddress(), this._record, null).subscribe
      (data => {
        this.message_service.showSuccessfullMessage();
        this.navCtrl.push(RecordDetail);
      }, err => {     
        this.message_service.showErrorMessage();
      });*/
  }

}