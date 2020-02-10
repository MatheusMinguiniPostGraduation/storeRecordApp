import { Injectable } from '@angular/core';

import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthContextService {

  setToken(token: string): void {
    localStorage.setItem('token', JSON.stringify(token));
  }

  setUserName(userName : string) : void{
    localStorage.setItem('userName', JSON.stringify(userName));
  }

  getDecodedToken(): any {
    return this.getDecodedAccessToken(JSON.parse(localStorage.getItem('token')));
  }

  getEncodedToken(): any {
    if(localStorage.getItem('token')){
      return localStorage.getItem('token').replace(/\"/g, "") //Removing double quote from storaged token hash
    }
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getEncodedToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
