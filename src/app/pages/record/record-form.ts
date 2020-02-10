import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { RecordDetailComponent } from '../record/record-detail';
import { RecordVO } from '../../vo/RecordVO';
import { RecordService } from '../../services/record.service';

@Component({
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordFormComponent {

  record : RecordVO;
  
  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public service : RecordService) {}

  ngOnInit(){
    this.record = new RecordVO();
  }

  openRecordDetailPage(){
    this.navCtrl.push(RecordDetailComponent);
  }

  save(){

    this.service.save(this.record).subscribe(
      response => {
        
      },
      error => {
        console.log('Erro')
      }
    )

  }

}