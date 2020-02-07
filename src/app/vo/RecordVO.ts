import { Costumer } from '../vo/CostumerVO';

export class RecordVO {

  id : number;
  costumer : Costumer;
  total : number;
  creation_date : Date;
  //List
  payments : String;


  constructor(){

  }

  areRequiredFieldsFullfiled(){
    if(!this.costumer.last_name || !this.costumer.name) {
      return false;
    }else{
      return true;
    }
  }
}