import { ProductVO } from "./ProductVO";

export class SaleVO {

    id : number;
    userId : number;
    recordId : number;
  
    products : Array<ProductVO>;
  
    constructor(){
        this.products = [];
    }
}
