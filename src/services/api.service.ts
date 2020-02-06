import { Injectable } from "@angular/core";

@Injectable()
export class ServiceAPI {
  public _API_DNS : string;

  constructor(){
    this._API_DNS = 'http://localhost:8080' /*'http://procurala.kinghost.net:21035'*/;
  }

  getResourceAddress() : string{
    return this._API_DNS;
  }

  getHeaders() : any {
    return {
      headers: { 'Content-Type': 'application/json' }
    }
  }
}