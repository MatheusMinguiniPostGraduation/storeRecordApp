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
  