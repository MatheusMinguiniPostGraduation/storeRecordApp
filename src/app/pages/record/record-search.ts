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

  constructor(private navCtrl: NavController, private service: RecordService ) {

  }

  ngOnInit(){
    this.records = [];
  }

  openRecordFormPage(){
    this.navCtrl.push(RecordFormComponent);
  }

  search(){
    this.service.search(this.name).subscribe(
      response  => {
        this.records = response;
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