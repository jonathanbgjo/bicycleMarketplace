webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/users/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/users/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_listing_user_listing_component__ = __webpack_require__("../../../../../src/app/users/user-listing/user-listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__users_user_login_user_login_component__["a" /* UserLoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__users_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_4__users_user_listing_user_listing_component__["a" /* UserListingComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace!!!!!!</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/users/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__users_user_dashboard_user_dashboard_component__ = __webpack_require__("../../../../../src/app/users/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__users_user_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__users_user_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_user_listing_user_listing_component__ = __webpack_require__("../../../../../src/app/users/user-listing/user-listing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__users_user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__users_user_dashboard_user_dashboard_component__["a" /* UserDashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__users_user_listing_user_listing_component__["a" /* UserListingComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__users_user_service__["UserService"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/users/bike.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bike; });
var Bike = (function () {
    function Bike() {
    }
    return Bike;
}());

//# sourceMappingURL=bike.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-dashboard/user-dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\r\n\tborder: 2px solid black;\r\n}\r\nh1{\r\n\tdisplay:inline-block;\r\n}\r\nh2{\r\n\tdisplay:inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-dashboard/user-dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <a href=\"/dashboard\">Dashboard </a> | <a href=\"/listings\">My Listings </a> | <a href=\"/logout\">Logout </a>\n</p>\nSEARCH BAR\n\n{{bikes | json }}\n<p></p>\n{{user | json}}\n<div *ngFor=\"let bike of bikes\">\n\t<h1>Title:{{bike.title}}</h1> <h2> Price:{{bike.price}}</h2> <br>\n\tDescription:{{bike.description}}\n\t<p *ngIf=\" bike._user == user[0]._id\">\n\t<button (click)=\"delete(update_bike._id)\" >Delete</button>\n\t</p>\n\t<p *ngIf=\" bike._user != user[0]._id\">\n\t<button (alert)=\"contact(update_bike._id)\" >CONTACT</button>\n\t</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/user-dashboard/user-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDashboardComponent = (function () {
    function UserDashboardComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.get();
        this.get_one();
        this.user_service.logged()
            .then(function (user) { _this.user = user; })
            .catch(function (err) { _this.router.navigate([""]); });
    };
    UserDashboardComponent.prototype.get = function () {
        var _this = this;
        this.user_service.get_all()
            .then(function (bikes) { return _this.bikes = bikes; })
            .catch(function (err) { return console.log("get all bikes error", err); });
    };
    UserDashboardComponent.prototype.get_one = function () {
        var _this = this;
        this.user_service.get_one()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return console.log("get one users error", err); });
    };
    UserDashboardComponent.prototype.delete = function (id) {
        var _this = this;
        this.user_service.delete(id)
            .then(function () { return _this.get_one(); })
            .catch(function (err) { return console.log("delete error", err); });
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-dashboard',
        template: __webpack_require__("../../../../../src/app/users/user-dashboard/user-dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-dashboard/user-dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["UserService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserDashboardComponent);

var _a, _b;
//# sourceMappingURL=user-dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-listing/user-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\r\n\tdisplay:inline-block\r\n}\r\n#mybikes{\r\n\tborder: 2px solid black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-listing/user-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <a href=\"/dashboard\">Dashboard </a> | <a href=\"/listings\">My Listings </a> | <a href=\"/logout\">Logout </a>\n</p>\n<h2>Create Listeing</h2>\n\n<form (submit) = \"create()\" #form= \"ngForm\">\n\timage:<br>\n\t<input type=\"text\" \n\tname=\"picture\" \n\trequired \n\t[(ngModel)] = \"new_bike.picture\"\n\t#picture = 'ngModel'>\n<br>\n\tTitle:<br> <input \n\ttype=\"text\" \n\tname=\"title\"\n\trequired\n\t[(ngModel)] = \"new_bike.title\"\n\t#title = 'ngModel'>\n<br>\n\tPrice:<br> <input \n\ttype=\"number\" \n\tname=\"price\"\n\trequired\n\tminlength=\"1\" \n\t[(ngModel)] = \"new_bike.price\"\n\t#price = 'ngModel'><br>\n<br>\n\tDescription:<br> <input \n\ttype=\"text\" \n\tname=\"description\"\n\trequired\n\t[(ngModel)] = \"new_bike.description\"\n\t#description = 'ngModel'>\n<br>\n\tLocation:<br> <input \n\ttype=\"text\" \n\tname=\"location\"\n\trequired\n\t[(ngModel)] = \"new_bike.location\"\n\t#location = 'ngModel'>\n<input type=\"submit\" value=\"Create\" [disabled]=\"!form.valid\">\n</form>\n\n{{my_bikes | json }}\n<div id=\"edit\">\n\t<h2>Edit/Delete Listings</h2>\n\n\t<span *ngFor= \" let update_bike of my_bikes; let idx = index\" >\n\t<form (submit) = \"update(update_bike)\" #form = \"ngForm\">\n\t\t<div id = \"mybikes\">\n\t\t\tTitle <br> <input \n\t\t\ttype=\"text\" \n\t\t\tname=\"title\" \n\t\t\tvalue =\"{{update_bike.title}}\" \n\t\t\t[(ngModel)] = \"update_bike.title\"\n\t\t\t#title = 'ngModel'>\n\n\n\n\t\t\t<br> Description <br> <input \n\t\t\ttype=\"text\" \n\t\t\tname=\"description\" \n\t\t\tvalue =\"{{update_bike.description}}\"\n\t\t\t[(ngModel)] = \"update_bike.description\"\n\t\t\t#description = 'ngModel'>\n\n\t\t\t<br> Price <br> <input \n\t\t\ttype=\"text\" \n\t\t\tname=\"price\" \n\t\t\tvalue =\"{{idx}}\"\n\t\t\t[(ngModel)] = \"update_bike.price\"\n\t\t\t#price = 'ngModel'>\n\n\t\t\t<br> Location <br> <input \n\t\t\ttype=\"text\" \n\t\t\tname=\"location\" \n\t\t\tvalue =\"{{update_bike.location}}\"\n\t\t\t[(ngModel)] = \"update_bike.location\"\n\t\t\t#location = 'ngModel'>\n\n\t\t\t<input type=\"submit\" value=\"Update\">\n\t\t\t<button (click)=\"delete(update_bike._id)\" >Delete</button>\n\t\t</div>\n\t</form >\n\t</span>\n</div>\n\t\n\t"

/***/ }),

/***/ "../../../../../src/app/users/user-listing/user-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bike__ = __webpack_require__("../../../../../src/app/users/bike.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__user_service__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListingComponent = (function () {
    function UserListingComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
    }
    UserListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.new_bike = new __WEBPACK_IMPORTED_MODULE_2__bike__["a" /* Bike */];
        this.get_one();
        this.user_service.logged()
            .then(function (user) { _this.user = user; })
            .catch(function (err) { _this.router.navigate([""]); });
    };
    UserListingComponent.prototype.get_one = function () {
        var _this = this;
        this.user_service.get_one()
            .then(function (user) { return _this.my_bikes = user[0].bikes; })
            .catch(function (err) { return console.log("get one users error", err); });
    };
    UserListingComponent.prototype.create = function () {
        var _this = this;
        this.user_service.create(this.new_bike)
            .then(function () { _this.router.navigate(['/listings']); _this.new_bike = new __WEBPACK_IMPORTED_MODULE_2__bike__["a" /* Bike */]; _this.ngOnInit(); })
            .catch(function (err) { return console.log("bike create error", err); });
    };
    UserListingComponent.prototype.update = function (update_bike) {
        var _this = this;
        this.user_service.update(update_bike)
            .then(function (bike) { _this.ngOnInit(); })
            .catch(function (err) { console.log("update error", err); });
    };
    UserListingComponent.prototype.delete = function (id) {
        var _this = this;
        this.user_service.delete(id)
            .then(function () { return _this.get_one(); })
            .catch(function (err) { return console.log("delete error", err); });
    };
    return UserListingComponent;
}());
UserListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-listing',
        template: __webpack_require__("../../../../../src/app/users/user-listing/user-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-listing/user-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["UserService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserListingComponent);

var _a, _b;
//# sourceMappingURL=user-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<form  (submit)=\"login()\" #loginForm=\"ngForm\">\n\t<p>*Email: <input type=\"text\" name=\"email\"   [(ngModel)] = \"user.email\"></p>\n\t<p>*Password: <input type=\"text\" name=\"password\"   [(ngModel)] = \"user.password\"></p>\n\n\t<p><input type=\"submit\" name=\"Log In\" [disabled]=\"!loginForm.valid\"></p>\n</form>\n\n\n<form  (submit) = \"register()\" #form = \"ngForm\">\n\t<p>*First Name: <input \n\ttype=\"text\" \n\tname=\"first_name\"\n\tminlength = \"2\"\n\tmaxlength = \"24\"\n\t[(ngModel)] = \"new_user.first_name\"\n\t#first_name = 'ngModel'></p>\n\t\n\t<div *ngIf=\"first_name.errors?.required\">First name Required</div>\n\t<div *ngIf=\"first_name.errors?.minlength\">First name must be longer than 1</div>\n\t<div *ngIf=\"first_name.errors?.maxlength\">First name must be longer than 24</div>\n\n\n\t<p>*Last Name: <input \n\ttype=\"text\" \n\tname=\"last_name\"   \n\tminlength = \"2\"\n\tmaxlength = \"24\"\n\t[(ngModel)] = \"new_user.last_name\"\n\t#last_name = 'ngModel'></p>\n\t\n\t<div *ngIf=\"last_name.errors?.required\">Last name Required</div>\n\t<div *ngIf=\"last_name.errors?.minlength\">Last name must be longer than 1</div>\n\t<div *ngIf=\"last_name.errors?.maxlength\">Last name must be less than 24</div>\n\n\n\t<p>*Email: <input \n\ttype=\"text\" \n\tname=\"email\"   \n\tminlength=\"2\"\n\tmaxlength=\"24\" \n\t[(ngModel)] = \"new_user.email\"\n\t#email = 'ngModel'></p>\n\t\n\t<div *ngIf=\"email.errors?.required\">Email name Required</div>\n\t<div *ngIf=\"email.errors?.minlength\">Email name must be longer than 1</div>\n\t<div *ngIf=\"email.errors?.maxlength\">Email name must be less than 24</div>\n\n\n\t<p>*Password: <input \n\ttype=\"text\" \n\tname=\"password\"\n\tminlength=\"4\" \n\tmaxlength=\"24\" \n\t[(ngModel)] = \"new_user.password\"\n\t#password = 'ngModel'></p>\n\t\n\t<div *ngIf=\"password.errors?.required\">Password name Required</div>\n\t<div *ngIf=\"password.errors?.minlength\">Password name must be longer than 3</div>\n\t<div *ngIf=\"password.errors?.maxlength\">Password name must be less than 24</div>\n\n\n\t<p>*Confirm Password: <input \n\ttype=\"text\" name=\"confirmPassword\"   \n\t[(ngModel)] = \"new_user.confirmPassword\"\n\t#confirmPassword = 'ngModel'></p>\n\t\n\t<div *ngIf=\" new_user.confirmPassword  != new_user.password \">Passwords must match</div>\n\n\t<input type=\"submit\" value=\"Register\" [disabled]=\"!form.valid\">\n</form>\n\n<div *ngIf=\"flag\"> Email already exists </div>\n{{new_user |json }}"

/***/ }),

/***/ "../../../../../src/app/users/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/users/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/users/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserLoginComponent = (function () {
    function UserLoginComponent(user_service, router) {
        this.user_service = user_service;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.new_user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */];
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */];
        this.flag = false;
    };
    UserLoginComponent.prototype.register = function () {
        var _this = this;
        this.user_service.register(this.new_user)
            .then(function () { _this.router.navigate(["/"]); _this.new_user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]; })
            .catch(function (err) { _this.flag = true; console.log("user register error", err); });
    };
    UserLoginComponent.prototype.login = function () {
        var _this = this;
        this.user_service.login(this.user)
            .then(function () { return _this.router.navigate(["/dashboard"]); })
            .catch(function (err) { return console.log("user login error", err); });
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-login',
        template: __webpack_require__("../../../../../src/app/users/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/user-login/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["UserService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["UserService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/users/user.service.ts":
/***/ (function(module, __webpack_exports__) {

"use strict";


/***/ }),

/***/ "../../../../../src/app/users/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

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
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map