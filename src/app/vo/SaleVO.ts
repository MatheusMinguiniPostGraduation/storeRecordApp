import { ProductVO } from "./ProductVO";

export class SaleVO {

    id : number;
    userId : number;
    recordId : number;
    total: number;
  
    products : Array<ProductVO>;
  
    constructor(){
        this.total = 0.0;
        this.products = [];
    }
}
