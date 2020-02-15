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

  }

  ngOnInit(){
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