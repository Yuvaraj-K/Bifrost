import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FingerprintAIO, FingerprintOptions } from '@ionic-native/fingerprint-aio';
import { HomePage } from '../home/home';
import { FormGroup, FormControl } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  fingerprintOptions: FingerprintOptions
  fingerPrintAvailable = false;
  touchChecked = false;
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private platform: Platform,
    private fingerprint: FingerprintAIO) {

    this.fingerprintOptions = {
      clientId: 'Fingerprint-Demo',
      clientSecret: 'password', // Only Android
      disableBackup: true,
      localizedFallbackTitle: 'Use Pin', // Only iOS
      localizedReason: 'Please authenticate' // Only iOS
    }

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit() {
    this.check();
  }

  notify(event) {
    // console.log(t);
    if (event.checked === true) {
      this.login();  
      // this.touchChecked=false;    
    }
  }

  login() {
    this.fingerprint.show(this.fingerprintOptions)
      .then((result: any) => {
        this.navCtrl.push(HomePage);
      })
      .catch((error: any) => {
        console.log('err: ', error);
        alert(error);
      });
  }


  check() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.fingerprint.isAvailable().then(() => {
          this.fingerPrintAvailable = true
        })
        // .catch((err) => {
        //   this.fingerPrintAvailable = false;
        //   console.log(err);
        // })
      } else {
        //  handle thing for non cordova accordingly
      }
    }).catch(err => {
      console.error(err);
    })

  }

  submit() {
    let formValue = this.loginForm.value;
    if (formValue.username === 'admin' && formValue.password === 'admin') {
      this.navCtrl.push(HomePage);
    }
  }


}
