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

/***/ "../../../../../client/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"main\">\n    <div class=\"wrapper\">\n        <app-sidenav></app-sidenav>\n        <section id=\"content\">\n            <div class=\"container\">\n            \t<router-outlet></router-outlet>\n            </div>\n        </section>\n    </div>\n</div>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
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
        this.auth.handleAuthentication();
        if (window["Worker"]) {
            console.log('Service worker available');
        }
        else {
            console.log("Service worker NA");
        }
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export authHttpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__ = __webpack_require__("../../../../../client/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_scope_guard_service__ = __webpack_require__("../../../../../client/app/auth/scope-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../client/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__ = __webpack_require__("../../../../../client/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__ = __webpack_require__("../../../../../client/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../client/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_not_found_not_found_component__ = __webpack_require__("../../../../../client/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_items_items_component__ = __webpack_require__("../../../../../client/app/components/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_add_items_add_items_component__ = __webpack_require__("../../../../../client/app/components/add-items/add-items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tabs_tabs_component__ = __webpack_require__("../../../../../client/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_navbar_navbar_component__ = __webpack_require__("../../../../../client/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__ = __webpack_require__("../../../../../client/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__ = __webpack_require__("../../../../../client/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_carousal_carousal_component__ = __webpack_require__("../../../../../client/app/components/carousal/carousal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_checkout_checkout_component__ = __webpack_require__("../../../../../client/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_order_success_order_success_component__ = __webpack_require__("../../../../../client/app/components/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_location_location_component__ = __webpack_require__("../../../../../client/app/components/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_items_showcase_showcase_component__ = __webpack_require__("../../../../../client/app/components/items/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_items_cart_cart_component__ = __webpack_require__("../../../../../client/app/components/items/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_items_product_product_component__ = __webpack_require__("../../../../../client/app/components/items/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_items_product_thumbnail_product_thumbnail_component__ = __webpack_require__("../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_items_cart_preview_cart_preview_component__ = __webpack_require__("../../../../../client/app/components/items/cart-preview/cart-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_payment_checkout_payment_checkout_component__ = __webpack_require__("../../../../../client/app/components/payment-checkout/payment-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_addresses_addresses_component__ = __webpack_require__("../../../../../client/app/components/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_orders_orders_component__ = __webpack_require__("../../../../../client/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_user_orders_user_orders_component__ = __webpack_require__("../../../../../client/app/components/user-orders/user-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../client/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_right_side_nav_right_side_nav_component__ = __webpack_require__("../../../../../client/app/components/right-side-nav/right-side-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_items_data_service__ = __webpack_require__("../../../../../client/app/components/items/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_items_cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_tabs_service__ = __webpack_require__("../../../../../client/app/services/tabs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_address_service__ = __webpack_require__("../../../../../client/app/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_user_orders_service__ = __webpack_require__("../../../../../client/app/services/user-orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_orders_service__ = __webpack_require__("../../../../../client/app/services/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_local_storage_service__ = __webpack_require__("../../../../../client/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__app_router__ = __webpack_require__("../../../../../client/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_callback_callback_component__ = __webpack_require__("../../../../../client/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__shared_shared_module__ = __webpack_require__("../../../../../client/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__shared_my_filter_pipe__ = __webpack_require__("../../../../../client/app/shared/my-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ng_recaptcha__ = __webpack_require__("../../../../ng-recaptcha/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng_recaptcha_forms__ = __webpack_require__("../../../../ng-recaptcha/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51_ng_recaptcha_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_51_ng_recaptcha_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_account_account_component__ = __webpack_require__("../../../../../client/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_53_primeng_primeng__);
//Modules
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Auth0 - related





//Components


























//Services









//Config
//Routes

//Common for app



//------------------------------End------------------------------
//To Cleanup



// import { RegisterComponent } from './register/register.component';
// import { LoginComponent } from './login/login.component';
// import { LogoutComponent } from './logout/logout.component';


// import { CatsComponent } from './cats/cats.component';

function authHttpServiceFactory(http, options) {
    return new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"](new __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthConfig"]({
        tokenGetter: (function () { return localStorage.getItem('access_token'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), http, options);
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_about_about_component__["a" /* AboutComponent */],
            // RegisterComponent,
            // LoginComponent,
            // LogoutComponent,
            __WEBPACK_IMPORTED_MODULE_52__components_account_account_component__["a" /* AccountComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_tabs_tabs_component__["a" /* TabsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_items_showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_items_cart_cart_component__["a" /* CartComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_items_product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_items_product_thumbnail_product_thumbnail_component__["a" /* ProductThumbnailComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_items_cart_preview_cart_preview_component__["a" /* CartPreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_checkout_checkout_component__["a" /* CheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_carousal_carousal_component__["a" /* CarousalComponent */],
            // CatsComponent,
            __WEBPACK_IMPORTED_MODULE_20__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_items_items_component__["a" /* ItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_add_items_add_items_component__["a" /* AddItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_payment_checkout_payment_checkout_component__["a" /* PaymentCheckoutComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_location_location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_addresses_addresses_component__["a" /* AddressesComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_payment_checkout_payment_checkout_component__["b" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_33__components_user_orders_user_orders_component__["a" /* UserOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_order_success_order_success_component__["a" /* OrderSuccessComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_right_side_nav_right_side_nav_component__["a" /* RightSideNavComponent */],
            __WEBPACK_IMPORTED_MODULE_48__shared_my_filter_pipe__["a" /* FilterPipe */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_46__components_callback_callback_component__["a" /* CallbackComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_45__app_router__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_47__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_53_primeng_primeng__["AccordionModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_51_ng_recaptcha_forms__["RecaptchaFormsModule"],
            __WEBPACK_IMPORTED_MODULE_50_ng_recaptcha__["RecaptchaModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_scope_guard_service__["a" /* ScopeGuardService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_9__angular_http__["RequestOptions"]]
            },
            __WEBPACK_IMPORTED_MODULE_49__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_36__app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_38__components_items_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_39__components_items_cart_service__["a" /* CartService */],
            __WEBPACK_IMPORTED_MODULE_37__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_40__services_tabs_service__["a" /* TabsService */],
            __WEBPACK_IMPORTED_MODULE_41__services_address_service__["a" /* AddressService */],
            __WEBPACK_IMPORTED_MODULE_44__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_43__services_orders_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_42__services_user_orders_service__["a" /* UserOrdersService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_50_ng_recaptcha__["RECAPTCHA_SETTINGS"],
                useValue: { siteKey: '<6Lf5pzQUAAAAANCvQ8Z8vtOdhUCsaijP2xql6fbK>' },
            },
            __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard_service__["a" /* AuthGuardService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_scope_guard_service__["a" /* ScopeGuardService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6_angular2_jwt__["AuthHttp"],
                useFactory: authHttpServiceFactory,
                deps: [__WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_9__angular_http__["RequestOptions"]]
            }
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("../../../../../client/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_account_component__ = __webpack_require__("../../../../../client/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__ = __webpack_require__("../../../../../client/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_checkout_checkout_component__ = __webpack_require__("../../../../../client/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_items_items_component__ = __webpack_require__("../../../../../client/app/components/items/items.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_addresses_addresses_component__ = __webpack_require__("../../../../../client/app/components/addresses/addresses.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_orders_orders_component__ = __webpack_require__("../../../../../client/app/components/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_orders_user_orders_component__ = __webpack_require__("../../../../../client/app/components/user-orders/user-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_payment_checkout_payment_checkout_component__ = __webpack_require__("../../../../../client/app/components/payment-checkout/payment-checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_order_success_order_success_component__ = __webpack_require__("../../../../../client/app/components/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__ = __webpack_require__("../../../../../client/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../client/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__ = __webpack_require__("../../../../../client/app/components/callback/callback.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__ = __webpack_require__("../../../../../client/app/auth/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__auth_scope_guard_service__ = __webpack_require__("../../../../../client/app/auth/scope-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__components_items_items_component__["a" /* ItemsComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_12__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_scope_guard_service__["a" /* ScopeGuardService */]], data: { expectedScopes: ['write:messages'] } },
    { path: 'callback', component: __WEBPACK_IMPORTED_MODULE_14__components_callback_callback_component__["a" /* CallbackComponent */] },
    { path: 'checkout-payu', component: __WEBPACK_IMPORTED_MODULE_10__components_payment_checkout_payment_checkout_component__["a" /* PaymentCheckoutComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_5__components_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_6__components_items_items_component__["a" /* ItemsComponent */] },
    { path: 'order-success', component: __WEBPACK_IMPORTED_MODULE_11__components_order_success_order_success_component__["a" /* OrderSuccessComponent */] },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_8__components_orders_orders_component__["a" /* OrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__auth_scope_guard_service__["a" /* ScopeGuardService */]], data: { expectedScopes: ['write:messages'] } },
    { path: 'user-orders', component: __WEBPACK_IMPORTED_MODULE_9__components_user_orders_user_orders_component__["a" /* UserOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'items/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_items_items_component__["a" /* ItemsComponent */] },
    { path: 'addresses', component: __WEBPACK_IMPORTED_MODULE_7__components_addresses_addresses_component__["a" /* AddressesComponent */] },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_3__components_account_account_component__["a" /* AccountComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__auth_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_4__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/' }
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

//# sourceMappingURL=app.router.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
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
    function AppService(http, toast, userService) {
        this.http = http;
        this.toast = toast;
        this.userService = userService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
        this.selectedTab = 'Home';
        this.x_ = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE";
        this.currentUser = {
            name: 'Ashwath',
            userDetails: {
                addresses: {
                    status: false,
                    data: []
                },
                orders: {
                    status: false,
                    data: []
                },
                otherData: {}
            },
            userData: {
                status: false,
                data: {}
            },
            tokenId: '00110101100',
            tokenForLocalStorage: 'mfb-storage',
            locationData: {
                status: false,
                value: {}
            },
            toUseForRupeeSymbol: {
                englishRupees: 'Rs.',
                hindiRupees: '&#x20b9;'
            },
            locationInfo: {
                status: false,
                value: {}
            },
            distanceFromShop: {
                status: 0,
                value: 0
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
        this.isCartPrepared = false;
        this.searchParams = '';
        this.shopDetails = {
            name: '',
            locationChords: {
                latitude: 17.4551658,
                longitude: 78.4983102
            },
            locationInfo: {
                value: "Shop is in Secunderabad"
            },
            validDistanceAllowedInKm: 20
        };
        this.googleApiKey = 'AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE';
        this.googleCaptchaKey = '6Lf5pzQUAAAAANCvQ8Z8vtOdhUCsaijP2xql6fbK';
        this.googleCaptchaSecretKey = '6Lf5pzQUAAAAAOHS4BtR1XDWKHUnvMZGM0t2iUeL';
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
        // this.userService.getUser();
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
            _this.currentUser.distanceFromShop = {
                status: -1,
                value: data
            };
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__app_shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AppService);

var _a, _b, _c;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../client/app/auth/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../client/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth0_variables__ = __webpack_require__("../../../../../client/app/auth/auth0-variables.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_auth0_js__);
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
    function AuthService(router) {
        this.router = router;
        this.requestedScopes = 'openid profile read:messages write:messages';
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_4_auth0_js__["WebAuth"]({
            clientID: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].clientID,
            domain: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].domain,
            responseType: 'token id_token',
            audience: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].apiUrl,
            redirectUri: __WEBPACK_IMPORTED_MODULE_1__auth0_variables__["a" /* AUTH_CONFIG */].callbackURL,
            scope: this.requestedScopes
        });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                _this.setSession(authResult);
                _this.router.navigate(['/home']);
            }
            else if (err) {
                _this.router.navigate(['/home']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        // If there is a value on the `scope` param from the authResult,
        // use it to set scopes in the session for the user. Otherwise
        // use the scopes as requested. If no scopes were requested,
        // set it to nothing
        var scopes = authResult.scope || this.requestedScopes || '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('scopes', JSON.stringify(scopes));
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('scopes');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.userHasScopes = function (scopes) {
        var grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
        return scopes.every(function (scope) { return grantedScopes.includes(scope); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../client/app/auth/auth0-variables.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTH_CONFIG; });
var AUTH_CONFIG = {
    clientID: 'QkYKIsJTGPZnLYVBOw6bVLmE2ZyhDaDp',
    domain: 'ashwathb.auth0.com',
    callbackURL: 'http://localhost:4200/callback',
    apiUrl: 'https://ashwathb.auth0.com/api/v2/'
};
//# sourceMappingURL=auth0-variables.js.map

/***/ }),

/***/ "../../../../../client/app/auth/scope-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScopeGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScopeGuardService = (function () {
    function ScopeGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ScopeGuardService.prototype.canActivate = function (route) {
        var scopes = route.data.expectedScopes;
        if (!this.auth.isAuthenticated() || !this.auth.userHasScopes(scopes)) {
            this.router.navigate(['']);
            return false;
        }
        return true;
    };
    return ScopeGuardService;
}());
ScopeGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], ScopeGuardService);

var _a, _b;
//# sourceMappingURL=scope-guard.service.js.map

/***/ }),

/***/ "../../../../../client/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">About</h4>\n  <div class=\"card-block\">\n    <ul>\n      <li><b>Author:</b> <a href=\"https://github.com/DavideViolante\" target=\"_blank\">Davide Violante</a></li>\n      <li><b>GitHub:</b> <a href=\"https://github.com/DavideViolante/Angular-Full-Stack\" target=\"_blank\">project repository</a></li>\n      <li><b>This project uses the MEAN stack:</b></li>\n      <ul>\n        <li><a href=\"http://www.mongoosejs.com\" target=\"_blank\"><b>M</b>ongoose.js</a> (<a href=\"https://www.mongodb.com\" target=\"_blank\">MongoDB</a>)</li>\n        <li><a href=\"http://www.expressjs.com\" target=\"_blank\"><b>E</b>xpress.js</a></li>\n        <li><a href=\"https://www.angular.io\" target=\"_blank\"><b>A</b>ngular 2+</a></li>\n        <li><a href=\"https://www.nodejs.org\" target=\"_blank\"><b>N</b>ode.js</a></li>\n      </ul>\n      <li><b>Other tools and technologies used:</b></li>\n      <ul>\n        <li><a href=\"https://cli.angular.io\" target=\"_blank\">Angular CLI</a></li>\n        <li><a href=\"http://www.getbootstrap.com\" target=\"_blank\">Bootstrap</a></li>\n        <li><a href=\"http://www.fontawesome.io\" target=\"_blank\">Font Awesome</a></li>\n        <li><a href=\"https://jwt.io\" target=\"_blank\">JSON Web Token</a></li>\n        <li><a href=\"https://github.com/auth0/angular2-jwt\" target=\"_blank\">Angular 2 JWT</a></li>\n        <li><a href=\"https://github.com/dcodeIO/bcrypt.js\" target=\"_blank\">Bcrypt.js</a></li>\n      </ul>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/about/about.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Account settings</h4>\n  <div class=\"card-block\">\n    <form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\n        <input class=\"form-control\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-envelope\"></i></span>\n        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\" required>\n      </div>\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\"><i class=\"fa fa-black-tie\"></i></span>\n        <select class=\"form-control\" name=\"role\" [(ngModel)]=\"user.role\">\n          <option value=\"\" disabled>Role</option>\n          <option value=\"user\">User</option>\n          <option value=\"admin\">Admin</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!accountForm.form.valid\">\n        <i class=\"fa fa-save\"></i> Save\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/account/account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
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


// import { AuthService } from '../../services/auth.service';


var AccountComponent = (function () {
    function AccountComponent(
        // private auth: AuthService,
        toast, userService, appService) {
        this.toast = toast;
        this.userService = userService;
        this.appService = appService;
        this.user = {};
        this.isLoading = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    AccountComponent.prototype.getUser = function () {
        // this.userService.getUser(this.auth.currentUser).subscribe(
        //   data => {
        //     this.appService.currentUser.userDetails = data;
        //     this.user = data;
        //   },
        //   error => console.log(error),
        //   () => this.isLoading = false
        // );
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
        template: __webpack_require__("../../../../../client/app/components/account/account.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/account/account.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _c || Object])
], AccountComponent);

var _a, _b, _c;
//# sourceMappingURL=account.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/add-items/add-items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Items ({{leafyGreenVegetables.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>nameForTelugu</th>\n          <th>nameForHindi</th>\n          <th>type</th>\n          <th>description</th>\n          <th>available</th>\n          <th>countPerKg</th>\n          <th>averageWeightPerPiece</th>\n          <th>price</th>\n          <th>imageForShowCase</th>\n          <th>imageForCart</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"leafyGreenVegetables.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no items in the DB. Add a new item below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of leafyGreenVegetables\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.nameForTelugu}}</td>\n          <td>{{cat.nameForHindi}}</td>\n          <td>{{cat.type}}</td>\n          <td>{{cat.description}}</td>\n          <td>{{cat.available}}</td>\n          <td>{{cat.countPerKg}}</td>\n          <td>{{cat.averageWeightPerPiece}}</td>\n          <td>{{cat.price}}</td>\n          <td><img [src]=\"cat.imageForShowCase\"/></td>\n          <td><img [src]=\"cat.imageForCart\"/></td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> <button class=\"btn btn-sm btn-danger\" (click)=\"deleteLeafyGreenVegetable(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editLeafyGreenVegetable(leafyGreenVegetable)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"nameForTelugu\" [(ngModel)]=\"leafyGreenVegetable.nameForTelugu\" placeholder=\"nameForTelugu\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"leafyGreenVegetable.nameForHindi\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <select class=\"form-control\" name=\"type\" required [(ngModel)]=\"leafyGreenVegetable.type\" >\n                  <option *ngFor=\"let c of itemTypes\" [ngValue]=\"c\">{{c}}</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"countPerKg\" [(ngModel)]=\"leafyGreenVegetable.countPerKg\" placeholder=\"countPerKg\" required>\n              </div>                            \n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"averageWeightPerPiece\" [(ngModel)]=\"leafyGreenVegetable.averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input type=\"radio\" value=\"true\" name=\"available\" [(ngModel)]=\"leafyGreenVegetable.available\" required> Yes\n                  <input type=\"radio\" value=\"false\" name=\"available\" [(ngModel)]=\"leafyGreenVegetable.available\" required> No\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"description\" [(ngModel)]=\"leafyGreenVegetable.description\" placeholder=\"description\" required>\n              </div>\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"number\" name=\"price\" [(ngModel)]=\"leafyGreenVegetable.price\" placeholder=\"price\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new Exotic Vegetable</h4>\n  <div class=\"card-block\">\n  \n  available: String,\n  description: String\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addLeafyGreenVegetable()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"nameForTelugu\" formControlName=\"nameForTelugu\" placeholder=\"nameForTelugu\">\n      </div>\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"nameForHindi\" formControlName=\"nameForHindi\" placeholder=\"nameForHindi\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"countPerKg\" formControlName=\"countPerKg\" placeholder=\"countPerKg\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"averageWeightPerPiece\" formControlName=\"averageWeightPerPiece\" placeholder=\"averageWeightPerPiece\">\n      </div>  \n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"price\" formControlName=\"price\" placeholder=\"price\">\n      </div>\n\n      <div class=\"form-group\">\n        Type\n        <select class=\"form-control\" formControlName=\"type\" placeholder=\"type\" name=\"type\" [(ngModel)]=\"leafyGreenVegetable.type\" >\n          <option *ngFor=\"let c of itemTypes\" [ngValue]=\"c\">{{c}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        Available\n        <input class=\"form-control\" type=\"radio\" value=\"true\" name=\"available\" formControlName=\"available\" placeholder=\"available\">Yes\n        <input class=\"form-control\" type=\"radio\" value=\"false\" name=\"available\" formControlName=\"available\" placeholder=\"available\">No\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"description\" formControlName=\"description\" placeholder=\"description\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,1)\" type=\"file\" name=\"imageForCart\" placeholder=\"imageForCart\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" #fileInput (change)=\"imageChange($event,2)\" type=\"file\" name=\"imageForShowCase\" placeholder=\"imageForShowCase\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" ><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/components/add-items/add-items.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/add-items/add-items.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/add-items/add-items.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], AddItemsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-items.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/add-items/add-items.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n\nimg {\n  display: block;\n  max-width: 230px;\n  max-height: 95px;\n  width: auto;\n  height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/addresses/addresses.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<app-loading [condition]=\"loadWholeScreen\"></app-loading>\n\n<div *ngIf=\"!loadWholeScreen\">\n\n  <button class=\"btn btn-sm btn-warning\" [disabled]=\"!showLocationButton\" (click)=\"getLocationData()\">Use My Current Location</button>\n\n  <div class=\"card\" *ngIf=\"!isLoading\">\n    <h4 class=\"card-header\">Current Addresses ({{addresses.length}})</h4>\n    <div class=\"card-block\">\n      <table class=\"table table-bordered table-striped\">\n        <thead class=\"thead-default\">\n          <tr>\n            <th>Select Address to use</th>\n            <th>Name</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"addresses.length === 0\">\n          <tr>\n            <td colspan=\"4\">There are no addresses in the DB. Add a new address below.</td>\n          </tr>\n        </tbody>\n        <tbody *ngIf=\"!isEditing\">\n          <tr *ngFor=\"let address of addresses\">\n            <td *ngIf=\"address._id\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">\n            </td>\n            <td *ngIf=\"!address._id\">\n              <!-- <div *ngIf=\"isAddressValidInDistance\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">              \n              </div>\n              <div *ngIf=\"!isAddressValidInDistance\">\n                NA\n              </div> -->\n              <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\"> \n            </td>\n            <td>{{address.name}}</td>\n            <td *ngIf=\"address._id\">\n              <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n              <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n            </td>\n            <td *ngIf=\"!address._id\">\n              <!-- <div *ngIf=\"isAddressValidInDistance\">\n                <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n              </div>\n              <div *ngIf=\"!isAddressValidInDistance\">\n                <div>Address not in range of Delivery which is ({{appService.shopDetails.validDistanceAllowedInKm}}Km)</div>\n              </div> -->\n              <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n              <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n            </td>\n          </tr>  \n        </tbody>\n        <tbody *ngIf=\"isEditing\">\n          <tr>\n            <td colspan=\"4\">\n              <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editAddress(address)\" style=\"display:inline\">\n                <div class=\"form-group\">\n                    <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"address.name\" placeholder=\"Name\" required>\n                </div>\n                 <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n              </form>\n              <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"card\" *ngIf=\"!isEditing\">\n    <h4 class=\"card-header\">Add new address</h4>\n    <div class=\"card-block\">\n      <form class=\"form-inline\" [formGroup]=\"addAddressForm\" style=\"text-align:center\">\n        <div class=\"form-group\">\n            <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n        </div>\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"addAddress()\" [disabled]=\"!addAddressForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n      </form>\n    </div>\n  </div>\n\n   <button class=\"btn btn-primary\" (click)=\"proceedToPay()\" [disabled]=\"addressSelected==''\">Proceed to Pay {{cartService.cartTotal}}</button>\n</div>\n\n<div *ngIf=\"loadWholeScreen\">  \n</div>"

/***/ }),

/***/ "../../../../../client/app/components/addresses/addresses.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/addresses/addresses.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__items_cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_items_service__ = __webpack_require__("../../../../../client/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
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
    function AddressesComponent(addressService, cartService, appService, itemsService, formBuilder, http, toast, router, userService, auth) {
        this.addressService = addressService;
        this.cartService = cartService;
        this.appService = appService;
        this.itemsService = itemsService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.toast = toast;
        this.router = router;
        this.userService = userService;
        this.auth = auth;
        this.address = {};
        this.addresses = [];
        this.isLoading = false;
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
            if (_this.appService.currentUser.distanceFromShop.status == 1) {
                _this.isAddressValidInDistance = true;
                // this.addUserHelper(address);
            }
            _this.isLoading = false;
        }, function () {
            _this.isLoading = false;
        });
    };
    AddressesComponent.prototype.getAddresses = function () {
        if (this.appService.currentUser.userData.status) {
            this.addresses = this.appService.currentUser.userData.data['addresses'];
        }
        else {
            this.isLoading = true;
            debugger;
            // this.userService.getUser(this.auth.currentUser).subscribe(
            //   data => {
            //     this.addresses = data['addresses'];
            //     this.appService.currentUser.userData = {
            //       status: true,
            //       data: data
            //     };
            //     this.isLoading = false;
            //   },
            //   error => console.log(error),
            //   () => {
            //     this.isLoading = false;
            //   }
            // );
        }
    };
    AddressesComponent.prototype.addAddress = function () {
        var address = {
            name: this.addAddressForm.value.name,
            value: {
                HNo: 'dhdhdhdhh',
                StreetNo: 'yyeueueueuueue',
                AreaName: 'Bowenpally',
                LandMark: 'assdsddjjdjdjdjdjjdjd'
            }
        };
        this.addUserHelper(address);
    };
    AddressesComponent.prototype.addUserHelper = function (address) {
        var _this = this;
        var User = this.appService.currentUser.userData.data;
        User['addresses'].push(address);
        this.isLoading = false;
        this.userService.editUser(User).subscribe(function (res) {
            var updatedUser = res.json();
            _this.appService.currentUser.userData.data = updatedUser;
            _this.appService.currentUser.userData.status = false;
            _this.addAddressForm.reset();
            _this.addresses = _this.appService.currentUser.userData.data['addresses'];
            _this.isLoading = true;
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
        var user = this.appService.currentUser.userDetails.addresses.data;
        for (var i = 0; i < user['addresses'].length; i++) {
            if (user['addresses'][i].name == address.name) {
                user['addresses'][i].value = address;
            }
        }
        this.userService.editUser(user).subscribe(function (res) {
            _this.addresses = _this.appService.currentUser.userDetails.addresses.data['addresses'];
            var newAddresses = res.json();
            _this.appService.currentUser.userDetails.addresses.status = true;
            _this.appService.currentUser.userDetails.addresses.data = res;
            _this.addresses = newAddresses.addresses;
            // this.addAddressForm.reset();
            _this.isEditing = false;
            // this.address = res;
            _this.toast.setMessage('Address Edited successfully.', 'success');
        }, function (error) { return console.log(error); });
    };
    AddressesComponent.prototype.deleteAddress = function (address) {
        if (window.confirm('Are you sure you want to permanently delete this item?')) {
            debugger;
            // let user = this.auth.currentUser;
            // for (var i = 0; i < user.addresses.length; i++) {
            //   if (user.addresses[i].name == address.name) {
            //     user.addresses.splice(i, 1);
            //     break;
            //   }
            // }
            // this.userService.editUser(user).subscribe(
            //   res => {
            //     const pos = this.addresses.map(elem => elem._id).indexOf(address._id);
            //     this.isEditing = false;
            //     // this.addresses = res['']
            //     this.toast.setMessage('Address deleted successfully.', 'success');
            //   },
            //   error => console.log(error)
            // );
            // this.addressService.deleteAddress(address).subscribe(
            //   res => {
            //     const pos = this.addresses.map(elem => elem._id).indexOf(address._id);
            //     this.addresses.splice(pos, 1);
            //     this.toast.setMessage('Address deleted successfully.', 'success');
            //   },
            //   error => console.log(error)
            // );
        }
    };
    AddressesComponent.prototype.proceedToPay = function () {
        var _this = this;
        var prod = this.cartService.products;
        var newProd = [];
        for (var i = 0; i < prod.length; i++) {
            newProd.push({ '_id': prod[i]['product']['_id'] });
        }
        var cartProducts = {
            products: newProd
        };
        this.loadWholeScreen = true;
        // if (this.appService.currentUser.locationInfo.status) {
        //   this.addUserHelper({ name: this.appService.currentUser.locationInfo.value });
        // }
        this.addUserHelper({ name: 'sample' });
        this.itemsService.isCartValid(cartProducts).subscribe(function (res) {
            _this.loadWholeScreen = false;
            if (res['status']) {
                if (res['data']['value']) {
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
        template: __webpack_require__("../../../../../client/app/components/addresses/addresses.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/addresses/addresses.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__items_cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__auth_auth_service__["a" /* AuthService */]) === "function" && _k || Object])
], AddressesComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=addresses.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>You are an Admin!</h2>\n<p>Only users who have a <code>scope</code> of <code>write:messages</code> in their <code>access_token</code> can see this area.</p>\n\n<hr>\n\n<h3>Call an Admin endpoint</h3>\n\n<button \n  class=\"btn btn-primary\"\n  (click)=\"adminPing()\">\n    Post a Message\n</button>\n\n<h2>{{ message }}</h2>"

/***/ }),

/***/ "../../../../../client/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
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
    function AdminComponent(authHttp) {
        this.authHttp = authHttp;
        this.API_URL = 'http://localhost:3001/api';
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.adminPing = function () {
        var _this = this;
        this.message = '';
        this.authHttp.post(this.API_URL + "/admin", {})
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.message = data.message; }, function (error) { return _this.message = error; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../client/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["AuthHttp"]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/callback/callback.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/callback/callback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\">\n  <img src=\"assets/loading.svg\" alt=\"loading\">\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/components/callback/callback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallbackComponent; });
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

var CallbackComponent = (function () {
    function CallbackComponent() {
    }
    CallbackComponent.prototype.ngOnInit = function () {
    };
    return CallbackComponent;
}());
CallbackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-callback',
        template: __webpack_require__("../../../../../client/app/components/callback/callback.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/callback/callback.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CallbackComponent);

//# sourceMappingURL=callback.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/carousal/carousal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/carousal/carousal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n    <!-- Indicators -->\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n      <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n    </ol>\n\n    <!-- Wrapper for slides -->\n    <div class=\"carousel-inner\">\n      <div class=\"item active\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Los Angeles\" style=\"width:100%;\">\n      </div>\n\n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"Chicago\" style=\"width:100%;\">\n      </div>\n    \n      <div class=\"item\">\n        <img class=\"img-responsive\" src=\"http://via.placeholder.com/1000x400\" alt=\"New york\" style=\"width:100%;\">\n      </div>\n    </div>\n\n    <!-- Left and right controls -->\n    <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\n      <span class=\"glyphicon glyphicon-chevron-left\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\n      <span class=\"glyphicon glyphicon-chevron-right\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/carousal/carousal.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/carousal/carousal.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/carousal/carousal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CarousalComponent);

//# sourceMappingURL=carousal.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"jumbotron\">\n\t<h1>PayU Screen</h1>\n\t<button class=\"btn btn-primary fontBold\" (click)=\"submitOrder()\" type=\"button\">Submit Order</button>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_orders_service__ = __webpack_require__("../../../../../client/app/services/user-orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__items_cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
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
    function CheckoutComponent(userOrdersService, userService, toast, cartService, router, auth, appService) {
        this.userOrdersService = userOrdersService;
        this.userService = userService;
        this.toast = toast;
        this.cartService = cartService;
        this.router = router;
        this.auth = auth;
        this.appService = appService;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    //1-orderBooked
    //2-orderAccepted
    //3-orderDelivered
    CheckoutComponent.prototype.submitOrder = function () {
        var items = this.cartService.products;
        for (var i = 0; i < items.length; i++) {
            delete items[i].product.imageForCart;
            delete items[i].product.imageForShowCase;
        }
        var order = {
            orderDetails: {
                orderTime: new Date(),
                modeOfPayment: 'COD',
                paymentId: '1234',
                orderAcceptedTime: new Date(),
                orderDeliveryTime: new Date(),
                orderStatus: 1
            },
            cartDetails: {
                items: items,
                cartTotal: this.cartService.cartTotal
            },
            status: true
        };
        this.addOrder(order);
    };
    CheckoutComponent.prototype.addOrder = function (order) {
        var _this = this;
        var user = this.appService.currentUser.userData['data'];
        user['orders'].push(order);
        this.userService.editUser(user).subscribe(function (res) {
            if (res.status == 200) {
                _this.toast.setMessage('Order added successfully.', 'success');
                _this.cartService.flushCart();
                var newUser = res.json();
                _this.appService.currentUser.userData = {
                    status: true,
                    data: newUser
                };
                _this.router.navigate(['/order-success']);
            }
        }, function (error) { return console.log(error); });
    };
    return CheckoutComponent;
}());
CheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__("../../../../../client/app/components/checkout/checkout.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/checkout/checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_orders_service__["a" /* UserOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_orders_service__["a" /* UserOrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__items_cart_service__["a" /* CartService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* AppService */]) === "function" && _g || Object])
], CheckoutComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=checkout.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n        </div>\n    </div>\n    <div class=\"footer-copyright\">\n        <div class=\"container\">\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../client/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../client/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  cursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"auth.isAuthenticated()\">\n    You are logged in!\n    <span *ngIf=\"auth.userHasScopes(['write:messages'])\">\n      You can now view your <a routerLink=\"/admin\">admin area</a>.\n    </span>\n</h4>\n<h4 *ngIf=\"!auth.isAuthenticated()\">\n  You are not logged in! Please <a (click)=\"auth.login()\">Log In</a> to continue.\n</h4>\n"

/***/ }),

/***/ "../../../../../client/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../client/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/cart-preview/cart-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cart-preview works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/components/items/cart-preview/cart-preview.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/cart-preview/cart-preview.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/items/cart-preview/cart-preview.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/cart-preview/cart-preview.component.sass")]
    }),
    __metadata("design:paramtypes", [])
], CartPreviewComponent);

//# sourceMappingURL=cart-preview.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__ = __webpack_require__("../../../../../client/app/services/local-storage.service.ts");
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
    CartService.prototype.addProductsToCart = function (products) {
        for (var i = 0; i < products.length; i++) {
            for (var j = 0; j < products[i].quantity; j++) {
                this.addProductToCart(products[i].product);
            }
        }
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
    CartService.prototype.removeFromLocalStorage = function () {
        this.localStorageService.clearLocalStorageItem();
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _d || Object])
], CartService);

var _a, _b, _c, _d;
//# sourceMappingURL=cart.service.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preview\" [class.expanded]='expanded'>\n  <button [class.not-shown]='!products.length || expanded' type=\"button\" class=\"circle\" (click)=\"onCartClick()\">\n    <img src=\"../../assets/cart_white.svg\" alt=\"cart\" />\n    <div class=\"indicator\"><span>{{numProducts}}</span></div>\n  </button>\n  <div class=\"fill\" [style.height]=\"expanded ? expandedHeight : 'inherit'\" [class.not-shown]='!products.length' [class.animate-plop]='animatePlop' [class.shown]='animatePopout && !expanded'>\n    <div class=\"expanded-info\" [class.shown]='expanded'>\n      <h3>This is what you're gonna buy...</h3>\n      <div class=\"product\" *ngFor=\"let item of products\">\n        <div class=\"row\">\n          <div class=\"col-6-sm description\">\n            <p>{{item.quantity}} x {{item.product.name}}</p>\n          </div>\n          <div class=\"col-6-sm price\">\n            <p>{{item.quantity*item.product.parsedPrice | currency: 'INR':true }}</p>\n          </div>\n        </div>\n        <button class=\"delete-btn\" (click) = 'deleteProduct(item.product)'>x</button>\n      </div>\n      <button type=\"button\" class=\"pay-btn\" (click) = 'checkout()'>Pay {{cartTotal | currency: 'INR':true }}</button>\n      <!-- <button type=\"button\" class=\"pay-btn\" (click) = 'flushCart()'>Flush Cart</button> -->\n    </div>\n    <button type=\"button\" class=\"close-btn\" *ngIf='expanded' (click)=\"onCartClick()\">Close</button>\n  </div>\n</div>\n<div class=\"overlay\" [class.shown]='expanded'>\n\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/items/cart/cart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview {\n  position: relative; }\n  .preview .fill {\n    position: absolute;\n    top: 0;\n    left: 0; }\n\n.close-btn {\n  position: absolute;\n  top: 6px;\n  right: 5px;\n  background: none;\n  border: none;\n  color: white;\n  font-size: 0.7em;\n  font-weight: 600;\n  text-decoration: underline;\n  opacity: 0.8; }\n  .close-btn:hover {\n    opacity: 1; }\n\n.pay-btn {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 44px;\n  height: 44px;\n  padding: 0 25px;\n  border: none;\n  background-color: #EF364C;\n  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.32);\n  color: white;\n  font-weight: 600;\n  margin-top: 20px; }\n\n.expanded-info {\n  opacity: 0;\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: white;\n  width: 80%;\n  margin: 0 auto; }\n  .expanded-info .product, .expanded-info h3, .expanded-info .pay-btn {\n    opacity: 0;\n    transform: translateY(10px);\n    -webkit-transform: translateY(10px);\n    transition: all 0.5s ease; }\n  .expanded-info .price {\n    text-align: right; }\n  .expanded-info.shown {\n    opacity: 1;\n    z-index: 3; }\n    .expanded-info.shown .product, .expanded-info.shown h3, .expanded-info.shown .pay-btn {\n      transform: translateY(0);\n      -webkit-transform: translateY(0); }\n    .expanded-info.shown h3 {\n      transition-delay: 0.2s;\n      opacity: 0.43; }\n    .expanded-info.shown .product {\n      transition-delay: 0.4s;\n      opacity: 1; }\n    .expanded-info.shown .pay-btn {\n      transition-delay: 0.6s;\n      opacity: 1; }\n  .expanded-info h3 {\n    font-weight: 400;\n    font-size: 16px;\n    margin-top: 30px; }\n  .expanded-info .product {\n    position: relative;\n    width: 95%; }\n    .expanded-info .product p {\n      margin: 0; }\n    .expanded-info .product:not(:last-child) {\n      border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n    .expanded-info .product .delete-btn {\n      position: absolute;\n      right: -28px;\n      top: 14px;\n      background: none;\n      border: none;\n      opacity: 0.6;\n      color: white;\n      font-weight: 600;\n      font-size: 0.8em; }\n      .expanded-info .product .delete-btn:hover {\n        opacity: 0.8; }\n\n.preview.expanded .fill {\n  width: 460px;\n  border-radius: 3px;\n  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.49); }\n  .preview.expanded .fill.animate-plop {\n    -webkit-transform: scale(1.02);\n    transform: scale(1.02); }\n\n.preview:not(.expanded) .fill:hover {\n  box-shadow: 0 2px 13px rgba(49, 46, 82, 0.65); }\n\n.preview .fill {\n  height: 40px;\n  width: 40px;\n  box-shadow: 0 2px 13px rgba(93, 78, 240, 0.55);\n  background: #5D4EF0;\n  border-radius: 50px;\n  z-index: 5;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .fill.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  .preview .fill.shown {\n    -webkit-transform: scale(1.3);\n    transform: scale(1.3); }\n  .preview .fill.animate-plop {\n    -webkit-transform: scale(1.35);\n    transform: scale(1.35); }\n\n.preview .circle {\n  height: 40px;\n  width: 40px;\n  border: none;\n  padding: 0;\n  border-radius: 50px;\n  position: relative;\n  z-index: 8;\n  background: blue;\n  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n  .preview .circle img {\n    position: relative;\n    top: 3px;\n    left: -1px; }\n  .preview .circle.not-shown {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n\n.preview .indicator {\n  background-color: #EF364C;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);\n  color: white;\n  position: absolute;\n  top: -3px;\n  font-size: 0.6em;\n  right: 0;\n  font-weight: 700;\n  text-align: center; }\n  .preview .indicator span {\n    position: relative;\n    top: 1px; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0;\n  opacity: 0;\n  transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  background-color: rgba(0, 0, 0, 0.7); }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .overlay.shown {\n    height: 100%;\n    opacity: 1;\n    z-index: 9; }\n  .pay-btn {\n    margin-top: 35px; }\n  .close-btn {\n    z-index: 90; }\n  .description p, .price p {\n    font-size: 1em; }\n  .expanded-info {\n    width: 90%; }\n    .expanded-info h3 {\n      font-size: 0.9em; }\n    .expanded-info .product .delete-btn {\n      right: -21px;\n      top: 10px; }\n  .preview {\n    position: fixed;\n    bottom: 3%;\n    right: 5%;\n    width: 13%;\n    z-index: 99999;\n    transition: all 0.3s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n    .preview .fill {\n      box-shadow: 0 2px 13px rgba(93, 78, 240, 0.75); }\n    .preview.expanded {\n      width: 90%;\n      margin: 0 auto;\n      bottom: 75%;\n      z-index: 800; }\n      .preview.expanded .fill {\n        width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
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
    function CartComponent(cartService, changeDetectorRef, route, router, appService, auth, toast) {
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.appService = appService;
        this.auth = auth;
        this.toast = toast;
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
        this.toast.setMessage('Removed ' + product.name, 'success');
        this.cartService.deleteProductFromCart(product);
    };
    CartComponent.prototype.flushCart = function () {
        this.cartService.flushCart();
        this.toast.setMessage('Cart Emptied!', 'success');
        this.router.navigate(['/items']);
    };
    CartComponent.prototype.checkout = function () {
        this.expanded = false;
        if (this.auth.isAuthenticated()) {
            this.router.navigate(['/addresses']);
        }
        else {
            this.appService.isCartPrepared = true;
            this.auth.login();
        }
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
        template: __webpack_require__("../../../../../client/app/components/items/cart/cart.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/cart/cart.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _g || Object])
], CartComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=cart.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data__ = __webpack_require__("../../../../../client/app/components/items/mock-data.ts");
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

/***/ "../../../../../client/app/components/items/items.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tabs></app-tabs>\n<app-loading [condition]=\"isLoading\"></app-loading>\n<div class=\"container\">\n\t<div class=\"section\">\n\t\t<showcase *ngIf=\"!isLoading\" [products]='products'></showcase>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/items/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../client/app/components/items/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
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
    ItemsComponent.prototype.ngOnInit = function () {
        this.initCart();
    };
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
    return ItemsComponent;
}());
ItemsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-items',
        template: __webpack_require__("../../../../../client/app/components/items/items.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/items.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["ActivatedRoute"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _e || Object])
], ItemsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=items.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/items.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n\n.main-container {\n  padding-top: 100px; }\n\n.filters-wrapper {\n  position: relative;\n  z-index: 90000; }\n\nsort-filters {\n  position: relative;\n  z-index: 20; }\n\ncart {\n  position: absolute;\n  top: -23px;\n  right: -57px;\n  z-index: 99999999; }\n\nsearch-bar {\n  position: relative;\n  top: -8px; }\n\nshowcase {\n  position: relative;\n  top: -39px;\n  z-index: 10; }\n\n.sort-filters-wrapper {\n  position: relative; }\n\nurl-form {\n  position: absolute;\n  top: -55px; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  url-form {\n    position: fixed;\n    bottom: 20px;\n    left: 10px; }\n  filters {\n    position: fixed;\n    top: 44px;\n    right: -100%;\n    width: 100%;\n    height: 100%; }\n  .sort-filters-wrapper {\n    position: fixed;\n    top: 44px;\n    left: 0;\n    width: 100%;\n    box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.3);\n    padding-top: 10px;\n    background: #5D4EF0;\n    z-index: 200; }\n  .main-container {\n    padding-top: 34px; }\n  search-bar {\n    position: fixed;\n    top: 0;\n    width: 100%;\n    left: 0;\n    z-index: 9000; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/mock-data.ts":
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

/***/ "../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-image\">\n    <img src=\"/assets/images/sample-1.jpg\" alt=\"sample image\">\n    <span class=\"card-title\">{{product.name}}</span>\n  </div>\n  <div class=\"card-content\">\n    <p>Cost{{product.price| currency: 'INR':true}}</p>\n  </div>\n\n  <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{product.type}}<i class=\"mdi-navigation-close right\"></i></span>\n      <p>{{product.description}}</p>\n      <p><i class=\"mdi-action-perm-identity cyan-text text-darken-2\"></i> {{product.price| currency: 'INR':true}}</p>\n      <p><i class=\"mdi-action-perm-phone-msg cyan-text text-darken-2\"></i> {{product.name}}</p>\n      <p><i class=\"mdi-communication-email cyan-text text-darken-2\"></i> {{product.nameForTelugu}}</p>\n      <p><i class=\"mdi-social-cake cyan-text text-darken-2\"></i> {{product.nameForHindi}}</p>\n      <p><i class=\"mdi-device-airplanemode-on cyan-text text-darken-2\"></i>{{product.countPerKg}}</p>\n  </div>\n  <div class=\"card-action\">\n    <a class=\"btn-floating activator btn-move-up waves-effect waves-light darken-2 right\">\n        <i class=\"mdi-editor-mode-edit\"></i>\n    </a>\n    <a class=\"btn-floating waves-effect btn-move-up waves-light darken-2\" (click)=\"onAddToCart()\">\n      <i class=\"mdi-content-add\"></i>\n    </a>\n  </div>"

/***/ }),

/***/ "../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  border-radius: 5px;\n  box-shadow: 0 5px 5px;\n  position: relative;\n  text-align: center;\n  display: block;\n  background-color: white;\n  box-shadow: 0 6px 17px rgba(0, 0, 0, 0.07); }\n\n.add-cart-wrapper, .view-details-wrapper {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.view-details-wrapper {\n  position: relative; }\n  .view-details-wrapper:after {\n    content: \"\";\n    width: 1px;\n    display: block;\n    position: absolute;\n    height: 28px;\n    background-color: #5D4EF0;\n    right: -3px;\n    top: -4px;\n    opacity: 0.2; }\n\n.hide-detail-btn {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  width: 100%;\n  z-index: 20;\n  background: none;\n  border: none;\n  color: white;\n  opacity: 0.6;\n  font-size: 0.7em;\n  font-weight: 600;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n  transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  -webkit-transform: translateY(15px);\n  transform: translateY(15px);\n  transition-delay: 1.2s; }\n  .hide-detail-btn:hover {\n    background: rgba(255, 255, 255, 0.2); }\n\n.img-wrapper {\n  height: 85px;\n  position: relative;\n  overflow: hidden; }\n\n.details {\n  padding-bottom: 7px; }\n  .details hr {\n    width: 90%;\n    height: 0;\n    border-top: 1px solid #5D4EF0; }\n  .details button {\n    background: none;\n    border: none;\n    cursor: pointer; }\n  .details .view:hover, .details .cart:hover {\n    opacity: 0.8; }\n  .details .view {\n    text-transform: uppercase;\n    color: #5D4EF0;\n    font-size: 0.85em;\n    font-weight: 500;\n    position: relative;\n    top: -1px;\n    left: -2px; }\n  .details .cart {\n    position: relative;\n    top: 2px; }\n  .details .not-available hr {\n    border-top: 1px solid #999999; }\n  .details .not-available p {\n    margin: 0;\n    margin-top: -7px;\n    position: relative;\n    top: 2px;\n    text-transform: uppercase;\n    font-size: 0.85em;\n    font-weight: 500;\n    padding-top: 5px;\n    padding-bottom: 3px; }\n\n.img-placeholder, .img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  border-radius: 5px 5px 0 0; }\n\n.img-placeholder {\n  z-index: 3;\n  height: 100%;\n  background: #dddddd; }\n\n.detail-view {\n  position: absolute;\n  z-index: 30;\n  border-radius: 5px;\n  overflow: hidden;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n  .detail-view.active {\n    pointer-events: all; }\n    .detail-view.active .hide-detail-btn {\n      -webkit-transform: translateY(0);\n      transform: translateY(0); }\n    .detail-view.active .info-wrapper {\n      opacity: 1; }\n    .detail-view.active .bg {\n      -webkit-transform: scale(232);\n      transform: scale(232); }\n    .detail-view.active .d-holder {\n      opacity: 1;\n      -webkit-transform: translate(0);\n      transform: translate(0);\n      transition: all 0.5s ease; }\n    .detail-view.active .d-title {\n      transition-delay: 0.4s; }\n    .detail-view.active .d-price {\n      transition-delay: 0.5s; }\n    .detail-view.active .d-description {\n      transition-delay: 0.6s; }\n  .detail-view .d-holder {\n    opacity: 0;\n    -webkit-transform: translateY(10px);\n    transform: translateY(10px);\n    transition: all 0.1s ease; }\n  .detail-view .d-title {\n    font-size: 1.3em;\n    font-weight: 600;\n    margin-bottom: 0;\n    margin-top: 5px; }\n  .detail-view .d-price {\n    margin-top: -7px;\n    font-size: 0.9em; }\n  .detail-view .d-description {\n    font-size: 0.9em;\n    line-height: 1.4em; }\n  .detail-view .info-wrapper {\n    position: relative;\n    z-index: 30;\n    color: white;\n    text-align: left;\n    padding-left: 14px;\n    padding-right: 14px;\n    height: 90%;\n    overflow: scroll; }\n  .detail-view .bg {\n    position: absolute;\n    bottom: -9px;\n    left: 43px;\n    height: 3px;\n    width: 3px;\n    border-radius: 50%;\n    z-index: 20;\n    background: #5D4EF0;\n    transition: all 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86); }\n\n.info {\n  position: relative; }\n\n.unavailable {\n  opacity: 0.3; }\n\n.img {\n  z-index: 4;\n  height: auto;\n  background-color: #eeeeee; }\n\n.title {\n  font-size: 1em;\n  margin-top: 18px;\n  font-weight: 600;\n  margin-bottom: 3px; }\n\n.price {\n  margin-bottom: 10px;\n  color: #999999;\n  font-size: 18px;\n  font-weight: 300;\n  margin-top: 0; }\n\n.bestseller-badge {\n  position: absolute;\n  top: -10px;\n  border-radius: 10px;\n  background-color: #EF364C;\n  color: white;\n  font-size: 0.7em;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  width: 70%;\n  z-index: 40;\n  text-transform: uppercase;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  overflow: hidden;\n  height: 20px;\n  transition: all 0.35s cubic-bezier(0.785, 0.135, 0.15, 0.86);\n  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.48); }\n  .bestseller-badge .txt, .bestseller-badge .star {\n    transition: all 0.35s ease; }\n  .bestseller-badge .txt {\n    position: relative;\n    top: 4px; }\n  .bestseller-badge .star {\n    position: absolute;\n    top: 2px; }\n    .bestseller-badge .star.left {\n      left: 8px; }\n    .bestseller-badge .star.right {\n      right: 14px; }\n  .bestseller-badge.in-detailed {\n    box-shadow: 0 2px 7px transparent;\n    width: 20px;\n    height: 20px;\n    padding: 0;\n    top: 9px;\n    right: -80%;\n    background-color: #5D4EF0; }\n    .bestseller-badge.in-detailed .right, .bestseller-badge.in-detailed .txt {\n      opacity: 0; }\n    .bestseller-badge.in-detailed .left {\n      left: 5px;\n      top: 2px; }\n\n.sad-face {\n  border-radius: 50%;\n  background-color: #aaaaaa;\n  height: 90px;\n  width: 90px; }\n\n.category-name {\n  display: inline-block;\n  margin-right: 10px; }\n\n.star:before {\n  content: \"\\2605\";\n  position: absolute;\n  color: white; }\n\n/** Media queries **/\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .detail-view.active .bg {\n    -webkit-transform: translateY(0);\n    transform: translateY(0); }\n  .hide-detail-btn {\n    height: 32px;\n    -webkit-transform: translateY(32px);\n    transform: translateY(32px); }\n  .wrapper {\n    margin-bottom: -22px; }\n  .img-wrapper {\n    height: 123px; }\n  .detail-view .bg {\n    width: 100%;\n    height: 100%;\n    border-radius: 0;\n    left: 0;\n    bottom: 0;\n    -webkit-transform: translateY(100%);\n    transform: translateY(100%); }\n  .detail-view .info-wrapper {\n    padding: 10px 25px;\n    height: 78%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_product_model__ = __webpack_require__("../../../../../client/app/components/items/shared/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
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





var ProductThumbnailComponent = (function () {
    function ProductThumbnailComponent(cartService, appService, toast) {
        this.cartService = cartService;
        this.appService = appService;
        this.toast = toast;
        this.rupeeSymbol = 'Rs.';
    }
    ProductThumbnailComponent.prototype.ngOnInit = function () {
        this.detailViewActive = false;
        this.rupeeSymbol = this.appService.currentUser.toUseForRupeeSymbol.hindiRupees;
    };
    ProductThumbnailComponent.prototype.onProductClick = function () {
        this.detailViewActive = !this.detailViewActive;
    };
    ProductThumbnailComponent.prototype.onAddToCart = function () {
        this.cartService.addProductToCart(this.product);
        this.toast.setMessage('Added! ' + this.product.name, 'success');
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
        template: __webpack_require__("../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/product-thumbnail/product-thumbnail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__cart_service__["a" /* CartService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _d || Object])
], ProductThumbnailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product-thumbnail.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  holi\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/components/items/product/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/product/product.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/items/product/product.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/product/product.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/items/shared/product.model.ts":
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

/***/ "../../../../../client/app/components/items/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"card-stats\" class=\"seaction\">\t\n\t<div class=\"row\">\n\t\t<input type=\"text\" [(ngModel)]=\"filter.name\"/>\n\t\t<div class=\"col s12 m6 l3\" *ngFor = 'let product of products| bookfilter:filter'>\n\t\t\t<product-thumbnail [product]='product'></product-thumbnail>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/items/showcase/showcase.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "product-thumbnail {\n  padding-left: 10px;\n  padding-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/items/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
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
    function ShowcaseComponent(cartService, appService) {
        this.cartService = cartService;
        this.appService = appService;
        this.filter = {
            name: ''
        };
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
        template: __webpack_require__("../../../../../client/app/components/items/showcase/showcase.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/items/showcase/showcase.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cart_service__["a" /* CartService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object])
], ShowcaseComponent);

var _a, _b;
//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  location works!\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/components/location/location.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/location/location.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/location/location.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LocationComponent);

//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"page-topbar\">\n    <div class=\"navbar-fixed\">\n        <nav class=\"cyan\">\n            <div class=\"nav-wrapper\">\n                <h1 class=\"logo-wrapper\">\n                    <a class=\"brand-logo darken-1\">\n                        <img src=\"\" alt=\"MFB\">\n                    </a>\n                    <span class=\"logo-text\">Materialize</span></h1>\n                <cart></cart>\n            </div>\n        </nav>\n    </div>\n</header>\n\n<!-- <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">Auth0 - Angular</a>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        routerLink=\"/\">\n          Home\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated()\"\n        routerLink=\"/profile\">\n          Profile\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated() && auth.userHasScopes(['write:messages'])\"\n        routerLink=\"/admin\">\n          Admin Area\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"!auth.isAuthenticated()\"\n        (click)=\"auth.login()\">\n          Log In\n      </button>\n\n      <button\n        class=\"btn btn-primary btn-margin\"\n        *ngIf=\"auth.isAuthenticated()\"\n        (click)=\"auth.logout()\">\n          Log Out\n      </button>\n\n    </div>\n  </div>\n</nav> -->\n"

/***/ }),

/***/ "../../../../../client/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AppService } from './../app.service';
var NavbarComponent = (function () {
    function NavbarComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.showCart = false;
        this.searchParams = '';
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
        template: __webpack_require__("../../../../../client/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <h4 class=\"card-header\">404 Not Found</h4>\n  <div class=\"card-block\">\n    <p>The page you requested was not found.</p>\n    <p>Go to <a routerLink=\"/\">Homepage</a>.</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/not-found/not-found.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/not-found/not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], NotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/order-success/order-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Thanks For buying fresh fruits and Vegetables.\n</p>\n"

/***/ }),

/***/ "../../../../../client/app/components/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
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

var OrderSuccessComponent = (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    return OrderSuccessComponent;
}());
OrderSuccessComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-success',
        template: __webpack_require__("../../../../../client/app/components/order-success/order-success.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/order-success/order-success.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderSuccessComponent);

//# sourceMappingURL=order-success.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/orders/orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<button class=\"btn btn-sm btn-warning\" [disabled]=\"!showLocationButton\" (click)=\"getLocationData()\">Use My Current Location</button>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">Current Addresses ({{addresses.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Select Address to use</th>\n          <th>Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"addresses.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no addresses in the DB. Add a new address below.</td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let address of addresses\">\n          <td *ngIf=\"address._id\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"address\" [value]=\"address.name\" [(ngModel)]=\"addressSelected\">              \n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              NA\n            </div>\n          </td>\n          <td>{{address.name}}</td>\n          <td *ngIf=\"address._id\">\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n          <td *ngIf=\"!address._id\">\n            <div *ngIf=\"isAddressValidInDistance\">\n              <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(address)\"><i class=\"fa fa-pencil\"></i> Edit</button>\n              <button class=\"btn btn-sm btn-danger\" (click)=\"deleteAddress(address)\"><i class=\"fa fa-trash\"></i> Delete</button>\n            </div>\n            <div *ngIf=\"!isAddressValidInDistance\">\n              <div>Address not in range of Delivery which is ({{appService.shopDetails.validDistanceAllowedInKm}}Km)</div>\n            </div>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editAddress(address)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                  <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"address.name\" placeholder=\"Name\" required>\n              </div>\n               <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new address</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addAddressForm\" (ngSubmit)=\"addAddress()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addAddressForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../client/app/components/orders/orders.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/orders/orders.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/orders/orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_address_service__["a" /* AddressService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_orders_service__["a" /* OrderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_orders_service__["a" /* OrderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_service__["a" /* AppService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _g || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/payment-checkout/payment-checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/payment-checkout/payment-checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <iframe src=\"https://test.payu.in/_payment\"></iframe> -->\n<div class=\"jumbotron text-center\">\n    <h1>Payumoney Payment Gateway</h1>\n    <h3> Rs {{amount}}</h3>\n    <form id=\"paymentForm\" action='https://test.payu.in/_payment' method='post'>\n        <input type=\"hidden\" name=\"key\" value=\"{{mkey}}\" />\n        <input type=\"hidden\" name=\"txnid\" value=\"{{txnid}}\" />\n        <input type=\"hidden\" name=\"amount\" value=\"{{amount}}\" />\n        <input type=\"hidden\" name=\"productinfo\" value=\"{{productInfo}}\" />\n        <input type=\"hidden\" name=\"firstname\" value=\"{{firstName}}\" />\n        <input type=\"hidden\" name=\"udf1\" value={{id}} />\n        <input type=\"hidden\" name=\"email\" value=\"{{email}}\" />\n        <input type=\"hidden\" name=\"phone\" value=\"{{phone}}\" />\n        <input type=\"hidden\" name=\"lastname\" value=\"{{lastName}}\" />\n        <input type=\"hidden\" name=\"surl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"furl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"hash\" id=\"hash\" value=\"{{hash}}\">\n        <div class=\"pay-now-button-outer\">\n            <button class=\"btn btn-primary fontBold\" (click)=\"presubmit()\" type=\"button\">PAY NOW</button>\n        </div>\n    </form>\n</div>\n\n<!-- <iframe width=\"100%\" height=\"300\" [src]=\"url | safe\"></iframe> -->\n\n<!-- <button (click)=\"doSth()\">Do sth</button>\n<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe [srcdoc]=\"pageTest\"></iframe>\n</div>\n -->\n"

/***/ }),

/***/ "../../../../../client/app/components/payment-checkout/payment-checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SafePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentCheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object])
], SafePipe);

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
        this.surl = "http://localhost:4200/api/PaymentStatus";
        this.hash = '';
        this.isLoading = false;
        this.pageTest = "<div class=\"jumbotron text-center\">\n    <h1>Payumoney Payment Gateway</h1>\n    <h3> Rs {{amount}}</h3>\n    <form id=\"paymentForm\" action='https://test.payu.in/_payment' method='post'>\n        <input type=\"hidden\" name=\"key\" value=\"{{mkey}}\" />\n        <input type=\"hidden\" name=\"txnid\" value=\"{{txnid}}\" />\n        <input type=\"hidden\" name=\"amount\" value=\"{{amount}}\" />\n        <input type=\"hidden\" name=\"productinfo\" value=\"{{productInfo}}\" />\n        <input type=\"hidden\" name=\"firstname\" value=\"{{firstName}}\" />\n        <input type=\"hidden\" name=\"udf1\" value={{id}} />\n        <input type=\"hidden\" name=\"email\" value=\"{{email}}\" />\n        <input type=\"hidden\" name=\"phone\" value=\"{{phone}}\" />\n        <input type=\"hidden\" name=\"lastname\" value=\"{{lastName}}\" />\n        <input type=\"hidden\" name=\"surl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"furl\" value=\"{{surl}}\" />\n        <input type=\"hidden\" name=\"hash\" id=\"hash\" value=\"{{hash}}\">\n        <div class=\"pay-now-button-outer\">\n            <button class=\"btn btn-primary fontBold\" (click)=\"presubmit()\" type=\"button\">PAY NOW</button>\n        </div>\n    </form>\n</div>";
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
                $('#paymentForm').submit();
            }
        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    return PaymentCheckoutComponent;
}());
PaymentCheckoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment-checkout',
        template: __webpack_require__("../../../../../client/app/components/payment-checkout/payment-checkout.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/payment-checkout/payment-checkout.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _b || Object])
], PaymentCheckoutComponent);

var _a, _b;
//# sourceMappingURL=payment-checkout.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-area img {\n  max-width: 150px;\n  margin-bottom: 20px;\n}\n\n.panel-body h3 {\n  margin-top: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default profile-area\">\n  <div class=\"panel-heading\"><h3>Profile</h3></div>\n  <div class=\"panel-body\">\n    <img src=\"{{profile?.picture}}\" class=\"avatar\" alt=\"avatar\">\n    <div>\n      <label><i class=\"glyphicon glyphicon-user\"></i> Nickname</label>\n      <h3 class=\"nickname\">{{ profile?.nickname }}</h3>\n    </div>\n    <div>\n      <label><i class=\"glyphicon glyphicon-envelope\"></i> Email</label>\n      <h3 class=\"email\">{{ profile?.email }}</h3>\n    </div>\n    <pre class=\"full-profile\">{{ profile | json }}</pre>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
        }
        else {
            this.auth.getProfile(function (err, profile) {
                _this.profile = profile;
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../client/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileComponent);

var _a;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/right-side-nav/right-side-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/right-side-nav/right-side-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"right-sidebar-nav\">\n    <ul id=\"chat-out\" class=\"side-nav rightside-navigation\">\n        <li class=\"li-hover\">\n        <a href=\"#\" data-activates=\"chat-out\" class=\"chat-close-collapse right\"><i class=\"mdi-navigation-close\"></i></a>\n        <div id=\"right-search\" class=\"row\">\n            <form class=\"col s12\">\n                <div class=\"input-field\">\n                    <i class=\"mdi-action-search prefix\"></i>\n                    <input id=\"icon_prefix\" type=\"text\" class=\"validate\">\n                    <label for=\"icon_prefix\">Search</label>\n                </div>\n            </form>\n        </div>\n        </li>\n        <li class=\"li-hover\">\n            <ul class=\"chat-collapsible\" data-collapsible=\"expandable\">\n            <li>\n                <div class=\"collapsible-header teal white-text active\"><i class=\"mdi-social-whatshot\"></i>Recent Activity</div>\n                <div class=\"collapsible-body recent-activity\">\n                    <div class=\"recent-activity-list chat-out-list row\">\n                        <div class=\"col s3 recent-activity-list-icon\"><i class=\"mdi-action-add-shopping-cart\"></i>\n                        </div>\n                        <div class=\"col s9 recent-activity-list-text\">\n                            <a href=\"#\">just now</a>\n                            <p>Jim Doe Purchased new equipments for zonal office.</p>\n                        </div>\n                    </div>\n                    <div class=\"recent-activity-list chat-out-list row\">\n                        <div class=\"col s3 recent-activity-list-icon\"><i class=\"mdi-device-airplanemode-on\"></i>\n                        </div>\n                        <div class=\"col s9 recent-activity-list-text\">\n                            <a href=\"#\">Yesterday</a>\n                            <p>Your Next flight for USA will be on 15th August 2015.</p>\n                        </div>\n                    </div>\n                    <div class=\"recent-activity-list chat-out-list row\">\n                        <div class=\"col s3 recent-activity-list-icon\"><i class=\"mdi-action-settings-voice\"></i>\n                        </div>\n                        <div class=\"col s9 recent-activity-list-text\">\n                            <a href=\"#\">5 Days Ago</a>\n                            <p>Natalya Parker Send you a voice mail for next conference.</p>\n                        </div>\n                    </div>\n                    <div class=\"recent-activity-list chat-out-list row\">\n                        <div class=\"col s3 recent-activity-list-icon\"><i class=\"mdi-action-store\"></i>\n                        </div>\n                        <div class=\"col s9 recent-activity-list-text\">\n                            <a href=\"#\">Last Week</a>\n                            <p>Jessy Jay open a new store at S.G Road.</p>\n                        </div>\n                    </div>\n                    <div class=\"recent-activity-list chat-out-list row\">\n                        <div class=\"col s3 recent-activity-list-icon\"><i class=\"mdi-action-settings-voice\"></i>\n                        </div>\n                        <div class=\"col s9 recent-activity-list-text\">\n                            <a href=\"#\">5 Days Ago</a>\n                            <p>Natalya Parker Send you a voice mail for next conference.</p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"collapsible-header light-blue white-text active\"><i class=\"mdi-editor-attach-money\"></i>Sales Repoart</div>\n                <div class=\"collapsible-body sales-repoart\">\n                    <div class=\"sales-repoart-list  chat-out-list row\">\n                        <div class=\"col s8\">Target Salse</div>\n                        <div class=\"col s4\"><span id=\"sales-line-1\"></span>\n                        </div>\n                    </div>\n                    <div class=\"sales-repoart-list chat-out-list row\">\n                        <div class=\"col s8\">Payment Due</div>\n                        <div class=\"col s4\"><span id=\"sales-bar-1\"></span>\n                        </div>\n                    </div>\n                    <div class=\"sales-repoart-list chat-out-list row\">\n                        <div class=\"col s8\">Total Delivery</div>\n                        <div class=\"col s4\"><span id=\"sales-line-2\"></span>\n                        </div>\n                    </div>\n                    <div class=\"sales-repoart-list chat-out-list row\">\n                        <div class=\"col s8\">Total Progress</div>\n                        <div class=\"col s4\"><span id=\"sales-bar-2\"></span>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            <li>\n                <div class=\"collapsible-header red white-text\"><i class=\"mdi-action-stars\"></i>Favorite Associates</div>\n                <div class=\"collapsible-body favorite-associates\">\n                    <div class=\"favorite-associate-list chat-out-list row\">\n                        <div class=\"col s4\"><img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img online-user valign profile-image\">\n                        </div>\n                        <div class=\"col s8\">\n                            <p>Eileen Sideways</p>\n                            <p class=\"place\">Los Angeles, CA</p>\n                        </div>\n                    </div>\n                    <div class=\"favorite-associate-list chat-out-list row\">\n                        <div class=\"col s4\"><img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img online-user valign profile-image\">\n                        </div>\n                        <div class=\"col s8\">\n                            <p>Zaham Sindil</p>\n                            <p class=\"place\">San Francisco, CA</p>\n                        </div>\n                    </div>\n                    <div class=\"favorite-associate-list chat-out-list row\">\n                        <div class=\"col s4\"><img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img offline-user valign profile-image\">\n                        </div>\n                        <div class=\"col s8\">\n                            <p>Renov Leongal</p>\n                            <p class=\"place\">Cebu City, Philippines</p>\n                        </div>\n                    </div>\n                    <div class=\"favorite-associate-list chat-out-list row\">\n                        <div class=\"col s4\"><img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img online-user valign profile-image\">\n                        </div>\n                        <div class=\"col s8\">\n                            <p>Weno Carasbong</p>\n                            <p>Tokyo, Japan</p>\n                        </div>\n                    </div>\n                    <div class=\"favorite-associate-list chat-out-list row\">\n                        <div class=\"col s4\"><img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img offline-user valign profile-image\">\n                        </div>\n                        <div class=\"col s8\">\n                            <p>Nusja Nawancali</p>\n                            <p class=\"place\">Bangkok, Thailand</p>\n                        </div>\n                    </div>\n                </div>\n            </li>\n            </ul>\n        </li>\n    </ul>\n</aside>"

/***/ }),

/***/ "../../../../../client/app/components/right-side-nav/right-side-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSideNavComponent; });
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

var RightSideNavComponent = (function () {
    function RightSideNavComponent() {
    }
    RightSideNavComponent.prototype.ngOnInit = function () {
    };
    return RightSideNavComponent;
}());
RightSideNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-right-side-nav',
        template: __webpack_require__("../../../../../client/app/components/right-side-nav/right-side-nav.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/right-side-nav/right-side-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RightSideNavComponent);

//# sourceMappingURL=right-side-nav.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sideNaveClose_{\n\t/*left: -240px;*/\n    position: fixed;\n}\n\n.sideNaveOpen_{\n\tleft: 0;\n    position: fixed;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<aside id=\"left-sidebar-nav\">\n    <ul id=\"slide-out\" class=\"side-nav fixed leftside-navigation sideNaveClose_\">\n        <li class=\"user-details cyan darken-2\">\n            <div class=\"row\">\n                <div class=\"col col s4 m4 l4\">\n                    <img src=\"/assets/images/avatar.jpg\" alt=\"\" class=\"circle responsive-img valign profile-image\">\n                </div>\n                <div class=\"col col s8 m8 l8\">\n                    <ul id=\"profile-dropdown\" class=\"dropdown-content\">\n                        <li><a (click)=\"processSideBar()\" routerLink=\"/account\" *ngIf=\"auth.isAuthenticated()\"><i class=\"mdi-hardware-keyboard-tab\"></i>Settings</a>\n                        </li>\n                        <li><a *ngIf=\"auth.isAuthenticated()\" (click)=\"auth.logout()\"><i class=\"mdi-hardware-keyboard-tab\"></i> Logout</a>\n                        </li>\n                        <li><a *ngIf=\"!auth.isAuthenticated()\" (click)=\"auth.login()\"><i class=\"mdi-hardware-keyboard-tab\"></i> Login</a>\n                        </li>\n                    </ul>\n                    <a class=\"btn-flat dropdown-button waves-effect waves-light white-text profile-btn\" href=\"#\" data-activates=\"profile-dropdown\">John Doe<i class=\"mdi-navigation-arrow-drop-down right\"></i></a>\n                    <p class=\"user-roal\">Administrator</p>\n                </div>\n            </div>\n        </li>\n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" routerLink=\"/items\" routerLinkActive=\"active\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> Items</a>\n        </li>\n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" *ngIf=\"auth.isAuthenticated() && auth.userHasScopes(['write:messages'])\" routerLink=\"/admin\" routerLinkActive=\"active\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> Admin</a>\n        </li>\n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" routerLink=\"/addresses\" routerLinkActive=\"active\" *ngIf=\"auth.isAuthenticated()\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> Addresses</a>\n        </li>\n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" routerLink=\"/user-orders\" routerLinkActive=\"active\" *ngIf=\"auth.isAuthenticated()\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> User Orders</a>\n        </li>\n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" routerLink=\"/register\" *ngIf=\"!auth.isAuthenticated()\" routerLinkActive=\"active\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> Register</a>\n        </li>\n        \n        <li class=\"bold\">\n            <a (click)=\"processSideBar()\" routerLink=\"/orders\" *ngIf=\"!auth.isAuthenticated()\" routerLinkActive=\"active\" class=\"waves-effect waves-cyan\"><i class=\"mdi-action-dashboard\"></i> Orders</a>\n        </li>\n    </ul>\n    <a (click)=\"processSideBar($event)\" data-activates=\"slide-out\" class=\"sideNaveClose sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only darken-2\"><i class=\"mdi-navigation-menu\" ></i></a>\n</aside>"

/***/ }),

/***/ "../../../../../client/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
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



var SidenavComponent = (function () {
    function SidenavComponent(auth, el, router) {
        this.auth = auth;
        this.el = el;
        this.router = router;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.openCart = function (event) {
    };
    SidenavComponent.prototype.goTo = function (route, event) {
        this.router.navigate(route);
    };
    SidenavComponent.prototype.processSideBar = function () {
        if ($('.sidebar-collapse').hasClass('sideNaveClose')) {
            $('.sidebar-collapse').addClass("sideNaveOpen");
            $('.side-nav').addClass("sideNaveOpen_");
            $('.sidebar-collapse').removeClass("sideNaveClose");
            $('.side-nav').removeClass("sideNaveClose_");
        }
        else {
            $('.sidebar-collapse').addClass("sideNaveClose");
            $('.side-nav').addClass("sideNaveClose_");
            $('.sidebar-collapse').removeClass("sideNaveOpen");
            $('.side-nav').removeClass("sideNaveOpen_");
        }
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidenav',
        template: __webpack_require__("../../../../../client/app/components/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/sidenav/sidenav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
], SidenavComponent);

var _a, _b, _c;
//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/tabs/tabs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*@mixin ellipsis(){\n    max-width: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    word-wrap: normal;\n    width: 100%;\n}\n\n@mixin icon-styles(){\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n@mixin transform($transform){\n  -webkit-transform: $transform;\n  -moz-transform: $transform;\n  -ms-transform: $transform;\n  -o-transform: $transform;\n  transform: $transform;\n}\n\n@media screen and (max-width: 479px) {\n  .nav-tabs-responsive {\n    > li {\n      display: none;\n      width: 23%;\n      > a {\n        @include ellipsis();\n        width: 100%;\n        text-align: center;\n        vertical-align: top;\n      }\n      &.active {\n        width: 54%;\n        &:first-child {\n          margin-left: 23%;\n        }\n      }\n      &.active,\n      &.prev,\n      &.next {\n        display: block;\n      }\n      &.prev,\n      &.next {\n        -webkit-transform: scale(0.9);\n        transform: scale(0.9);\n      }\n      &.next > a,\n      &.prev > a {\n        -webkit-transition: none;\n        transition: none;\n        .text {\n          display: none;\n        }\n        &:after,\n        &:after {\n          @include icon-styles();\n        }\n      }\n      &.prev > a:after {\n        content: \"\\e079\";\n      }\n      &.next > a:after {\n        content: \"\\e080\";\n      }\n      &.dropdown {\n        > a > .caret {\n          display: none;\n        }\n        > a:after {\n          content: \"\\e114\";\n        }\n        &.active > a {\n          &:after {\n            display: none;\n          }\n          > .caret {\n            display: inline-block;\n          }\n        }\n\n        .dropdown-menu {\n          &.pull-xs-left {\n            left: 0;\n            right: auto;\n          }\n          &.pull-xs-center {\n            right: auto;\n            left: 50%;\n            @include transform(translateX(-50%));\n          }\n          &.pull-xs-right {\n            left: auto;\n            right: 0;\n          }\n        }\n      }\n    }\n  }\n}\n*/\n\n.affix {\n      top: 0;\n      width: 100%;\n      z-index: 9999 !important;\n  }\n\n  .affix + .container-fluid {\n      padding-top: 70px;\n  }\n\n\n/**\n * Demo Styles\n */\n\n/*.wrapper {\n  padding: 15px 0;\n}\n\n.bs-example-tabs .nav-tabs {\n  margin-bottom: 15px;\n}\n\n@media (max-width: 300px) {\n  #narrow-browser-alert {\n    display: none;\n  }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li [ngClass]=\"{'active': (appService.selectedTab=='exotic-vegetables')}\" (click)=\"openTab($event, 'exotic-vegetables')\"><a>Exotic Vegetables</a></li>\n    <li [ngClass]=\"{'active': (appService.selectedTab=='leafy-green-vegetables')}\" (click)=\"openTab($event, 'leafy-green-vegetables')\"><a>Leafy Vegetables</a></li>\n    <li [ngClass]=\"{'active': (appService.selectedTab=='fresh-fruits')}\" (click)=\"openTab($event, 'fresh-fruits')\"><a>Fresh Fruits</a></li>\n    <li [ngClass]=\"{'active': (appService.selectedTab=='fresh-vegetables')}\" (click)=\"openTab($event, 'fresh-vegetables')\"><a>Fresh Vegetables</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "../../../../../client/app/components/tabs/tabs.component.ts":
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
        template: __webpack_require__("../../../../../client/app/components/tabs/tabs.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/tabs/tabs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _b || Object])
], TabsComponent);

var _a, _b;
//# sourceMappingURL=tabs.component.js.map

/***/ }),

/***/ "../../../../../client/app/components/user-orders/user-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading [condition]=\"isLoading\"></app-loading>\n\n<app-toast [message]=\"toast.message\"></app-toast>\n\n<div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">My Previous Orders ({{userOrders.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Order Time</th>\n          <th>Status</th>\n          <th>Mode Of Payment</th>\n          <th>Cart Total</th>\n          <th>Repeat Order</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"userOrders.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no userOrders in the DB.</td>\n        </tr>\n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let order of userOrders\">\n          <td>{{order.orderDetails.orderTime | date: 'dd/MM/yyyy'}}</td>\n          <td>{{order.orderDetails.orderStatus}}</td>\n          <td>{{order.orderDetails.modeOfPayment}}</td>\n          <td>{{order.cartDetails.cartTotal}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-primary\" (click)=\"repeatOrder(order)\"><i class=\"fa fa-pencil\"></i> Repeat Order</button>\n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(order)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n    </table>\n  </div>\n</div>\n\n<!-- <div class=\"card\" *ngIf=\"!isLoading\">\n  <h4 class=\"card-header\">My Orders ({{cats.length}})</h4>\n  <div class=\"card-block\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-default\">\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n          <th>Weight</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"cats.length === 0\">\n        <tr>\n          <td colspan=\"4\">There are no cats in the DB. Add a new cat below.</td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"!isEditing\">\n        <tr *ngFor=\"let cat of cats\">\n          <td>{{cat.name}}</td>\n          <td>{{cat.age}}</td>\n          <td>{{cat.weight}}</td>\n          <td>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"enableEditing(cat)\"><i class=\"fa fa-pencil\"></i> Edit</button> \n            <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCat(cat)\"><i class=\"fa fa-trash\"></i> Delete</button>\n          </td>\n        </tr>  \n      </tbody>\n      <tbody *ngIf=\"isEditing\">\n        <tr>\n          <td colspan=\"4\">\n            <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"editCat(cat)\" style=\"display:inline\">\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" name=\"name\" [(ngModel)]=\"cat.name\" placeholder=\"Name\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"age\" [(ngModel)]=\"cat.age\" placeholder=\"Age\" min=\"0\" required>\n              </div>\n              <div class=\"form-group\">\n                <input class=\"form-control\" type=\"number\" name=\"weight\" [(ngModel)]=\"cat.weight\" placeholder=\"Weight\" step=\"any\" min=\"0\" required>\n              </div>\n              <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"!form.form.valid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n            </form>\n            <button class=\"btn btn-sm btn-warning\" (click)=\"cancelEditing()\"><i class=\"fa fa-times\"></i> Cancel</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div> -->\n\n<!-- <div class=\"card\" *ngIf=\"!isEditing\">\n  <h4 class=\"card-header\">Add new cat</h4>\n  <div class=\"card-block\">\n    <form class=\"form-inline\" [formGroup]=\"addCatForm\" (ngSubmit)=\"addCat()\" style=\"text-align:center\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"age\" formControlName=\"age\" placeholder=\"Age\" min=\"0\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"number\" name=\"weight\" formControlName=\"weight\" placeholder=\"Weight\" step=\"any\" min=\"0\">\n      </div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!addCatForm.valid\"><i class=\"fa fa-floppy-o\"></i> Add</button>\n    </form>\n  </div>\n</div> -->"

/***/ }),

/***/ "../../../../../client/app/components/user-orders/user-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table td, .table th {\n  text-align: center;\n  width: 25%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client/app/components/user-orders/user-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_orders_service__ = __webpack_require__("../../../../../client/app/services/user-orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__ = __webpack_require__("../../../../../client/app/shared/toast/toast.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__items_cart_service__ = __webpack_require__("../../../../../client/app/components/items/cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__("../../../../../client/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../client/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("../../../../../client/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserOrdersComponent = (function () {
    function UserOrdersComponent(userOrdersService, formBuilder, toast, router, cartService, auth, appService, userService) {
        this.userOrdersService = userOrdersService;
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.router = router;
        this.cartService = cartService;
        this.auth = auth;
        this.appService = appService;
        this.userService = userService;
        this.isLoading = false;
        this.isEditing = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.age = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.weight = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        this.userOrders = [];
        this.userOrder = {};
    }
    UserOrdersComponent.prototype.ngOnInit = function () {
        this.getUserOrders();
    };
    UserOrdersComponent.prototype.getUserOrders = function () {
        if (this.appService.currentUser.userData.status) {
            this.userOrders = this.appService.currentUser.userData.data['orders'];
        }
        else {
            this.isLoading = true;
            debugger;
            // this.userService.getUser(this.auth.currentUser).subscribe(
            //   data => {
            //     this.userOrders = data['orders'];
            //     this.appService.currentUser.userData = {
            //       status: true,
            //       data: data
            //     };
            //     this.isLoading = false;
            //   },
            //   error => console.log(error),
            //   () => {
            //     this.isLoading = false;
            //   }
            // );
        }
    };
    UserOrdersComponent.prototype.repeatOrder = function (order) {
        this.cartService.flushCart();
        this.cartService.addProductsToCart(order.cartDetails.items);
        this.router.navigate(['/addresses']);
    };
    return UserOrdersComponent;
}());
UserOrdersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-orders',
        template: __webpack_require__("../../../../../client/app/components/user-orders/user-orders.component.html"),
        styles: [__webpack_require__("../../../../../client/app/components/user-orders/user-orders.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_orders_service__["a" /* UserOrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_orders_service__["a" /* UserOrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_toast_toast_component__["a" /* ToastComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__items_cart_service__["a" /* CartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__items_cart_service__["a" /* CartService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a" /* AuthService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* AppService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === "function" && _h || Object])
], UserOrdersComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=user-orders.component.js.map

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

/***/ "../../../../../client/app/services/local-storage.service.ts":
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
    LocalStorageService.prototype.clearLocalStorageItem = function () {
        localStorage.removeItem(this.nameForLocalStorage);
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

/***/ "../../../../../client/app/services/user-orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserOrdersService; });
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



var UserOrdersService = (function () {
    function UserOrdersService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: this.headers });
    }
    UserOrdersService.prototype.getUserOrders = function () {
        return this.http.get('/api/user-orders').map(function (res) { return res.json(); });
    };
    UserOrdersService.prototype.countUserOrders = function () {
        return this.http.get('/api/user-orders/count').map(function (res) { return res.json(); });
    };
    UserOrdersService.prototype.addUserOrder = function (userOrder) {
        return this.http.post('/api/user-orders', JSON.stringify(userOrder), this.options);
    };
    UserOrdersService.prototype.getUserOrder = function (userOrder) {
        return this.http.get("/api/user-orders/" + userOrder._id).map(function (res) { return res.json(); });
    };
    UserOrdersService.prototype.editUserOrder = function (userOrder) {
        return this.http.put("/api/user-orders/" + userOrder._id, JSON.stringify(userOrder), this.options);
    };
    UserOrdersService.prototype.deleteUserOrder = function (userOrder) {
        return this.http.delete("/api/user-orders/" + userOrder._id, this.options);
    };
    return UserOrdersService;
}());
UserOrdersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UserOrdersService);

var _a;
//# sourceMappingURL=user-orders.service.js.map

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
        debugger;
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

module.exports = "<!-- <div class=\"cssload-loader\" *ngIf=\"condition\">\n\t<div class=\"cssload-inner cssload-one\"></div>\n\t<div class=\"cssload-inner cssload-two\"></div>\n\t<div class=\"cssload-inner cssload-three\"></div>\n</div>\n -->\n<div id=\"loader-wrapper\" *ngIf=\"condition\">\n    <div id=\"loader\"></div>        \n    <div class=\"loader-section section-left\"></div>\n    <div class=\"loader-section section-right\"></div>\n</div>"

/***/ }),

/***/ "../../../../../client/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cssload-loader {\n  position: fixed;\n  top: 50%;\n  left: calc(50% - 31px);\n  width: 62px;\n  height: 62px;\n  margin: 0px auto;\n  -webkit-animation: rotation .6s infinite linear;\n  animation: rotation .6s infinite linear;\n  border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  -webkit-perspective: 780px;\n          perspective: 780px; }\n\n.cssload-inner {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  border-radius: 50%;\n  -o-border-radius: 50%;\n  -ms-border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%; }\n\n.cssload-inner.cssload-one {\n  left: 0%;\n  top: 0%;\n  animation: cssload-rotate-one 1.15s linear infinite;\n  -o-animation: cssload-rotate-one 1.15s linear infinite;\n  -ms-animation: cssload-rotate-one 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-one 1.15s linear infinite;\n  -moz-animation: cssload-rotate-one 1.15s linear infinite;\n  border-bottom: 3px solid red; }\n\n.cssload-inner.cssload-two {\n  right: 0%;\n  top: 0%;\n  animation: cssload-rotate-two 1.15s linear infinite;\n  -o-animation: cssload-rotate-two 1.15s linear infinite;\n  -ms-animation: cssload-rotate-two 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-two 1.15s linear infinite;\n  -moz-animation: cssload-rotate-two 1.15s linear infinite;\n  border-right: 3px solid #ffb700; }\n\n.cssload-inner.cssload-three {\n  right: 0%;\n  bottom: 0%;\n  animation: cssload-rotate-three 1.15s linear infinite;\n  -o-animation: cssload-rotate-three 1.15s linear infinite;\n  -ms-animation: cssload-rotate-three 1.15s linear infinite;\n  -webkit-animation: cssload-rotate-three 1.15s linear infinite;\n  -moz-animation: cssload-rotate-three 1.15s linear infinite;\n  border-top: 3px solid #4bbf07; }\n\n@keyframes cssload-rotate-one {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }\n\n@-webkit-keyframes cssload-rotate-one {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg); } }\n\n@keyframes cssload-rotate-two {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);\n            transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }\n\n@-webkit-keyframes cssload-rotate-two {\n  0% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg); } }\n\n@keyframes cssload-rotate-three {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);\n            transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }\n\n@-webkit-keyframes cssload-rotate-three {\n  0% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg); }\n  100% {\n    -webkit-transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg); } }\n", ""]);

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

/***/ "../../../../../client/app/shared/my-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        var _this = this;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return _this.applyFilter(item, filter); });
    };
    /**
     * Perform the filtering.
     *
     * @param {Book} book The book to compare to the filter.
     * @param {Book} filter The filter to apply.
     * @return {boolean} True if book satisfies filters, false if not.
     */
    FilterPipe.prototype.applyFilter = function (book, filter) {
        for (var field in filter) {
            if (filter[field]) {
                if (typeof filter[field] === 'string') {
                    if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
                        return false;
                    }
                }
                else if (typeof filter[field] === 'number') {
                    if (book[field] !== filter[field]) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'bookfilter',
        pure: false
    })
], FilterPipe);

//# sourceMappingURL=my-filter.pipe.js.map

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
        window['growlMessages'](this.message.body);
        setTimeout(function () {
            _this.message.body = '';
        }, time);
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