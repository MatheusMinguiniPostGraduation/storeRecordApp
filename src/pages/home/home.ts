import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordSearchComponent } from '../record/record-search';


@Component({
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearchComponent);
  }

}
