import { Injectable } from "@angular/core";


@Injectable()
export class RestUtil {

    public  API_BASE_URL_LOCAL : string = 'http://127.0.0.1:8080';
    public  API_BASE_URL_PRODUCTION : string = '';

    public getDNS(){
        return this.API_BASE_URL_LOCAL;
    }

}