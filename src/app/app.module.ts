import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
// import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner';
// import { LocalNotificationPage } from '../pages/local-notification/local-notification';
// import { FingerPrintPage } from '../pages/finger-print/finger-print';
import { LoginPage } from '../pages/login/login';

import { DataServiceProvider } from '../providers/data-service/data-service';
import { BarcodeScannerPageModule } from '../pages/barcode-scanner/barcode-scanner.module';
import { FingerPrintPageModule } from '../pages/finger-print/finger-print.module';
import { LocalNotificationPageModule } from '../pages/local-notification/local-notification.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // BarcodeScannerPage,
    // LocalNotificationPage,
    // FingerPrintPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ReactiveFormsModule,
    BarcodeScannerPageModule,
    FingerPrintPageModule,
    LocalNotificationPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // BarcodeScannerPage,
    // LocalNotificationPage,
    // FingerPrintPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    Toast,
    DataServiceProvider,
    LocalNotifications,
    FingerprintAIO
  ]
})
export class AppModule {}
