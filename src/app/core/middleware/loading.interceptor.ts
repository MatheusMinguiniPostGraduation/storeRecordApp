import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { LoadingController, AlertController } from 'ionic-angular';
import { LoginComponent } from '../../pages/home/login/login.component';

import { App } from 'ionic-angular';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  private count: number;
  private isLoading: boolean;

  constructor(
    private loadingController: LoadingController,
    private alertController: AlertController,
    private app: App
  ) {
    this.count = 0;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.count++;

    if (this.count === 1) {
      this.presentLoading();
    }

    return next.handle(req)
      .pipe(timeout(10000), 
        tap((e: HttpEvent<any>) => {
          if (e.type === HttpEventType.UploadProgress) {
            //this.dialog.setLoadingMode('determinate');
            //this.dialog.setLoadingValue(Math.round(100 * e.loaded / e.total));
          } else if (e instanceof HttpResponse) {
            this.count--;
            if (this.count === 0) {
              this.closeLoading();
            }
          }
        }),
        catchError(e => {
          this.closeLoading();
          if (e instanceof HttpErrorResponse) {
            if (e.status === 401){
              //User provided wrong information
              setTimeout(() => {
                this.presentAlert('Usuário e/ou senha inválido(s)');
              }, 100);

            } else if(e.status === 403) { 
              //Indicates the user is not/no longer authenticated
              setTimeout(() => {
                this.presentAlert('Sessão expirada. Faça login novamente');
                localStorage.removeItem('token');
                this.app.getRootNav().setRoot(LoginComponent);
              }, 100);

            } else if (e.status == 0 || (e.status >= 500 && e.status <= 599) ) {
              
              //For some reason, when the connection is refused, that is, the server is down, the status is 0, although it should be 503

              //Fallback for a server side error
              this.presentAlert('Estamos trabalhando para melhorar. Tente em alguns minutos');
            }
          }
          return Observable.throw(e.status);
        })
      );
  }

  async presentLoading() {
    this.isLoading = true;
    const loading = await this.loadingController.create();
    return await loading.present().then(() => {
      if (!this.isLoading) {
        loading.dismiss();
      }
    });;
  }

  async closeLoading() {
    this.isLoading = false;
    return await this.loadingController;
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
