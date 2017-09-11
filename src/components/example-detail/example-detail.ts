import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';

/**
 * Generated class for the ExampleDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'example-detail',
  templateUrl: 'example-detail.html'
})
export class ExampleDetailComponent {

  @ViewChild(Slides) slides: Slides;
  //data: any;
  that: any;
  items: any;
  ayah_no: any; ''
  ayah: any;
  translation: any;
  name: any;
  arabicName: any;
  chapterName: any;
  chapterNo: any;
  filename: any;
  file: MediaObject;
  isPlay:Boolean = false;
  bismillAllah:any;
  sizeStore: string = "normal";
  translationStore: any = "english";
  isFavorite : Boolean ; false;
  currentIndex: any = 0 ;
  favoriteArray: any = [];
  favoriteArrayStore: any = [];
  favoriteDUAArray: any = [];
  index: any;
  platform: string;
  audioFilePath:string;
  hasAudio:boolean = false;
  title: string= "";

  constructor(private toast: Toast, private duaServiceProvider: DuaServiceProvider, private nativeAudio: NativeAudio, private media: Media, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private duaConstantProvider: DuaConstantProvider)
  {
    this.items = this.navParams.get('item');
    this.index = this.navParams.get('index');
    console.log(this.items);
    //this.data = this.item.dua;
    debugger;
    this.loadData(this.index);
    //this.slides.slideTo(this.index, 500);
    //this.goToSlide();
  }
  goToSlide() {
    
    this.slides.slideTo(this.index-1, 500);
    //this.index = this.currentIndex;
    
  }

  slideChanged() {
    this.isFavorite = false
   this.currentIndex = this.slides.getActiveIndex();
   console.log('Current index is', this.currentIndex);
   //this.index = this.currentIndex;
   this.loadData(this.currentIndex);
   this.isPlay = false;  

}

loadData(index){
  try{

    this.platform = this.duaConstantProvider.device;

    this.storage.get('favoriteArrayStore').then((val) => {
      if (val != null){
        this.favoriteArray =  val;
      }
    });

    this.storage.get('sizeStore').then((val) => {
      if (val != null){
        this.sizeStore =  val;
      }
    });

    this.storage.get('translationStore').then((val) => {
      try{
        let temp = this.favoriteArray.filter(dua => dua == this.index);
        if(temp.length == 0){
          this.isFavorite = false;
        }
        else{
          this.isFavorite = true;
        }

      if (val != null){
         this.translationStore =  val;
         if(this.translationStore == "english"){
          this.translation = this.items[index].english;
        }
        else if(this.translationStore == "arabic"){
          this.translation = this.items[index].arabic;
        }
        else if(this.translationStore == "spanish"){
          this.translation = this.items[index].spanish;
        }
        else if(this.translationStore == "chainses"){
          this.translation = this.items[index].chinses;
        }
        else if(this.translationStore == "japanses"){
          this.translation = this.items[index].japanses;
        }
        else if(this.translationStore == "turkish"){
          this.translation = this.items[index].turkish;
        }
        else if(this.translationStore == "urdu"){
          this.translation = this.items[index].urdu;
        }
        else if(this.translationStore == "russian"){
          this.translation = this.items[index].russian;
        }
      }
      else{
        this.translation = this.items[index].urdu;
      }
    }
    catch(e){

    }
    });
    if(this.translationStore == undefined || this.translationStore == null){
      this.translation = this.items[index].english;
    }
    this.ayah_no = this.items[index].aya_no
    this.name = this.items.name;
    this.arabicName = this.items.arabic_name
    this.chapterName = this.items[index].chapter_name;
    this.chapterNo = this.items[index].chapter_no;
    this.ayah = this.items[index].arabic;
    this.index = this.items[index].index;
    this.audioFilePath = this.items[index].mp3_file_path
    this.hasAudio = this.items[index].hasAudio;
    this.title = this.items[index].short_title;


    let t = this;
    let i = this.index;
    this.bismillAllah = this.items[index].bismial;
    this.filename = this.items[index].mp3_file_path;
    setTimeout(function() {
      t.slides.slideTo(t.index-1, 500);
      t.index = t.currentIndex;
    }, 500); 

  }
  catch(e){
      console.log(e);
  }
}

unFavorite(){
  debugger;
  this.isFavorite = false;
  //this.favoriteArray.slice(this.duaIndex);
  var i = this.favoriteArray.indexOf(this.index +1);
  //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
  if(i != -1) {
    this.favoriteArray.splice(i, 1);
  }
  this.storage.set('favoriteArrayStore', this.favoriteArray);
}

favorite(){
  debugger;;
  this.favoriteArray.push(this.index + 1);
  this.storage.set('favoriteArrayStore', this.favoriteArray);
  this.isFavorite = true;

}

shareDUA(){  
  this.socialSharing.share(  this.ayah + "  " + this.translation , "Example in Quran "  , null);
}


 playDua(){
  
    if(this.isPlay){
      this.isPlay = false;
      this.file.pause();
      this.file.release();
    }
    else{
           this.isPlay = true
          this.file = this.media.create(this.audioFilePath);

          // to listen to plugin events:

          this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

          this.file.onSuccess.subscribe(() => { console.log('Action is successful'); 
  
          this.isPlay = true
        }
            );

          this.file.onError.subscribe(error => { console.log('Error!', error); 
          this.toast.show(`Network not available`, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
              this.isPlay = false
            }
          );
          } );

          // play the file
          this.file.play();
      }
   // this.isPlay = !this.isPlay;
  

   }

  stopDua(fileName: String){

    this.isPlay = false;
      
      try{
        this.file.pause();
      }
      catch(e){

      }

      

  }





}

