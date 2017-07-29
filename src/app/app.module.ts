import { YoutubeService } from './../pages/home/youtube';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SafePipe } from '../pages/home/safe.pipe';
//import { AutoCompleteModule } from 'ionic2-auto-complete';
import { AutoCompleteModule } from '../pages/home/component/index';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    YoutubeService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
