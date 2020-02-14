import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthContextService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { LoginForm } from "../form/LoginForm";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Auth {

    constructor ( private http: HttpClient, private authContext: AuthContextService) {}

    login(data : LoginForm): Observable<any> {

        return this.http.post<any>(`http://127.0.0.1:8080/login`, data, httpOptions)
            .pipe(
                tap(async (response : any) => {
                    await this.authContext.setToken(response.token)
                    await this.authContext.setUserName(data.login)
                }),
                catchError(error => {
                    throw new Error(error);
                })
       )
    };
}