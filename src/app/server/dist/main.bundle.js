webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/albums/albums.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n\tfont-family: Roboto; /* Chrome 10+, Saf5.1+ *//*  FF3.6+*/ /* IE10 */ /* Opera 11.10+ */\r\n  background:         linear-gradient(90deg, #2BC0E4 10%, #EAECC6 90%); /* W3C */\r\n} \r\n\r\na {\r\n    text-decoration: none ;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\nh1 {\r\n\tbackground: #2980b9;\r\n\tcolor: white;\r\n\tmargin: 0;\r\n\tpadding: 10px 20px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 24px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.fa-music {\r\n\tfloat: right;\r\n}\r\n\r\n\r\n\r\n\r\nli {\r\n\tbackground: #fff;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tcolor: #666;\r\n}\r\n\r\nli:nth-child(2n){\r\n\tbackground: #f7f7f7;\r\n}\r\n\r\nspan {\r\n\tbackground: #e74c3c;\r\n\theight: 40px;\r\n\tmargin-right: 20px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\twidth: 0;\r\n\tdisplay: inline-block;\r\n\ttransition: 0.2s linear;\r\n\topacity: 0;\r\n}\r\n\r\nli:hover span {\r\n\twidth: 40px;\r\n\topacity: 1.0;\r\n}\r\n\r\ninput {\r\n\tfont-size: 18px;\r\n\tcolor: #2980b9;\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 100%;\r\n\tpadding: 13px 13px 13px 20px;\r\n\tbox-sizing: border-box;\r\n\tborder: 3px solid rgba(0,0,0,0);\r\n}\r\n\r\ninput:focus{\r\n\tbackground: #fff;\r\n\tborder: 3px solid #2980b9;\r\n\toutline: none;\r\n}\r\n\r\n#container {\r\n\twidth: 500px;\r\n\tmargin: 100px auto;\r\n\tbackground: #f7f7f7;\r\n\tbox-shadow: 0 0 3px rgba(0,0,0, 0.1);\r\n}\r\n\r\n.completed {\r\n\tcolor: gray;\r\n\ttext-decoration: line-through;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/albums/albums.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css'>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css\">\n</head>\n\n<div id=\"container\">\n  <h1>Albums <i class=\"fa fa-music\"></i></h1>\n  <ul *ngFor=\"let album of albums; let i = index\">\n    <li>\n    <a href=\"#\"><span (click)=\"deleteAlbum(i)\">\n    <i class=\"fa fa-trash\"></i></span></a>\n    <a\n    [routerLink]= \"[ album.name ]\" \n    (click)=\"testAPI(album.name)\" > {{ album.name }}</a></li> \n  </ul>\n  <input \n    type=\"text\" \n    placeholder=\"Add New Album\" \n    #albumInput>\n    <button class=\"btn btn-primary btn-block text-center\" \n    (click)=\"addAlbum(albumInput.value)\">Add Album</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/albums/albums.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlbumsComponent = (function () {
    function AlbumsComponent(songsService, router) {
        this.songsService = songsService;
        this.router = router;
        this.albums = [];
    }
    ;
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albums = this.songsService.albums;
        this.subscription = this.songsService.albumsChanged
            .subscribe(function (albums) {
            _this.albums = albums;
        });
        console.log(this.albums);
    };
    AlbumsComponent.prototype.albumslog = function () {
        console.log(this.albums);
    };
    // albumSongs(){
    // 	this.router.navigate([])
    // }
    AlbumsComponent.prototype.deleteAlbum = function (indexOfAlbum) {
        var _this = this;
        console.log(indexOfAlbum);
        this.songsService.deleteAlbum(indexOfAlbum);
        this.subscription = this.songsService.albumsChanged
            .subscribe(function (albums) {
            _this.albums = albums;
        });
        // this.deleteIcon.nativeElement.parentElement.fadeOut(this);
        // this.deleteIcon.nativeElement.remove();
    };
    ;
    AlbumsComponent.prototype.addAlbum = function (albumName) {
        this.songsService.newAlbum(albumName);
        console.log(this.songsService.albums);
    };
    AlbumsComponent.prototype.testAPI = function (albumName) {
        this.songsService.getAlbum(albumName);
    };
    return AlbumsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('albumInput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], AlbumsComponent.prototype, "albumInput", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deleteIcon'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], AlbumsComponent.prototype, "deleteIcon", void 0);
AlbumsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-albums',
        template: __webpack_require__("../../../../../src/app/albums/albums.component.html"),
        styles: [__webpack_require__("../../../../../src/app/albums/albums.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__songs_service__["a" /* SongsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AlbumsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=albums.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n\tbackground-color: blue;\r\n}\r\n.bodyColor {\r\n\tbackground-color: red;\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- This is where the routes will load -->\n  <router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(songsService) {
        this.songsService = songsService;
        this.albums = [];
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        // this.songsService.init()	
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__songs_service__["a" /* SongsService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__songs_songs_component__ = __webpack_require__("../../../../../src/app/songs/songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__albums_albums_component__ = __webpack_require__("../../../../../src/app/albums/albums.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__albums_albums_component__["a" /* AlbumsComponent */] },
    { path: ':album', component: __WEBPACK_IMPORTED_MODULE_4__songs_songs_component__["a" /* SongsComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__songs_songs_component__["a" /* SongsComponent */],
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__albums_albums_component__["a" /* AlbumsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__songs_service__["a" /* SongsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/songs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongsService = (function () {
    function SongsService(http) {
        this.http = http;
        this.albumsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.songsChanged = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        // Arr with all albums
        this.testalbums = [];
        this.allTracks = [];
        this.albums = [];
        this.newAlbum("sams town");
        this.newAlbum("asi en el cielo");
        this.newAlbum("enema of the");
    }
    SongsService.prototype.getAlbums = function () {
        return this.albums.slice();
    };
    SongsService.prototype.getAlbum = function (albumName) {
        var albumSelected = this.albums.filter(function (obj) {
            return obj.name == albumName;
        });
        // console.log(albumName);
        // console.log(albumSelected);
        // console.log(albumSelected[0]["name"]);
        // console.log(albumSelected[0]["songs"]);
        this.localAlbum = albumSelected[0];
        console.log(this.localAlbum);
        this.songsChanged.next(this.localAlbum);
        return albumSelected[0];
    };
    SongsService.prototype.deleteAlbum = function (indexOfAlbum) {
        console.log(indexOfAlbum);
        this.albums.splice(indexOfAlbum, 1);
        this.albumsChanged.next(this.albums.slice());
    };
    // albumSongs(albumID).sub( song => {console.log(song)}) returns arr of songs
    SongsService.prototype.albumSongs = function (albumID) {
        var _this = this;
        return this.http.
            get('http://api.musicgraph.com/api/v2/album/' + albumID + '/tracks?api_key=7fcb5ecd307982d5604de4e73ccdec95&limit=30')
            .map(function (res) {
            var songData = res.json();
            // func to get all tracks
            var tracks = songData.data.map(function (a) { return a.title; });
            // Function to filter repeated songs
            var uTracks = tracks.filter(function (elem, index, self) {
                return index == self.indexOf(elem);
            });
            return _this.allTracks = uTracks;
        });
    };
    // .subscribe(album => {console.log(album)}) returns []
    SongsService.prototype.newAlbum = function (name) {
        var _this = this;
        name = name.replace(/ /g, '+');
        var albumID = '';
        this.http.
            get('http://api.musicgraph.com/api/v2/album/suggest?api_key=7fcb5ecd307982d5604de4e73ccdec95&limit=2&prefix='
            + name)
            .subscribe(function (res) {
            var rawData = res.json();
            // console.log(rawData);
            var albumName = rawData.data[0].title;
            albumID = rawData.data[0].id;
            _this.albumSongs(albumID).subscribe(function (songs) {
                _this.newSongs = songs;
                console.log("And this are the songs in newAlbum = " + _this.newSongs);
                _this.albumData = {
                    name: albumName,
                    songs: _this.newSongs
                };
                _this.albums.push(_this.albumData);
                _this.albumsChanged.next(_this.albums.slice());
            });
        });
        this.albumsChanged.next(this.albums.slice());
    };
    SongsService.prototype.newSong = function (song, albumName) {
        console.log(this.albums[albumName]);
        // function findAlbum(albumName){
        // 	return 
        // }
        // this.albums.find()
        // var albumSelected = this.albums.filter(function( obj ) {
        //      return obj.name == albumName ;
        //    });
    };
    return SongsService;
}());
SongsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], SongsService);

var _a;
//# sourceMappingURL=songs.service.js.map

/***/ }),

/***/ "../../../../../src/app/songs/songs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n\tfont-family: Roboto; /* Chrome 10+, Saf5.1+ *//*  FF3.6+*/ /* IE10 */ /* Opera 11.10+ */\r\n  background:         linear-gradient(90deg, #2BC0E4 10%, #EAECC6 90%); /* W3C */\r\n} \r\n\r\na {\r\n    text-decoration: none ;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\n\r\nh1 {\r\n\tbackground: #2980b9;\r\n\tcolor: white;\r\n\tmargin: 0;\r\n\tpadding: 10px 20px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 24px;\r\n\tfont-weight: normal;\r\n}\r\n\r\n.fa-angle-double-left{\r\n\tcolor: white;\r\n}\r\n\r\n.fa-music {\r\n\tfloat: right;\r\n}\r\n\r\n\r\n\r\n\r\nli {\r\n\tbackground: #fff;\r\n\theight: 40px;\r\n\tline-height: 40px;\r\n\tcolor: #666;\r\n}\r\n\r\nli:nth-child(2n){\r\n\tbackground: #f7f7f7;\r\n}\r\n\r\nspan {\r\n\tbackground: #e74c3c;\r\n\theight: 40px;\r\n\tmargin-right: 20px;\r\n\ttext-align: center;\r\n\tcolor: white;\r\n\twidth: 0;\r\n\tdisplay: inline-block;\r\n\ttransition: 0.2s linear;\r\n\topacity: 0;\r\n}\r\n\r\nli:hover span {\r\n\twidth: 40px;\r\n\topacity: 1.0;\r\n}\r\n\r\ninput {\r\n\tfont-size: 18px;\r\n\tcolor: #2980b9;\r\n\tbackground-color: #f7f7f7;\r\n\twidth: 100%;\r\n\tpadding: 13px 13px 13px 20px;\r\n\tbox-sizing: border-box;\r\n\tborder: 3px solid rgba(0,0,0,0);\r\n}\r\n\r\ninput:focus{\r\n\tbackground: #fff;\r\n\tborder: 3px solid #2980b9;\r\n\toutline: none;\r\n}\r\n\r\n#container {\r\n\twidth: 500px;\r\n\tmargin: 100px auto;\r\n\tbackground: #f7f7f7;\r\n\tbox-shadow: 0 0 3px rgba(0,0,0, 0.1);\r\n}\r\n\r\n.completed {\r\n\tcolor: gray;\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.clickable {\r\n\tcursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/songs/songs.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\n  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,500' rel='stylesheet' type='text/css'>\n<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.css\">\n</head>\n\n<div id=\"container\"  >\n  \n  <h1 >\n   <a routerLink=\"\"> <i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></a>\n   {{ this.album.name }}\n   \n   <i class=\"fa fa-music\"></i></h1>\n  <ul *ngFor=\"let song of this.album.songs; let i = index\">\n    <li>\n    <span (click)=\"deleteSong(i)\" class=\"clickable\">\n    <i class=\"fa fa-trash\"></i></span>\n     {{ song }}\n  </ul>\n  <input \n    type=\"text\" \n    placeholder=\"Add new song\" \n    #songInput>\n    <button class=\"btn btn-primary btn-block text-center\" (click)=\"addSong(songInput.value)\">Add song!</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/songs/songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__songs_service__ = __webpack_require__("../../../../../src/app/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongsComponent = (function () {
    function SongsComponent(songsService, router, route) {
        this.songsService = songsService;
        this.router = router;
        this.route = route;
    }
    ;
    SongsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var albumName = this.route.snapshot.params['album'];
        // this.albums = this.songsService.albums;
        //  this.subscription = this.songsService.albumsChanged
        //  .subscribe(
        //    (albums:{name: string, songs:Array<string>}[]) => {
        //      this.albums = albums;
        //      console.log(albumName);
        this.album = this.songsService.getAlbum(albumName);
        console.log(this.album);
        this.subscription = this.songsService.songsChanged.
            subscribe(function (album) {
            _this.album = album;
            _this.songs = _this.album.songs;
            console.log(_this.album);
            console.log(_this.album.name);
            console.log(_this.album.songs);
        });
    };
    ;
    SongsComponent.prototype.getAlbumName = function (albumName, array) {
        array.filter(function (obj) {
            obj.name == albumName;
        })[0]["name"];
    };
    SongsComponent.prototype.getAlbumSongs = function (albumName, array) {
        return array.filter(function (obj) {
            return obj.name == albumName;
        })[0]["songs"];
        ;
    };
    SongsComponent.prototype.addSong = function (newSong) {
        var name = this.album.name;
        this.songsService.albums.filter(function (obj) {
            return obj.name == name;
        })[0]["songs"].push(newSong);
    };
    SongsComponent.prototype.deleteSong = function (songIndex) {
        var name = this.album.name;
        this.songsService.albums.filter(function (obj) {
            return obj.name == name;
        })[0]["songs"].splice(songIndex, 1);
    };
    return SongsComponent;
}());
SongsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-songs',
        template: __webpack_require__("../../../../../src/app/songs/songs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/songs/songs.component.css")],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__songs_service__["a" /* SongsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__songs_service__["a" /* SongsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], SongsComponent);

var _a, _b, _c;
//# sourceMappingURL=songs.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map