import { RecordVO } from "../vo/RecordVO";

export class PaymentForm{

    recordId : number;
    value : number;
    date : Date;
    paymentMethod : string;

    constructor(record: RecordVO){
        this.recordId = record.id;
        this.value = 0.0;
        this.date = new Date();
    }
}