import { NavController, NavParams } from "ionic-angular";
import { MessagesUtil } from "../../util/message.util";
import { SaleService } from "../../services/sale.service";
import { Component, ViewChild } from "@angular/core";
import { RecordVO } from "../../vo/RecordVO";
import { SaleForm } from "../../form/SaleForm";
import { ProductForm } from "../../form/ProductForm";

@Component({
  selector: 'sale-pages',
  templateUrl: 'sale-form.html'
})

export class SaleFormComponent {

  record : RecordVO;
  sale : SaleForm;

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
    this.sale = new SaleForm(this.record);

    this.amount = 1;
  }

  addProduct(){
    try{
      this.checkFields();

      let product : ProductForm = new ProductForm();

      product.amount = this.amount;
      product.description = this.productDescription;
      product.unit_value = parseFloat(this.productValue);
      product.total_value = (parseFloat(this.productValue) * this.amount);
  
      this.sale.products.push(product);
      this.total += product.total_value;
  
      this.resetForm();

    }catch(error){
      this.messageUtil.showErrorMessage(error);
    }
  }

  checkFields(){

    let typedValue = parseFloat(this.productValue);
    
    if(!typedValue || typedValue <= 0 || typedValue > 2000 ){
      throw `O valor precisa ser MAIOR que R$0,00 ou MENOR que R$ 2.000`;
    }

    let isInteger = Number.isInteger(this.amount * 1)

    if(this.amount <= 0 || this.amount > 10 || !isInteger){
      throw `A quantidade precisa ser entre 1 e 10 e não pode ser fracionária`
    }

    if(!this.productDescription){
      throw `Digite uma descrição para o produto`
    }
    
  }

  save(){
    this.service.save(this.sale).subscribe(
      response => {
        this.messageUtil.showSuccessfullMessage(`Venda no valor de R$${response.total} finalizada`);
        this.navCtrl.getPrevious().data.record = response.record;
        
        this.navCtrl.pop();
      },
      error => {
        this.messageUtil.showErrorMessage();
      }
    )
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


  increaseAmount(){
    if(this.amount < 10){
      this.amount++;
    }
  }

  decreaseAmount(){
    this.amount--;
  }
}