export class ProductForm {

    id : number;
    description : string;
    unit_value : number;
    total_value: number;
    amount: number;
    
    
    constructor(){
        this.unit_value = 0.0;
        this.total_value = 0.0;
        this.amount = 0;
    }
}