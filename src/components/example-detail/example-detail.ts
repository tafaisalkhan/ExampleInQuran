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
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

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


  
  constructor(private transfer: FileTransfer, private varFile: File, private toast: Toast, private duaServiceProvider: DuaServiceProvider, private nativeAudio: NativeAudio, private media: Media, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private duaConstantProvider: DuaConstantProvider)
  {
    this.items = this.navParams.get('item');
    this.index = this.navParams.get('index');
   
    this.loadData(this.index);
    
    
  }
  goToSlide() {
    
    this.slides.slideTo(this.index-1, 500);
    
  }

  slideChanged() {
    this.isFavorite = false
   this.currentIndex = this.slides.getActiveIndex();
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
  this.isFavorite = false;
  var i = this.favoriteArray.indexOf(this.index +1);
  if(i != -1) {
    this.favoriteArray.splice(i, 1);
  }
  this.storage.set('favoriteArrayStore', this.favoriteArray);
}

favorite(){
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

          

           const url =this.audioFilePath;
           const fileTransfer: FileTransferObject = this.transfer.create();
           try{ 
            this.file = this.media.create(this.varFile.dataDirectory+ this.index + '.mp3');
           }
           catch(ex){
             //const url =  this.items[this.index].mp3_file_path;
             
          
            console.log("path download: "+ this.varFile.dataDirectory);
           }
          
           
         // this.file = this.media.create(this.audioFilePath);

         

          this.file.onStatusUpdate.subscribe(status => console.log(status)); 

          this.file.onSuccess.subscribe(() => { console.log('Action is successful'); 
  
            this.isPlay = false
               }
            );

          this.file.onError.subscribe(error => { console.log('Error!', error); 
          this.toast.show(`Downloading  `, '2000', 'center').subscribe(
            toast => {
              console.log(toast);
              this.isPlay = false
            }
          );

          fileTransfer.download(url, this.varFile.dataDirectory + this.index + '.mp3').then((entry) => {
            console.log('download complete: ' + entry.toURL());
            this.file = this.media.create(this.varFile.dataDirectory+ this.index + '.mp3');
          }, (error) => {
            console.log('download error: ' + this.varFile.dataDirectory + '.mp3' + ' url: ' + url );
          });
          } );

          
          this.file.play();
      }

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

