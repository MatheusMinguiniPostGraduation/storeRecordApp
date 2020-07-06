import { RecordVO } from "../vo/RecordVO";
import { PaymentMethodVO } from "../vo/PaymentMethodVO";

export class PaymentForm{

    recordId : number;
    value : number;
    date : Date;
    paymentMethod : PaymentMethodVO;

    constructor(record: RecordVO){
        this.recordId = record.id;
        this.paymentMethod = new PaymentMethodVO();
        this.value = 0.0;
        this.date = new Date();
    }
}