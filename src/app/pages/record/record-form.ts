import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RecordDetailComponent } from '../record/record-detail';
import { RecordService } from '../../services/record.service';
import { MessagesUtil } from '../../util/message.util';
import { RecordForm } from '../../form/RecordForm';
import { RecordVO } from '../../vo/RecordVO';
import { ValidationUtil } from '../../util/validation.util';

@Component({
  selector: 'record-form',
  templateUrl: 'record-form.html'
})

export class RecordFormComponent {

  record : RecordForm;
  
  constructor(private navCtrl : NavController, 
              private service : RecordService,
              private messageUtil :  MessagesUtil,
              private validationUtil : ValidationUtil) {}

  ngOnInit(){
    this.record = new RecordForm();
  }

  openRecordDetailPage(recordVO : RecordVO){
    this.navCtrl.push(RecordDetailComponent, {record : recordVO});
  }

  save(){
    try{
      this.checkFields();
      this.sendInformation();
    }catch(error){
      this.messageUtil.showErrorMessage(error);
    }
  }

  sendInformation(){
    this.service.save(this.record).subscribe(
      response => {
        let recordVO = new RecordVO();
        recordVO = response;
        
        this.messageUtil.showSuccessfullMessage();
        this.openRecordDetailPage(recordVO);
      },
      error => {
        if(error.message == 409){
          this.messageUtil.showErrorMessage('Um cliente com este nome já existe');
        }
      }
    )
  }

  checkFields(){
    const cpf =  this.record.costumer.cpf
    if(cpf){
      if(!this.validationUtil.isCpfValid(cpf)){
        throw 'O CPF informado é inválido';
      }
    }
  }

}