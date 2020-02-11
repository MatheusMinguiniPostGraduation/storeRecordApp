import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RecordVO } from '../../vo/RecordVO';


@Component({
  templateUrl: 'record-detail.html'
})

export class RecordDetailComponent {
  
  record : RecordVO;

  constructor(public navCtrl: NavController, public navigationParameters: NavParams) {
    this.record = navigationParameters.get('record');
  }

  ngOnInit(){}

}