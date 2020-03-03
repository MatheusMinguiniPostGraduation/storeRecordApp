import { Component } from '@angular/core';
import { NavController, App, AlertController } from 'ionic-angular';
import { RecordSearchComponent } from '../record/record-search';
import { HomeService } from '../../services/home.service';
import { RecordVO } from '../../vo/RecordVO';
import { LoginComponent } from './login/login.component';
import { AuthContextService } from '../../core/authentication.service';

@Component({
  templateUrl: 'home.html'
})
export class HomeComponent {

  public userName : String;
  public recordsTotalValue : number;
  public paymentsTotalValue : number;

  constructor(private navCtrl: NavController, 
              private homeService : HomeService,
              private authContext : AuthContextService,
              private alertController : AlertController,
              private app : App) {

    this.userName = JSON.parse(localStorage.getItem('userName'));

  }

  ionViewWillEnter(){
    this.loadRecordTotal();
    this.loadPaymentTotal();
  }

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearchComponent);
  }

  logout(){
    this.authContext.logout();
    this.app.getRootNav().setRoot(LoginComponent)
  }

  loadRecordTotal(){
    this.recordsTotalValue = 0.0;

    this.homeService.getRecords().subscribe(
      response => {
        
        let records : RecordVO[] = response;
        
        records.forEach(record => {
          this.recordsTotalValue += record.total;
        });
        
      },
      error => {
        console.log('Erro')
      }
    );
  }

  loadPaymentTotal(){
    this.paymentsTotalValue = 0.0;
  }

  async presentConfirmationAlert(id : number) {
    const alert = await this.alertController.create({
        title: 'Sair do aplicativo?',
        message: 'Você precisará informar o seu usuário e senha novamente',
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
                            this.logout();
                    }
                }
            }]
    });

    await alert.present();
  }

  
}
