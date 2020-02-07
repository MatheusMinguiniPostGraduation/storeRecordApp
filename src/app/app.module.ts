import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyApp } from './app.component';


//Declaring app things here

//Modules
import { RecordModule } from './pages/record/record.module';
import { LoginModule } from './pages/login/login.module';
import { LoginComponent } from './pages/login/login.component';

//Interceptors
import { AuthInterceptor } from './middleware/auth.interceptor';
import { LoadingInterceptor } from './middleware/loading.interceptor';
import { AuthContextService } from './services/authentication.service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginModule,
    RecordModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthContextService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class AppModule {}
