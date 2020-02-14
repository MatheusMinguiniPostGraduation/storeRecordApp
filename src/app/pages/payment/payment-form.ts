import { Component } from "@angular/core";
import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { MessagesUtil } from "../../util/message.util";
import { PaymentService } from "../../services/payment.service";
import { PaymentForm } from "../../form/PaymentForm";


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
        this.payment.value = parseFloat(this.informedValue);
        this.payment.date = new Date(this.informedDate);

        this.service.save(this.payment).subscribe(
          response => {
            this.messageUtil.showSuccessfullMessage(`Valor de R$${response.total} recebido`);
            this.navCtrl.getPrevious().data.record = response.record;
            
            this.navCtrl.pop();
          },
          error => {
            this.messageUtil.showErrorMessage();
          }
        )
      }
}
  
    