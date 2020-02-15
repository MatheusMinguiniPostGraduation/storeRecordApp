import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { RestUtil } from "../util/environmet.util";
import { SaleForm } from "../form/SaleForm";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SaleService {

    constructor ( private http: HttpClient, private restUtil : RestUtil) {}

    save(sale : SaleForm) : Observable<any> {
        return this.http.post<any>(`${this.restUtil.getDNS()}/sales`, sale, httpOptions)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
       )
    };

    costumSearch(uri : string) : Observable<any> {
        const fullUri = `${this.restUtil.getDNS()}/${uri}`
        
        return this.http.get<any>(fullUri, httpOptions)
        .pipe(
            catchError(error => {
                throw new Error(error);
            })
        )
    }
}