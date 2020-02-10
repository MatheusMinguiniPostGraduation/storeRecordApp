import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { RecordDetailComponent } from '../record/record-detail';
import { RecordVO } from '../../vo/RecordVO';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordFormComponent {

  private _record : RecordVO;
  
  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController) {}

  ngOnInit(){}

  openRecordDetailPage(){
    this.navCtrl.push(RecordDetailComponent);
  }

  save(){

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