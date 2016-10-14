import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { PingPage } from '../pages/ping/ping';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthHttp } from 'angular2-jwt';
import { AuthService } from '../services/auth/auth';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    PingPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PingPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    AuthHttp,
    AuthService
  ]
})
export class AppModule {}
