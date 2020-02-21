import { Component } from "@angular/core";
import { NavController, NavParams, AlertController, App } from "ionic-angular";
import { SaleService } from "../../services/sale.service";
import { MessagesUtil } from "../../util/message.util";
import { SaleVO } from "../../vo/SaleVO";
import { RecordDetailComponent } from "../record/record-detail";
import { ProductVO } from "../../vo/ProductVO";

@Component({
    templateUrl: 'sale-detail.html',
    selector: 'sale-pages'
})
export class SaleDetailComponent {

    sale : SaleVO;
    options : string;

    products : Array<ProductVO>
 
    constructor(public navCtrl: NavController, 
        public navigationParameters: NavParams, 
        public service : SaleService,
        public alertController : AlertController,
        private app: App,
        public messageUtil :  MessagesUtil) {

        this.sale = new SaleVO(null);
    }

    ionViewWillEnter(){
        const id =  this.navigationParameters.get('id');
        this.getSaleById(id); 
        this.options = 'general';    
    }
    
    getSaleById(id : number){
        this.service.getSaleById(id).subscribe(
            response => {
               this.sale = response;
            },
            error => {
                this.messageUtil.showErrorMessage();
            }
        )
    }

    returnProduct(product : ProductVO, amount, index : number){


        let itemFound;
        this.sale.products.forEach(saleProduct => {
            if(saleProduct.id == product.id && saleProduct.returned){
                itemFound = saleProduct;
            }
        })

        if(itemFound != null && itemFound != undefined){
            itemFound.amount = itemFound.amount + amount;
            itemFound.total_value = product.amount * product.unit_value;
            product.amount = product.amount - amount;
            product.total_value = product.amount * product.unit_value; 
        }else{
            let returnedProduct = Object.assign({}, product);
            returnedProduct.amount = amount;
            returnedProduct.total_value = amount * product.unit_value
            returnedProduct.returned = true;
    
            product.amount = product.amount - amount;
            product.total_value = product.amount * product.unit_value; 
            this.sale.products.push(returnedProduct);
        }

       
        if(product.amount == 0){
            this.sale.products.splice(index, 1);
        } 
        
    }

    async askHowManyUnits(product : ProductVO, index:number){
        const alert = await this.alertController.create({
            title: `Quantas peças deseja devolver? No máximo ${product.amount}`,
            
            inputs: [
                {
                    type: 'number',
                    label: 'Quantidade',
                    value: '1',
                    checked: true
                }],
                buttons: [
                    {
                        text: 'Ok',
                        handler: (data ) => {
                           
                            if(data[0]){
                                let amount = parseInt(data[0]);

                                if(amount <= product.amount){
                                    this.returnProduct(product, amount, index);
                                }else{
                                    this.messageUtil.showErrorMessage(`A quantidade devolvida não pode ser maior do que ${product.amount}`)
                                }
                            }
                        }
                    }
                ]
        });
    
        await alert.present();
    }

    deleteSale(id: number){
        this.service.deleteSale(id).subscribe(
            response => {
                this.messageUtil.showSuccessfullMessage();
                this.app.getRootNav().setRoot(RecordDetailComponent, {record: response});
            },
            error => {
                this.messageUtil.showErrorMessage();
            }
        )
    }

    async presentConfirmationAlert(id : number) {
        const alert = await this.alertController.create({
            title: 'Tem certeza?',
            message: 'A venda <b>NÃO</b> poderá ser recuperada. O valor será subtraído da ficha e os respectivos produtos excluídos. Deseja continuar?',
            inputs: [
                {
                    type: 'radio',
                    label: 'Não',
                    value: 'no',
                    checked: true
                },

                {
                    type: 'radio',
                    label: 'Sim',
                    value: 'yes'
                }],
                buttons: [
                    {
                        text: 'Concluir',
                        handler: (data : string) => {
                            if(data == 'yes'){
                                this.deleteSale(id);
                        }
                    }
                }]
        });
    
        await alert.present();
    }

}
  