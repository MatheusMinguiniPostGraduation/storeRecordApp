import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthContextService } from "../core/authentication.service";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {

    constructor ( private http: HttpClient, private authContext: AuthContextService) {}

    getRecords(): Observable<any> {
        return this.http.get<any>(`http://127.0.0.1:8080/records`, httpOptions)
            .pipe(
                catchError(error => {
                    this.authContext.logout();
                    throw new Error(error);
                })
       )
    };
}