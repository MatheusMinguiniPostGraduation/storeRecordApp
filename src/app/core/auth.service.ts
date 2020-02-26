import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthContextService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { tap, catchError } from "rxjs/operators";
import { LoginForm } from "../form/LoginForm";
import { RestUtil } from "../util/environmet.util";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class Auth {

    constructor ( private http: HttpClient, private authContext: AuthContextService, private restUtil : RestUtil) {}

    login(data : LoginForm): Observable<any> {

        return this.http.post<any>(`${this.restUtil.getDNS()}/login`, data, httpOptions)
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