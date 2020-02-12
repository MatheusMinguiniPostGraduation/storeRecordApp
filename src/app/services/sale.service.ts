import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { RestUtil } from "../util/environmet.util";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SaleService {

    constructor ( private http: HttpClient, private restUtil : RestUtil) {}

    /*save(record : RecordVO): Observable<any> {
        return this.http.post<any>(`${this.restUtil.getDNS()}/records`, record, httpOptions)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
       )
    };*/
}