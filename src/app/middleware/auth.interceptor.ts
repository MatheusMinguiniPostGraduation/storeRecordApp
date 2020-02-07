import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { AuthContextService } from '../services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public authContext: AuthContextService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Token:    Bearer ${this.authContext.getEncodedToken()}`)
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authContext.getEncodedToken()}`
      }
    });
    return next.handle(request);
  }
}


