import { SaleVO } from "../../vo/SaleVO";
import { RecordVO } from "../../vo/RecordVO";
import { NavController, NavParams } from "ionic-angular";
import { SaleService } from "../../services/sale.service";
import { Component } from "@angular/core";
import { SearchBuilder } from "../../util/searchBuilder";

@Component({
    selector: 'sale-pages',
    templateUrl: 'sale-search.html'
})
export class SaleSearchComponent {

  record : RecordVO;
  sales :  Array<SaleVO> ;

  //Filter screen
  from_date : string;
  to_date : string;
  sale_min_value : number;
  sale_max_value : number;

  //Flag to display empty sales found image
  noSalesFound : boolean;

  constructor(public navCtrl : NavController, 
              public navigationParameters: NavParams, 
              public service : SaleService) {
  }

  ngOnInit(){
    this.record = this.navigationParameters.get('record');
    this.sales = [];
    this.noSalesFound = false;
  }

  search(){
    this.service.costumSearch(this.buildSearchURL()).subscribe(
      response => {
        
        this.noSalesFound = (response.length == 0);
        this.sales = response;

        debugger;
      },
      error => {
        console.log(error);
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
    
    let uri : string = new SearchBuilder('sales', this.record.id)
                    .withFromDate(fromDateISOString)
                    .withToDate(toDateISOString)
                    .withMinimumValue(this.sale_min_value)
                    .withMaximumValue(this.sale_max_value)
                    .build()

    return uri;
  }

}