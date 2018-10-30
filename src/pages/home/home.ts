import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScannerPage } from '../barcode-scanner/barcode-scanner';
import { LocalNotificationPage } from '../local-notification/local-notification';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public barcodeScannerPage = BarcodeScannerPage;
  public localNotificationPage = LocalNotificationPage;

  constructor(public navCtrl: NavController) {
    // this.navCtrl.push(LoginPage);
  }
  ionViewDidLoad() {
    // Let's navigate from Home Page to LoginPage
    // this.navCtrl.push(LoginPage);
 }

  

  gotoBarcodePage(){
    this.navCtrl.push('BarcodeScannerPage');    
}
  gotolocalNotificationPage(){
    this.navCtrl.push('LocalNotificationPage');    
}

}
