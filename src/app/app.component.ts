import { Component, NgZone } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  public zone:NgZone;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.zone = new NgZone({});
    const config = {
      apiKey: "AIzaSyDUyeqy0N3OxpRpR2vhehdW7OHX3WO-oFU",
      authDomain: "hole-finder-app.firebaseapp.com",
      databaseURL: "https://hole-finder-app.firebaseio.com",
      projectId: "hole-finder-app",
      storageBucket: "hole-finder-app.appspot.com",
      messagingSenderId: "65190148749"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged( user => {
      this.zone.run( () => {
        if (!user) {
          this.rootPage = 'LoginPage';
        } else {
          this.rootPage = TabsPage;
        }
      });
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
