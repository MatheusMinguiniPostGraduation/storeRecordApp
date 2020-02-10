import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordSearchComponent } from '../record/record-search';
import { HomeService } from '../../services/home.service';

@Component({
  templateUrl: 'home.html'
})

export class HomeComponent {

  public userName : String;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public homeService : HomeService) {
    this.userName = JSON.parse(localStorage.getItem('userName'));
  }

  ngOnInit(){
    this.homeService.getRecords().subscribe(
      response => {
       
      },
      error => {
       
      }
    );
  }

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearchComponent);
  }

}
