import { RecordVO } from "./RecordVO";
import { PaymentMethodVO } from "./PaymentMethodVO";

export class PaymentVO {

    id : number;
    userName : string;
    record : RecordVO;
    date : Date;
    interest : number;
    value : number;
    total : number;
    cancelled : boolean;
    paymentMethod : PaymentMethodVO
  
    constructor(record: RecordVO){
        this.record = record
        this.interest = 0.0
    }
}