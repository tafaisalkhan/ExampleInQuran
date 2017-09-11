import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
import { ExampleDetailComponent } from "../example-detail/example-detail";
/**
 * Generated class for the ExampleListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'example-list',
  templateUrl: 'example-list.html'
})
export class ExampleListComponent {

  dataArray: any = [];
  platform: string;
  version: number;
  constructor(public navCtrl: NavController, private duaServiceProvider: DuaServiceProvider, private storage: Storage, public plt: Platform, private duaConstantProvider: DuaConstantProvider, private admobFree: AdMobFree ) {
    this.loadDua();
    
  }
  itemTapped(evnet :any , item: any, i: any){
    
    this.navCtrl.push(ExampleDetailComponent, {
      item: this.dataArray,
      index: i,
    });
}

loadDua(){
  //check for local storage
  //this.storage.set('quranExample', null);
  //this.duaServiceProvider.getExampleList()  
  //.subscribe(data => {
    
  //  console.log(data);
   

  //},
//(err) => {console.log(err);


 // }
 // );
 //this.storage.set('quranExample', null);
 this.storage.get('quranExample').then((val) => {
    if (val != null){
      this.dataArray =  val;
      
    }
    else
    {
        //this.duaServiceProvider.getExampleList()
        this.duaServiceProvider.getQuranExample()
        .subscribe(data => {
            //this.dataArray = data[0].example;
            //this.version = data[0].version;
            //console.log(this.dataArray);
            //this.storage.set('quranExample', this.dataArray);
            //this.storage.set('version', data[0].version);
            
            this.dataArray = data.Quran.example;
            this.version = data.Quran.version;
            console.log(this.dataArray);
            this.storage.set('quranExample', this.dataArray);
            this.storage.set('version', data.version);
            debugger;

          },
        (err) => {console.log(err);
      
      
          }
          );
        }
  });

  this.storage.get('version').then((val) => {
    if (val != null){
      this.version =  val;
      //this.duaServiceProvider.getExampleList()
      this.duaServiceProvider.getQuranExample()
      .subscribe(data => {
      /*  if (this.version != data[0].version){
          this.dataArray = data[0].example;
          this.version =  data[0].version;
          console.log(this.dataArray);
          this.storage.set('quranExample', this.dataArray);
          this.storage.set('version', data[0].version);
          debugger;
        }*/
        if (this.version != data.Quran.version){
          this.dataArray = data.Quran.example;
          this.version =  data.Quran.version;
          console.log(this.dataArray);
          this.storage.set('quranExample', this.dataArray);
          this.storage.set('version', data.Quran.version);
          debugger;
        }
         

        },
      (err) => {console.log(err);
    
    
        }
        );
      
    }
   
  });


    if (this.plt.is('iphone')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else if (this.plt.is('ipad')) {
      // This will only print when on iOS
      console.log('I am an ipad device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }

    else if (this.plt.is('tablet')) {
      // This will only print when on iOS
      console.log('I am an tablet device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }
    else if (this.plt.is('mobile')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else{
      console.log('I am an browser device!');
    }
 

  }

  

}

