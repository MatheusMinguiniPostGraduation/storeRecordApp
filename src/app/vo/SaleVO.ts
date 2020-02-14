import { ProductVO } from "./ProductVO";
import { RecordVO } from "./RecordVO";

export class SaleVO {

    id : number;

    record : RecordVO;

    date : string;

    hour: string;

    total : number;
  
    products : Array<ProductVO>;
  
    constructor(record: RecordVO){
        this.products = [];
        this.record = record
    }
}
