import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { MessagesUtil } from "../../util/message.util";
import { CreditService } from "../../services/credit.service";
import { CreditVO } from "../../vo/CreditVO";
import { SaleDetailComponent } from "../sale/sale-detail";

@Component({
    templateUrl: 'credit-search.html'
})
export class CreditSearchComponent {

  record : RecordVO;

  givenCredits : Array<CreditVO>
  usedCredits : Array<CreditVO>

  options : string;

  constructor(private navigationParameters: NavParams,
              private credit_service : CreditService,
              private messageUtil : MessagesUtil,
              private navCtrl : NavController) {
      this.givenCredits = []
      this.usedCredits = []
  }

  ngOnInit(){
    this.options = 'given_credits' //Initializing the toggle
    this.record = this.navigationParameters.get('record');
    this.search();
  }

  openSaleDetailPage(id : number){
    this.navCtrl.push(SaleDetailComponent, {id : id});
  }

  search(){
    this.credit_service.search(this.record.id).subscribe(
      response => {
        this.loadCreditLists(response);
      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )
  }

  loadCreditLists(list){
    this.givenCredits = list.filter(credit => credit.type == 'GIVEN');
    this.usedCredits = list.filter(credit => credit.type == 'USED');
  }

}