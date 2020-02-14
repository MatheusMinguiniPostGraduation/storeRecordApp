import { SaleVO } from "../../vo/SaleVO";
import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { SaleService } from "../../services/sale.service";
import { Component } from "@angular/core";

@Component({
    selector: 'sale-pages',
    templateUrl: 'sale-search.html'
})
export class SaleSearchComponent {

  record : RecordVO;
  sales :  Array<SaleVO> ;


  constructor(public navCtrl : NavController, 
              public navigationParameters: NavParams, 
              public service : SaleService) {
  }

  ngOnInit(){
    this.record = this.navigationParameters.get('record');
    this.sales = [];
    
  }
}