import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordSearchComponent } from '../record/record-search';

@Component({
  templateUrl: 'home.html'
})

export class HomePage {

  public userName : String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userName = JSON.parse(localStorage.getItem('userName'));
  }

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearchComponent);
  }

}
