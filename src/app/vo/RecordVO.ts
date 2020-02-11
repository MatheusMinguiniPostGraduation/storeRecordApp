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
    this.total = 0.0
    this.costumer = new Costumer();
  }

  areRequiredFieldsFullfiled(){
    if(!this.costumer.lastName || !this.costumer.name) {
      return false;
    }else{
      return true;
    }
  }
}