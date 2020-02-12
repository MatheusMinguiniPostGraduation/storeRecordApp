import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { RecordVO } from "../vo/RecordVO";
import { RestUtil } from "../util/environmet.util";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecordService {

    constructor ( private http: HttpClient, private restUtil : RestUtil) {}

    save(record : RecordVO): Observable<any> {
        return this.http.post<any>(`${this.restUtil.getDNS()}/records`, record, httpOptions)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
       )
    };

    update(record : RecordVO) : Observable<any>{
        
        let url = `${this.restUtil.getDNS()}/records/${record.id}`;

       console.log(url);

        return this.http.put<any>(url, record)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
            )
    }

    search(name : string): Observable<any> {

        if(!name){
            name = '';
        } 

        let url = `${this.restUtil.getDNS()}/records`.concat(`?name=${name}`);

        return this.http.get<any>(url, httpOptions)
            .pipe(
                //retry(3),
                catchError(error => {
                    throw new Error(error);
                })
       )
    };
}