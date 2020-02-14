import { ProductForm } from "./ProductForm";
import { RecordVO } from "../vo/RecordVO";

export class SaleForm {

    id : number;
    recordId : number;
    products : Array<ProductForm>;
    
    constructor(record: RecordVO){
        this.products = [];
        this.recordId = record.id
    }
}

