import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ImageLoaderConfig } from 'ionic-image-loader';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform,
     statusBar: StatusBar,
     splashScreen: SplashScreen,
     private imageloaderConfig: ImageLoaderConfig) {
      platform.ready().then(() => {
      this.imageloaderConfig.enableFallbackAsPlaceholder(true);
      this.imageloaderConfig.setFallbackUrl('assets/imgs/logo.png');
      this.imageloaderConfig.setMaximumCacheAge(24 * 60 * 60 * 1000);  
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

