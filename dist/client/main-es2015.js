(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"width: 100%; position:absolute; text-align:center; z-index: -2;\">\n    <div class=\"noteDiv\">\n    </div>\n</div>\n\n<div style=\"text-align:center;\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<ng-container *ngIf = \"gameStatus=='home'; then home;\"></ng-container>\n<ng-container *ngIf = \"gameStatus=='new'; then new;\"></ng-container>\n<ng-container *ngIf = \"gameStatus=='start'; then start;\"></ng-container>\n<ng-template #home>\n  <div >\n    <table class=\"roomTable\">\n      <tr *ngFor=\"let i of [0,1,2];\" class=\"roomtr\" (click)=\"joinRoom(i)\">\n        <td style=\"width: 85%;\">Room {{i+1}}</td>\n        <td style=\"border-left: 0px;\">{{rooms[i]}}/2</td>\n      </tr>\n    </table>\n  </div>\n</ng-template>\n\n<ng-template #new>\n  <app-new-game [socket]=\"socket\" [playerId]=\"playerId\" [currentRoom]=\"currentRoom\"></app-new-game>\n</ng-template>\n\n<ng-template #start>\n    <app-on-game [socket]=\"socket\" [playerId]=\"playerId\" [currentRoom]=\"currentRoom\"></app-on-game>\n</ng-template>\n<notifier-container></notifier-container>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/new-game/new-game.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/new-game/new-game.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n        <h1>\n          New Game\n        </h1>\n</div>\n<!-- <input type=\"text\" name=\"text\" id=\"loginInput\"> -->\n<div style=\"text-align: center; margin-top: -50px;\">\n    <div class=\"newGameTables\">\n    <table class=\"boardtable\">\n        <th colspan=\"10\">Your field</th>\n        <tr *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10];\">\n            <td class=\"boardtd\" style=\"width: 15px; height: 15px;\" *ngFor=\"let j of [0,1,2,3,4,5,6,7,8,9,10];\" (mouseover)=\"shipInAir(i, j)\"\n            (mouseleave)=\"flewAway()\" (click)=\"putShip(i, j)\" id=\"{{ 'el'+i+'_'+j }}\"><div>{{boardTable[i][j]}}</div></td>\n        </tr>\n    </table>\n    </div>\n    <div class=\"newGameTables\">\n            <table class=\"boardtable\" style=\"width: 350px; height: 350px;\">\n                <th>Ships</th>\n                <tr *ngFor=\"let i of [0,1,2,3];\">\n                    <td>  \n                        <div>\n                            <table class=\"shipTable\">\n                                <tr class=\"shipTr\" id=\"{{ 'ship'+i}}\" (click)=\"takeShip(i)\"><td id=\"ship{{i}}\" class=\"shipTd\" *ngFor=\"let j of shipsTable[i];\"></td></tr>\n                            </table> \n                        </div>\n                    </td>\n                    <td style=\"font-size: 2.1rem; font-weight: 350; \">{{ships[3-i]}}</td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\" style=\"border: 0px; text-align:left; padding-left: 0px; padding-bottom: 0px;\">\n                        <div id=\"turn_over\" class=\"controlButton\" (click)=\"turnOver()\" style=\"margin-right: 2em; margin-left: -1px;\">\n                        </div>\n                        <div id=\"eraser\" class=\"controlButton\" (click)=\"eraser()\"></div>\n                    </td>\n                </tr>\n            </table>\n    </div>\n</div>\n<!-- <ng-container *ngIf = \"isReady; then wait;\"></ng-container> -->\n<div style=\"text-align: center; width: 102%;\">\n    <!-- <div id=\"back\" class=\"back\">\n            <h2>Back</h2>\n    </div> -->\n    <div id=\"start\" class=\"start\" (click)=\"startGame()\">\n            <h2>Start</h2>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/on-game/on-game.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/on-game/on-game.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n    <ng-container *ngIf = \"gameStatus=='play'; then play;\"></ng-container>\n    <ng-container *ngIf = \"gameStatus=='wait'; then wait;\"></ng-container>\n    <ng-container *ngIf = \"gameStatus=='win'; then win;\"></ng-container>\n    <ng-container *ngIf = \"gameStatus=='lose'; then lose;\"></ng-container>\n    <ng-template #play>\n        <h1 style=\"color: rgb(19, 196, 19)\">\n            Your turn\n        </h1>\n    </ng-template>\n    <ng-template #wait>\n        <h1 style=\"color: rgb(220, 20, 20)\">\n            Opponent's move\n        </h1>\n    </ng-template>\n    <ng-template #win>\n        <h1 style=\"color: rgb(19, 196, 19)\">\n            You win!\n        </h1>\n    </ng-template>\n    <ng-template #lose>\n        <h1 style=\"color: rgb(220, 20, 20)\">\n            You lose!\n        </h1>\n    </ng-template>\n</div>\n\n<div style=\"text-align: center; margin-top: -50px;\">\n    <div class=\"newGameTables\">\n    <table class=\"boardtable\">\n        <th colspan=\"10\">Your field</th>\n        <tr *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10];\">\n            <td style=\"width: 15px; height: 15px;\" *ngFor=\"let j of [0,1,2,3,4,5,6,7,8,9,10];\" id=\"{{ 'my'+i+'_'+j }}\"><div>{{boardTable[i][j]}}</div></td>\n        </tr>\n    </table>\n    </div>\n    <div class=\"newGameTables\">\n        <table class=\"boardtable\">\n            <th colspan=\"10\">Enemy field</th>\n            <tr *ngFor=\"let i of [0,1,2,3,4,5,6,7,8,9,10];\">\n                <td class=\"pointerTd\" style=\"width: 15px; height: 15px;\" *ngFor=\"let j of [0,1,2,3,4,5,6,7,8,9,10];\" id=\"{{ 'en'+i+'_'+j }}\" (click)=\"move(i, j)\" (mouseover)=\"aimOn(i, j)\"\n                (mouseleave)=\"aimOut(i, j)\"><div>{{boardTable[i][j]}}</div></td>\n            </tr>\n        </table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table { \r\n    width: 12em;\r\n    margin: 1em auto;\r\n    border-collapse:separate; \r\n    border-spacing: 0 0.5em;\r\n    font-size: 1.7rem;\r\n    font-weight: 350; \r\n    color: #0c74eb;\r\n   }\r\n   th { \r\n    text-align: left; \r\n    padding: 5px;\r\n    \r\n   }\r\n   td { \r\n    padding: 10px; \r\n    /* background-color: #008cff; */\r\n    cursor: pointer;\r\n    border: 3px solid #0c74eb; \r\n   }\r\n   tr:hover{\r\n      background-color: #0c74eb40;\r\n   }\r\n   h1{\r\n    font-size: 3rem;\r\n    color: #0c74eb;\r\n}\r\n   .noteDiv{\r\n    background-image: url('notebook_texture2464.jpg');\r\n    /* background-color: #fff; */\r\n    width: 1300px;\r\n    height: 850px;\r\n    position: relative;\r\n    left: 50%;\r\n    margin-left: -650px;\r\n    z-index: -1;\r\n}\r\n   @media all and (max-width: 1010px) {\r\n    .noteDiv{\r\n        margin-left: -80px;\r\n        left: -80px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0dBQ2Y7R0FDQTtJQUNDLGdCQUFnQjtJQUNoQixZQUFZOztHQUViO0dBQ0E7SUFDQyxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGVBQWU7SUFDZix5QkFBeUI7R0FDMUI7R0FDQTtNQUNHLDJCQUEyQjtHQUM5QjtHQUNIO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7R0FDQTtJQUNJLGlEQUFzRDtJQUN0RCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7R0FDQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7IFxyXG4gICAgd2lkdGg6IDEyZW07XHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDAuNWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICBmb250LXdlaWdodDogMzUwOyBcclxuICAgIGNvbG9yOiAjMGM3NGViO1xyXG4gICB9XHJcbiAgIHRoIHsgXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyBcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIFxyXG4gICB9XHJcbiAgIHRkIHsgXHJcbiAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDhjZmY7ICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMGM3NGViOyBcclxuICAgfVxyXG4gICB0cjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBjNzRlYjQwO1xyXG4gICB9XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgY29sb3I6ICMwYzc0ZWI7XHJcbn1cclxuLm5vdGVEaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL25vdGVib29rX3RleHR1cmUyNDY0LmpwZyk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAqL1xyXG4gICAgd2lkdGg6IDEzMDBweDtcclxuICAgIGhlaWdodDogODUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTY1MHB4O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTAxMHB4KSB7XHJcbiAgICAubm90ZURpdntcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTgwcHg7XHJcbiAgICAgICAgbGVmdDogLTgwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");




let AppComponent = class AppComponent {
    constructor(notifier) {
        this.timeLeft = 2;
        this.title = 'Battleship';
        this.isCall = false;
        this.gameStatus = 'home';
        this.playerId = '';
        this.rooms = [];
        this.currentRoom = -1;
        this.score = 20;
        this.notifier = notifier;
    }
    ngOnInit() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()("http://localhost:8080");
    }
    ngAfterViewInit() {
        this.socket.on("callReset", () => {
            this.isCall = false;
        });
        this.socket.on("roomStatus", data => {
            this.rooms = data;
        });
        this.socket.on("newPlayer", (id, room) => {
            this.playerId = id;
            this.gameStatus = 'new';
            this.currentRoom = room;
        });
        this.socket.on("roomIsFull", () => {
            this.notifier.notify("warning", "Room is occupied!");
        });
        this.socket.on("rollCall", id => {
            if (this.playerId == '' && !this.isCall) {
                this.isCall = true;
                this.socket.emit("iAmGuest");
            }
            else if (this.playerId == id)
                this.socket.emit("iAmHere", this.playerId, this.currentRoom);
        });
        this.socket.on("startNewGame", () => {
            this.gameStatus = 'start';
        });
        this.socket.on("playerLeave", room => {
            if (this.currentRoom == room) {
                this.notifier.notify("error", "Opponent left the game!");
                // let timeLeft: number = 2;
                // let interval = setInterval(() => {
                //   if(timeLeft > 0) {
                //     timeLeft--;
                //   } else {
                //     this.gameStatus = "home";
                //     clearInterval(interval);
                //   }
                // },1000);
            }
        });
    }
    joinRoom(i) {
        this.socket.emit("joinRoom", i);
    }
};
AppComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");
/* harmony import */ var _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-game/new-game.component */ "./src/app/new-game/new-game.component.ts");
/* harmony import */ var _on_game_on_game_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./on-game/on-game.component */ "./src/app/on-game/on-game.component.ts");









const customNotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 1500,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },
        shift: {
            speed: 300,
            easing: 'ease'
        },
        overlap: 150
    }
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _new_game_new_game_component__WEBPACK_IMPORTED_MODULE_7__["NewGameComponent"],
            _on_game_on_game_component__WEBPACK_IMPORTED_MODULE_8__["OnGameComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierModule"].withConfig(customNotifierOptions)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/new-game/new-game.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-game/new-game.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-size: 3rem;\r\n    color: #0c74eb;\r\n    border-collapse: collapse; \r\n}\r\nh2{\r\n     font-size: 2.2rem;\r\n     color: #0c74eb;\r\n     border-collapse: collapse; \r\n     padding-left: 25px;\r\n     padding-right: 25px;\r\n     /* background-color: #0aff1670; */\r\n }\r\n.boardtable { \r\n    margin: 1em auto;\r\n    border-collapse:collapse; \r\n    font-size: 1.7rem;\r\n    font-weight: 350; \r\n    color: #0c74eb;\r\n   }\r\n.shipTable { \r\n        margin: 0 auto;\r\n        border-collapse:collapse; \r\n        color: #0c74eb;\r\n        cursor: pointer;\r\n   }\r\n.shipTd{\r\n        width: 5px;\r\n        height: 5px;\r\n\r\n   }\r\n.shipTr:hover{\r\n     background-color: #0c74eb70;\r\n   }\r\nth { \r\n    text-align: left; \r\n    padding: 5px;\r\n   }\r\ntd { \r\n     font-size: 0.8rem;\r\n     font-weight: 950;\r\n     padding: 10px; \r\n     border: 2.8px solid #0c74eb; \r\n   }\r\n.newGameTables{\r\n    display: inline-block;\r\n     margin: 2em;\r\n}\r\n.controlButton{\r\n     width: 80px;\r\n     height: 80px;\r\n     border: 2px solid #0c74eb;\r\n     display: inline-block;\r\n     margin-bottom: -4px;\r\n     cursor: pointer;\r\n }\r\n.controlButton:hover{\r\n     background-color: #0c74eb50;\r\n     /* background: #ff1818a1 */\r\n }\r\n#eraser{\r\n     background-image: url('icon_eraser.svg');\r\n     background-position: center;\r\n     background-repeat: no-repeat; \r\n     background-size:65% 65%;\r\n     margin-right: 2em; \r\n     margin-left: -1px;\r\n }\r\n#turn_over{\r\n     background-image: url('icon_turn_over.svg');\r\n     background-position: center;\r\n     background-repeat: no-repeat; \r\n     background-size:65% 65%;\r\n }\r\n#start:hover{\r\n     background-color: #0c74eb50;\r\n }\r\n#back{\r\n     margin-right: 2em;\r\n     cursor: pointer;\r\n     border: 2px solid #0c74eb;\r\n     display: inline-block;\r\n     margin-top: -20px;\r\n }\r\n#back:hover{\r\n     background-color: #0c74eb50;\r\n }\r\n#start{\r\n     cursor: pointer;\r\n     border: 2px solid #0c74eb;\r\n     display: inline-block;\r\n     margin-top: -20px;\r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWdhbWUvbmV3LWdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7S0FDSyxpQkFBaUI7S0FDakIsY0FBYztLQUNkLHlCQUF5QjtLQUN6QixrQkFBa0I7S0FDbEIsbUJBQW1CO0tBQ25CLGlDQUFpQztDQUNyQztBQUNDO0lBQ0UsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7R0FDZjtBQUNBO1FBQ0ssY0FBYztRQUNkLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QsZUFBZTtHQUNwQjtBQUNBO1FBQ0ssVUFBVTtRQUNWLFdBQVc7O0dBRWhCO0FBQ0E7S0FDRSwyQkFBMkI7R0FDN0I7QUFDQTtJQUNDLGdCQUFnQjtJQUNoQixZQUFZO0dBQ2I7QUFDQTtLQUNFLGlCQUFpQjtLQUNqQixnQkFBZ0I7S0FDaEIsYUFBYTtLQUNiLDJCQUEyQjtHQUM3QjtBQUNIO0lBQ0kscUJBQXFCO0tBQ3BCLFdBQVc7QUFDaEI7QUFFQTtLQUNLLFdBQVc7S0FDWCxZQUFZO0tBQ1oseUJBQXlCO0tBQ3pCLHFCQUFxQjtLQUNyQixtQkFBbUI7S0FDbkIsZUFBZTtDQUNuQjtBQUVBO0tBQ0ksMkJBQTJCO0tBQzNCLDBCQUEwQjtDQUM5QjtBQUVBO0tBQ0ksd0NBQWdEO0tBQ2hELDJCQUEyQjtLQUMzQiw0QkFBNEI7S0FDNUIsdUJBQXVCO0tBQ3ZCLGlCQUFpQjtLQUNqQixpQkFBaUI7Q0FDckI7QUFDQTtLQUNJLDJDQUFtRDtLQUNuRCwyQkFBMkI7S0FDM0IsNEJBQTRCO0tBQzVCLHVCQUF1QjtDQUMzQjtBQUVEO0tBQ0ssMkJBQTJCO0NBQy9CO0FBQ0E7S0FDSSxpQkFBaUI7S0FDakIsZUFBZTtLQUNmLHlCQUF5QjtLQUN6QixxQkFBcUI7S0FDckIsaUJBQWlCO0NBQ3JCO0FBQ0E7S0FDSSwyQkFBMkI7Q0FDL0I7QUFDQTtLQUNJLGVBQWU7S0FDZix5QkFBeUI7S0FDekIscUJBQXFCO0tBQ3JCLGlCQUFpQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL25ldy1nYW1lL25ldy1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjMGM3NGViO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbn1cclxuaDJ7XHJcbiAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgY29sb3I6ICMwYzc0ZWI7XHJcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzBhZmYxNjcwOyAqL1xyXG4gfVxyXG4gIC5ib2FyZHRhYmxlIHsgXHJcbiAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyBcclxuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDM1MDsgXHJcbiAgICBjb2xvcjogIzBjNzRlYjtcclxuICAgfVxyXG4gICAuc2hpcFRhYmxlIHsgXHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyBcclxuICAgICAgICBjb2xvcjogIzBjNzRlYjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIH1cclxuICAgLnNoaXBUZHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGhlaWdodDogNXB4O1xyXG5cclxuICAgfVxyXG4gICAuc2hpcFRyOmhvdmVye1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzc0ZWI3MDtcclxuICAgfVxyXG4gICB0aCB7IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgIH1cclxuICAgdGQgeyBcclxuICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICBmb250LXdlaWdodDogOTUwO1xyXG4gICAgIHBhZGRpbmc6IDEwcHg7IFxyXG4gICAgIGJvcmRlcjogMi44cHggc29saWQgIzBjNzRlYjsgXHJcbiAgIH1cclxuLm5ld0dhbWVUYWJsZXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgbWFyZ2luOiAyZW07XHJcbn1cclxuXHJcbi5jb250cm9sQnV0dG9ue1xyXG4gICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgIGhlaWdodDogODBweDtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMGM3NGViO1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuIH1cclxuXHJcbiAuY29udHJvbEJ1dHRvbjpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM3NGViNTA7XHJcbiAgICAgLyogYmFja2dyb3VuZDogI2ZmMTgxOGExICovXHJcbiB9XHJcblxyXG4gI2VyYXNlcntcclxuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1hZ2VzL2ljb25fZXJhc2VyLnN2Zyk7XHJcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG4gICAgIGJhY2tncm91bmQtc2l6ZTo2NSUgNjUlO1xyXG4gICAgIG1hcmdpbi1yaWdodDogMmVtOyBcclxuICAgICBtYXJnaW4tbGVmdDogLTFweDtcclxuIH1cclxuICN0dXJuX292ZXJ7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9pY29uX3R1cm5fb3Zlci5zdmcpO1xyXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcclxuICAgICBiYWNrZ3JvdW5kLXNpemU6NjUlIDY1JTtcclxuIH1cclxuXHJcbiNzdGFydDpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM3NGViNTA7XHJcbiB9XHJcbiAjYmFja3tcclxuICAgICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgYm9yZGVyOiAycHggc29saWQgIzBjNzRlYjtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiB9XHJcbiAjYmFjazpob3ZlcntcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM3NGViNTA7XHJcbiB9IFxyXG4gI3N0YXJ0e1xyXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICBib3JkZXI6IDJweCBzb2xpZCAjMGM3NGViO1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuIH1cclxuICJdfQ== */"

/***/ }),

/***/ "./src/app/new-game/new-game.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-game/new-game.component.ts ***!
  \************************************************/
/*! exports provided: NewGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGameComponent", function() { return NewGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");



let NewGameComponent = class NewGameComponent {
    constructor(notifier) {
        this.isReady = false;
        this.myBoard = new Array();
        this.shipToMove = -10;
        this.ships = [4, 3, 2, 1];
        this.isVerticalMode = false;
        this.shipsTable = [[0, 1, 2, 3], [0, 1, 2], [0, 1], [0]];
        this.boardTable = [['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']];
        this.notifier = notifier;
        for (var i = 0; i < 10; i++) {
            this.myBoard[i] = [];
            for (var j = 0; j < 10; j++) {
                this.myBoard[i][j] = 0;
            }
        }
        for (var i = 1; i < 11; i++) {
            this.boardTable[i] = [];
            for (var j = 0; j < 11; j++) {
                if (j == 0)
                    this.boardTable[i][j] = '' + i;
                else
                    this.boardTable[i][j] = '';
            }
        }
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.socket.on("waiting", () => {
            this.isReady = true;
            this.notifier.notify("info", "Waiting for the second player...");
            document.getElementById('eraser').style.cssText = "background-color: #ff181870;";
        });
    }
    takeShip(i) {
        this.shipToMove = 4 - i;
        if (this.ships[this.shipToMove - 1] == 0) {
            this.notifier.notify("warning", "No ships left!");
            this.shipToMove = -10;
            return;
        }
        let id;
        for (let j = 0; j < 4; j++) {
            id = "ship" + j;
            document.getElementById(id).style.cssText = "background-color: #0c74eb0;";
        }
        id = "ship" + i;
        document.getElementById(id).style.cssText = "background-color: #0c74eb70;";
    }
    putShip(i, j) {
        if (i != 0 && j != 0) {
            if (this.putToBorder(i - 1, j - 1)) {
                let id;
                if (this.isVerticalMode) {
                    for (let n = 0; n < this.shipToMove; n++) {
                        ///////////////
                        let k = n;
                        //////////////
                        if ((i + n) >= 11) {
                            k = 10 - (i + n);
                        }
                        id = "el" + (i + k) + "_" + j;
                        document.getElementById(id).style.cssText = "background-color: #4b4b4b95;  border: 3px solid #4d4d4d;";
                    }
                }
                else {
                    for (let n = 0; n < this.shipToMove; n++) {
                        ///////////////
                        let k = n;
                        //////////////
                        if ((j + n) >= 11) {
                            k = 10 - (j + n);
                        }
                        id = "el" + i + "_" + (j + k);
                        document.getElementById(id).style.cssText = "background-color: #4b4b4b95;  border: 3px solid #4d4d4d;";
                    }
                }
                this.ships[this.shipToMove - 1]--;
                if (this.ships[this.shipToMove - 1] == 0) {
                    id = "ship" + (4 - this.shipToMove);
                    document.getElementById(id).style.cssText = "background-color: #0c74eb0;";
                    this.shipToMove = -10;
                }
            }
        }
    }
    putToBorder(iBase, jBase) {
        let testBord = this.copyBoard(this.myBoard);
        let i = iBase;
        let j = jBase;
        if (this.isVerticalMode) {
            if (i + this.shipToMove - 1 >= 10) {
                i += 9 - (i + this.shipToMove - 1);
            }
            for (let y = i - 1; y <= i + this.shipToMove; y++) {
                if (y >= 0 && y < 10) {
                    for (let x = j - 1; x <= j + 1; x++) {
                        if (x >= 0 && x < 10) {
                            if (y >= i && y < i + this.shipToMove && x == j) {
                                if (testBord[y][x] != 0) {
                                    this.notifier.notify("warning", "Cannot be placed here!");
                                    return false;
                                }
                                testBord[y][x] = 1;
                            }
                            else
                                testBord[y][x] = 2;
                        }
                    }
                }
            }
        }
        else {
            if (j + this.shipToMove - 1 >= 10) {
                j += 9 - (j + this.shipToMove - 1);
            }
            for (let x = j - 1; x <= j + this.shipToMove; x++) {
                if (x >= 0 && x < 10) {
                    for (let y = i - 1; y <= i + 1; y++) {
                        if (y >= 0 && y < 10) {
                            if (x >= j && x < j + this.shipToMove && y == i) {
                                if (testBord[y][x] != 0) {
                                    this.notifier.notify("warning", "Cannot be placed here!");
                                    return false;
                                }
                                testBord[y][x] = 1;
                            }
                            else
                                testBord[y][x] = 2;
                        }
                    }
                }
            }
        }
        this.myBoard = this.copyBoard(testBord);
        return true;
    }
    shipInAir(i, j) {
        if (this.shipToMove != -10 && i != 0 && j != 0) {
            let id;
            if (this.isVerticalMode) {
                for (let n = 0; n < this.shipToMove; n++) {
                    let x = n;
                    if ((i + n) >= 11) {
                        x = 10 - (i + n);
                    }
                    if (this.myBoard[i + x - 1][j - 1] != 1) {
                        id = "el" + (i + x) + "_" + j;
                        document.getElementById(id).style.cssText = "background-color: #0c74eb70;";
                    }
                }
            }
            else {
                for (let n = 0; n < this.shipToMove; n++) {
                    let x = n;
                    if ((j + n) >= 11) {
                        x = 10 - (j + n);
                    }
                    if (this.myBoard[i - 1][j + x - 1] != 1) {
                        id = "el" + i + "_" + (j + x);
                        document.getElementById(id).style.cssText = "background-color: #0c74eb70;";
                    }
                }
            }
        }
    }
    flewAway() {
        if (this.shipToMove != -10) {
            for (let i = 1; i < 11; i++) {
                for (let j = 1; j < 11; j++) {
                    if (this.myBoard[i - 1][j - 1] != 1) {
                        let id = "el" + i + "_" + j;
                        document.getElementById(id).style.cssText = "background-color: #0c74eb0;";
                    }
                }
            }
        }
    }
    copyBoard(arr) {
        let newArrey = new Array();
        for (let i = 0; i < arr.length; i++) {
            newArrey[i] = [];
            for (let j = 0; j < arr[i].length; j++) {
                newArrey[i][j] = arr[i][j];
            }
        }
        return newArrey;
    }
    turnOver() {
        this.isVerticalMode = !this.isVerticalMode;
        if (this.isVerticalMode) {
            document.getElementById("turn_over").style.cssText = "background-color: #0c74eb70; margin-right: 2em; margin-left: -1px;";
        }
        else {
            document.getElementById("turn_over").style.cssText = "background-color: #0c74eb0; margin-right: 2em; margin-left: -1px;";
        }
    }
    eraser() {
        if (!this.isReady) {
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    let id;
                    id = "el" + (i + 1) + "_" + (j + 1);
                    document.getElementById(id).style.cssText = "background-color: #0c74eb0;  border: 2.8px solid #0c74eb;";
                    this.myBoard[i][j] = 0;
                }
            }
            this.ships = [4, 3, 2, 1];
            this.shipToMove = -10;
        }
        else {
        }
    }
    startGame() {
        if (!this.isReady) {
            let check = true;
            for (let i = 0; i < 4; i++) {
                if (this.ships[i] != 0) {
                    check = false;
                    break;
                }
            }
            if (check) {
                this.socket.emit("startGame", this.currentRoom, this.playerId, this.myBoard);
                document.getElementById("start").style.cssText = "background-color: #0c74eb50;";
            }
            else {
                this.notifier.notify("warning", "Some ships is unused!");
            }
        }
        else {
            this.notifier.notify("info", "Waiting for the second player...");
        }
    }
};
NewGameComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NewGameComponent.prototype, "socket", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NewGameComponent.prototype, "playerId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NewGameComponent.prototype, "currentRoom", void 0);
NewGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-game',
        template: __webpack_require__(/*! raw-loader!./new-game.component.html */ "./node_modules/raw-loader/index.js!./src/app/new-game/new-game.component.html"),
        styles: [__webpack_require__(/*! ./new-game.component.css */ "./src/app/new-game/new-game.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
], NewGameComponent);



/***/ }),

/***/ "./src/app/on-game/on-game.component.css":
/*!***********************************************!*\
  !*** ./src/app/on-game/on-game.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n    font-size: 3rem;\r\n    color: #0c74eb;\r\n    border-collapse: collapse; \r\n}\r\nh2{\r\n     font-size: 2.2rem;\r\n     color: #0c74eb;\r\n     border-collapse: collapse; \r\n     padding-left: 25px;\r\n     padding-right: 25px;\r\n\r\n     /* background-color: #1eff0040; */\r\n }\r\n.boardtable { \r\n    margin: 1em auto;\r\n    border-collapse:collapse; \r\n    font-size: 1.7rem;\r\n    font-weight: 350; \r\n    color: #0c74eb;\r\n   }\r\nth { \r\n    text-align: left; \r\n    padding: 5px;\r\n   }\r\ntd { \r\n     font-size: 0.8rem;\r\n     font-weight: 950;\r\n     padding: 10px; \r\n     border: 2.8px solid #0c74eb; \r\n   }\r\n.pointerTd{\r\n     cursor: pointer;\r\n   }\r\n.newGameTables{\r\n    display: inline-block;\r\n     margin: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb24tZ2FtZS9vbi1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0tBQ0ssaUJBQWlCO0tBQ2pCLGNBQWM7S0FDZCx5QkFBeUI7S0FDekIsa0JBQWtCO0tBQ2xCLG1CQUFtQjs7S0FFbkIsaUNBQWlDO0NBQ3JDO0FBQ0M7SUFDRSxnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztHQUNmO0FBQ0E7SUFDQyxnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0E7S0FDRSxpQkFBaUI7S0FDakIsZ0JBQWdCO0tBQ2hCLGFBQWE7S0FDYiwyQkFBMkI7R0FDN0I7QUFDQTtLQUNFLGVBQWU7R0FDakI7QUFDQTtJQUNDLHFCQUFxQjtLQUNwQixXQUFXO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvb24tZ2FtZS9vbi1nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGNvbG9yOiAjMGM3NGViO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbn1cclxuaDJ7XHJcbiAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgY29sb3I6ICMwYzc0ZWI7XHJcbiAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgXHJcbiAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcblxyXG4gICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxZWZmMDA0MDsgKi9cclxuIH1cclxuICAuYm9hcmR0YWJsZSB7IFxyXG4gICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgXHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzNTA7IFxyXG4gICAgY29sb3I6ICMwYzc0ZWI7XHJcbiAgIH1cclxuICAgdGggeyBcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICB9XHJcbiAgIHRkIHsgXHJcbiAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgZm9udC13ZWlnaHQ6IDk1MDtcclxuICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICBib3JkZXI6IDIuOHB4IHNvbGlkICMwYzc0ZWI7IFxyXG4gICB9ICBcclxuICAgLnBvaW50ZXJUZHtcclxuICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgIH1cclxuICAgLm5ld0dhbWVUYWJsZXN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgbWFyZ2luOiAyZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/on-game/on-game.component.ts":
/*!**********************************************!*\
  !*** ./src/app/on-game/on-game.component.ts ***!
  \**********************************************/
/*! exports provided: OnGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnGameComponent", function() { return OnGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm2015/angular-notifier.js");



let OnGameComponent = class OnGameComponent {
    constructor(notifier) {
        this.myBoard = new Array();
        this.myEnemyBoard = new Array();
        this.realEnemyBoard = new Array();
        this.boardTable = [['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']];
        this.isTurn = false;
        this.gameStatus = 'wait';
        //play
        this.ship = new Map();
        this.notifier = notifier;
        for (var i = 0; i < 10; i++) {
            this.myEnemyBoard[i] = [];
            for (var j = 0; j < 10; j++) {
                this.myEnemyBoard[i][j] = 0;
            }
        }
        for (var i = 1; i < 11; i++) {
            this.boardTable[i] = [];
            for (var j = 0; j < 11; j++) {
                if (j == 0)
                    this.boardTable[i][j] = '' + i;
                else
                    this.boardTable[i][j] = '';
            }
        }
    }
    ngOnInit() {
        this.notifier.notify("success", "Start!");
        this.socket.on("myBoard", data => {
            this.myBoard = data;
            this.refreshBoard(this.myBoard, "my");
        });
        this.socket.on("enemyBoard", data => {
            this.realEnemyBoard = data;
        });
        this.socket.on("isTurn", data => {
            this.isTurn = data;
            this.changeTurn();
        });
        this.socket.emit("getBoards", this.playerId, this.currentRoom);
    }
    ngAfterViewInit() {
        this.socket.on("renewBoard", board => {
            this.myBoard = board;
            this.refreshBoard(this.myBoard, "my");
        });
        this.socket.on("turn", room => {
            if (this.currentRoom == room) {
                this.isTurn = !this.isTurn;
                this.changeTurn();
            }
        });
        this.socket.on("win", (id, score) => {
            this.gameStatus = 'win';
            this.notifier.notify("success", "You win!");
        });
        this.socket.on("lose", () => {
            this.gameStatus = 'lose';
            this.notifier.notify("error", "You lose!");
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.realEnemyBoard[i][j] == 1) {
                        this.myEnemyBoard[i][j] = 1;
                        let id = "en" + (i + 1) + "_" + (j + 1);
                        document.getElementById(id).style.cssText = "background-color: #4b4b4b95;";
                    }
                }
            }
        });
    }
    changeTurn() {
        if (this.isTurn)
            this.gameStatus = 'play';
        else
            this.gameStatus = 'wait';
    }
    refreshBoard(board, name) {
        //●;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let id = name + (i + 1) + "_" + (j + 1);
                switch (board[i][j]) {
                    case (1):
                        document.getElementById(id).style.cssText = "background-color: #4b4b4b95;";
                        break;
                    case (3):
                        if (document.getElementById(id).textContent == "") {
                            document.getElementById(id).style.cssText = "font-size: 1.1rem; line-height: 0.3em; color: #0c74eb; ";
                            document.getElementById(id).innerHTML += '●';
                        }
                        break;
                    case (4):
                        document.getElementById(id).style.cssText = "background-color: #ffbb0095;";
                        break;
                    case (5):
                        document.getElementById(id).style.cssText = "background-color: #ff181895;";
                        break;
                }
            }
        }
    }
    aimOn(i, j) {
        if (i > 0 && j > 0) {
            if (this.myEnemyBoard[i - 1][j - 1] == 0) {
                let id = "en" + (i) + "_" + (j);
                document.getElementById(id).style.cssText = "background-color: #0c74eb50;";
            }
        }
    }
    aimOut(i, j) {
        if (i > 0 && j > 0) {
            if (this.myEnemyBoard[i - 1][j - 1] == 0) {
                let id = "en" + (i) + "_" + (j);
                document.getElementById(id).style.cssText = "background-color: #0c74eb0;";
            }
        }
    }
    move(iBase, jBase) {
        if (iBase > 0 && jBase > 0) {
            let i = iBase - 1;
            let j = jBase - 1;
            if (this.isTurn && this.myEnemyBoard[i][j] == 0) {
                let id = "en" + (i + 1) + "_" + (j + 1);
                if (this.realEnemyBoard[i][j] == 1) {
                    let check = this.killChack(i, j);
                    if (!check) {
                        this.realEnemyBoard[i][j] = 5;
                        this.myEnemyBoard[i][j] = 5;
                        document.getElementById(id).style.cssText = "background-color: #1eff0095;";
                    }
                    else {
                        this.realEnemyBoard[i][j] = 4;
                        this.myEnemyBoard[i][j] = 4;
                        document.getElementById(id).style.cssText = "background-color: #ffbb0095;";
                    }
                    this.socket.emit("goodShot", this.currentRoom, this.playerId, this.realEnemyBoard);
                }
                else {
                    if (this.realEnemyBoard[i][j] < 3) {
                        this.realEnemyBoard[i][j] = 3;
                        this.myEnemyBoard[i][j] = 3;
                        document.getElementById(id).style.cssText = "font-size: 1.1rem; line-height: 0.4em; color: #0c74eb; ";
                        document.getElementById(id).innerHTML += '●';
                        this.socket.emit("missShot", this.currentRoom, this.playerId, this.realEnemyBoard);
                        this.socket.emit("changeTurn", this.currentRoom);
                    }
                }
            }
        }
    }
    killChack(i, j) {
        // this.notifier.notify( "warning", "killChack" );
        let map = new Map();
        let chackBoard = new Array();
        chackBoard = this.copyBoard(this.realEnemyBoard);
        map = this.serch(map, i, j, chackBoard);
        // if(map.has(1)){
        //   var mapIter = map.keys();
        // }Array.from(rooms[room].players.values())
        if (!map.has(1)) {
            this.ship.forEach(e => {
                this.realEnemyBoard[e[1]][e[0]] = 5;
                let id = "en" + (e[1] + 1) + "_" + (e[0] + 1);
                document.getElementById(id).style.cssText = "background-color: #1eff0095;";
            });
        }
        else {
            this.ship.clear();
        }
        return map.has(1);
    }
    serch(map, i, j, arr) {
        arr[i][j] = 0;
        for (let x = j - 1; x <= j + 1; x++) {
            if (x >= 0 && x < 10)
                for (let y = i - 1; y <= i + 1; y++) {
                    if (y >= 0 && y < 10) {
                        if (arr[y][x] != 0 && arr[y][x] != 2 && arr[y][x] != 3) {
                            // if(arr[y][x]==1){
                            //   map.set(arr[y][x], 1)
                            //   return map;
                            // }
                            // else{
                            this.ship.set(x + "_" + y, [x, y]);
                            map.set(arr[y][x], 1);
                            map = this.serch(map, y, x, arr);
                            // }
                        }
                    }
                }
        }
        return map;
    }
    copyBoard(arr) {
        let newArrey = new Array();
        for (let i = 0; i < arr.length; i++) {
            newArrey[i] = [];
            for (let j = 0; j < arr[i].length; j++) {
                newArrey[i][j] = arr[i][j];
            }
        }
        return newArrey;
    }
};
OnGameComponent.ctorParameters = () => [
    { type: angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], OnGameComponent.prototype, "socket", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OnGameComponent.prototype, "playerId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], OnGameComponent.prototype, "currentRoom", void 0);
OnGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-on-game',
        template: __webpack_require__(/*! raw-loader!./on-game.component.html */ "./node_modules/raw-loader/index.js!./src/app/on-game/on-game.component.html"),
        styles: [__webpack_require__(/*! ./on-game.component.css */ "./src/app/on-game/on-game.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
], OnGameComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/intern/Desktop/battlaship/neliry-battleship-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map