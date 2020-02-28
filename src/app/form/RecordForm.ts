import { CostumerForm } from "./CostumerForm";
import { RecordVO } from "../vo/RecordVO";

export class RecordForm {

    id : number;
    costumer : CostumerForm;
    
    constructor(){
      this.costumer = new CostumerForm();
    }

    convertVOIntoForm(vo : RecordVO){
        this.id = vo.id;
        this.costumer = new CostumerForm;
        this.costumer.name = vo.costumer.name;
        this.costumer.lastName = vo.costumer.lastName;
        this.costumer.cpf = vo.costumer.cpf;
        this.costumer.extraInformation = vo.costumer.extraInformation;
    }

}