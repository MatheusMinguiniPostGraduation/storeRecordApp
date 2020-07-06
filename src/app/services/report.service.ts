import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RestUtil } from "../util/environmet.util";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReportService {

    constructor ( private http: HttpClient, private restUtil : RestUtil) {}

    getPaymentbyGroups() : Observable<any> {
        const fullUri = `${this.restUtil.getDNS()}/reports/payments/methods`
        
        return this.http.get<any>(fullUri, httpOptions)
        .pipe(
            catchError(error => {
                throw new Error(error);
            })
        )
    };
    
}