import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportService } from '../../services/report.service';
import { CostumerService } from '../../services/costumer.service';
import { CostumerVO } from '../../vo/CostumerVO';
import { PaymentMethodVO } from '../../vo/PaymentMethodVO';


@Component({
  templateUrl: 'report.html'
})

export class ReportComponent {

  costumers : CostumerVO[];

  money : number;
  debit : number;
  credit : number;

  // Doughnut
  public doughnutChartLabels : string[] = ['Cartão crédito', 'Cartão débito', 'Dinheiro'];
  public doughnutChartData : number[] = [0, 0, 0];
  public doughnutChartType : string = 'doughnut';

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  constructor(
    private navCtrl: NavController, 
    private service: ReportService, 
    private costumerService : CostumerService) {
    this.costumers = [];

    this.getTotalCostumers();
    this.getPaymentMethods();
    
  }

    getTotalCostumers(){
        this.costumerService.getCostumersTotalNumber().subscribe(
          response  => {
            this.costumers = response;
          },
          error => {
            console.log('Erro')
          }
        )
    }

    getPaymentMethods(){
      this.service.getPaymentbyGroups().subscribe(
        response  => {
          this.calculatePercentageOfPaymentMethods(response)
        },
        error => {
            console.log('Erro')
        }
      )
    }


    calculatePercentageOfPaymentMethods(payments){
      let total_money = payments.filter(payment => {
        return payment.description == 'Dinheiro'
      }).length
  
      let total_debit = payments.filter(payment => {
        return payment.description == 'Cartão de débito'
      }).length
  
      let total_credit = payments.filter(payment => {
        return payment.description == 'Cartão de crédito'
      }).length

      this.money = (total_money/payments.length) * 100;
      this.debit = (total_debit/payments.length) * 100;
      this.credit = (total_credit/payments.length) * 100;

      this.drawUpPaymentMethodGrapgh()
  
    }
   
    drawUpPaymentMethodGrapgh(){
      this.doughnutChartLabels = ['Cartão crédito', 'Cartão débito', 'Dinheiro'];
      this.doughnutChartData = [this.credit, this.debit, this.money];
    }


      /*public barChartLabels:string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
      public barChartType:string = 'bar';
      public barChartLegend:boolean = true;
      
      public barChartData:any[] = [
        {data: [2000, 3000, 5000, 1000, 500, 600, 100], label: 'Vendas'},
        {data: [4000, 2500, 4000, 700, 1000, 500, 300], label: 'Pagamentos'}
      ];*/
}