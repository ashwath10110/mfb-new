webpackJsonp(["main"],{

/***/ "../../../../../client/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../client/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">About</h4>\n  <div class=\"card-block\">\n    <ul>\n      <li><b>Author:</b> <a href=\"https://github.com/DavideViolante\" target=\"_blank\">Davide Violante</a></li>\n      <li><b>GitHub:</b> <a href=\"https://github.com/DavideViolante/Angular-Full-Stack\" target=\"_blank\">project repository</a></li>\n      <li><b>This project uses the MEAN stack:</b></li>\n      <ul>\n        <li><a href=\"http://www.mongoosejs.com\" target=\"_blank\"><b>M</b>ongoose.js</a> (<a href=\"https://www.mongodb.com\" target=\"_blank\">MongoDB</a>)</li>\n        <li><a href=\"http://www.expressjs.com\" target=\"_blank\"><b>E</b>xpress.js</a></li>\n        <li><a href=\"https://www.angular.io\" target=\"_blank\"><b>A</b>ngular 2+</a></li>\n        <li><a href=\"https://www.nodejs.org\" target=\"_blank\"><b>N</b>ode.js</a></li>\n      </ul>\n      <li><b>Other tools and technologies used:</b></li>\n      <ul>\n        <li><a href=\"https://cli.angular.io\" target=\"_blank\">Angular CLI</a></li>\n        <li><a href=\"http://www.getbootstrap.com\" target=\"_blank\">Bootstrap</a></li>\n        <li><a href=\"http://www.fontawesome.io\" target=\"_blank\">Font Awesome</a></li>\n        <li><a href=\"https://jwt.io\" target=\"_blank\">JSON Web Token</a></li>\n        <li><a href=\"https://github.com/auth0/angular2-jwt\" target=\"_blank\">Angular 2 JWT</a></li>\n        <li><a href=\"https://github.com/dcodeIO/bcrypt.js\" target=\"_blank\">Bcrypt.js</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
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

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../client/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../client/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = (function () {
    function AccountComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AccountComponent.prototype.save = function (user) {
        var _this = this;
        this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
    };
    return AccountComponent;
}());
AccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-account',
        template: __webpack_require__("../../../../../client/app/account/account.component.html"),
        styles: [__webpack_require__("../../../../../client/app/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-items/add-items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Items ({{leafyGreenVegetables.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>nameForTelugu</th>\n          <th>nameForHindi</th>\n          <th>type</th>\n          <th>description</th>\n          <th>available</th>\n          <th>countPerKg</th>\n          <th>averageWeightPerPiece</th>\n          <th>price</th>\n          <th>imageForShowCase</th>\n          <th>imageForCart</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"leafyGreenVegetables.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no items in the DB. Add a new item below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of leafyGreenVegetables\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.nameForTelugu}}</td>\n          <td>{{cat.nameForHindi}}</td>\n          <td>{{cat.type}}</td>\n          <td>{{cat.description}}</td>\n          <td>{{cat.available}}</td>\n          <td>{{cat.countPerKg}}</td>\n          <td>{{cat.averageWeightPerPiece}}</td>\n          <td>{{cat.price}}</td>\n          <td><img [src]=\"cat.imageForShowCase\"/></td>\n          <td><img [src]=\"cat.imageForCart\"/></td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteLeafyGreenVegetable(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editLeafyGreenVegetable(leafyGreenVegetable)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"nameForTelugu\" [(ngModel)]=\"leafyGreenVegetable.nameForTelugu\" placeholder=\"nameForTelugu\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.nameForHindi\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control\" name=\"type\" required [(ngModel)]=\"leafyGreenVegetable.type\" >\n                  <option *ngFor=\"let c of itemTypes\" [ngValue]=\"c\">{{c}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"countPerKg\" [(ngModel)]=\"leafyGreenVegetable.countPerKg\" placeholder=\"countPerKg\" required>\n              </div>                            \n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"averageWeightPerPiece\" [(ngModel)]=\"leafyGreenVegetable.averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"radio\" value=\"true\" name=\"available\" [(ngModel)]=\"leafyGreenVegetable.available\" required> Yes\n                  <input type=\"radio\" value=\"false\" name=\"available\" [(ngModel)]=\"leafyGreenVegetable.available\" required> No\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"leafyGreenVegetable.description\" placeholder=\"description\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"price\" [(ngModel)]=\"leafyGreenVegetable.price\" placeholder=\"price\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new Exotic Vegetable</h4>\n  <div class=\"card-block\">\n  \n  available: String,\n  description: String\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addLeafyGreenVegetable()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"nameForTelugu\" formControlName=\"nameForTelugu\" placeholder=\"nameForTelugu\">\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"nameForHindi\" formControlName=\"nameForHindi\" placeholder=\"nameForHindi\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"countPerKg\" formControlName=\"countPerKg\" placeholder=\"countPerKg\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"averageWeightPerPiece\" formControlName=\"averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\">\n      </div>  \n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"price\" formControlName=\"price\" placeholder=\"price\">\n      </div>\n\n      <div class=\"form-group\">\n        Type\n        <select class=\"form-control\" formControlName=\"type\" placeholder=\"type\" name=\"type\" [(ngModel)]=\"leafyGreenVegetable.type\" >\n          <option *ngFor=\"let c of itemTypes\" [ngValue]=\"c\">{{c}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        Available\n        <input class=\"form-control\" type=\"radio\" value=\"true\" name=\"available\" formControlName=\"available\" placeholder=\"available\">Yes\n        <input class=\"form-control\" type=\"radio\" value=\"false\" name=\"available\" formControlName=\"available\" placeholder=\"available\">No\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"description\" formControlName=\"description\" placeholder=\"description\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" ><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/add-items/add-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItemsComponent = (function () {
    function AddItemsComponent(exoticVegetablesService, formBuilder, http, toast) {
        this.exoticVegetablesService = exoticVegetablesService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.leafyGreenVegetable = {};
        this.leafyGreenVegetables = [];
        this.isLoading = true;
        this.isEditing = false;
        this.itemTypes = ['exotic-vegetables', 'leafy-green-vegetables', 'fresh-vegetables', 'fresh-fruits'];
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.type = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.countPerKg = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.averageWeightPerPiece = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.nameForHindi = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.nameForTelugu = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.price = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.available = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.description = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.imageHolder = [];
    }
    AddItemsComponent.prototype.imageChange = function (input, i) {
        var _this = this;
        var files = (input.target.files[0]);
        this.imageHolder[i] = window.URL.createObjectURL(input.target.files[0]);
        var reader = new FileReader();
        reader.addEventListener("load", function (event) {
            _this.imageHolder[i] = event.target.result;
        }, false);
        reader.readAsDataURL(input.target.files[0]);
    };
    AddItemsComponent.prototype.ngOnInit = function () {
        this.getLeafyGreenVegetables();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            type: this.type,
            countPerKg: this.countPerKg,
            averageWeightPerPiece: this.averageWeightPerPiece,
            weight: this.weight,
            nameForTelugu: this.nameForTelugu,
            nameForHindi: this.nameForHindi,
            price: this.price,
            available: this.available,
            description: this.description,
        });
    };
    AddItemsComponent.prototype.getLeafyGreenVegetables = function () {
        var _this = this;
        this.exoticVegetablesService.getLeafyGreenVegetables().subscribe(function (data) { return _this.leafyGreenVegetables = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AddItemsComponent.prototype.addLeafyGreenVegetable = function () {
        var _this = this;
        var cat = this.addCatForm.value;
        cat.available = cat.available == 'true' ? true : false;
        cat.imageForShowCase = this.imageHolder[1];
        cat.imageForCart = this.imageHolder[2];
        this.exoticVegetablesService.addLeafyGreenVegetable(cat).subscribe(function (res) {
            var newCat = res.json();
            _this.leafyGreenVegetables.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddItemsComponent.prototype.enableEditing = function (leafyGreenVegetable) {
        this.isEditing = true;
        this.leafyGreenVegetable = leafyGreenVegetable;
    };
    AddItemsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.leafyGreenVegetable = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        this.getLeafyGreenVegetables();
    };
    AddItemsComponent.prototype.editLeafyGreenVegetable = function (cat) {
        var _this = this;
        cat.available = cat.available == 'true' ? true : false;
        cat.imageForShowCase = this.imageHolder[1];
        cat.imageForCart = this.imageHolder[2];
        this.exoticVegetablesService.editLeafyGreenVegetable(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.leafyGreenVegetable = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddItemsComponent.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetable) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.exoticVegetablesService.deleteLeafyGreenVegetable(leafyGreenVegetable).subscribe(function (res) {
                var pos = _this.leafyGreenVegetables.map(function (elem) { return elem._id; }).indexOf(leafyGreenVegetable._id);
                _this.leafyGreenVegetables.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return AddItemsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])("fileInput"),
    __metadata("design:type", Object)
], AddItemsComponent.prototype, "fileInput", void 0);
AddItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-items',
        template: __webpack_require__("../../../../../client/app/add-items/add-items.component.html"),
        styles: [__webpack_require__("../../../../../client/app/add-items/add-items.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], AddItemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-items.component.js.map

/***/ }),

/***/ "../../../../../client/app/add-items/add-items.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n\nimg {\n  display: block;\n  max-width: 230px;\n  max-height: 95px;\n  width: auto;\n  height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/addresses/addresses.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<app-loading [condition]=\"loadWholeScreen\"></app-loading>\n\n\n<div *ngIf=\"!loadWholeScreen\">\n\n  <button class=\"btn btn-sm btn-warning\" [disabled]=\"!showLocationButton\" (click)=\"getLocationData()\">Use My Current Location</button>\n\n  <div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Addresses ({{addresses.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Select Address to use</th>\n          <th>Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"addresses.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no addresses in the DB. Add a new address below.</td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let address of addresses\">\n          <td *ngIf=\"address._id\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">              \n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              NA\n            </div>\n          </td>\n          <td>{{address.name}}</td>\n          <td *ngIf=\"address._id\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n              <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              <div>Address not in range of Delivery which is ({{appService.shopDetails.validDistanceAllowedInKm}}Km)</div>\n            </div>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editAddress(address)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"address.name\" placeholder=\"Name\" required>\n              </div>\n               <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new address</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addAddressForm\" (ngSubmit)=\"addAddress()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addAddressForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>\n\n<button class=\"btn btn-primary\" (click)=\"proceedToPay()\" [disabled]=\"addressSelected==''\">Proceed to Pay {{cartService.cartTotal}}</button>\n</div>\n<div *ngIf=\"loadWholeScreen\">\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../client/app/addresses/addresses.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/addresses/addresses.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_address_service__ = __webpack_require__("../../../../../client/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddressesComponent = (function () {
    function AddressesComponent(addressService, cartService, appService, itemsService, formBuilder, http, toast, router) {
        this.addressService = addressService;
        this.cartService = cartService;
        this.appService = appService;
        this.itemsService = itemsService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.router = router;
        this.address = {};
        this.addresses = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.showLocationDataFlag = false;
        this.locationData = '';
        this.addressSelected = '';
        this.locationLoading = false;
        this.showLocationButton = true;
        this.isAddressValidInDistance = false;
        this.loadWholeScreen = false;
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.addAddressForm = this.formBuilder.group({
            name: this.name
        });
        this.getAddresses();
    };
    AddressesComponent.prototype.getLocationData = function () {
        var _this = this;
        this.isLoading = true;
        this.showLocationButton = false;
        this.appService.locationInit().subscribe(function (data) {
            var address = JSON.parse(data["_body"]).results[0].formatted_address;
            _this.addresses.push({ name: address });
            _this.showLocationButton = false;
            _this.appService.currentUser.locationInfo = {
                status: true,
                value: address
            };
            if (_this.appService.currentUser.distanceFromShop.status) {
                _this.isAddressValidInDistance = true;
            }
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    AddressesComponent.prototype.getAddresses = function () {
        var _this = this;
        this.addressService.getAddresses().subscribe(function (data) {
            _this.addresses = data;
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AddressesComponent.prototype.addAddress = function () {
        var _this = this;
        this.addressService.addAddress(this.addAddressForm.value).subscribe(function (res) {
            var newAddress = res.json();
            _this.addresses.push(newAddress);
            _this.addAddressForm.reset();
            _this.toast.setMessage('Address added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddressesComponent.prototype.addCurrentAddress = function (address) {
        var _this = this;
        this.addressService.addAddress(address).subscribe(function (res) {
            var newAddress = res.json();
            _this.addresses.push(newAddress);
            _this.addAddressForm.reset();
            _this.toast.setMessage('Address added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddressesComponent.prototype.enableEditing = function (address) {
        this.isEditing = true;
        this.address = address;
    };
    AddressesComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.address = {};
        this.toast.setMessage('Address editing cancelled.', 'warning');
    };
    AddressesComponent.prototype.editAddress = function (address) {
        var _this = this;
        this.addressService.editAddress(address).subscribe(function (res) {
            _this.isEditing = false;
            _this.address = address;
            _this.toast.setMessage('Address edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddressesComponent.prototype.deleteAddress = function (address) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.addressService.deleteAddress(address).subscribe(function (res) {
                var pos = _this.addresses.map(function (elem) { return elem._id; }).indexOf(address._id);
                _this.addresses.splice(pos, 1);
                _this.toast.setMessage('Address deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    AddressesComponent.prototype.proceedToPay = function () {
        var _this = this;
        var cartProducts = {
            products: this.cartService.products
        };
        this.loadWholeScreen = true;
        this.itemsService.isCartValid(cartProducts).subscribe(function (res) {
            _this.loadWholeScreen = false;
            if (res['status']) {
                if (res['data']['value']) {
                    if (_this.appService.currentUser.locationInfo.status) {
                        _this.addCurrentAddress({ name: _this.appService.currentUser.locationInfo.value });
                    }
                    _this.router.navigate(['/checkout']);
                }
                else {
                    alert('Some items might not be available. Your cart has been refreshed.');
                    _this.toast.setMessage('Some items might not be available Your cart has been refreshed.', 'warning');
                    _this.cartService.refreshCart();
                }
            }
        }, function (error) {
            _this.loadWholeScreen = false;
            console.log(error);
        });
    };
    return AddressesComponent;
}());
AddressesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-addresses',
        template: __webpack_require__("../../../../../client/app/addresses/addresses.component.html"),
        styles: [__webpack_require__("../../../../../client/app/addresses/addresses.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__items_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _h || Object])
], AddressesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=addresses.component.js.map

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<p-accordion [activeIndex]=\"index\">\n    <p-accordionTab header=\"User Management\">\n      <div class=\"card\" *ngIf=\"!isLoading\">\n        <h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n        <div class=\"card-block\">\n          <table class=\"table table-bordered table-striped\">\n            <thead class=\"thead-default\">\n              <tr>\n                <th>Username</th>\n                <th>Email</th>\n                <th>Role</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody *ngIf=\"users.length === 0\">\n              <tr>\n                <td colspan=\"4\">There are no registered users.</td>\n              </tr>  \n            </tbody>\n            <tbody>\n              <tr *ngFor=\"let user of users\">\n                <td>{{user.username}}</td>\n                <td>{{user.email}}</td>\n                <td>{{user.role}}</td>\n                <td>\n                  <button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\" [disabled]=\"auth.currentUser._id === user._id\">\n                    <i class=\"fa fa-trash\"></i>\n                  </button>\n                </td>\n              </tr>  \n            </tbody>\n          </table>\n        </div>\n      </div>\n    </p-accordionTab>\n    <p-accordionTab header=\"Items Management\">\n      <app-add-items></app-add-items>\n    </p-accordionTab>\n    <p-accordionTab header=\"Order Management\">\n    </p-accordionTab>\n</p-accordion>"

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(auth, toast, userService) {
        this.auth = auth;
        this.toast = toast;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).subscribe(function (data) { return _this.toast.setMessage('user deleted successfully.', 'success'); }, function (error) { return console.log(error); }, function () { return _this.getUsers(); });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<cart></cart>\n\n<div class=\"container-fluid\">\n\t<router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../client/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
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
    function AppComponent(auth) {
        this.auth = auth;
        if (window["Worker"]) {
            console.log('available');
        }
        else {
            console.log("NA");
        }
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("../../../../../client/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__items_items_component__ = __webpack_require__("../../../../../client/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__add_items_add_items_component__ = __webpack_require__("../../../../../client/app/add-items/add-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tabs_tabs_component__ = __webpack_require__("../../../../../client/app/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__navbar_navbar_component__ = __webpack_require__("../../../../../client/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__ = __webpack_require__("../../../../../client/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__carousal_carousal_component__ = __webpack_require__("../../../../../client/app/carousal/carousal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__checkout_checkout_component__ = __webpack_require__("../../../../../client/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__location_location_component__ = __webpack_require__("../../../../../client/app/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__items_showcase_showcase_component__ = __webpack_require__("../../../../../client/app/items/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__items_cart_cart_component__ = __webpack_require__("../../../../../client/app/items/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__items_product_product_component__ = __webpack_require__("../../../../../client/app/items/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__items_product_thumbnail_product_thumbnail_component__ = __webpack_require__("../../../../../client/app/items/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__items_cart_preview_cart_preview_component__ = __webpack_require__("../../../../../client/app/items/cart-preview/cart-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__payment_checkout_payment_checkout_component__ = __webpack_require__("../../../../../client/app/payment-checkout/payment-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__addresses_addresses_component__ = __webpack_require__("../../../../../client/app/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__orders_orders_component__ = __webpack_require__("../../../../../client/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__items_data_service__ = __webpack_require__("../../../../../client/app/items/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__items_cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_tabs_service__ = __webpack_require__("../../../../../client/app/services/tabs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_address_service__ = __webpack_require__("../../../../../client/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_orders_service__ = __webpack_require__("../../../../../client/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_local_storage_local_storage_service__ = __webpack_require__("../../../../../client/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_18__account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_19__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_20__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_24__tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_26__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_31__items_showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_32__items_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_33__items_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_34__items_product_thumbnail_product_thumbnail_component__["a" /* ProductThumbnailComponent */],
            __WEBPACK_IMPORTED_MODULE_35__items_cart_preview_cart_preview_component__["a" /* CartPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_29__checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_28__carousal_carousal_component__["a" /* CarousalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__cats_cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_27__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_21__items_items_component__["a" /* ItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__add_items_add_items_component__["a" /* AddItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_36__payment_checkout_payment_checkout_component__["a" /* PaymentCheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_30__location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_37__addresses_addresses_component__["a" /* AddressesComponent */],
            __WEBPACK_IMPORTED_MODULE_38__orders_orders_component__["a" /* OrdersComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_45_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_46__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_login_service__["a" /* AuthGuardLogin */],
            __WEBPACK_IMPORTED_MODULE_12__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */],
            __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_39__items_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_7__services_cat_service__["a" /* CatService */],
            __WEBPACK_IMPORTED_MODULE_40__items_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_6__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_41__services_tabs_service__["a" /* TabsService */],
            __WEBPACK_IMPORTED_MODULE_42__services_address_service__["a" /* AddressService */],
            __WEBPACK_IMPORTED_MODULE_44__services_local_storage_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_43__services_orders_service__["a" /* OrderService */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';

var AppService = (function () {
    function AppService(http, toast) {
        this.http = http;
        this.toast = toast;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        this.selectedTab = 'Home';
        this.x_ = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE";
        this.currentUser = {
            name: 'Ashwath',
            tokenId: '00110101100',
            tokenForLocalStorage: 'mfb-storage',
            locationData: {
                status: false,
                value: {}
            },
            locationInfo: {
                status: false,
                value: {}
            },
            distanceFromShop: {
                status: 0,
                value: {}
            },
            isLocationValid: {
                status: false,
                value: {}
            },
            cartValue: {
                status: false,
                value: {
                    products: [],
                    cartTotal: 0
                }
            }
        };
        this.shopDetails = {
            name: '',
            locationChords: {
                latitude: 17.4551658,
                longitude: 78.4983102
            },
            locationInfo: {
                value: "Shop is in Secunderabad"
            },
            validDistanceAllowedInKm: 10
        };
        this.googleApiKey = 'AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE';
        this.state = {
            'isInitialised': false,
            'data': {
                'exotic-vegetables': {
                    'items': [],
                    'isInitialised': false
                },
                'leafy-green-vegetables': {
                    'items': [],
                    'isInitialised': false
                },
                'fresh-fruits': {
                    'items': [],
                    'isInitialised': false
                },
                'fresh-vegetables': {
                    'items': [],
                    'isInitialised': false
                }
            }
        };
    }
    AppService.prototype.getLocation = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition(function (position) {
                    observer.next(position);
                    observer.complete();
                }, function (error) { return observer.error(error); });
            }
            else {
                observer.error('Unsupported Browser');
            }
        });
    };
    AppService.prototype.locationInit = function () {
        var _this = this;
        return this.getLocation().flatMap(function (data) {
            _this.currentUser.locationData = {
                status: true,
                value: data
            };
            var lat = _this.currentUser.locationData.value['coords'].latitude;
            var long = _this.currentUser.locationData.value['coords'].longitude;
            if (_this.isDistanceValid(_this.shopDetails.locationChords, _this.currentUser.locationData.value['coords'], _this.shopDetails.validDistanceAllowedInKm * 1000)) {
                _this.currentUser.distanceFromShop = {
                    status: 1,
                    value: data
                };
            }
            return _this.getLocationFromCords(data.coords.latitude, data.coords.longitude);
        });
    };
    AppService.prototype.isDistanceValid = function (shop, customer, radiusValid) {
        var rad = function (x) {
            return x * Math.PI / 180;
        };
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(customer.latitude - shop.latitude);
        var dLong = rad(customer.longitude - shop.longitude);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(shop.latitude)) * Math.cos(rad(customer.latitude)) *
                Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c;
        this.currentUser.distanceFromShop.value = distance;
        return (distance <= radiusValid); // returns the distance in meter
    };
    ;
    AppService.prototype.getLocationFromCords = function (lat, lon) {
        var apiKey = this.googleApiKey;
        var getLocationFromCordsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + apiKey;
        return this.http.get(getLocationFromCordsUrl);
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__app_shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Los Angeles\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Chicago\" style=\"width:100%;\">\n      </div>\n    \n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"New york\" style=\"width:100%;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/carousal/carousal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarousalComponent; });
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

var CarousalComponent = (function () {
    function CarousalComponent() {
    }
    CarousalComponent.prototype.ngOnInit = function () {
    };
    return CarousalComponent;
}());
CarousalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-carousal',
        template: __webpack_require__("../../../../../client/app/carousal/carousal.component.html"),
        styles: [__webpack_require__("../../../../../client/app/carousal/carousal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarousalComponent);

//# sourceMappingURL=carousal.component.js.map

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current cats ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"cats.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no cats in the DB. Add a new cat below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of cats\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"cat.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new cat</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/cats/cats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_cat_service__ = __webpack_require__("../../../../../client/app/services/cat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatsComponent = (function () {
    function CatsComponent(catService, formBuilder, http, toast) {
        this.catService = catService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.cat = {};
        this.cats = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.getCats();
        this.addCatForm = this.formBuilder.group({
            name: this.name,
            age: this.age,
            weight: this.weight
        });
    };
    CatsComponent.prototype.getCats = function () {
        var _this = this;
        this.catService.getCats().subscribe(function (data) { return _this.cats = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    CatsComponent.prototype.addCat = function () {
        var _this = this;
        this.catService.addCat(this.addCatForm.value).subscribe(function (res) {
            var newCat = res.json();
            _this.cats.push(newCat);
            _this.addCatForm.reset();
            _this.toast.setMessage('item added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.enableEditing = function (cat) {
        this.isEditing = true;
        this.cat = cat;
    };
    CatsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.cat = {};
        this.toast.setMessage('item editing cancelled.', 'warning');
        // reload the cats to reset the editing
        this.getCats();
    };
    CatsComponent.prototype.editCat = function (cat) {
        var _this = this;
        this.catService.editCat(cat).subscribe(function (res) {
            _this.isEditing = false;
            _this.cat = cat;
            _this.toast.setMessage('item edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    CatsComponent.prototype.deleteCat = function (cat) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.catService.deleteCat(cat).subscribe(function (res) {
                var pos = _this.cats.map(function (elem) { return elem._id; }).indexOf(cat._id);
                _this.cats.splice(pos, 1);
                _this.toast.setMessage('item deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cats',
        template: __webpack_require__("../../../../../client/app/cats/cats.component.html"),
        styles: [__webpack_require__("../../../../../client/app/cats/cats.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_cat_service__["a" /* CatService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], CatsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t<h1>PayU Screen</h1>\n</div>"

/***/ }),

/***/ "../../../../../client/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
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

var CheckoutComponent = (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../client/app/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../client/app/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CheckoutComponent);

//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../client/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items_cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = (function () {
    function FooterComponent(CartService, auth, router) {
        this.CartService = CartService;
        this.auth = auth;
        this.router = router;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../client/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__items_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
], FooterComponent);

var _a, _b, _c;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../client/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-carousal></app-carousal>\n\n<!-- <div class=\"col-md-6 col-md-offset-3\">\n    <h1>Home</h1>\n    <p>You're logged in with JWT!!</p>\n    <div>\n        Users from secure api end point:\n        <ul>\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\n        </ul>\n    </div>\n    <p><a [routerLink]=\"['/login']\">Logout</a></p>\n</div> -->"

/***/ }),

/***/ "../../../../../client/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

// import { User } from '../../_models/user';
// import { UserService } from '../../_services/user.service';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../client/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../client/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/cart-preview/cart-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart-preview works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/items/cart-preview/cart-preview.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/cart-preview/cart-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPreviewComponent; });
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

var CartPreviewComponent = (function () {
    function CartPreviewComponent() {
    }
    CartPreviewComponent.prototype.ngOnInit = function () {
    };
    return CartPreviewComponent;
}());
CartPreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cart-preview',
        template: __webpack_require__("../../../../../client/app/items/cart-preview/cart-preview.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/cart-preview/cart-preview.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CartPreviewComponent);

//# sourceMappingURL=cart-preview.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_local_storage_service__ = __webpack_require__("../../../../../client/app/services/local-storage/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CartService = (function () {
    function CartService(localStorageService, appService, itemsService, router) {
        this.localStorageService = localStorageService;
        this.appService = appService;
        this.itemsService = itemsService;
        this.router = router;
        this.products = [];
        this.cartTotal = 0;
        this.productAddedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.productAdded$ = this.productAddedSource.asObservable();
    }
    CartService.prototype.initCart = function () {
        if (!this.appService.currentUser.cartValue.status) {
            var cartState = this.localStorageService.getCartValue();
            if (!cartState) {
                this.appService.currentUser.cartValue = {
                    status: true,
                    value: {
                        products: [],
                        cartTotal: 0
                    }
                };
                this.products = [];
                this.cartTotal = 0;
            }
            else {
                this.products = cartState.cartValue.value.products;
                this.cartTotal = cartState.cartValue.value.cartTotal;
            }
        }
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.refreshCart = function () {
        this.products = [];
        this.cartTotal = 0;
        this.itemsService.state['isInitialised'] = false;
        this.updateLocalStorage();
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
        this.router.navigate(['/items']);
    };
    CartService.prototype.addProductToCart = function (product) {
        var exists = false;
        var parsedPrice = parseFloat(product.price.replace(/\./g, '').replace(',', '.'));
        this.cartTotal += parsedPrice;
        //Search this product on the cart and increment the quantity
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product._id == product._id) {
                this.products[i].quantity++;
                exists = true;
            }
        }
        //Add a new product to the cart if it's a new product
        if (!exists) {
            product.parsedPrice = parsedPrice;
            this.products.push({
                product: product,
                quantity: 1
            });
        }
        this.updateLocalStorage();
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.updateLocalStorage = function () {
        this.appService.currentUser.cartValue = {
            status: true,
            value: {
                products: this.products,
                cartTotal: this.cartTotal
            }
        };
        this.localStorageService.setCartValue(this.appService.currentUser);
    };
    CartService.prototype.deleteProductFromCart = function (product) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].product._id == product._id) {
                this.cartTotal -= this.products[i].product.parsedPrice * this.products[i].quantity;
                this.products.splice(i, 1);
                break;
            }
        }
        this.updateLocalStorage();
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    CartService.prototype.flushCart = function () {
        this.products = [];
        this.cartTotal = 0;
        this.updateLocalStorage();
        this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
    };
    return CartService;
}());
CartService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
], CartService);

var _a, _b, _c, _d;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../client/app/items/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" [class.expanded]='expanded'>\n  <button [class.not-shown]='!products.length || expanded' type=\"button\" class=\"circle\" (click)=\"onCartClick()\">\n    <img src=\"../../assets/cart_white.svg\" alt=\"cart\" />\n    <div class=\"indicator\"><span>{{numProducts}}</span></div>\n  </button>\n  <div class=\"fill\" [style.height]=\"expanded ? expandedHeight : 'inherit'\" [class.not-shown]='!products.length' [class.animate-plop]='animatePlop' [class.shown]='animatePopout && !expanded'>\n    <div class=\"expanded-info\" [class.shown]='expanded'>\n      <h3>This is what you're gonna buy...</h3>\n      <div class=\"product\" *ngFor=\"let item of products\">\n        <div class=\"row\">\n          <div class=\"col-6-sm description\">\n            <p>{{item.quantity}} x {{item.product.name}}</p>\n          </div>\n          <div class=\"col-6-sm price\">\n            <p>{{item.quantity*item.product.parsedPrice | currency:'USD':true:'1.0-0' }}</p>\n          </div>\n        </div>\n        <button class=\"delete-btn\" (click) = 'deleteProduct(item.product)'>x</button>\n      </div>\n      <button type=\"button\" class=\"pay-btn\" (click) = 'checkout()'>Pay {{cartTotal | currency:'USD':true:'1.0-0'}}</button>\n    </div>\n    <button type=\"button\" class=\"close-btn\" *ngIf='expanded' (click)=\"onCartClick()\">Close</button>\n  </div>\n</div>\n<div class=\"overlay\" [class.shown]='expanded'>\n\n</div>"

/***/ }),

/***/ "../../../../../client/app/items/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview {\n  position: relative; }\n  .preview .fill {\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.close-btn {\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 0.7em;\n  font-weight: 600;\n  text-decoration: underline;\n  opacity: 0.8; }\n  .close-btn:hover {\n    opacity: 1; }\n\n.pay-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 44px;\n  height: 44px;\n  padding: 0 25px;\n  border: none;\n  background-color: #EF364C;\n  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.32);\n  color: white;\n  font-weight: 600;\n  margin-top: 20px; }\n\n.expanded-info {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: white;\n  width: 80%;\n  margin: 0 auto; }\n  .expanded-info .product, .expanded-info h3, .expanded-info .pay-btn {\n    opacity: 0;\n    transform: translateY(10px);\n    -webkit-transform: translateY(10px);\n    transition: all 0.5s ease; }\n  .expanded-info .price {\n    text-align: right; }\n  .expanded-info.shown {\n    opacity: 1;\n    z-index: 3; }\n    .expanded-info.shown .product, .expanded-info.shown h3, .expanded-info.shown .pay-btn {\n      transform: translateY(0);\n      -webkit-transform: translateY(0); }\n    .expanded-info.shown h3 {\n      transition-delay: 0.2s;\n      opacity: 0.43; }\n    .expanded-info.shown .product {\n      transition-delay: 0.4s;\n      opacity: 1; }\n    .expanded-info.shown .pay-btn {\n      transition-delay: 0.6s;\n      opacity: 1; }\n  .expanded-info h3 {\n    font-weight: 400;\n    font-size: 16px;\n    margin-top: 30px; }\n  .expanded-info .product {\n    position: relative;\n    width: 95%; }\n    .expanded-info .product p {\n      margin: 0; }\n    .expanded-info .product:not(:last-child) {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n    .expanded-info .product .delete-btn {\n      position: absolute;\n      right: -28px;\n      top: 14px;\n      background: none;\n      border: none;\n      opacity: 0.6;\n      color: white;\n      font-weight: 600;\n      font-size: 0.8em; }\n      .expanded-info .product .delete-btn:hover {\n        opacity: 0.8; }\n\n.preview.expanded .fill {\n  width: 460px;\n  border-radius: 3px;\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.49); }\n  .preview.expanded .fill.animate-plop {\n    -webkit-transform: scale(1.02);\n    transform: scale(1.02); }\n\n.preview:not(.expanded) .fill:hover {\n  box-shadow: 0 2px 13px rgba(49, 46, 82, 0.65); }\n\n.preview .fill {\n  height: 40px;\n  width: 40px;\n  box-shadow: 0 2px 13px rgba(93, 78, 240, 0.55);\n  background: #5D4EF0;\n  border-radius: 50px;\n  z-index: 5;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .fill.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  .preview .fill.shown {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3); }\n  .preview .fill.animate-plop {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n\n.preview .circle {\n  height: 40px;\n  width: 40px;\n  border: none;\n  padding: 0;\n  border-radius: 50px;\n  position: relative;\n  z-index: 8;\n  background: blue;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .circle img {\n    position: relative;\n    top: 3px;\n    left: -1px; }\n  .preview .circle.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n\n.preview .indicator {\n  background-color: #EF364C;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  color: white;\n  position: absolute;\n  top: -3px;\n  font-size: 0.6em;\n  right: 0;\n  font-weight: 700;\n  text-align: center; }\n  .preview .indicator span {\n    position: relative;\n    top: 1px; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  background-color: rgba(0, 0, 0, 0.7); }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .overlay.shown {\n    height: 100%;\n    opacity: 1;\n    z-index: 9; }\n  .pay-btn {\n    margin-top: 35px; }\n  .close-btn {\n    z-index: 90; }\n  .description p, .price p {\n    font-size: 1em; }\n  .expanded-info {\n    width: 90%; }\n    .expanded-info h3 {\n      font-size: 0.9em; }\n    .expanded-info .product .delete-btn {\n      right: -21px;\n      top: 10px; }\n  .preview {\n    position: fixed;\n    bottom: 3%;\n    right: 5%;\n    width: 13%;\n    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .preview .fill {\n      box-shadow: 0 2px 13px rgba(93, 78, 240, 0.75); }\n    .preview.expanded {\n      width: 90%;\n      margin: 0 auto;\n      bottom: 75%;\n      z-index: 800; }\n      .preview.expanded .fill {\n        width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OFFSET_HEIGHT = 170;
var PRODUCT_HEIGHT = 48;
var CartComponent = (function () {
    function CartComponent(cartService, changeDetectorRef, route, router, appService) {
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.products = [];
        this.numProducts = 0;
        this.animatePlop = false;
        this.animatePopout = false;
        this.expanded = false;
        this.cartTotal = 0;
        this.changeDetectorRef = changeDetectorRef;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expandedHeight = '0';
        this.cartService.initCart();
        this.cartService.productAdded$.subscribe(function (data) {
            _this.products = data.products;
            _this.cartTotal = data.cartTotal;
            _this.numProducts = data.products.reduce(function (acc, product) {
                acc += product.quantity;
                return acc;
            }, 0);
            //Make a plop animation
            if (_this.numProducts > 1) {
                _this.animatePlop = true;
                setTimeout(function () {
                    _this.animatePlop = false;
                }, 160);
            }
            else if (_this.numProducts == 1) {
                _this.animatePopout = true;
                setTimeout(function () {
                    _this.animatePopout = false;
                }, 300);
            }
            _this.expandedHeight = (_this.products.length * PRODUCT_HEIGHT + OFFSET_HEIGHT) + 'px';
            if (!_this.products.length) {
                _this.expanded = false;
            }
            _this.changeDetectorRef.detectChanges();
        });
    };
    CartComponent.prototype.deleteProduct = function (product) {
        this.cartService.deleteProductFromCart(product);
    };
    CartComponent.prototype.checkout = function () {
        this.expanded = false;
        this.router.navigate(['/addresses']);
        console.log("To Checkout");
    };
    CartComponent.prototype.onCartClick = function () {
        this.expanded = !this.expanded;
    };
    return CartComponent;
}());
CartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cart',
        template: __webpack_require__("../../../../../client/app/items/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _e || Object])
], CartComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../client/app/items/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__mock_data__["a" /* DATA */]);
    };
    DataService.prototype.getRemoteData = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../client/app/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tabs></app-tabs>\n{{typeOfVegetables}}\n<!-- <cart></cart> -->\n<app-loading [condition]=\"isLoading\"></app-loading>\n<showcase [products]='products'></showcase>"

/***/ }),

/***/ "../../../../../client/app/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../client/app/items/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemsComponent = (function () {
    function ItemsComponent(dataService, cartService, itemsService, route, appService) {
        this.dataService = dataService;
        this.cartService = cartService;
        this.itemsService = itemsService;
        this.route = route;
        this.appService = appService;
        this.products = [];
        this.leafyGreenVegetable = {};
        this.leafyGreenVegetables = [];
        this.isLoading = true;
        this.isEditing = false;
        this.originalData = [];
    }
    ItemsComponent.prototype.getItems = function (type) {
        var _this = this;
        if (this.itemsService.state['isInitialised']) {
            this.products = this.itemsService.state['data'][type]['items'];
            this.isLoading = false;
        }
        else {
            this.isLoading = true;
            this.itemsService.getItems().subscribe(function (data) {
                _this.processItems(data, _this.itemsService.state);
                _this.products = _this.itemsService.state['data'][type]['items'];
                _this.isLoading = false;
                _this.itemsService.state['isInitialised'] = true;
            }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
        }
    };
    ItemsComponent.prototype.processItems = function (items, state) {
        for (var i = 0; i < items.length; i++) {
            var currentItem = items[i];
            var type = currentItem['type'];
            state.data[type]['items'].push(currentItem);
        }
    };
    ItemsComponent.prototype.getLeafyGreenVegetables = function () {
        var _this = this;
        this.itemsService.getLeafyGreenVegetables().subscribe(function (data) {
            _this.products = data;
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    ItemsComponent.prototype.initCart = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.typeOfVegetables = params['id'];
            if (_this.typeOfVegetables) {
                _this.getItems(_this.typeOfVegetables);
            }
        });
    };
    ItemsComponent.prototype.ngOnInit = function () {
        this.initCart();
    };
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-items',
        template: __webpack_require__("../../../../../client/app/items/items.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/items.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _e || Object])
], ItemsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=items.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/items.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n\n.main-container {\n  padding-top: 100px; }\n\n.filters-wrapper {\n  position: relative;\n  z-index: 90000; }\n\nsort-filters {\n  position: relative;\n  z-index: 20; }\n\ncart {\n  position: absolute;\n  top: -23px;\n  right: -57px;\n  z-index: 99999999; }\n\nsearch-bar {\n  position: relative;\n  top: -8px; }\n\nshowcase {\n  position: relative;\n  top: -39px;\n  z-index: 10; }\n\n.sort-filters-wrapper {\n  position: relative; }\n\nurl-form {\n  position: absolute;\n  top: -55px; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  url-form {\n    position: fixed;\n    bottom: 20px;\n    left: 10px; }\n  filters {\n    position: fixed;\n    top: 44px;\n    right: -100%;\n    width: 100%;\n    height: 100%; }\n  .sort-filters-wrapper {\n    position: fixed;\n    top: 44px;\n    left: 0;\n    width: 100%;\n    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n    padding-top: 10px;\n    background: #5D4EF0;\n    z-index: 200; }\n  .main-container {\n    padding-top: 34px; }\n  search-bar {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    left: 0;\n    z-index: 9000; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DATA; });
var DATA = {
    "categories": [
        {
            "categori_id": 1,
            "name": "drinks"
        },
        {
            "categori_id": 2,
            "name": "lunch"
        },
        {
            "categori_id": 3,
            "name": "food"
        },
        {
            "categori_id": 4,
            "name": "sea"
        }
    ],
    "products": [
        {
            "id": 1,
            "name": "Lorem",
            "price": "60.000",
            "available": true,
            "best_seller": true,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 2,
            "name": "ipsum",
            "price": "20.000",
            "available": false,
            "best_seller": false,
            "categories": [
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 3,
            "name": "dolor",
            "price": "10.000",
            "available": true,
            "best_seller": true,
            "categories": [
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 4,
            "name": "sit",
            "price": "35.000",
            "available": false,
            "best_seller": false,
            "categories": [
                1,
                2
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 5,
            "name": "amet",
            "price": "12.000",
            "available": true,
            "best_seller": true,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 6,
            "name": "consectetur",
            "price": "120.000",
            "available": true,
            "best_seller": false,
            "categories": [
                1,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 7,
            "name": "adipiscing",
            "price": "50.000",
            "available": false,
            "best_seller": false,
            "categories": [
                1,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 8,
            "name": "elit",
            "price": "2000",
            "available": true,
            "best_seller": false,
            "categories": [
                1,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 9,
            "name": "Maecenas",
            "price": "150.000",
            "available": true,
            "best_seller": true,
            "categories": [
                2,
                4
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        },
        {
            "id": 10,
            "name": "eu",
            "price": "200.000",
            "available": false,
            "best_seller": true,
            "categories": [
                2,
                3
            ],
            "img": "http://lorempixel.com/200/100/food/",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu."
        }
    ]
};
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../client/app/items/product-thumbnail/product-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [class.unavailable]='!product.available'>\n  <div class=\"info\" >\n    <div class=\"img-wrapper\">\n      <img class=\"img\" [src]=\"product.imageForShowCase\">\n      <div class=\"img-placeholder\"></div>\n    </div>\n    <h5 class=\"title\">{{product.name}}</h5>\n    <p class=\"price\">$<span>{{product.price}}</span></p>\n    <div class=\"details\">\n      <div class=\"available\" *ngIf = 'product.available'>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-8-sm view-details-wrapper\">\n            <button type=\"button\" class=\"view\" (click)='onProductClick()'>View details</button>\n          </div>\n          <div class=\"col-4-sm add-cart-wrapper\">\n            <button type=\"button\" class=\"cart\" (click)=\"onAddToCart()\"><img src=\"../../assets/cart_primary.svg\" alt=\"\" /></button>\n          </div>\n        </div>\n      </div>\n      <div class=\"not-available\" *ngIf = '!product.available'>\n        <hr>\n        <p>Not available</p>\n      </div>\n    </div>\n    <!--span class=\"category-name\" *ngFor='let category of product.categories'>{{category}}</span-->\n    <div class=\"detail-view\" [class.active]='detailViewActive'>\n      <div class=\"bg\" [class.shown]='detailViewActive'></div>\n      <div class=\"info-wrapper\">\n        <p class=\"d-holder d-title\">{{product.name}}</p>\n        <p class=\"d-holder d-price\">$ {{product.price}}</p>\n        <p class=\"d-holder d-description\">{{product.type}}</p>\n        <p class=\"d-holder d-description\">{{product.nameForTelugu}}</p>\n        <p class=\"d-holder d-description\">{{product.nameForHindi}}</p>\n        <p class=\"d-holder d-description\">{{product.countPerKg}}</p>\n        <p class=\"d-holder d-description\">{{product.averageWeightPerPiece}}</p>\n        <p class=\"d-holder d-description\">{{product.description}}</p>\n      </div>\n      <button type=\"button\" class=\"hide-detail-btn\" (click)='onProductClick()'>Click to hide</button>\n    </div>\n  </div>\n  <div class=\"bestseller-badge\" [class.in-detailed]='detailViewActive' *ngIf = 'product.best_seller'>\n    <span class=\"star left\">&nbsp;</span>\n    <span class=\"txt\">Bestseller</span>\n    <span class=\"star right\">&nbsp;</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/items/product-thumbnail/product-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  border-radius: 5px;\n  box-shadow: 0 5px 5px;\n  position: relative;\n  text-align: center;\n  display: block;\n  background-color: white;\n  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n\n.add-cart-wrapper, .view-details-wrapper {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.view-details-wrapper {\n  position: relative; }\n  .view-details-wrapper:after {\n    content: \"\";\n    width: 1px;\n    display: block;\n    position: absolute;\n    height: 28px;\n    background-color: #5D4EF0;\n    right: -3px;\n    top: -4px;\n    opacity: 0.2; }\n\n.hide-detail-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  z-index: 20;\n  background: none;\n  border: none;\n  color: white;\n  opacity: 0.6;\n  font-size: 0.7em;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  -webkit-transform: translateY(15px);\n  transform: translateY(15px);\n  transition-delay: 1.2s; }\n  .hide-detail-btn:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n.img-wrapper {\n  height: 85px;\n  position: relative;\n  overflow: hidden; }\n\n.details {\n  padding-bottom: 7px; }\n  .details hr {\n    width: 90%;\n    height: 0;\n    border-top: 1px solid #5D4EF0; }\n  .details button {\n    background: none;\n    border: none;\n    cursor: pointer; }\n  .details .view:hover, .details .cart:hover {\n    opacity: 0.8; }\n  .details .view {\n    text-transform: uppercase;\n    color: #5D4EF0;\n    font-size: 0.85em;\n    font-weight: 500;\n    position: relative;\n    top: -1px;\n    left: -2px; }\n  .details .cart {\n    position: relative;\n    top: 2px; }\n  .details .not-available hr {\n    border-top: 1px solid #999999; }\n  .details .not-available p {\n    margin: 0;\n    margin-top: -7px;\n    position: relative;\n    top: 2px;\n    text-transform: uppercase;\n    font-size: 0.85em;\n    font-weight: 500;\n    padding-top: 5px;\n    padding-bottom: 3px; }\n\n.img-placeholder, .img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0; }\n\n.img-placeholder {\n  z-index: 3;\n  height: 100%;\n  background: #dddddd; }\n\n.detail-view {\n  position: absolute;\n  z-index: 30;\n  border-radius: 5px;\n  overflow: hidden;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n  .detail-view.active {\n    pointer-events: all; }\n    .detail-view.active .hide-detail-btn {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    .detail-view.active .info-wrapper {\n      opacity: 1; }\n    .detail-view.active .bg {\n      -webkit-transform: scale(232);\n      transform: scale(232); }\n    .detail-view.active .d-holder {\n      opacity: 1;\n      -webkit-transform: translate(0);\n      transform: translate(0);\n      transition: all 0.5s ease; }\n    .detail-view.active .d-title {\n      transition-delay: 0.4s; }\n    .detail-view.active .d-price {\n      transition-delay: 0.5s; }\n    .detail-view.active .d-description {\n      transition-delay: 0.6s; }\n  .detail-view .d-holder {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    transition: all 0.1s ease; }\n  .detail-view .d-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    margin-bottom: 0;\n    margin-top: 5px; }\n  .detail-view .d-price {\n    margin-top: -7px;\n    font-size: 0.9em; }\n  .detail-view .d-description {\n    font-size: 0.9em;\n    line-height: 1.4em; }\n  .detail-view .info-wrapper {\n    position: relative;\n    z-index: 30;\n    color: white;\n    text-align: left;\n    padding-left: 14px;\n    padding-right: 14px;\n    height: 90%;\n    overflow: scroll; }\n  .detail-view .bg {\n    position: absolute;\n    bottom: -9px;\n    left: 43px;\n    height: 3px;\n    width: 3px;\n    border-radius: 50%;\n    z-index: 20;\n    background: #5D4EF0;\n    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.info {\n  position: relative; }\n\n.unavailable {\n  opacity: 0.3; }\n\n.img {\n  z-index: 4;\n  height: auto;\n  background-color: #eeeeee; }\n\n.title {\n  font-size: 1em;\n  margin-top: 18px;\n  font-weight: 600;\n  margin-bottom: 3px; }\n\n.price {\n  margin-bottom: 10px;\n  color: #999999;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 0; }\n\n.bestseller-badge {\n  position: absolute;\n  top: -10px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n  .bestseller-badge .txt, .bestseller-badge .star {\n    transition: all 0.35s ease; }\n  .bestseller-badge .txt {\n    position: relative;\n    top: 4px; }\n  .bestseller-badge .star {\n    position: absolute;\n    top: 2px; }\n    .bestseller-badge .star.left {\n      left: 8px; }\n    .bestseller-badge .star.right {\n      right: 14px; }\n  .bestseller-badge.in-detailed {\n    box-shadow: 0 2px 7px transparent;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    top: 9px;\n    right: -80%;\n    background-color: #5D4EF0; }\n    .bestseller-badge.in-detailed .right, .bestseller-badge.in-detailed .txt {\n      opacity: 0; }\n    .bestseller-badge.in-detailed .left {\n      left: 5px;\n      top: 2px; }\n\n.sad-face {\n  border-radius: 50%;\n  background-color: #aaaaaa;\n  height: 90px;\n  width: 90px; }\n\n.category-name {\n  display: inline-block;\n  margin-right: 10px; }\n\n.star:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: white; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .detail-view.active .bg {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .hide-detail-btn {\n    height: 32px;\n    -webkit-transform: translateY(32px);\n    transform: translateY(32px); }\n  .wrapper {\n    margin-bottom: -22px; }\n  .img-wrapper {\n    height: 123px; }\n  .detail-view .bg {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    left: 0;\n    bottom: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  .detail-view .info-wrapper {\n    padding: 10px 25px;\n    height: 78%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/product-thumbnail/product-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_model__ = __webpack_require__("../../../../../client/app/items/shared/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductThumbnailComponent = (function () {
    function ProductThumbnailComponent(cartService) {
        this.cartService = cartService;
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
        this.detailViewActive = false;
    };
    ProductThumbnailComponent.prototype.onProductClick = function () {
        this.detailViewActive = !this.detailViewActive;
    };
    ProductThumbnailComponent.prototype.onAddToCart = function () {
        this.cartService.addProductToCart(this.product);
    };
    return ProductThumbnailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_product_model__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_product_model__["a" /* Product */]) === "function" && _a || Object)
], ProductThumbnailComponent.prototype, "product", void 0);
ProductThumbnailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-thumbnail',
        template: __webpack_require__("../../../../../client/app/items/product-thumbnail/product-thumbnail.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/product-thumbnail/product-thumbnail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object])
], ProductThumbnailComponent);

var _a, _b;
//# sourceMappingURL=product-thumbnail.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  holi\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/items/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
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

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../client/app/items/product/product.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../client/app/items/shared/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.model.js.map

/***/ }),

/***/ "../../../../../client/app/items/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-4\" *ngFor = 'let product of products'>\n    <product-thumbnail [product] = 'product'></product-thumbnail>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/items/showcase/showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "product-thumbnail {\n  padding-left: 10px;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/items/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseComponent = (function () {
    function ShowcaseComponent(cartService) {
        this.cartService = cartService;
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    return ShowcaseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ShowcaseComponent.prototype, "products", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShowcaseComponent.prototype, "itemType", void 0);
ShowcaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'showcase',
        template: __webpack_require__("../../../../../client/app/items/showcase/showcase.component.html"),
        styles: [__webpack_require__("../../../../../client/app/items/showcase/showcase.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object])
], ShowcaseComponent);

var _a;
//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../client/app/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  location works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
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

var LocationComponent = (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-location',
        template: __webpack_require__("../../../../../client/app/location/location.component.html"),
        styles: [__webpack_require__("../../../../../client/app/location/location.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocationComponent);

//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../client/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Login</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\"><i class=\"fa fa-sign-in\"></i> Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth, formBuilder, router, toast) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../client/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../client/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../client/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-logout',
        template: '',
        styles: ['']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav-main\" class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a routerLink=\"/\" class=\"navbar-brand\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">WebSiteName</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a routerLink=\"/admin\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.isAdmin\">\n            <i class=\"fa fa-lock\"></i> Admin\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/items\" routerLinkActive=\"active\">\n            <i class=\"fa fa-lock\"></i> items\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/addresses\" routerLinkActive=\"active\">\n            <i class=\"fa fa-lock\"></i> Addresses\n          </a>\n        </li>\n        \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n            <i class=\"fa fa-sign-in\"></i> Login\n          </a>  \n        </li>\n        <li *ngIf=\"!showCart\">\n          <cart></cart>\n        </li>\n        <li>\n          <a routerLink=\"/account\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n            <i class=\"fa fa-user\"></i> Account ({{auth.currentUser.username}})\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/orders\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n            <i class=\"fa fa-user\"></i> Orders\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/logout\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\n            <i class=\"fa fa-sign-out\"></i> Logout\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/register\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\n            <i class=\"fa fa-sign-out\"></i> Register\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../client/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__items_cart_service__ = __webpack_require__("../../../../../client/app/items/cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(router, auth, cartService) {
        this.router = router;
        this.auth = auth;
        this.cartService = cartService;
        this.showCart = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openCart = function (event) {
        // this.router.navigate(['/cart']);
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../client/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__items_cart_service__["a" /* CartService */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../client/app/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<button class=\"btn btn-sm btn-warning\" [disabled]=\"!showLocationButton\" (click)=\"getLocationData()\">Use My Current Location</button>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Addresses ({{addresses.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Select Address to use</th>\n          <th>Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"addresses.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no addresses in the DB. Add a new address below.</td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let address of addresses\">\n          <td *ngIf=\"address._id\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">              \n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              NA\n            </div>\n          </td>\n          <td>{{address.name}}</td>\n          <td *ngIf=\"address._id\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n              <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              <div>Address not in range of Delivery which is ({{appService.shopDetails.validDistanceAllowedInKm}}Km)</div>\n            </div>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editAddress(address)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"address.name\" placeholder=\"Name\" required>\n              </div>\n               <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new address</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addAddressForm\" (ngSubmit)=\"addAddress()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addAddressForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_address_service__ = __webpack_require__("../../../../../client/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_orders_service__ = __webpack_require__("../../../../../client/app/services/orders.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrdersComponent = (function () {
    function OrdersComponent(addressService, orderService, appService, formBuilder, http, toast, router) {
        this.addressService = addressService;
        this.orderService = orderService;
        this.appService = appService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.router = router;
        this.address = {};
        this.addresses = [];
        this.isLoading = true;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        this.showLocationDataFlag = false;
        this.locationData = '';
        this.addressSelected = '';
        this.locationLoading = false;
        this.showLocationButton = true;
        this.isAddressValidInDistance = false;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.addAddressForm = this.formBuilder.group({
            name: this.name,
            customerDetails: this.customerDetails,
            items: this.items,
            cartTotal: this.cartTotal,
            deliveryDetails: this.deliveryDetails
        });
        this.getAddresses();
    };
    OrdersComponent.prototype.getAddresses = function () {
        var _this = this;
        this.addressService.getAddresses().subscribe(function (data) {
            _this.addresses = data;
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    OrdersComponent.prototype.addAddress = function () {
        var _this = this;
        this.addressService.addAddress(this.addAddressForm.value).subscribe(function (res) {
            var newAddress = res.json();
            _this.addresses.push(newAddress);
            _this.addAddressForm.reset();
            _this.toast.setMessage('Address added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    OrdersComponent.prototype.addCurrentAddress = function (address) {
        var _this = this;
        this.addressService.addAddress(address).subscribe(function (res) {
            var newAddress = res.json();
            _this.addresses.push(newAddress);
            _this.addAddressForm.reset();
            _this.toast.setMessage('Address added successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    OrdersComponent.prototype.enableEditing = function (address) {
        this.isEditing = true;
        this.address = address;
    };
    OrdersComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.address = {};
        this.toast.setMessage('Address editing cancelled.', 'warning');
    };
    OrdersComponent.prototype.editAddress = function (address) {
        var _this = this;
        this.addressService.editAddress(address).subscribe(function (res) {
            _this.isEditing = false;
            _this.address = address;
            _this.toast.setMessage('Address edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    OrdersComponent.prototype.deleteAddress = function (address) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            this.addressService.deleteAddress(address).subscribe(function (res) {
                var pos = _this.addresses.map(function (elem) { return elem._id; }).indexOf(address._id);
                _this.addresses.splice(pos, 1);
                _this.toast.setMessage('Address deleted successfully.', 'success');
            }, function (error) { return console.log(error); });
        }
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-orders',
        template: __webpack_require__("../../../../../client/app/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../client/app/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_orders_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_orders_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _g || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../client/app/payment-checkout/payment-checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/payment-checkout/payment-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Payumoney Payment Gateway</h1>\n    <h3> Rs {{amount}}</h3>\n    <form id=\"paymentForm\" action='https://test.payu.in/_payment' method='post'>\n        <input type=\"hidden\" name=\"key\" value=\"{{mkey}}\" />\n        <input type=\"hidden\" name=\"txnid\" value=\"{{txnid}}\" />\n        <input type=\"hidden\" name=\"amount\" value=\"{{amount}}\" />\n        <input type=\"hidden\" name=\"productinfo\" value=\"{{productInfo}}\" />\n        <input type=\"hidden\" name=\"firstname\" value=\"{{firstName}}\" />\n        <input type=\"hidden\" name=\"udf1\" value={{id}} />\n        <input type=\"hidden\" name=\"email\" value=\"{{email}}\" />\n        <input type=\"hidden\" name=\"phone\" value=\"{{phone}}\" />\n        <input type=\"hidden\" name=\"lastname\" value=\"{{lastName}}\" />\n        <input type=\"hidden\" name=\"surl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"furl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"hash\" id=\"hash\" value=\"{{hash}}\">\n        <div class=\"pay-now-button-outer\">\n            <button class=\"btn btn-primary fontBold\" (click)=\"presubmit()\" type=\"button\">PAY NOW</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../client/app/payment-checkout/payment-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaymentCheckoutComponent = (function () {
    function PaymentCheckoutComponent(http) {
        this.http = http;
        this.message = 'Everyone come and see how good I look!';
        this.mkey = 'gtKFFx';
        this.productInfo = 'Verification order';
        this.txnid = this.makeid();
        this.amount = 234.99;
        this.id = '2222222';
        this.email = 'test@test.com';
        this.phone = 9999999999;
        this.lastName = 'test';
        this.firstName = 'fname';
        this.surl = "http://localhost:3000/api/PaymentStatus";
        this.hash = '';
        this.isLoading = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    PaymentCheckoutComponent.prototype.ngOnInit = function () {
    };
    PaymentCheckoutComponent.prototype.makeid = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    PaymentCheckoutComponent.prototype.makeHash = function () {
        var data = { preHashString: this.mkey + '|' + this.txnid + '|' + this.amount + '|' + this.productInfo + '|' + this.firstName + '|' + this.email + '|' + this.id + '||||||||||' };
        var url = '/api/createHash';
        return this.http.post(url, data, this.options);
    };
    PaymentCheckoutComponent.prototype.presubmit = function () {
        var _this = this;
        this.makeHash().subscribe(function (data) {
            console.log("Success");
            if (data.status == 200) {
                document.getElementById('hash')["value"] = JSON.parse(data["_body"])['hash'];
                debugger;
                $('#paymentForm').submit();
            }
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return PaymentCheckoutComponent;
}());
PaymentCheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment-checkout',
        template: __webpack_require__("../../../../../client/app/payment-checkout/payment-checkout.component.html"),
        styles: [__webpack_require__("../../../../../client/app/payment-checkout/payment-checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaymentCheckoutComponent);

var _a;
//# sourceMappingURL=payment-checkout.component.js.map

/***/ }),

/***/ "../../../../../client/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\">\n  <h4 class=\"card-header\">Register</h4>\n  <div class=\"card-block\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n      <div class=\"input-group\" [ngClass]=\"setClassUsername()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" placeholder=\"Username\" autofocus>\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-key\"></i></span>\n        <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" formControlName=\"role\">\n          <option value=\"\" selected disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!registerForm.valid\"><i class=\"fa fa-user-plus\"></i> Register</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, router, toast, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toast = toast;
        this.userService = userService;
        this.username = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z0-9_-\\s]*')]);
        this.email = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(100)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6)]);
        this.role = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            username: this.username,
            email: this.email,
            password: this.password,
            role: this.role
        });
    };
    RegisterComponent.prototype.setClassUsername = function () {
        return { 'has-danger': !this.username.pristine && !this.username.valid };
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.toast.setMessage('you successfully registered!', 'success');
            _this.router.navigate(['/login']);
        }, function (error) { return _this.toast.setMessage('email already exists', 'danger'); });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../client/app/register/register.component.html"),
        styles: [__webpack_require__("../../../../../client/app/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../client/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../client/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__("../../../../../client/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../client/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__ = __webpack_require__("../../../../../client/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_account_component__ = __webpack_require__("../../../../../client/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__ = __webpack_require__("../../../../../client/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__("../../../../../client/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__checkout_checkout_component__ = __webpack_require__("../../../../../client/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../client/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cats_cats_component__ = __webpack_require__("../../../../../client/app/cats/cats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__items_items_component__ = __webpack_require__("../../../../../client/app/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__addresses_addresses_component__ = __webpack_require__("../../../../../client/app/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__orders_orders_component__ = __webpack_require__("../../../../../client/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_login_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_guard_admin_service__ = __webpack_require__("../../../../../client/app/services/auth-guard-admin.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_9__checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_12__items_items_component__["a" /* ItemsComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_14__orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'items/:id', component: __WEBPACK_IMPORTED_MODULE_12__items_items_component__["a" /* ItemsComponent */] },
    { path: 'cats', component: __WEBPACK_IMPORTED_MODULE_11__cats_cats_component__["a" /* CatsComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_5__logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'addresses', component: __WEBPACK_IMPORTED_MODULE_13__addresses_addresses_component__["a" /* AddressesComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_6__account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__services_auth_guard_login_service__["a" /* AuthGuardLogin */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_7__admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__services_auth_guard_admin_service__["a" /* AuthGuardAdmin */]] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/notfound' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], RoutingModule);

//# sourceMappingURL=routing.module.js.map

/***/ }),

/***/ "../../../../../client/app/services/address.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressService = (function () {
    function AddressService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    AddressService.prototype.getAddresses = function () {
        return this.http.get('/api/address').map(function (res) { return res.json(); });
    };
    AddressService.prototype.addAddress = function (cat) {
        return this.http.post('/api/address', JSON.stringify(cat), this.options);
    };
    AddressService.prototype.editAddress = function (cat) {
        return this.http.put("/api/address/" + cat._id, JSON.stringify(cat), this.options);
    };
    AddressService.prototype.deleteAddress = function (cat) {
        return this.http.delete("/api/address/" + cat._id, this.options);
    };
    return AddressService;
}());
AddressService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AddressService);

var _a;
//# sourceMappingURL=address.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-admin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardAdmin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    return AuthGuardAdmin;
}());
AuthGuardAdmin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardAdmin);

var _a, _b;
//# sourceMappingURL=auth-guard-admin.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth-guard-login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    return AuthGuardLogin;
}());
AuthGuardLogin = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardLogin);

var _a, _b;
//# sourceMappingURL=auth-guard-login.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loggedIn = false;
        this.isAdmin = false;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', username: '', role: '' };
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', username: '', role: '' };
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.username = decodedUser.username;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/cat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatService = (function () {
    function CatService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    CatService.prototype.getCats = function () {
        return this.http.get('/api/cats').map(function (res) { return res.json(); });
    };
    CatService.prototype.countCats = function () {
        return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
    };
    CatService.prototype.addCat = function (cat) {
        return this.http.post('/api/cat', JSON.stringify(cat), this.options);
    };
    CatService.prototype.getCat = function (cat) {
        return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
    };
    CatService.prototype.editCat = function (cat) {
        return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
    };
    CatService.prototype.deleteCat = function (cat) {
        return this.http.delete("/api/cat/" + cat._id, this.options);
    };
    return CatService;
}());
CatService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], CatService);

var _a;
//# sourceMappingURL=cat.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemsService = (function () {
    function ItemsService(http) {
        this.http = http;
        this.isLoading = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        this.products = [];
        this.state = {
            'isInitialised': false,
            'data': {
                'exotic-vegetables': {
                    'items': []
                },
                'leafy-green-vegetables': {
                    'items': []
                },
                'fresh-fruits': {
                    'items': []
                },
                'fresh-vegetables': {
                    'items': []
                }
            }
        };
    }
    ItemsService.prototype.processItems = function (items) {
        for (var i = 0; i < items.length; i++) {
            var currentItem = items[i];
            var type = currentItem.type;
            this.state.data[type].push(currentItem);
        }
    };
    ItemsService.prototype.isCartValid = function (leafyGreenVegetables) {
        return this.http.post('/api/items/isCartValid', JSON.stringify(leafyGreenVegetables), this.options).map(function (res) { return res.json(); });
    };
    ItemsService.prototype.getItems = function () {
        return this.http.get('/api/items').map(function (res) { return res.json(); });
    };
    ItemsService.prototype.getItemsByType = function (type) {
        return this.http.get('/api/items' + type).map(function (res) { return res.json(); });
    };
    ItemsService.prototype.getLeafyGreenVegetables = function () {
        return this.http.get('/api/items').map(function (res) { return res.json(); });
    };
    ItemsService.prototype.countLeafyGreenVegetables = function () {
        return this.http.get('/api/items/count').map(function (res) { return res.json(); });
    };
    ItemsService.prototype.addLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.post('/api/items', JSON.stringify(leafyGreenVegetables), this.options);
    };
    ItemsService.prototype.getLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.get("/api/items/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
    };
    ItemsService.prototype.editLeafyGreenVegetable = function (leafyGreenVegetables) {
        debugger;
        return this.http.put("/api/items/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
    };
    ItemsService.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetables) {
        return this.http.delete("/api/items/" + leafyGreenVegetables._id, this.options);
    };
    return ItemsService;
}());
ItemsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ItemsService);

var _a;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/local-storage/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = (function () {
    function LocalStorageService(_appService) {
        this._appService = _appService;
        this.nameForLocalStorage = '';
        this.nameForLocalStorage = this._appService.currentUser.tokenForLocalStorage;
    }
    LocalStorageService.prototype.setCartValue = function (state) {
        localStorage.setItem(this.nameForLocalStorage, JSON.stringify(state));
    };
    LocalStorageService.prototype.getCartValue = function () {
        if (localStorage.getItem(this.nameForLocalStorage) != null) {
            return JSON.parse(localStorage.getItem(this.nameForLocalStorage));
        }
        else {
            return null;
        }
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], LocalStorageService);

var _a;
//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderService = (function () {
    function OrderService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    OrderService.prototype.getOrders = function () {
        return this.http.get('/api/order').map(function (res) { return res.json(); });
    };
    OrderService.prototype.countOrders = function () {
        return this.http.get('/api/order/count').map(function (res) { return res.json(); });
    };
    OrderService.prototype.addOrder = function (leafyGreenVegetables) {
        return this.http.post('/api/order', JSON.stringify(leafyGreenVegetables), this.options);
    };
    OrderService.prototype.getOrder = function (leafyGreenVegetables) {
        return this.http.get("/api/order/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
    };
    OrderService.prototype.editOrder = function (leafyGreenVegetables) {
        return this.http.put("/api/order/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
    };
    OrderService.prototype.deleteOrder = function (leafyGreenVegetables) {
        return this.http.delete("/api/order/" + leafyGreenVegetables._id, this.options);
    };
    return OrderService;
}());
OrderService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], OrderService);

var _a;
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/tabs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
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

var TabsService = (function () {
    function TabsService() {
    }
    return TabsService;
}());
TabsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TabsService);

//# sourceMappingURL=tabs.service.js.map

/***/ }),

/***/ "../../../../../client/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users').map(function (res) { return res.json(); });
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count').map(function (res) { return res.json(); });
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/user', JSON.stringify(user), this.options);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/user/" + user._id, this.options);
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"condition\">\n  <h4 class=\"card-header\">Loading...</h4>\n  <div class=\"card-block text-xs-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-3x\"></i>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
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

var LoadingComponent = (function () {
    function LoadingComponent() {
    }
    return LoadingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "condition", void 0);
LoadingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__("../../../../../client/app/shared/loading/loading.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/loading/loading.component.scss")]
    })
], LoadingComponent);

//# sourceMappingURL=loading.component.js.map

/***/ }),

/***/ "../../../../../client/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__ = __webpack_require__("../../../../../client/app/shared/loading/loading.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        exports: [
            // Shared Modules
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            // Shared Components
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loading_loading_component__["a" /* LoadingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__toast_toast_component__["a" /* ToastComponent */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message.body\" class=\"alert alert-{{message.type}} alert-dismissible\" role=\"alert\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <strong>Message:</strong> {{message.body}}\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\n  z-index: 999;\n  position: fixed;\n  bottom: 15px;\n  left: 25%;\n  width: 50%;\n  opacity: 0.9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/shared/toast/toast.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
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

var ToastComponent = (function () {
    function ToastComponent() {
        this.message = { body: '', type: '' };
    }
    ToastComponent.prototype.setMessage = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.message.body = body;
        this.message.type = type;
        setTimeout(function () { _this.message.body = ''; }, time);
    };
    return ToastComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ToastComponent.prototype, "message", void 0);
ToastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__("../../../../../client/app/shared/toast/toast.component.html"),
        styles: [__webpack_require__("../../../../../client/app/shared/toast/toast.component.scss")]
    })
], ToastComponent);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n\t<li [ngClass]=\"{'active': (appService.selectedTab=='exotic-vegetables')}\" (click)=\"openTab($event, 'exotic-vegetables')\"><a>exotic-vegetables</a></li>\n\t<li [ngClass]=\"{'active': (appService.selectedTab=='leafy-green-vegetables')}\" (click)=\"openTab($event, 'leafy-green-vegetables')\"><a>leafy-vegetables</a></li>\n\t<li [ngClass]=\"{'active': (appService.selectedTab=='fresh-fruits')}\" (click)=\"openTab($event, 'fresh-fruits')\"><a>fresh-fruits</a></li>\n\t<li [ngClass]=\"{'active': (appService.selectedTab=='fresh-vegetables')}\" (click)=\"openTab($event, 'fresh-vegetables')\"><a>fresh-vegetables</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../client/app/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = (function () {
    function TabsComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.appService.selectedTab = 'exotic-vegetables';
        this.router.navigate(['items', 'exotic-vegetables']);
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.openTab = function (event, option) {
        console.log(option);
        this.appService.selectedTab = option;
        this.router.navigate(['items', option]);
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__("../../../../../client/app/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../client/app/tabs/tabs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object])
], TabsComponent);

var _a, _b;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../client/environments/environment.ts":
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

/***/ "../../../../../client/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map