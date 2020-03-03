import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecordFormComponent } from '../record/record-form';
import { RecordService } from '../../services/record.service';
import { RecordVO } from '../../vo/RecordVO';
import { RecordDetailComponent } from './record-detail';

@Component({
  templateUrl: 'record-search.html'
})

export class RecordSearchComponent {

  name : string;
  records : RecordVO[];
  noRecordsFound: boolean;

  constructor(private navCtrl: NavController, private service: RecordService ) {
    this.records = [];
  }

  // There is the need to enrase the search in case the user looks up a record, clicks on its detail, 
  // changing some information afterwards and then
  // comes back to search screen. The search would be still displayed with the datas from the past
  ionViewWillEnter(){
    this.records = [];
    this.noRecordsFound = false;
  }

  openRecordFormPage(){
    this.navCtrl.push(RecordFormComponent);
  }

  search(){
    this.service.search(this.name).subscribe(
      response  => {
        this.records = response;
        this.noRecordsFound = (response.length == 0)
      },
      error => {
        console.log('Erro')
      }
    )
  }

  openDetailPage(record : RecordVO){
    this.navCtrl.push(RecordDetailComponent, {record : record});
  }

}