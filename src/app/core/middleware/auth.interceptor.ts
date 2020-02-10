import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { AuthContextService } from '../authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(public authContext: AuthContextService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authContext.getEncodedToken()}`
      }
    });
    return next.handle(request);
  }
}
