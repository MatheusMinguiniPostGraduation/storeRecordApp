import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordSearch } from '../record/record-search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSearchRecordScreen(){
    this.navCtrl.push(RecordSearch);
  }

}
