import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Declaring app things here
import { RecordSearch } from '../pages/record/record-search';
import { RecordForm } from '../pages/record/record-form';
import { RecordDetail } from '../pages/record/record-detail';

import { MenuComponent } from '../pages/menu/menu.component';

@NgModule({
  declarations: [
    MyApp,
    MenuComponent,
    HomePage,
    RecordSearch,
    RecordForm,
    RecordDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuComponent,
    HomePage,
    RecordSearch,
    RecordForm,
    RecordDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
