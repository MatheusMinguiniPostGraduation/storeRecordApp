import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RestUtil } from "../util/environmet.util";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CostumerService {

    constructor ( private http: HttpClient, private restUtil : RestUtil) {}

    getCostumersTotalNumber() : Observable<any> {
        return this.http.get<any>(`${this.restUtil.getDNS()}/costumers`, httpOptions)
        .pipe(
            catchError(error => {
                throw new Error(error);
            })
        )
    };
}