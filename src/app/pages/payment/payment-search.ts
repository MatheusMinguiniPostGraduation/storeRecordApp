import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { SearchBuilder } from "../../util/searchBuilder";
import { PaymentVO } from "../../vo/PaymentVO";
import { PaymentService } from "../../services/payment.service";
import { MessagesUtil } from "../../util/message.util";

@Component({
    templateUrl: 'payment-search.html'
})
export class PaymentSearchComponent {

  record : RecordVO;
  payments :  Array<PaymentVO> ;

  //Filter screen
  isToApplyFilter : boolean;
  from_date : string;
  to_date : string;
  payment_min_value : number;
  payment_max_value : number;

  //Flag to display empty payments found image
  noPaymentsFound : boolean;

  constructor(public navCtrl : NavController, 
              public navigationParameters: NavParams, 
              public service : PaymentService,
              public messageUtil : MessagesUtil) {
  }

  ngOnInit(){
    this.record = this.navigationParameters.get('record');
    this.payments = [];
    this.noPaymentsFound = false;
    this.search();
  }

  search(){
    this.service.costumSearch(this.buildSearchURL()).subscribe(
      response => {
        this.noPaymentsFound = (response.length == 0);
        this.payments = response;

      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )
  }

  private buildSearchURL() : string{
 
    
    let fromDateISOString
    if(this.from_date){
      fromDateISOString = new Date(this.from_date).toISOString().split('T')[0]
    }

    let toDateISOString;
    if(toDateISOString){
      toDateISOString = new Date(this.to_date).toISOString().split('T')[0]
    }
    
    let uri : string = new SearchBuilder('payments', this.record.id)
                    .withFromDate(fromDateISOString)
                    .withToDate(toDateISOString)
                    .withMinimumValue(this.payment_min_value)
                    .withMaximumValue(this.payment_max_value)
                    .build()

    return uri;
  }

  showFormFilter(){
    if(this.isToApplyFilter){
      this.isToApplyFilter = false;
    }else{
      this.isToApplyFilter = true;
    }
  }

}