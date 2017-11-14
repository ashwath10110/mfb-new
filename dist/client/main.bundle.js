webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./account": [
		"../../../../../src/app/account/index.ts",
		1
	],
	"./admin": [
		"../../../../../src/app/admin/index.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/account/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_reset_component__ = __webpack_require__("../../../../../src/app/account/password/reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_logout_component__ = __webpack_require__("../../../../../src/app/account/login/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__ = __webpack_require__("../../../../../src/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__ = __webpack_require__("../../../../../src/app/account/cp/cp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__ = __webpack_require__("../../../../../src/app/account/profile/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__ = __webpack_require__("../../../../../src/app/account/password/forgot.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import { LoginComponent } from './login/login.component';




var routes = [
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */],
        data: { title: 'Login' }
    },
    {
        path: 'logout', component: __WEBPACK_IMPORTED_MODULE_7__login_logout_component__["a" /* LogoutComponent */],
        data: { title: 'Logout' }
    },
    {
        path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__["a" /* CpComponent */],
        data: { title: 'Change Password' }, canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__["a" /* AuthGuard */]]
    },
    {
        path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__["a" /* ForgotPasswordComponent */],
        data: { title: 'Forgot Password' }
    },
    {
        path: 'reset-password/:id', component: __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* ResetPasswordComponent */],
        data: { title: 'Reset Password' }
    },
    {
        path: 'edit-profile', component: __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */],
        data: { title: 'Edit Profile' }, canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_guards_auth_guard__["a" /* AuthGuard */]]
    },
];
var AccountModule = (function () {
    function AccountModule() {
    }
    return AccountModule;
}());
AccountModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__["a" /* LoginModalComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_11__login_login_modal_component__["a" /* LoginModalComponent */], __WEBPACK_IMPORTED_MODULE_12__cp_cp_component__["a" /* CpComponent */], __WEBPACK_IMPORTED_MODULE_7__login_logout_component__["a" /* LogoutComponent */], __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_13__profile_detail_component__["a" /* DetailComponent */], __WEBPACK_IMPORTED_MODULE_14__password_forgot_component__["a" /* ForgotPasswordComponent */], __WEBPACK_IMPORTED_MODULE_4__password_reset_component__["a" /* ResetPasswordComponent */]],
    })
], AccountModule);

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ "../../../../../src/app/account/cp/cp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cp-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.cp{width: 400px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/cp/cp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content cp-container\">\r\n  <md-card class=\"cp\">\r\n    <md-toolbar class=\"md-accent\">\r\n      <h3 class=\"md-toolbar-tools\">Change Password</h3>\r\n    </md-toolbar>\r\n    <br/>\r\n    <form #f=\"ngForm\" (ngSubmit)=\"cp(f.value)\" novalidate autocomplete=\"off\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n      <md-input-container>\r\n        <input mdInput type=\"password\" #oldPassword=\"ngModel\" name=\"oldPassword\" ngModel required minlength=\"3\" placeholder=\"Current Password\"\r\n          autofocus />\r\n      </md-input-container>\r\n      <div *ngIf=\"oldPassword.errors && (oldPassword.dirty || oldPassword.touched)\" class=\"alert\">\r\n        <div [hidden]=\"!oldPassword.errors.required\">\r\n          Password is required\r\n        </div>\r\n        <div [hidden]=\"!oldPassword.errors.minlength\">\r\n          Password must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <md-input-container>\r\n        <input mdInput type=\"password\" #newPassword=\"ngModel\" name=\"newPassword\" ngModel required minlength=\"3\" placeholder=\"New Password\"\r\n        />\r\n      </md-input-container>\r\n      <div *ngIf=\"newPassword.errors && (newPassword.dirty || newPassword.touched)\" class=\"alert\">\r\n        <div [hidden]=\"!newPassword.errors.required\">\r\n          New Password is required\r\n        </div>\r\n        <div [hidden]=\"!newPassword.errors.minlength\">\r\n          Password must be at least 3 characters long.\r\n        </div>\r\n      </div>\r\n      <submit-button [loading]=\"loading\" [form]=\"f\" icon=\"lock\" text=\"Change Password\"></submit-button>\r\n    </form>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/cp/cp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CpComponent = (function () {
    function CpComponent(auth, snack, router) {
        this.auth = auth;
        this.snack = snack;
        this.router = router;
        this.loading = false;
        this.submitted = false;
    }
    CpComponent.prototype.ngOnInit = function () { };
    CpComponent.prototype.cp = function (form) {
        var _this = this;
        this.loading = true;
        this.submitted = true;
        if (form) {
            this.auth.changePassword(form).subscribe(function (data) { return _this.success(); }, function (err) {
                err = err.json();
                _this.snack.open(err.message, 'OK', { duration: 2000 });
                _this.loading = false;
            });
        }
        else {
            this.snack.open('Blank password!', 'OK', { duration: 2000 });
            this.loading = false;
        }
    };
    CpComponent.prototype.success = function () {
        this.loading = false;
        this.router.navigateByUrl("/admin/dashboard");
        this.snack.open('Password change successful.', 'OK', { duration: 2000 });
    };
    return CpComponent;
}());
CpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'account-cp',
        template: __webpack_require__("../../../../../src/app/account/cp/cp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/cp/cp.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CpComponent);

var _a, _b, _c;
//# sourceMappingURL=cp.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/login-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginModalComponent = (function () {
    function LoginModalComponent(userService, auth, router, route, snack, _fb, dialogRef) {
        this.userService = userService;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this._fb = _fb;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.errors = {};
    }
    LoginModalComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['admin@codenx.com', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            password: ['codenx', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
        this.signupForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    };
    LoginModalComponent.prototype.gotoForgotPassword = function (url) {
        this.router.navigateByUrl('/account/forgot-password?email=' + url);
    };
    LoginModalComponent.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.user = {};
        this.auth.login(form)
            .subscribe(function (result) {
            if (result === true) {
                _this.loading = false;
                _this.dialogRef.close(true);
            }
            else {
                _this.errMessage = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (err) { return _this.error(err, 'login'); });
    };
    LoginModalComponent.prototype.signup = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.userService.register(form)
            .subscribe(function (result) {
            _this.loading = false;
            _this.signupForm = _this._fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
                name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            });
            _this.snack.open('User registration successful', 'OK', { duration: 2000 });
        }, function (err) { return _this.error(err, 'signup'); });
    };
    LoginModalComponent.prototype.error = function (err, from) {
        this.loading = false;
        if (err.status === 504) {
            this.snack.open(err.statusText, 'OK', { duration: 2000 });
            return;
        }
        err = err.json();
        if (!err.message) {
            this.errMessage = err;
            return;
        }
        var msg = err.message;
        if (err.email)
            msg = err.email.message;
        if (msg === 'Unexpected token E in JSON at position 0')
            msg = 'Could not communicate to api server';
        (from === 'login') ? this.errMessage = msg : this.signupErrMessage = msg;
        this.snack.open(msg, 'OK', { duration: 2000 });
    };
    return LoginModalComponent;
}());
LoginModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'account-login-modal',
        template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MdDialogRef */]) === "function" && _g || Object])
], LoginModalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=login-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\r\n  max-width:700px;\r\n}\r\n.pointer{\r\n  cursor: pointer;\r\n}\r\n.mat-dialog-container{\r\n  padding:0px !important;\r\n}\r\n.muted{\r\n  font-size:9px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row\">\r\n  <md-card class=\"item\">\r\n    <button md-button md-icon-button (click)=\"dialogRef.close()\" class=\"close\"><md-icon>close</md-icon></button>\r\n    <md-tab-group class=\"row\">\r\n      <md-tab label=\"Login\">\r\n        <div class=\"col center\">\r\n          <!-- remove in production -->\r\n          <p class=\"muted\">User account is <code>user@codenx.com</code> / <code>codenx</code><br/> Vendor account is <code>vendor@codenx.com</code>            / <code>codenx</code><br/> Admin account is <code>admin@codenx.com</code> / <code>codenx</code><br/>\r\n          </p>\r\n          <!-- /remove in production -->\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\" autocomplete=\"false\" novalidate>\r\n            <section class=\"section\" layout=\"column\">\r\n              <!--<div class=\"help-block\" [hidden]=\"!errMessage\">\r\n                {{ errMessage }}\r\n              </div>-->\r\n              <div>\r\n                <md-input-container style=\"width:100%\">\r\n                  <input mdInput type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" mongoose-error />\r\n                </md-input-container>\r\n                <div [hidden]=\"loginForm.get('email').valid || (loginForm.get('email').pristine && !submitted)\">\r\n                  <div *ngIf=\"loginForm.get('email').hasError('required')\" class=\"error\">\r\n                    Email is required\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('email').hasError('minlength')\" class=\"error\">\r\n                    Email must be minimum 3 characters\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('email').hasError('pattern')\" class=\"error\">\r\n                    Email address is invalid.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div>\r\n                <md-input-container>\r\n                  <input mdInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" />\r\n                </md-input-container>\r\n                <div [hidden]=\"loginForm.get('password').valid || (loginForm.get('password').pristine && !submitted)\">\r\n                  <div *ngIf=\"loginForm.get('password').hasError('required')\" class=\"error\">\r\n                    Password is required\r\n                  </div>\r\n                  <div *ngIf=\"loginForm.get('password').hasError('minlength')\" class=\"error\">\r\n                    Password must be minimum 3 characters\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"pointer\"><a class=\"err\" (click)=\"gotoForgotPassword(loginForm.value.email)\">+ Forgot Password</a></p>\r\n            </section>\r\n            <submit-button [loading]=\"loading\" [form]=\"loginForm\" icon=\"lock\" text=\"Secure Login\"></submit-button>\r\n          </form>\r\n        </div>\r\n\r\n      </md-tab>\r\n      <md-tab label=\"Signup\">\r\n        <div class=\"col center\">\r\n          <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\" autocomplete=\"false\" novalidate>\r\n            <!--<div class=\"help-block\" [hidden]=\"!signupErrMessage\">\r\n              {{ signupErrMessage }}\r\n            </div>-->\r\n            <div>\r\n              <md-input-container style=\"width:100%\">\r\n                <input mdInput type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" />\r\n              </md-input-container>\r\n              <div [hidden]=\"signupForm.get('name').valid || (signupForm.get('name').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('name').hasError('required')\" class=\"error\">\r\n                  Name is required\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div>\r\n              <md-input-container style=\"width:100%\">\r\n                <input mdInput type=\"email\" name=\"email\" formControlName=\"email\" mongoose-error placeholder=\"Email\" />\r\n              </md-input-container>\r\n              <div [hidden]=\"signupForm.get('email').valid || (signupForm.get('email').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('email').hasError('required')\" class=\"error\">\r\n                  Email is required\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('email').hasError('minlength')\" class=\"error\">\r\n                  Email must be minimum 3 characters\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('email').hasError('pattern')\" class=\"error\">\r\n                  Email address is invalid.\r\n                </div>\r\n              </div>\r\n              <!--<div class=\"help-block\" [hidden]=\"!errMessage\" class=\"alert alert-danger\">\r\n                  {{ errMessage }}\r\n                </div>-->\r\n            </div>\r\n            <div>\r\n              <md-input-container>\r\n                <input mdInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" />\r\n              </md-input-container>\r\n              <div [hidden]=\"signupForm.get('password').valid || (signupForm.get('password').pristine && !submitted)\">\r\n                <div *ngIf=\"signupForm.get('password').hasError('required')\" class=\"error\">\r\n                  Password is required\r\n                </div>\r\n                <div *ngIf=\"signupForm.get('password').hasError('minlength')\" class=\"error\">\r\n                  Password must be minimum 3 characters\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <submit-button [loading]=\"loading\" [form]=\"signupForm\" icon=\"lock\" text=\"Signup\"></submit-button>\r\n          </form>\r\n        </div>\r\n      </md-tab>\r\n    </md-tab-group>\r\n    <md-card-actions>\r\n      <br/>\r\n      <oauth-buttons classes=\"btn-block\"></oauth-buttons>\r\n    </md-card-actions>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(auth, router, route, snack, _fb, userService) {
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this._fb = _fb;
        this.userService = userService;
        this.loading = false;
        this.errors = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._fb.group({
            email: ['admin@codenx.com', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            password: ['codenx', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
        this.signupForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    };
    LoginComponent.prototype.gotoForgotPassword = function (url) {
        this.router.navigateByUrl('/account/forgot-password?email=' + url);
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.user = {};
        this.auth.login({ email: form.email, password: form.password })
            .subscribe(function (result) {
            if (result === true) {
                _this.loading = false;
                _this.router.navigate([_this.route.snapshot.params['returnUrl'] || '/']);
            }
            else {
                _this.errMessage = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (err) { return _this.error(err, 'login'); });
    };
    LoginComponent.prototype.signup = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.auth.register(form)
            .subscribe(function (result) {
            _this.loading = false;
            _this.signupForm = _this._fb.group({
                email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
                password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
                name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            });
            _this.snack.open('User registration successful', 'OK', { duration: 2000 });
            _this.router.navigate([_this.route.snapshot.params['returnUrl'] || '/']);
        }, function (err) { return _this.error(err, 'signup'); });
    };
    LoginComponent.prototype.error = function (err, from) {
        this.loading = false;
        if (err.status === 504) {
            this.snack.open(err.statusText, 'OK', { duration: 2000 });
            return;
        }
        err = err.json();
        if (!err.message) {
            this.errMessage = err;
            return;
        }
        var msg = err.message;
        if (err.email)
            msg = err.email.message;
        if (msg === 'Unexpected token E    JSON at position 0')
            msg = 'Could not communicate to api server';
        (from === 'login') ? this.errMessage = msg : this.signupErrMessage = msg;
        this.snack.open(msg, 'OK', { duration: 2000 });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'account-login',
        template: __webpack_require__("../../../../../src/app/account/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_user_service__["a" /* UserService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/login/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
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
    function LogoutComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        var vm = this;
        this.auth.logout();
        // vm.router.navigateByUrl("/");
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'account-logout',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LogoutComponent);

var _a, _b;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/password/forgot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cp-container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.cp{width: 250px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/password/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row center\">\r\n  <div class=\"column center\">\r\n    <md-card>\r\n      <md-toolbar class=\"md-accent\">\r\n        <h3 class=\"md-toolbar-tools\">Forgot Password</h3>\r\n      </md-toolbar>\r\n      <br/>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"forgot(form.value)\" autocomplete=\"false\" novalidate>\r\n        <section class=\"section\" layout=\"column\">\r\n          <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n            {{ errMessage?.message }}\r\n          </div>\r\n          <div>\r\n            <md-input-container>\r\n              <input mdInput type=\"email\" name=\"email\" formControlName=\"email\" placeholder=\"Email\" autofocus />\r\n            </md-input-container>\r\n            <div [hidden]=\"form.get('email').valid || (form.get('email').pristine && !submitted)\">\r\n              <div *ngIf=\"form.get('email').hasError('required')\" class=\"error\">\r\n                Email is required\r\n              </div>\r\n              <div *ngIf=\"form.get('email').hasError('minlength')\" class=\"error\">\r\n                Email must be minimum 3 characters\r\n              </div>\r\n              <div *ngIf=\"form.get('email').hasError('pattern')\" class=\"error\">\r\n                Email address is invalid.\r\n              </div>\r\n            </div>\r\n            <submit-button [form]=\"form\" text=\"Send Reset Password Email\" icon=\"email\"></submit-button>\r\n          </div>\r\n        </section>\r\n      </form>\r\n    </md-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/password/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(fb, crud, auth, router, route, snack) {
        this.fb = fb;
        this.crud = crud;
        this.auth = auth;
        this.router = router;
        this.route = route;
        this.snack = snack;
        this.errors = {};
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var email = this.route.queryParams['value'].email;
        this.form = this.fb.group({
            email: [email, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(this.EMAIL_REGEXP)]],
        });
    };
    ForgotPasswordComponent.prototype.forgot = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.crud.post('users/forgot', form, false).subscribe(function (data) {
            _this.snack.open(data.message, 'OK', { duration: 2000 });
            _this.errMessage = data;
            _this.loading = false;
        }, function (err) {
            _this.snack.open(err, 'OK', { duration: 2000 });
            _this.errMessage = '';
            _this.loading = false;
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'shopnx-password-forgot',
        template: __webpack_require__("../../../../../src/app/account/password/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/password/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */]) === "function" && _f || Object])
], ForgotPasswordComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/password/reset.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content row center\">\r\n  <div class=\"column center\">\r\n    <md-card class=\"cp\">\r\n      <md-toolbar class=\"md-accent\">\r\n        <h3 class=\"md-toolbar-tools\">Reset Password</h3>\r\n      </md-toolbar>\r\n      <br/>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"reset(form.value)\" autocomplete=\"false\" novalidate>\r\n        <section class=\"section\" layout=\"column\">\r\n          <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n            {{ errMessage?.message }}\r\n          </div>\r\n          <div>\r\n            <md-input-container>\r\n              <input mdInput type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"New Password\" autofocus />\r\n            </md-input-container>\r\n            <br/>\r\n            <md-input-container>\r\n              <input mdInput type=\"password\" name=\"passwordcf\" formControlName=\"passwordcf\" placeholder=\"Confirm Password\" />\r\n            </md-input-container>\r\n\r\n            <submit-button [form]=\"form\" text=\"Reset Password\" icon=\"vpn_key\"></submit-button>\r\n          </div>\r\n        </section>\r\n      </form>\r\n    </md-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/password/reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(fb, crud, route, snack, modal) {
        this.fb = fb;
        this.crud = crud;
        this.route = route;
        this.snack = snack;
        this.modal = modal;
        this.errors = {};
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var email = this.route.queryParams['value'].email;
        this.form = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            passwordcf: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    ResetPasswordComponent.prototype.reset = function (form) {
        var _this = this;
        this.submitted = true;
        this.loading = true;
        this.crud.post('users/reset/' + this.route.params['value'].id, form, false)
            .subscribe(function (data) {
            _this.snack.open(data.message, 'OK', { duration: 2000 });
            // this.router.navigateByUrl('/account/login');
            _this.modal.login().subscribe();
            _this.loading = false;
        }, function (err) {
            _this.snack.open('Password reset email is invalid or has expired.', 'OK', { duration: 2000 });
            _this.loading = false;
        });
    };
    return ResetPasswordComponent;
}());
ResetPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'shopnx-password-reset',
        template: __webpack_require__("../../../../../src/app/account/password/reset.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/password/forgot.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object])
], ResetPasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/account/profile/detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n  max-height:40vh !important;\r\n}\r\n.mat-input-container .mat-icon{\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/profile/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-around center\" fxOffset=\"30\">\r\n  <h1>Edit Profile</h1>\r\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"saveUser(profileForm.value)\" autocomplete=\"false\" novalidate fxLayout=\"column\"\r\n    fxLayoutAlign=\"space-around stretch\">\r\n    <img [src]=\"profileForm.value.avatar\" *ngIf=\"profileForm.value.avatar\" />\r\n    <div class=\"help-block\" [hidden]=\"!errMessage\">\r\n      {{ errMessage }}\r\n    </div>\r\n    <md-input-container fxFlex>\r\n      <input mdInput type=\"name\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" autofocus />\r\n    </md-input-container>\r\n    <div [hidden]=\"profileForm.get('name').valid || (profileForm.get('name').pristine && !submitted)\">\r\n      <div *ngIf=\"profileForm.get('name').hasError('required')\" class=\"error\">\r\n        Name is required\r\n      </div>\r\n      <div *ngIf=\"profileForm.get('name').hasError('minlength')\" class=\"error\">\r\n        Name must be minimum 3 characters\r\n      </div>\r\n    </div>\r\n    <md-input-container fxFlex>\r\n      <input mdInput type=\"email\" name=\"email\" placeholder=\"Email\" [value]=\"auth.currentUser.email\" disabled/>\r\n    </md-input-container>\r\n    <md-input-container fxFlex>\r\n      <input mdInput type=\"text\" name=\"avatar\" formControlName=\"avatar\" placeholder=\"Avatar\" />\r\n      <md-icon mdPrefix (click)=\"chooseImage()\" class=\"pointer\">add_to_photos</md-icon>\r\n    </md-input-container>\r\n    <div [hidden]=\"profileForm.get('avatar').valid || (profileForm.get('avatar').pristine && !submitted)\">\r\n      <div *ngIf=\"profileForm.get('avatar').hasError('required')\" class=\"error\">\r\n        Avatar url required\r\n      </div>\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n      <submit-button fxFlex [loading]=\"loading\" [form]=\"profileForm\" icon=\"save\" text=\"Save\"></submit-button>\r\n    </div>\r\n    <br/>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/profile/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_media_media_library__ = __webpack_require__("../../../../../src/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetailComponent = (function () {
    function DetailComponent(snack, _fb, auth, router, dialog, userService) {
        this.snack = snack;
        this._fb = _fb;
        this.auth = auth;
        this.router = router;
        this.dialog = dialog;
        this.userService = userService;
        this.user = {};
        this.cols = [];
        this.loading = false;
        this.submitted = false;
        this.EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.profileForm = this._fb.group({
            name: [this.auth.currentUser.name, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
            avatar: [this.auth.currentUser.avatar, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required]],
        });
    };
    DetailComponent.prototype.saveUser = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        this.busy = this.auth.saveProfile(data).subscribe(function (res) {
            _this.snack.open('User Profile Modified', 'OK', { duration: 2000 });
            _this.auth.updateProfile(data);
        }, function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    DetailComponent.prototype.chooseImage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__shared_media_media_library__["a" /* MediaLibraryModal */], {
            width: '80%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.profileForm.controls['avatar'].setValue(result);
            }
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'user-detail',
        template: __webpack_require__("../../../../../src/app/account/profile/detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/account/profile/detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdDialog */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]) === "function" && _f || Object])
], DetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/product.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductResolve = (function () {
    function ProductResolve(crud, router, snack) {
        this.crud = crud;
        this.router = router;
        this.snack = snack;
    }
    ProductResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('products', id);
    };
    return ProductResolve;
}());
ProductResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object])
], ProductResolve);

var _a, _b, _c;
//# sourceMappingURL=product.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html, body{\r\n  height: 100%;\r\n  font-family: Arial, Helvetica, sans-serif\r\n}\r\n\r\na.active {\r\n  background-color: gray;\r\n}\r\n.product-image{\r\n    height:100px;\r\n    width:50px;\r\n}\r\n.column{\r\n    -webkit-box-align: stretch;\r\n        -ms-flex-align: stretch;\r\n            align-items: stretch;\r\n}\r\n.example-sidenav-fab-container {\r\n  height: 100vh;\r\n}\r\n\r\n.example-scrolling-content {\r\n  overflow: auto;\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n}\r\n\r\n.example-fab {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-overlay\" *ngIf=\"loading\">\r\n    <md-progress-bar mode=\"indeterminate\" color=\"accent\"></md-progress-bar>\r\n</div>\r\n<div [ngBusy]=\"busy\" *ngIf=\"loading\"></div>\r\n<md-sidenav-container class=\"example-sidenav-fab-container\">\r\n    <md-sidenav #cart mode=\"over\" align=\"end\">\r\n        <md-toolbar color=\"primary\">\r\n            <h2 class=\"md-toolbar-tools\">Cart Details</h2>\r\n        </md-toolbar>\r\n        <md-list>\r\n            <md-list-item *ngFor=\"let i of cartItems\">\r\n                <img md-list-avatar [src]=\"i?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\" alt=\"...\">\r\n                <h3 md-line> {{i.name}} </h3>\r\n                <p md-line>\r\n                    <span> \r\n            <button md-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem({sku:i.sku, name:i.name, slug:i.slug, mrp:i.mrp, price:i.price, weight:i.weight, vid:i.vid}, -1)\"> <i class=\"material-icons\">remove</i> </button>\r\n            <button md-button class=\"mat-primary\" routerLink=\"product/checkout\">{{getQ(i.sku, i.vid)}}</button>\r\n            <button md-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem({sku:i.sku, name:i.name, slug:i.slug, mrp:i.mrp, price:i.price, weight:i.weight, vid:i.vid}, +1)\"><i class=\"material-icons\">add</i> </button>\r\n          </span>\r\n                </p>\r\n                <p md-line>\r\n                    {{i.price | currency:Settings.currency.code : true}} * {{i.quantity}} = {{i.price * i.quantity | currency:Settings.currency.code\r\n                    : true}}\r\n                </p>\r\n                <div class=\"close\"><button md-icon-button (click)=\"addItem({sku:i.sku, vid: i.vid}, -10000000)\"><md-icon>close</md-icon></button></div>\r\n                <hr/>\r\n            </md-list-item>\r\n            <h3 md-subheader>Summary</h3>\r\n\r\n            <div *ngIf=\"getTotalP()>0\">\r\n                <md-list-item>\r\n                    <p md-line>\r\n                        <b>Shipping:</b>\r\n                        <span *ngIf=\"shipping?.best.charge<=0\">&nbsp;Free</span>\r\n                        <span *ngIf=\"shipping?.best.charge>0\">&nbsp;{{shipping?.best.charge | currency:Settings.currency.code : true}}</span>\r\n                    </p>\r\n                </md-list-item>\r\n                <md-list-item>\r\n                    <p md-line>\r\n                        <b>Grand Total:</b> {{getTotalP() + shipping?.best.charge | currency:Settings.currency.code : true}}\r\n                    </p>\r\n                </md-list-item>\r\n            </div>\r\n        </md-list>\r\n        <md-toolbar>\r\n            <button md-raised-button [disabled]=\"cartItems.length <=0\" class=\"mat-primary\" (click)=\"cart.close()\" routerLink=\"/checkout\"><md-icon>local_grocery_store</md-icon>Checkout →</button>\r\n        </md-toolbar>\r\n    </md-sidenav>\r\n    <header (openCrt)=\"cart.open()\"> </header>\r\n    <div class=\"example-scrolling-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <footer></footer>\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
 * Angular 2 decorators and services
 */







/**
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState, router, cart, http, activatedRoute, titleService) {
        this.appState = appState;
        this.router = router;
        this.cart = cart;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.loading = true;
        this.Settings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* Settings */];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        this.cartItems = this.cart.items;
        this.cart.getBestShipper().subscribe(function (data) {
            _this.shipping = data[0];
        }, function (err) { return console.log(err); });
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* NavigationEnd */]; })
            .map(function () { return _this.activatedRoute; })
            .map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        })
            .filter(function (route) { return route.outlet === 'primary'; })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (event) {
            if (event.title)
                _this.titleService.setTitle(event.title + ' - ShopNx');
        });
    };
    AppComponent.prototype.getQ = function (pid, vid) {
        return this.cart.getQuantity(pid, vid);
    };
    AppComponent.prototype.getTotalP = function () {
        return this.cart.getTotalPrice();
    };
    AppComponent.prototype.addItem = function (product, qty) {
        this.cart.addItem(product, qty);
        // this.getQ(product._id, product.vid);
    };
    // Shows and hides the loading spinner during RouterEvent changes
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* NavigationStart */]) {
            this.loading = true;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* NavigationEnd */]) {
            this.loading = false;
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["g" /* NavigationCancel */]) {
            this.loading = false;
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["h" /* NavigationError */]) {
            this.loading = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        template: __webpack_require__("../../../../../src/app/app.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppState */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["h" /* Title */]) === "function" && _f || Object])
], AppComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_checkout_checkout_guarg__ = __webpack_require__("../../../../../src/app/home/checkout/checkout.guarg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account_module__ = __webpack_require__("../../../../../src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modal_module__ = __webpack_require__("../../../../../src/app/modal/modal.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_wish_button_wish_button_component__ = __webpack_require__("../../../../../src/app/home/wish-button/wish-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/home/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_shop_shop_component__ = __webpack_require__("../../../../../src/app/home/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_megamenu_megamenu_component__ = __webpack_require__("../../../../../src/app/home/megamenu/megamenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_success_success_component__ = __webpack_require__("../../../../../src/app/home/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/home/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_featured_products_featured_products_component__ = __webpack_require__("../../../../../src/app/home/featured-products/featured-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_product_product_detail_component__ = __webpack_require__("../../../../../src/app/home/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_owl_carousel_owl_carousel_component__ = __webpack_require__("../../../../../src/app/home/owl-carousel/owl-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_news_banner_news_banner_component__ = __webpack_require__("../../../../../src/app/home/news-banner/news-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_banner_banner_component__ = __webpack_require__("../../../../../src/app/home/banner/banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_guards_auth_guard__ = __webpack_require__("../../../../../src/app/shared/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_services_crud_helper__ = __webpack_require__("../../../../../src/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_pipes_pluralize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/pluralize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_services_api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_404_404_component__ = __webpack_require__("../../../../../src/app/shared/404/404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_services_users_resolve__ = __webpack_require__("../../../../../src/app/shared/services/users.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_product_product_resolve__ = __webpack_require__("../../../../../src/app/admin/product/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__environment__ = __webpack_require__("../../../../../src/app/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_resolver__ = __webpack_require__("../../../../../src/app/app.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__home_home_home_component__ = __webpack_require__("../../../../../src/app/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_hammerjs__);
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























// import { OwlModule } from 'angular-owl-carousel';







/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component







// import 'owl.carousel';


// import './../styles/styles.scss';
// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_39__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_40__app_service__["a" /* AppState */]
]);
function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_44_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_44_angular2_jwt__["AuthConfig"]({
        tokenName: 'id_token',
        tokenGetter: (function () { return localStorage.getItem('id_token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }]
    }), http, options);
}
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_33__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_38__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_41__home_home_home_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_banner_banner_component__["a" /* BannerComponent */], __WEBPACK_IMPORTED_MODULE_16__home_news_banner_news_banner_component__["a" /* NewsBannerComponent */], __WEBPACK_IMPORTED_MODULE_15__home_owl_carousel_owl_carousel_component__["a" /* ShopnxCarouselComponent */], __WEBPACK_IMPORTED_MODULE_13__home_featured_products_featured_products_component__["a" /* FeaturedProductsComponent */], __WEBPACK_IMPORTED_MODULE_12__home_checkout_checkout_component__["a" /* CheckoutComponent */], __WEBPACK_IMPORTED_MODULE_8__home_product_card_product_card_component__["a" /* ProductCardComponent */], __WEBPACK_IMPORTED_MODULE_9__home_shop_shop_component__["a" /* ShopComponent */], __WEBPACK_IMPORTED_MODULE_14__home_product_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_10__home_megamenu_megamenu_component__["a" /* MegamenuComponent */], __WEBPACK_IMPORTED_MODULE_10__home_megamenu_megamenu_component__["a" /* MegamenuComponent */], __WEBPACK_IMPORTED_MODULE_11__home_success_success_component__["a" /* SuccessComponent */], __WEBPACK_IMPORTED_MODULE_7__home_wish_button_wish_button_component__["a" /* WishButtonComponent */],
            // XLargeDirective,
            __WEBPACK_IMPORTED_MODULE_24__shared_404_404_component__["a" /* NotFoundComponent */]
        ],
        /**
         * Import Angular's modules.
         */
        imports: [
            __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_43__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_28__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__modal_modal_module__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["e" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["f" /* MdSidenavModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["g" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["h" /* MdListModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["i" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["j" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_42__angular_material__["k" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_42__angular_material__["l" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_busy__["BusyModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_1__account_account_module__["a" /* AccountModule */],
            // OwlModule,
            __WEBPACK_IMPORTED_MODULE_29_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_30_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_34__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_37__app_routes__["a" /* ROUTES */], { useHash: false, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_34__angular_router__["b" /* PreloadAllModules */] })
        ],
        /**
         * Expose our Services and Providers into Angular's dependency injection.
         */
        providers: [
            __WEBPACK_IMPORTED_MODULE_36__environment__["a" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_23__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_26__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_25__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_22__shared_pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_44_angular2_jwt__["AuthHttp"], __WEBPACK_IMPORTED_MODULE_21__shared_services_crud_helper__["a" /* CrudHelper */], __WEBPACK_IMPORTED_MODULE_19__shared_services_crud_service__["a" /* CrudService */], __WEBPACK_IMPORTED_MODULE_31__shared_services_users_resolve__["a" /* UsersResolve */], __WEBPACK_IMPORTED_MODULE_18__shared_services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_32__admin_product_product_resolve__["a" /* ProductResolve */], __WEBPACK_IMPORTED_MODULE_20__shared_guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_0__home_checkout_checkout_guarg__["a" /* CheckoutGuard */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_44_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_43__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_43__angular_http__["RequestOptions"]]
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_33__angular_core__["ApplicationRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_33__angular_core__["ApplicationRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_40__app_service__["a" /* AppState */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_40__app_service__["a" /* AppState */]) === "function" && _b || Object])
], AppModule);

var _a, _b;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataResolver);

/**
 * An array of services to resolve routes with data.
 */
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];
//# sourceMappingURL=app.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__ = __webpack_require__("../../../../../src/app/home/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_product_product_resolve__ = __webpack_require__("../../../../../src/app/admin/product/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_product_product_detail_component__ = __webpack_require__("../../../../../src/app/home/product/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_success_success_component__ = __webpack_require__("../../../../../src/app/home/success/success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_checkout_checkout_guarg__ = __webpack_require__("../../../../../src/app/home/checkout/checkout.guarg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_checkout_checkout_component__ = __webpack_require__("../../../../../src/app/home/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_404_404_component__ = __webpack_require__("../../../../../src/app/shared/404/404.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });






// import { HomePageComponent } from './home/home/home.component';

var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'MFB - Order fresh Vegetables' } },
    { path: 'admin', loadChildren: './admin#AdminModule' },
    { path: 'account', loadChildren: './account#AccountModule' },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__home_checkout_checkout_component__["a" /* CheckoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__home_checkout_checkout_guarg__["a" /* CheckoutGuard */]], data: { title: 'Checkout' } },
    { path: 'success', component: __WEBPACK_IMPORTED_MODULE_3__home_success_success_component__["a" /* SuccessComponent */], data: { title: 'Order Placed' } },
    { path: 'product/:slug/:id', component: __WEBPACK_IMPORTED_MODULE_2__home_product_product_detail_component__["a" /* ProductDetailComponent */], resolve: { product: __WEBPACK_IMPORTED_MODULE_1__admin_product_product_resolve__["a" /* ProductResolve */] } },
    { path: 'shop', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'MFB - Order fresh Vegetables' } },
    { path: 'product/category/:slug/:categoryId', component: __WEBPACK_IMPORTED_MODULE_0__home_shop_shop_component__["a" /* ShopComponent */], data: { title: 'Product Details' } },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__shared_404_404_component__["a" /* NotFoundComponent */] },
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        /**
         * Already return a clone of the current state.
         */
        get: function () {
            return this._state = this._clone(this._state);
        },
        /**
         * Never allow mutation
         */
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        /**
         * Use our state getter for the clone.
         */
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        /**
         * Internally mutate our state.
         */
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        /**
         * Simple object clone.
         */
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppState);

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/base.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);


var BaseCtrl = (function () {
    function BaseCtrl() {
        var _this = this;
        this.data = [];
        this.filterText = '';
        this.flush = function (noResetData) {
            if (noResetData === void 0) { noResetData = true; }
            _this.meta.after = 0;
            _this.meta.end = false;
            _this.meta.skip = 0;
            // if (!noResetData) 
            _this.data = []; // Reset query parameters        
        };
        this.api2 = this.api2 || this.api;
    }
    BaseCtrl.prototype.scroll = function () {
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = false;
        var q = { skip: this.meta.after };
        this.getData(q, true);
    };
    BaseCtrl.prototype.order = function (predicate) {
        this.flush();
        this.sort.reverse = (this.sort.predicate === predicate) ? !this.sort.reverse : false;
        this.sort.predicate = predicate;
        var pr = predicate;
        if (this.sort.reverse) {
            pr = '-' + pr;
        }
        this.meta.sort = pr;
        this.getData({ sort: pr });
    };
    BaseCtrl.prototype.clone = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.modal.confirm('Copy', 'Would you like to copy the ' + this.api2 + '?').subscribe(function (result) {
            if (result) {
                var clone = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](item);
                delete clone._id;
                _this.crud.add(_this.api2, clone).subscribe(function (data) { _this.flush(); _this.filterText = ''; _this.getData(); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
            }
        });
    };
    BaseCtrl.prototype.delete = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        this.modal.confirm('Delete?', 'Would you like to delete the ' + this.api2 + '?').subscribe(function (result) {
            if (result) {
                _this.crud.delete(_this.api2, item._id).subscribe(function (data) { _this.flush(); _this.filterText = ''; _this.getData(); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
            }
        });
    };
    BaseCtrl.prototype.getData = function (q, scrolled) {
        var _this = this;
        var limit = '10';
        q = q || {};
        if (q.sort) {
            this.meta.sort = q.sort;
        }
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["URLSearchParams"]();
        params.set('limit', limit);
        q.limit ? params.set('limit', q.limit) : params.set('limit', limit);
        q.skip ? params.set('skip', q.skip) : params.set('skip', '0');
        if (this.meta.sort) {
            params.set('sort', this.meta.sort);
        }
        ;
        if (q.where)
            params.set('where', JSON.stringify(q.where));
        if (q.search || this.meta.search) {
            this.meta.search = q.search;
            params.set('search', JSON.stringify({ q: q.search }));
        }
        if (q.sort) {
            params.set('sort', q.sort);
        }
        if (q.type) {
            params.set('type', q.type);
        }
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = true;
        this.busy = this.crud.get(this.api, params, true).subscribe(function (data) {
            _this.meta.filtered = data.length + _this.meta.after;
            _this.data = scrolled ? _this.data.concat(data) : data;
            _this.meta.busy = false;
            if (data.length >= limit) {
                _this.meta.after = _this.meta.filtered;
                _this.meta.end = false;
            }
            else {
                _this.meta.end = true;
            }
        }, function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    return BaseCtrl;
}());
/* harmony default export */ __webpack_exports__["a"] = (BaseCtrl);
//# sourceMappingURL=base.js.map

/***/ }),

/***/ "../../../../../src/app/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export decorateModuleRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV_PROVIDERS; });
/**
 * Environment Providers
 */
var PROVIDERS = [];
/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
var _decorateModuleRef = function (value) { return value; };
// if ('production' === ENV) {
//   enableProdMode();
//   /**
//    * Production
//    */
//   _decorateModuleRef = (modRef: any) => {
//     disableDebugTools();
//     return modRef;
//   };
//   PROVIDERS = [
//     ...PROVIDERS,
//     /**
//      * Custom providers in production.
//      */
//   ];
// } else {
//   _decorateModuleRef = (modRef: any) => {
//     const appRef = modRef.injector.get(ApplicationRef);
//     const cmpRef = appRef.components[0];
//     let _ng = (<any> window).ng;
//     enableDebugTools(cmpRef);
//     (<any> window).ng.probe = _ng.probe;
//     (<any> window).ng.coreTokens = _ng.coreTokens;
//     return modRef;
//   };
//   /**
//    * Development
//    */
//   PROVIDERS = [
//     ...PROVIDERS,
//     /**
//      * Custom providers in development.
//      */
//   ];
// }
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".banner{\r\n    height:450px;\r\n    overflow: hidden;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n}\r\n.banner .img{\r\n    height:394px;\r\n    width:100%;\r\n}\r\n.owl-carousel .owl-stage-outer{\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n    line-height: 0;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <owl-carousel [options]=\"carouselOptions\" [items]=\"images\" [carouselClasses]=\"['owl-theme', 'row', 'sliding']\">\r\n  <div class=\"banner\" *ngFor=\"let image of images\">\r\n    <img [src]=\"image.src\" />\r\n  </div>\r\n</owl-carousel> -->"

/***/ }),

/***/ "../../../../../src/app/home/banner/banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = (function () {
    function BannerComponent(el) {
        this.el = el;
        this.carouselOptions = {
            items: 1,
            autoplay: true,
            loop: true,
            center: true,
            lazyLoad: true,
            margin: 10,
        };
    }
    BannerComponent.prototype.ngOnInit = function () {
        this.images = [
            { src: 'assets/fashion/fashion-glasses-go-pro-female-157888.jpeg' },
            { src: 'assets/fashion/girl-dandelion-yellow-flowers-160699.jpeg' },
            { src: 'assets/fashion/model-fashion-attractive-female-39657.jpeg' },
            { src: 'assets/fashion/pexels-photo-24156.jpeg' },
            { src: 'assets/fashion/pexels-photo-26549.jpeg' },
            { src: 'assets/fashion/pexels-photo-119654.jpeg' },
            { src: 'assets/fashion/pexels-photo-179909.jpeg' },
            { src: 'assets/fashion/pexels-photo-247199.jpeg' },
            { src: 'assets/fashion/pexels-photo-247295.jpeg' },
            { src: 'assets/fashion/pexels-photo-298863.jpeg' },
            { src: 'assets/fashion/pexels-photo-285171.jpeg' },
            { src: 'assets/fashion/pexels-photo-291762.jpeg' },
        ];
    };
    return BannerComponent;
}());
BannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-banner',
        template: __webpack_require__("../../../../../src/app/home/banner/banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/banner/banner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], BannerComponent);

var _a;
//# sourceMappingURL=banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center{\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-pack: start;-ms-flex-pack: start;justify-content: start;\r\n}\r\n.close-button{\r\n    cursor: pointer;\r\n}\r\n.container{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex; \r\n  -webkit-box-pack: center; \r\n      -ms-flex-pack: center; \r\n          justify-content: center;\r\n  \r\n}\r\n.checkout-card{\r\n  /*width: 40em;*/\r\n  margin: 10px;\r\n}\r\n.address-card{\r\n  width: 15em;\r\n  margin: 10px;\r\n  cursor: pointer;  \r\n}\r\n.checkout-button{\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n.selected{\r\n  border:1px solid yellow;\r\n}\r\n.w100{\r\n  max-width:100px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<!--<div *ngIf=\"msg\"> {{msg}} </div>-->\r\n<div class=\"center\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutWrap>\r\n    <md-card class=\"checkout-card\">\r\n      <form [formGroup]=\"checkoutForm\" autocomplete=\"false\" novalidate>\r\n        <h3>Process Order</h3>\r\n        <md-card-content>\r\n          <table class=\"checkout-table\">\r\n            <tr>\r\n              <td>Cart Total:</td>\r\n              <td>{{cart.getTotalPrice() | currency : Settings.currency.code : true}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Shipping</td>\r\n              <td><span *ngIf=\"shipping?.best?.charge<=0 \">Free</span>\r\n                <span *ngIf=\"shipping?.best?.charge>0\"> {{shipping?.best?.charge | currency : Settings.currency.code : true}} [{{shipping?.best?.carrier}}] Add {{shipping?.free?.freeShipping\r\n    - cart.getTotalPrice() | currency : Settings.currency.code : true}} more for free shipping through {{shipping?.free?.carrier}}\r\n    </span></td>\r\n              <td *ngIf=\"shipping?.best.charge === undefined\">\r\n                Sorry, but no supplier supplies to your location\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Discount Coupon:</td>\r\n              <td>\r\n                <md-input-container class=\"w100\">\r\n                  <input mdInput formControlName=\"coupon\" #coupon />\r\n                </md-input-container>\r\n                <button type=\"button\" [disabled]=\"couponCode\" md-button (click)=\"applyCoupon(coupon.value)\">Apply</button>\r\n                <button md-button (click)=\"removeCoupon()\" *ngIf=\"couponCode\">{{couponCode}}<md-icon>close</md-icon></button>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Payment Method:</td>\r\n              <td>\r\n                <md-radio-group formControlName=\"selectedPaymentMethod\">\r\n                  <md-radio-button *ngFor=\"let paymentMethod of Settings.paymentMethods\" [value]=\"paymentMethod\">\r\n                    {{paymentMethod}}&nbsp;&nbsp;&nbsp;&nbsp;\r\n                  </md-radio-button>\r\n                </md-radio-group>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>Total Amount:</td>\r\n              <td>\r\n                <h2>{{totalAmount | currency : Settings.currency.code : true}}</h2>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </md-card-content>\r\n        <md-card-actions>\r\n          <button class=\"checkout-button circular-progress-button\" md-raised-button color=\"primary\" (click)=\"checkout(checkoutForm.value)\"\r\n            [disabled]=\"cart.getTotalPrice()===0\"><md-icon>payment</md-icon>Make Payment</button>\r\n        </md-card-actions>\r\n      </form>\r\n    </md-card>\r\n    <div *ngIf=\"!newAddressForm\">\r\n      <button color=\"primary\" class=\"checkout-button\" md-raised-button (click)=\"showNewAddressForm(true)\"><md-icon>add</md-icon>New Address</button>\r\n      <md-card *ngFor=\"let address of addresses; let i=index;\" class=\"address-card\" [ngClass]=\"{'selected': selected === address?._id }\"\r\n        (click)=\"selectAddress(address)\">\r\n        <md-card-content>\r\n          <h3>{{address.name}}</h3>\r\n          <br/> {{address.address}}, {{address.city}}, {{address.zip}}, {{address.state}}, {{address.phone}}\r\n        </md-card-content>\r\n        <md-card-actions>\r\n          <button md-icon-button (click)=\"editAddress(address)\"><md-icon>edit</md-icon></button>\r\n          <button md-icon-button (click)=\"removeAddress(address)\"><md-icon>delete</md-icon></button>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </div>\r\n    <md-card class=\"address-card\" *ngIf=\"newAddressForm\">\r\n      <h3>Add New Address</h3>\r\n      <button md-button md-icon-button (click)=\"showNewAddressForm(false)\" class=\"close\">\r\n      <md-icon>close</md-icon>\r\n      </button>\r\n      <edit [item]=\"address\" [fields]=\"fields\" api=\"addresses\" (save)=\"save($event)\"></edit>\r\n    </md-card>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
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
    function CheckoutComponent(cart, crud, snack, route, _fb, auth, modal) {
        this.cart = cart;
        this.crud = crud;
        this.snack = snack;
        this.route = route;
        this._fb = _fb;
        this.auth = auth;
        this.modal = modal;
        this.totalAmount = 0;
        this.totalAmountNoCoupon = 0;
        this.Settings = __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* Settings */];
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.msg = this.route.snapshot.queryParams['msg'];
        this.id = this.route.snapshot.queryParams['id'];
        this.checkoutForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(5)]],
            selectedPaymentMethod: ['COD', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required],
            coupon: ['A100'],
        });
        this.fields = [
            { field: 'name' },
            { field: 'address' },
            { field: 'city' },
            { field: 'zip', dataType: 'number' },
            { field: 'state' },
            { field: 'phone', dataType: 'number' },
        ];
        this.totalAmount = this.cart.getTotalPrice();
        this.getMyAddress();
        this.getBestShipper();
    };
    CheckoutComponent.prototype.initAddress = function (a) {
        return this._fb.group({
            name: [a.name],
            address: [a.address],
            city: [a.city],
            zip: [a.zip],
            state: [a.state],
            phone: [a.phone],
        });
    };
    CheckoutComponent.prototype.addAddress = function (a) {
        var _this = this;
        var control = this.checkoutForm.controls['addresses'];
        if (!a) {
            var addrCtrl = this.initAddress({});
            control.push(addrCtrl);
        }
        else {
            a.forEach(function (element) {
                var addrCtrl = _this.initAddress(element);
                control.push(addrCtrl);
            });
        }
    };
    CheckoutComponent.prototype.getMyAddress = function () {
        var _this = this;
        this.showNewAddressForm(false);
        this.crud.get('addresses/my', null, true).subscribe(function (data) {
            if (data.length > 0) {
                _this.addresses = data;
                _this.selectAddress(data[0]);
            }
        }, function (err) { return _this.snack.open(err, 'OK'); });
    };
    CheckoutComponent.prototype.selectAddress = function (a) {
        this.address = a;
        this.selected = a._id;
    };
    CheckoutComponent.prototype.editAddress = function (a) {
        this.address = a;
        this.newAddressForm = true;
    };
    CheckoutComponent.prototype.removeAddress = function (item) {
        var _this = this;
        this.modal.confirm('Delete?', 'Are you sure to delete')
            .subscribe(function (res) {
            if (res) {
                _this.crud.delete('addresses', item._id).subscribe(function (data) {
                    _this.loading = false;
                    _this.getMyAddress();
                }, function (err) {
                    _this.snack.open(err, 'OK');
                    _this.loading = false;
                });
            }
        });
    };
    CheckoutComponent.prototype.save = function (data) {
        var _this = this;
        this.loading = true;
        if (data._id) {
            this.crud.patch('addresses', data._id, data, true).subscribe(function (res) {
                _this.loading = false;
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK');
                _this.loading = false;
            });
        }
        else {
            this.crud.post('addresses', data, true, true).subscribe(function (data) {
                _this.loading = false;
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK');
                _this.loading = false;
            });
        }
    };
    CheckoutComponent.prototype.applyCoupon = function (code) {
        var _this = this;
        this.couponCode = ''; // To prevent same code being applied twice
        this.crud.get('coupons', { where: { code: code, active: true, 'minimumCartValue': { $lte: this.totalAmountNoCoupon } } }).subscribe(function (data) {
            if (data.length === 0) {
                _this.snack.open('Coupon is not active', 'OK', { duration: 2000 });
                return;
            }
            if (data[0].amount >= _this.totalAmount) {
                _this.snack.open('Please add some more items before applying this coupon', 'OK', { duration: 2000 });
                return;
            }
            else {
                _this.coupon = data[0];
                _this.couponCode = data[0].code + " (" + data[0].amount + ")";
                _this.totalAmount -= parseInt(data[0].amount) || 0;
            }
        }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    CheckoutComponent.prototype.removeCoupon = function () {
        this.coupon = this.couponCode = undefined;
        this.totalAmount = this.totalAmountNoCoupon;
        this.getBestShipper();
    };
    CheckoutComponent.prototype.getBestShipper = function () {
        var _this = this;
        this.cart.getBestShipper().subscribe(function (data) {
            _this.shipping = data[0];
            _this.totalAmountNoCoupon = _this.totalAmount = _this.cart.getTotalPrice() + _this.shipping.best.charge || 0;
        });
    };
    CheckoutComponent.prototype.checkout = function (order) {
        this.submitted = true;
        if (!order) {
            this.snack.open('Something went wrong.', 'OK', { duration: 2000 });
            return;
        }
        if (this.cart.items.length == 0) {
            this.snack.open('Your cart found empty. Please add some items', 'OK', { duration: 2000 });
            return;
        }
        if (!this.address.zip) {
            this.snack.open('You should enter an address with phone number', 'OK', { duration: 2000 });
            this.newAddressForm = true;
            return;
        }
        order.shipping = this.shipping.best.charge;
        if (!this.coupon)
            this.coupon = { amount: 0 };
        else if (!this.coupon.amount)
            this.coupon = { amount: 0 };
        order.couponAmount = this.coupon.amount;
        var address = {};
        address.recipient_name = this.address.name;
        address.line1 = this.address.address;
        address.city = this.address.city;
        address.postal_code = this.address.zip;
        address.country_code = this.Settings.country.code;
        address.merchantID = 'ShopNx';
        order.address = address;
        this.cart.checkout(order.selectedPaymentMethod, [], order, true);
    };
    CheckoutComponent.prototype.showNewAddressForm = function (show) {
        this.newAddressForm = show;
        this.address = {};
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
        selector: 'checkout',
        template: __webpack_require__("../../../../../src/app/home/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _g || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/checkout/checkout.guarg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutGuard = (function () {
    function CheckoutGuard(router, crud, modal) {
        this.router = router;
        this.crud = crud;
        this.modal = modal;
    }
    CheckoutGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.crud.get('users/me', null, true)
            .map(function (e) { if (e) {
            return true;
        } }).catch(function () {
            _this.modal.login().subscribe(function (data) { if (data) {
                _this.router.navigateByUrl('/checkout');
            } });
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(false);
        });
    };
    return CheckoutGuard;
}());
CheckoutGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], CheckoutGuard);

var _a, _b, _c;
//# sourceMappingURL=checkout.guarg.js.map

/***/ }),

/***/ "../../../../../src/app/home/featured-products/featured-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/featured-products/featured-products.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <owl-carousel [options]=\"carouselOptions\" [items]=\"products\" [carouselClasses]=\"['owl-theme', 'sliding']\">\r\n  <product-card [product]=\"product\" *ngFor=\"let product of products;let i = index\"></product-card>\r\n</owl-carousel> -->"

/***/ }),

/***/ "../../../../../src/app/home/featured-products/featured-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturedProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturedProductsComponent = (function () {
    function FeaturedProductsComponent() {
        this.carouselOptions = {
            autoplay: false,
            loop: true,
            center: true,
            lazyLoad: true,
            margin: 30,
            autoplaySpeed: 500,
            navSpeed: 300,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1400: {
                    items: 4
                },
                1800: {
                    items: 5
                }
            }
        };
    }
    FeaturedProductsComponent.prototype.ngOnInit = function () { };
    return FeaturedProductsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FeaturedProductsComponent.prototype, "products", void 0);
FeaturedProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-featured-products',
        template: __webpack_require__("../../../../../src/app/home/featured-products/featured-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/featured-products/featured-products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeaturedProductsComponent);

//# sourceMappingURL=featured-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.product-cards{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  min-height:80vh;\r\n}\r\n.product-card{\r\n  margin: 10px;  \r\n  max-width: 350px; \r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<shopnx-banner></shopnx-banner>\r\n<shopnx-news-banner></shopnx-news-banner>\r\n<shopnx-featured-products [products]=\"products\"></shopnx-featured-products>"

/***/ }),

/***/ "../../../../../src/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(crud, el) {
        this.crud = crud;
        this.el = el;
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.busy = this.crud.get('products', { params: { limit: 20, where: { sale: true } } }).subscribe(function (data) {
            _this.products = data;
        }, function (error) { });
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-homepage',
        template: __webpack_require__("../../../../../src/app/home/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home/home.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]) === "function" && _b || Object])
], HomePageComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/megamenu/megamenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".md-fab img{\r\n   position: absolute;\r\n   top: 0%;\r\n   left: 0%;\r\n   width: 100%;\r\n}\r\n#wrapper {\r\n  /*width: 980px;*/\r\n  margin: 0 auto;\r\n}\r\n\r\n#wrapper nav {\r\n  position: relative;\r\n  height: 50px;\r\n  /*margin: 0 2px;*/\r\n  background: rgb(33,150,243);\r\n}\r\n\r\nheader, nav { \r\n  display: block;\r\n}\r\n\r\n#wrapper nav ul#menu {\r\n  display: block;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: 0;\r\n} \r\n\r\n#wrapper nav ul#menu li {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n#wrapper nav ul#menu li a {\r\n  display: block;\r\n  height: 50px;\r\n  font-size: 1em;\r\n  line-height: 50px;\r\n  color: #fff;\r\n  text-decoration: none;\r\n  padding: 0 15px;\r\n}\r\n\r\n#wrapper nav ul#menu li a:hover, nav ul#menu li:hover > a {\r\n  background: #333;\r\n}\r\n\r\n#wrapper nav ul#menu li:hover > #mega {\r\n  display: block;\r\n}\r\n\r\n#mega {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  width: 80vw;\r\n  height: auto;\r\n  padding: 20px 30px;\r\n  background: #333;\r\n  display: none;\r\n}\r\n\r\nul#menu ul {\r\n  float: left;\r\n  /*width: 23%;*/\r\n  margin: 0 2% 15px 0;\r\n  padding: 0;\r\n  list-style: none;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\nul#menu ul li {\r\n  display: block;\r\n}\r\n\r\nul#menu ul li a {\r\n  float: left;\r\n  display: block;\r\n  width: 100%;\r\n  height: auto;\r\n  line-height: 1.3em;\r\n  color: #888;\r\n  text-decoration: none;\r\n  padding: 6px 0;\r\n}\r\n\r\nul#menu ul li a.header {\r\n  font-size: 1.2em;\r\n  color: rgb(33,150,243);\r\n}\r\n\r\nul#menu ul li a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\nul#menu ul li:first-child a:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* clearfix */\r\nnav ul:after {\r\n  content: \".\";\r\n  display: block;\r\n  clear: both;\r\n  visibility: hidden;\r\n  line-height: 0;\r\n  height: 0;\r\n}\r\n\r\nnav ul {\r\n  display: inline-block;\r\n} \r\n\r\nhtml[xmlns] nav ul {\r\n  display: block;\r\n}\r\n \r\n* html nav ul {\r\n  height: 1%;\r\n}\r\n\r\n#content {\r\n  padding: 30px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/megamenu/megamenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n  <nav>\r\n    <ul id=\"menu\">\r\n      <li *ngFor=\"let c of categories\">\r\n        <a class=\"cursor\">{{c.name}}</a>\r\n        <div id=\"mega\" style=\"z-index:10000\">\r\n          <ul>\r\n            <li *ngFor=\"let h of c.children\"><a routerLink=\"/product/category/{{h.slug}}/{{h._id}}\">{{h.name}}</a> </li>\r\n          </ul>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/megamenu/megamenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MegamenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MegamenuComponent = (function () {
    function MegamenuComponent(crud, snack) {
        this.crud = crud;
        this.snack = snack;
    }
    MegamenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.get('categories').subscribe(function (data) { return _this.categories = data; }, function (err) { return _this.handleErr; });
    };
    MegamenuComponent.prototype.handleErr = function (err) {
        this.snack.open('Categories could not be loaded', 'OK', { duration: 2000 });
    };
    return MegamenuComponent;
}());
MegamenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'megamenu',
        template: __webpack_require__("../../../../../src/app/home/megamenu/megamenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/megamenu/megamenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object])
], MegamenuComponent);

var _a, _b;
//# sourceMappingURL=megamenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/news-banner/news-banner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".featuredNewsBanner {\r\n\tmax-width: 940px;\r\n\twidth: 100%;\r\n\tmargin: 20px auto;\r\n\tposition: relative;\r\n\tpadding: 52px;\r\n\tbackground-size: cover;\r\n\tbackground-position-y: center;\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\tbox-sizing: border-box;\r\n}\r\n.saleNewsBanner {\r\n\tmax-width: 440px;\r\n\twidth: 100%;\r\n\tmargin: 20px auto;\r\n\tposition: relative;\r\n\tpadding: 52px;\r\n\tbackground-size: cover;\r\n\tbackground-position-y: center;\r\n\tborder-radius: 6px;\r\n\tbox-shadow: 0 1px 1px rgba(0,0,0,.15);\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n.featuredNewsSubcontainer {\r\n\tz-index: 9;\r\n\tposition: relative;\r\n}\r\n\r\n.featuredBannerColorOverlay {\r\n\tbackground: rgba(6, 19, 16, 0.44);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.saleBannerColorOverlay {\r\n\tbackground: rgba(156, 39, 176, 0.44);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tborder-radius: 6px;\r\n}\r\n\r\n.featuredNewsSubcontainer a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n\r\n.featuredNewsSubcontainer h1 {\r\n\tcolor: #fff;\r\n\tfont-size: 34px;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tfont-weight: 400;\r\n\tline-height: 44px;\r\n}\r\n\r\n.featuredNewsSubcontainer p {\r\n\tcolor: rgba(255, 255, 255, 0.64);\r\n\tfont-size: 16px;\r\n\tmax-width: 500px;\r\n\tmargin-top: 14px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.bannerFeaturedButton {\r\n\ttext-align: right;\r\n}\r\n\r\n.bannerFeaturedButton a.featuredLink div {\r\n\tbackground: #4DD0E1;\r\n\theight: 36px;\r\n\tline-height: 37px;\r\n\tpadding: 0 24px;\r\n\tborder-radius: 2px;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 14px;\r\n\tfont-weight: 500;\r\n\tcolor: rgb(255, 255, 255);\r\n\tbox-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\r\n\ttransition: all 200ms ease-in-out;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.bannerFeaturedButton a.featuredLink div:hover {\r\n\tbox-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);\r\n\tcursor: pointer;\r\n\tbackground: #26C6DA;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/news-banner/news-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <div class=\"featuredNewsBanner\" style=\"background-image: url('assets/fashion/pexels-photo-298863.jpeg');\">\r\n    <div class=\"featuredNewsSubcontainer\">\r\n      <a routerLink=\"/shop\">\r\n        <h1>Explore our new arrivals</h1>\r\n      </a>\r\n      <p>By Swadesh Behera - Store Manager</p>\r\n      <div class=\"bannerFeaturedButton\">\r\n        <a routerLink=\"/shop\" class=\"featuredLink\">\r\n          <div>Read more</div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div class=\"featuredBannerColorOverlay\"></div>\r\n  </div>\r\n  <div class=\"saleNewsBanner\" style=\"background-image: url('assets/fashion/pexels-photo-247295.jpeg');\">\r\n    <div class=\"featuredNewsSubcontainer\">\r\n      <a routerLink=\"/shop\">\r\n        <h1>Its fashion sale 2017</h1>\r\n      </a>\r\n      <p></p>\r\n      <div class=\"bannerFeaturedButton\">\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"saleBannerColorOverlay\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/news-banner/news-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsBannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsBannerComponent = (function () {
    function NewsBannerComponent() {
    }
    NewsBannerComponent.prototype.ngOnInit = function () {
    };
    return NewsBannerComponent;
}());
NewsBannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-news-banner',
        template: __webpack_require__("../../../../../src/app/home/news-banner/news-banner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/news-banner/news-banner.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsBannerComponent);

//# sourceMappingURL=news-banner.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/owl-carousel/owl-carousel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/owl-carousel/owl-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"owl-carousel owl-theme\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/owl-carousel/owl-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopnxCarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShopnxCarouselComponent = (function () {
    function ShopnxCarouselComponent(el) {
        this.el = el;
        this.defaultOptions = {};
    }
    ShopnxCarouselComponent.prototype.ngAfterViewInit = function () {
        // for (let key in this.options) {
        //   if (this.options.hasOwnProperty(key)) {
        //     this.defaultOptions[key] = this.options[key];
        //   }
        // }
        var outerHtmlElement = $(this.el.nativeElement);
        this.$carouselElement = outerHtmlElement.find('.owl-carousel').owlCarousel(this.defaultOptions);
    };
    ShopnxCarouselComponent.prototype.ngOnDestroy = function () {
        this.$carouselElement.trigger('destroy.owl.carousel');
        this.$carouselElement = null;
    };
    return ShopnxCarouselComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShopnxCarouselComponent.prototype, "options", void 0);
ShopnxCarouselComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-owl-carousel',
        template: __webpack_require__("../../../../../src/app/home/owl-carousel/owl-carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/owl-carousel/owl-carousel.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ShopnxCarouselComponent);

var _a;
//# sourceMappingURL=owl-carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"list\">\r\n    <div class=\"product-card\">\r\n      <div class=\"bestseller-badge\" *ngIf=\"product.sale\">\r\n        <md-icon>star</md-icon>\r\n        <span class=\"txt\">Sale</span>\r\n        <md-icon>star</md-icon>\r\n      </div>\r\n      <h2 routerLink=\"/product/{{product.slug}}/{{product._id}}\">{{product.name}}</h2>\r\n      <h4 class=\"variants\">\r\n        <div [ngClass]=\"{'highlight': v._id === i._id }\" class=\"variant\" *ngFor=\"let v of product?.variants\" (click)=\"changeVariant(v)\"\r\n          fxFlex>{{v.size}}</div>\r\n      </h4>\r\n      <figure>\r\n        <img [src]=\"i?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\" />\r\n      </figure>\r\n      <span class=\"price\"> {{i?.price | currency : Settings.currency.code : true}} \r\n        <del class=\"del\" *ngIf=\"i?.price !== i?.mrp\">{{i?.mrp | currency : Settings.currency.code : true}}</del>\r\n      </span>\r\n      <cart-buttons [variant]=\"i\" [product]=\"product\"></cart-buttons>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/product-card/product-card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bestseller-badge {\n  position: absolute;\n  top: 3px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n\n.bestseller-badge md-icon {\n  font-size: 10px;\n  margin-top: 5px; }\n\n#content .list {\n  text-align: center; }\n\n.product-card {\n  padding-top: 20px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n  height: 100%;\n  min-width: 250px !important;\n  max-width: 450px !important; }\n\n.product-card {\n  display: inline-block;\n  background-color: #fff;\n  position: relative;\n  z-index: 20;\n  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-bottom: 40px;\n  padding-bottom: 30px;\n  transition: all 250ms ease-out; }\n  .product-card span.tag {\n    position: absolute;\n    left: 0px;\n    width: 28px;\n    height: 50px;\n    line-height: 40px;\n    color: #fff;\n    font-size: 14px; }\n    .product-card span.tag:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      z-index: -1;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 40px 40px 0 0;\n      border-color: #ff57ee transparent transparent transparent; }\n  .product-card h2 {\n    width: 100%;\n    font-size: 24px;\n    font-weight: 700;\n    color: #323232;\n    padding: 0px;\n    margin: 30px 0 0;\n    text-transform: uppercase;\n    height: 1.2em;\n    overflow: hidden;\n    cursor: pointer; }\n  .product-card h4 {\n    width: 100%;\n    font-size: 14px;\n    padding: 0px;\n    margin: 5px 0 0;\n    font-weight: 300;\n    letter-spacing: 4px;\n    color: #bbb; }\n  .product-card figure {\n    width: 100%;\n    display: inline-block;\n    margin: 0px;\n    padding: 0px; }\n    .product-card figure img {\n      display: inline-block;\n      width: 100%;\n      margin: 30px 0; }\n  .product-card .price {\n    width: 100%;\n    margin-bottom: 20px;\n    font-size: 36px;\n    display: block;\n    color: #feca16;\n    font-weight: 400; }\n  .product-card:hover {\n    box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.3); }\n  .product-card .variants {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%; }\n  .product-card .variant {\n    padding: 10px;\n    margin: 4px;\n    box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.4);\n    cursor: pointer; }\n  .product-card .price del {\n    font-size: 12px;\n    color: #999; }\n  .product-card .highlight {\n    background-color: lightgrey; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = (function () {
    function ProductCardComponent() {
        this.Settings = __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */];
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        this.i = this.product.variants[0];
    };
    ProductCardComponent.prototype.changeVariant = function (i) {
        this.i = i;
    };
    return ProductCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductCardComponent.prototype, "product", void 0);
ProductCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'product-card',
        template: __webpack_require__("../../../../../src/app/home/product-card/product-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/product-card/product-card.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductCardComponent);

//# sourceMappingURL=product-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/product/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<div [ngBusy]=\"busy\"></div>\r\n<div class=\"page-title\">\r\n  <div class=\"sort-products md-whiteframe-z2\">\r\n    <div>\r\n      <a routerLink=\"/\">Home</a> > <a routerLink=\"/shop\">Products</a> > {{product.name}}\r\n    </div>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n  <div fxLayout=\"row\" fxLayout.xs=\"column\">\r\n    <div class=\"side-thumb\" fxLayout=\"column\" fxLayout.xs=\"row\" fxFlexOrder.xs=1>\r\n      <div *ngFor=\"let v of product.variants; let i = index;\" (click)=\"changeIndex(i);\">\r\n        <img *ngIf=\"v.size!=product.variants[selectedIndex]?.size\" src=\"{{v.image}}\" onError=\"this.src='/assets/img/product-placeholder.png'\"\r\n          alt=\"{{product.name}}\" />\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"column main-product\">\r\n      <img src=\"{{product?.variants[selectedIndex]?.image}}\" onError=\"this.src='/assets/img/product-placeholder.png'\" alt=\"{{product.name}}\"\r\n      />\r\n    </div>\r\n  </div>\r\n  <div class=\"product-description\">\r\n    <h2 class=\"name\">{{product.name}}</h2>\r\n    <md-divider></md-divider><br/>\r\n    <div class=\"price\">\r\n      <div class=\"price\">Price: <span class=\"text-muted\">{{product.variants[selectedIndex]?.price | currency : Settings.currency.code:true}}</span></div>\r\n      <del *ngIf=\"product?.variants[selectedIndex]?.price!=product.variants[selectedIndex]?.mrp\">\r\n        MRP: {{product?.variants[selectedIndex]?.mrp | currency : Settings.currency.code:true}}\r\n      </del>\r\n    </div>\r\n    Seller: <a (click)=\"gotoVendor(product.vendor_id)\">{{product.vendor_name}}</a>\r\n    <br/>\r\n    <md-divider></md-divider><br/>\r\n\r\n    <div class=\"row\">\r\n      <cart-buttons [variant]=\"product.variants[selectedIndex]\" [product]=\"product\"></cart-buttons>\r\n      <wish-button [variant]=\"product.variants[selectedIndex]\" [product]=\"product\"></wish-button>\r\n    </div>\r\n    <br/>\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"category\">\r\n      <div class=\"row\" *ngIf=\"product.variants[selectedIndex]?.size\">\r\n        <md-icon>format_shapes</md-icon>\r\n        <div> Size: &nbsp; </div>\r\n        <b> {{product.variants[selectedIndex]?.size}} </b>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"product.brand\">\r\n        <md-icon>verified_user</md-icon>\r\n        <div> Brand: &nbsp; </div>\r\n        <b> {{product.brand.name}} </b>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"product.category\">\r\n        <md-icon>subject</md-icon>\r\n        <div> Category: &nbsp; </div>\r\n        <b> {{product.category?.name}} </b>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <md-divider></md-divider>\r\n    <div *ngIf=\"product.info\">\r\n      <b>Description: </b>\r\n      <div class=\"description\">\r\n        {{product.info}}\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <md-divider></md-divider>\r\n    <div *ngIf=\"product.keyFeatures && product.keyFeatures?.length>0\">\r\n      <div class=\"subheader\">Key Features </div>\r\n      <ul>\r\n        <li *ngFor=\"let k of product.keyFeatures\" class=\"list\"><b>{{k.key}}</b> : {{k.val}}</li>\r\n      </ul>\r\n    </div>\r\n    <div *ngIf=\"product.features && product.features?.length>0\">\r\n      <div class=\"subheader\"> Features </div>\r\n      <ul>\r\n        <li *ngFor=\"let k of product.features\" class=\"list\"><b>{{k.key}}</b> : {{k.val}}</li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"rows\" *ngIf=\"reviewSettings?.enabled && reviews?.length===0\">\r\n      <button md-raised-button (click)=\"reviewForm()\" class=\"mat-raised circular-progress-button mat-primary\">\r\n          <i class=\"material-icons\">star</i> Be the first to review this item\r\n        </button>\r\n    </div>\r\n    <div class=\"reviews\">\r\n      <div class=\"reviews-header\" fxLayout=\"row\">\r\n        <div *ngIf=\"reviews?.length>0 && reviewSettings.enabled\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n          <div class=\"total-rating\">\r\n            <div class=\"total\"> {{rating.avg}}\r\n              <md-icon>star</md-icon>\r\n            </div>\r\n            <div>{{rating.count}} Ratings</div>\r\n            <div>{{reviewCount}} Reviews</div>\r\n          </div>\r\n          <div class=\"rating-signal\" fxFlex>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">5&nbsp;\r\n              <md-icon color=\"fill:rgb(33,150,243)\">star</md-icon>\r\n              <md-progress-bar color=\"primary\" md-mode=\"determinate\" value=\"{{rating.r5*100 / rating.count}}\"></md-progress-bar>{{rating.r5}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">4&nbsp;\r\n              <md-icon color=\"fill:rgb(33,150,243)\">star</md-icon>\r\n              <md-progress-bar md-mode=\"determinate\" value=\"{{rating.r4*100 / rating.count}}\"></md-progress-bar>{{rating.r4}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">3&nbsp;\r\n              <md-icon color=\"fill:rgb(33,150,243)\">star</md-icon>\r\n              <md-progress-bar color=\"accent\" md-mode=\"determinate\" value=\"{{rating.r3*100 / rating.count}}\"></md-progress-bar>{{rating.r3}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">2&nbsp;\r\n              <md-icon color=\"fill:rgb(255,87,34)\">star</md-icon>\r\n              <md-progress-bar color=\"warn\" md-mode=\"determinate\" value=\"{{rating.r2*100 / rating.count}}\"></md-progress-bar>{{rating.r2}}</div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">1&nbsp;\r\n              <md-icon color=\"fill:rgb(255,87,34)\">star</md-icon>\r\n              <md-progress-bar color=\"warn\" md-mode=\"determinate\" value=\"{{rating.r1*100 / rating.count}}\"></md-progress-bar>{{rating.r1}}</div>\r\n          </div>\r\n        </div>\r\n        <div fxFlexOffset=\"25px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngIf=\"reviewSettings?.enabled && reviews?.length > 0\">\r\n          <button md-raised-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"reviewForm()\">Rate & Review</button>\r\n        </div>\r\n      </div>\r\n      <md-card *ngFor=\"let review of reviews\">\r\n        <button class=\"close\" md-icon-button *ngIf=\"myReview(review)\" (click)=\"deleteReview(review)\">\r\n          <md-icon style=\"fill: #aaa\">delete</md-icon>\r\n        </button>\r\n        <div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n            <list-image [string]=\"review.message || review.rating\"></list-image>\r\n            <div fxLayout=\"column\" fxFlex>\r\n              <div *ngIf=\"review.rating\" class=\"rating-button\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div>{{review.rating}}</div>\r\n                <md-icon class=\"reviewRating\">star</md-icon>\r\n              </div>\r\n              <div fxLayout=\"column\">\r\n                <div>{{review.message}}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <md-card-actions class=\"card-actions\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <i class=\"material-icons\">person</i>&nbsp;{{review.reviewer}}&nbsp;\r\n              <i class=\"material-icons\">access_time</i>&nbsp;{{review.created | amTimeAgo}}\r\n            </div>\r\n          </div>\r\n        </md-card-actions>\r\n      </md-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/product/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductDetailComponent = (function () {
    function ProductDetailComponent(crud, route, router, auth, modal, snack, title) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.modal = modal;
        this.snack = snack;
        this.title = title;
        this.product = {};
        this.Settings = __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* Settings */];
        this.reviewSettings = __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* Settings */].reviewSettings || {};
        this.selectedIndex = 0;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.product = this.route.snapshot.data['product'];
        this.title.setTitle(this.product.name + ' - ShopNx');
        var id = this.route.snapshot.params['id'];
        this.getReviews();
    };
    ProductDetailComponent.prototype.changeIndex = function (i) {
        this.selectedIndex = i;
    };
    ProductDetailComponent.prototype.getReviews = function () {
        var _this = this;
        if (!this.product._id)
            return;
        this.busy = this.crud.get('reviews/product/' + this.product._id).subscribe(function (r) {
            _this.publishRatings(r);
            _this.reviews = r;
        }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    ProductDetailComponent.prototype.publishRatings = function (r) {
        var vm = this;
        var reviewCount = 0;
        var rating = { r5: 0, r4: 0, r3: 0, r2: 0, r1: 0, count: 0, total: 0, avg: 0 };
        r.forEach(function (i) {
            if (i.message)
                reviewCount++;
            if (i.rating)
                rating.count++;
            if (i.rating)
                rating.total = rating.total + i.rating;
            if (i.rating == 5)
                rating.r5++;
            if (i.rating == 4)
                rating.r4++;
            if (i.rating == 3)
                rating.r3++;
            if (i.rating == 2)
                rating.r2++;
            if (i.rating == 1)
                rating.r1++;
        }, this);
        this.reviewCount = reviewCount;
        rating.avg = Math.round(rating.total / rating.count * 10) / 10;
        this.rating = rating;
    };
    ProductDetailComponent.prototype.deleteReview = function (review) {
        var _this = this;
        this.modal.confirm('Are you sure to delete your review?', 'This is unrecoverable')
            .subscribe(function (result) {
            if (result)
                _this.crud.delete('reviews', review._id).subscribe(function (data) { return _this.getReviews(); }, function (err) { return _this.snack.open('Error while saving your review.', 'OK', { duration: 2000 }); });
        });
    };
    ProductDetailComponent.prototype.myReview = function (review) {
        return true;
    };
    ProductDetailComponent.prototype.reviewForm = function () {
        var _this = this;
        if (!this.auth.loggedIn) {
            this.snack.open('Please login to review', 'OK', { duration: 2000 });
            this.modal.login().subscribe(function (data) {
                if (data)
                    _this.review();
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
            });
            return;
        }
        else {
            this.review();
        }
    };
    ProductDetailComponent.prototype.review = function () {
        var _this = this;
        this.modal.review()
            .subscribe(function (data) {
            if (!data) {
                _this.message = 'Please rate the item from a scale of 1-5';
                return;
            }
            _this.user = _this.auth.currentUser;
            data.pid = _this.product._id;
            data.pname = _this.product.name;
            data.pslug = _this.product.slug;
            data.vendor_id = _this.product.vendor_id;
            data.vendor_name = _this.product.vendor_name;
            data.vendor_email = _this.product.vendor_email;
            data.email = _this.user.email;
            data.reviewer = _this.user.name;
            _this.crud.post('reviews', data).subscribe(function (res) {
                _this.getReviews();
                if (_this.reviewSettings.moderate)
                    _this.snack.open('Your review is under moderation. Will be visible to public after approval.', 'OK', { duration: 2000 });
            }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        });
    };
    ProductDetailComponent.prototype.gotoVendor = function (id) {
        // this.$state.go('vendor', { id: id }, { reload: false });
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'product-detail-component',
        template: __webpack_require__("../../../../../src/app/home/product/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/product/product-detail.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["h" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["h" /* Title */]) === "function" && _g || Object])
], ProductDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/product/product-detail.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card{\r\n    margin-bottom: 10px;\r\n}\r\n.card-actions{\r\n    color:#777;\r\n    padding-left: 70px;\r\n}\r\nlist-image{\r\n    margin-left:-20px;\r\n}\r\n.card-actions .material-icons{\r\n    font-size: 15px;\r\n}\r\n.reviewRating{\r\n    font-size: 18px;\r\n}\r\n.mat-icon{\r\n    margin-top: 2px;\r\n    height: 18px;\r\n    width: auto;\r\n}\r\n.rating-signal .mat-icon{\r\n    margin-top: -7px;\r\n    height: 18px;\r\n    width: auto;\r\n}\r\n.category .mat-icon{\r\n    font-size: 16px;\r\n}\r\n.rating-button {\r\n    background-color: #32cd32;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    padding: 0 6px;\r\n    width:40px;\r\n}\r\n.subheader {\r\n  font-size: 1rem;\r\n  color: rgba(0, 0, 0, .54);\r\n  text-align: left;\r\n  height: 32px;\r\n  padding-top: 8px;\r\n  margin-left: 16px;\r\n}\r\n \r\n.list {\r\n  font-size: 1rem;\r\n  color: rgba(0, 0, 0, .87);\r\n  text-align: left;\r\n  height: 20px;\r\n  padding-top: 5px;\r\n  display: block;\r\n  border-bottom: 1px solid rgba(0,0,0,.12);\r\n }\r\n \r\n.side-thumb img{\r\n    width: 100%;\r\n    max-width: 100px;    \r\n    cursor: pointer;\r\n}\r\n.main-product{\r\n    -webkit-box-flex:4;\r\n        -ms-flex:4;\r\n            flex:4;\r\n    margin: 0 10px;\r\n    max-width: 550px;        \r\n}\r\n.main-product img{\r\n    width: 100%;\r\n}\r\n.reviews list-image div, list-image img {\r\n    margin: 0;\r\n}\r\n.reviews{\r\n    padding: 20px 0;\r\n}\r\n.reviews list-image div {\r\n  text-align: center;\r\n}\r\n.reviews md-card-actions span{\r\n    margin-left: 10px;\r\n    color: #999;\r\n}\r\n.reviews md-card md-card-content{\r\n    padding: 0 16px;\r\n}\r\n.reviews .reviews-header .total-rating{\r\n    margin: 10px 50px 10px 10px;\r\n    \r\n}\r\n.reviews .rating-signal md-progress-linear{\r\n    width:150px;\r\n    margin: 0 20px;\r\n}\r\n.reviews .reviews-header .total{\r\n    font-size: 2em;\r\n    margin-bottom : 2px;\r\n}\r\n.reviews md-card-header-text .md-title{\r\n    /*font-weight: bold;*/\r\n}\r\n.reviews md-card-header-text .md-subhead .rating-button{\r\n    font-size: 1.1em;\r\n    background-color: limegreen;\r\n    color: #fff;\r\n    width: 35px;\r\n    border-radius: 4px;\r\n    padding: 0 6px;\r\n}\r\n.reviews md-card-header-text .md-subhead .rating-button ng-md-icon{\r\n    margin-top: -3px;\r\n}\r\n.product-description{\r\n    margin: 10px;\r\n}\r\n.product-details-container .price{\r\n  font-size: 25px;\r\n  color: #555;\r\n}\r\n.product-details-container .price .text-muted{\r\n  font-size: 28px;\r\n  color: #333;\r\n}\r\n.product-details-container .md-content{\r\n    margin-left: 10px;\r\n}\r\n/*.side-thumb{\r\n    width:150px;\r\n}*/\r\n.side-thumb md-card{\r\n    cursor: pointer;\r\n    max-width: 150px;\r\n}\r\n.side-thumb md-card img{\r\n    max-width: 150px;\r\n}\r\n/*.product-details-container md-card img{\r\n    width:100%;\r\n}*/\r\n.big-thumb{\r\n    width:40%;\r\n}\r\n.detail-cta{\r\n    width:15%;\r\n}\r\nul.filter-list{\r\n    padding-left: 0;\r\n}\r\nul.filter-list li {\r\n    cursor: pointer;\r\n}\r\n.open .filters-col {\r\n    position: relative;\r\n}\r\n.filters-col {\r\n    background-color: #ffffff;\r\n}\r\n.filters-col {\r\n    width: 280px;\r\n    float: left;\r\n    transition: opacity 300ms ease-out 0s;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    padding: 4px 20px 4px;\r\n    position: absolute;\r\n}\r\n.filters-col__collapse__title {\r\n    cursor: pointer;\r\n    padding: 20px 20px 20px 0;\r\n    margin-top: 0 !important;\r\n    position: relative;\r\n}\r\n.text-uppercase {\r\n    text-transform: uppercase;\r\n}\r\nh4 {\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n    font-size: 1.692em;\r\n    padding: 0 0 0.9em;\r\n    margin: 0;\r\n}\r\n.filters-col__collapse__content {\r\n    padding-bottom: 15px;\r\n}\r\n.filter-list li {\r\n    margin: 0 0 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.checkbox-group {\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/shop/shop.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.products-container{\r\n    height:81vh;\r\n    overflow-x: hidden !important;\r\n}\r\n.filter-container{\r\n    overflow-x: hidden;\r\n}\r\n.product-cards{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.product-card{\r\n  margin: 10px;  \r\n  max-width: 320px; \r\n}\r\nmd-sidenav h3{\r\n    margin-top: 0;\r\n}\r\nmd-sidenav md-divider{\r\n    padding: 8px 8px 10px 8px;\r\n}\r\nmd-sidenav h4 {\r\n    text-transform: uppercase;\r\n    font-size: 16px;\r\n    /*font-weight: 400;*/\r\n}\r\nmd-sidenav rzslider {\r\n    margin-bottom: 30px;\r\n}\r\nmd-sidenav label {\r\n    cursor: pointer;\r\n}\r\nmd-chips.md-blue-theme .md-chip {\r\n    color: #fff;\r\n    font-size: 11px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n}\r\n.filter-brands{\r\n  max-height: 200px;\r\n}\r\n.applied-filters{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    margin-top:5px;\r\n}\r\n.dark{\r\n    color: rgba(0, 0, 0, 0.54); \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<md-sidenav-container class=\"products-container\">\r\n  <md-sidenav #sidenav mode=\"side\" [opened]=\"isLargeScreen()\" class=\"filter-container\">\r\n    <form [formGroup]=\"filterForm\" #form autocomplete=\"false\" novalidate>\r\n      <md-card>\r\n        <button class=\"close\" md-button md-icon-button (click)=\"sidenav.close()\"><md-icon>close</md-icon></button>\r\n        <md-card-content>\r\n          <h3>Adjust Price</h3>\r\n          <nouislider [config]=\"priceSliderConfig\" [min]=\"priceRange.min\" [max]=\"priceRange.max\" (change)=\"priceSliderChanged($event)\"\r\n            [tooltips]=\"[ true, true ]\" style=\"margin-top: 4em;\"></nouislider>\r\n        </md-card-content>\r\n      </md-card>\r\n      <!-- <md-card>\r\n        <md-card-content>\r\n          <h4>Filter Brands</h4>\r\n          <div class=\"filter-brands\">\r\n            <div *ngFor=\"let i of brands\">\r\n              <md-checkbox (click)=\"toggleBrands(i, fl.brands)\">{{i.name}}</md-checkbox>\r\n            </div>\r\n          </div>\r\n        </md-card-content>\r\n      </md-card>\r\n      <div class=\"filter-features\">\r\n        <md-card *ngFor=\"let k of features\">\r\n          <md-card-content>\r\n            <h4>{{k.key}}</h4>\r\n            <p *ngFor=\"let i of k.v\">\r\n              <md-checkbox (checked)=\"exists(i, fl.features[k.key])\" (click)=\"toggleFeatures(i, k.key)\">{{i}}</md-checkbox>\r\n            </p>\r\n          </md-card-content>\r\n        </md-card>\r\n      </div> -->\r\n    </form>\r\n  </md-sidenav>\r\n\r\n  <div [ngBusy]=\"busy\"></div>\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxFlex style=\"height:100px !important;\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between center\" style=\"width:100%\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\r\n          <i class=\"material-icons app-toolbar-menu dark\">filter_list</i>\r\n        </button>\r\n        <span>Showing {{meta.skip}} of {{meta.total}}</span>\r\n      </div>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"products.length>0\">\r\n        <span fxHide.xs>Sort: &nbsp;</span>\r\n        <md-button-toggle-group #group=\"mdButtonToggleGroup\">\r\n          <md-button-toggle value=\"price\" (click)=\"sortNow('variants.price')\">\r\n            {{Settings.currency.symbol}}\r\n            <md-icon>arrow_downward</md-icon>\r\n          </md-button-toggle>\r\n          <md-button-toggle value=\"-price\" (click)=\"sortNow('-variants.price')\">\r\n            {{Settings.currency.symbol}}\r\n            <md-icon>arrow_upward</md-icon>\r\n          </md-button-toggle>\r\n          <md-button-toggle value=\"name\" (click)=\"sortNow('name')\">\r\n            A-Z\r\n            <md-icon>arrow_downward</md-icon>\r\n          </md-button-toggle>\r\n          <md-button-toggle value=\"-name\" (click)=\"sortNow('-name')\">\r\n            Z-A\r\n            <md-icon>arrow_upward</md-icon>\r\n          </md-button-toggle>\r\n        </md-button-toggle-group>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"applied-filters\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n      <div *ngFor=\"let b of fl.brands\" class=\"applied-filters\">\r\n        <button mdButton md-raised-button>\r\n          <md-icon md-menu-align-target>verified_user</md-icon>\r\n          {{b.name}}\r\n        </button>\r\n      </div>\r\n      <button *ngIf=\"searchParam\" md-raised-button routerLink=\"/shop\">\r\n        <md-icon md-menu-align-target>subject</md-icon>\r\n        {{searchParam}}\r\n      </button>\r\n      <div *ngIf=\"categoryQueried && fl && fl.categories\" class=\"applied-filters\">\r\n        <button *ngFor=\"let c of fl.categories\" md-raised-button>\r\n          <md-icon md-menu-align-target>subject</md-icon>\r\n          {{c.slug}}\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Type\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Type\" md-raised-button>\r\n          <md-icon md-menu-align-target>format_shapes</md-icon>\r\n          {{f}}\r\n          <md-icon >close</md-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Fit\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Fit\" md-raised-button>\r\n          <md-icon md-menu-align-target>format_shapes</md-icon>\r\n          {{f}}\r\n          <md-icon >close</md-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Fabric\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Fabric\" md-raised-button>\r\n          <md-icon md-menu-align-target>format_shapes</md-icon>\r\n          {{f}}\r\n          <md-icon >close</md-icon>\r\n        </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Neck\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Neck\" md-raised-button>\r\n            <md-icon md-menu-align-target>format_shapes</md-icon>\r\n            {{f}}\r\n            <md-icon >close</md-icon>\r\n          </button>\r\n      </div>\r\n      <div *ngIf=\"fl.features.Color\" class=\"applied-filters\">\r\n        <button *ngFor=\"let f of fl.features.Color\" md-raised-button>\r\n          <md-icon md-menu-align-target>format_shapes</md-icon>\r\n          {{f}}\r\n          <md-icon >close</md-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <md-card *ngIf=\"!meta.busy && products.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n      <div>No Product match the search criteria</div>\r\n      <button md-button md-raised-button class=\"mat-primary\" routerLink=\"/shop\"><md-icon>home</md-icon>Browse All...</button>\r\n    </md-card>\r\n    <div class=\"product-cards\" infinite-scroll infiniteScrollDistance=\"1\" infiniteScrollThrottle=\"300\" (scrolled)=\"scroll()\"\r\n      fxFlex>\r\n      <product-card *ngFor=\"let product of products\" [product]=\"product\" class=\"product-card products\"></product-card>\r\n    </div>\r\n  </div>\r\n</md-sidenav-container>\r\n<div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n  <button md-button md-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\"><md-icon>arrow_downwards</md-icon>Load More...</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShopComponent = (function () {
    function ShopComponent(crud, snack, _fb, route, router, http) {
        this.crud = crud;
        this.snack = snack;
        this._fb = _fb;
        this.route = route;
        this.router = router;
        this.http = http;
        this.products = [];
        this.api = 'products';
        this.fl = { brands: [], categories: [], features: {}, price: [] };
        this.meta = { skip: 0, limit: 10 };
        this.scrollConfig = { suppressScrollX: true };
        this.priceSliderConfig = {
            start: [20, 8000],
            connect: true,
            range: {
                'min': 0,
                'max': 10000 // overridden by [max]
            },
            format: {
                to: function (value) {
                    return __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */].currency.symbol + Math.round(value);
                },
                from: function (value) {
                    return value.replace(__WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */].currency.symbol, '');
                }
            }
        };
        this.priceRange = {};
        this.myDate = new Date();
        this.Settings = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */];
    }
    ShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fl = {};
        this.q = {};
        this.fl.brands = [];
        this.fl.price = [];
        this.fl.categories = [];
        this.fl.features = { Type: [], Fit: [], Fabric: [], Neck: [], Color: [] };
        this.featuresFilter = {};
        this.brandsFilter = [];
        this.priceSlider = {};
        this.filterForm = this._fb.group({
            slider: [10]
        });
        this.http.get('/api/brands', { params: { limit: 3, sort: '-brand' } }).map(function (doc) { return doc.json(); }).subscribe();
        this.flush();
        this.searchParam = this.route.queryParams['value'].q;
        (this.searchParam) ? this.searchProducts(this.searchParam) : this.checkCategory(); // Required on page load too
        this.sub = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.flush();
            _this.searchParam = _this.route.queryParams['value'].q;
            (_this.searchParam) ? _this.searchProducts(_this.searchParam) : _this.checkCategory(); // Required on page load too
        });
        this.crud.get('products/count').subscribe(function (data) { return _this.meta.total = data[0].count; });
        this.crud.get('products/priceRange').subscribe(function (data) {
            _this.priceRange = data;
            _this.priceSliderConfig.range.min = data.min;
            _this.priceSliderConfig.range.max = data.max;
        });
        this.busy = this.crud.get('brands').subscribe(function (data) { return _this.brands = data; }, this.err);
        this.busy = this.crud.get('features/group').subscribe(function (data) { return _this.features = data; }, this.err);
    };
    ShopComponent.prototype.checkCategory = function () {
        if (this.route.params['value'].categoryId) {
            this.categoryQueried = true;
            this.fl.categories = [{ _id: this.route.params['value'].categoryId, slug: this.route.params['value'].slug }];
            this.filter();
        }
        else {
            this.categoryQueried = false;
            this.fl.search = undefined; // Required when browse all button at search page is clicked
            this.filter();
        }
    };
    ShopComponent.prototype.isLargeScreen = function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 1024) {
            return true;
        }
        else {
            return false;
        }
    };
    ShopComponent.prototype.getProducts = function (q, scrolled) {
        var _this = this;
        q = q || {};
        var params = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["URLSearchParams"]();
        params.set('limit', '10');
        q.limit ? params.set('limit', q.limit) : params.set('limit', '10');
        q.skip ? params.set('skip', q.skip) : params.set('skip', '0');
        if (this.meta.sort) {
            params.set('sort', this.meta.sort);
        }
        ;
        if (q.where)
            params.set('where', JSON.stringify(q.where));
        if (q.search)
            params.set('search', JSON.stringify(q.search));
        if (this.meta.busy || this.meta.end)
            return;
        this.meta.busy = true;
        this.busy = this.crud.get('products', params).subscribe(function (data) {
            _this.meta.busy = false;
            _this.meta.skip = data.length + _this.meta.skip || 0;
            _this.meta.end = (data.length >= 5) ? false : true;
            _this.products = scrolled ? _this.products.concat(data) : data;
        }, function (error) { _this.meta.busy = false; _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    ShopComponent.prototype.filter = function (q, scrolled) {
        if (q === void 0) { q = {}; }
        var f = [];
        if (this.fl.features) {
            __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.fl.features, function (val, key) {
                if (val.length > 0) {
                    f.push({ 'features.key': key, 'features.val': { $in: val } });
                }
            });
        }
        if (this.fl.brands) {
            if (this.fl.brands.length > 0) {
                var brandIds_1 = [];
                __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.fl.brands, function (brand) {
                    brandIds_1.push(brand._id);
                });
                f.push({ 'brand': { $in: brandIds_1 } });
            }
        }
        if (this.fl.categories) {
            this.categories = this.fl.categories;
            if (this.fl.categories.length > 0) {
                var categoryIds_1 = [];
                __WEBPACK_IMPORTED_MODULE_7_lodash__["forEach"](this.fl.categories, function (category) {
                    categoryIds_1.push(category._id);
                });
                f.push({ 'category': { $in: categoryIds_1 } });
            }
        }
        if (this.fl.price && this.fl.price.length > 0) {
            f.push({ 'variants.price': { $gt: this.fl.price[0], $lt: this.fl.price[1] } }); // For price slider
        }
        if (this.fl.search) {
            q.search = this.fl.search; // For price slider
        }
        if (f.length > 0) {
            q.where = { $and: f };
        }
        else {
            q.where = {};
        }
        this.getProducts(q, scrolled);
    };
    ShopComponent.prototype.toggleBrands = function (item, list) {
        if (!this.brandsFilter)
            this.brandsFilter = [];
        var listArray = this.brandsFilter;
        var idx = listArray.indexOf(item);
        if (idx > -1)
            listArray.splice(idx, 1);
        else
            listArray.push(item);
        this.fl.brands = this.brandsFilter;
        this.flush(); // To allow http get request
        this.filter(); // Filters the product list with this.fl as global variable
    };
    ShopComponent.prototype.toggleFeatures = function (item, list) {
        if (!this.featuresFilter[list])
            this.featuresFilter[list] = [];
        var listArray = this.featuresFilter[list];
        var idx = listArray.indexOf(item);
        if (idx > -1)
            listArray.splice(idx, 1);
        else
            listArray.push(item);
        this.fl.features = this.featuresFilter;
        this.flush(); // To allow http get request    
        this.filter(); // Filters the product list with this.fl as global variable
    };
    ShopComponent.prototype.sortNow = function (sort) {
        this.flush(); // To allow http get request
        this.meta.sort = sort;
        this.filter();
    };
    ShopComponent.prototype.searchProducts = function (q, flush) {
        if (flush === void 0) { flush = false; }
        this.flush();
        this.fl.search = { name: q };
        this.filter();
    };
    ShopComponent.prototype.scroll = function () {
        if (this.meta.busy || this.meta.end)
            return;
        this.filter({ skip: this.meta.skip, limit: 10 }, true);
    };
    ShopComponent.prototype.flush = function () {
        this.meta.end = false;
        this.meta.skip = 0;
        this.meta.limit = 10;
        this.products = []; // Reset query parameters        
    };
    ShopComponent.prototype.removeFeatures = function (k, v) {
        var index = this.fl.features[k].indexOf(v);
        if (index > -1) {
            this.fl.features[k].splice(index, 1);
            this.filter();
        }
    };
    ShopComponent.prototype.removeBrand = function (brand) {
        var index = this.fl.brands.indexOf(brand);
        if (index > -1) {
            this.fl.brands.splice(index, 1);
            this.filter();
        }
    };
    ShopComponent.prototype.removeCategory = function () {
        this.fl.categories = undefined;
        this.filter();
    };
    ShopComponent.prototype.err = function (err) {
        var _this = this;
        (function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
    };
    ShopComponent.prototype.priceSliderChanged = function (price) {
        this.flush(); // To allow http get request    
        this.fl.price = price;
        this.filter();
    };
    ShopComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe(); // Used for searching
    };
    return ShopComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ShopComponent.prototype, "sort", void 0);
ShopComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'shopnx-home',
        template: __webpack_require__("../../../../../src/app/home/shop/shop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/shop/shop.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["Http"]) === "function" && _f || Object])
], ShopComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=shop.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/success/success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/success/success.component.html":
/***/ (function(module, exports) {

module.exports = "<megamenu></megamenu>\r\n<div class=\"app-content\">\r\n  <div class=\"page-title\">\r\n    <div *ngIf=\"msg\"> {{msg}} </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/success/success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuccessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SuccessComponent = (function () {
    function SuccessComponent(route) {
        this.route = route;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.msg = this.route.snapshot.queryParams['msg'];
        this.id = this.route.snapshot.queryParams['id'];
    };
    return SuccessComponent;
}());
SuccessComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-success',
        template: __webpack_require__("../../../../../src/app/home/success/success.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/success/success.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object])
], SuccessComponent);

var _a;
//# sourceMappingURL=success.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/wish-button/wish-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/wish-button/wish-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button *ngIf=\"wished\" md-button class=\"mat-raised circular-progress-button mat-warn\" (click)=\"toggleWishlist()\">\r\n  <md-icon>favorite</md-icon>&nbsp;Wished\r\n</button>\r\n<button *ngIf=\"!wished\" md-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"toggleWishlist()\">\r\n  <md-spinner color=\"#fff\" class=\"app-spinner\" mode=\"indeterminate\" *ngIf=\"loading\"></md-spinner>\r\n  <md-icon>favorite</md-icon>&nbsp;Add To Wishlist\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/home/wish-button/wish-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WishButtonComponent = (function () {
    function WishButtonComponent(crud, auth, snack, modal) {
        this.crud = crud;
        this.auth = auth;
        this.snack = snack;
        this.modal = modal;
        this.loading = false;
    }
    WishButtonComponent.prototype.ngOnInit = function () {
    };
    WishButtonComponent.prototype.ngOnChanges = function () {
        if (!this.auth.loggedIn)
            return;
        this.checkWish();
    };
    WishButtonComponent.prototype.checkWish = function () {
        var _this = this;
        this.wished = false;
        this.loading = true;
        var wishlist = this.crud.get('wishlists/product/' + this.product._id + '/' + this.variant._id, null, true).subscribe(function (data) {
            _this.wished = data[0] ? true : false;
            _this.loading = false;
        });
    };
    // On click select star
    WishButtonComponent.prototype.toggleWishlist = function () {
        var _this = this;
        if (this.readOnly)
            return;
        if (!this.auth.loggedIn) {
            this.modal.login().subscribe(function (data) {
                if (data) {
                    _this.checkWish();
                    _this.save();
                }
                ;
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
            });
            return;
        }
        else {
            this.save();
        }
    };
    WishButtonComponent.prototype.save = function () {
        var _this = this;
        var p = { product: this.product, variant: this.variant };
        this.loading = true;
        this.crud.post('wishlists', p).subscribe(function (res) {
            if (res.msg !== 'deleted') {
                _this.snack.open('Added to your wishlist', 'OK', { duration: 2000 });
                _this.wished = true;
            }
            else {
                _this.wished = false;
            }
            _this.loading = false;
        }, function (err) {
            _this.snack.open('Please logout and login again', 'OK', { duration: 2000 });
        });
    };
    return WishButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], WishButtonComponent.prototype, "readOnly", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WishButtonComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], WishButtonComponent.prototype, "variant", void 0);
WishButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'wish-button',
        template: __webpack_require__("../../../../../src/app/home/wish-button/wish-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/wish-button/wish-button.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], WishButtonComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=wish-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/cancel-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".angular-material-rating{\r\n    margin: 0 20px;\r\n}\r\n.angular-material-rating .button {\r\n  cursor: pointer; \r\n}\r\n.angular-material-rating .button md-icon {\r\n  font-size: 30px; \r\n}\r\n.angular-material-rating {\r\n  text-shadow: 0.06em .04em #000000; \r\n}\r\n.angular-material-rating .star-on md-icon {\r\n  color: limegreen; \r\n}\r\n.angular-material-rating .star-off md-icon {\r\n  color: #ddd; \r\n}\r\n.error{\r\n  color: mediumvioletred;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/cancel-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <content fxLayout=\"column\">\r\n    <section fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <h1>Cancel Order</h1>\r\n      <form [formGroup]=\"myForm\" name=\"form\" novalidate>\r\n        <section class=\"section\" fxLayout=\"column\">\r\n          <md-input-container>\r\n            <label>Reason</label>\r\n            <textarea name=\"order\" rows=\"3\" mdInput formControlName=\"comment\"></textarea>\r\n            <!--<div ng-messages=\"form.comment.$error\" ng-if=\"form.comment.$dirty\">\r\n              <div ng-message=\"required\">Reason required</div>\r\n            </div>-->\r\n          </md-input-container>\r\n        </section>\r\n        <div class=\"md-dialog-actions\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n          <div class=\"error\" fxLayoutAlign=\"center center\">{{message}}</div>\r\n          <div fxLayout=\"row\">\r\n            <button type=\"button\" md-raised-button class=\"mat-primary\" (click)=\"dialogRef.close({comment: myForm.value.comment})\">\r\n            <md-icon>save</md-icon>\r\n            Save</button>\r\n            <button type=\"button\" md-button (click)=\"dialogRef.close()\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </section>\r\n  </content>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/cancel-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancelOrderComponent = (function () {
    function CancelOrderComponent(auth, crud, _fb, dialogRef) {
        this.auth = auth;
        this.crud = crud;
        this._fb = _fb;
        this.dialogRef = dialogRef;
    }
    CancelOrderComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            comment: [''],
        });
    };
    return CancelOrderComponent;
}());
CancelOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'cancel-order',
        template: __webpack_require__("../../../../../src/app/modal/cancel-order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/cancel-order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */]) === "function" && _d || Object])
], CancelOrderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cancel-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmModal = (function () {
    function ConfirmModal(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmModal;
}());
ConfirmModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'confirm-dialog',
        template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" md-raised-button  class=\"mat-primary\"\n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" md-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmModal);

var _a;
//# sourceMappingURL=confirm-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cancel_order_component__ = __webpack_require__("../../../../../src/app/modal/cancel-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_login_modal_component__ = __webpack_require__("../../../../../src/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__review_form_component__ = __webpack_require__("../../../../../src/app/modal/review-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirm_modal_component__ = __webpack_require__("../../../../../src/app/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ModalModule = (function () {
    function ModalModule() {
    }
    return ModalModule;
}());
ModalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MdDialogModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_6__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_0__cancel_order_component__["a" /* CancelOrderComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_6__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_0__cancel_order_component__["a" /* CancelOrderComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__modal_service__["a" /* ModalService */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__confirm_modal_component__["a" /* ConfirmModal */], __WEBPACK_IMPORTED_MODULE_6__review_form_component__["a" /* ReviewFormComponent */], __WEBPACK_IMPORTED_MODULE_2__account_login_login_modal_component__["a" /* LoginModalComponent */], __WEBPACK_IMPORTED_MODULE_0__cancel_order_component__["a" /* CancelOrderComponent */]
        ],
    })
], ModalModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ "../../../../../src/app/modal/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cancel_order_component__ = __webpack_require__("../../../../../src/app/modal/cancel-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account_login_login_modal_component__ = __webpack_require__("../../../../../src/app/account/login/login-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_modal_component__ = __webpack_require__("../../../../../src/app/modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__review_form_component__ = __webpack_require__("../../../../../src/app/modal/review-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalService = (function () {
    function ModalService(dialog, auth) {
        this.dialog = dialog;
        this.auth = auth;
    }
    ModalService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_modal_component__["a" /* ConfirmModal */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    ModalService.prototype.review = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__review_form_component__["a" /* ReviewFormComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.cancelOrder = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__cancel_order_component__["a" /* CancelOrderComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.login = function () {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__account_login_login_modal_component__["a" /* LoginModalComponent */]);
        return dialogRef.afterClosed();
    };
    ModalService.prototype.logout = function () {
        this.auth.logout();
    };
    return ModalService;
}());
ModalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ModalService);

var _a, _b;
//# sourceMappingURL=modal.service.js.map

/***/ }),

/***/ "../../../../../src/app/modal/review-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".angular-material-rating{\r\n    margin: 0 20px;\r\n    cursor: pointer;\r\n}\r\n.angular-material-rating .button {\r\n  cursor: pointer; \r\n}\r\n.angular-material-rating .button md-icon {\r\n  font-size: 30px; \r\n}\r\n.angular-material-rating {\r\n  text-shadow: 0.06em .04em #000000; \r\n}\r\n.angular-material-rating .star-on md-icon {\r\n  color: limegreen; \r\n}\r\n.angular-material-rating .star-off md-icon {\r\n  color: #ddd; \r\n}\r\n.error{\r\n  color: mediumvioletred;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/review-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <section fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n    <h1 fxFlex>Rating & Review</h1>\r\n    <form [formGroup]=\"myForm\" #form autocomplete=\"false\" novalidate fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n      <div class=\"row\">\r\n        <div class=\"angular-material-rating\" *ngFor=\"let item of starsArray; let i = index;\">\r\n          <a class=\"button star-button\" [class]=\"item.class\" (mouseover)=\"setMouseOverRating(i + 1)\" (mouseleave)=\"setMouseOverRating(rating)\"\r\n            (click)=\"setRating(i + 1)\">\r\n            <md-icon>star</md-icon>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <br/>\r\n      <md-input-container fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <textarea mdInput formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n      </md-input-container>\r\n      <div class=\"error\">{{message}}</div>\r\n      <div class=\"md-dialog-actions\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\r\n        <button type=\"button\" md-raised-button class=\"mat-primary\" (click)=\"dialogRef.close({rating: rating, message: myForm.value.message})\"\r\n          fxFlex>\r\n            <md-icon>save</md-icon>\r\n            Save</button>\r\n        <button type=\"button\" md-button (click)=\"dialogRef.close()\">Cancel</button>\r\n      </div>\r\n    </form>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/review-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewFormComponent = (function () {
    // @Input() product;
    // @Output() save = new EventEmitter();
    function ReviewFormComponent(auth, crud, _fb, dialogRef) {
        this.auth = auth;
        this.crud = crud;
        this._fb = _fb;
        this.dialogRef = dialogRef;
    }
    ReviewFormComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            message: [''],
        });
        var starsArray = [];
        // Initialize to 5 stars 
        for (var index = 0; index < 5; index++) {
            var starItem = {
                index: index,
                class: 'star-off'
            };
            starsArray.push(starItem);
        }
        this.starsArray = starsArray;
        // this.user = this.auth.getMe();
    };
    // On mousover
    ReviewFormComponent.prototype.setMouseOverRating = function (rating) {
        if (this.readOnly) {
            return;
        }
        this.validateStars(rating);
    };
    ;
    // Highlight stars
    ReviewFormComponent.prototype.validateStars = function (rating) {
        if (!this.starsArray || this.starsArray.length === 0) {
            return;
        }
        for (var index = 0; index < this.starsArray.length; index++) {
            var starItem = this.starsArray[index];
            if (index <= (rating - 1)) {
                starItem.class = 'star-on';
            }
            else {
                starItem.class = 'star-off';
            }
        }
    };
    // On click select star
    ReviewFormComponent.prototype.setRating = function (rating) {
        if (this.readOnly)
            return;
        this.rating = rating;
        this.validateStars(this.rating);
        // $timeout(function () {
        // this.onRating({
        //   rating: this.rating
        // });
        // });
    };
    return ReviewFormComponent;
}());
ReviewFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'review-form',
        template: __webpack_require__("../../../../../src/app/modal/review-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modal/review-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */]) === "function" && _d || Object])
], ReviewFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
var Settings = (function () {
    function Settings() {
    }
    return Settings;
}());

Settings.demo = false;
Settings.reviewSettings = {
    enabled: true,
    moderate: false // If enabled, the review will be visible to public after admin approval
};
Settings.userRoles = ['user', 'vendor', 'manager', 'admin']; // This should be in ascending order of authority. e.g. In this case guest will not have access to any other role, where as admin will have the role of guest+user+vendor+manager+admin
Settings.paymentStatus = ['Pending', 'Paid', 'created']; // On success from Paypal it stores as created
Settings.orderStatus = ['Payment Pending', 'Order Placed', 'Paid', 'Order Accepted', 'Order Executed', 'Shipped', 'Delivered', 'Not in Stock', 'Cancellation Requested', 'Cancelled'];
Settings.paymentMethods = ['PayPal', 'COD'];
Settings.country = { name: 'India', code: 'IN' };
Settings.currency = {
    symbol: 'Rs',
    code: 'INR',
    paypal: 'USD',
    exchange_rate: '0.015' // Paypal currency code(USD) / Shop currency (INR) ***  exchange_rate should not be 0 else it will generate divided by 0 error
};
Settings.menu = [
    { name: 'Products', url: '/admin/product', icon: 'store', authenticate: 'vendor', color: 'black', dashboard: true },
    { name: 'My Orders', url: '/admin/my-orders', icon: 'watch_later', authenticate: 'user', color: 'grey', dashboard: true },
    { name: 'Manage Orders', url: '/admin/manage-orders', icon: 'history', authenticate: 'manager', color: 'orange', dashboard: true },
    { name: 'Address', url: '/admin/address', icon: 'location_city', authenticate: 'user', color: 'yellow', dashboard: true },
    { name: 'Reviews', url: '/admin/reviews', icon: 'stars', authenticate: 'manager', color: 'blue', dashboard: true },
    { name: 'My Reviews', url: '/admin/my-reviews', icon: 'star_rate', authenticate: 'user', color: 'green', dashboard: true },
    { name: 'My Wishlist', url: '/admin/wishlist', icon: 'favorite', authenticate: 'user', color: 'purple', dashboard: true },
    { name: 'Brands', url: '/admin/brands', icon: 'wb_auto', authenticate: 'manager', color: 'purple', dashboard: true },
    { name: 'Categories', url: '/admin/categories', icon: 'view_comfy', authenticate: 'manager', color: 'light-blue', dashboard: true },
    { name: 'Features', url: '/admin/features', icon: 'check_circle', authenticate: 'manager', color: 'brown', dashboard: true },
    { name: 'Coupons', url: '/admin/coupons', icon: 'style', authenticate: 'admin', color: 'pink', dashboard: true },
    { name: 'Shippings', url: '/admin/shippings', icon: 'local_shipping', authenticate: 'admin', color: 'red', dashboard: true },
    { name: 'Users', url: '/admin/users', icon: 'face', img: 'auth.png', authenticate: 'admin', color: 'lime', dashboard: true },
    { name: 'Media Library', url: '/admin/media-library', authenticate: 'user', icon: 'perm_media' },
    { name: 'Profile', url: '/account/edit-profile', authenticate: 'user', icon: 'face' },
    { name: 'Change Password', url: '/account/change-password', authenticate: 'user', icon: 'lock' },
];
//# sourceMappingURL=settings.js.map

/***/ }),

/***/ "../../../../../src/app/shared/404/404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/404/404.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\r\n  <md-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <p class=\"text-center\">\r\n      <img src=\"/assets/img/angular.png\" alt=\"Not Found\">\r\n    </p>\r\n    <div>\r\n      <h3>We are sorry - this page is not here anymore</h3>\r\n      <h4 class=\"text-muted\">Error 404 - Page not found</h4>\r\n\r\n      <p class=\"text-center\">To continue please use the <strong>Search form</strong> or <strong>Menu</strong> above.</p>\r\n    </div>\r\n    <hr/>\r\n    <button routerLink=\"/\" md-raised-button class=\"mat-raised mat-primary\"> <i class=\"material-icons\">home</i> Go to Homepage</button>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/404/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-404',
        template: __webpack_require__("../../../../../src/app/shared/404/404.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/404/404.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"adressForm\">\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"name\" placeholder=\"Name\">\r\n        <small [hidden]=\"adressForm.get('name').valid\" class=\"text-danger\">\r\n            Name is required\r\n        </small>\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"address\" placeholder=\"Address\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"city\" placeholder=\"City\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"zip\" placeholder=\"Zip\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"state\" placeholder=\"State\">\r\n    </md-input-container>\r\n    <md-input-container>\r\n        <input type=\"text\" mdInput formControlName=\"phone\" placeholder=\"Phone\">\r\n    </md-input-container>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddressComponent = (function () {
    function AddressComponent() {
    }
    return AddressComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('group'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]) === "function" && _a || Object)
], AddressComponent.prototype, "adressForm", void 0);
AddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'address',
        template: __webpack_require__("../../../../../src/app/shared/address/address.component.html"),
    })
], AddressComponent);

var _a;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/cart-buttons/cart-buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/cart-buttons/cart-buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"cart.checkCart(product?._id, variant?._id)\">\r\n  <div>\r\n    <button md-raised-button class=\"mat-raised circular-progress-button mat-primary\" (click)=\"addItem(product, variant)\">\r\n      <i class=\"material-icons\">shopping_cart</i>Add to cart\r\n    </button>\r\n  </div>\r\n</section>\r\n\r\n<section *ngIf=\"!cart.checkCart(product?._id, variant?._id)\">\r\n  <button md-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem(product, variant,-1)\"> \r\n    <i class=\"material-icons\">remove</i> \r\n  </button>\r\n\r\n  <button md-button class=\"mat-primary\" routerLink=\"/checkout\">Buy {{cart.getQuantity(product?._id, variant?._id)}}</button>\r\n\r\n  <button md-icon-button class=\"mat-raised mat-primary\" (click)=\"addItem(product, variant,1)\">\r\n    <i class=\"material-icons\">add</i> \r\n  </button>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/shared/cart-buttons/cart-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartButtonsComponent = (function () {
    function CartButtonsComponent(cart) {
        this.cart = cart;
    }
    CartButtonsComponent.prototype.ngOnInit = function () {
    };
    CartButtonsComponent.prototype.addItem = function (product, variant, i) {
        if (variant) {
            i = i || 1;
            this.cart.addItem({ sku: product._id, name: product.name, slug: product.slug, mrp: variant.mrp, price: variant.price, quantity: 1, image: variant.image, category: product.category, size: variant.size, weight: variant.weight, vid: variant._id }, i);
        }
    };
    return CartButtonsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CartButtonsComponent.prototype, "product", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CartButtonsComponent.prototype, "variant", void 0);
CartButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'cart-buttons',
        template: __webpack_require__("../../../../../src/app/shared/cart-buttons/cart-buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/cart-buttons/cart-buttons.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_cart_service__["a" /* CartService */]) === "function" && _a || Object])
], CartButtonsComponent);

var _a;
//# sourceMappingURL=cart-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialogs/accept-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcceptDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AcceptDialog = (function () {
    function AcceptDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return AcceptDialog;
}());
AcceptDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'accept-dialog',
        template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" md-raised-button \n            (click)=\"dialogRef.close('accept')\" class=\"mat-raised circular-progress-button mat-primary\">ACCEPT</button>\n        <button type=\"button\" md-raised-button \n            (click)=\"dialogRef.close('reject')\">REJECT</button>\n        <button type=\"button\" md-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */]) === "function" && _a || Object])
], AcceptDialog);

var _a;
//# sourceMappingURL=accept-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialogs/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return ConfirmDialog;
}());
ConfirmDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'confirm-dialog',
        template: "\n        <p>{{ title }}</p>\n        <p>{{ message }}</p>\n        <button type=\"button\" md-raised-button \n            (click)=\"dialogRef.close(true)\">OK</button>\n        <button type=\"button\" md-button \n            (click)=\"dialogRef.close()\">Cancel</button>\n    ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */]) === "function" && _a || Object])
], ConfirmDialog);

var _a;
//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialogs/dialogs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs_service__ = __webpack_require__("../../../../../src/app/shared/dialogs/dialogs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__ = __webpack_require__("../../../../../src/app/shared/dialogs/accept-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__ = __webpack_require__("../../../../../src/app/shared/dialogs/confirm-dialog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DialogsModule = (function () {
    function DialogsModule() {
    }
    return DialogsModule;
}());
DialogsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MdButtonModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_0__dialogs_service__["a" /* DialogsService */],
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__confirm_dialog_component__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_3__accept_dialog_component__["a" /* AcceptDialog */],
        ],
    })
], DialogsModule);

//# sourceMappingURL=dialogs.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/dialogs/dialogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__confirm_dialog_component__ = __webpack_require__("../../../../../src/app/shared/dialogs/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accept_dialog_component__ = __webpack_require__("../../../../../src/app/shared/dialogs/accept-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.accept = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdDialogConfig */]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__accept_dialog_component__["a" /* AcceptDialog */], config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.confirm = function (title, message, viewContainerRef) {
        var dialogRef;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["y" /* MdDialogConfig */]();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__confirm_dialog_component__["a" /* ConfirmDialog */], config);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */]) === "function" && _a || Object])
], DialogsService);

var _a;
//# sourceMappingURL=dialogs.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.row{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.space-between{\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.pull-left{\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n.pull-right{\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n.mat-input-container .mat-icon{\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit(editForm.value)\" autocomplete=\"false\" novalidate>\r\n  <div class=\"help-block\" [hidden]=\"!err\">\r\n    {{ err }}\r\n  </div>\r\n  <div *ngFor=\"let i of cols\" [ngSwitch]=\"i.dataType\">\r\n    <div *ngSwitchCase=\"'boolean'\" class=\"flex\">\r\n      <md-slide-toggle [formControlName]=\"i.field\">{{i.heading | labelcase}}</md-slide-toggle>\r\n    </div>\r\n    <div *ngSwitchCase=\"'hidden'\" class=\"flex\">\r\n      <input type=\"hidden\" [formControlName]=\"i.field\" [placeholder]=\"i.heading | labelcase\" />\r\n    </div>\r\n    <div *ngSwitchCase=\"'date'\" class=\"flex\">\r\n      <md-input-container>\r\n        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\" [formControlName]=\"i.field\" autofocus>\r\n        <button type=\"button\" mdSuffix [mdDatepickerToggle]=\"picker\"></button>\r\n      </md-input-container>\r\n      <md-datepicker #picker></md-datepicker>\r\n    </div>\r\n    <div *ngSwitchCase=\"'select'\" class=\"flex\">\r\n      <md-select [formControlName]=\"i.field\" [placeholder]=\"i.heading\" *ngIf=\"i.type !=='obj'\" autofocus>\r\n        <md-option *ngFor=\"let o of i.options\" [value]=\"o\">\r\n          {{ o }}\r\n        </md-option>\r\n      </md-select>\r\n      <md-select [formControlName]=\"i.field\" [placeholder]=\"i.heading\" *ngIf=\"i.type==='obj' \" autofocus>\r\n        <md-option *ngFor=\"let o of i.options\" [value]=\"o.val\">\r\n          {{ o.name }}\r\n        </md-option>\r\n      </md-select>\r\n\r\n    </div>\r\n    <div *ngSwitchCase=\"'array'\" class=\"flex\">\r\n      <div *ngIf=\"item['_id']\">\r\n        {{i.heading}}\r\n        <div *ngIf=\"!i.disabled\">\r\n          <md-checkbox *ngFor=\"let user of remainingItems[i.field]\" (change)=\"assign($event,i.field, user, checked, i.options)\" autofocus>\r\n            {{user.name}}\r\n          </md-checkbox>\r\n        </div>\r\n\r\n        <input [formControlName]=\"i.field\" [(ngModel)]=\"item[i.field]\" type=\"hidden\" [placeholder]=\"i.heading | labelcase \" autofocus\r\n        />\r\n        <md-chip-list class=\"mat-chip-list-stacked \">\r\n          <md-chip *ngFor=\"let chip of item[i.field]\" selected=\"true \" color=\"primary\" (click)=\"remove(chip, i.field,\r\n          i.disabled) \">\r\n            {{chip.name}}\r\n          </md-chip>\r\n        </md-chip-list>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'number'\" class=\"flex\">\r\n      <md-input-container>\r\n        <input mdInput type=\"text\" [formControlName]=\"i.field\" [name]=\"i.field\" [placeholder]=\"i.heading | labelcase\" autofocus />\r\n      </md-input-container>\r\n      <div *ngIf=\"editForm.get(i.field).hasError('required') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} is required\r\n      </div>\r\n      <div *ngIf=\"editForm.get(i.field).hasError('pattern') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} must be a number.\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'image'\" class=\"flex \">\r\n      <md-input-container>\r\n        <input mdInput type=\"text\" [formControlName]=\"i.field\" [name]=\"i.field \" [placeholder]=\"i.heading | labelcase\" autofocus\r\n        />\r\n        <md-icon mdPrefix (click)=\"chooseImage(i.field)\" class=\"pointer\">image</md-icon>\r\n      </md-input-container>\r\n    </div>\r\n    <div *ngSwitchDefault class=\"flex\">\r\n      <md-input-container>\r\n        <input mdInput type=\"text \" [formControlName]=\"i.field\" [name]=\"i.field\" [placeholder]=\"i.heading | labelcase\" autofocus\r\n        />\r\n      </md-input-container>\r\n      <div *ngIf=\"editForm.get(i.field).hasError( 'required') && editForm.get(i.field).touched\">\r\n        {{i.heading | labelcase}} is required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div fxLayoutAlign=\"center center\">\r\n    <submit-button [loading]=\"loading\" [form]=\"editForm\" icon=\"save\"></submit-button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/shared/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_crud_helper__ = __webpack_require__("../../../../../src/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__media_media_library__ = __webpack_require__("../../../../../src/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var URL = '/api/media';
var EditComponent = (function () {
    function EditComponent(dialog, _fb, helper) {
        this.dialog = dialog;
        this._fb = _fb;
        this.helper = helper;
        this.item = {};
        this.save = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.o = {};
        this.remainingItems = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fields)
            this.cols = __WEBPACK_IMPORTED_MODULE_5_lodash__["clone"](this.helper.help(this.fields));
        if (this.item.constructor === Object) {
            this.cols.push({ field: '_id', dataType: 'hidden' });
        }
        this.cols.forEach(function (i) {
            var validators = [];
            i.required ? validators.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required) : false;
            if (!i.heading)
                i.heading = i.field;
            i.dataType === 'number' ? validators.push(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("^[-+]?[0-9]*\.?[0-9]+$")) : false;
            _this.o[i.field] = [_this.item[i.field], validators];
            _this.editForm = _this._fb.group(_this.o);
            if (i.dataType === 'array')
                _this.getRemainingOptions(i.field, i.options);
        });
    };
    EditComponent.prototype.getRemainingOptions = function (field, fromArray) {
        var assigned = this.item[field];
        var diff = __WEBPACK_IMPORTED_MODULE_5_lodash__["differenceBy"](fromArray, assigned, '_id');
        this.remainingItems[field] = diff;
    };
    EditComponent.prototype.remove = function (chip, field, disabled) {
        if (!disabled) {
            this.item[field] = __WEBPACK_IMPORTED_MODULE_5_lodash__["pull"](this.item[field], chip);
            this.remainingItems[field].push(chip);
        }
    };
    EditComponent.prototype.chooseImage = function (field) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__media_media_library__["a" /* MediaLibraryModal */], {
            width: '80%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.editForm.controls[field].setValue(result);
            }
        });
    };
    EditComponent.prototype.onSubmit = function (data) {
        this.save.emit(data);
    };
    return EditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "cols", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "fields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditComponent.prototype, "api", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditComponent.prototype, "save", void 0);
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'edit',
        template: __webpack_require__("../../../../../src/app/shared/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/edit/edit.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_crud_helper__["a" /* CrudHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_crud_helper__["a" /* CrudHelper */]) === "function" && _c || Object])
], EditComponent);

var _a, _b, _c;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/export/export.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-icon-button [mdMenuTriggerFor]=\"exportMenu\">\r\n    <md-icon>cloud_download</md-icon>\r\n</button>\r\n<md-menu #exportMenu=\"mdMenu\">\r\n    <button md-menu-item (click)=\"export('json', data)\">\r\n        <md-icon>voicemail</md-icon>\r\n        <span>JSON</span>\r\n    </button>\r\n    <button md-menu-item (click)=\"export('text', data)\">\r\n        <md-icon>notifications_off</md-icon>\r\n        <span>Text</span>\r\n    </button>\r\n    <button md-menu-item (click)=\"export('csv', data)\">\r\n        <md-icon>dialpad</md-icon>\r\n        <span>CSV</span>\r\n    </button>\r\n    <button md-menu-item (click)=\"export('excel', data)\">\r\n        <md-icon>dialpad</md-icon>\r\n        <span>Excel</span>\r\n    </button>\r\n</md-menu>"

/***/ }),

/***/ "../../../../../src/app/shared/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExportComponent = (function () {
    function ExportComponent(snack) {
        this.snack = snack;
        this.data = [];
        this.filename = 'codenx';
        this.data1 = [];
    }
    ExportComponent.prototype.ngOnInit = function () {
    };
    ExportComponent.prototype.export = function (format, data) {
        this.data1 = [];
        this.data1.push(JSON.stringify(this.data));
        if (!document.getElementById('exportable')) {
            this.snack.open('Please create a div with  id="exportable" whose data is to be exported', 'OK', { duration: 2000 });
            return;
        }
        var blob;
        if (format === 'csv') {
            blob = new Blob([document.getElementById('exportable').innerHTML], { type: "application/vnd.ms-excel;charset=charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, this.filename + ".csv");
        }
        else if (format === 'excel') {
            blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.ms-excel;charset=charset=utf-8"
            });
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, this.filename + ".xls");
        }
        else if (format === 'json') {
            blob = new Blob(this.data1, { type: "text/json;charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, this.filename + ".json");
        }
        else if (format === 'text') {
            blob = new Blob(this.data1, { type: "text/plain;charset=utf-8" });
            __WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"](blob, this.filename + ".txt");
        }
    };
    return ExportComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], ExportComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], ExportComponent.prototype, "filename", void 0);
ExportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'export',
        template: __webpack_require__("../../../../../src/app/shared/export/export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/export/export.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */]) === "function" && _a || Object])
], ExportComponent);

var _a;
//# sourceMappingURL=export.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer .footer-content{\r\n    text-align: center;\r\n    padding: 10px 16px;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 0.9em;\r\n    box-shadow:  0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.footer .footer-content a {\r\n    color: #999;\r\n}\r\n.fixed-bottom {\r\n    position: fixed;\r\n    bottom: 1px;\r\n    left: 35%;\r\n    width: 100%;\r\n}\r\nmd-toast {\r\n    width: 600px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"app-toolbar-filler\"></span>\r\n<div class=\"footer\">\r\n  <div class=\"footer-content\">\r\n    <div>Copyright | <a href=\"http://codenx.com\" target=\"_blank\">CodeNx</a>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(router, auth, modal) {
        this.router = router;
        this.auth = auth;
        this.modal = modal;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn) {
            return true;
        }
        this.modal.login().subscribe();
        // this.router.navigate(['/account/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spacer {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 1 auto;\r\n    flex: 1 1 auto;\r\n}\r\nmd-toolbar{\r\n    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n    -webkit-transform: translate3d(0,0,0);\r\n            transform: translate3d(0,0,0);\r\n    transition: background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);\r\n}\r\n.clearSearchBarField{\r\n    cursor:pointer;\r\n}\r\n.search-icon{\r\n    margin-top:5px;\r\n    cursor: pointer;\r\n}\r\n.brand{\r\n    margin-right:20px;\r\n}\r\n.avatar{\r\n     overflow:hidden;\r\n}\r\n.avatar img{\r\n    width:120%;height:auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\r\n  <div fxLayout=\"row\" fxFlex fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"row\" *ngIf=\"!searchBar\">\r\n      <button class=\"app-icon-button\" routerLink=\"/shop\">\r\n        <i class=\"material-icons app-toolbar-menu\">home</i>\r\n      </button>\r\n      <div routerLink=\"/shop\" fxHide.xs *ngIf=\"!searchBar\" class=\"brand\">MFB</div>\r\n    </div>\r\n    <i class=\"material-icons clearSearchBarField noUserSelect\" *ngIf=\"searchBar\" (click)=\"show(false)\">close</i>\r\n\r\n    <shopnx-search fxFlex fxHide fxShow.gt-sm *ngIf=\"!searchBar\"></shopnx-search>\r\n    <shopnx-search fxFlex *ngIf=\"searchBar\"></shopnx-search>\r\n\r\n    <div fxShow fxHide.gt-sm layoutAlign=\"center center\" *ngIf=\"!searchBar\">\r\n      <md-icon (click)=\"show(true)\" class=\"search-icon\">search</md-icon>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button md-raised-button class=\"mat-raised mat-accent\" *ngIf=\"!searchBar\" (click)=\"openCart()\" [disabled]=\"cart.getTotalCount()===0\">\r\n      <md-icon>shopping_cart</md-icon>\r\n      <span fxShow fxHide.xs>Cart ({{cart.getTotalCount()}}) - {{cart.getTotalPrice() | currency:Settings.currency.code:true}}</span>\r\n    </button>\r\n    <button md-button (click)=\"login()\" *ngIf=\"!auth.loggedIn &&  !searchBar\" fxLayout=\"column\">\r\n      <md-icon>fingerprint</md-icon>\r\n      <span fxHide fxShow.gt-xs>Login / Signup</span>\r\n    </button>\r\n    <button md-button *ngIf=\"auth.loggedIn && !searchBar\" routerLink=\"/admin/dashboard\">\r\n      <md-icon *ngIf=\"!auth.loggedIn\">fingerprint</md-icon>\r\n      <button md-fab *ngIf=\"auth.loggedIn\" class=\"avatar\">\r\n          <img src=\"{{auth.currentUser.avatar}}\" alt=\"{{auth.currentUser.name}}\"/>\r\n      </button>\r\n    <span fxShow=\"false\" fxShow.gt-sm>{{auth.currentUser.name}}</span>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\" *ngIf=\"auth.loggedIn && !searchBar\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n    <md-menu #menu=\"mdMenu\">\r\n      <div *ngFor=\"let item of Settings.menu\">\r\n        <button md-menu-item *ngIf=\"auth.loggedIn && item.authenticate && auth.hasRole(item.authenticate)\" routerLink=\"{{item.url}}\">\r\n        <md-icon>{{item.icon}}</md-icon>\r\n        <span>{{item.name}}</span>\r\n      </button>\r\n      </div>\r\n      <button md-menu-item *ngIf=\"auth.loggedIn\" (click)=\"auth.logout()\">\r\n        <md-icon>vpn_key</md-icon>\r\n        <span>Logout</span>\r\n      </button>\r\n    </md-menu>\r\n  </div>\r\n</md-toolbar>"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__ = __webpack_require__("../../../../../src/app/shared/services/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(auth, cart, media, modal) {
        this.auth = auth;
        this.cart = cart;
        this.media = media;
        this.modal = modal;
        this.openCrt = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.isDarkTheme = false;
        this.progress = 0;
        this.toggleSidenav = new __WEBPACK_IMPORTED_MODULE_4__angular_core__["EventEmitter"]();
        this.Settings = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */];
        // media.subscribe((change: MediaChange) => {
        //     if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        //         this.searchBar = false;
        //     }
        // })
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openCart = function () {
        this.openCrt.emit();
    };
    HeaderComponent.prototype.show = function (x) {
        this.searchBar = x;
    };
    HeaderComponent.prototype.login = function () {
        this.modal.login().subscribe();
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "openCrt", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HeaderComponent.prototype, "toggleSidenav", void 0);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], HeaderComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/list-image/list-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/list-image/list-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div [style.background]=\"bgColor\" class=\"circle\"><span>{{firstLetter}}</span></div>"

/***/ }),

/***/ "../../../../../src/app/shared/list-image/list-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListImageComponent = (function () {
    function ListImageComponent() {
        this.colors = [
            '#f9a43e',
            '#59a2be',
            '#67bf74',
            '#f58559',
            '#e4c62e',
            '#f16364',
            '#2093cd',
            '#ad62a7'
        ];
        this.firstLetter = '';
        this.numberOfColors = this.colors.length;
    }
    ListImageComponent.prototype.ngOnInit = function () {
        if (this.string) {
            var firstLetter = this.firstLetter = __WEBPACK_IMPORTED_MODULE_1_lodash__["capitalize"](this.string.toString().charAt(0));
            this.bgColor = this.getColor(firstLetter);
        }
    };
    ListImageComponent.prototype.hashCode = function (str) {
        var hash = 0, length = str.length, i, chr;
        if (length === 0) {
            return hash;
        }
        for (i = 0; i < length; i++) {
            chr = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    ListImageComponent.prototype.getColor = function (string) {
        var color = Math.abs(this.hashCode(string.charAt(0))) % this.numberOfColors;
        return this.colors[color];
    };
    return ListImageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ListImageComponent.prototype, "string", void 0);
ListImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-image',
        template: __webpack_require__("../../../../../src/app/shared/list-image/list-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/list-image/list-image.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListImageComponent);

//# sourceMappingURL=list-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-fab{\r\n  position:absolute !important;\r\n  bottom:20px;\r\n  right:20px;\r\n}\r\n.mat-icon-button .mat-icon {\r\n    font-size: 24px;\r\n}\r\n.mat-icon-button .mat-icon.filtericon {\r\n    padding-top:20px;\r\n}\r\n.sort .mat-icon {\r\n    font-size: 18px;\r\n}\r\n\r\n.floating-fab {\r\n  position: absolute;\r\n  right: 20px;\r\n  bottom: 20px;\r\n  z-index: 1000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-fab class=\"floating-fab\" *ngIf=\"!no.add\" color=\"accent\" routerLink=\"{{url}}/new\">\r\n  <md-icon>add</md-icon>\r\n</button>\r\n<div [ngBusy]=\"busy\"></div>\r\n\r\n<div class=\"app-content cp-container\">\r\n  <md-card fxFlex>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"example-scrolling-content\">\r\n      <h3>{{title}}</h3>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n      <div *ngIf=\"!no.search\">\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false\">\r\n          <md-icon class=\"filtericon\">search</md-icon>\r\n        </button>\r\n        <md-input-container *ngIf=\"showFilter\" fxFlex>\r\n          <input type=\"text\" [value]=\"filterText\" placeholder=\"Filter\" [formControl]=\"filterInput\" mdInput autofocus/>\r\n        </md-input-container>\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false;filterText='';flush();getData({ sort: '-updated_at' })\">\r\n          <md-icon class=\"filtericon\">close</md-icon>\r\n        </button>\r\n        <button md-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter=true\">\r\n          <md-icon>filter_list</md-icon>\r\n        </button>\r\n      </div>\r\n      <export [data]=\"data\" *ngIf=\"!no.export\"></export>\r\n    </div>\r\n\r\n    <div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <md-card *ngIf=\"!meta.busy && data.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n        <div>No {{title}} found</div>\r\n      </md-card>\r\n    </div>\r\n\r\n    <div infiniteScroll infiniteScrollDistance=\"2\" infiniteScrollThrottle=\"500\" (scrolled)=\"scroll()\" scrollWindow=\"false\" id=\"exportable\"\r\n      *ngIf=\"data.length>0\">\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th *ngFor=\"let h of fie\">\r\n              <a class=\"sort\" (click)=\"reverse=!reverse;order(h.field)\" *ngIf=\"!no.sort && !h.noSort\" fxLayout=\"row\">\r\n                {{h.heading | labelcase}}\r\n                <md-icon *ngIf=\"reverse && h.field === sort.predicate\">arrow_downward</md-icon>\r\n                <md-icon *ngIf=\"!reverse && h.field === sort.predicate\">arrow_upwards</md-icon>\r\n              </a>\r\n              <span *ngIf=\"no.sort || h.noSort\">\r\n                {{h.heading | labelcase}}\r\n              </span>\r\n            </th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let d of data; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td *ngFor=\"let f of fie\" [ngSwitch]=\"f.dataType\">\r\n              <img src=\"{{d[f.field]}}\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'image'\" />\r\n              <img src=\"{{d.variants[0].image}}\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'product-image'\" />\r\n              <span *ngSwitchCase=\"'date'\">{{d[f.field] | date}}</span>\r\n              <!--<md-slide-toggle [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\"></md-slide-toggle>-->\r\n              <md-checkbox [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\" disabled=\"true\"></md-checkbox>\r\n              <a *ngSwitchCase=\"'product-detail'\" routerLink=\"/product/{{d[f.slug]}}/{{d[f.id]}}\">{{d[f.field]}}</a>\r\n              <span *ngSwitchDefault>{{d[f.field]}}</span>\r\n            </td>\r\n            <td>\r\n              <button *ngIf=\"!no.clone\" md-icon-button (click)=\"clone(d)\">\r\n                <md-icon>content_copy</md-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.edit\" md-icon-button routerLink=\"{{url}}/{{d._id}}\">\r\n                <md-icon>edit</md-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.delete\" md-icon-button (click)=\"delete(d)\">\r\n                <md-icon>delete</md-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n      <button md-button md-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\">\r\n        <md-icon>arrow_downwards</md-icon>Load More...</button>\r\n    </div>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_helper__ = __webpack_require__("../../../../../src/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base__ = __webpack_require__("../../../../../src/app/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListComponent = (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(crud, snack, helper, route, modal) {
        var _this = _super.call(this) || this;
        _this.crud = crud;
        _this.snack = snack;
        _this.helper = helper;
        _this.route = route;
        _this.modal = modal;
        _this.save = new __WEBPACK_IMPORTED_MODULE_6__angular_core__["EventEmitter"]();
        _this.showFilter = false;
        _this.data = [];
        _this.meta = {};
        _this.filterInput = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]();
        _this.no = {};
        return _this;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flush();
        this.sort = { predicate: null, reverse: false };
        this.url = this.route.url;
        this.fie = this.helper.help(this.fields);
        this.getData({ sort: '-updated_at' });
        this.filterText = "";
        var typingTimer;
        this.filterInput.valueChanges.subscribe(function (term) {
            clearTimeout(typingTimer);
            var vm = _this;
            typingTimer = setTimeout(function () {
                vm.filterText = term;
                vm.flush();
                vm.meta.search = term;
                vm.getData({ search: term });
            }, 400);
        });
    };
    ListComponent.prototype.change = function (type) {
        this.flush();
        this.loading = true;
        this.getData({ type: type });
    };
    ListComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    return ListComponent;
}(__WEBPACK_IMPORTED_MODULE_7__base__["a" /* default */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "fields", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "no", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "fie", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", String)
], ListComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", String)
], ListComponent.prototype, "api", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "sort", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'crud-list',
        template: __webpack_require__("../../../../../src/app/shared/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_helper__["a" /* CrudHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_helper__["a" /* CrudHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object])
], ListComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/media/media-library.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n  max-height:20vh !important;\r\n  width:auto;\r\n}\r\n.card{\r\n  margin-bottom:20px;\r\n  cursor:pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/media/media-library.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-actions>\r\n    <button class=\"close\" md-icon-button color=\"warn\" (click)=\"dialogRef.close()\">\r\n        <md-icon>cancel</md-icon>\r\n    </button>\r\n</div>\r\n<div md-dialog-content>\r\n    <md-progress-bar mode=\"determinate\" [value]=\"uploader.progress\" *ngIf=\"uploader?.queue?.length>0\"></md-progress-bar>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" name=\"avatar\" />\r\n        <div *ngFor=\"let item of uploader.queue\" class=\"flex space-between\">\r\n            <button md-raised-button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\" class=\"mat-warn\">                <i class=\"material-icons\">save</i>                     Upload            </button>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <md-grid-list class=\"media-list\" rowHeight=\"4:3\" gutterSize=\"12\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutWrap>\r\n        <md-grid-tile *ngFor=\"let i of media\" (click)=\"ok(i.path)\">\r\n            <md-card class=\"card\">\r\n                <button md-button md-icon-button (click)=\"close()\" class=\"close\"><md-icon>close</md-icon></button>\r\n                <md-card-header>\r\n                    <h3>{{i.name}}</h3>\r\n                </md-card-header>\r\n                <md-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <img src=\"{{i.path}}\" draggable=\"false\" alt=\"{{i.name}}\">\r\n                </md-card-content>\r\n            </md-card>\r\n        </md-grid-tile>\r\n    </md-grid-list>\r\n    <!--<md-card class=\"card\" *ngFor=\"let p of media; let i = index;\" id=\"{{p?._id}}\">\r\n        <md-card-header>\r\n            <md-card-title>{{p.name}}</md-card-title>\r\n            <md-card-subtitle>{{p.path}}</md-card-subtitle>\r\n        </md-card-header>\r\n        <img md-card-image [src]=\"p?.path\">\r\n        <md-card-actions>\r\n            <button md-button><b>Uploaded by:</b> {{p.uname}} ({{p.uemail}})</button>\r\n            <button md-button><b>Size:</b>{{ p.size/1024/1024 | number:'.2' }} MB</button>\r\n            <button md-button><b>Created:</b> {{p.createdAt}}</button>\r\n        </md-card-actions>\r\n    </md-card>-->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/media/media-library.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaLibraryModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MediaLibraryModal = (function () {
    function MediaLibraryModal(dialogRef, auth, crud, snack) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.crud = crud;
        this.snack = snack;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_2_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: 'api/media',
            authToken: this.auth.getToken()
        });
        this.hasBaseDropZoneOver = false;
        this.loading = false;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.getData('-createdAt');
        };
    }
    MediaLibraryModal.prototype.ngOnInit = function () {
        this.getData('-createdAt');
    };
    MediaLibraryModal.prototype.getData = function (sort) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["URLSearchParams"]();
        this.loading = true;
        params.set('sort', sort);
        this.busy = this.crud.get('media', params, true)
            .subscribe(function (data) { _this.media = data; _this.loading = false; }, function (error) { _this.snack.open(error, 'OK', { duration: 2000 }); _this.loading = false; });
    };
    MediaLibraryModal.prototype.ok = function (item) {
        this.dialogRef.close(item);
    };
    MediaLibraryModal.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return MediaLibraryModal;
}());
MediaLibraryModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'media-library',
        template: __webpack_require__("../../../../../src/app/shared/media/media-library.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/media/media-library.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_crud_service__["a" /* CrudService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], MediaLibraryModal);

var _a, _b, _c, _d;
//# sourceMappingURL=media-library.js.map

/***/ }),

/***/ "../../../../../src/app/shared/media/media.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".well{\r\n  padding: 50px;\r\n}\r\n.my-drop-zone {\r\n    border: dotted 3px lightgray;\r\n}\r\n\r\n.nv-file-over {\r\n    border: dotted 3px red;\r\n}\r\n/* Default class applied to drop zones on over */\r\n\r\n.another-file-over-class {\r\n    border: dotted 3px green;\r\n}\r\n\r\n.flex {\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n.row{\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n.space-between{\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n.pull-left{\r\n  -ms-flex-item-align: start;\r\n      align-self: flex-start;\r\n}\r\n.pull-right{\r\n  -ms-flex-item-align: end;\r\n      align-self: flex-end;\r\n}\r\n.app-spinner{\r\n  width:20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-button (click)=\"openDialog()\">Launch dialog</button> You chose: {{selectedOption}}"

/***/ }),

/***/ "../../../../../src/app/shared/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_single__ = __webpack_require__("../../../../../src/app/shared/media/modal-single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaComponent = (function () {
    function MediaComponent(dialog) {
        this.dialog = dialog;
    }
    MediaComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__modal_single__["a" /* SingleFileUploadModal */]);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    MediaComponent.prototype.ngOnInit = function () {
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'media-library',
        template: __webpack_require__("../../../../../src/app/shared/media/media.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/media/media.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MdDialog */]) === "function" && _a || Object])
], MediaComponent);

var _a;
//# sourceMappingURL=media.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/media/modal-single.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-actions>\r\n    <button class=\"close\" md-icon-button color=\"warn\" (click)=\"dialogRef.close()\">\r\n        <md-icon>cancel</md-icon>\r\n    </button>\r\n</div>\r\n<h1 md-dialog-title>Please choose image to upload</h1>\r\n<div md-dialog-content></div>\r\n<input type=\"file\" ng2FileSelect [uploader]=\"uploader\" name=\"avatar\" />\r\n<div md-dialog-actions *ngFor=\"let item of uploader.queue\" class=\"flex space-between\">\r\n    <div *ngIf=\"item.progress\">{{item.progress}}%</div>\r\n    <!--<md-progress-bar color=\"accent\" mode=\"determinate\" [value]=\"item.progress\" aria-label=\"uploading image\" *ngIf=\"item.progress\"></md-progress-bar>-->\r\n    <button md-raised-button (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\" class=\"mat-warn\">\r\n        <i class=\"material-icons\" *ngIf=\"!item.progress\">save</i> \r\n        <md-spinner color=\"#fff\" class=\"button-spinner\" mode=\"determinate\" [value]=\"item.progress\" aria-label=\"uploading image\" *ngIf=\"item.progress\"></md-spinner>\r\n            <span>Upload</span>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/media/modal-single.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleFileUploadModal; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingleFileUploadModal = (function () {
    function SingleFileUploadModal(dialogRef, auth) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.auth = auth;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: 'api/media',
            authToken: this.auth.getToken()
        });
        this.hasBaseDropZoneOver = false;
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.image = response; // log response
            // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', JSON.parse(response));
            _this.dialogRef.close(response);
        };
    }
    SingleFileUploadModal.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    return SingleFileUploadModal;
}());
SingleFileUploadModal = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'modal-single',
        template: __webpack_require__("../../../../../src/app/shared/media/modal-single.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/media/media.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["q" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SingleFileUploadModal);

var _a, _b;
//# sourceMappingURL=modal-single.js.map

/***/ }),

/***/ "../../../../../src/app/shared/oauth-buttons/oauth-buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OauthButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OauthButtonsComponent = (function () {
    function OauthButtonsComponent() {
        this.googleLoading = false;
        this.facebookLoading = false;
        this.twitterLoading = false;
    }
    OauthButtonsComponent.prototype.ngOnInit = function () {
    };
    OauthButtonsComponent.prototype.loginOauth = function (provider) {
        window.location.href = "/auth/" + provider;
    };
    ;
    return OauthButtonsComponent;
}());
OauthButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'oauth-buttons',
        template: __webpack_require__("../../../../../src/app/shared/oauth-buttons/oauth-buttons.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/oauth-buttons/oauth-buttons.css")],
    }),
    __metadata("design:paramtypes", [])
], OauthButtonsComponent);

//# sourceMappingURL=oauth-buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/oauth-buttons/oauth-buttons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n  color: #fff;\r\n}\r\n.mat-hue-2{\r\n  color:white;\r\n}\r\n.facebook{\r\n  background-color:rgb(21,101,192);\r\n}\r\n.google{\r\n  background-color:rgb(216,67,21);\r\n}\r\n.twitter{\r\n  background-color:rgb(33,150,243);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/oauth-buttons/oauth-buttons.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap>\r\n    <button md-raised-button class=\"facebook mat-hue-2\" aria-label=\"Connect with Facebook\" (click)=\"loginOauth('facebook')\" [disabled]=\"facebookLoading\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n            <path d=\"M17 2v4h-2c-.69 0-1 .81-1 1.5V10h3v4h-3v8h-4v-8H7v-4h3V6a4 4 0 0 1 4-4h3z\"></path>\r\n        </svg>\r\n    <md-spinner mode=\"indeterminate\" *ngIf=\"facebookLoading\" class=\"app-spinner\"></md-spinner>\r\n    <span>&nbsp;Connect with Facebook</span>\r\n    </button>\r\n    <button md-raised-button class=\"google mat-hue-2\" aria-label=\"Connect with Google\" (click)=\"loginOauth('google')\" [disabled]=\"googleLoading\">\r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n        <path d=\"M13.3 13.45l-1.08-.85c-.36-.3-.82-.69-.82-1.42s.55-1.29.97-1.62c1.31-1.02 2.57-2.1 2.57-4.34 0-2.07-1.27-3.26-2.04-3.92h1.75L15.9.05H9.67c-4.36 0-6.6 2.71-6.6 5.72 0 2.33 1.79 4.83 4.98 4.83h.8c-.13.35-.35.84-.35 1.3 0 1.01.42 1.43.92 2-1.42.1-4.01.43-5.92 1.6-1.86 1.1-2.3 2.63-2.3 3.75 0 2.3 2.06 4.5 6.57 4.5 5.35 0 8.03-2.96 8.03-5.88 0-2.16-1.13-3.27-2.5-4.42M5.65 4.31c0-2.21 1.31-3.21 2.69-3.21 2.66 0 4.01 3.45 4.01 5.53 0 2.57-2.07 3.07-2.89 3.07C7 9.7 5.65 6.64 5.65 4.31M9.3 22.3c-3.33 0-5.45-1.49-5.45-3.7 0-2.2 1.96-2.91 2.65-3.16 1.3-.44 3-.49 3.27-.49.3 0 .46 0 .73.02 2.34 1.69 3.35 2.44 3.35 4.03 0 1.77-1.82 3.3-4.55 3.3\"></path>\r\n        <path d=\"M21 10V7h-2v3h-3v2h3v3h2v-3h3v-2h-3z\"></path>\r\n    </svg>\r\n      <md-spinner mode=\"indeterminate\" *ngIf=\"googleLoading\" class=\"app-spinner\"></md-spinner>\r\n      <span>&nbsp;Connect with Google</span>\r\n</button>\r\n    <button md-raised-button class=\"twitter mat-hue-2\" aria-label=\"Connect with Twitter\" (click)=\"loginOauth('twitter')\" [disabled]=\"twitterLoading\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\">\r\n            <path d=\"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.11 2.95 4 2.98-1.46 1.16-3.31 1.84-5.33 1.84-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z\"></path>\r\n        </svg>\r\n        <md-spinner mode=\"indeterminate\" *ngIf=\"twitterLoading\" class=\"app-spinner\"></md-spinner>\r\n        <span>&nbsp;Connect with Twitter</span>\r\n</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/pipes/dashboardFilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardFilterPipe = (function () {
    function DashboardFilterPipe() {
    }
    DashboardFilterPipe.prototype.transform = function (items, term) {
        if (term === undefined)
            return items;
        return items.filter(function (item) { return item.dashboard; });
    };
    return DashboardFilterPipe;
}());
DashboardFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'dashboardFilter' })
], DashboardFilterPipe);

//# sourceMappingURL=dashboardFilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ObjectFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        if (!items)
            return;
        return items.filter(function (item) { return item.key === term; });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'filter' })
], FilterPipe);

var ObjectFilterPipe = (function () {
    function ObjectFilterPipe() {
    }
    ObjectFilterPipe.prototype.transform = function (items, filter) {
        if (filter && Array.isArray(items)) {
            var filterKeys_1 = Object.keys(filter);
            return items.filter(function (item) {
                return filterKeys_1.reduce(function (memo, keyName) {
                    return (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === "";
                }, true);
            });
        }
        else {
            return items;
        }
    };
    return ObjectFilterPipe;
}());
ObjectFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'objectfilter'
    })
], ObjectFilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/labelcase.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelcasePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LabelcasePipe = (function () {
    function LabelcasePipe() {
    }
    LabelcasePipe.prototype.transform = function (input) {
        if ((typeof input) !== 'string') {
            return input;
        }
        return input.length > 0 ? input.replace(/\w\S*/g, (function (txt) { return txt[0].toUpperCase() + txt.substr(1).toLowerCase(); })) : '';
    };
    return LabelcasePipe;
}());
LabelcasePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'labelcase'
    })
], LabelcasePipe);

//# sourceMappingURL=labelcase.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/pluralize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluralizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PluralizePipe = (function () {
    function PluralizePipe() {
    }
    PluralizePipe.prototype.transform = function (noun) {
        if (typeof noun !== 'string') {
            return noun;
        }
        var rules = [
            { regex: /octopus/gi, suffix: 'octopusses' },
            { regex: /person/gi, suffix: 'people' },
            { regex: /ox/gi, suffix: 'oxen' },
            { regex: /bison|buffalo|deer|duck|fish|moose|pike|plankton|salmon|sheep|squid|swine|trout|sheap|equipment|information|rice|money|species|series|news/i, suffix: '$&' },
            { regex: /(x|ch|ss|sh)$/gi, suffix: '$1es' },
            { regex: /(hetero|canto|photo|zero|piano|pro|kimono|portico|quarto)$/gi, suffix: '$1s' },
            { regex: /(?:([^f])fe|([lr])f)$/, suffix: '$1$2ves' },
            { regex: /o$/gi, suffix: 'oes' },
            { regex: /([^aeiouy]|qu)y$/gi, suffix: '$1ies' },
            { regex: /s$/gi, suffix: 's' },
            { regex: /$/gi, suffix: 's' } // cat -> cats
        ];
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (noun.match(rule.regex)) {
                noun = noun.replace(rule.regex, rule.suffix);
                break;
            }
        }
        return noun;
    };
    return PluralizePipe;
}());
PluralizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'pluralize'
    })
], PluralizePipe);

//# sourceMappingURL=pluralize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (data, searchTerm) {
        if (!data)
            return;
        searchTerm = searchTerm.toUpperCase();
        return data.filter(function (item) {
            if (item.name)
                return item.name.toString().toUpperCase().indexOf(searchTerm) !== -1;
            else
                return null;
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'searchpipe',
        pure: false
    })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/unique.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniquePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UniquePipe = (function () {
    function UniquePipe() {
    }
    UniquePipe.prototype.transform = function (input, key) {
        var unique = {};
        var uniqueList = [];
        if (input) {
            for (var i = 0; i < input.length; i++) {
                if (typeof unique[input[i][key]] === 'undefined') {
                    unique[input[i][key]] = '';
                    uniqueList.push(input[i]);
                }
            }
        }
        return uniqueList;
    };
    return UniquePipe;
}());
UniquePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'unique'
    })
], UniquePipe);

//# sourceMappingURL=unique.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search{\r\n    margin: 0 20px;\r\n    max-width:850px;\r\n    min-width:100px;\r\n}\r\n\r\n/* ========== Page header (Top bar) ========== */\r\n\r\n/* Search bar (header) */\r\n\r\n.searchBarMain {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\tmargin:0 20px;\r\n\tbackground: #fff;\r\n    /* max-width: 680px; */\r\n    border-radius: 2px;\r\n\tbox-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.14);\r\n\ttransition: all 0.2s ease-in-out;\r\n}\r\n\r\n.searchBarMain i.searchBarSearchIcon {\r\n\theight: 100%;\r\n\tline-height: 42px;\r\n\tfloat: left;\r\n\twidth: 45px;\r\n\ttext-align: center;\r\n\tcolor: rgba(68, 68, 68, 0.5);\r\n}\r\n\r\n.searchBarMain input#searchBarInput {\r\n\theight: 42px;\r\n\t-webkit-box-flex:1;\r\n\t    -ms-flex:1;\r\n\t        flex:1;\r\n    /* padding: 0; */\r\n    /* margin: 0; */\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    background: transparent;\r\n    /* width: calc(100% - 52px); */\r\n\toutline: none;\r\n\tfont-size: 16px;\r\n\tcolor: rgba(0, 0, 0, 0.76);\r\n\tfont-weight: 400;\r\n\tfont-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.searchBarMain i.clearSearchBarField {\r\n\tposition: relative;\r\n    margin: 11px;\r\n    /* right: 2px; */\r\n    /* margin: 12px 0; */\r\n    color: rgba(0, 0, 0, 0.84);\r\n    font-size: 20px;\r\n}\r\n\r\n.searchBarMain i.clearSearchBarField:hover {\r\n\tcursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"searchBarMain\">\r\n  <i class=\"material-icons searchBarSearchIcon noUserSelect\">search</i>\r\n  <input [formControl]=\"searchInput\" (keyup)=\"search(searchInput.value)\" type=\"text\" name=\"header-search\" value=\"\" id=\"searchBarInput\"\r\n    autofocus placeholder=\"Search, discover, explore...\">\r\n  <i class=\"material-icons clearSearchBarField noUserSelect\">mic</i>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(crud, router) {
        this.crud = crud;
        this.router = router;
        this.searchBar = false;
        this.searchInput = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
    }
    SearchComponent.prototype.filterStates = function (val) {
        return val ? this.products.filter(function (s) { return new RegExp(val, 'gi').test(s.name); }) : this.products;
    };
    SearchComponent.prototype.search = function (q) {
        var typingTimer;
        clearTimeout(typingTimer);
        var vm = this;
        typingTimer = setTimeout(function () {
            vm.router.navigateByUrl('/shop?q=' + q);
        }, 600);
    };
    SearchComponent.prototype.show = function (x) {
        this.searchBar = false;
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SearchComponent.prototype, "searchBar", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'shopnx-search',
        template: __webpack_require__("../../../../../src/app/shared/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.apiPath = '/api/';
    }
    ApiService.prototype.get = function () {
        return this.http.get(this.apiPath + 'products')
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    ApiService.prototype.getProduct = function (id) {
        return this.http.get(this.apiPath + 'products/' + id)
            .map(function (res) { return res.json(); });
        // .catch(this.handleError);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["Http"]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_cookies_ng2_cookies__ = __webpack_require__("../../../../ng2-cookies/ng2-cookies.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_cookies_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_cookies_ng2_cookies__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(userService, router, snack) {
        this.userService = userService;
        this.router = router;
        this.snack = snack;
        this.loggedIn = false;
        this.isAdmin = false;
        this.userRoles = __WEBPACK_IMPORTED_MODULE_8__settings__["a" /* Settings */].userRoles || [];
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["JwtHelper"]();
        this.currentUser = { _id: '', name: '', email: '', role: '', avatar: '' };
        var token = localStorage.getItem('id_token') || __WEBPACK_IMPORTED_MODULE_9_ng2_cookies_ng2_cookies__["Cookie"].get('token'); //Cookies set through auth strategy
        if (token && token !== 'null') {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
            if (this.jwtHelper.isTokenExpired(token)) {
                this.logout();
            }
        }
    }
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.isSessionExpired = function (token) {
        return this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('id_token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        return this.userService.register(user).map(function (res) { return res.json(); }).map(function (res) {
            localStorage.setItem('id_token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function (url) {
        localStorage.removeItem('id_token');
        __WEBPACK_IMPORTED_MODULE_9_ng2_cookies_ng2_cookies__["Cookie"].delete('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = { _id: '', name: '', email: '', role: '', avatar: '' };
        var navigateUrl = url || '/';
        this.router.navigate([navigateUrl]);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token);
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.email = decodedUser.email;
        this.currentUser.name = decodedUser.name;
        this.currentUser.avatar = decodedUser.avatar;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        // delete decodedUser.role;
    };
    AuthService.prototype.updateProfile = function (user) {
        this.currentUser.avatar = user.avatar;
        this.currentUser.name = user.name;
    };
    AuthService.prototype.saveProfile = function (data) {
        return this.userService.saveProfile(this.currentUser._id, data).map(function (res) { return res.json(); }).map(function (res) { return res; });
    };
    AuthService.prototype.changePassword = function (data) {
        var _this = this;
        return this.userService.changePassword(this.currentUser._id, data.oldPassword, data.newPassword).map(function (res) {
            _this.snack.open(res.json().message, 'OK', { duration: 2000 });
            return res.json() || [];
        }).catch(this.handleError);
    };
    AuthService.prototype.hasRole = function (role) {
        return this.currentUser ? this.userRoles.indexOf(this.currentUser.role) >= this.userRoles.indexOf(role) : false;
    };
    AuthService.prototype.getToken = function () {
        return 'Bearer ' + localStorage.getItem('id_token');
    };
    AuthService.prototype.handleError = function (err) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs__["Observable"].throw(err || 'Server error');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudBaseService; });





var CrudBaseService = (function () {
    function CrudBaseService() {
        this.data = { api: null };
        this.record = { api: null };
    }
    CrudBaseService.prototype.callCache = function (res, post) {
        this.record.api = res.json();
        (post) ? this.data.api.push(res.json()) : this.data.api = null; // Invalidate cache if not inserting
        return this.record.api;
    };
    CrudBaseService.prototype.extractData = function (res) {
        this.observable = null;
        if (res.status >= 400) {
            return "FAILURE";
        }
        else if (res.status >= 200 && res.status <= 300) {
            return res.json() || [];
        }
    };
    CrudBaseService.prototype.handleError = function (error) {
        var status = error.status;
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0_angular2_jwt__["AuthHttpError"]) {
            errMsg = error.message;
        }
        else if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            if (error.status === 403)
                errMsg = 'Unauthorized... ';
            else if (error.status === 404)
                errMsg = 'Requested url ' + error.url + ' not found';
            else {
                var body = error.json() || '';
                if (status === 500) {
                    errMsg = body.message;
                }
                else {
                    var err = body.error || JSON.stringify(body);
                    errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                }
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return CrudBaseService;
}());

//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
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
    function CartService(crud, router, auth) {
        this.crud = crud;
        this.router = router;
        this.auth = auth;
        this.items = [];
        this.skuArray = [];
        this.variantsArray = [];
        this.totalWeight = 0;
        this.clearCart = false;
        this.cartName = 'ShopNx';
        this.checkoutCOD = function (parms, clearCart) {
            var _this = this;
            var data = this.items;
            var total = Math.round((this.getTotalPrice() - parms.couponAmount) * parms.exchange_rate * 100) / 100;
            var subtotal = Math.round((this.getTotalPrice() - parms.couponAmount) * parms.exchange_rate * 100) / 100;
            var items = [];
            for (var k = 0; k < data.length; k++) {
                var i = data[k];
                items.push({ sku: i.sku, name: i.name, url: i.image, description: i.slug, price: Math.round(i.price * parms.exchange_rate * 100) / 100, quantity: i.quantity, currency: parms.currency_code });
            }
            if (parms.discount > 0)
                items.push({ sku: '#', name: 'Coupon Discount', url: '-', description: '-', price: -Math.round(parms.discount * parms.exchange_rate * 100) / 100, quantity: 1, currency: parms.currency_code });
            var orderDetails = {
                uid: parms.uid,
                email: parms.email,
                phone: parms.phone,
                address: parms.address,
                payment: { state: 'Pending', method: 'COD' },
                amount: { total: total, currency: parms.currency_code, exchange_rate: parms.exchange_rate, details: { shipping: Math.round(parms.shipping * 100) / 100, subtotal: subtotal } },
                items: items,
                status: 'Payment Pending'
            };
            // When order.status is null, the client will replace with the Array[0] of order status at appConfig page
            this.crud.post('orders', orderDetails, true, true).subscribe(function (data) {
                if (clearCart)
                    _this.clearItems();
                _this.router.navigateByUrl('/admin/my-orders');
            });
        };
        this.loadItems();
    }
    CartService.prototype.checkout = function (method, items, params, clearCart) {
        params.exchange_rate = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */].currency.exchange_rate;
        if (!params.exchange_rate || isNaN(params.exchange_rate) || params.exchange_rate === '')
            params.exchange_rate = 1;
        if (!params.couponAmount || isNaN(params.couponAmount) || params.couponAmount === '')
            params.couponAmount = 0;
        params.currency_code = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */].currency.code;
        params.paypal_currency = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */].currency.paypal;
        params.email = this.auth.currentUser.email;
        params.uid = this.auth.currentUser._id;
        params.recipient_name = (params.name === '') ? this.auth.currentUser.name : params.name;
        switch (method) {
            case "PayPal":
                this.checkoutPayPal(params, clearCart);
                break;
            case "COD":
                this.checkoutCOD(params, clearCart);
                break;
            default:
                console.log("Unknown checkout service: " + method);
                break;
        }
    };
    CartService.prototype.checkoutPayPal = function (params, clearCart) {
        var data = {
            cmd: "_cart",
            business: params.merchantID,
            upload: "1",
            rm: "2",
            charset: "utf-8",
            data: this.items,
            options: params
        };
        var form = $('<form/></form>');
        form.attr("id", "paypalForm");
        form.attr("action", "/api/pay/paypal");
        form.attr("method", "GET");
        form.attr("style", "display:none;");
        this.addFormFields(form, data);
        $("body").append(form);
        // this.clearCart = clearCart == null || clearCart;
        if (clearCart)
            this.clearItems();
        form.submit();
        form.remove();
    };
    // check out using Google Wallet
    // for details see:
    // developers.google.com/checkout/developer/Google_Checkout_Custom_Cart_How_To_HTML
    // developers.google.com/checkout/developer/interactive_demo
    CartService.prototype.checkoutGoogle = function (parms, clearCart) {
        // global data
        var data = {};
        // item data
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            var ctr = i + 1;
            data["item_name_" + ctr] = item.sku;
            data["item_description_" + ctr] = item.name;
            data["item_price_" + ctr] = item.price.toFixed(2);
            data["item_quantity_" + ctr] = item.quantity;
            data["item_merchant_id_" + ctr] = parms.merchantID;
        }
        // build form
        var form = $('<form/></form>');
        // NOTE: in production projects, use the checkout.google url below;
        // for debugging/testing, use the sandbox.google url instead.
        //form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + parms.merchantID);
        form.attr("action", "https://sandbox.google.com/checkout/api/checkout/v2/checkoutForm/Merchant/" + parms.merchantID);
        form.attr("method", "POST");
        form.attr("style", "display:none;");
        this.addFormFields(form, data);
        if (!parms.options) {
            parms.options = {};
        }
        this.addFormFields(form, parms.options);
        $("body").append(form);
        // submit form
        this.clearCart = clearCart == null || clearCart;
        form.submit();
        form.remove();
    };
    CartService.prototype.addFormFields = function (form, data) {
        if (data !== null) {
            $.each(data, function (name, value) {
                if (value !== null) {
                    var input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(JSON.stringify(value));
                    form.append(input);
                }
            });
        }
    };
    CartService.prototype.toNumber = function (value) {
        value = value * 1;
        return isNaN(value) ? 0 : value;
    };
    CartService.prototype.loadItems = function () {
        var items = localStorage !== null ? localStorage[this.cartName + '_items'] : null;
        if (items !== null && JSON !== null) {
            try {
                items = JSON.parse(items);
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    if (item.sku !== null && item.name !== null && item.price !== null) {
                        this.items.push(item);
                        this.skuArray.push(item.sku);
                        this.variantsArray.push(item.vid);
                        // this.totalWeight = item.weight;
                    }
                }
            }
            catch (err) {
                // ignore errors while loading...
            }
        }
    };
    // save items to local storage
    CartService.prototype.saveItems = function () {
        if (localStorage !== null && JSON !== null) {
            localStorage[this.cartName + '_items'] = JSON.stringify(this.items);
        }
    };
    // adds an item to the cart
    CartService.prototype.addItem = function (product, quantity) {
        quantity = this.toNumber(quantity);
        if (quantity !== 0) {
            // update quantity for existing item
            var found = false;
            for (var i = 0; i < this.items.length && !found; i++) {
                var item = this.items[i];
                if (item.sku === product.sku && item.vid === product.vid) {
                    found = true;
                    item.quantity = this.toNumber(this.toNumber(item.quantity) + quantity);
                    if (item.weight == null) {
                        item.weight = 0;
                    }
                    item.slug = product.slug;
                    if (item.quantity <= 0) {
                        this.items.splice(i, 1);
                        this.skuArray.splice(i, 1);
                        this.variantsArray.splice(i, 1);
                    }
                }
            }
            // new item, add now
            if (!found && product.price) {
                var itm = product;
                this.items.push(itm);
                this.skuArray.push(itm.sku);
                this.variantsArray.push(itm.vid);
            }
            // save changes
            this.saveItems();
        }
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getBestShipper = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["URLSearchParams"]();
        params.set('weight', this.getTotalWeight().toString());
        params.set('cartValue', this.getTotalPrice().toString());
        return this.crud.get('shippings/best', params);
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalWeight = function () {
        var totalWeight = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            totalWeight += this.toNumber(item.quantity * item.weight);
        }
        return totalWeight;
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalPrice = function () {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            total += this.toNumber(item.quantity * item.price);
        }
        return total;
    };
    CartService.prototype.checkCart = function (id, vid) {
        if (!__WEBPACK_IMPORTED_MODULE_6_lodash__["includes"](this.skuArray, id) || !__WEBPACK_IMPORTED_MODULE_6_lodash__["includes"](this.variantsArray, vid)) {
            return true;
        }
        else {
            return false;
        }
    };
    CartService.prototype.getQuantity = function (sku, vid) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].sku === sku && this.items[i].vid === vid) {
                return this.items[i].quantity;
            }
        }
    };
    // get the total price for all items currently in the cart
    CartService.prototype.getTotalCount = function (sku) {
        var count = 0;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (sku === undefined || item.sku === sku) {
                count += this.toNumber(item.quantity);
            }
        }
        return count;
    };
    // clear the cart
    CartService.prototype.clearItems = function () {
        this.items = [];
        this.skuArray = [];
        this.variantsArray = [];
        this.saveItems();
    };
    return CartService;
}());
CartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], CartService);

var _a, _b, _c;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/crud.helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_labelcase_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/labelcase.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudHelper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CrudHelper = (function () {
    function CrudHelper() {
    }
    // private labelcasePipe: LabelcasePipe;
    // constructor(private labelcasePipe: LabelcasePipe) { }
    CrudHelper.prototype.help = function (fields) {
        var obj = [];
        fields.filter(function (i) {
            var o = {};
            // if(!i.heading){
            //     i.heading = i.field;
            // }
            // i.heading = this.labelCasePipe.transform(i.heading);
            // Extract sortType from type
            if (i.dataType === 'numeric' || i.dataType === 'number' || i.dataType === 'float' || i.dataType === 'integer' || i.dataType === 'currency') {
                i.dataType = 'parseFloat';
                o.sortType = 'parseFloat';
            }
            else if (i.dataType === 'date' || i.dataType === 'calendar') {
                i.dataType = 'date';
                o.sortType = 'date';
            }
            else if (i.dataType === 'link' || i.dataType === 'ref' || i.dataType === 'href' || i.dataType === 'hyperlink') {
                i.dataType = 'link';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'product-detail') {
                i.dataType = 'product-detail';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'product-image') {
                i.dataType = 'product-image';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'array' || i.dataType === 'multi' || i.dataType === 'multiple') {
                i.dataType = 'array';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'dropdown' || i.dataType === 'select' || i.dataType === 'option') {
                i.dataType = 'select';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'textarea' || i.dataType === 'multiline') {
                i.dataType = 'textarea';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'image' || i.dataType === 'photo' || i.dataType === 'picture') {
                i.dataType = 'image';
                o.sortType = 'lowercase';
            }
            else if (i.dataType === 'boolean') {
                i.dataType = 'boolean';
                o.sortType = 'lowercase';
            }
            else {
                i.dataType = 'text';
                o.sortType = 'lowercase';
            }
            // check heading (Assign heading if not exists)
            if ('heading' in i) {
                o.heading = i.heading;
            }
            else if ('title' in i) {
                o.heading = i.title;
            }
            else {
                o.heading = i.field;
            }
            // Assign fields to object
            o.heading = new __WEBPACK_IMPORTED_MODULE_0__pipes_labelcase_pipe__["a" /* LabelcasePipe */]().transform(o.heading);
            o.field = i.field;
            o.noSort = i.noSort;
            o.noAdd = i.noAdd;
            o.noEdit = i.noEdit;
            o.dataType = i.dataType;
            o.options = i.options;
            o.link = i.link;
            o.id = i.id;
            o.slug = i.slug;
            obj.push(o);
            // return element.postId == id;
        });
        return obj;
    };
    return CrudHelper;
}());
CrudHelper = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], CrudHelper);

//# sourceMappingURL=crud.helper.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/app/shared/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CrudService = (function (_super) {
    __extends(CrudService, _super);
    function CrudService(authHttp, http, snack) {
        var _this = _super.call(this) || this;
        _this.authHttp = authHttp;
        _this.http = http;
        _this.snack = snack;
        _this.apiPath = '/api/';
        _this.headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        _this.options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["RequestOptions"]({ headers: _this.headers });
        return _this;
    }
    CrudService.prototype.get = function (api, params, auth) {
        var http = auth ? this.authHttp : this.http;
        return http.get(this.apiPath + api + '/', { search: params })
            .map(this.extractData)
            .share()
            .catch(this.handleError);
    };
    CrudService.prototype.getOne = function (api, id, auth, cache) {
        var _this = this;
        if (!this.record.api) {
            this.record.api = {};
        }
        if (!this.record.api.id) {
            this.record.api.id = {};
        }
        if (this.record.api.id && this.record.api.id._id === id && !cache) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of(this.record.api.id);
        }
        else {
            var http = auth ? this.authHttp : this.http;
            return http.get(this.apiPath + api + '/' + id)
                .map(this.extractData)
                .share()
                .catch(this.handleError)
                .do(function (res) { return _this.extractData; });
        }
    };
    CrudService.prototype.add = function (api, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.post(this.apiPath + api, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.post = function (api, body, auth, notdemo) {
        if (auth === void 0) { auth = true; }
        // Auth true/false required for change password
        if (__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        if (!auth) {
            return this.http.post(this.apiPath + api, body)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.authHttp.post(this.apiPath + api, body)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    CrudService.prototype.put = function (api, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.put("" + this.apiPath + api, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.patch = function (api, id, body, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.patch("" + this.apiPath + api + "/" + id, body)
            .map(this.extractData)
            .catch(this.handleError);
    };
    CrudService.prototype.delete = function (api, id, notdemo) {
        if (__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].demo && !notdemo)
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].throw('Demo mode: Unable to save');
        return this.authHttp.delete("" + this.apiPath + api + "/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    return CrudService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* CrudBaseService */]));
CrudService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object])
], CrudService);

var _a, _b, _c;
//# sourceMappingURL=crud.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });

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
    function UserService(authHttp, http) {
        this.authHttp = authHttp;
        this.http = http;
        this.url = '/api/users/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserService.prototype.getUsers = function (params) {
        var _this = this;
        if (this.users && !params) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(this.users);
        }
        else if (this.observable && !params) {
            return this.observable;
        }
        else {
            this.observable = this.authHttp.get(this.url, { search: params })
                .map(function (res) {
                _this.observable = null;
                if (res.status == 400) {
                    return "FAILURE";
                }
                else if (res.status == 200) {
                    return res.json() || [];
                }
            })
                .share()
                .catch(this.handleError);
            return this.observable;
        }
    };
    UserService.prototype.query = function () {
        return this.authHttp.get(this.url);
    };
    UserService.prototype.get = function (user) {
        if (user === void 0) { user = { id: 'me' }; }
        var myHeader = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        myHeader.append('Authorization', 'application/json');
        return this.authHttp.get("" + this.url + (user.id || user._id), { headers: myHeader });
    };
    UserService.prototype.editUser = function (user) {
        return this.authHttp.put("" + this.url + user._id, JSON.stringify(user), this.options);
    };
    UserService.prototype.deleteUser = function (user) {
        return this.authHttp.delete("" + this.url + user._id, this.options);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/auth/local', JSON.stringify(credentials), this.options);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(this.url, JSON.stringify(user), this.options);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.url, JSON.stringify(user), this.options);
    };
    UserService.prototype.remove = function (user) {
        return this.authHttp.delete("" + this.url + (user.id || user._id));
    };
    UserService.prototype.changePassword = function (id, oldPassword, newPassword) {
        return this.authHttp.put("" + this.url + id + "/password", { oldPassword: oldPassword, newPassword: newPassword });
    };
    UserService.prototype.getProfile = function (uid) {
        return this.authHttp.get(this.url + uid).map(function (res) { return res.json() || []; });
    };
    UserService.prototype.saveProfile = function (uid, data) {
        return this.authHttp.put(this.url + uid, data);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Response"]) {
            if (error.status < 200 || error.status >= 300) {
                errMsg = 'This request has failed ' + error.status + ' - ' + error.statusText;
            }
            else {
                errMsg = error.status + " - " + (error.statusText || '');
            }
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].throw(errMsg || 'Server Error');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["AuthHttp"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/users.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersResolve = (function () {
    function UsersResolve(users, router, snack) {
        this.users = users;
        this.router = router;
        this.snack = snack;
    }
    UsersResolve.prototype.resolve = function (route, state) {
        var id = route.params['id'];
        return this.users.getUsers();
    };
    return UsersResolve;
}());
UsersResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _c || Object])
], UsersResolve);

var _a, _b, _c;
//# sourceMappingURL=users.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list_component__ = __webpack_require__("../../../../../src/app/shared/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_media_library__ = __webpack_require__("../../../../../src/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_cart_buttons_cart_buttons_component__ = __webpack_require__("../../../../../src/app/shared/cart-buttons/cart-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address_component__ = __webpack_require__("../../../../../src/app/shared/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_dashboardFilter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/dashboardFilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__ = __webpack_require__("../../../../../src/app/shared/dialogs/dialogs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_modal_single__ = __webpack_require__("../../../../../src/app/shared/media/modal-single.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/unique.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/labelcase.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/pluralize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__ = __webpack_require__("../../../../../src/app/shared/submit-button/submit-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__search_search_component__ = __webpack_require__("../../../../../src/app/shared/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__ = __webpack_require__("../../../../../src/app/shared/oauth-buttons/oauth-buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__media_media_component__ = __webpack_require__("../../../../../src/app/shared/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__ = __webpack_require__("../../../../../src/app/shared/list-image/list-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__export_export_component__ = __webpack_require__("../../../../../src/app/shared/export/export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__ = __webpack_require__("../../../../../src/app/shared/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_angular2_busy__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var routes = [];
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_26__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_27__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_13__angular_router__["a" /* RouterModule */].forChild(routes),
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_29_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__dialogs_dialogs_module__["a" /* DialogsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_30_angular2_busy__["BusyModule"],
            __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MdMenuModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["u" /* MdChipsModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["v" /* MdProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MdToolbarModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["w" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MdNativeDateModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_23__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__["a" /* OauthButtonsComponent */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["b" /* ObjectFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__pipes_dashboardFilter_pipe__["a" /* DashboardFilterPipe */], __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_search_pipe__["a" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__["a" /* LabelcasePipe */], __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__["a" /* SubmitButtonComponent */], __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_25__export_export_component__["a" /* ExportComponent */], __WEBPACK_IMPORTED_MODULE_10__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__["a" /* ListImageComponent */], __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__["a" /* UniquePipe */], __WEBPACK_IMPORTED_MODULE_6__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_4__shared_cart_buttons_cart_buttons_component__["a" /* CartButtonsComponent */], __WEBPACK_IMPORTED_MODULE_3__media_media_library__["a" /* MediaLibraryModal */], __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_25__export_export_component__["a" /* ExportComponent */], __WEBPACK_IMPORTED_MODULE_24__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_23__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_22__list_image_list_image_component__["a" /* ListImageComponent */], __WEBPACK_IMPORTED_MODULE_21__media_media_component__["a" /* MediaComponent */], __WEBPACK_IMPORTED_MODULE_20__oauth_buttons_oauth_buttons_component__["a" /* OauthButtonsComponent */], __WEBPACK_IMPORTED_MODULE_19__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_18__submit_button_submit_button_component__["a" /* SubmitButtonComponent */], __WEBPACK_IMPORTED_MODULE_17__pipes_pluralize_pipe__["a" /* PluralizePipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_labelcase_pipe__["a" /* LabelcasePipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["a" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_15__pipes_filter_pipe__["b" /* ObjectFilterPipe */], __WEBPACK_IMPORTED_MODULE_7__pipes_dashboardFilter_pipe__["a" /* DashboardFilterPipe */], __WEBPACK_IMPORTED_MODULE_14__pipes_unique_pipe__["a" /* UniquePipe */], __WEBPACK_IMPORTED_MODULE_8__pipes_search_pipe__["a" /* SearchPipe */],
            __WEBPACK_IMPORTED_MODULE_28__edit_edit_component__["a" /* EditComponent */], __WEBPACK_IMPORTED_MODULE_10__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_6__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_4__shared_cart_buttons_cart_buttons_component__["a" /* CartButtonsComponent */], __WEBPACK_IMPORTED_MODULE_3__media_media_library__["a" /* MediaLibraryModal */],
            __WEBPACK_IMPORTED_MODULE_2__list_list_component__["a" /* ListComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__shared_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_10__media_modal_single__["a" /* SingleFileUploadModal */], __WEBPACK_IMPORTED_MODULE_3__media_media_library__["a" /* MediaLibraryModal */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/submit-button/submit-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-spinner {\r\n  height: 30px;\r\n  width: 30px;\r\n  display: inline-block;\r\n  color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/submit-button/submit-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div layout=\"column\" align=\"center stretch\">\r\n  <button md-raised-button type=\"submit\" fxFlex class=\"mat-raised circular-progress-button mat-primary\" [disabled]=\"!form.valid || loading || disabled\"\r\n    style=\"width:100%\">\r\n            <i class=\"material-icons\" *ngIf=\"!loading\">{{icon}}</i>\r\n            <md-spinner color=\"#fff\" class=\"app-spinner\" mode=\"indeterminate\" *ngIf=\"loading\" aria-label=\"Please wait. Let me log you in.\"></md-spinner>\r\n            <span>{{text}}</span>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/submit-button/submit-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitButtonComponent = (function () {
    function SubmitButtonComponent() {
        this.icon = 'save';
        // this.form = this.form.form;
        this.loading = !!this.loading;
        this.disabled = !!this.disabled;
    }
    SubmitButtonComponent.prototype.ngOnInit = function () { };
    return SubmitButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubmitButtonComponent.prototype, "form", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SubmitButtonComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SubmitButtonComponent.prototype, "loading", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SubmitButtonComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SubmitButtonComponent.prototype, "icon", void 0);
SubmitButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'submit-button',
        template: __webpack_require__("../../../../../src/app/shared/submit-button/submit-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/submit-button/submit-button.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SubmitButtonComponent);

//# sourceMappingURL=submit-button.component.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map