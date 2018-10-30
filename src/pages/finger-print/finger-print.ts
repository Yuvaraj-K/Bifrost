import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';


@IonicPage()
@Component({
  selector: 'page-finger-print',
  templateUrl: 'finger-print.html',
})
export class FingerPrintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private faio: FingerprintAIO
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FingerPrintPage');
  }

}
