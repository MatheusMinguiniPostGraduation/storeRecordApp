import { Component } from "@angular/core";
import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { MessagesUtil } from "../../util/message.util";
import { PaymentService } from "../../services/payment.service";
import { PaymentForm } from "../../form/PaymentForm";
import * as moment from 'moment'; 


@Component({
    templateUrl: 'payment-form.html'
})
  
export class PaymentFormComponent {

    record : RecordVO;
    payment : PaymentForm;

    //View inputs
    informedValue : string;
    informedDate : string;

    constructor(public navCtrl : NavController, 
                public navigationParameters: NavParams, 
                public service : PaymentService,
                public messageUtil :  MessagesUtil) {}

    ngOnInit(){
      this.record = this.navigationParameters.get('record');
      this.payment = new PaymentForm(this.record);
    }

    save(){
      try{
        this.sendPaymentData();
      }catch(message){
        this.messageUtil.showErrorMessage(message);
      }
    }

    sendPaymentData(){

      this.payment.value = parseFloat(this.informedValue);

      if(this.informedDate){
        this.payment.date = this.formatDate();
      }

      if(this.isRequiredFieldsNotFullfilled()) throw `Valor e forma de pagamento são obrigatórios`
      
      if(this.isInformedDateFromFuture())  throw `A data de pagamento não pode ser futura`
         
    
      if(this.isInformedValueGreaterThanRecordDebt()) throw `O valor deve ser menor que ${this.record.total}`
          
      // Gotta do this in order to add one more day in the typed date,
      // Somehow, I am not sure why, the constructor ends up subtracting one day from the given string date 
      this.service.save(this.payment).subscribe(
        response => {
          this.messageUtil.showSuccessfullMessage(`Valor de R$${parseFloat(response.value).toFixed(2)} recebido`);
          this.navCtrl.getPrevious().data.record = response.record;
          
          this.navCtrl.pop();
        },
        error => {
          let message = '';
          if(error.message == 400){
            message = 'O pagamento não pode ser maior do que o total na ficha';
          }
          this.messageUtil.showErrorMessage(message);
        }
      )
    }

    isInformedDateFromFuture() : boolean{
      return moment(this.payment.date).isAfter(new Date(), 'day');
    }

    isRequiredFieldsNotFullfilled() : boolean{
      return (!this.informedValue || this.informedValue == '0,00' || !this.payment.paymentMethod);
    }

    isInformedValueGreaterThanRecordDebt() : boolean{
      return this.record.total < this.payment.value;
    }

    private formatDate() : Date{
      let parsedDate = new Date(this.informedDate);
      parsedDate.setDate(parsedDate.getDate() + 1)

      return  parsedDate;
    }
}
  
    