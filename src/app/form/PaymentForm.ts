import { RecordVO } from "../vo/RecordVO";

export class PaymentForm{

    recordId : number;
    interest : number;
    value : number;
    date : Date;

    constructor(record: RecordVO){
        this.recordId = record.id;
        this.value = 0.0;
        this.interest = 0.0;
        this.date = new Date();
    }
}