import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecordDetailComponent } from '../record/record-detail';
import { RecordVO } from '../../vo/RecordVO';
import { RecordService } from '../../services/record.service';
import { MessagesUtil } from '../../util/message.util';

@Component({
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordFormComponent {

  record : RecordVO;
  
  constructor(public navCtrl : NavController, 
              public service : RecordService,
              public messageUtil :  MessagesUtil) {}

  ngOnInit(){
    this.record = new RecordVO();
  }

  openRecordDetailPage(record : RecordVO){
    this.navCtrl.push(RecordDetailComponent, {record : this.record});
  }

  save(){

    this.service.save(this.record).subscribe(
      response => {
        this.messageUtil.showSuccessfullMessage();
        this.openRecordDetailPage(this.record);
      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )

  }

}