import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from "@ionic-native/toast";
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-barcode-scanner',
  templateUrl: 'barcode-scanner.html',
})
export class BarcodeScannerPage {
products: any = [];
selectedProduct: any;
productFound:boolean = false;
productNotFound:boolean = false;
barcodeData: string;
barcodeDataFormat: string;
touchIDNotAvailable: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner:BarcodeScanner, private platform: Platform,
    private toast:Toast,
    public dataService:DataServiceProvider) {
      this.dataService.getListDetails().subscribe((response)=> {
      this.products = response;
      console.log(this.products);
  });
 
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BarcodeScannerPage');
     this.scan();
  }

  scan() {
    this.platform.ready().then(() => {
    if(this.platform.is('cordova')) {
      this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      this.selectedProduct = this.products.find(product => product.id === barcodeData.text);
      if(this.selectedProduct !== undefined) {
        this.productFound = true;
        this.productNotFound = false;
      } else {
        this.productFound = false;
        if(barcodeData.text){
          this.productNotFound = true;
          this.barcodeData = barcodeData.text;
          this.barcodeDataFormat = barcodeData.format;
        }
        this.toast.show(`Product not found`, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
    } else {
      // handle thing accordingly
      this.touchIDNotAvailable = true;
    }
})
    
  }

}
