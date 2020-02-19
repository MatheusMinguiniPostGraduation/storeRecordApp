import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordVO } from '../../vo/RecordVO';
import { RecordService } from '../../services/record.service';
import { MessagesUtil } from '../../util/message.util';
import { SaleFormComponent } from '../sale/sale-form';
import { SaleSearchComponent } from '../sale/sale-search';
import { PaymentFormComponent } from '../payment/payment-form';
import { RecordForm } from '../../form/RecordForm';
import { PaymentSearchComponent } from '../payment/payment-search';
import { CreditSearchComponent } from '../credit/credit-search';

@Component({
  templateUrl: 'record-detail.html'
})
export class RecordDetailComponent {
  
  recordVO : RecordVO;

  recordForm : RecordForm

  costumerName : string;

  constructor(public navCtrl: NavController, 
              public navigationParameters: NavParams, 
              public service : RecordService,
              public messageUtil :  MessagesUtil) {

    this.initializeScreenObjects();
   
  }

  ionViewWillEnter(){
    this.recordVO =  this.navigationParameters.get('record');

    //Converting value object to be possibly updated later on
    this.recordForm.convertVOIntoForm(this.recordVO);

    // Gotta put the full name into a variable because as we manipulate the record attribute, 
    // the name changes due to two-way-data-binding
    this.costumerName = `${this.recordVO.costumer.name} ${this.recordVO.costumer.lastName}`;
  }
  
  openSaleSearch(){
    this.navCtrl.push(SaleSearchComponent, {record : this.recordVO});
  }

  openPaymentSearch(){
    this.navCtrl.push(PaymentSearchComponent, {record : this.recordVO});
  }

  openSaleScreen(){
    this.navCtrl.push(SaleFormComponent, {record : this.recordVO});
  }

  openPaymentScreen(){
    this.navCtrl.push(PaymentFormComponent, {record : this.recordVO});
  }

  openHistoryCreditScreen(){
    this.navCtrl.push(CreditSearchComponent, {record : this.recordVO});
  }
  
  update(){
    this.service.update(this.recordForm).subscribe(
      response => {
        this.messageUtil.showSuccessfullMessage();

        //Updating the Costumer name
        this.costumerName = `${this.recordForm.costumer.name} ${this.recordForm.costumer.lastName}`;
      },
      error => {
        let message = ''
        if(error.message == 409){
          message = 'Um cliente com este nome já existe'
        } 

        this.messageUtil.showErrorMessage(message)
      }
    )
  }

  initializeScreenObjects(){
    this.recordVO = new RecordVO();
    this.recordForm = new RecordForm();
  }

}