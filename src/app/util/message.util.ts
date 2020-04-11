import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Injectable()
export class MessagesUtil {
    private _successText : string;
    private _errorText : string;

    private _messageDebtClient : string;

    private _message_success_body = {
        title : 'Sucesso',
        message: 'Mensagem padrão',
        cssClass: 'toast-default',
        duration: 3000 
    }

    private _message_error_body = {
        title : 'Falha',
        message: 'Mensagem padrão',
        cssClass: 'toast-default',
        duration: 3000
    }
  
    constructor( public toastCtrl: ToastController ){
        
        this._successText = 'Operação realizada com sucesso';
        this._errorText = 'Reporte o Erro: 16 99706-3747'
    }
 
    showSuccessfullMessage(message? : string){

        this._message_success_body.message = this._successText;
        this._message_success_body.cssClass = 'toast-success';

        if(message){
            this._message_success_body.message = message;
        }
        
        this.toastCtrl.create(this._message_success_body).present();
    }

    showErrorMessage(message? : string){

        this._message_error_body.message = this._errorText;
        this._message_error_body.cssClass = 'toast-error';

        if(message){
            this._message_error_body.message = message;
        }
        
        this.toastCtrl.create(this._message_error_body).present();
    }

    createCostumerDebtMessage(record) : MessagesUtil{
        this._messageDebtClient = `Olá, ${record.costumer.name}! Tudo bem? 
        \nPrimeiramente, gostaríamos de agradecer pela compra em nossa loja.
        \nAbaixo você pode conferir o total da sua ficha bem como os detalhes da sua última compra conosco! 
        \nQualquer dúvida estamos à disposição! Beeijos
        \n*Valor total da ficha:* R$ ${record.total}
       `

       return this;
    }

    withSaleMessage(sales) : MessagesUtil{
        this._messageDebtClient = this._messageDebtClient.concat(
            `\n\n*Última compra*
            Data: ${sales[sales.length - 1].date}
            Vendido por: ${sales[sales.length - 1].userName}
            \n_Produtos:_\n`
        );

        return this;
    }

    withProduct(products) : MessagesUtil{

        products.forEach(product => {
            this._messageDebtClient = 
                this._messageDebtClient.concat(
                    `\nDescrição: ${product.description}.
                    \nValor unitário: R$ ${product.unit_value}
                    \nQuantidade: ${product.amount}
                    \nValor total: R$ ${product.total_value}
                    \n---------------------------- `
                )
            });

        return this;
    }

    getCostumerDebtMessage(){
        return this._messageDebtClient;
    }
  }