import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { RecordVO } from "../vo/RecordVO";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RecordService {

    private base_url : string = 'http://127.0.0.1:8080/';

    constructor ( private http: HttpClient) {}

    save(record : RecordVO): Observable<any> {
        return this.http.post<any>(this.base_url.concat(`records`), record, httpOptions)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
       )
    };

    search(name : string): Observable<any> {

        let url = this.base_url.concat(`records`).concat(`?name=`);

        if(name){
            url = this.base_url.concat(`records`).concat(`?name=${name}`);
        }
        
        return this.http.get<any>(url, httpOptions)
            .pipe(
                catchError(error => {
                    throw new Error(error);
                })
       )
    };
}