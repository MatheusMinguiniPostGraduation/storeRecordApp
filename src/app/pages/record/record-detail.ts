import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordVO } from '../../vo/RecordVO';
import { RecordService } from '../../services/record.service';
import { MessagesUtil } from '../../util/message.util';
import { SaleFormComponent } from '../sale/sale-form';


@Component({
  templateUrl: 'record-detail.html'
})

export class RecordDetailComponent {
  
  record : RecordVO;

  costumerName : string;

  constructor(public navCtrl: NavController, 
              public navigationParameters: NavParams, 
              public service : RecordService,
              public messageUtil :  MessagesUtil) {

    this.record = navigationParameters.get('record');

  }

  ngOnInit(){
    //Gotta put the full name into a variable because as we manipulate the record attribute, the name changes due to two-way-data-binding
    this.costumerName = `${this.record.costumer.name} ${this.record.costumer.lastName}`;
  }


  openSaleScreen(){
    this.navCtrl.push(SaleFormComponent, {record : this.record});
  }
  
  update(){
    this.service.update(this.record).subscribe(
      response => {
        this.messageUtil.showSuccessfullMessage();

        //Updating the Costumer name
        this.costumerName = `${this.record.costumer.name} ${this.record.costumer.lastName}`;
      },
      error => {
        
        console.log(error)

        let message = ''
        if(error.message == 409){
          message = 'Um cliente com este nome já existe'
        } 

        this.messageUtil.showErrorMessage(message)
      }
    )
  }

}