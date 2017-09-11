import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativeAudio } from '@ionic-native/native-audio';
import { IonicStorageModule } from '@ionic/storage';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Toast } from '@ionic-native/toast';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SideMenuComponent } from '../components/side-menu/side-menu'
import { SettingComponent } from '../components/setting/setting'
import { AboutComponent } from '../components/about/about'
import { FavoriteComponent } from '../components/favorite/favorite'
import { ExampleListComponent } from '../components/example-list/example-list'
import { ExampleDetailComponent } from '../components/example-detail/example-detail'
import { DuaConstantProvider } from '../providers/dua-constant/dua-constant';
import { DuaServiceProvider } from '../providers/dua-service/dua-service';
import { Media, MediaObject } from '@ionic-native/media';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';


const firebaseConfig = {
  apiKey: "AIzaSyCLVKNpSZS_UOyLawYSdCfg_ofQ7C9HCrM",
  authDomain: "example-in-quran.firebaseapp.com",
  databaseURL: "https://example-in-quran.firebaseio.com",
  projectId: "example-in-quran",
  storageBucket: "example-in-quran.appspot.com",
  messagingSenderId: "628118557621"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    ExampleListComponent,
    ExampleDetailComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SideMenuComponent,
    SettingComponent,
    AboutComponent,
    FavoriteComponent,
    ExampleListComponent,
    ExampleDetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    Media,
    AdMobFree,
    SocialSharing,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DuaConstantProvider,
    DuaServiceProvider

  ]
})
export class AppModule {}
