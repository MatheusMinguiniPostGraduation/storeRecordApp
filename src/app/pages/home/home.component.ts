import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordSearchComponent } from '../record/record-search';
import { HomeService } from '../../services/home.service';
import { RecordVO } from '../../vo/RecordVO';

@Component({
  templateUrl: 'home.html'
})
export class HomeComponent {

  public userName : String;
  public recordsTotalValue : number;
  public paymentsTotalValue : number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public homeService : HomeService) {
    this.userName = JSON.parse(localStorage.getItem('userName'));
  }

  ionViewWillEnter(){
    this.recordsTotalValue = 0.0;

    this.paymentsTotalValue = 0.0;

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

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearchComponent);
  }
}
