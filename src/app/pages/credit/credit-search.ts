import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { Component } from "@angular/core";
import { MessagesUtil } from "../../util/message.util";
import { SaleService } from "../../services/sale.service";
import { CreditService } from "../../services/credit.service";
import { CreditVO } from "../../vo/CreditVO";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { SaleDetailComponent } from "../sale/sale-detail";

@Component({
    templateUrl: 'credit-search.html'
})
export class CreditSearchComponent {

  record : RecordVO;
  credits : Array<CreditVO>

  noCreditsFound : boolean

  constructor(private navigationParameters: NavParams,
              private sale_service : SaleService,
              private credit_service : CreditService,
              private messageUtil : MessagesUtil,
              private navCtrl : NavController) {

            this.credits = []
            this.noCreditsFound = false
   }

  ngOnInit(){
    this.record = this.navigationParameters.get('record');
    this.search();
  }

  openSaleDetailPage(id : number){
    this.navCtrl.push(SaleDetailComponent, {id : id});
  }

  search(){
    this.credit_service.search(this.record.id).subscribe(
      response => {
        this.credits = response;
        if(this.credits.length == 0) this.noCreditsFound = true;
      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )
  }

}