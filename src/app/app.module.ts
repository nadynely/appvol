import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListvolsPage } from '../pages/listvols/listvols';
import { FlightService } from '../services/flights.service';
import { SingleFlightPage } from '../pages/single-flight/single-flight';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListvolsPage,
    SingleFlightPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListvolsPage,
    SingleFlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlightService,

  ]
})
export class AppModule {}
