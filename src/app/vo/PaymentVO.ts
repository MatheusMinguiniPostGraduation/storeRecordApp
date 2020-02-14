import { RecordVO } from "./RecordVO";

export class PaymentVO {

    id : number;
    userName : string;
    record : RecordVO;
    date : Date;
    interest : number;
    value : number;
    total : number;
    cancelled : boolean;
  
    constructor(record: RecordVO){
        this.record = record
        this.interest = 0.0
    }
}