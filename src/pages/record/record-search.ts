import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordForm } from '../record/record-form';

@Component({
  templateUrl: 'record-search.html'
})

export class RecordSearch {

  constructor(public navCtrl: NavController) {

  }

  openRecordFormPage(){
    this.navCtrl.push(RecordForm);
  }

}