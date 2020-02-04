import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordFormComponent } from '../record/record-form';

@Component({
  templateUrl: 'record-search.html'
})

export class RecordSearchComponent {

  constructor(public navCtrl: NavController) {

  }

  openRecordFormPage(){
    this.navCtrl.push(RecordFormComponent);
  }

}