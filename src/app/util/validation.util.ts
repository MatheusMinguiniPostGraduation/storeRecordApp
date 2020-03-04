import { Injectable } from "@angular/core";

@Injectable()
export class ValidationUtil{

    public isCpfValid(strCPF) {

        strCPF = strCPF.replace(/\D/g,'');
    
        let sum = 0;
        
        if (strCPF == "00000000000"){
            return false;
        } 
        
        for (let i = 1; i <= 9; i++){
            sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        } 

        let quocient = (sum * 10) % 11;
    
        if ((quocient == 10) || (quocient == 11)){
            quocient = 0;
        }  
        if (quocient != parseInt(strCPF.substring(9, 10)) ){
            return false;
        } 
    
        sum  = 0;
        for (let i = 1; i <= 10; i++){
            sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        } 
        quocient = (sum * 10) % 11;
    
        if ((quocient == 10) || (quocient == 11)){
            quocient = 0;
        }  
        if (quocient != parseInt(strCPF.substring(10, 11) ) ){
            return false;
        } 
        
        return true;
    }
}