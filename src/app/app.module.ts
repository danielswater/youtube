import { YoutubeService } from './../pages/home/youtube';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete'
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SafePipe } from '../pages/home/safe.pipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SafePipe
  ],
  imports: [
    BrowserModule,
    NguiAutoCompleteModule,
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
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
