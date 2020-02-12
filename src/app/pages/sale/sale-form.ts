import { NavController, NavParams } from "ionic-angular";
import { MessagesUtil } from "../../util/message.util";
import { SaleService } from "../../services/sale.service";
import { Component, ViewChild } from "@angular/core";
import { RecordVO } from "../../vo/RecordVO";
import { SaleVO } from "../../vo/SaleVO";
import { ProductVO } from "../../vo/ProductVO";

@Component({
  selector: 'sale-pages',
  templateUrl: 'sale-form.html'
})

export class SaleFormComponent {

  record : RecordVO;
  sale : SaleVO;

  productDescription : string;
  productValue : string;

  amount : number;

  total : number;

  @ViewChild("productDescriptionInput") productDescriptionInput;

  constructor(public navCtrl : NavController, 
              public navigationParameters: NavParams, 
              public service : SaleService,
              public messageUtil :  MessagesUtil) {

                this.total = 0.0;
              }

  ngOnInit(){
    this.record = this.navigationParameters.get('record');
    this.sale = new SaleVO();
    this.amount = 1;
    
  }

  addProduct(){
    debugger;
    let product : ProductVO = new ProductVO();

    product.amount = this.amount;
    product.description = this.productDescription;
    product.total_value = (parseFloat(this.productValue) * this.amount);

  
    this.sale.products.push(product);
    this.total += product.total_value;


    this.resetForm();
  }

  removeProduct(index){
    let product = this.sale.products[index];

    this.total -= product.total_value;
    this.sale.products.splice(index, 1);
  }

  private resetForm(){
    this.amount = 1;
    this.productDescription = '';
    this.productValue = '';
    this.productDescriptionInput.setFocus();
  }
  save(){

    /*this.service.save().subscribe(
      response => {
        this.messageUtil.showSuccessfullMessage();
      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )*/

  }

}