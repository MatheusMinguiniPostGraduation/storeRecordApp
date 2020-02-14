import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';

//Declaring app things here

//Modules
import { RecordModule } from './pages/record/record.module';
import { HomeModule } from './pages/home/home.module';

//Interceptors
import { AuthInterceptor } from './core/middleware/auth.interceptor';
import { LoadingInterceptor } from './core/middleware/loading.interceptor';
import { AuthContextService } from './core/authentication.service';

//Money currence
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { MessagesUtil } from './util/message.util';
import { RestUtil } from './util/environmet.util';
import { SaleModule } from './pages/sale/sale.module';
import { PaymentModule } from './pages/payment/payment.module';
registerLocaleData(ptBr)

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RecordModule,
    SaleModule,
    PaymentModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthContextService,
    { provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-PT'},
    MessagesUtil,
    RestUtil
  ]
})
export class AppModule {}
