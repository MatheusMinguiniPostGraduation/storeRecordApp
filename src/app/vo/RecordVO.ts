import { CostumerVO } from '../vo/CostumerVO';

export class RecordVO {

  id : number;
  
  costumer : CostumerVO;
  total : number;
  creation_date : Date;
 
  //List
  payments : string;


  constructor(){
    this.total = 0.0
    this.costumer = new CostumerVO();
  }

}