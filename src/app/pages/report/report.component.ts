import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaymentService } from '../../services/payment.service';
import { PaymentVO } from '../../vo/PaymentVO';
import { CostumerService } from '../../services/costumer.service';
import { CostumerVO } from '../../vo/CostumerVO';


@Component({
  templateUrl: 'report.html'
})

export class ReportComponent {

    costumers : CostumerVO[];
    payments : PaymentVO[];

    // Doughnut
    public doughnutChartLabels : string[] = ['Cartão crédito', 'Cartão débito', 'Dinheiro'];
    public doughnutChartData : number[] = [20, 70, 10];
    public doughnutChartType : string = 'doughnut';

    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
      };
      public barChartLabels:string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
      
      public barChartData:any[] = [
        {data: [2000, 3000, 5000, 1000, 500, 600, 100], label: 'Vendas'},
        {data: [4000, 2500, 4000, 700, 1000, 500, 300], label: 'Pagamentos'}
      ];



    constructor(
        private navCtrl: NavController, 
        private paymentService: PaymentService, 
        private costumerService : CostumerService) {

    this.payments = [];
    this.costumers = [];

    this.getTotalCostumers();
    //this.getPaymentMethods();
  }

    getTotalCostumers(){
        this.costumerService.getCostumersTotalNumber().subscribe(
          response  => {
            this.costumers = response;
            console.log(this.costumers);
          },
          error => {
            console.log('Erro')
          }
        )
    }

    getPaymentMethods(){
        this.paymentService.getPaymentbyGroups('payments/types').subscribe(
            response  => {
                this.payments = response;
            },
            error => {
                console.log('Erro')
            }
        )
    }

}