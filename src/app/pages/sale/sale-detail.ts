import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { SaleService } from "../../services/sale.service";
import { MessagesUtil } from "../../util/message.util";
import { SaleVO } from "../../vo/SaleVO";

@Component({
    templateUrl: 'sale-detail.html',
    selector: 'sale-pages'
})
export class SaleDetailComponent {

    sale : SaleVO;
    options : string;
 
    constructor(public navCtrl: NavController, 
        public navigationParameters: NavParams, 
        public service : SaleService,
        public alertController : AlertController,
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

    deletesale(id: number){
        this.presentAlert();
    }

    async presentAlert() {
        const alert = await this.alertController.create({
            title: 'Tem certeza?',
            message: 'A venda <b>NÃO</b> poderá ser recuperada. O valor será subtraído da ficha e os respectivos produtos excluídos. Por favor, ' + 
            'pense bem antes de continuar a operação.',
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
                                console.log("Realmente quer excluir");
                        }
                    }
                }]
        });
    
        await alert.present();
    }

}
  