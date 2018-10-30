import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalNotificationPage } from './local-notification';

@NgModule({
  declarations: [
    LocalNotificationPage
  ],
  imports: [
    IonicPageModule.forChild(LocalNotificationPage),
  ],
})
export class LocalNotificationPageModule {}
