import { Injectable } from "@angular/core";


@Injectable()
export class RestUtil {

    public  API_BASE_URL_LOCAL : string = 'http://35.199.65.102:8080';
    public  API_BASE_URL_PRODUCTION : string = '';

    public getDNS(){
        return this.API_BASE_URL_LOCAL;
    }

    //'http://35.199.65.102:8080'

}