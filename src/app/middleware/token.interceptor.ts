import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { AuthenticationService } from '../services/authentication.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getEncodedToken();

    if (this.authService.isLoggedIn() && token) {
      const cloned = req.clone({
        setHeaders: {
          'App-token': `${token}`
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
