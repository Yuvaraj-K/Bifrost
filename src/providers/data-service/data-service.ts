import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
// import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {


  constructor(public http: HttpClient) {
    // console.log('Hello DataServiceProvider Provider');
  }

  getListDetails() {
    return this.http.get('assets/data/phones.json');
  }

}
