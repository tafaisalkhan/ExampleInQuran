import { Component, ViewChild } from '@angular/core';
import { NavController, Nav} from 'ionic-angular';
import { SettingComponent } from "../setting/setting";
import { AboutComponent } from "../about/about";
import { FavoriteComponent } from "../favorite/favorite";
import { ExampleListComponent } from "../example-list/example-list";
/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = ExampleListComponent;

  constructor(navCtrl: NavController) {

  }

openPage(page) {
  if(page == 'exampleList'){
      this.nav.setRoot(ExampleListComponent);
  }
  else if (page == 'setting'){
    this.nav.setRoot(SettingComponent);
  }
  else if (page == 'about'){
    this.nav.setRoot(AboutComponent);
  }
  else if (page == 'favorite'){
    this.nav.setRoot(FavoriteComponent);
  }


}


}
