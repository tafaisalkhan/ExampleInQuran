webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaConstantProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/*
  Generated class for the DuaConstantProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DuaConstantProvider = (function () {
    function DuaConstantProvider() {
    }
    return DuaConstantProvider;
}());
DuaConstantProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], DuaConstantProvider);

//# sourceMappingURL=dua-constant.js.map

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 182;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 225;

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__components_side_menu_side_menu__["a" /* SideMenuComponent */]);
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorite_favorite__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__example_list_example_list__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SideMenuComponent = (function () {
    function SideMenuComponent(navCtrl) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__example_list_example_list__["a" /* ExampleListComponent */];
    }
    SideMenuComponent.prototype.openPage = function (page) {
        if (page == 'exampleList') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__example_list_example_list__["a" /* ExampleListComponent */]);
        }
        else if (page == 'setting') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__setting_setting__["a" /* SettingComponent */]);
        }
        else if (page == 'about') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutComponent */]);
        }
        else if (page == 'favorite') {
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__favorite_favorite__["a" /* FavoriteComponent */]);
        }
    };
    return SideMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
], SideMenuComponent.prototype, "nav", void 0);
SideMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'side-menu',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/side-menu/side-menu.html"*/'\n\n\n<ion-menu [content]="content" side="left" id="site_menu" >\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-buttons end>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n  <ion-content>\n    <ion-list >\n          <button menuClose ion-item  (click)="openPage(\'exampleList\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Example List\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'favorite\')">\n                <div style="font-weight: bold;font-size:14px">\n                    Favorite\n                </div>\n              </button>\n            <button menuClose ion-item  (click)="openPage(\'setting\')">\n              <div style="font-weight: bold;font-size:14px">\n                  Setting\n              </div>\n            </button>\n            <button menuClose ion-item  (click)="openPage(\'about\')">\n                <div style="font-weight: bold;font-size:14px">\n                    About\n                </div>\n            </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/side-menu/side-menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SideMenuComponent);

//# sourceMappingURL=side-menu.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var SettingComponent = (function () {
    function SettingComponent(storage) {
        var _this = this;
        this.storage = storage;
        this.translationSelected = "urdu";
        this.sizeSelected = "normal";
        storage.get('sizeStore').then(function (val) {
            if (val != null) {
                _this.sizeSelected = val;
            }
        });
        storage.get('translationStore').then(function (val) {
            if (val != null) {
                _this.translationSelected = val;
            }
        });
    }
    SettingComponent.prototype.selectTranlationOption = function () {
        this.storage.set('translationStore', this.translationSelected);
        console.log(this.translationSelected);
    };
    SettingComponent.prototype.selectSizeOption = function () {
        this.storage.set('sizeStore', this.sizeSelected);
        console.log(this.sizeSelected);
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'setting',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/setting/setting.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Setting </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n\n  <ion-list radio-group [(ngModel)]="sizeSelected">\n      <ion-list-header>\n          Font Size\n        </ion-list-header>\n        <ion-item>\n            <ion-label>Normal</ion-label>\n            <ion-radio checked="true" value="normal" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>Large</ion-label>\n            <ion-radio value="large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>XX-Large</ion-label>\n            <ion-radio value="xx-large" (click)="selectSizeOption()"></ion-radio>\n          </ion-item>\n  </ion-list>\n\n  <br/>\n  <br/>\n\n  <ion-list radio-group [(ngModel)]="translationSelected">\n      <ion-list-header>\n          Transaltion\n        </ion-list-header>\n  <ion-item>\n      <ion-label>English</ion-label>\n      <ion-radio checked="true" value="english" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Urdu</ion-label>\n      <ion-radio value="urdu" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Spanish</ion-label>\n      <ion-radio value="spanish" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n        <ion-label>Turkish</ion-label>\n        <ion-radio value="turkish" (click)="selectTranlationOption()" ></ion-radio>\n      </ion-item>  \n\n    <ion-item>\n        <ion-label>Japanese</ion-label>\n        <ion-radio value="japanses" (click)="selectTranlationOption()" ></ion-radio>\n    </ion-item>  \n\n\n    <ion-item>\n        <ion-label>Chianese</ion-label>\n        <ion-radio value="chianses" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label>Russian</ion-label>\n        <ion-radio value="russian" (click)="selectTranlationOption()"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n   \n</ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/setting/setting.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], SettingComponent);

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the AboutComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var AboutComponent = (function () {
    function AboutComponent() {
        console.log('Hello AboutComponent Component');
        this.text = 'Hello World';
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'about',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/about/about.html"*/'\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>About </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n  \n  \n  </ion-header>\n  \n\n\n  <ion-content padding style="padding: 0px;  background-color: #B2DFDB;">\n      \n      <ion-card>\n         \n        \n        <ion-card-content>\n          <p style="font-size: large;">\n              Contant From: Quran.com\n              <br/>\n            <!--  Voice: Saad Al-Ghamadi\n            -->\n              \n          </p>\n        </ion-card-content>\n\n\n\n        </ion-card>\n      </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/about/about.html"*/
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var FavoriteComponent = (function () {
    function FavoriteComponent(duaServiceProvider, nativeAudio, media, navParams, actionSheetCtrl, storage, socialSharing, duaConstantProvider) {
        this.duaServiceProvider = duaServiceProvider;
        this.nativeAudio = nativeAudio;
        this.media = media;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.duaConstantProvider = duaConstantProvider;
        this.name = "No Favorite Example";
        this.isPlay = false;
        this.duaListArray = [];
        this.tmpDuaListArray = [];
        this.favoriteArray = [];
        this.favoriteCardShow = false;
        this.index = 0;
        this.hasAudio = true;
        this.loadDataFromFile();
    }
    FavoriteComponent.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        this.loadDataSlideData(currentIndex);
        this.isPlay = false;
        //this.file.pause();
        //this.file.release()
    };
    FavoriteComponent.prototype.loadDataFromFile = function () {
        var _this = this;
        try {
            this.platform = this.duaConstantProvider.device;
            this.storage.get('favoriteArrayStore').then(function (val) {
                if (val != null) {
                    _this.favoriteArray = val;
                    _this.loadData();
                }
            });
            this.storage.get('sizeStore').then(function (val) {
                if (val != null) {
                    _this.sizeStore = val;
                }
            });
            this.storage.get('translationStore').then(function (val) {
                try {
                    if (val != null) {
                        _this.translationStore = val;
                    }
                }
                catch (e) {
                }
            });
            /*
            
                      this.storage.get('anbiya').then((val) => {
                        if (val != null){
                            for(let item of val){
                              for(let dua of item.dua){
                                for(let aya in dua.aya){
                                  //let temp = this.favoriteArray.filter(favId => favId == dua.aya[aya].index);
                                  //if(temp.lenght > 0){
                                    this.tmpDuaListArray.push(dua.aya[aya]);
                                  //}
            
                              }
                            }
                          }
                        }
                        this.loadData();
                      });
            
            */
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.loadData = function () {
        var _this = this;
        try {
            this.duaListArray = [];
            this.storage.get('quranExample').then(function (val) {
                if (val != null) {
                    var _loop_1 = function (item) {
                        var temp = _this.favoriteArray.filter(function (favId) { return favId == item.index; });
                        if (temp.length > 0) {
                            _this.duaListArray.push(item);
                            console.log(_this.duaListArray);
                        }
                    };
                    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                        var item = val_1[_i];
                        _loop_1(item);
                    }
                    if (_this.duaListArray.length > 0) {
                        _this.loadDataSlideData(0);
                    }
                    else {
                        _this.favoriteCardShow = true;
                    }
                }
            });
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.unFavorite = function () {
        debugger;
        this.isFavorite = false;
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(this.index);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    FavoriteComponent.prototype.favorite = function () {
        debugger;
        ;
        this.favoriteArray.push(this.index);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        this.isFavorite = true;
    };
    FavoriteComponent.prototype.shareDUA = function () {
        this.socialSharing.share(this.ayah + "  " + this.translation, "Example In Quran ", null);
    };
    FavoriteComponent.prototype.loadDataSlideData = function (index) {
        var _this = this;
        try {
            this.storage.get('translationStore').then(function (val) {
                try {
                    if (val != null) {
                        _this.translationStore = val;
                    }
                    _this.index = _this.duaListArray[index].index;
                    var temp = _this.favoriteArray.filter(function (dua) { return dua == _this.index; });
                    if (temp.length == 0) {
                        _this.isFavorite = false;
                    }
                    else {
                        _this.isFavorite = true;
                    }
                    if (_this.translationStore == "english") {
                        _this.translation = _this.duaListArray[index].english;
                    }
                    else if (_this.translationStore == "arabic") {
                        _this.translation = _this.duaListArray[index].arabic;
                    }
                    else if (_this.translationStore == "spanish") {
                        _this.translation = _this.duaListArray[index].spanish;
                    }
                    else if (_this.translationStore == "chainses") {
                        _this.translation = _this.duaListArray[index].chinses;
                    }
                    else if (_this.translationStore == "japanses") {
                        _this.translation = _this.duaListArray[index].japanses;
                    }
                    else if (_this.translationStore == "turkish") {
                        _this.translation = _this.duaListArray[index].turkish;
                    }
                    else if (_this.translationStore == "urdu") {
                        _this.translation = _this.duaListArray[index].urdu;
                    }
                    else if (_this.translationStore == "russian") {
                        _this.translation = _this.duaListArray[index].russian;
                    }
                }
                catch (e) {
                }
            });
            if (this.translation == undefined || this.translation == null) {
                this.translation = this.duaListArray[index].urdu;
            }
            this.ayah_no = this.duaListArray[index].aya_no;
            this.name = this.duaListArray[index].name;
            this.arabicName = this.duaListArray[index].arabic_name;
            this.chapterName = this.duaListArray[index].chapter_name;
            this.chapterNo = this.duaListArray[index].chapter_no;
            this.ayah = this.duaListArray[index].arabic;
            this.hasAudio = this.duaListArray[index].hasAudio;
            //this.duaIndex = duaListArray this.duaData[index].aya[0].index;
            this.bismillAllah = this.duaListArray[index].bismial;
            this.filename = this.duaListArray[index].mp3_file_path;
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.playDua = function () {
        var _this = this;
        if (this.isPlay) {
            this.file.pause();
            this.file.release();
        }
        else {
            this.file = this.media.create('assets/mp3/' + this.filename);
            // to listen to plugin events:
            this.file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
            this.file.onSuccess.subscribe(function () { console.log('Action is successful'); _this.isPlay = false; });
            this.file.onError.subscribe(function (error) { console.log('Error!', error); _this.isPlay = false; });
            // play the file
            this.file.play();
        }
        this.isPlay = !this.isPlay;
    };
    FavoriteComponent.prototype.stopDua = function (fileName) {
        this.isPlay = false;
        try {
            this.file.pause();
        }
        catch (e) {
        }
    };
    FavoriteComponent.prototype.onSuccess = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    FavoriteComponent.prototype.onError = function (data) {
        console.log(data);
        this.isPlay = !this.isPlay;
    };
    return FavoriteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], FavoriteComponent.prototype, "slides", void 0);
FavoriteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'favorite',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/favorite/favorite.html"*/'\n<ion-header >\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title> Favorite Example </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n    <ion-toolbar >\n        <ion-buttons start  (tap)="shareDUA()" *ngIf="name!=\'No Favorite Duas\'">\n            <button ion-button icon-only >\n                <ion-icon name="share"></ion-icon>\n              \n            </button>\n          </ion-buttons>  \n        <ion-title > </ion-title>\n        <ion-buttons end (tap)="playDua()" *ngIf="name!=\'No Favorite Duas\' && !isPlay && hasAudio">\n          <button ion-button icon-only >\n            <ion-icon name="play"></ion-icon>\n          </button>\n        </ion-buttons>\n       <ion-buttons end (tap)="stopDua()" *ngIf="isPlay">\n            <button ion-button icon-only >\n              <ion-icon name="pause"></ion-icon>\n            </button>\n          </ion-buttons>\n        \n          <ion-buttons end *ngIf="isFavorite" (tap)="unFavorite()" >\n            <button ion-button icon-only >\n               \n                <ion-icon name="star" *ngIf="isFavorite"></ion-icon>\n            </button>\n          </ion-buttons> \n          <ion-buttons end *ngIf="name!=\'No Favorite Duas\' && !isFavorite" (tap)="favorite()">\n              <button ion-button icon-only >\n                  <ion-icon name="star-outline"></ion-icon>\n                \n              </button>\n            </ion-buttons>  \n      </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="padding: 0px; background-color:burlywood" >\n\n  \n  \n  <ion-card *ngIf="favoriteCardShow">\n  \n   \n     <!-- <button ion-button color="secondary" round  (click)="playDua()">Light</button> -->\n   \n  \n  <!--  <ion-card-content style="font-size: larger; font-weight: 900;">\n       \n            <ion-item style="font-size: larger; font-weight: 900;">\n            -->\n           \n            <ion-card-content [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                \n                     <ion-item [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n\n            \n                {{name}}\n               \n              <div  clear item-end> {{arabicName}}</div>\n            </ion-item>\n         \n       \n    </ion-card-content>\n  \n  \n  </ion-card>\n  <ion-slides pager  (ionSlideDidChange)="slideChanged()">\n      \n      <ion-slide *ngFor="let item of  duaListArray; let i = index">\n          <div style="height:100%;overflow: scroll ">\n               \n                  <ion-card >\n                     <!-- <ion-item style="font-size: larger; font-weight: 900;">-->\n                          <ion-item [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                          \n                          Chapter {{chapterName}} ({{chapterNo}}) \n                         \n                        <div  clear item-end>   Verse no:  {{ayah_no}}</div>\n                      </ion-item>\n                    \n                    <ion-card-content>\n                     <p [style.font-size]="sizeStore"> \n                    <!--  <p style= "font-size: xx-large"> -->\n                          {{bismillAllah}}\n                          <br/>\n                          <br/>\n                          {{ayah}}\n                      <br/>\n                      <br/>\n                      <br/>\n                          {{translation}}\n                      </p>\n                    </ion-card-content>\n          \n          \n          \n                    </ion-card>\n                  \n                  </div>\n          \n          \n          \n              </ion-slide>\n      \n      </ion-slides>\n  </ion-content>\n  \n  <!--\n  <ion-footer>\n    <ion-toolbar>\n  \n  \n  <ion-title  >\n    <button ion-button >\n    <ion-icon name="play" (click)="playDua()" *ngIf="!isPlay" ></ion-icon>\n    <ion-icon name="pause" (click)="stopDua()" *ngIf="isPlay"></ion-icon>\n  </button>\n  </ion-title>\n  \n    </ion-toolbar>\n  </ion-footer>\n  -->'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/favorite/favorite.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */]])
], FavoriteComponent);

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dua_service_dua_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_dua_constant_dua_constant__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__example_detail_example_detail__ = __webpack_require__(338);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ExampleListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ExampleListComponent = (function () {
    function ExampleListComponent(navCtrl, duaServiceProvider, storage, plt, duaConstantProvider, admobFree) {
        this.navCtrl = navCtrl;
        this.duaServiceProvider = duaServiceProvider;
        this.storage = storage;
        this.plt = plt;
        this.duaConstantProvider = duaConstantProvider;
        this.admobFree = admobFree;
        this.dataArray = [];
        this.loadDua();
    }
    ExampleListComponent.prototype.itemTapped = function (evnet, item, i) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__example_detail_example_detail__["a" /* ExampleDetailComponent */], {
            item: this.dataArray,
            index: i,
        });
    };
    ExampleListComponent.prototype.loadDua = function () {
        //check for local storage
        //this.storage.set('quranExample', null);
        //this.duaServiceProvider.getExampleList()  
        //.subscribe(data => {
        var _this = this;
        //  console.log(data);
        //},
        //(err) => {console.log(err);
        // }
        // );
        //this.storage.set('quranExample', null);
        this.storage.get('quranExample').then(function (val) {
            if (val != null) {
                _this.dataArray = val;
            }
            else {
                //this.duaServiceProvider.getExampleList()
                _this.duaServiceProvider.getQuranExample()
                    .subscribe(function (data) {
                    //this.dataArray = data[0].example;
                    //this.version = data[0].version;
                    //console.log(this.dataArray);
                    //this.storage.set('quranExample', this.dataArray);
                    //this.storage.set('version', data[0].version);
                    _this.dataArray = data.Quran.example;
                    _this.version = data.Quran.version;
                    console.log(_this.dataArray);
                    _this.storage.set('quranExample', _this.dataArray);
                    _this.storage.set('version', data.version);
                    debugger;
                }, function (err) {
                    console.log(err);
                });
            }
        });
        this.storage.get('version').then(function (val) {
            if (val != null) {
                _this.version = val;
                //this.duaServiceProvider.getExampleList()
                _this.duaServiceProvider.getQuranExample()
                    .subscribe(function (data) {
                    /*  if (this.version != data[0].version){
                        this.dataArray = data[0].example;
                        this.version =  data[0].version;
                        console.log(this.dataArray);
                        this.storage.set('quranExample', this.dataArray);
                        this.storage.set('version', data[0].version);
                        debugger;
                      }*/
                    if (_this.version != data.Quran.version) {
                        _this.dataArray = data.Quran.example;
                        _this.version = data.Quran.version;
                        console.log(_this.dataArray);
                        _this.storage.set('quranExample', _this.dataArray);
                        _this.storage.set('version', data.Quran.version);
                        debugger;
                    }
                }, function (err) {
                    console.log(err);
                });
            }
        });
        if (this.plt.is('iphone')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else if (this.plt.is('ipad')) {
            // This will only print when on iOS
            console.log('I am an ipad device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('tablet')) {
            // This will only print when on iOS
            console.log('I am an tablet device!');
            this.duaConstantProvider.device = "large";
            this.platform = "large";
        }
        else if (this.plt.is('mobile')) {
            // This will only print when on iOS
            console.log('I am an mobile device!');
            this.duaConstantProvider.device = "small";
            this.platform = "small";
        }
        else {
            console.log('I am an browser device!');
        }
    };
    return ExampleListComponent;
}());
ExampleListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'example-list',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/example-list/example-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu" ></ion-icon>\n    </button>\n    <ion-title>Example In Quran </ion-title>\n\n    <ion-buttons end>\n\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n</ion-header>\n\n            <ion-content padding style="padding: 0px; background-color:burlywood" >\n                <ion-card  style="background-color: #64B5F6; text-align: center;" *ngIf="dataArray.length == 0">\n                    \n                    <ion-spinner icon="spiral"></ion-spinner>\n                    \n                <ion-card-content   [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n               \n                 </ion-card-content>\n                    \n                        </ion-card>\n\n                     <!--   <ion-card>\n                            \n                              \n                            \n                              <ion-card-content>\n                               <div [ngClass]="platform==\'small\'? \'list-header-small-font\' : \'list-header-large-font\'"> Chapter No/ Verse No\n                               </div>\n                              </ion-card-content>\n                            \n                            </ion-card>\n                          -->\n              <ion-grid >\n                            \n                  <ion-row>\n                    <ion-col *ngFor="let item of dataArray; let i = index" col-6>\n                      <ion-card  (click)="itemTapped($event, item, i)" (tab)="itemTapped($event, item, i)">\n                          <ion-item [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n                              \n                            Ch:{{item.chapter_no}}\n                                 \n                                <div   clear item-end> Vr:{{item.aya_no}}</div>\n                              </ion-item>\n                        <ion-card-content>\n                          <!-- Add card content here! -->\n                          <div style="margin-top:10px" [ngClass]="platform==\'small\'? \'list-small-font\' : \'list-large-font\'">\n                         {{item.short_title}}\n                        </div>\n                        </ion-card-content>\n                      </ion-card>\n                    </ion-col>\n                  </ion-row>\n                \n              </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/example-list/example-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_admob_free__["a" /* AdMobFree */]])
], ExampleListComponent);

//# sourceMappingURL=example-list.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExampleDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_dua_service_dua_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_dua_constant_dua_constant__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ExampleDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ExampleDetailComponent = (function () {
    function ExampleDetailComponent(toast, duaServiceProvider, nativeAudio, media, navParams, actionSheetCtrl, storage, socialSharing, duaConstantProvider) {
        this.toast = toast;
        this.duaServiceProvider = duaServiceProvider;
        this.nativeAudio = nativeAudio;
        this.media = media;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.duaConstantProvider = duaConstantProvider;
        this.isPlay = false;
        this.sizeStore = "normal";
        this.translationStore = "english";
        this.currentIndex = 0;
        this.favoriteArray = [];
        this.favoriteArrayStore = [];
        this.favoriteDUAArray = [];
        this.hasAudio = false;
        this.title = "";
        this.items = this.navParams.get('item');
        this.index = this.navParams.get('index');
        console.log(this.items);
        //this.data = this.item.dua;
        debugger;
        this.loadData(this.index);
        //this.slides.slideTo(this.index, 500);
        //this.goToSlide();
    }
    ExampleDetailComponent.prototype.goToSlide = function () {
        this.slides.slideTo(this.index - 1, 500);
        //this.index = this.currentIndex;
    };
    ExampleDetailComponent.prototype.slideChanged = function () {
        this.isFavorite = false;
        this.currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', this.currentIndex);
        //this.index = this.currentIndex;
        this.loadData(this.currentIndex);
        this.isPlay = false;
    };
    ExampleDetailComponent.prototype.loadData = function (index) {
        var _this = this;
        try {
            this.platform = this.duaConstantProvider.device;
            this.storage.get('favoriteArrayStore').then(function (val) {
                if (val != null) {
                    _this.favoriteArray = val;
                }
            });
            this.storage.get('sizeStore').then(function (val) {
                if (val != null) {
                    _this.sizeStore = val;
                }
            });
            this.storage.get('translationStore').then(function (val) {
                try {
                    var temp = _this.favoriteArray.filter(function (dua) { return dua == _this.index; });
                    if (temp.length == 0) {
                        _this.isFavorite = false;
                    }
                    else {
                        _this.isFavorite = true;
                    }
                    if (val != null) {
                        _this.translationStore = val;
                        if (_this.translationStore == "english") {
                            _this.translation = _this.items[index].english;
                        }
                        else if (_this.translationStore == "arabic") {
                            _this.translation = _this.items[index].arabic;
                        }
                        else if (_this.translationStore == "spanish") {
                            _this.translation = _this.items[index].spanish;
                        }
                        else if (_this.translationStore == "chainses") {
                            _this.translation = _this.items[index].chinses;
                        }
                        else if (_this.translationStore == "japanses") {
                            _this.translation = _this.items[index].japanses;
                        }
                        else if (_this.translationStore == "turkish") {
                            _this.translation = _this.items[index].turkish;
                        }
                        else if (_this.translationStore == "urdu") {
                            _this.translation = _this.items[index].urdu;
                        }
                        else if (_this.translationStore == "russian") {
                            _this.translation = _this.items[index].russian;
                        }
                    }
                    else {
                        _this.translation = _this.items[index].urdu;
                    }
                }
                catch (e) {
                }
            });
            if (this.translationStore == undefined || this.translationStore == null) {
                this.translation = this.items[index].english;
            }
            this.ayah_no = this.items[index].aya_no;
            this.name = this.items.name;
            this.arabicName = this.items.arabic_name;
            this.chapterName = this.items[index].chapter_name;
            this.chapterNo = this.items[index].chapter_no;
            this.ayah = this.items[index].arabic;
            this.index = this.items[index].index;
            this.audioFilePath = this.items[index].mp3_file_path;
            this.hasAudio = this.items[index].hasAudio;
            this.title = this.items[index].short_title;
            var t_1 = this;
            var i = this.index;
            this.bismillAllah = this.items[index].bismial;
            this.filename = this.items[index].mp3_file_path;
            setTimeout(function () {
                t_1.slides.slideTo(t_1.index - 1, 500);
                t_1.index = t_1.currentIndex;
            }, 500);
        }
        catch (e) {
            console.log(e);
        }
    };
    ExampleDetailComponent.prototype.unFavorite = function () {
        debugger;
        this.isFavorite = false;
        //this.favoriteArray.slice(this.duaIndex);
        var i = this.favoriteArray.indexOf(this.index + 1);
        //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
        if (i != -1) {
            this.favoriteArray.splice(i, 1);
        }
        this.storage.set('favoriteArrayStore', this.favoriteArray);
    };
    ExampleDetailComponent.prototype.favorite = function () {
        debugger;
        ;
        this.favoriteArray.push(this.index + 1);
        this.storage.set('favoriteArrayStore', this.favoriteArray);
        this.isFavorite = true;
    };
    ExampleDetailComponent.prototype.shareDUA = function () {
        this.socialSharing.share(this.ayah + "  " + this.translation, "Example in Quran ", null);
    };
    ExampleDetailComponent.prototype.playDua = function () {
        var _this = this;
        if (this.isPlay) {
            this.isPlay = false;
            this.file.pause();
            this.file.release();
        }
        else {
            this.isPlay = true;
            this.file = this.media.create(this.audioFilePath);
            // to listen to plugin events:
            this.file.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
            this.file.onSuccess.subscribe(function () {
                console.log('Action is successful');
                _this.isPlay = true;
            });
            this.file.onError.subscribe(function (error) {
                console.log('Error!', error);
                _this.toast.show("Network not available", '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                    _this.isPlay = false;
                });
            });
            // play the file
            this.file.play();
        }
        // this.isPlay = !this.isPlay;
    };
    ExampleDetailComponent.prototype.stopDua = function (fileName) {
        this.isPlay = false;
        try {
            this.file.pause();
        }
        catch (e) {
        }
    };
    return ExampleDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
], ExampleDetailComponent.prototype, "slides", void 0);
ExampleDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'example-detail',template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/components/example-detail/example-detail.html"*/'<!-- Generated template for the ExampleDetailComponent component -->\n<div>\n  {{text}}\n</div>\n<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu" ></ion-icon>\n      </button>\n      <ion-title>Example {{currentIndex+1}} </ion-title>\n  \n      <ion-buttons end>\n  \n  \n      </ion-buttons>\n  \n    </ion-navbar>\n    <ion-toolbar  >\n        <ion-buttons start  (tap)="shareDUA()">\n            <button ion-button icon-only >\n                <ion-icon name="share"></ion-icon>\n              \n            </button>\n          </ion-buttons>  \n        <ion-title>{{name}} </ion-title>\n        <ion-buttons end (tap)="playDua()" *ngIf="!isPlay && hasAudio">\n          <button ion-button icon-only >\n            <ion-icon name="play"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-buttons end (tap)="stopDua()" *ngIf="isPlay">\n            <button ion-button icon-only >\n              <ion-icon name="pause"></ion-icon>\n            </button>\n          </ion-buttons>\n        \n          <ion-buttons end *ngIf="isFavorite" (tap)="unFavorite()" >\n              <button ion-button icon-only >\n                 \n                  <ion-icon name="star" *ngIf="isFavorite" (click)="favorite()"></ion-icon>\n              </button>\n            </ion-buttons> \n            <ion-buttons end *ngIf="!isFavorite" (tap)="favorite()">\n                <button ion-button icon-only >\n                    <ion-icon name="star-outline"></ion-icon>\n                  \n                </button>\n              </ion-buttons>  \n      </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding style="padding: 0px; background-color:burlywood" >\n  \n  <ion-card>\n  \n   \n     <!-- <button ion-button color="secondary" round  (click)="playDua()">Light</button> -->\n   \n  \n   <!-- <ion-card-content style="font-size: larger; font-weight: 900;">\n       \n            <ion-item style="font-size: larger; font-weight: 900;">\n            -->\n            <!--\n            <ion-card-content [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n                \n                     <ion-item [ngClass]="platform==\'small\'? \'small-font\' : \'large-font\'">\n            \n                {{name}}\n               \n              <div  clear item-end> {{arabicName}}</div>\n            </ion-item>\n         \n       \n    </ion-card-content>\n  -->\n  \n  </ion-card>\n    <ion-slides  (ionSlideDidChange)="slideChanged()" pager>\n      \n     <ion-slide *ngFor="let item of  items; let i = index">\n        <div style="height:100%;overflow: scroll ">\n          <ion-card>\n              <!--<ion-item style="font-size: larger; font-weight: 900;">\n              -->\n              <ion-item [ngClass]="platform==\'small\'? \'detail-small-font\' : \'detail-large-font\'">\n              \n                  Chapter {{chapterName}} ({{chapterNo}}) \n                 \n                <div  clear item-end>   Verse no:  {{ayah_no}}</div>\n              </ion-item>\n            \n            <ion-card-content>\n             <p [style.font-size]="sizeStore"> \n            <!--  <p style= "font-size: xx-large"> -->\n                  {{bismillAllah}}\n                  <br/>\n                  <br/>\n                  {{ayah}}\n              <br/>\n              <br/>\n              <br/>\n                  {{translation}}\n              </p>\n            </ion-card-content>\n  \n  \n  \n            </ion-card>\n          </div>\n  \n      </ion-slide>\n     \n    </ion-slides>\n  </ion-content>'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/components/example-detail/example-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_7__providers_dua_service_dua_service__["a" /* DuaServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_audio__["a" /* NativeAudio */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_8__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */]])
], ExampleDetailComponent);

//# sourceMappingURL=example-detail.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(344);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_side_menu_side_menu__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_setting_setting__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_about__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_example_list_example_list__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_example_detail_example_detail__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_dua_constant_dua_constant__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_dua_service_dua_service__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var firebaseConfig = {
    apiKey: "AIzaSyCLVKNpSZS_UOyLawYSdCfg_ofQ7C9HCrM",
    authDomain: "example-in-quran.firebaseapp.com",
    databaseURL: "https://example-in-quran.firebaseio.com",
    projectId: "example-in-quran",
    storageBucket: "example-in-quran.appspot.com",
    messagingSenderId: "628118557621"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__["a" /* FavoriteComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_example_list_example_list__["a" /* ExampleListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_example_detail_example_detail__["a" /* ExampleDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_24_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__components_side_menu_side_menu__["a" /* SideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_setting_setting__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_about_about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_favorite_favorite__["a" /* FavoriteComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_example_list_example_list__["a" /* ExampleListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_example_detail_example_detail__["a" /* ExampleDetailComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_audio__["a" /* NativeAudio */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_toast__["a" /* Toast */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__providers_dua_constant_dua_constant__["a" /* DuaConstantProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_dua_service_dua_service__["a" /* DuaServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/fkhan/Desktop/ExampleInQuran/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fkhan/Desktop/ExampleInQuran/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuaServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DuaServiceProvider = (function () {
    function DuaServiceProvider(http, afd) {
        this.http = http;
        this.afd = afd;
    }
    DuaServiceProvider.prototype.getExampleList = function () {
        return this.afd.list('app_data');
    };
    DuaServiceProvider.prototype.getQuranExample = function () {
        return this.http.get("assets/json/quranExample.json")
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return DuaServiceProvider;
}());
DuaServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */]])
], DuaServiceProvider);

//# sourceMappingURL=dua-service.js.map

/***/ })

},[339]);
//# sourceMappingURL=main.js.map