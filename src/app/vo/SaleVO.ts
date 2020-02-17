import { ProductVO } from "./ProductVO";
import { RecordVO } from "./RecordVO";
import { CostumerVO } from "./CostumerVO";

export class SaleVO {

    id : number;

    record : RecordVO;

    date : string;

    hour: string;

    total : number;

    userName: string;
  
    products : Array<ProductVO>;
  
    constructor(record: RecordVO){
        this.products = [];
        
        if(record == null){
            this.record = new RecordVO();
        }else{
            this.record = record
        }
        
        this.record.costumer = new CostumerVO();
    }
}
