import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageLoader } from 'ionic-image-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProcessProvider } from '../providers/process/process';
import { StepOneComponent } from '../components/step-one/step-one';
import { StepTwoComponent } from '../components/step-two/step-two';
import { StepThreeComponent } from '../components/step-three/step-three';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProcessProvider
  ]
})
export class AppModule {}
