import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { AgmCoreModule } from "@agm/core";

import { AuthProvider } from '../providers/auth/auth';
import { PlacesService } from '../services/places';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapPage } from '../pages/map/map';
import { AddPostPage } from '../pages/add-post/add-post';
import { ViewPostPage } from '../pages/view-post/view-post';
import { SettingsPage } from '../pages/settings/settings';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapPage,
    AddPostPage,
    ViewPostPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAlDfgN2-37fmebMmmuEIKi6KOdMmYrALA'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapPage,
    AddPostPage,
    ViewPostPage,
    SettingsPage
  ],
  providers: [
    Geolocation,
    Camera,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PlacesService,
  ]
})
export class AppModule {}
