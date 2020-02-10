import { Costumer } from '../vo/CostumerVO';

export class RecordVO {

  id : number;
  
  name : string;
  lastName : string;
  extraInformation : string;

  costumer : Costumer;
  total : number;
  creation_date : Date;
 
  //List
  payments : string;


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