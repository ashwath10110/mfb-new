webpackJsonp([0],{

/***/ "../../../../../src/app/admin/address/address.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mw350{\r\n    min-width: 250px;\r\n    max-width: 350px;\r\n}\r\n.pointer{\r\n    cursor: pointer;\r\n}\r\n.description{\r\n    margin-bottom: 10px;\r\n}\r\nmd-card{\r\n    margin: 2%;\r\n}\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <h2><span class=\"mute\">My Account</span> > My Address</h2>\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Search address\" #f [disabled]=\"!addresses || addresses.length===0\">\r\n  </md-input-container>\r\n  <button md-raised-button class=\"fb\" (click)=\"switch({})\">\r\n      <i class=\"material-icons\">add</i>\r\n      <span>Add New Address</span>\r\n  </button>\r\n</div>\r\n<div [ngBusy]=\"busy\"></div>\r\n<div *ngIf=\"showAddressForm\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n  <form [formGroup]=\"myForm\" autocomplete=\"false\" novalidate (ngSubmit)=\"save(myForm.value)\">\r\n    <md-card class=\"row mw350\">\r\n      <md-toolbar class=\"mat-accent\">\r\n        <h3 *ngIf=\"!newAddressForm\">Address {{address.name}}</h3>\r\n        <h3 *ngIf=\"newAddressForm\">New Address</h3>\r\n        <button md-button md-icon-button (click)=\"close()\" class=\"close\"><md-icon>close</md-icon></button>\r\n      </md-toolbar>\r\n      <md-card-content>\r\n        <edit [item]=\"address\" [fields]=\"fields\" api=\"addresses\" (save)=\"save($event)\"></edit>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n      </md-card-actions>\r\n    </md-card>\r\n  </form>\r\n</div>\r\n<div *ngIf=\"!showAddressForm\" fxLayout=\"row\" fxLayoutAlign=\"center start\" fxLayoutWrap>\r\n  <md-card *ngFor=\"let address of addresses | searchpipe:f.value; let i=index\" class=\"mw350\">\r\n    <md-toolbar class=\"mat-accent\">\r\n      <h3>Address {{i + 1}}</h3>\r\n      <button md-button md-icon-button class=\"close\" (click)=\"delete(address)\"><md-icon>close</md-icon></button>\r\n    </md-toolbar>\r\n    <md-card-content (click)=\"switch(address)\">\r\n      <md-list>\r\n        <md-list-item md-line>{{address.name}}</md-list-item><br/>\r\n        <md-list-item md-line>{{address.address}}</md-list-item><br/>\r\n        <md-list-item md-line>{{address.city}}</md-list-item><br/>\r\n        <md-list-item md-line>{{address.zip}}</md-list-item><br/>\r\n        <md-list-item md-line>{{address.state}}</md-list-item><br/>\r\n        <md-list-item md-line>{{address.phone}}</md-list-item>\r\n      </md-list>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/address/address.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
    function AddressComponent(crud, snack, _fb, modal) {
        this.crud = crud;
        this.snack = snack;
        this._fb = _fb;
        this.modal = modal;
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            address: this._fb.group({})
        });
        this.getMyAddress();
        this.fields = [
            { field: 'name' },
            { field: 'address' },
            { field: 'city' },
            { field: 'zip', dataType: 'number' },
            { field: 'state' },
            { field: 'phone', dataType: 'number' },
        ];
    };
    AddressComponent.prototype.initAddress = function (a) {
        return this._fb.group({
            name: [a.name],
            address: [a.address],
            city: [a.city],
            zip: [a.zip],
            state: [a.state],
            phone: [a.phone],
        });
    };
    AddressComponent.prototype.addAddress = function (a) {
        var _this = this;
        var control = this.myForm.controls['addresses'];
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
    AddressComponent.prototype.getMyAddress = function () {
        var _this = this;
        this.close();
        this.busy = this.crud.get('addresses/my', null, true).subscribe(function (data) { return _this.addresses = data; }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    AddressComponent.prototype.close = function () {
        this.showAddressForm = false;
    };
    AddressComponent.prototype.switch = function (a) {
        this.newAddressForm = !a.name;
        this.showAddressForm = true;
        this.address = a;
    };
    AddressComponent.prototype.delete = function (item) {
        var _this = this;
        this.modal.confirm('Delete?', 'Are you sure to delete')
            .subscribe(function (res) {
            if (res) {
                _this.crud.delete('addresses', item._id).subscribe(function (data) {
                    _this.loading = false;
                    _this.getMyAddress();
                }, function (err) {
                    _this.snack.open(err, 'OK', { duration: 2000 });
                    _this.loading = false;
                });
            }
        });
    };
    AddressComponent.prototype.save = function (data) {
        var _this = this;
        // data.country = Settings.country.name
        this.loading = true;
        if (data._id) {
            this.crud.patch('addresses', data._id, data, true).subscribe(function (data) {
                _this.loading = false;
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
                _this.loading = false;
            });
        }
        else {
            this.crud.post('addresses', data, true, true).subscribe(function (data) {
                _this.loading = false;
                _this.close();
                _this.getMyAddress();
            }, function (err) {
                _this.snack.open(err, 'OK', { duration: 2000 });
                _this.loading = false;
            });
        }
    };
    return AddressComponent;
}());
AddressComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'shopnx-address',
        template: __webpack_require__("../../../../../src/app/admin/address/address.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/address/address.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], AddressComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=address.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_resolve__ = __webpack_require__("../../../../../src/app/admin/user/user.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_users_guard__ = __webpack_require__("../../../../../src/app/admin/user/users.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/admin/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reviews_review_resolve__ = __webpack_require__("../../../../../src/app/admin/reviews/review.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shipping_shipping_resolve__ = __webpack_require__("../../../../../src/app/admin/shipping/shipping.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__coupons_coupon_resolve__ = __webpack_require__("../../../../../src/app/admin/coupons/coupon.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__features_feature_resolve__ = __webpack_require__("../../../../../src/app/admin/features/feature.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__brands_brand_resolve__ = __webpack_require__("../../../../../src/app/admin/brands/brand.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_products_guard__ = __webpack_require__("../../../../../src/app/admin/product/products.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__features_features_component__ = __webpack_require__("../../../../../src/app/admin/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_features_features_component__ = __webpack_require__("../../../../../src/app/admin/product/features/features.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__order_order_guard__ = __webpack_require__("../../../../../src/app/admin/order/order.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_guard__ = __webpack_require__("../../../../../src/app/admin/product/product.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_product_resolve__ = __webpack_require__("../../../../../src/app/admin/product/product.resolve.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/admin/product/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__product_products_component__ = __webpack_require__("../../../../../src/app/admin/product/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__order_order_component__ = __webpack_require__("../../../../../src/app/admin/order/order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__order_order_detail_component__ = __webpack_require__("../../../../../src/app/admin/order/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_busy__ = __webpack_require__("../../../../angular2-busy/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_busy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_busy__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__media_media_component__ = __webpack_require__("../../../../../src/app/admin/media/media.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__product_variants_variants_component__ = __webpack_require__("../../../../../src/app/admin/product/variants/variants.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__my_orders_my_orders_component__ = __webpack_require__("../../../../../src/app/admin/my-orders/my-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__address_address_component__ = __webpack_require__("../../../../../src/app/admin/address/address.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/admin/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__my_reviews_my_reviews_component__ = __webpack_require__("../../../../../src/app/admin/my-reviews/my-reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__wishlist_wishlist_component__ = __webpack_require__("../../../../../src/app/admin/wishlist/wishlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__brands_brands_component__ = __webpack_require__("../../../../../src/app/admin/brands/brands.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__coupons_coupons_component__ = __webpack_require__("../../../../../src/app/admin/coupons/coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shipping_shipping_component__ = __webpack_require__("../../../../../src/app/admin/shipping/shipping.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__categories_categories_component__ = __webpack_require__("../../../../../src/app/admin/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__brands_brand_detail_brand_detail_component__ = __webpack_require__("../../../../../src/app/admin/brands/brand-detail/brand-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__features_feature_detail_feature_detail_component__ = __webpack_require__("../../../../../src/app/admin/features/feature-detail/feature-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__coupons_coupon_detail_coupon_detail_component__ = __webpack_require__("../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shipping_shipping_detail_shipping_detail_component__ = __webpack_require__("../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__reviews_review_detail_review_detail_component__ = __webpack_require__("../../../../../src/app/admin/reviews/review-detail/review-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__user_user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/admin/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__order_order_content_order_content_component__ = __webpack_require__("../../../../../src/app/admin/order/order-content/order-content.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















































var routes = [
    {
        path: 'address', component: __WEBPACK_IMPORTED_MODULE_31__address_address_component__["a" /* AddressComponent */],
        data: { title: 'Manage Customer Address' }
    },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */],
        data: { title: 'Dashboard' }
    },
    {
        path: 'media-library', component: __WEBPACK_IMPORTED_MODULE_28__media_media_component__["a" /* MediaComponent */],
        data: { title: 'Media Library' }
    },
    {
        path: 'manage-orders', component: __WEBPACK_IMPORTED_MODULE_23__order_order_component__["a" /* OrdersComponent */],
        data: { title: 'Manage Orders' }
    },
    {
        path: 'my-orders', component: __WEBPACK_IMPORTED_MODULE_30__my_orders_my_orders_component__["a" /* MyOrdersComponent */],
        data: { title: 'My Orders' }
    },
    {
        path: 'wishlist', component: __WEBPACK_IMPORTED_MODULE_34__wishlist_wishlist_component__["a" /* WishlistComponent */],
        data: { title: 'Your Wishlist' }
    },
    {
        path: 'categories', component: __WEBPACK_IMPORTED_MODULE_38__categories_categories_component__["a" /* CategoriesComponent */],
        data: { title: 'Manage Categories' }
    },
    {
        path: 'my-reviews', component: __WEBPACK_IMPORTED_MODULE_33__my_reviews_my_reviews_component__["a" /* MyReviewsComponent */],
        data: { title: 'My Reviews' }
    },
    {
        path: 'reviews', component: __WEBPACK_IMPORTED_MODULE_32__reviews_reviews_component__["a" /* ReviewsComponent */],
        data: { title: 'Manage Reviews' }
    },
    {
        path: 'reviews/:id', component: __WEBPACK_IMPORTED_MODULE_43__reviews_review_detail_review_detail_component__["a" /* ReviewDetailComponent */],
        resolve: { review: __WEBPACK_IMPORTED_MODULE_4__reviews_review_resolve__["a" /* ReviewResolve */] },
        data: { title: 'Review Detail' }
    },
    {
        path: 'product', component: __WEBPACK_IMPORTED_MODULE_22__product_products_component__["a" /* ProductsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_9__product_products_guard__["a" /* ProductsGuard */]],
        data: { title: 'Products' }
    },
    {
        path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_15__product_product_detail_product_detail_component__["a" /* ProductDetailComponent */],
        resolve: { product: __WEBPACK_IMPORTED_MODULE_14__product_product_resolve__["a" /* ProductResolve */] }, canActivate: [__WEBPACK_IMPORTED_MODULE_13__product_product_guard__["a" /* ProductGuard */]],
        data: { title: 'Add/Edit Products' }
    },
    {
        path: 'brands', component: __WEBPACK_IMPORTED_MODULE_35__brands_brands_component__["a" /* BrandsComponent */],
        data: { title: 'Brands' }
    },
    {
        path: 'brands/:id', component: __WEBPACK_IMPORTED_MODULE_39__brands_brand_detail_brand_detail_component__["a" /* BrandDetailComponent */],
        resolve: { brand: __WEBPACK_IMPORTED_MODULE_8__brands_brand_resolve__["a" /* BrandResolve */] },
        data: { title: 'Brand Details' }
    },
    {
        path: 'features', component: __WEBPACK_IMPORTED_MODULE_10__features_features_component__["a" /* FeaturesComponent */],
        data: { title: 'Features' }
    },
    {
        path: 'features/:id', component: __WEBPACK_IMPORTED_MODULE_40__features_feature_detail_feature_detail_component__["a" /* FeatureDetailComponent */],
        resolve: { feature: __WEBPACK_IMPORTED_MODULE_7__features_feature_resolve__["a" /* FeatureResolve */] },
        data: { title: 'Add/Edit Features' }
    },
    {
        path: 'coupons', component: __WEBPACK_IMPORTED_MODULE_36__coupons_coupons_component__["a" /* CouponsComponent */],
        data: { title: 'Coupons' }
    },
    {
        path: 'coupons/:id', component: __WEBPACK_IMPORTED_MODULE_41__coupons_coupon_detail_coupon_detail_component__["a" /* CouponDetailComponent */],
        resolve: { coupon: __WEBPACK_IMPORTED_MODULE_6__coupons_coupon_resolve__["a" /* CouponResolve */] },
        data: { title: 'Add/Edit Coupons' }
    },
    {
        path: 'shippings', component: __WEBPACK_IMPORTED_MODULE_37__shipping_shipping_component__["a" /* ShippingComponent */],
        data: { title: 'Shipping Settings' }
    },
    {
        path: 'shippings/:id', component: __WEBPACK_IMPORTED_MODULE_42__shipping_shipping_detail_shipping_detail_component__["a" /* ShippingDetailComponent */], resolve: { shipping: __WEBPACK_IMPORTED_MODULE_5__shipping_shipping_resolve__["a" /* ShippingResolve */] },
        data: { title: 'Add/Edit Shipping Settings' }
    },
    {
        path: 'users', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__user_users_guard__["a" /* UsersGuard */]],
        data: { title: 'Manage Users' }
    },
    {
        path: 'users/:id', component: __WEBPACK_IMPORTED_MODULE_46__user_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        resolve: { user: __WEBPACK_IMPORTED_MODULE_0__user_user_resolve__["a" /* UserResolve */] },
        data: { title: 'User Details' }
    },
];
var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_21__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_18__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["a" /* RouterModule */].forChild(routes), __WEBPACK_IMPORTED_MODULE_27__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_19__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_44_angular_tree_component__["a" /* TreeModule */], __WEBPACK_IMPORTED_MODULE_45_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
            __WEBPACK_IMPORTED_MODULE_26_angular2_busy__["BusyModule"], __WEBPACK_IMPORTED_MODULE_16__angular_material__["d" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["i" /* MdCardModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["m" /* MdSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["n" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["c" /* MdIconModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["e" /* MdSnackBarModule */], __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload__["FileUploadModule"], __WEBPACK_IMPORTED_MODULE_16__angular_material__["j" /* MdProgressBarModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["l" /* MdButtonToggleModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_material__["o" /* MdTabsModule */], __WEBPACK_IMPORTED_MODULE_16__angular_material__["b" /* MdCheckboxModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_22__product_products_component__["a" /* ProductsComponent */], __WEBPACK_IMPORTED_MODULE_15__product_product_detail_product_detail_component__["a" /* ProductDetailComponent */], __WEBPACK_IMPORTED_MODULE_11__product_features_features_component__["a" /* ProductFeaturesComponent */], __WEBPACK_IMPORTED_MODULE_23__order_order_component__["a" /* OrdersComponent */], __WEBPACK_IMPORTED_MODULE_24__order_order_detail_component__["a" /* OrderDetailComponent */], __WEBPACK_IMPORTED_MODULE_25__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_28__media_media_component__["a" /* MediaComponent */], __WEBPACK_IMPORTED_MODULE_10__features_features_component__["a" /* FeaturesComponent */], __WEBPACK_IMPORTED_MODULE_29__product_variants_variants_component__["a" /* VariantsComponent */], __WEBPACK_IMPORTED_MODULE_30__my_orders_my_orders_component__["a" /* MyOrdersComponent */], __WEBPACK_IMPORTED_MODULE_31__address_address_component__["a" /* AddressComponent */], __WEBPACK_IMPORTED_MODULE_32__reviews_reviews_component__["a" /* ReviewsComponent */], __WEBPACK_IMPORTED_MODULE_33__my_reviews_my_reviews_component__["a" /* MyReviewsComponent */], __WEBPACK_IMPORTED_MODULE_34__wishlist_wishlist_component__["a" /* WishlistComponent */], __WEBPACK_IMPORTED_MODULE_35__brands_brands_component__["a" /* BrandsComponent */], __WEBPACK_IMPORTED_MODULE_36__coupons_coupons_component__["a" /* CouponsComponent */], __WEBPACK_IMPORTED_MODULE_37__shipping_shipping_component__["a" /* ShippingComponent */], __WEBPACK_IMPORTED_MODULE_38__categories_categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_39__brands_brand_detail_brand_detail_component__["a" /* BrandDetailComponent */], __WEBPACK_IMPORTED_MODULE_40__features_feature_detail_feature_detail_component__["a" /* FeatureDetailComponent */], __WEBPACK_IMPORTED_MODULE_41__coupons_coupon_detail_coupon_detail_component__["a" /* CouponDetailComponent */], __WEBPACK_IMPORTED_MODULE_42__shipping_shipping_detail_shipping_detail_component__["a" /* ShippingDetailComponent */], __WEBPACK_IMPORTED_MODULE_43__reviews_review_detail_review_detail_component__["a" /* ReviewDetailComponent */], __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */], __WEBPACK_IMPORTED_MODULE_46__user_user_detail_user_detail_component__["a" /* UserDetailComponent */], __WEBPACK_IMPORTED_MODULE_47__order_order_content_order_content_component__["a" /* OrderContentComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__product_product_resolve__["a" /* ProductResolve */], __WEBPACK_IMPORTED_MODULE_8__brands_brand_resolve__["a" /* BrandResolve */], __WEBPACK_IMPORTED_MODULE_7__features_feature_resolve__["a" /* FeatureResolve */], __WEBPACK_IMPORTED_MODULE_6__coupons_coupon_resolve__["a" /* CouponResolve */], __WEBPACK_IMPORTED_MODULE_5__shipping_shipping_resolve__["a" /* ShippingResolve */], __WEBPACK_IMPORTED_MODULE_13__product_product_guard__["a" /* ProductGuard */], __WEBPACK_IMPORTED_MODULE_9__product_products_guard__["a" /* ProductsGuard */], __WEBPACK_IMPORTED_MODULE_12__order_order_guard__["a" /* OrderGuard */], __WEBPACK_IMPORTED_MODULE_4__reviews_review_resolve__["a" /* ReviewResolve */], __WEBPACK_IMPORTED_MODULE_0__user_user_resolve__["a" /* UserResolve */], __WEBPACK_IMPORTED_MODULE_1__user_users_guard__["a" /* UsersGuard */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/brands/brand-detail/brand-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/brands/brand-detail/brand-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button md-button md-raised-button routerLink=\"/admin/brands\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"brand\" [fields]=\"fields\" api=\"brands\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/brands/brand-detail/brand-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brand_fields__ = __webpack_require__("../../../../../src/app/admin/brands/brand.fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrandDetailComponent = (function () {
    function BrandDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
    }
    BrandDetailComponent.prototype.ngOnInit = function () {
        this.brand = this.route.snapshot.data['brand'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New Brand." : "Edit Brand - " + id;
        this.fields = __WEBPACK_IMPORTED_MODULE_0__brand_fields__["a" /* brand */].fields;
    };
    BrandDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('brands', data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/brands"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
        else {
            this.busy = this.crud.patch('brands', id, data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/brands"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
    };
    return BrandDetailComponent;
}());
BrandDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'brand-detail',
        template: __webpack_require__("../../../../../src/app/admin/brands/brand-detail/brand-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/brands/brand-detail/brand-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], BrandDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=brand-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/brands/brand.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return brand; });
var brand = (function () {
    function brand() {
    }
    return brand;
}());

brand.fields = [
    { field: 'name' },
    { field: 'active', dataType: 'boolean' }
];
//# sourceMappingURL=brand.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/brands/brand.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandResolve = (function () {
    function BrandResolve(crud) {
        this.crud = crud;
    }
    BrandResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('brands', id);
    };
    return BrandResolve;
}());
BrandResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], BrandResolve);

var _a;
//# sourceMappingURL=brand.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/brands/brands.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/brands/brands.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Brands\" api=\"brands\" [fields]=\"fields\"></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/brands/brands.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__brand_fields__ = __webpack_require__("../../../../../src/app/admin/brands/brand.fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrandsComponent = (function () {
    function BrandsComponent() {
        this.fields = __WEBPACK_IMPORTED_MODULE_0__brand_fields__["a" /* brand */].fields;
    }
    return BrandsComponent;
}());
BrandsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-brands',
        template: __webpack_require__("../../../../../src/app/admin/brands/brands.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/brands/brands.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BrandsComponent);

//# sourceMappingURL=brands.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidebuttons button{\r\nvisibility: hidden;\r\n}\r\n.nodisplay{\r\nvisibility: hidden;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content cp-container\">\r\n  <md-card>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <h3>Categories</h3>\r\n      <form [formGroup]=\"form\" (ngSubmit)=\"addNode(form.value,tree.treeModel)\" fxLayout=\"row\" *ngIf=\"showAdd\">\r\n        <md-input-container fxFlex>\r\n          <input mdInput placeholder=\"Add new category\" formControlName=\"name\" />\r\n        </md-input-container>\r\n        <submit-button [form]=\"form\"></submit-button>\r\n        <button md-icon-button *ngIf=\"showAdd\" (click)=\"showAdd=false;\">\r\n            <md-icon>close</md-icon>\r\n          </button>\r\n      </form>\r\n\r\n      <span class=\"app-toolbar-filler\"></span>\r\n      <div>\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false\">\r\n          <md-icon>search</md-icon>\r\n        </button>\r\n        <md-input-container *ngIf=\"showFilter\" fxFlex>\r\n          <input mdInput autofocus [formControl]=\"filterInput\" placeholder=\"filter nodes\" (keyup)=\"filterNodes(filterInput._value, tree)\"\r\n          />\r\n        </md-input-container>\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false;filterInput._value='';filterNodes(filterInput._value, tree)\">\r\n          <md-icon>close</md-icon>\r\n        </button>\r\n        <button md-icon-button *ngIf=\"!showAdd\" (click)=\"showAdd=true;showFilter=false;\">\r\n          <md-icon>add</md-icon>\r\n        </button>\r\n        <button md-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter=true;showAdd=false;\">\r\n          <md-icon>filter_list</md-icon>\r\n        </button>\r\n        <button md-icon-button (click)=\"tree.treeModel.expandAll()\"><md-icon>expand_more</md-icon></button>\r\n        <button md-icon-button (click)=\"tree.treeModel.collapseAll()\"><md-icon>expand_less</md-icon></button>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"exportable\">\r\n      <div style=\"height: 90vh; width: 600px\">\r\n        <tree-root #tree [nodes]=\"categories\" [options]=\"customTemplateStringOptions\" [focused]=\"true\" (moveNode)=\"moveNode($event)\">\r\n          <ng-template #treeNodeTemplate let-node>\r\n            <div (mouseenter)=\"mouse($event,true)\" (mouseleave)=\"mouse($event,false)\">\r\n              <span title=\"{{node.data.subTitle}}\">{{ node.data.name }}</span>\r\n              <span class=\"pull-right\">{{ childrenCount(node) }}</span>\r\n              <button class=\"nodisplay\" md-icon-button (click)=\"removeNode(node,tree.treeModel)\"><md-icon>delete</md-icon></button>\r\n            </div>\r\n          </ng-template>\r\n          <ng-template #loadingTemplate>Loading, please hold....</ng-template>\r\n        </tree-root>\r\n      </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/admin/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesComponent = (function () {
    function CategoriesComponent(crud, snack, fb, modal) {
        this.crud = crud;
        this.snack = snack;
        this.fb = fb;
        this.modal = modal;
        this.nodes2 = [{ name: 'root' }, { name: 'root2' }];
        this.filterText = '';
        this.addText = '';
        this.filterInput = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]();
        this.addInput = new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormControl"]();
        this.asyncChildren = [];
        this.customTemplateStringOptions = {
            isExpandedField: 'expanded',
            idField: '_id',
            nodeHeight: 23,
            allowDrag: true,
            useVirtualScroll: true,
        };
        this.form = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"].required]],
        });
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.get('categories').subscribe(function (data) { _this.categories = data; });
    };
    CategoriesComponent.prototype.addNode = function (data, tree) {
        var _this = this;
        this.categories.push({
            name: data.name
        });
        tree.update();
        this.crud.post('categories', { name: data.name }).subscribe(function (data) {
            _this.crud.get('categories').subscribe(function (data) { _this.categories = data; });
        });
    };
    CategoriesComponent.prototype.removeNode = function (node, tree) {
        var _this = this;
        var vm = this;
        if (node.isRoot) {
            this.snack.open('Parent Node can not be removed', 'OK', { duration: 2000 });
        }
        else {
            vm.modal.confirm('Delete?', 'Are you sure to delete')
                .subscribe(function (res) {
                if (res) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_lodash__["remove"])(node.parent.data.children, node.data);
                    _this.crud.delete('categories', node.data._id).subscribe(function (data) { }, function (err) {
                        _this.snack.open(err, 'OK', { duration: 2000 });
                    });
                }
            });
        }
        tree.update();
    };
    CategoriesComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    CategoriesComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    CategoriesComponent.prototype.activateSubSub = function (tree) {
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    CategoriesComponent.prototype.moveNode = function ($event) {
        this.crud.put('categories', $event.treeModel.nodes).subscribe();
    };
    CategoriesComponent.prototype.onEvent = function (event) {
        if (event.eventName === 'onUpdateData') {
        }
    };
    CategoriesComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    CategoriesComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    CategoriesComponent.prototype.mouse = function (event, show) {
        show ? $(event.target).children('button').css('visibility', 'visible') : $(event.target).children('button').css('visibility', 'hidden');
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'shopnx-categories',
        template: __webpack_require__("../../../../../src/app/admin/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */]) === "function" && _d || Object])
], CategoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button md-button md-raised-button routerLink=\"/admin/coupons\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"coupon\" [fields]=\"fields\" api=\"coupons\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coupon_fields__ = __webpack_require__("../../../../../src/app/admin/coupons/coupon.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponDetailComponent = (function () {
    function CouponDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
        this.fields = __WEBPACK_IMPORTED_MODULE_4__coupon_fields__["a" /* coupon */].fields;
    }
    CouponDetailComponent.prototype.ngOnInit = function () {
        this.coupon = this.route.snapshot.data['coupon'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New coupon" : "Edit coupon - " + id;
    };
    CouponDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('coupons', data, true, true).subscribe(function (data) { return _this.router.navigateByUrl("/admin/coupons"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
        else {
            this.busy = this.crud.patch('coupons', id, data, true).subscribe(function (data) { return _this.router.navigateByUrl("/admin/coupons"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
    };
    return CouponDetailComponent;
}());
CouponDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-coupon-detail',
        template: __webpack_require__("../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/coupons/coupon-detail/coupon-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], CouponDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=coupon-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupon.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coupon; });
var coupon = (function () {
    function coupon() {
    }
    return coupon;
}());

coupon.fields = [
    { field: 'code' },
    { field: 'amount', dataType: 'currency' },
    { field: 'minimumCartValue', dataType: 'number' },
    { field: 'info' },
    { field: 'type' },
    { field: 'active', dataType: 'boolean' }
];
//# sourceMappingURL=coupon.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupon.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponResolve = (function () {
    function CouponResolve(crud) {
        this.crud = crud;
    }
    CouponResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('coupons', id);
    };
    return CouponResolve;
}());
CouponResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], CouponResolve);

var _a;
//# sourceMappingURL=coupon.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupons.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Coupons\" api=\"coupons\" [fields]=\"fields\"></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/coupons/coupons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coupon_fields__ = __webpack_require__("../../../../../src/app/admin/coupons/coupon.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouponsComponent = (function () {
    function CouponsComponent() {
        this.fields = __WEBPACK_IMPORTED_MODULE_1__coupon_fields__["a" /* coupon */].fields;
    }
    CouponsComponent.prototype.ngOnInit = function () {
    };
    return CouponsComponent;
}());
CouponsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-coupons',
        template: __webpack_require__("../../../../../src/app/admin/coupons/coupons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/coupons/coupons.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CouponsComponent);

//# sourceMappingURL=coupons.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-cards{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n/*.dashboard-card{\r\n  max-width: 250px;\r\n  cursor: pointer;\r\n  margin: 20px;   \r\n}*/\r\n.gradient-card{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  padding: 15px;\r\n  color:#fff;\r\n  width: 250px;\r\n  margin: 20px; \r\n  cursor: pointer;\r\n  box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);\r\n  border-radius: 3px;\r\n  background: linear-gradient(60deg, #40c4ff, #0091ea);\r\n}\r\n.gradient-card md-icon{\r\n  margin-right: 30px;\r\n  font-size: 48px;\r\n  margin-top: -4px;\r\n  opacity: 0.3;\r\n}\r\n.gradient-card .header{\r\n  font-size: 1.2em;\r\n}\r\n.gradient-card .content{\r\n  font-size: 0.9em;\r\n}\r\n.gradient-card .item{\r\n    box-sizing: border-box;\r\n    max-height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-pack: start;\r\n        justify-content: flex-start;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n    -webkit-box-pack: start;\r\n    -webkit-box-align: center;\r\n    color: rgb(255, 255, 255);\r\n}\r\n.purple{\r\n  background: linear-gradient(60deg, rgb(140, 153, 224), rgb(101, 114, 184));  \r\n}\r\n.grey{\r\n  background: linear-gradient(60deg, #607d8b, #263238);\r\n}\r\n.blue{\r\n  background: linear-gradient(60deg, rgb(77, 208, 226), rgb(76, 168, 186));\r\n}\r\n.light-blue{\r\n  background: linear-gradient(60deg, #40c4ff, #0091ea);\r\n}\r\n.green{\r\n  background: linear-gradient(60deg, rgb(129, 198, 131), rgb(98, 168, 100));\r\n}\r\n.yellow{\r\n  background: linear-gradient(60deg, #fbc02d, #f57f17);\r\n}\r\n.brown{\r\n  background: linear-gradient(60deg, #8d6e63, #5d4037);\r\n}\r\n.orange{\r\n  background: linear-gradient(60deg, #ff5722 , #bf360c );\r\n}\r\n.red{\r\n  background: linear-gradient(60deg, #e53935, #b71c1c);\r\n}\r\n.pink{\r\n  background: linear-gradient(60deg, #ff4081, #c51162);\r\n}\r\n.teal{\r\n  background: linear-gradient(60deg, #00897b , #004d40);\r\n}\r\n.black{\r\n  background: linear-gradient(60deg, #666 , #000);\r\n}\r\n.lime{\r\n  background: linear-gradient(60deg, #aeea00, #64dd17);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n  <div class=\"app-content\">\r\n    <h2>Dashboard</h2>\r\n    <div class=\"dashboard-cards\">\r\n      <div *ngFor=\"let i of (cards | dashboardFilter:'dashboard')\">\r\n        <div class=\"gradient-card\" [ngClass]=\"i.color\" *ngIf=\"auth.hasRole(i.authenticate)\" [routerLink]=\"i.url\">\r\n          <md-icon>{{i.icon}}</md-icon>\r\n          <div class=\"content\">\r\n            <div class=\"header\">{{i.name}}</div>\r\n            <div>&nbsp;</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</md-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent(auth) {
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.cards = __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].menu;
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'shopnx-dashboard',
        template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/features/feature-detail/feature-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/features/feature-detail/feature-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button md-button md-raised-button routerLink=\"/admin/features\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"feature\" [fields]=\"fields\" api=\"features\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/features/feature-detail/feature-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_fields__ = __webpack_require__("../../../../../src/app/admin/features/feature.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeatureDetailComponent = (function () {
    function FeatureDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
    }
    FeatureDetailComponent.prototype.ngOnInit = function () {
        this.feature = this.route.snapshot.data['feature'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New feature" : "Edit feature - " + id;
        this.fields = __WEBPACK_IMPORTED_MODULE_4__feature_fields__["a" /* feature */].fields;
    };
    FeatureDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('features', data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/features"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
        else {
            this.busy = this.crud.patch('features', id, data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/features"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
    };
    return FeatureDetailComponent;
}());
FeatureDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-feature-detail',
        template: __webpack_require__("../../../../../src/app/admin/features/feature-detail/feature-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/features/feature-detail/feature-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], FeatureDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=feature-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/features/feature.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return feature; });
var feature = (function () {
    function feature() {
    }
    return feature;
}());

feature.fields = [
    { field: 'key' },
    { field: 'val' },
    { field: 'active', dataType: 'boolean' }
];
//# sourceMappingURL=feature.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/features/feature.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeatureResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeatureResolve = (function () {
    function FeatureResolve(crud) {
        this.crud = crud;
    }
    FeatureResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('features', id);
    };
    return FeatureResolve;
}());
FeatureResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], FeatureResolve);

var _a;
//# sourceMappingURL=feature.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/features/features.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Features\" api=\"features\" [fields]=\"fields\"></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__feature_fields__ = __webpack_require__("../../../../../src/app/admin/features/feature.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturesComponent = (function () {
    function FeaturesComponent() {
        this.fields = __WEBPACK_IMPORTED_MODULE_1__feature_fields__["a" /* feature */].fields;
    }
    return FeaturesComponent;
}());
FeaturesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-features',
        template: __webpack_require__("../../../../../src/app/admin/features/features.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/features/features.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeaturesComponent);

//# sourceMappingURL=features.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return __WEBPACK_IMPORTED_MODULE_0__admin_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/admin/media/media.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-footer{\r\n  color:#999;\r\n  font-size: .8em;\r\n}\r\n.dashboard-cards{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n.dashboard-card{\r\n  max-width: 250px;\r\n  margin-right: 20px;   \r\n  overflow: hidden;\r\n}\r\n.dashboard-card img{\r\n  max-height: 250px;  \r\n  width: auto;\r\n}\r\n\r\n.my-drop-zone { background: #F8F8F8;\r\n    border: 5px dashed #DDD;\r\n    text-align: center;\r\n    padding: 25px;\r\n    margin: 10px; }\r\n.nv-file-over { border: dotted 3px red; } /* Default class applied to drop zones on over */\r\n\r\n.example-card {\r\n  width: 400px;\r\n  margin:10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/media/media.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content cp-container\">\r\n  <md-card>\r\n    <md-toolbar class=\"md-accent\" fxLayout=\"row\">\r\n      <h3>Media Library</h3>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n      <input md-raised-button color=\"primary\" type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple (change)=\"uploader.uploadAll()\"\r\n      />\r\n      <span class=\"app-toolbar-filler\"></span>\r\n    </md-toolbar>\r\n    <div [ngBusy]=\"busy\"></div>\r\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n      (change)=\"uploader.uploadAll()\" class=\"well my-drop-zone\">\r\n      Base drop zone\r\n    </div>\r\n    <div *ngIf=\"uploader?.queue?.length>0\">\r\n      <h3>Upload queue ({{ uploader?.queue?.length }}) <button md-raised-button class=\"mat-primary\" (click)=\"uploader.uploadAll()\"><md-icon>cloud_upload</md-icon> Uplaod All</button></h3>\r\n      <md-progress-bar mode=\"determinate\" [value]=\"uploader.progress\"></md-progress-bar>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th width=\"50%\">Name</th>\r\n            <th>Size</th>\r\n            <th>Progress</th>\r\n            <th>Status</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n            <td><strong>{{ item?.file?.name }}</strong></td>\r\n            <td nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n            <td>\r\n              <md-progress-bar mode=\"determinate\" [value]=\"item.progress\"></md-progress-bar>\r\n            </td>\r\n            <td class=\"text-center\">\r\n              <span *ngIf=\"item.isSuccess\"><md-icon>done</md-icon></span>\r\n              <span *ngIf=\"item.isError\"><md-icon>error_outline</md-icon></span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </md-card>\r\n\r\n  <div fxLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"center start\">\r\n    <md-card class=\"example-card\" *ngFor=\"let p of media; let i = index;\" id=\"{{p?._id}}\">\r\n      <button md-button md-icon-button (click)=\"delete(p._id)\" class=\"close\"><md-icon>close</md-icon></button>\r\n      <md-card-header>\r\n        <md-card-title>{{p.name}}</md-card-title>\r\n        <md-card-subtitle>{{p.path}}</md-card-subtitle>\r\n      </md-card-header>\r\n      <img md-card-image [src]=\"p?.path\">\r\n      <div class=\"card-footer\">\r\n        <b>Uploaded by:</b> {{p.uname}} ({{p.uemail}})<br/>\r\n        <b>Size:</b>{{ p.size/1024/1024 | number:'.1-2' }} MB<br/>\r\n        <b>Created:</b> {{p.createdAt | date:'medium'}}<br/>\r\n      </div>\r\n    </md-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/media/media.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_helper__ = __webpack_require__("../../../../../src/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__);
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
    function MediaComponent(snack, http, helper, crud, route, dialog, auth, modal) {
        var _this = this;
        this.snack = snack;
        this.http = http;
        this.helper = helper;
        this.crud = crud;
        this.route = route;
        this.dialog = dialog;
        this.auth = auth;
        this.modal = modal;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_8_ng2_file_upload__["FileUploader"]({
            url: 'api/media',
            authToken: this.auth.getToken()
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
            _this.getData('-createdAt');
        };
    }
    MediaComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    MediaComponent.prototype.ngOnInit = function () {
        this.cols = this.helper.help([
            { field: 'name' },
            { field: 'address' },
            { field: 'comment' },
        ]);
        this.sort = { predicate: null, reverse: false };
        this.getData('-createdAt');
    };
    MediaComponent.prototype.getData = function (sort) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["URLSearchParams"]();
        this.loading = true;
        params.set('sort', sort);
        this.busy = this.crud.get('media/my', params, true)
            .subscribe(function (data) {
            _this.media = data;
            _this.loading = false;
        }, function (error) {
            _this.snack.open(error, 'OK', { duration: 2000 });
            _this.loading = false;
        });
    };
    MediaComponent.prototype.delete = function (image) {
        var _this = this;
        this.modal.confirm('Delete?', 'Are you sure to delete')
            .subscribe(function (res) {
            if (res) {
                _this.busy = _this.crud.delete('media', image)
                    .subscribe(function (data) { _this.getData('-createdAt'); }, function (error) { _this.snack.open(error, 'OK', { duration: 2000 }); _this.loading = false; });
            }
        });
    };
    return MediaComponent;
}());
MediaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
        selector: 'shopnx-media',
        template: __webpack_require__("../../../../../src/app/admin/media/media.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/media/media.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MdSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_helper__["a" /* CrudHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_helper__["a" /* CrudHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MdDialog */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _h || Object])
], MediaComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=media.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/my-orders/my-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\r\n    margin-bottom: 10px;\r\n}\r\nmd-card{\r\n    margin: 2%;\r\n}\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\nmd-list-item{\r\n    margin: 10px 10px 10px 0;\r\n}\r\n.cancel{\r\n    border: 2px solid red;\r\n}\r\nimg{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/my-orders/my-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngIf=\"msg\" style=\"background:greenyellow\"> {{msg}}<br/> <span *ngIf=\"id\"><b>Payment ID:</b> {{id}}</span></md-card>\r\n<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <h2><span class=\"mute\">My Account</span> > My Orders</h2>\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Search orders\" #f [disabled]=\"!data || data.length===0\">\r\n  </md-input-container>\r\n</div>\r\n<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <md-card *ngIf=\"data.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n    <div>No order found</div>\r\n  </md-card>\r\n</div>\r\n<md-card *ngFor=\"let order of data\" [ngClass]=\"{cancel: order.status==='Cancellation Requested'}\">\r\n  <md-card-header fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\">\r\n    <md-card-title>OrderNo: {{order.orderNo}}</md-card-title>\r\n    <md-card-subtitle>{{order.created_at | date}}</md-card-subtitle>\r\n    <div class=\"total\">Order Total <b>{{order.amount.total / order.amount.exchange_rate | currency : Settings.currency.code : true}}</b></div>\r\n    <div *ngIf=\"cancellable(order.status)\">\r\n      <button class=\"close\" md-button md-raised-button (click)=\"cancelOrder(order)\">Cancel Order<md-icon>keyboard_return</md-icon></button>\r\n    </div>\r\n  </md-card-header>\r\n  <md-card-content fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\">\r\n    <div class=\"description\" fxFlex>\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let i of order.items | searchpipe:f.value\" fxLayout=\"row\">\r\n          <img md-list-avatar src=\"{{i.url}}\" onError=\"this.src='/assets/img/product-placeholder.png'\" style=\"height:75px;\" routerLink=\"/product/{{i.description}}/{{i.sku}}\">\r\n          <div fxFlexOffset=\"2\">\r\n            <div md-line><b><a class=\"product-link\" routerLink=\"/product/{{i.description}}/{{i.sku}}\">{{i.name}}</a></b></div>\r\n            <div md-line><b>Amount:</b> {{i.price / order.amount.exchange_rate| currency : Settings.currency.code : true}} x <b>{{i.quantity}}</b>\r\n            </div>\r\n            <!--<div md-line><b>Status:</b> {{i.status}} </div>-->\r\n          </div>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <div class=\"address\" fxFlex=\"30\" fxFlex.xs=\"100\">\r\n      <div md-line><b>Address</b></div>\r\n      <hr/>\r\n      <div md-line class=\"mute\">\r\n        <b>{{order.address.recipient_name}}</b>\r\n        <br/>{{order.address.line1}}\r\n        <br/> {{order.address.city}}\r\n        <br/> {{order.address.country_code}}\r\n        <br/> {{order.address.postal_code}}\r\n      </div>\r\n      <br/>\r\n      <hr/>\r\n      <div md-line class=\"mute\">\r\n        Order Status: {{order.status}}\r\n      </div>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n<div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n  <button md-button md-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\"><md-icon>arrow_downwards</md-icon>Load More...</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/my-orders/my-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base__ = __webpack_require__("../../../../../src/app/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersComponent; });
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








var MyOrdersComponent = (function (_super) {
    __extends(MyOrdersComponent, _super);
    function MyOrdersComponent(crud, snack, route, auth, modal) {
        var _this = _super.call(this) || this;
        _this.crud = crud;
        _this.snack = snack;
        _this.route = route;
        _this.auth = auth;
        _this.modal = modal;
        _this.meta = {};
        _this.data = [];
        _this.api = 'orders/my';
        _this.msg = _this.route.snapshot.queryParams['msg'];
        _this.id = _this.route.snapshot.queryParams['id'];
        return _this;
    }
    MyOrdersComponent.prototype.ngOnInit = function () {
        this.Settings = __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */];
        this.flush(); // Important
        this.getData();
    };
    MyOrdersComponent.prototype.search = function (event) {
    };
    MyOrdersComponent.prototype.cancellable = function (status) {
        var orderStatus = __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].orderStatus;
        var i = orderStatus.indexOf(status);
        return (i < 4);
    };
    MyOrdersComponent.prototype.cancelOrder = function (order) {
        var _this = this;
        if (!this.auth.loggedIn) {
            this.modal.login().subscribe();
            return;
        }
        this.modal.cancelOrder()
            .subscribe(function (data) {
            if (!data) {
                _this.message = 'Please tell us why you want to cancel the order';
                return;
            }
            order.status = 'Cancellation Requested';
            order.comment = data.comment;
            _this.crud.patch('orders', order._id, order).subscribe(function (data) {
                _this.getData({ sort: '-updated_at' });
                _this.snack.open('Order Cancellation Request Successful', 'OK', { duration: 2000 });
            }, function (err) { _this.snack.open(err, 'OK', { duration: 2000 }); });
        });
    };
    return MyOrdersComponent;
}(__WEBPACK_IMPORTED_MODULE_7__base__["a" /* default */]));
MyOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'shopnx-my-orders',
        template: __webpack_require__("../../../../../src/app/admin/my-orders/my-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/my-orders/my-orders.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object])
], MyOrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/my-reviews/my-reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\r\n    margin-bottom: 10px;\r\n}\r\nmd-card{\r\n    margin-bottom: 10px;\r\n}\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\n.reviewRating{\r\n    font-size: 18px;\r\n}\r\n.mat-icon{\r\n    height: 18px;\r\n    width: auto;\r\n}\r\n.category .mat-icon{\r\n    font-size: 16px;\r\n}\r\n.rating-button {\r\n    background-color: #32cd32;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    padding: 0 6px;\r\n    width:40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/my-reviews/my-reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <h2><span class=\"mute\">My Account</span> > My Reviews</h2>\r\n    <md-input-container>\r\n        <input mdInput placeholder=\"Search Reviews\" [disabled]=\"!reviews || reviews.length===0\">\r\n    </md-input-container>\r\n</div>\r\n\r\n<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n        <md-card *ngIf=\"!reviews || reviews.length===0\" class=\"noproduct\" fxLayoutAlign=\"start start\" fxLayout=\"column\">\r\n            <div>No Reviews yet</div>\r\n        </md-card>\r\n        <md-card *ngFor=\"let review of reviews;let i = index;\" fxFlex.gt-md=\"80\" fxFlex.gt-sm=\"80\" fxFlex=\"70\" fxFlex.xs=\"90\">\r\n            <md-card-header>\r\n                <button md-button md-icon-button (click)=\"delete(review._id)\" class=\"close\">\r\n                <md-icon>close</md-icon>\r\n            </button>\r\n                <img md-card-avatar [src]=\"review?.image\" onError=\"this.src='/assets/img/product-placeholder.png'\">\r\n                <md-card-title><a class=\"product-link\" routerLink=\"/product/{{review.pslug}}/{{review.pid}}\">{{review.pname}}</a></md-card-title>\r\n                <md-card-subtitle fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <div fxFlex fxLayout=\"row\">Rating:&nbsp;\r\n                        <div class=\"rating-button\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div>{{review.rating}}</div>\r\n                            <md-icon class=\"reviewRating\">star</md-icon>\r\n                        </div>\r\n                    </div>\r\n                    Created: {{review.created | date}}</md-card-subtitle>\r\n            </md-card-header>\r\n            <md-card-content>\r\n                <p>{{review.message}}</p>\r\n            </md-card-content>\r\n        </md-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/my-reviews/my-reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyReviewsComponent = (function () {
    function MyReviewsComponent(crud, snack, modal) {
        this.crud = crud;
        this.snack = snack;
        this.modal = modal;
    }
    MyReviewsComponent.prototype.ngOnInit = function () {
        this.getReviews();
    };
    MyReviewsComponent.prototype.getReviews = function () {
        var _this = this;
        this.busy = this.crud.get('reviews/my', null, true).subscribe(function (data) { return _this.success(data); }, function (err) { return _this.err(err); });
    };
    MyReviewsComponent.prototype.delete = function (id) {
        var _this = this;
        this.modal.confirm('Delete?', 'Are you sure to delete').subscribe(function (res) {
            if (res) {
                _this.crud.delete('reviews', id).subscribe(function (data) { _this.getReviews(); }, function (err) { _this.err(err); });
            }
        });
    };
    MyReviewsComponent.prototype.success = function (data) {
        this.reviews = data;
    };
    MyReviewsComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    return MyReviewsComponent;
}());
MyReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-my-reviews',
        template: __webpack_require__("../../../../../src/app/admin/my-reviews/my-reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/my-reviews/my-reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], MyReviewsComponent);

var _a, _b, _c;
//# sourceMappingURL=my-reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/order/order-content/order-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address{\r\n    margin-top: 20px;\r\n    width:263px !important;\r\n}\r\n.description{\r\n    margin-top: 10px !important;\r\n}\r\n\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\n.m10{\r\n    margin: -20px;\r\n}\r\nimg{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/order/order-content/order-content.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card *ngFor=\"let order of orders\">\r\n  <md-card-header class=\"m10\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\" fxFlex>\r\n      <div>\r\n        <md-card-title>OrderNo: {{order.orderNo}}</md-card-title>\r\n        <md-card-subtitle>{{order.created_at | date}}</md-card-subtitle>\r\n      </div>\r\n      <div class=\"total\">Order Total <b>{{order.amount.total / order.amount.exchange_rate | currency : Settings.currency.code : true}}</b></div>\r\n      <div>\r\n        <md-card-title>Payment</md-card-title>\r\n        <md-card-subtitle> {{order.payment?.method}} </md-card-subtitle>\r\n      </div>\r\n      <div fxLayout=\"row\">\r\n        <div>\r\n          <md-card-title>Order Status</md-card-title>\r\n          <md-card-subtitle>\r\n            <md-select name=\"orderStatus-{{i}}\" [(ngModel)]=\"order.status\" (change)=\"orderStatus(order, $event)\" style=\"width:140px;\"\r\n              placeholder=\"Order Status\" floatPlaceholder=\"never\">\r\n              <md-option *ngFor=\"let o of Settings.orderStatus\" [value]=\"o\">{{o}}</md-option>\r\n            </md-select>\r\n          </md-card-subtitle>\r\n        </div>\r\n        <div>\r\n          <md-card-title>Payment Status</md-card-title>\r\n          <md-card-subtitle *ngIf=\"order.payment\">\r\n            <md-select ngModel name=\"paymentStatus-{{i}}\" [(ngModel)]=\"order.payment.state\" placeholder=\"Payment Status\" floatPlaceholder=\"never\"\r\n              (change)=\"paymentStatus(order,$event)\">\r\n              <md-option *ngFor=\"let o of Settings.paymentStatus\" [value]=\"o\">{{o}}</md-option>\r\n            </md-select>\r\n          </md-card-subtitle>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </md-card-header>\r\n  <md-card-content fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\">\r\n    <div class=\"description\" fxFlex>\r\n      <md-list>\r\n        <md-list-item *ngFor=\"let i of order.items\" fxLayout=\"row\">\r\n          <img md-list-avatar src=\"{{i.url}}\" onError=\"this.src='/assets/img/product-placeholder.png'\" style=\"height:75px;\" routerLink=\"/product/{{i.description}}/{{i.sku}}\">\r\n          <div fxFlexOffset=\"2\">\r\n            <div md-line><b><a class=\"product-link\" routerLink=\"/product/{{i.description}}/{{i.sku}}\">{{i.name}}</a></b></div>\r\n            <div md-line><b>Amount:</b> {{i.price / order.amount.exchange_rate | currency : Settings.currency.code : true}} x <b>{{i.quantity}}</b>\r\n            </div>\r\n          </div>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n    <div class=\"address\">\r\n      <div md-line><b>Address</b></div>\r\n      <hr/>\r\n      <div md-line class=\"mute\">\r\n        {{order.address.line1}}\r\n        <br/> {{order.address.city}}\r\n        <br/> {{order.address.country_code}}\r\n        <br/> {{order.address.postal_code}}\r\n      </div>\r\n    </div>\r\n  </md-card-content>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/admin/order/order-content/order-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderContentComponent = (function () {
    function OrderContentComponent() {
        this.changeOrderStatus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.changePaymentStatus = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.cancelOrder = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
    }
    OrderContentComponent.prototype.ngOnInit = function () {
        this.Settings = __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */];
    };
    OrderContentComponent.prototype.orderStatus = function (order, status) {
        order.status = status.value;
        this.changeOrderStatus.emit(order);
    };
    OrderContentComponent.prototype.paymentStatus = function (order, status) {
        order.payment.state = status.value;
        this.changePaymentStatus.emit(order);
    };
    OrderContentComponent.prototype.cancelOrd = function (order) {
        this.cancelOrder.emit(order);
    };
    return OrderContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OrderContentComponent.prototype, "orders", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OrderContentComponent.prototype, "changeOrderStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OrderContentComponent.prototype, "changePaymentStatus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OrderContentComponent.prototype, "cancelOrder", void 0);
OrderContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'order-content',
        template: __webpack_require__("../../../../../src/app/admin/order/order-content/order-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/order/order-content/order-content.component.css")]
    }),
    __metadata("design:paramtypes", [])
], OrderContentComponent);

//# sourceMappingURL=order-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/order/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"app-content\">\r\n  <md-card>\r\n    <md-card-header class=\"row space-between\">\r\n      <button type=\"button\" md-icon-button md-mini-fab color=\"warn\" routerLink=\"/admin/order\">\r\n        <i class=\"material-icons pull-left\">close</i>\r\n      </button>\r\n      <div class=\"flex\">\r\n        {{header}}\r\n      </div>\r\n      <div>\r\n        <export></export>\r\n      </div>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"item\" [cols]=\"cols\" api=\"orders\" (save)=\"saveOrder($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/order/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailComponent = (function () {
    function OrderDetailComponent(crud, route, router) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.item = {};
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.item = this.route.snapshot.data['order'];
        var products = this.route.snapshot.data['products'];
        products = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](products, function (obj) {
            return { name: obj.name, val: obj._id };
        });
        var users = this.route.snapshot.data['users'];
        users = __WEBPACK_IMPORTED_MODULE_3_lodash__["map"](users, function (obj) {
            return { name: obj.name, val: obj._id };
        });
        var id = this.route.snapshot.params['id'];
        this.header = (id === 'add' || id === 'new') ? "Add New Order" : "Edit Order - " + id;
    };
    OrderDetailComponent.prototype.saveOrder = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('orders/', data).subscribe(function (res) { return _this.router.navigateByUrl("/admin/order"); });
        }
        else {
            this.busy = this.crud.patch('orders/', id, data).subscribe(function (res) { return _this.router.navigateByUrl("/admin/order"); });
        }
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'order-detail',
        template: __webpack_require__("../../../../../src/app/admin/order/order-detail.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], OrderDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=order-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/order/order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <h2><span class=\"mute\">My Account</span> > Customer Orders</h2>\r\n</div>\r\n<div [ngBusy]=\"busy\"></div>\r\n<md-tab-group>\r\n  <md-tab label=\"Pending\" *ngIf=\"pending\">\r\n    <order-content [orders]=\"pending\" (changePaymentStatus)=\"changePaymentStatus($event)\" (changeOrderStatus)=\"changeOrderStatus($event)\"\r\n      (cancelOrder)=\"cancelOrder($event)\"></order-content>\r\n  </md-tab>\r\n  <md-tab label=\"Shipped\" *ngIf=\"shipped\">\r\n    <order-content [orders]=\"shipped\" (changePaymentStatus)=\"changePaymentStatus($event)\" (changeOrderStatus)=\"changeOrderStatus($event)\"\r\n      (cancelOrder)=\"cancelOrder($event)\"></order-content>\r\n  </md-tab>\r\n  <md-tab label=\"Cancelled\" *ngIf=\"cancelled\">\r\n    <order-content [orders]=\"cancelled\" (changePaymentStatus)=\"changePaymentStatus($event)\" (changeOrderStatus)=\"changeOrderStatus($event)\"\r\n      (cancelOrder)=\"cancelOrder($event)\"></order-content>\r\n  </md-tab>\r\n  <md-tab label=\"Delivered\" *ngIf=\"delivered\">\r\n    <order-content [orders]=\"delivered\" (changePaymentStatus)=\"changePaymentStatus($event)\" (changeOrderStatus)=\"changeOrderStatus($event)\"\r\n      (cancelOrder)=\"cancelOrder($event)\"></order-content>\r\n  </md-tab>\r\n</md-tab-group>"

/***/ }),

/***/ "../../../../../src/app/admin/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__ = __webpack_require__("../../../../../src/app/shared/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__base__ = __webpack_require__("../../../../../src/app/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
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








var OrdersComponent = (function (_super) {
    __extends(OrdersComponent, _super);
    function OrdersComponent(crud, snack, auth, _fb, modal) {
        var _this = _super.call(this) || this;
        _this.crud = crud;
        _this.snack = snack;
        _this.auth = auth;
        _this._fb = _fb;
        _this.modal = modal;
        _this.data = [];
        _this.meta = {};
        _this.api = 'orders';
        return _this;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.Settings = __WEBPACK_IMPORTED_MODULE_1__settings__["a" /* Settings */];
        this.populateTabs();
        this.flush(); // Important
        // this.getData({ sort: '-updated_at' });
    };
    OrdersComponent.prototype.populateTabs = function () {
        var _this = this;
        this.busy = this.crud.get('orders/pending', null, true).subscribe(function (data) { _this.pending = data; }, function (err) { _this.snack.open(err, 'OK', { duration: 2000 }); });
        this.busy = this.crud.get('orders/shipped', null, true).subscribe(function (data) { _this.shipped = data; }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        this.busy = this.crud.get('orders/cancelled', null, true).subscribe(function (data) { _this.cancelled = data; }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        this.busy = this.crud.get('orders/delivered', null, true).subscribe(function (data) { _this.delivered = data; }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    OrdersComponent.prototype.changeOrderStatus = function (order) {
        var _this = this;
        this.crud.patch('orders', order._id, order).subscribe(function (data) { _this.populateTabs(); }, function (err) { _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    OrdersComponent.prototype.changePaymentStatus = function (order) {
        var _this = this;
        this.crud.patch('orders', order._id, order).subscribe(function (data) { _this.populateTabs(); }, function (err) { _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    OrdersComponent.prototype.cancelOrder = function (order) {
        var _this = this;
        if (!this.auth.loggedIn) {
            this.modal.login().subscribe();
            return;
        }
        this.modal.cancelOrder()
            .subscribe(function (data) {
            if (!data) {
                _this.message = 'Please tell us why you want to cancel the order';
                return;
            }
            order.status = 'Cancellation Requested';
            order.comment = data.comment;
            _this.crud.patch('orders', order._id, order).subscribe(function (data) {
                _this.snack.open('Order Cancellation Request Successful', 'OK', { duration: 2000 });
            });
        });
    };
    return OrdersComponent;
}(__WEBPACK_IMPORTED_MODULE_7__base__["a" /* default */]));
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'shopnx-order',
        template: __webpack_require__("../../../../../src/app/admin/order/order.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/order/order.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object])
], OrdersComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=order.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/order/order.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderGuard = (function () {
    function OrderGuard(router, crud) {
        this.router = router;
        this.crud = crud;
    }
    OrderGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? true : this.crud.getOne('orders', id)
            .map(function (e) {
            if (e) {
                return true;
            }
        }).catch(function () {
            _this.router.navigate(['/admin/order']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(false);
        });
    };
    return OrderGuard;
}());
OrderGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object])
], OrderGuard);

var _a, _b;
//# sourceMappingURL=order.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/features/features.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product/features/features.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"featuresForm\">\r\n  <td>\r\n    <md-select placeholder=\"Key\" formControlName=\"key\">\r\n      <md-option *ngFor=\"let o of features | unique: 'key'\" value=\"{{o.key}}\">\r\n        {{o.key}}\r\n      </md-option>\r\n    </md-select>\r\n  </td>\r\n  <td>\r\n    <md-select placeholder=\"Value\" formControlName=\"val\">\r\n      <md-option *ngFor=\"let o of features | filter: featuresForm.get('key').value | unique: 'val'\" value=\"{{o.val}}\">\r\n        {{o.val}}\r\n      </md-option>\r\n    </md-select>\r\n  </td>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/product/features/features.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFeaturesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFeaturesComponent = (function () {
    function ProductFeaturesComponent() {
        this.features = [];
    }
    ProductFeaturesComponent.prototype.ngOnInit = function () {
    };
    ProductFeaturesComponent.prototype.err = function (err) {
        console.log(err);
    };
    return ProductFeaturesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductFeaturesComponent.prototype, "features", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('group'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["FormGroup"]) === "function" && _a || Object)
], ProductFeaturesComponent.prototype, "featuresForm", void 0);
ProductFeaturesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'product-features',
        template: __webpack_require__("../../../../../src/app/admin/product/features/features.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/product/features/features.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductFeaturesComponent);

var _a;
//# sourceMappingURL=features.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<form [formGroup]=\"productForm\" (ngSubmit)=\"save(productForm.value)\" autocomplete=\"false\" novalidate>\r\n  <button md-fab class=\"floating-fab\" color=\"accent\" type=\"submit\">\r\n  <md-icon>save</md-icon>\r\n</button>\r\n  <div class=\"app-content\">\r\n    <div class=\"page-title\">\r\n      <button mdButton type=\"button\" md-icon-button routerLink=\"/admin/product\">\r\n        <i class=\"material-icons pull-left\">keyboard_backspace</i>\r\n      </button>\r\n      <span fxHide.lt-sm>{{header}}</span>\r\n      <h3>\r\n\r\n\r\n      </h3>\r\n\r\n    </div>\r\n    <section>\r\n      <article>\r\n        <h3>Product Info</h3>\r\n        <div class=\"column\">\r\n          <div fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"10px\">\r\n            <md-input-container fxFlex>\r\n              <input mdInput type=\"name\" name=\"name\" formControlName=\"name\" placeholder=\"Name\" />\r\n            </md-input-container>\r\n            <md-input-container fxFlex>\r\n              <input mdInput type=\"slug\" name=\"slug\" formControlName=\"slug\" placeholder=\"Slug\" />\r\n            </md-input-container>\r\n            <md-input-container>\r\n              <input mdInput type=\"sku\" name=\"sku\" formControlName=\"sku\" placeholder=\"SKU\" style=\"width:30px\" />\r\n            </md-input-container>\r\n          </div>\r\n          <md-input-container class=\"full-width\">\r\n            <textarea mdInput name=\"description\" formControlName=\"description\" placeholder=\"Description\"></textarea>\r\n          </md-input-container>\r\n        </div>\r\n      </article>\r\n      <article>\r\n        <h3>Settings</h3>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutWrap>\r\n          <md-slide-toggle class=\"mat-primary\" formControlName=\"active\" class=\"pull-left\">Active</md-slide-toggle>\r\n          <md-slide-toggle class=\"mat-warn\" formControlName=\"approved\">Approved</md-slide-toggle>\r\n          <md-slide-toggle class=\"mat-accent\" formControlName=\"hot\">Hot</md-slide-toggle>\r\n          <md-slide-toggle class=\"mat-secondary\" formControlName=\"new\">New</md-slide-toggle>\r\n          <md-slide-toggle class=\"mat-secondary\" formControlName=\"sale\">Sale</md-slide-toggle>\r\n          <md-select placeholder=\"Brand\" formControlName=\"brand\" floatPlaceholder=\"never\">\r\n            <md-option *ngFor=\"let brand of brands\" [value]=\"brand._id\">\r\n              {{brand.name}}\r\n            </md-option>\r\n          </md-select>\r\n          <md-select placeholder=\"Category\" formControlName=\"category\" floatPlaceholder=\"never\">\r\n            <md-option *ngFor=\"let category of categories\" [value]=\"category._id\">\r\n              {{category.name}}\r\n            </md-option>\r\n          </md-select>\r\n        </div>\r\n      </article>\r\n    </section>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutWrap fxFlexOffset=\"20px\">\r\n      <div>\r\n        <div class=\"page-title\">Features\r\n          <button type=\"button\" md-raised-button class=\"mat-primary\" routerLink=\"/admin/features\"><md-icon>spellcheck</md-icon>New Feature</button>\r\n        </div>\r\n        <md-card>\r\n          <md-card-content>\r\n            <table>\r\n              <tbody formArrayName=\"features\">\r\n                <tr *ngFor=\"let f of productForm.get('features')['controls']; let i = index;\">\r\n                  <div [formGroupName]=\"i\">\r\n                    <product-features [features]=\"features\" [group]=\"productForm.get('features')['controls'][i]\"></product-features>\r\n                  </div>\r\n                  <td>\r\n                    <button type=\"button\" md-icon-button (click)=\"removeFeature(i);\">\r\n                      <md-icon>delete</md-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <button type=\"button\" md-button class=\"mat-primary\" (click)=\"addFeature()\">Add another feature</button>\r\n          </md-card-content>\r\n        </md-card>\r\n      </div>\r\n\r\n      <div>\r\n        <div class=\"page-title\">Key Features\r\n          <button type=\"button\" md-raised-button class=\"mat-primary\" routerLink=\"/admin/features\"><md-icon>spellcheck</md-icon>New Key Feature</button></div>\r\n        <md-card>\r\n          <md-card-content>\r\n            <table>\r\n              <tbody formArrayName=\"keyFeatures\">\r\n                <tr *ngFor=\"let f of productForm.get('keyFeatures')['controls']; let i = index;\">\r\n                  <div [formGroupName]=\"i\">\r\n                    <product-features [features]=\"features\" [group]=\"productForm.get('keyFeatures')['controls'][i]\"></product-features>\r\n                  </div>\r\n                  <td>\r\n                    <button type=\"button\" md-icon-button (click)=\"removeKeyFeature(i);\">\r\n                      <md-icon>delete</md-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <button type=\"button\" md-button class=\"mat-primary\" (click)=\"addKeyFeature()\">Add another keyFeatures</button>\r\n          </md-card-content>\r\n        </md-card>\r\n      </div>\r\n      <div fxFlex>\r\n        <div class=\"page-title\">Variants</div>\r\n        <md-card>\r\n          <md-card-content>\r\n            <table>\r\n              <tbody formArrayName=\"variants\">\r\n                <tr *ngFor=\"let f of productForm.get('variants')['controls']; let i = index;\">\r\n                  <div [formGroupName]=\"i\">\r\n                    <shopnx-variants [group]=\"productForm.get('variants')['controls'][i]\"></shopnx-variants>\r\n                  </div>\r\n                  <td>\r\n                    <button type=\"button\" md-icon-button (click)=\"removeVariant(i);\">\r\n                      <md-icon>delete</md-icon>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <button type=\"button\" md-button class=\"mat-primary\" (click)=\"addVariant()\">Add another variant</button>\r\n          </md-card-content>\r\n        </md-card>\r\n      </div>\r\n    </div>\r\n    <!--<div>\r\n      <div class=\"page-title\">Record Info</div>\r\n      <md-card>\r\n        <md-card-content>\r\n          Created At {{product.created_at}} by {{product.vendor_name}}<br/> Modified At {{product.updated_at}} by {{product.vendor_name}}\r\n        </md-card-content>\r\n      </md-card>\r\n    </div>-->\r\n\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/admin/product/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(crud, route, router, _fb, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this._fb = _fb;
        this.snack = snack;
        this.product = {};
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.get('brands').subscribe(function (data) { return _this.brands = data; }, function (error) { return _this.snack.open(error, 'OK', { duration: 2000 }); });
        this.crud.get('categories/all').subscribe(function (data) { return _this.categories = data; }, this.handleError);
        this.crud.get('features').subscribe(function (data) { return _this.features = data; }, this.handleError);
        this.product = this.route.snapshot.data['product']; // Comes from product.resolve.ts
        var users = this.route.snapshot.data['users'];
        var id = this.route.snapshot.params['id'];
        this.header = (id === 'add' || id === 'new') ? "Add New Product" : "Edit Product - " + id;
        this.productForm = this._fb.group({
            sku: [this.product.sku, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            name: [this.product.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            slug: [this.product.slug, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            description: [this.product.description, []],
            brand: [this.product.brand, []],
            category: [this.product.category, []],
            active: [this.product.active, []],
            approved: [this.product.approved, []],
            hot: [this.product.hot, []],
            new: [this.product.new, []],
            sale: [this.product.sale, []],
            variants: this._fb.array([]),
            features: this._fb.array([]),
            keyFeatures: this._fb.array([]),
        });
        this.addFeature(this.product.features);
        this.addVariant(this.product.variants);
        this.addKeyFeature(this.product.keyFeatures);
        this.cols = [
            { field: 'productType', heading: 'Product Type', dataType: 'select', options: ['Individual', 'Company'] },
        ];
    };
    ProductDetailComponent.prototype.initFeature = function (a) {
        return this._fb.group({ key: [a.key], val: [a.val] });
    };
    ProductDetailComponent.prototype.addFeature = function (a) {
        var _this = this;
        var control = this.productForm.get('features');
        if (!a) {
            var addrCtrl = this.initFeature({});
            control.push(addrCtrl);
        }
        else {
            a.forEach(function (element) {
                var addrCtrl = _this.initFeature(element);
                control.push(addrCtrl);
            });
        }
    };
    ProductDetailComponent.prototype.initVariant = function (a) {
        return this._fb.group({ size: [a.size], weight: [a.weight], mrp: [a.mrp], price: [a.price], image: [a.image] });
    };
    ProductDetailComponent.prototype.addVariant = function (a) {
        var _this = this;
        var control = this.productForm.get('variants');
        if (!a) {
            var addrCtrl = this.initVariant({});
            control.push(addrCtrl);
        }
        else {
            a.forEach(function (element) {
                var addrCtrl = _this.initVariant(element);
                control.push(addrCtrl);
            });
        }
    };
    ProductDetailComponent.prototype.addKeyFeature = function (a) {
        var _this = this;
        var control = this.productForm.get('keyFeatures');
        if (!a) {
            var addrCtrl = this.initFeature({});
            control.push(addrCtrl);
        }
        else {
            a.forEach(function (element) {
                var addrCtrl = _this.initFeature(element);
                control.push(addrCtrl);
            });
        }
    };
    ProductDetailComponent.prototype.removeFeature = function (a) {
        var control = this.productForm.get('features');
        control.removeAt(a);
    };
    ProductDetailComponent.prototype.removeKeyFeature = function (a) {
        var control = this.productForm.get('keyFeatures');
        control.removeAt(a);
    };
    ProductDetailComponent.prototype.removeVariant = function (a) {
        var control = this.productForm.get('variants');
        control.removeAt(a);
    };
    ProductDetailComponent.prototype.handleError = function (error) {
        this.snack.open(error, 'OK', { duration: 2000 });
    };
    ProductDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('products', data).subscribe(function (res) { return _this.router.navigateByUrl("/admin/product"); }, function (err) { return _this.snack.open(err, 'OK'); });
        }
        else {
            this.busy = this.crud.patch('products', id, data).subscribe(function (res) { return _this.router.navigateByUrl("/admin/product"); }, function (err) { return _this.snack.open(err, 'OK'); });
        }
    };
    ProductDetailComponent.prototype.changeSale = function (product) {
        this.save(product);
    };
    ;
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'product-detail-component',
        template: __webpack_require__("../../../../../src/app/admin/product/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/product/product-detail/product.component.scss")]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["r" /* MdSnackBar */]) === "function" && _e || Object])
], ProductDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/product-detail/product.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody tr {\n  background-color: transparent;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n\nsection {\n  color: #222222;\n  margin: 20px; }\n  section article {\n    background: #ffffff;\n    padding: 20px;\n    border-radius: 3px;\n    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1); }\n  section article h3 {\n    color: #222222;\n    font-family: Oswald; }\n  section article p, section div {\n    color: #555555; }\n\n.input {\n  -ms-flex-preferred-size: 30%;\n      flex-basis: 30%; }\n\ntextarea {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\n.full-width {\n  width: 100%; }\n\n.floating-fab {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  z-index: 1000; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product/product.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return product; });
var product = (function () {
    function product() {
    }
    return product;
}());

product.fields = [
    { field: 'image', dataType: 'product-image' },
    { field: 'name', dataType: 'product-detail', id: '_id', slug: 'slug' },
    { field: 'active', dataType: 'boolean' },
];
//# sourceMappingURL=product.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/product.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductGuard = (function () {
    function ProductGuard(router, crud) {
        this.router = router;
        this.crud = crud;
    }
    ProductGuard.prototype.canActivate = function (route) {
        var _this = this;
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? true : this.crud.getOne('products', id)
            .map(function (e) {
            if (e) {
                return true;
            }
        }).catch(function () {
            _this.router.navigate(['/admin/product']);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].of(false);
        });
    };
    return ProductGuard;
}());
ProductGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object])
], ProductGuard);

var _a, _b;
//# sourceMappingURL=product.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/products.component.html":
/***/ (function(module, exports) {

module.exports = "<button md-fab class=\"floating-fab\" *ngIf=\"!no.add\" color=\"accent\" routerLink=\"/admin/product/new\">\r\n  <md-icon>add</md-icon>\r\n</button>\r\n<div [ngBusy]=\"busy\"></div>\r\n\r\n<div class=\"app-content cp-container\">\r\n  <md-card fxFlex>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"example-scrolling-content\">\r\n      <h3>{{title}}</h3>\r\n      <span class=\"app-toolbar-filler\"></span>\r\n      <div *ngIf=\"!no.search\">\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false\">\r\n          <md-icon class=\"filtericon\">search</md-icon>\r\n        </button>\r\n        <md-input-container *ngIf=\"showFilter\" fxFlex>\r\n          <input type=\"text\" [value]=\"filterText\" placeholder=\"Filter Name\" [formControl]=\"filterInput\" mdInput autofocus/>\r\n        </md-input-container>\r\n        <button md-icon-button *ngIf=\"showFilter\" (click)=\"showFilter=false;filterText='';flush();getData({ sort: '-updated_at' })\">\r\n          <md-icon class=\"filtericon\">close</md-icon>\r\n        </button>\r\n        <button md-icon-button *ngIf=\"!showFilter\" (click)=\"showFilter=true\">\r\n          <md-icon>filter_list</md-icon>\r\n        </button>\r\n      </div>\r\n      <export [data]=\"data\" *ngIf=\"!no.export\"></export>\r\n    </div>\r\n\r\n    <div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <md-card *ngIf=\"!meta.busy && data.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n        <div>No {{title}} found</div>\r\n      </md-card>\r\n    </div>\r\n\r\n    <div infiniteScroll infiniteScrollDistance=\"2\" infiniteScrollThrottle=\"500\" (scrolled)=\"scroll()\" scrollWindow=\"false\" id=\"exportable\"\r\n      *ngIf=\"data.length>0\">\r\n      <table>\r\n        <thead>\r\n          <tr>\r\n            <th>#</th>\r\n            <th *ngFor=\"let h of fie\">\r\n              <a class=\"sort\" (click)=\"reverse=!reverse;order(h.field)\" *ngIf=\"!no.sort && !h.noSort\" fxLayout=\"row\">\r\n                {{h.heading | labelcase}}\r\n                <md-icon *ngIf=\"reverse && h.field === sort.predicate\">arrow_downward</md-icon>\r\n                <md-icon *ngIf=\"!reverse && h.field === sort.predicate\">arrow_upwards</md-icon>\r\n              </a>\r\n              <span *ngIf=\"no.sort || h.noSort\">\r\n                {{h.heading | labelcase}}\r\n              </span>\r\n            </th>\r\n            <th>Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let d of data; let i = index;\">\r\n            <td>{{i+1}}</td>\r\n            <td *ngFor=\"let f of fie\" [ngSwitch]=\"f.dataType\">\r\n              <ng-template v-if=\"d.variants[0]\">\r\n                <img src=\"{{d[f.field]}}\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'image'\" />\r\n                <img src=\"{{d.variants[0].image}}\" err-src=\"/assets/img/1px.png\" width=\"100px\" *ngSwitchCase=\"'product-image'\" />\r\n              </ng-template>\r\n              <span *ngSwitchCase=\"'date'\">{{d[f.field] | date}}</span>\r\n              <!--<md-slide-toggle [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\"></md-slide-toggle>-->\r\n              <md-checkbox [checked]=\"d[f.field]\" *ngSwitchCase=\"'boolean'\" disabled=\"true\"></md-checkbox>\r\n              <a *ngSwitchCase=\"'product-detail'\" routerLink=\"/product/{{d[f.slug]}}/{{d[f.id]}}\">{{d[f.field]}}</a>\r\n              <span *ngSwitchDefault>{{d[f.field]}}</span>\r\n            </td>\r\n            <td>\r\n              <button *ngIf=\"!no.clone\" md-icon-button (click)=\"clone(d)\">\r\n                <md-icon>content_copy</md-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.edit\" md-icon-button routerLink=\"{{url}}/{{d._id}}\">\r\n                <md-icon>edit</md-icon>\r\n              </button>\r\n              <button *ngIf=\"!no.delete\" md-icon-button (click)=\"delete(d)\">\r\n                <md-icon>delete</md-icon>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div style=\"text-align:center\" *ngIf=\"!meta.busy\">\r\n      <button md-button md-raised-button (click)=\"scroll()\" *ngIf=\"!meta.end\">\r\n        <md-icon>arrow_downwards</md-icon>Load More...</button>\r\n    </div>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/product/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_helper__ = __webpack_require__("../../../../../src/app/shared/services/crud.helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_fields__ = __webpack_require__("../../../../../src/app/admin/product/product.fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__base__ = __webpack_require__("../../../../../src/app/base.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
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









var ProductsComponent = (function (_super) {
    __extends(ProductsComponent, _super);
    function ProductsComponent(crud, snack, helper, route, modal) {
        var _this = _super.call(this) || this;
        _this.crud = crud;
        _this.snack = snack;
        _this.helper = helper;
        _this.route = route;
        _this.modal = modal;
        _this.no = {};
        _this.title = 'Products';
        _this.api = 'products/my';
        _this.api2 = 'products';
        _this.showFilter = false;
        _this.data = [];
        _this.loading = false;
        _this.meta = {};
        _this.filterInput = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]();
        _this.no = {};
        _this.fields = __WEBPACK_IMPORTED_MODULE_7__product_fields__["a" /* product */].fields;
        return _this;
    }
    ProductsComponent.prototype.ngOnInit = function () {
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
    ProductsComponent.prototype.change = function (type) {
        this.flush();
        this.loading = true;
        this.getData({ type: type });
    };
    ProductsComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    return ProductsComponent;
}(__WEBPACK_IMPORTED_MODULE_8__base__["a" /* default */]));
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
        selector: 'shopnx-products',
        template: __webpack_require__("../../../../../src/app/admin/product/products.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_helper__["a" /* CrudHelper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_helper__["a" /* CrudHelper */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_service__["a" /* ModalService */]) === "function" && _e || Object])
], ProductsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/products.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsGuard = (function () {
    function ProductsGuard(router, crud, modal) {
        this.router = router;
        this.crud = crud;
        this.modal = modal;
    }
    ProductsGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.crud.get('products', null, true)
            .map(function (e) { if (e) {
            return true;
        } }).catch(function () {
            _this.modal.login().subscribe();
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(false);
        });
    };
    return ProductsGuard;
}());
ProductsGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], ProductsGuard);

var _a, _b, _c;
//# sourceMappingURL=products.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/product/variants/variants.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\r\n  width:52px;\r\n  height:auto;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);\r\n}\r\ntd img {\r\n    width: 52px;\r\n    margin: 0 10px 0 0;\r\n    padding: 1px;\r\n    border: 1px solid #eee;\r\n    background-color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product/variants/variants.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"variantsForm\">\r\n  <td>\r\n    <img src=\"{{variantsForm.value?.image}}\" alt=\"\" />\r\n  </td>\r\n  <td>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"size\" placeholder=\"Size\" />\r\n    </md-input-container>\r\n  </td>\r\n  <td>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"weight\" placeholder=\"Weight\" />\r\n    </md-input-container>\r\n  </td>\r\n  <td>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"mrp\" placeholder=\"MRP\" />\r\n    </md-input-container>\r\n  </td>\r\n  <td>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"price\" placeholder=\"Price\" />\r\n    </md-input-container>\r\n  </td>\r\n  <td>\r\n    <md-input-container>\r\n      <input mdInput formControlName=\"image\" placeholder=\"Image\" />\r\n      <md-icon mdPrefix (click)=\"chooseImage() \" class=\"pointer \">image</md-icon>\r\n\r\n    </md-input-container>\r\n  </td>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/product/variants/variants.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_media_media_library__ = __webpack_require__("../../../../../src/app/shared/media/media-library.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VariantsComponent = (function () {
    function VariantsComponent(dialog) {
        this.dialog = dialog;
    }
    VariantsComponent.prototype.ngOnInit = function () {
    };
    VariantsComponent.prototype.err = function (err) {
        console.log(err);
    };
    VariantsComponent.prototype.chooseImage = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__shared_media_media_library__["a" /* MediaLibraryModal */], {
            width: '80%',
            height: '80%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.variantsForm.get('image').setValue(result);
            }
        });
    };
    return VariantsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])('group'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]) === "function" && _a || Object)
], VariantsComponent.prototype, "variantsForm", void 0);
VariantsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'shopnx-variants',
        template: __webpack_require__("../../../../../src/app/admin/product/variants/variants.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/product/variants/variants.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MdDialog */]) === "function" && _b || Object])
], VariantsComponent);

var _a, _b;
//# sourceMappingURL=variants.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reviews/review-detail/review-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/reviews/review-detail/review-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button type=\"button\" md-button md-raised-button routerLink=\"/admin/reviews\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"review\" [fields]=\"fields\" api=\"reviews\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/reviews/review-detail/review-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__review_fields__ = __webpack_require__("../../../../../src/app/admin/reviews/review.fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReviewDetailComponent = (function () {
    function ReviewDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
    }
    ReviewDetailComponent.prototype.ngOnInit = function () {
        this.review = this.route.snapshot.data['review'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New Review" : "Edit Review - " + id;
        this.fields = __WEBPACK_IMPORTED_MODULE_0__review_fields__["a" /* review */].fields;
    };
    ReviewDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('reviews', data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/reviews"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
        else {
            this.busy = this.crud.patch('reviews', id, data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/reviews"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
    };
    return ReviewDetailComponent;
}());
ReviewDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'shopnx-review-detail',
        template: __webpack_require__("../../../../../src/app/admin/reviews/review-detail/review-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/reviews/review-detail/review-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], ReviewDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=review-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reviews/review.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return review; });
var review = (function () {
    function review() {
    }
    return review;
}());

review.fields = [
    { field: 'pid', heading: 'Product ID', dataType: 'product-detail', id: 'pid', slug: 'pslug' },
    { field: 'pname', heading: 'Product Name' },
    { field: 'reviewer' },
    { field: 'email' },
    { field: 'message' },
    { field: 'rating', dataType: 'number' },
    { field: 'created', dataType: 'date' }
];
//# sourceMappingURL=review.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reviews/review.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewResolve = (function () {
    function ReviewResolve(crud) {
        this.crud = crud;
    }
    ReviewResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('reviews', id);
    };
    return ReviewResolve;
}());
ReviewResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], ReviewResolve);

var _a;
//# sourceMappingURL=review.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\r\n    margin-bottom: 10px;\r\n}\r\nmd-card{\r\n    margin: 2%;\r\n}\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Reviews\" api=\"reviews\" [fields]=\"fields\" [no]=\"no\"></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_fields__ = __webpack_require__("../../../../../src/app/admin/reviews/review.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = (function () {
    function ReviewsComponent(crud, snack) {
        this.crud = crud;
        this.snack = snack;
        this.fields = __WEBPACK_IMPORTED_MODULE_3__review_fields__["a" /* review */].fields;
        this.no = { add: true };
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.busy = this.crud.get('reviews', null, true).subscribe(this.success, this.err);
    };
    ReviewsComponent.prototype.success = function (data) {
        this.reviews = data;
    };
    ReviewsComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    return ReviewsComponent;
}());
ReviewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-reviews',
        template: __webpack_require__("../../../../../src/app/admin/reviews/reviews.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/reviews/reviews.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object])
], ReviewsComponent);

var _a, _b;
//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button md-button md-raised-button routerLink=\"/admin/shippings\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"shipping\" [fields]=\"fields\" api=\"shippings\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shipping_fields__ = __webpack_require__("../../../../../src/app/admin/shipping/shipping.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShippingDetailComponent = (function () {
    function ShippingDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
    }
    ShippingDetailComponent.prototype.ngOnInit = function () {
        this.shipping = this.route.snapshot.data['shipping'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New shipping" : "Edit shipping - " + id;
        this.fields = __WEBPACK_IMPORTED_MODULE_4__shipping_fields__["a" /* fields */].shipping;
    };
    ShippingDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('shippings', data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/shippings"); }, function (err) { return _this.snack.open(err, 'OK'); });
        }
        else {
            this.busy = this.crud.patch('shippings', id, data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/shippings"); }, function (err) { return _this.snack.open(err, 'OK'); });
        }
    };
    return ShippingDetailComponent;
}());
ShippingDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-shipping-detail',
        template: __webpack_require__("../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/shipping/shipping-detail/shipping-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], ShippingDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shipping-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Shippings\" api=\"shippings\" [fields]=\"fields\" [no]=\"no\"></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shipping_fields__ = __webpack_require__("../../../../../src/app/admin/shipping/shipping.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShippingComponent = (function () {
    function ShippingComponent(crud, snack) {
        this.crud = crud;
        this.snack = snack;
        this.fields = __WEBPACK_IMPORTED_MODULE_3__shipping_fields__["a" /* fields */].shipping;
        this.no = {};
    }
    ShippingComponent.prototype.ngOnInit = function () {
        this.crud.get('shippings', null, true).subscribe(this.success, this.err);
    };
    ShippingComponent.prototype.success = function (data) {
        this.shipping = data;
    };
    ShippingComponent.prototype.err = function (err) {
        this.snack.open(err, 'OK', { duration: 2000 });
    };
    return ShippingComponent;
}());
ShippingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'shopnx-shipping',
        template: __webpack_require__("../../../../../src/app/admin/shipping/shipping.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/shipping/shipping.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object])
], ShippingComponent);

var _a, _b;
//# sourceMappingURL=shipping.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fields; });
var fields = (function () {
    function fields() {
    }
    return fields;
}());

fields.shipping = [
    { field: 'carrier' },
    { field: 'charge', dataType: 'currency' },
    { field: 'minWeight', dataType: 'number' },
    { field: 'maxWeight', dataType: 'number' },
    { field: 'freeShipping', dataType: 'currency' },
    { field: 'active', dataType: 'boolean' }
];
//# sourceMappingURL=shipping.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/shipping/shipping.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShippingResolve = (function () {
    function ShippingResolve(crud) {
        this.crud = crud;
    }
    ShippingResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? {} : this.crud.getOne('shippings', id);
    };
    return ShippingResolve;
}());
ShippingResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], ShippingResolve);

var _a;
//# sourceMappingURL=shipping.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/user/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/user/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex.gt-md=\"40\" fxFlex.gt-sm=\"50\" fxFlex=\"60\" fxFlex.xs=\"90\">\r\n    <md-card-header fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <h3>{{title}}</h3>\r\n      <button md-button md-raised-button routerLink=\"/admin/users\" class=\"close\">Back<md-icon>keyboard_return</md-icon></button>\r\n    </md-card-header>\r\n    <md-card-content>\r\n      <edit [item]=\"user\" [fields]=\"fields\" api=\"users\" (save)=\"save($event)\"></edit>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin/user/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_fields__ = __webpack_require__("../../../../../src/app/admin/user/user.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailComponent = (function () {
    function UserDetailComponent(crud, route, router, snack) {
        this.crud = crud;
        this.route = route;
        this.router = router;
        this.snack = snack;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        this.user = this.route.snapshot.data['user'];
        var id = this.route.snapshot.params['id'];
        this.title = (id === 'add' || id === 'new') ? "Add New user" : "Edit user - " + id;
        this.fields = __WEBPACK_IMPORTED_MODULE_4__user_fields__["a" /* user */].fields;
    };
    UserDetailComponent.prototype.save = function (data) {
        var _this = this;
        if (!data) {
            return;
        }
        delete data['_id'];
        var id = this.route.snapshot.params['id'];
        if (id === 'add' || id === 'new') {
            this.busy = this.crud.post('users', data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/users"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
        else {
            this.busy = this.crud.patch('users', id, data).subscribe(function (data) { return _this.router.navigateByUrl("/admin/users"); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        }
    };
    return UserDetailComponent;
}());
UserDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'shopnx-user-detail',
        template: __webpack_require__("../../../../../src/app/admin/user/user-detail/user-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/user/user-detail/user-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _d || Object])
], UserDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<crud-list title=\"Users\" api=\"users\" [fields]=\"fields\" [no]=no></crud-list>"

/***/ }),

/***/ "../../../../../src/app/admin/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_fields__ = __webpack_require__("../../../../../src/app/admin/user/user.fields.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent() {
        this.fields = __WEBPACK_IMPORTED_MODULE_1__user_fields__["a" /* user */].fields;
        this.no = { add: true, export: true, delete: true, clone: true };
    }
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'account-user',
        template: __webpack_require__("../../../../../src/app/admin/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserComponent);

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/user/user.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return user; });

var user = (function () {
    function user() {
    }
    return user;
}());

user.fields = [
    { field: 'name' },
    { field: 'role', dataType: 'select', options: __WEBPACK_IMPORTED_MODULE_0__settings__["a" /* Settings */].userRoles },
    { field: 'avatar', dataType: 'image' },
    { field: 'active', dataType: 'boolean' }
];
//# sourceMappingURL=user.fields.js.map

/***/ }),

/***/ "../../../../../src/app/admin/user/user.resolve.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolve; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserResolve = (function () {
    function UserResolve(crud) {
        this.crud = crud;
    }
    UserResolve.prototype.resolve = function (route) {
        var id = route.params['id'];
        return (id === 'add' || id === 'new') ? undefined : this.crud.getOne('users', id, true);
    };
    return UserResolve;
}());
UserResolve = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object])
], UserResolve);

var _a;
//# sourceMappingURL=user.resolve.js.map

/***/ }),

/***/ "../../../../../src/app/admin/user/users.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersGuard = (function () {
    function UsersGuard(router, crud, modal) {
        this.router = router;
        this.crud = crud;
        this.modal = modal;
    }
    UsersGuard.prototype.canActivate = function (route) {
        var _this = this;
        return this.crud.get('users', null, true)
            .map(function (e) { if (e) {
            return true;
        } }).catch(function () {
            // this.router.navigate(['/account/login', { returnUrl: '/admin/users' }]);
            _this.modal.login().subscribe();
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].of(false);
        });
    };
    return UsersGuard;
}());
UsersGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_crud_service__["a" /* CrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], UsersGuard);

var _a, _b, _c;
//# sourceMappingURL=users.guard.js.map

/***/ }),

/***/ "../../../../../src/app/admin/wishlist/wishlist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".description{\r\n    margin-bottom: 10px;\r\n}\r\nmd-card{\r\n    margin: 2%;\r\n}\r\n.total{\r\n    margin-bottom: 10px;\r\n}\r\nimg{\r\n    height:180px;\r\n    margin-bottom:10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/wishlist/wishlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <h2><span class=\"mute\">My Account</span> > Wishlist</h2>\r\n    <!--<md-input-container>\r\n        <input mdInput placeholder=\"Search Wishlist\" [disabled]=\"!wishlists || wishlists.length===0\">\r\n    </md-input-container>-->\r\n</div>\r\n<div [ngBusy]=\"busy\"></div>\r\n<div class=\"mt20\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <md-card *ngIf=\"!wishlists || wishlists.length===0\" class=\"noproduct\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n        <div>Wishlist is empty</div>\r\n    </md-card>\r\n</div>\r\n<md-card *ngFor=\"let wish of wishlists;let i = index;\">\r\n    <button md-button md-icon-button (click)=\"delete(wish._id)\" class=\"close\"><md-icon>close</md-icon></button>\r\n    <md-card-content fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between start\">\r\n        <div class=\"description\" fxFlex>\r\n            <md-list>\r\n                <md-list-item fxLayout=\"row\" fxLayout.xs=\"column\">\r\n                    <img md-list-avatar [src]=\"wish.variant.image\" class=\"img\" onError=\"this.src='/assets/img/product-placeholder.png'\" />\r\n                    <div fxFlexOffset=\"2\">\r\n                        <div md-line><b><a class=\"product-link\" routerLink=\"/product/{{wish.product.slug}}/{{wish.product._id}}\">{{wish.product.name}}</a></b></div>\r\n                        <div md-line><b>Price:</b> {{wish.variant.price | currency : Settings.currency.code : true}} </div>\r\n                        <div md-line><b>Size:</b> {{wish.variant.size}} </div>\r\n                        <div md-line><b>Created:</b> {{wish.created | date}} </div>\r\n                        <br/>\r\n                        <cart-buttons [variant]=\"wish.variant\" [product]=\"wish.product\"></cart-buttons>\r\n                    </div>\r\n                </md-list-item>\r\n            </md-list>\r\n        </div>\r\n        <div class=\"address\" fxFlex=\"30\" fxFlex.xs=\"100\">\r\n            <div md-line><b>Features</b></div>\r\n            <hr/>\r\n            <div md-line class=\"mute\">\r\n                <p md-line *ngFor=\"let f of wish.product.keyFeatures\"> {{f.key}}: {{f.val}}</p>\r\n            </div>\r\n        </div>\r\n    </md-card-content>\r\n\r\n    <!--<md-card-content>\r\n        <md-list>\r\n            <md-list-item>\r\n                <img md-list-avatar [src]=\"wish.variant.image\" onError=\"this.src='/assets/img/product-placeholder.png'\" class=\"pull-left\"\r\n                />\r\n                <h4 md-line><a routerLink=\"/product/{{wish.product.slug}}/{{wish.product._id}}\">{{wish.product.name}}</a></h4>\r\n                <p md-line> Size: {{wish.variant.size}}</p>\r\n                <p md-line> Weight: {{wish.variant.weight}}</p>\r\n                <p md-line> Price: {{wish.variant.price}}</p>\r\n                <p md-line> Created: {{wish.created | date}} </p>\r\n            </md-list-item>\r\n        </md-list>\r\n    </md-card-content>-->\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/admin/wishlist/wishlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__ = __webpack_require__("../../../../../src/app/modal/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__ = __webpack_require__("../../../../../src/app/shared/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wishlist_fields__ = __webpack_require__("../../../../../src/app/admin/wishlist/wishlist.fields.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("../../../../../src/app/settings.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistComponent = (function () {
    function WishlistComponent(crud, snack, modal) {
        this.crud = crud;
        this.snack = snack;
        this.modal = modal;
        this.fields = __WEBPACK_IMPORTED_MODULE_4__wishlist_fields__["a" /* wishlist */].fields;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.Settings = __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* Settings */];
        this.get();
    };
    WishlistComponent.prototype.get = function () {
        var _this = this;
        this.busy = this.crud.get('wishlists/my', null, true).subscribe(function (data) { return _this.wishlists = data; }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
    };
    WishlistComponent.prototype.delete = function (id) {
        var _this = this;
        this.modal.confirm("Are you sure?", "").subscribe(function (data) {
            if (data)
                _this.crud.delete('wishlists', id, true).subscribe(function (data) { return _this.get(); }, function (err) { return _this.snack.open(err, 'OK', { duration: 2000 }); });
        });
    };
    return WishlistComponent;
}());
WishlistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'shopnx-wishlist',
        template: __webpack_require__("../../../../../src/app/admin/wishlist/wishlist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/wishlist/wishlist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_crud_service__["a" /* CrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__modal_modal_service__["a" /* ModalService */]) === "function" && _c || Object])
], WishlistComponent);

var _a, _b, _c;
//# sourceMappingURL=wishlist.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/wishlist/wishlist.fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wishlist; });
var wishlist = (function () {
    function wishlist() {
    }
    return wishlist;
}());

wishlist.fields = [{ field: 'name' }, { field: '_id' }, { field: 'image', type: 'image' }, { field: 'active', type: 'boolean' }];
//# sourceMappingURL=wishlist.fields.js.map

/***/ }),

/***/ "../../../../angular-tree-component/dist/angular-tree-component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_angular__ = __webpack_require__("../../../../mobx-angular/dist/mobx-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_tree_options_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-options.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_keys__ = __webpack_require__("../../../../angular-tree-component/dist/constants/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_tree_node_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-node.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_tree_virtual_scroll_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-virtual-scroll.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_loading_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/loading.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_tree_node_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tree_node_content_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-content.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tree_node_drop_slot_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-drop-slot.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_tree_node_expander_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-expander.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_tree_node_children_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-children.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_tree_node_collection_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-collection.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_tree_node_wrapper_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-node-wrapper.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_tree_viewport_component__ = __webpack_require__("../../../../angular-tree-component/dist/components/tree-viewport.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__directives_tree_drop_directive__ = __webpack_require__("../../../../angular-tree-component/dist/directives/tree-drop.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__directives_tree_drag_directive__ = __webpack_require__("../../../../angular-tree-component/dist/directives/tree-drag.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__directives_tree_animate_open_directive__ = __webpack_require__("../../../../angular-tree-component/dist/directives/tree-animate-open.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__polyfills__ = __webpack_require__("../../../../angular-tree-component/dist/polyfills.js");
/* unused harmony reexport TreeModel */
/* unused harmony reexport TreeNode */
/* unused harmony reexport TreeDraggedElement */
/* unused harmony reexport TreeVirtualScroll */
/* unused harmony reexport TREE_ACTIONS */
/* unused harmony reexport KEYS */
/* unused harmony reexport LoadingComponent */
/* unused harmony reexport TreeComponent */
/* unused harmony reexport TreeNodeComponent */
/* unused harmony reexport TreeNodeContent */
/* unused harmony reexport TreeDropDirective */
/* unused harmony reexport TreeDragDirective */
/* unused harmony reexport TreeNodeExpanderComponent */
/* unused harmony reexport TreeNodeChildrenComponent */
/* unused harmony reexport TreeNodeDropSlot */
/* unused harmony reexport TreeNodeCollectionComponent */
/* unused harmony reexport TreeViewportComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModule; });
























var TreeModule = (function () {
    function TreeModule() {
    }
    return TreeModule;
}());

TreeModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                declarations: [
                    __WEBPACK_IMPORTED_MODULE_10__components_tree_component__["a" /* TreeComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__components_tree_node_component__["a" /* TreeNodeComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__components_tree_node_content_component__["a" /* TreeNodeContent */],
                    __WEBPACK_IMPORTED_MODULE_9__components_loading_component__["a" /* LoadingComponent */],
                    __WEBPACK_IMPORTED_MODULE_19__directives_tree_drop_directive__["a" /* TreeDropDirective */],
                    __WEBPACK_IMPORTED_MODULE_20__directives_tree_drag_directive__["a" /* TreeDragDirective */],
                    __WEBPACK_IMPORTED_MODULE_14__components_tree_node_expander_component__["a" /* TreeNodeExpanderComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__components_tree_node_children_component__["a" /* TreeNodeChildrenComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__components_tree_node_drop_slot_component__["a" /* TreeNodeDropSlot */],
                    __WEBPACK_IMPORTED_MODULE_16__components_tree_node_collection_component__["a" /* TreeNodeCollectionComponent */],
                    __WEBPACK_IMPORTED_MODULE_18__components_tree_viewport_component__["a" /* TreeViewportComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__components_tree_node_wrapper_component__["a" /* TreeNodeWrapperComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__directives_tree_animate_open_directive__["a" /* TreeAnimateOpenDirective */]
                ],
                exports: [
                    __WEBPACK_IMPORTED_MODULE_10__components_tree_component__["a" /* TreeComponent */],
                    __WEBPACK_IMPORTED_MODULE_11__components_tree_node_component__["a" /* TreeNodeComponent */],
                    __WEBPACK_IMPORTED_MODULE_12__components_tree_node_content_component__["a" /* TreeNodeContent */],
                    __WEBPACK_IMPORTED_MODULE_9__components_loading_component__["a" /* LoadingComponent */],
                    __WEBPACK_IMPORTED_MODULE_19__directives_tree_drop_directive__["a" /* TreeDropDirective */],
                    __WEBPACK_IMPORTED_MODULE_20__directives_tree_drag_directive__["a" /* TreeDragDirective */],
                    __WEBPACK_IMPORTED_MODULE_14__components_tree_node_expander_component__["a" /* TreeNodeExpanderComponent */],
                    __WEBPACK_IMPORTED_MODULE_15__components_tree_node_children_component__["a" /* TreeNodeChildrenComponent */],
                    __WEBPACK_IMPORTED_MODULE_13__components_tree_node_drop_slot_component__["a" /* TreeNodeDropSlot */],
                    __WEBPACK_IMPORTED_MODULE_16__components_tree_node_collection_component__["a" /* TreeNodeCollectionComponent */],
                    __WEBPACK_IMPORTED_MODULE_18__components_tree_viewport_component__["a" /* TreeViewportComponent */],
                    __WEBPACK_IMPORTED_MODULE_17__components_tree_node_wrapper_component__["a" /* TreeNodeWrapperComponent */],
                    __WEBPACK_IMPORTED_MODULE_21__directives_tree_animate_open_directive__["a" /* TreeAnimateOpenDirective */]
                ],
                imports: [
                    __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                    __WEBPACK_IMPORTED_MODULE_2_mobx_angular__["a" /* MobxAngularModule */]
                ],
                providers: [
                    __WEBPACK_IMPORTED_MODULE_7__models_tree_dragged_element_model__["a" /* TreeDraggedElement */]
                ]
            },] },
];
/** @nocollapse */
TreeModule.ctorParameters = function () { return []; };
/* unused harmony default export */ var _unused_webpack_default_export = (TreeModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9hbmd1bGFyLXRyZWUtY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFBLEVBQVMsTUFBWSxlQUFBLENBQWdCO0FBQzlDLE9BQU8sRUFBRSxZQUFBLEVBQWEsTUFBTyxpQkFBQSxDQUFrQjtBQUMvQyxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxjQUFBLENBQWU7QUFFakQsT0FBTyxFQUFFLFlBQUEsRUFBNkMsTUFBTyw2QkFBQSxDQUE4QjtBQUUzRixPQUFPLEVBQUUsSUFBQSxFQUFLLE1BQU8sa0JBQUEsQ0FBbUI7QUFDeEMsT0FBTyxFQUFFLFNBQUEsRUFBVSxNQUFPLHFCQUFBLENBQXNCO0FBQ2hELE9BQU8sRUFBRSxRQUFBLEVBQVMsTUFBTywwQkFBQSxDQUEyQjtBQUNwRCxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxxQ0FBQSxDQUFzQztBQUN6RSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxvQ0FBQSxDQUFxQztBQUN2RSxPQUFPLEVBQUUsZ0JBQUEsRUFBaUIsTUFBTyxnQ0FBQSxDQUFpQztBQUNsRSxPQUFPLEVBQUUsYUFBQSxFQUFjLE1BQU8sNkJBQUEsQ0FBOEI7QUFDNUQsT0FBTyxFQUFFLGlCQUFBLEVBQWtCLE1BQU8sa0NBQUEsQ0FBbUM7QUFDckUsT0FBTyxFQUFFLGVBQUEsRUFBZ0IsTUFBTywwQ0FBQSxDQUEyQztBQUMzRSxPQUFPLEVBQUUsZ0JBQUEsRUFBaUIsTUFBTyw0Q0FBQSxDQUE2QztBQUM5RSxPQUFPLEVBQUUseUJBQUEsRUFBMEIsTUFBTywyQ0FBQSxDQUE0QztBQUN0RixPQUFPLEVBQUUseUJBQUEsRUFBMEIsTUFBTywyQ0FBQSxDQUE0QztBQUN0RixPQUFPLEVBQUUsMkJBQUEsRUFBNEIsTUFBTyw2Q0FBQSxDQUE4QztBQUMxRixPQUFPLEVBQUUsd0JBQUEsRUFBeUIsTUFBTywwQ0FBQSxDQUEyQztBQUNwRixPQUFPLEVBQUUscUJBQUEsRUFBc0IsTUFBTyxzQ0FBQSxDQUF1QztBQUM3RSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxrQ0FBQSxDQUFtQztBQUNyRSxPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxrQ0FBQSxDQUFtQztBQUNyRSxPQUFPLEVBQUUsd0JBQUEsRUFBeUIsTUFBTywwQ0FBQSxDQUEyQztBQUVwRixPQUFPLGFBQUEsQ0FBYztBQUVyQixPQUFPLEVBQ0wsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixJQUFJLEVBS0osZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIseUJBQXlCLEVBQ3pCLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDaEIsMkJBQTJCLEVBQzNCLHFCQUFxQixFQUV0QixDQUFDO0FBR0Y7SUFBQTtJQTRDQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQTVDQSxBQTRDQzs7QUE1QytCLHFCQUFVLEdBQTBCO0lBQ3BFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGFBQWE7b0JBQ2IsaUJBQWlCO29CQUNqQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixpQkFBaUI7b0JBQ2pCLHlCQUF5QjtvQkFDekIseUJBQXlCO29CQUN6QixnQkFBZ0I7b0JBQ2hCLDJCQUEyQjtvQkFDM0IscUJBQXFCO29CQUNyQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO2lCQUNuQjthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCx5QkFBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQztBQUdGLGVBTmUsVUFBQSxDQUFXIiwiZmlsZSI6ImFuZ3VsYXItdHJlZS1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vYnhBbmd1bGFyTW9kdWxlIH0gZnJvbSAnbW9ieC1hbmd1bGFyJztcblxuaW1wb3J0IHsgVFJFRV9BQ1RJT05TLCBJQWN0aW9uTWFwcGluZywgSUFjdGlvbkhhbmRsZXIgfSBmcm9tICcuL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgSVRyZWVPcHRpb25zLCBJQWxsb3dEcm9wRm4sIElBbGxvd0RyYWdGbiwgSVRyZWVTdGF0ZSB9IGZyb20gJy4vZGVmcy9hcGknO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4vY29uc3RhbnRzL2tleXMnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlRHJhZ2dlZEVsZW1lbnQgfSBmcm9tICcuL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb250ZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZURyb3BTbG90IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdHJlZS1ub2RlLXdyYXBwZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFRyZWVWaWV3cG9ydENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmVlRHJvcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmVlLWRyb3AuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRyZWVEcmFnRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyZWUtYW5pbWF0ZS1vcGVuLmRpcmVjdGl2ZSc7XG5cbmltcG9ydCAnLi9wb2x5ZmlsbHMnO1xuXG5leHBvcnQge1xuICBUcmVlTW9kZWwsXG4gIFRyZWVOb2RlLFxuICBUcmVlRHJhZ2dlZEVsZW1lbnQsXG4gIFRyZWVWaXJ0dWFsU2Nyb2xsLFxuICBJVHJlZU9wdGlvbnMsXG4gIFRSRUVfQUNUSU9OUyxcbiAgS0VZUyxcbiAgSUFjdGlvbk1hcHBpbmcsXG4gIElBY3Rpb25IYW5kbGVyLFxuICBJQWxsb3dEcm9wRm4sXG4gIElBbGxvd0RyYWdGbixcbiAgTG9hZGluZ0NvbXBvbmVudCxcbiAgVHJlZUNvbXBvbmVudCxcbiAgVHJlZU5vZGVDb21wb25lbnQsXG4gIFRyZWVOb2RlQ29udGVudCxcbiAgVHJlZURyb3BEaXJlY3RpdmUsXG4gIFRyZWVEcmFnRGlyZWN0aXZlLFxuICBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50LFxuICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICBUcmVlTm9kZURyb3BTbG90LFxuICBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQsXG4gIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcbiAgSVRyZWVTdGF0ZVxufTtcblxuXG5leHBvcnQgY2xhc3MgVHJlZU1vZHVsZSB7c3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogTmdNb2R1bGUsIGFyZ3M6IFt7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRyZWVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDb250ZW50LFxuICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgVHJlZURyb3BEaXJlY3RpdmUsXG4gICAgVHJlZURyYWdEaXJlY3RpdmUsXG4gICAgVHJlZU5vZGVFeHBhbmRlckNvbXBvbmVudCxcbiAgICBUcmVlTm9kZUNoaWxkcmVuQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlRHJvcFNsb3QsXG4gICAgVHJlZU5vZGVDb2xsZWN0aW9uQ29tcG9uZW50LFxuICAgIFRyZWVWaWV3cG9ydENvbXBvbmVudCxcbiAgICBUcmVlTm9kZVdyYXBwZXJDb21wb25lbnQsXG4gICAgVHJlZUFuaW1hdGVPcGVuRGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUcmVlQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlQ29tcG9uZW50LFxuICAgIFRyZWVOb2RlQ29udGVudCxcbiAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgIFRyZWVEcm9wRGlyZWN0aXZlLFxuICAgIFRyZWVEcmFnRGlyZWN0aXZlLFxuICAgIFRyZWVOb2RlRXhwYW5kZXJDb21wb25lbnQsXG4gICAgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCxcbiAgICBUcmVlTm9kZURyb3BTbG90LFxuICAgIFRyZWVOb2RlQ29sbGVjdGlvbkNvbXBvbmVudCxcbiAgICBUcmVlVmlld3BvcnRDb21wb25lbnQsXG4gICAgVHJlZU5vZGVXcmFwcGVyQ29tcG9uZW50LFxuICAgIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZVxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1vYnhBbmd1bGFyTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRyZWVEcmFnZ2VkRWxlbWVudFxuICBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xuXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJlZU1vZHVsZTtcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/loading.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });


var LoadingComponent = (function () {
    function LoadingComponent(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('LoadingComponent', 'tree-loading-component', elementRef);
    }
    return LoadingComponent;
}());

LoadingComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                selector: 'LoadingComponent, tree-loading-component',
                template: "\n    <span *ngIf=\"!template\">loading...</span>\n    <ng-container\n      [ngTemplateOutlet]=\"template\"\n      [ngOutletContext]=\"{ $implicit: node }\">\n    </ng-container>\n  ",
            },] },
];
/** @nocollapse */
LoadingComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
LoadingComponent.propDecorators = {
    'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL2xvYWRpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFBLEVBQVcsS0FBQSxFQUFvQixVQUFBLEVBQVksaUJBQUEsRUFBa0IsTUFBTyxlQUFBLENBQWdCO0FBRTdGLE9BQU8sRUFBRSxrQkFBQSxFQUFtQixNQUFPLHdCQUFBLENBQXlCO0FBRzVEO0lBSUUsMEJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsa0JBQWtCLENBQUMsa0JBQWtCLEVBQUUsd0JBQXdCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQXNCSCx1QkFBQztBQUFELENBNUJBLEFBNEJDOztBQXJCTSwyQkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsMENBQTBDO2dCQUNwRCxRQUFRLEVBQUUsd0xBTVQ7YUFDRixFQUFHLEVBQUU7Q0FDTCxDQUFDO0FBQ0Ysa0JBQWtCO0FBQ1gsK0JBQWMsR0FBbUUsY0FBTSxPQUFBO0lBQzlGLEVBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRztDQUNuQixFQUY2RixDQUU3RixDQUFDO0FBQ0ssK0JBQWMsR0FBMkM7SUFDaEUsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDOUIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDekIsQ0FBQyIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgTG9hZGluZ0NvbXBvbmVudCB7XG4gICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgIG5vZGU6IFRyZWVOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignTG9hZGluZ0NvbXBvbmVudCcsICd0cmVlLWxvYWRpbmctY29tcG9uZW50JywgZWxlbWVudFJlZik7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdMb2FkaW5nQ29tcG9uZW50LCB0cmVlLWxvYWRpbmctY29tcG9uZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPmxvYWRpbmcuLi48L3NwYW4+XG4gICAgPG5nLWNvbnRhaW5lclxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgICAgW25nT3V0bGV0Q29udGV4dF09XCJ7ICRpbXBsaWNpdDogbm9kZSB9XCI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbid0ZW1wbGF0ZSc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-children.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeChildrenComponent; });


var TreeNodeChildrenComponent = (function () {
    function TreeNodeChildrenComponent(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('TreeNodeChildren', 'tree-node-children', elementRef);
    }
    return TreeNodeChildrenComponent;
}());

TreeNodeChildrenComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeNodeChildren, tree-node-children',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [
                    '.tree-children.tree-children-no-padding { padding-left: 0 }',
                    '.tree-children { padding-left: 20px; overflow: hidden }'
                ],
                template: "\n    <ng-container *mobxAutorun>\n      <div [class.tree-children]=\"true\"\n          [class.tree-children-no-padding]=\"node.options.levelPadding\"\n          *treeAnimateOpen=\"\n            node.isExpanded;\n            speed:node.options.animateExpand;\n            acceleration:node.options.animateAcceleration;\n            enabled:node.options.animateExpand\">\n        <tree-node-collection\n          *ngIf=\"node.children\"\n          [nodes]=\"node.children\"\n          [templates]=\"templates\"\n          [treeModel]=\"node.treeModel\">\n        </tree-node-collection>\n        <tree-loading-component\n          [style.padding-left]=\"node.getNodePadding()\"\n          class=\"tree-node-loading\"\n          *ngIf=\"!node.children\"\n          [template]=\"templates.loadingTemplate\"\n          [node]=\"node\"\n        ></tree-loading-component>\n      </div>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeChildrenComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeChildrenComponent.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'templates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBbUIsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUVoRixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUc1RDtJQUlFLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUE0Q0gsZ0NBQUM7QUFBRCxDQWxEQSxBQWtEQzs7QUEzQ00sb0NBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOLDZEQUE2RDtvQkFDN0QseURBQXlEO2lCQUMxRDtnQkFDRCxRQUFRLEVBQUUsMjRCQXdCVDthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCx3Q0FBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFHO0NBQ25CLEVBRjZGLENBRTdGLENBQUM7QUFDSyx3Q0FBYyxHQUEyQztJQUNoRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMxQixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtDQUM5QixDQUFDIiwiZmlsZSI6InRyZWUtbm9kZS1jaGlsZHJlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcblxuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGVDaGlsZHJlbkNvbXBvbmVudCB7XG4gICBub2RlOiBUcmVlTm9kZTtcbiAgIHRlbXBsYXRlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVDaGlsZHJlbicsICd0cmVlLW5vZGUtY2hpbGRyZW4nLCBlbGVtZW50UmVmKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ2hpbGRyZW4sIHRyZWUtbm9kZS1jaGlsZHJlbicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgICcudHJlZS1jaGlsZHJlbi50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmcgeyBwYWRkaW5nLWxlZnQ6IDAgfScsXG4gICAgJy50cmVlLWNoaWxkcmVuIHsgcGFkZGluZy1sZWZ0OiAyMHB4OyBvdmVyZmxvdzogaGlkZGVuIH0nXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XG4gICAgICA8ZGl2IFtjbGFzcy50cmVlLWNoaWxkcmVuXT1cInRydWVcIlxuICAgICAgICAgIFtjbGFzcy50cmVlLWNoaWxkcmVuLW5vLXBhZGRpbmddPVwibm9kZS5vcHRpb25zLmxldmVsUGFkZGluZ1wiXG4gICAgICAgICAgKnRyZWVBbmltYXRlT3Blbj1cIlxuICAgICAgICAgICAgbm9kZS5pc0V4cGFuZGVkO1xuICAgICAgICAgICAgc3BlZWQ6bm9kZS5vcHRpb25zLmFuaW1hdGVFeHBhbmQ7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246bm9kZS5vcHRpb25zLmFuaW1hdGVBY2NlbGVyYXRpb247XG4gICAgICAgICAgICBlbmFibGVkOm5vZGUub3B0aW9ucy5hbmltYXRlRXhwYW5kXCI+XG4gICAgICAgIDx0cmVlLW5vZGUtY29sbGVjdGlvblxuICAgICAgICAgICpuZ0lmPVwibm9kZS5jaGlsZHJlblwiXG4gICAgICAgICAgW25vZGVzXT1cIm5vZGUuY2hpbGRyZW5cIlxuICAgICAgICAgIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCJcbiAgICAgICAgICBbdHJlZU1vZGVsXT1cIm5vZGUudHJlZU1vZGVsXCI+XG4gICAgICAgIDwvdHJlZS1ub2RlLWNvbGxlY3Rpb24+XG4gICAgICAgIDx0cmVlLWxvYWRpbmctY29tcG9uZW50XG4gICAgICAgICAgW3N0eWxlLnBhZGRpbmctbGVmdF09XCJub2RlLmdldE5vZGVQYWRkaW5nKClcIlxuICAgICAgICAgIGNsYXNzPVwidHJlZS1ub2RlLWxvYWRpbmdcIlxuICAgICAgICAgICpuZ0lmPVwiIW5vZGUuY2hpbGRyZW5cIlxuICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZXMubG9hZGluZ1RlbXBsYXRlXCJcbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcbiAgICAgICAgPjwvdHJlZS1sb2FkaW5nLWNvbXBvbmVudD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3RlbXBsYXRlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-collection.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mobx_angular__ = __webpack_require__("../../../../mobx-angular/dist/mobx-angular.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeCollectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TreeNodeCollectionComponent = (function () {
    function TreeNodeCollectionComponent(elementRef) {
        this.elementRef = elementRef;
        this._dispose = [];
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__deprecated_selector__["a" /* deprecatedSelector */])('TreeNodeCollection', 'tree-node-collection', elementRef);
    }
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "nodes", {
        get: function () { return this._nodes; },
        set: function (nodes) { this.setNodes(nodes); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNodeCollectionComponent.prototype, "marginTop", {
        get: function () {
            var firstNode = this.viewportNodes && this.viewportNodes.length && this.viewportNodes[0];
            var relativePosition = firstNode ? firstNode.position - firstNode.parent.position - firstNode.parent.getSelfHeight() : 0;
            return relativePosition + "px";
        },
        enumerable: true,
        configurable: true
    });
    TreeNodeCollectionComponent.prototype.setNodes = function (nodes) {
        this._nodes = nodes;
    };
    TreeNodeCollectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.virtualScroll = this.treeModel.virtualScroll;
        this._dispose = [
            // return node indexes so we can compare structurally,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(function () {
                return _this.virtualScroll.getViewportNodes(_this.nodes).map(function (n) { return n.index; });
            }, function (nodeIndexes) {
                _this.viewportNodes = nodeIndexes.map(function (i) { return _this.nodes[i]; });
            }, { compareStructural: true, fireImmediately: true }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(function () { return _this.nodes; }, function (nodes) {
                _this.viewportNodes = _this.virtualScroll.getViewportNodes(nodes);
            })
        ];
    };
    TreeNodeCollectionComponent.prototype.ngOnDestroy = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeNodeCollectionComponent.prototype.trackNode = function (index, node) {
        return node.id;
    };
    return TreeNodeCollectionComponent;
}());

TreeNodeCollectionComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'tree-node-collection, TreeNodeCollection',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                template: "\n    <ng-container *mobxAutorun>\n      <div\n        [style.margin-top]=\"marginTop\">\n        <tree-node\n          *ngFor=\"let node of viewportNodes; let i = index; trackBy: trackNode\"\n          [node]=\"node\"\n          [index]=\"i\"\n          [templates]=\"templates\">\n        </tree-node>\n      </div>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeCollectionComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeCollectionComponent.propDecorators = {
    'nodes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'treeModel': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'templates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_angular__["b" /* observable */],
    __metadata("design:type", Object)
], TreeNodeCollectionComponent.prototype, "_nodes", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_angular__["b" /* observable */],
    __metadata("design:type", Array)
], TreeNodeCollectionComponent.prototype, "viewportNodes", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_angular__["c" /* computed */],
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], TreeNodeCollectionComponent.prototype, "marginTop", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_2_mobx_angular__["d" /* action */],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeNodeCollectionComponent.prototype, "setNodes", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb2xsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUEsRUFBTyxpQkFBQSxFQUFzQyxVQUFBLEVBQ3pELE1BQU0sZUFBQSxDQUFnQjtBQUN2QixPQUFPLEVBQUUsUUFBQSxFQUFrQixNQUFPLE1BQUEsQ0FBTztBQUN6QyxPQUFPLEVBQUUsVUFBQSxFQUFZLFFBQUEsRUFBVSxNQUFBLEVBQU8sTUFBTyxjQUFBLENBQWU7QUFJNUQsT0FBTyxFQUFFLGtCQUFBLEVBQW1CLE1BQU8sd0JBQUEsQ0FBeUI7QUFHNUQ7SUFzQkUscUNBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFGMUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUdaLGtCQUFrQixDQUFDLG9CQUFvQixFQUFFLHNCQUFzQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUF0QkQsc0JBQUksOENBQUs7YUFBVCxjQUFjLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNuQyxVQUFVLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7O09BRFA7SUFXekIsc0JBQUksa0RBQVM7YUFBYjtZQUNSLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRixJQUFNLGdCQUFnQixHQUFHLFNBQVMsR0FBRyxTQUFTLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTNILE1BQU0sQ0FBSSxnQkFBZ0IsT0FBSSxDQUFDO1FBQ2pDLENBQUM7OztPQUFBO0lBUU8sOENBQVEsR0FBUixVQUFTLEtBQUs7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELDhDQUFRLEdBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBRztZQUNkLHNEQUFzRDtZQUN0RCxRQUFRLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxFQUFFLFVBQUMsV0FBVztnQkFDWCxLQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQzdELENBQUMsRUFBRSxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQ3REO1lBQ0QsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBRSxVQUFDLEtBQUs7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELGlEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsRUFBRSxFQUFILENBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwrQ0FBUyxHQUFULFVBQVUsS0FBSyxFQUFFLElBQUk7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQThCSCxrQ0FBQztBQUFELENBbEZBLEFBa0ZDOztBQTVCTSxzQ0FBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsd1ZBWVQ7YUFDRixFQUFHLEVBQUU7Q0FDTCxDQUFDO0FBQ0Ysa0JBQWtCO0FBQ1gsMENBQWMsR0FBbUUsY0FBTSxPQUFBO0lBQzlGLEVBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRztDQUNuQixFQUY2RixDQUU3RixDQUFDO0FBQ0ssMENBQWMsR0FBMkM7SUFDaEUsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDL0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDOUIsQ0FBQztBQTFFWTtJQUFYLFVBQVU7OzJEQUFRO0FBSVA7SUFBWCxVQUFVOztrRUFBMkI7QUFFNUI7SUFBVCxRQUFROzs7NERBS1I7QUFRTztJQUFQLE1BQU07Ozs7MkRBRU4iLCJmaWxlIjoidHJlZS1ub2RlLWNvbGxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlYWN0aW9uLCBhdXRvcnVuIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYWN0aW9uIH0gZnJvbSAnbW9ieC1hbmd1bGFyJztcbmltcG9ydCB7IFRyZWVWaXJ0dWFsU2Nyb2xsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4uL21vZGVscy90cmVlLm1vZGVsJztcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbGxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIFxuICBnZXQgbm9kZXMoKSB7IHJldHVybiB0aGlzLl9ub2RlczsgfVxuICBzZXQgbm9kZXMobm9kZXMpIHsgdGhpcy5zZXROb2Rlcyhub2Rlcyk7IH1cblxuICAgdHJlZU1vZGVsOiBUcmVlTW9kZWw7XG5cbiAgQG9ic2VydmFibGUgX25vZGVzO1xuICBwcml2YXRlIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsOyAvLyBDYW5ub3QgaW5qZWN0IHRoaXMsIGJlY2F1c2Ugd2UgbWlnaHQgYmUgaW5zaWRlIHRyZWVOb2RlVGVtcGxhdGVGdWxsXG4gICB0ZW1wbGF0ZXM7XG5cbiAgQG9ic2VydmFibGUgdmlld3BvcnROb2RlczogVHJlZU5vZGVbXTtcblxuICBAY29tcHV0ZWQgZ2V0IG1hcmdpblRvcCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGZpcnN0Tm9kZSA9IHRoaXMudmlld3BvcnROb2RlcyAmJiB0aGlzLnZpZXdwb3J0Tm9kZXMubGVuZ3RoICYmIHRoaXMudmlld3BvcnROb2Rlc1swXTtcbiAgICBjb25zdCByZWxhdGl2ZVBvc2l0aW9uID0gZmlyc3ROb2RlID8gZmlyc3ROb2RlLnBvc2l0aW9uIC0gZmlyc3ROb2RlLnBhcmVudC5wb3NpdGlvbiAtIGZpcnN0Tm9kZS5wYXJlbnQuZ2V0U2VsZkhlaWdodCgpIDogMDtcblxuICAgIHJldHVybiBgJHtyZWxhdGl2ZVBvc2l0aW9ufXB4YDtcbiAgfVxuXG4gIF9kaXNwb3NlID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUNvbGxlY3Rpb24nLCAndHJlZS1ub2RlLWNvbGxlY3Rpb24nLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIEBhY3Rpb24gc2V0Tm9kZXMobm9kZXMpIHtcbiAgICB0aGlzLl9ub2RlcyA9IG5vZGVzO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsID0gdGhpcy50cmVlTW9kZWwudmlydHVhbFNjcm9sbDtcbiAgICB0aGlzLl9kaXNwb3NlID0gW1xuICAgICAgLy8gcmV0dXJuIG5vZGUgaW5kZXhlcyBzbyB3ZSBjYW4gY29tcGFyZSBzdHJ1Y3R1cmFsbHksXG4gICAgICByZWFjdGlvbigoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxTY3JvbGwuZ2V0Vmlld3BvcnROb2Rlcyh0aGlzLm5vZGVzKS5tYXAobiA9PiBuLmluZGV4KTtcbiAgICAgIH0sIChub2RlSW5kZXhlcykgPT4ge1xuICAgICAgICAgIHRoaXMudmlld3BvcnROb2RlcyA9IG5vZGVJbmRleGVzLm1hcCgoaSkgPT4gdGhpcy5ub2Rlc1tpXSk7XG4gICAgICAgIH0sIHsgY29tcGFyZVN0cnVjdHVyYWw6IHRydWUsIGZpcmVJbW1lZGlhdGVseTogdHJ1ZSB9XG4gICAgICApLFxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy5ub2RlcywgKG5vZGVzKSA9PiB7XG4gICAgICAgIHRoaXMudmlld3BvcnROb2RlcyA9IHRoaXMudmlydHVhbFNjcm9sbC5nZXRWaWV3cG9ydE5vZGVzKG5vZGVzKTtcbiAgICAgIH0pXG4gICAgXTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rpc3Bvc2UuZm9yRWFjaChkID0+IGQoKSk7XG4gIH1cblxuICB0cmFja05vZGUoaW5kZXgsIG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5pZDtcbiAgfVxuXG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAndHJlZS1ub2RlLWNvbGxlY3Rpb24sIFRyZWVOb2RlQ29sbGVjdGlvbicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XG4gICAgICA8ZGl2XG4gICAgICAgIFtzdHlsZS5tYXJnaW4tdG9wXT1cIm1hcmdpblRvcFwiPlxuICAgICAgICA8dHJlZS1ub2RlXG4gICAgICAgICAgKm5nRm9yPVwibGV0IG5vZGUgb2Ygdmlld3BvcnROb2RlczsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tOb2RlXCJcbiAgICAgICAgICBbbm9kZV09XCJub2RlXCJcbiAgICAgICAgICBbaW5kZXhdPVwiaVwiXG4gICAgICAgICAgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIj5cbiAgICAgICAgPC90cmVlLW5vZGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nbm9kZXMnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndHJlZU1vZGVsJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3RlbXBsYXRlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-content.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeContent; });


var TreeNodeContent = (function () {
    function TreeNodeContent(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('TreeNodeContent', 'tree-node-content', elementRef);
    }
    return TreeNodeContent;
}());

TreeNodeContent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeNodeContent, tree-node-content',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                template: "\n  <span *ngIf=\"!template\">{{ node.displayField }}</span>\n  <ng-container\n    [ngTemplateOutlet]=\"template\"\n    [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n  </ng-container>",
            },] },
];
/** @nocollapse */
TreeNodeContent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeContent.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'template': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1jb250ZW50LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUFXLEtBQUEsRUFBTyxpQkFBQSxFQUFnQyxVQUFBLEVBQVcsTUFBTyxlQUFBLENBQWdCO0FBRTdGLE9BQU8sRUFBRSxrQkFBQSxFQUFtQixNQUFPLHdCQUFBLENBQXlCO0FBRzVEO0lBS0UseUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDeEMsa0JBQWtCLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQXNCSCxzQkFBQztBQUFELENBN0JBLEFBNkJDOztBQXJCTSwwQkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsaU5BS007YUFDakIsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLDhCQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7Q0FDbkIsRUFGNkYsQ0FFN0YsQ0FBQztBQUNLLDhCQUFjLEdBQTJDO0lBQ2hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzFCLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzNCLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0NBQzdCLENBQUMiLCJmaWxlIjoidHJlZS1ub2RlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNvbnRlbnQge1xuICAgbm9kZTogVHJlZU5vZGU7XG4gICBpbmRleDogbnVtYmVyO1xuICAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZUNvbnRlbnQnLCAndHJlZS1ub2RlLWNvbnRlbnQnLCBlbGVtZW50UmVmKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlQ29udGVudCwgdHJlZS1ub2RlLWNvbnRlbnQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZTogYFxuICA8c3BhbiAqbmdJZj1cIiF0ZW1wbGF0ZVwiPnt7IG5vZGUuZGlzcGxheUZpZWxkIH19PC9zcGFuPlxuICA8bmctY29udGFpbmVyXG4gICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVcIlxuICAgIFtuZ091dGxldENvbnRleHRdPVwieyAkaW1wbGljaXQ6IG5vZGUsIG5vZGU6IG5vZGUsIGluZGV4OiBpbmRleCB9XCI+XG4gIDwvbmctY29udGFpbmVyPmAsXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2luZGV4JzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ3RlbXBsYXRlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-drop-slot.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeDropSlot; });


var TreeNodeDropSlot = (function () {
    function TreeNodeDropSlot(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('TreeNodeDropSlot', 'tree-node-drop-slot', elementRef);
    }
    TreeNodeDropSlot.prototype.onDrop = function ($event) {
        this.node.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this.node, index: this.dropIndex }
        });
    };
    TreeNodeDropSlot.prototype.allowDrop = function (element, $event) {
        return this.node.options.allowDrop(element, { parent: this.node, index: this.dropIndex }, $event);
    };
    return TreeNodeDropSlot;
}());

TreeNodeDropSlot.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeNodeDropSlot, tree-node-drop-slot',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [
                    '.node-drop-slot { display: block; height: 2px }',
                    '.node-drop-slot.is-dragging-over { background: #ddffee; height: 20px; border: 2px dotted #888; }'
                ],
                template: "\n    <div\n      class=\"node-drop-slot\"\n      (treeDrop)=\"onDrop($event)\"\n      [treeAllowDrop]=\"allowDrop.bind(this)\">\n    </div>\n  "
            },] },
];
/** @nocollapse */
TreeNodeDropSlot.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeDropSlot.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'dropIndex': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFBLEVBQVcsS0FBQSxFQUFPLGlCQUFBLEVBQW1CLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFFaEYsT0FBTyxFQUFFLGtCQUFBLEVBQW1CLE1BQU8sd0JBQUEsQ0FBeUI7QUFHNUQ7SUFJRSwwQkFBb0IsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN4QyxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRSxxQkFBcUIsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsaUNBQU0sR0FBTixVQUFPLE1BQU07UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMxQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDcEIsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUU7U0FDakQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFTLEdBQVQsVUFBVSxPQUFPLEVBQUUsTUFBTTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQTBCSCx1QkFBQztBQUFELENBM0NBLEFBMkNDOztBQXpCTSwyQkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUU7b0JBQ04saURBQWlEO29CQUNqRCxrR0FBa0c7aUJBQ25HO2dCQUNELFFBQVEsRUFBRSxrSkFNVDthQUNGLEVBQUcsRUFBRTtDQUNMLENBQUM7QUFDRixrQkFBa0I7QUFDWCwrQkFBYyxHQUFtRSxjQUFNLE9BQUE7SUFDOUYsRUFBQyxJQUFJLEVBQUUsVUFBVSxHQUFHO0NBQ25CLEVBRjZGLENBRTdGLENBQUM7QUFDSywrQkFBYyxHQUEyQztJQUNoRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMxQixXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtDQUM5QixDQUFDIiwiZmlsZSI6InRyZWUtbm9kZS1kcm9wLXNsb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgZGVwcmVjYXRlZFNlbGVjdG9yIH0gZnJvbSAnLi4vZGVwcmVjYXRlZC1zZWxlY3Rvcic7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlRHJvcFNsb3Qge1xuICAgbm9kZTogVHJlZU5vZGU7XG4gICBkcm9wSW5kZXg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBkZXByZWNhdGVkU2VsZWN0b3IoJ1RyZWVOb2RlRHJvcFNsb3QnLCAndHJlZS1ub2RlLWRyb3Atc2xvdCcsIGVsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25Ecm9wKCRldmVudCkge1xuICAgIHRoaXMubm9kZS5tb3VzZUFjdGlvbignZHJvcCcsICRldmVudC5ldmVudCwge1xuICAgICAgZnJvbTogJGV2ZW50LmVsZW1lbnQsXG4gICAgICB0bzogeyBwYXJlbnQ6IHRoaXMubm9kZSwgaW5kZXg6IHRoaXMuZHJvcEluZGV4IH1cbiAgICB9KTtcbiAgfVxuXG4gIGFsbG93RHJvcChlbGVtZW50LCAkZXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlLm9wdGlvbnMuYWxsb3dEcm9wKGVsZW1lbnQsIHsgcGFyZW50OiB0aGlzLm5vZGUsIGluZGV4OiB0aGlzLmRyb3BJbmRleCB9LCAkZXZlbnQpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBDb21wb25lbnQsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnVHJlZU5vZGVEcm9wU2xvdCwgdHJlZS1ub2RlLWRyb3Atc2xvdCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgICcubm9kZS1kcm9wLXNsb3QgeyBkaXNwbGF5OiBibG9jazsgaGVpZ2h0OiAycHggfScsXG4gICAgJy5ub2RlLWRyb3Atc2xvdC5pcy1kcmFnZ2luZy1vdmVyIHsgYmFja2dyb3VuZDogI2RkZmZlZTsgaGVpZ2h0OiAyMHB4OyBib3JkZXI6IDJweCBkb3R0ZWQgIzg4ODsgfSdcbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cIm5vZGUtZHJvcC1zbG90XCJcbiAgICAgICh0cmVlRHJvcCk9XCJvbkRyb3AoJGV2ZW50KVwiXG4gICAgICBbdHJlZUFsbG93RHJvcF09XCJhbGxvd0Ryb3AuYmluZCh0aGlzKVwiPlxuICAgIDwvZGl2PlxuICBgXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidub2RlJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2Ryb3BJbmRleCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-expander.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeExpanderComponent; });


var TreeNodeExpanderComponent = (function () {
    function TreeNodeExpanderComponent(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('TreeNodeExpander', 'tree-node-expander', elementRef);
    }
    return TreeNodeExpanderComponent;
}());

TreeNodeExpanderComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeNodeExpander, tree-node-expander',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [
                    '.toggle-children-wrapper-expanded .toggle-children { transform: rotate(90deg) }',
                    '.toggle-children-wrapper-collapsed .toggle-children { transform: rotate(0); }',
                    ".toggle-children-wrapper {\n      padding: 2px 3px 5px 1px;\n    }",
                    /* tslint:disable */
                    ".toggle-children {\n        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjY1RTYzOTA2ODZDRjExREJBNkUyRDg4N0NFQUNCNDA3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYzRkRFQjcxODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYzRkRFQjcwODUzNTExRTU4RTQwRkQwODFEOUZEMEE3IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTk5NzA1OGEtZDI3OC00NDZkLWE4ODgtNGM4MGQ4YWI1NzNmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzRkZmQxMGMtY2NlNS0xMTc4LWE5OGQtY2NkZmM5ODk5YWYwIi8+IDxkYzp0aXRsZT4gPHJkZjpBbHQ+IDxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Z2x5cGhpY29uczwvcmRmOmxpPiA8L3JkZjpBbHQ+IDwvZGM6dGl0bGU+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5iogFwAAAGhJREFUeNpiYGBgKABigf///zOQg0EARH4A4gZyDIIZ8B/JoAJKDIDhB0CcQIkBRBtEyABkgxwoMQCGD6AbRKoBGAYxQgXIBRuZGKgAKPIC3QLxArnRSHZCIjspk52ZKMrOFBUoAAEGAKnq593MQAZtAAAAAElFTkSuQmCC');\n        height: 8px;\n        width: 9px;\n        background-size: contain;\n        display: inline-block;\n        position: relative;\n        top: 1px;\n        background-repeat: no-repeat;\n        background-position: center;\n    }",
                    /* tslint:enable */
                    ".toggle-children-placeholder {\n        display: inline-block;\n        height: 10px;\n        width: 10px;\n        position: relative;\n        top: 1px;\n        padding-right: 3px;\n    }"
                ],
                template: "\n    <ng-container *mobxAutorun>\n      <span\n        *ngIf=\"node.hasChildren\"\n        [class.toggle-children-wrapper-expanded]=\"node.isExpanded\"\n        [class.toggle-children-wrapper-collapsed]=\"node.isCollapsed\"\n        class=\"toggle-children-wrapper\"\n        (click)=\"node.mouseAction('expanderClick', $event)\">\n\n        <span class=\"toggle-children\"></span>\n      </span>\n      <span\n        *ngIf=\"!node.hasChildren\"\n        class=\"toggle-children-placeholder\">\n      </span>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeNodeExpanderComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeExpanderComponent.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS1leHBhbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBbUIsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUVoRixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUc1RDtJQUdFLG1DQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEyREgsZ0NBQUM7QUFBRCxDQWhFQSxBQWdFQzs7QUExRE0sb0NBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUN4QixRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsTUFBTSxFQUFFO29CQUNOLGlGQUFpRjtvQkFDakYsK0VBQStFO29CQUMvRSxvRUFFRTtvQkFDRixvQkFBb0I7b0JBQ3BCLHc3REFVRTtvQkFDRixtQkFBbUI7b0JBQ25CLGlNQU9FO2lCQUNIO2dCQUNELFFBQVEsRUFBRSx5aEJBZ0JUO2FBQ0YsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLHdDQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7Q0FDbkIsRUFGNkYsQ0FFN0YsQ0FBQztBQUNLLHdDQUFjLEdBQTJDO0lBQ2hFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO0NBQ3pCLENBQUMiLCJmaWxlIjoidHJlZS1ub2RlLWV4cGFuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUV4cGFuZGVyQ29tcG9uZW50IHtcbiAgIG5vZGU6IFRyZWVOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGVFeHBhbmRlcicsICd0cmVlLW5vZGUtZXhwYW5kZXInLCBlbGVtZW50UmVmKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlRXhwYW5kZXIsIHRyZWUtbm9kZS1leHBhbmRlcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgICcudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItZXhwYW5kZWQgLnRvZ2dsZS1jaGlsZHJlbiB7IHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB9JyxcbiAgICAnLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZCAudG9nZ2xlLWNoaWxkcmVuIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH0nLFxuICAgIGAudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXIge1xuICAgICAgcGFkZGluZzogMnB4IDNweCA1cHggMXB4O1xuICAgIH1gLFxuICAgIC8qIHRzbGludDpkaXNhYmxlICovXG4gICAgYC50b2dnbGUtY2hpbGRyZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFTQ0FZQUFBQlNPMTVxQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUJBaHBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNRFkzSURjNUxqRTFOemMwTnl3Z01qQXhOUzh3TXk4ek1DMHlNem8wTURvME1pQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1RVMDlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzl0YlM4aUlIaHRiRzV6T25OMFVtVm1QU0pvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNoaGNDOHhMakF2YzFSNWNHVXZVbVZ6YjNWeVkyVlNaV1lqSWlCNGJXeHVjenA0YlhBOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOGlJSGh0Ykc1ek9tUmpQU0pvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5SWdlRzF3VFUwNlQzSnBaMmx1WVd4RWIyTjFiV1Z1ZEVsRVBTSjFkV2xrT2pZMVJUWXpPVEEyT0RaRFJqRXhSRUpCTmtVeVJEZzROME5GUVVOQ05EQTNJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPa1l6UmtSRlFqY3hPRFV6TlRFeFJUVTRSVFF3UmtRd09ERkVPVVpFTUVFM0lpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09rWXpSa1JGUWpjd09EVXpOVEV4UlRVNFJUUXdSa1F3T0RGRU9VWkVNRUUzSWlCNGJYQTZRM0psWVhSdmNsUnZiMnc5SWtGa2IySmxJRkJvYjNSdmMyaHZjQ0JEUXlBeU1ERTFJQ2hOWVdOcGJuUnZjMmdwSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNk1UazVOekExT0dFdFpESTNPQzAwTkRaa0xXRTRPRGd0TkdNNE1HUTRZV0kxTnpObUlpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2WXpSa1ptUXhNR010WTJObE5TMHhNVGM0TFdFNU9HUXRZMk5rWm1NNU9EazVZV1l3SWk4K0lEeGtZenAwYVhSc1pUNGdQSEprWmpwQmJIUStJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlJbmd0WkdWbVlYVnNkQ0krWjJ4NWNHaHBZMjl1Y3p3dmNtUm1PbXhwUGlBOEwzSmtaanBCYkhRK0lEd3ZaR002ZEdsMGJHVStJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCs1aW9nRndBQUFHaEpSRUZVZU5waVlHQmdLQUJpZ2YvLy96T1FnMEVBUkg0QTRnWnlESUlaOEIvSm9BSktESURoQjBDY1FJa0JSQnRFeUFCa2d4d29NUUNHRDZBYlJLb0JHQVl4UWdYSUJSdVpHS2dBS1BJQzNRTHhBcm5SU0haQ0lqc3BrNTJaS01yT0ZCVW9BQUVHQUtucTU5M01RQVp0QUFBQUFFbEZUa1N1UW1DQ1xcJyk7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIH1gLFxuICAgIC8qIHRzbGludDplbmFibGUgKi9cbiAgICBgLnRvZ2dsZS1jaGlsZHJlbi1wbGFjZWhvbGRlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogM3B4O1xuICAgIH1gXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XG4gICAgICA8c3BhblxuICAgICAgICAqbmdJZj1cIm5vZGUuaGFzQ2hpbGRyZW5cIlxuICAgICAgICBbY2xhc3MudG9nZ2xlLWNoaWxkcmVuLXdyYXBwZXItZXhwYW5kZWRdPVwibm9kZS5pc0V4cGFuZGVkXCJcbiAgICAgICAgW2NsYXNzLnRvZ2dsZS1jaGlsZHJlbi13cmFwcGVyLWNvbGxhcHNlZF09XCJub2RlLmlzQ29sbGFwc2VkXCJcbiAgICAgICAgY2xhc3M9XCJ0b2dnbGUtY2hpbGRyZW4td3JhcHBlclwiXG4gICAgICAgIChjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdleHBhbmRlckNsaWNrJywgJGV2ZW50KVwiPlxuXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidG9nZ2xlLWNoaWxkcmVuXCI+PC9zcGFuPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW5cbiAgICAgICAgKm5nSWY9XCIhbm9kZS5oYXNDaGlsZHJlblwiXG4gICAgICAgIGNsYXNzPVwidG9nZ2xlLWNoaWxkcmVuLXBsYWNlaG9sZGVyXCI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGBcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node-wrapper.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeWrapperComponent; });

var TreeNodeWrapperComponent = (function () {
    function TreeNodeWrapperComponent() {
    }
    return TreeNodeWrapperComponent;
}());

TreeNodeWrapperComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'tree-node-wrapper',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [
                    ".node-content-wrapper {\n      display: inline-block;\n      padding: 2px 5px;\n      border-radius: 2px;\n      transition: background-color .15s,box-shadow .15s;\n    }",
                    '.node-wrapper {display: flex; align-items: flex-start;}',
                    ".node-content-wrapper-active,\n     .node-content-wrapper.node-content-wrapper-active:hover,\n     .node-content-wrapper-active.node-content-wrapper-focused {\n        background: #beebff;\n     }",
                    '.node-content-wrapper-focused { background: #e7f4f9 }',
                    '.node-content-wrapper:hover { background: #f7fbff }',
                    ".node-content-wrapper-active, .node-content-wrapper-focused, .node-content-wrapper:hover {\n      box-shadow: inset 0 0 1px #999;\n    }",
                    '.node-content-wrapper.is-dragging-over { background: #ddffee; box-shadow: inset 0 0 1px #999; }',
                    '.node-content-wrapper.is-dragging-over-disabled { opacity: 0.5 }'
                ],
                template: "\n      <div *ngIf=\"!templates.treeNodeWrapperTemplate\" class=\"node-wrapper\" [style.padding-left]=\"node.getNodePadding()\">\n        <tree-node-expander [node]=\"node\"></tree-node-expander>\n        <div class=\"node-content-wrapper\"\n          [class.node-content-wrapper-active]=\"node.isActive\"\n          [class.node-content-wrapper-focused]=\"node.isFocused\"\n          (click)=\"node.mouseAction('click', $event)\"\n          (dblclick)=\"node.mouseAction('dblClick', $event)\"\n          (contextmenu)=\"node.mouseAction('contextMenu', $event)\"\n          (treeDrop)=\"node.onDrop($event)\"\n          (treeDropDragOver)=\"node.mouseAction('dragOver', $event)\"\n          (treeDropDragLeave)=\"node.mouseAction('dragLeave', $event)\"\n          (treeDropDragEnter)=\"node.mouseAction('dragEnter', $event)\"\n          [treeAllowDrop]=\"node.allowDrop\"\n          [treeDrag]=\"node\"\n          [treeDragEnabled]=\"node.allowDrag()\">\n\n          <tree-node-content [node]=\"node\" [index]=\"index\" [template]=\"templates.treeNodeTemplate\">\n          </tree-node-content>\n        </div>\n      </div>\n      <ng-container \n        [ngTemplateOutlet]=\"templates.treeNodeWrapperTemplate\" \n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index }\">\n      </ng-container>\n    "
            },] },
];
/** @nocollapse */
TreeNodeWrapperComponent.ctorParameters = function () { return []; };
TreeNodeWrapperComponent.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'templates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS13cmFwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBQSxFQUFXLEtBQUEsRUFBTyxpQkFBQSxFQUErQixNQUFPLGVBQUEsQ0FBZ0I7QUFLakY7SUFNRTtJQUFnQixDQUFDO0lBK0RuQiwrQkFBQztBQUFELENBckVBLEFBcUVDOztBQTdETSxtQ0FBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUU7b0JBQ04sNEtBS0U7b0JBQ0YseURBQXlEO29CQUN6RCxzTUFJRztvQkFDSCx1REFBdUQ7b0JBQ3ZELHFEQUFxRDtvQkFDckQsMElBRUU7b0JBQ0YsaUdBQWlHO29CQUNqRyxrRUFBa0U7aUJBQ25FO2dCQUNELFFBQVEsRUFBRSx5eUNBeUJQO2FBQ0osRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLHVDQUFjLEdBQW1FLGNBQU0sT0FBQSxFQUM3RixFQUQ2RixDQUM3RixDQUFDO0FBQ0ssdUNBQWMsR0FBMkM7SUFDaEUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDOUIsQ0FBQyIsImZpbGUiOiJ0cmVlLW5vZGUtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmVlTm9kZSB9IGZyb20gJy4uL21vZGVscy90cmVlLW5vZGUubW9kZWwnO1xuXG5cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlV3JhcHBlckNvbXBvbmVudCB7XG5cbiAgIG5vZGU6IFRyZWVOb2RlO1xuICAgaW5kZXg6IG51bWJlcjtcbiAgIHRlbXBsYXRlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICd0cmVlLW5vZGUtd3JhcHBlcicsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0eWxlczogW1xuICAgIGAubm9kZS1jb250ZW50LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cyxib3gtc2hhZG93IC4xNXM7XG4gICAgfWAsXG4gICAgJy5ub2RlLXdyYXBwZXIge2Rpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O30nLFxuICAgIGAubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlLFxuICAgICAubm9kZS1jb250ZW50LXdyYXBwZXIubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlOmhvdmVyLFxuICAgICAubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWQge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYmVlYmZmO1xuICAgICB9YCxcbiAgICAnLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWQgeyBiYWNrZ3JvdW5kOiAjZTdmNGY5IH0nLFxuICAgICcubm9kZS1jb250ZW50LXdyYXBwZXI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjZjdmYmZmIH0nLFxuICAgIGAubm9kZS1jb250ZW50LXdyYXBwZXItYWN0aXZlLCAubm9kZS1jb250ZW50LXdyYXBwZXItZm9jdXNlZCwgLm5vZGUtY29udGVudC13cmFwcGVyOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAxcHggIzk5OTtcbiAgICB9YCxcbiAgICAnLm5vZGUtY29udGVudC13cmFwcGVyLmlzLWRyYWdnaW5nLW92ZXIgeyBiYWNrZ3JvdW5kOiAjZGRmZmVlOyBib3gtc2hhZG93OiBpbnNldCAwIDAgMXB4ICM5OTk7IH0nLFxuICAgICcubm9kZS1jb250ZW50LXdyYXBwZXIuaXMtZHJhZ2dpbmctb3Zlci1kaXNhYmxlZCB7IG9wYWNpdHk6IDAuNSB9J1xuICBdLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPGRpdiAqbmdJZj1cIiF0ZW1wbGF0ZXMudHJlZU5vZGVXcmFwcGVyVGVtcGxhdGVcIiBjbGFzcz1cIm5vZGUtd3JhcHBlclwiIFtzdHlsZS5wYWRkaW5nLWxlZnRdPVwibm9kZS5nZXROb2RlUGFkZGluZygpXCI+XG4gICAgICAgIDx0cmVlLW5vZGUtZXhwYW5kZXIgW25vZGVdPVwibm9kZVwiPjwvdHJlZS1ub2RlLWV4cGFuZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm9kZS1jb250ZW50LXdyYXBwZXJcIlxuICAgICAgICAgIFtjbGFzcy5ub2RlLWNvbnRlbnQtd3JhcHBlci1hY3RpdmVdPVwibm9kZS5pc0FjdGl2ZVwiXG4gICAgICAgICAgW2NsYXNzLm5vZGUtY29udGVudC13cmFwcGVyLWZvY3VzZWRdPVwibm9kZS5pc0ZvY3VzZWRcIlxuICAgICAgICAgIChjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdjbGljaycsICRldmVudClcIlxuICAgICAgICAgIChkYmxjbGljayk9XCJub2RlLm1vdXNlQWN0aW9uKCdkYmxDbGljaycsICRldmVudClcIlxuICAgICAgICAgIChjb250ZXh0bWVudSk9XCJub2RlLm1vdXNlQWN0aW9uKCdjb250ZXh0TWVudScsICRldmVudClcIlxuICAgICAgICAgICh0cmVlRHJvcCk9XCJub2RlLm9uRHJvcCgkZXZlbnQpXCJcbiAgICAgICAgICAodHJlZURyb3BEcmFnT3Zlcik9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnT3ZlcicsICRldmVudClcIlxuICAgICAgICAgICh0cmVlRHJvcERyYWdMZWF2ZSk9XCJub2RlLm1vdXNlQWN0aW9uKCdkcmFnTGVhdmUnLCAkZXZlbnQpXCJcbiAgICAgICAgICAodHJlZURyb3BEcmFnRW50ZXIpPVwibm9kZS5tb3VzZUFjdGlvbignZHJhZ0VudGVyJywgJGV2ZW50KVwiXG4gICAgICAgICAgW3RyZWVBbGxvd0Ryb3BdPVwibm9kZS5hbGxvd0Ryb3BcIlxuICAgICAgICAgIFt0cmVlRHJhZ109XCJub2RlXCJcbiAgICAgICAgICBbdHJlZURyYWdFbmFibGVkXT1cIm5vZGUuYWxsb3dEcmFnKClcIj5cblxuICAgICAgICAgIDx0cmVlLW5vZGUtY29udGVudCBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlXT1cInRlbXBsYXRlcy50cmVlTm9kZVRlbXBsYXRlXCI+XG4gICAgICAgICAgPC90cmVlLW5vZGUtY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250YWluZXIgXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRlbXBsYXRlcy50cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZVwiIFxuICAgICAgICBbbmdPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXggfVwiPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgYFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndGVtcGxhdGVzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-node.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNodeComponent; });


var TreeNodeComponent = (function () {
    function TreeNodeComponent(elementRef) {
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__deprecated_selector__["a" /* deprecatedSelector */])('TreeNode', 'tree-node', elementRef);
    }
    return TreeNodeComponent;
}());

TreeNodeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeNode, tree-node',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                styles: [],
                template: "\n    <ng-container *mobxAutorun>\n      <div\n        *ngIf=\"!templates.treeNodeFullTemplate\"\n        [class]=\"node.getClass()\"\n        [class.tree-node]=\"true\"\n        [class.tree-node-expanded]=\"node.isExpanded && node.hasChildren\"\n        [class.tree-node-collapsed]=\"node.isCollapsed && node.hasChildren\"\n        [class.tree-node-leaf]=\"node.isLeaf\"\n        [class.tree-node-active]=\"node.isActive\"\n        [class.tree-node-focused]=\"node.isFocused\"\n        >\n\n        <tree-node-drop-slot *ngIf=\"index === 0\" [dropIndex]=\"node.index\" [node]=\"node.parent\"></tree-node-drop-slot>\n\n        <tree-node-wrapper [node]=\"node\" [index]=\"index\" [templates]=\"templates\"></tree-node-wrapper>\n\n        <tree-node-children [node]=\"node\" [templates]=\"templates\"></tree-node-children>\n        <tree-node-drop-slot [dropIndex]=\"node.index + 1\" [node]=\"node.parent\"></tree-node-drop-slot>\n      </div>\n      <ng-container\n        [ngTemplateOutlet]=\"templates.treeNodeFullTemplate\"\n        [ngOutletContext]=\"{ $implicit: node, node: node, index: index, templates: templates }\">\n      </ng-container>\n    </ng-container>"
            },] },
];
/** @nocollapse */
TreeNodeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeNodeComponent.propDecorators = {
    'node': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'index': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'templates': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8saUJBQUEsRUFBZ0MsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUU3RixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUk1RDtJQUtFLDJCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3hDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQTJDSCx3QkFBQztBQUFELENBbERBLEFBa0RDOztBQXpDTSw0QkFBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxNQUFNLEVBQUUsRUFBRTtnQkFDVixRQUFRLEVBQUUsb3BDQXdCUTthQUNuQixFQUFHLEVBQUU7Q0FDTCxDQUFDO0FBQ0Ysa0JBQWtCO0FBQ1gsZ0NBQWMsR0FBbUUsY0FBTSxPQUFBO0lBQzlGLEVBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRztDQUNuQixFQUY2RixDQUU3RixDQUFDO0FBQ0ssZ0NBQWMsR0FBMkM7SUFDaEUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDMUIsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDM0IsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7Q0FDOUIsQ0FBQyIsImZpbGUiOiJ0cmVlLW5vZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IGRlcHJlY2F0ZWRTZWxlY3RvciB9IGZyb20gJy4uL2RlcHJlY2F0ZWQtc2VsZWN0b3InO1xuXG5cblxuZXhwb3J0IGNsYXNzIFRyZWVOb2RlQ29tcG9uZW50IHtcbiAgIG5vZGU6IFRyZWVOb2RlO1xuICAgaW5kZXg6IG51bWJlcjtcbiAgIHRlbXBsYXRlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIGRlcHJlY2F0ZWRTZWxlY3RvcignVHJlZU5vZGUnLCAndHJlZS1ub2RlJywgZWxlbWVudFJlZik7XG4gIH1cblxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogQ29tcG9uZW50LCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1RyZWVOb2RlLCB0cmVlLW5vZGUnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZXM6IFtdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgKm1vYnhBdXRvcnVuPlxuICAgICAgPGRpdlxuICAgICAgICAqbmdJZj1cIiF0ZW1wbGF0ZXMudHJlZU5vZGVGdWxsVGVtcGxhdGVcIlxuICAgICAgICBbY2xhc3NdPVwibm9kZS5nZXRDbGFzcygpXCJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZV09XCJ0cnVlXCJcbiAgICAgICAgW2NsYXNzLnRyZWUtbm9kZS1leHBhbmRlZF09XCJub2RlLmlzRXhwYW5kZWQgJiYgbm9kZS5oYXNDaGlsZHJlblwiXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtY29sbGFwc2VkXT1cIm5vZGUuaXNDb2xsYXBzZWQgJiYgbm9kZS5oYXNDaGlsZHJlblwiXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtbGVhZl09XCJub2RlLmlzTGVhZlwiXG4gICAgICAgIFtjbGFzcy50cmVlLW5vZGUtYWN0aXZlXT1cIm5vZGUuaXNBY3RpdmVcIlxuICAgICAgICBbY2xhc3MudHJlZS1ub2RlLWZvY3VzZWRdPVwibm9kZS5pc0ZvY3VzZWRcIlxuICAgICAgICA+XG5cbiAgICAgICAgPHRyZWUtbm9kZS1kcm9wLXNsb3QgKm5nSWY9XCJpbmRleCA9PT0gMFwiIFtkcm9wSW5kZXhdPVwibm9kZS5pbmRleFwiIFtub2RlXT1cIm5vZGUucGFyZW50XCI+PC90cmVlLW5vZGUtZHJvcC1zbG90PlxuXG4gICAgICAgIDx0cmVlLW5vZGUtd3JhcHBlciBbbm9kZV09XCJub2RlXCIgW2luZGV4XT1cImluZGV4XCIgW3RlbXBsYXRlc109XCJ0ZW1wbGF0ZXNcIj48L3RyZWUtbm9kZS13cmFwcGVyPlxuXG4gICAgICAgIDx0cmVlLW5vZGUtY2hpbGRyZW4gW25vZGVdPVwibm9kZVwiIFt0ZW1wbGF0ZXNdPVwidGVtcGxhdGVzXCI+PC90cmVlLW5vZGUtY2hpbGRyZW4+XG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90IFtkcm9wSW5kZXhdPVwibm9kZS5pbmRleCArIDFcIiBbbm9kZV09XCJub2RlLnBhcmVudFwiPjwvdHJlZS1ub2RlLWRyb3Atc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZXMudHJlZU5vZGVGdWxsVGVtcGxhdGVcIlxuICAgICAgICBbbmdPdXRsZXRDb250ZXh0XT1cInsgJGltcGxpY2l0OiBub2RlLCBub2RlOiBub2RlLCBpbmRleDogaW5kZXgsIHRlbXBsYXRlczogdGVtcGxhdGVzIH1cIj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvbmctY29udGFpbmVyPmBcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ25vZGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4naW5kZXgnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4ndGVtcGxhdGVzJzogW3sgdHlwZTogSW5wdXQgfSxdLFxufTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree-viewport.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_virtual_scroll_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-virtual-scroll.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_events__ = __webpack_require__("../../../../angular-tree-component/dist/constants/events.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewportComponent; });




var TreeViewportComponent = (function () {
    function TreeViewportComponent(elementRef, virtualScroll) {
        this.elementRef = elementRef;
        this.virtualScroll = virtualScroll;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__deprecated_selector__["a" /* deprecatedSelector */])('TreeNode', 'tree-node', elementRef);
    }
    TreeViewportComponent.prototype.ngOnInit = function () {
        this.virtualScroll.init();
    };
    TreeViewportComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.setViewport();
            _this.virtualScroll.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_3__constants_events__["a" /* TREE_EVENTS */].onInitialized });
        });
    };
    TreeViewportComponent.prototype.ngOnDestroy = function () {
        this.virtualScroll.clear();
    };
    TreeViewportComponent.prototype.onScroll = function (e) {
        this._onWheel(e);
    };
    TreeViewportComponent.prototype.getTotalHeight = function () {
        return this.virtualScroll.isEnabled() && this.virtualScroll.totalHeight + 'px' || 'auto';
    };
    TreeViewportComponent.prototype._onWheel = function (e) {
        this.setViewport();
    };
    TreeViewportComponent.prototype.setViewport = function () {
        this.virtualScroll.setViewport(this.elementRef.nativeElement);
    };
    return TreeViewportComponent;
}());

TreeViewportComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'TreeViewport, tree-viewport',
                styles: [
                    ":host {\n      height: 100%;\n      overflow: auto;\n      display: block;\n    }"
                ],
                providers: [__WEBPACK_IMPORTED_MODULE_1__models_tree_virtual_scroll_model__["a" /* TreeVirtualScroll */]],
                template: "\n    <ng-container *mobxAutorun>\n      <div [style.height]=\"getTotalHeight()\">\n        <ng-content></ng-content>\n      </div>\n    </ng-container>\n  "
            },] },
];
/** @nocollapse */
TreeViewportComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__models_tree_virtual_scroll_model__["a" /* TreeVirtualScroll */], },
]; };
TreeViewportComponent.propDecorators = {
    'onScroll': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['scroll', ['$event'],] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUtdmlld3BvcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBQSxFQUErQixZQUFBLEVBQzNDLE1BQU0sZUFBQSxDQUFnQjtBQUN2QixPQUFPLEVBQUUsaUJBQUEsRUFBa0IsTUFBTyxxQ0FBQSxDQUFzQztBQUN4RSxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUM1RCxPQUFPLEVBQUUsV0FBQSxFQUFZLE1BQU8scUJBQUEsQ0FBc0I7QUFHbEQ7SUFDRSwrQkFDVSxVQUFzQixFQUN2QixhQUFnQztRQUQvQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtRQUV2QyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFHRCx3Q0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELDhDQUFjLEdBQWQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDO0lBQzNGLENBQUM7SUFFRCx3Q0FBUSxHQUFSLFVBQVMsQ0FBQztRQUNSLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQTZCSCw0QkFBQztBQUFELENBbkVBLEFBbUVDOztBQTVCTSxnQ0FBVSxHQUEwQjtJQUMzQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLE1BQU0sRUFBRTtvQkFDTixtRkFJRTtpQkFDSDtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUIsUUFBUSxFQUFFLDhKQU1UO2FBQ0YsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLG9DQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7SUFDcEIsRUFBQyxJQUFJLEVBQUUsaUJBQWlCLEdBQUc7Q0FDMUIsRUFINkYsQ0FHN0YsQ0FBQztBQUNLLG9DQUFjLEdBQTJDO0lBQ2hFLFVBQVUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRyxFQUFFLEVBQUU7Q0FDcEUsQ0FBQyIsImZpbGUiOiJ0cmVlLXZpZXdwb3J0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdFbmNhcHN1bGF0aW9uLCBIb3N0TGlzdGVuZXIsIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZVZpcnR1YWxTY3JvbGwgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcbmltcG9ydCB7IFRSRUVfRVZFTlRTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVWaWV3cG9ydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyB2aXJ0dWFsU2Nyb2xsOiBUcmVlVmlydHVhbFNjcm9sbCkge1xuXG4gICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlTm9kZScsICd0cmVlLW5vZGUnLCBlbGVtZW50UmVmKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5pbml0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFZpZXdwb3J0KCk7XG4gICAgICB0aGlzLnZpcnR1YWxTY3JvbGwuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkluaXRpYWxpemVkIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy52aXJ0dWFsU2Nyb2xsLmNsZWFyKCk7XG4gIH1cblxuICBcbiAgb25TY3JvbGwoZSkge1xuICAgIHRoaXMuX29uV2hlZWwoZSk7XG4gIH1cblxuICBnZXRUb3RhbEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy52aXJ0dWFsU2Nyb2xsLmlzRW5hYmxlZCgpICYmIHRoaXMudmlydHVhbFNjcm9sbC50b3RhbEhlaWdodCArICdweCcgfHwgJ2F1dG8nO1xuICB9XG5cbiAgX29uV2hlZWwoZSkge1xuICAgIHRoaXMuc2V0Vmlld3BvcnQoKTtcbiAgfVxuXG4gIHNldFZpZXdwb3J0KCkge1xuICAgIHRoaXMudmlydHVhbFNjcm9sbC5zZXRWaWV3cG9ydCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdUcmVlVmlld3BvcnQsIHRyZWUtdmlld3BvcnQnLFxuICBzdHlsZXM6IFtcbiAgICBgOmhvc3Qge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9YFxuICBdLFxuICBwcm92aWRlcnM6IFtUcmVlVmlydHVhbFNjcm9sbF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciAqbW9ieEF1dG9ydW4+XG4gICAgICA8ZGl2IFtzdHlsZS5oZWlnaHRdPVwiZ2V0VG90YWxIZWlnaHQoKVwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYFxufSwgXSB9LFxuXTtcbi8qKiBAbm9jb2xsYXBzZSAqL1xuc3RhdGljIGN0b3JQYXJhbWV0ZXJzOiAoKSA9PiAoe3R5cGU6IGFueSwgZGVjb3JhdG9ycz86IERlY29yYXRvckludm9jYXRpb25bXX18bnVsbClbXSA9ICgpID0+IFtcbnt0eXBlOiBFbGVtZW50UmVmLCB9LFxue3R5cGU6IFRyZWVWaXJ0dWFsU2Nyb2xsLCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nb25TY3JvbGwnOiBbeyB0eXBlOiBIb3N0TGlzdGVuZXIsIGFyZ3M6IFsnc2Nyb2xsJywgWyckZXZlbnQnXSwgXSB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/components/tree.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deprecated_selector__ = __webpack_require__("../../../../angular-tree-component/dist/deprecated-selector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });





var includes = __WEBPACK_IMPORTED_MODULE_4_lodash__["includes"], pick = __WEBPACK_IMPORTED_MODULE_4_lodash__["pick"];
var TreeComponent = (function () {
    function TreeComponent(treeModel, treeDraggedElement, renderer, elementRef) {
        var _this = this;
        this.treeModel = treeModel;
        this.treeDraggedElement = treeDraggedElement;
        this.renderer = renderer;
        this.elementRef = elementRef;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__deprecated_selector__["a" /* deprecatedSelector */])('Tree', 'tree-root', elementRef);
        treeModel.eventNames.forEach(function (name) { return _this[name] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); });
        treeModel.subscribeToState(function (state) { return _this.stateChange.emit(state); });
    }
    Object.defineProperty(TreeComponent.prototype, "nodes", {
        // Will be handled in ngOnChanges
        set: function (nodes) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "options", {
        set: function (options) { },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeComponent.prototype, "focused", {
        set: function (value) {
            this.treeModel.setFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeComponent.prototype, "state", {
        set: function (state) {
            this.treeModel.setState(state);
        },
        enumerable: true,
        configurable: true
    });
    TreeComponent.prototype.onKeydown = function ($event) {
        if (!this.treeModel.isFocused)
            return;
        if (includes(['input', 'textarea'], document.activeElement.tagName.toLowerCase()))
            return;
        var focusedNode = this.treeModel.getFocusedNode();
        this.treeModel.performKeyAction(focusedNode, $event);
    };
    TreeComponent.prototype.onMousedown = function ($event) {
        var insideClick = this.renderer.invokeElementMethod($event.target, 'closest', ['Tree']);
        if (!insideClick) {
            this.treeModel.setFocus(false);
        }
    };
    TreeComponent.prototype.ngOnChanges = function (changes) {
        this.treeModel.setData({
            options: changes.options && changes.options.currentValue,
            nodes: changes.nodes && changes.nodes.currentValue,
            events: pick(this, this.treeModel.eventNames)
        });
    };
    TreeComponent.prototype.sizeChanged = function () {
        this.viewportComponent.setViewport();
    };
    return TreeComponent;
}());

TreeComponent.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                selector: 'Tree, tree-root',
                encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
                providers: [__WEBPACK_IMPORTED_MODULE_1__models_tree_model__["a" /* TreeModel */]],
                styles: [
                    '.tree-children { padding-left: 20px }',
                    '.empty-tree-drop-slot .node-drop-slot { height: 20px; min-width: 100px }',
                    ".tree {\n      width: 100%;\n      position:relative;\n      display: inline-block;\n      cursor: pointer;\n      -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none;   /* Chrome/Safari/Opera */\n      -khtml-user-select: none;    /* Konqueror */\n      -moz-user-select: none;      /* Firefox */\n      -ms-user-select: none;       /* IE/Edge */\n      user-select: none;           /* non-prefixed version, currently not supported by any browser */\n    }"
                ],
                template: "\n    <tree-viewport #viewport>\n      <div\n        class=\"tree\"\n        [class.node-dragging]=\"treeDraggedElement.isDragging()\">\n        <tree-node-collection\n          *ngIf=\"treeModel.roots\"\n          [nodes]=\"treeModel.roots\"\n          [treeModel]=\"treeModel\"\n          [templates]=\"{\n            loadingTemplate: loadingTemplate,\n            treeNodeTemplate: treeNodeTemplate,\n            treeNodeWrapperTemplate: treeNodeWrapperTemplate,\n            treeNodeFullTemplate: treeNodeFullTemplate\n          }\">\n        </tree-node-collection>\n        <tree-node-drop-slot\n          class=\"empty-tree-drop-slot\"\n          *ngIf=\"treeModel.isEmptyTree()\"\n          [dropIndex]=\"0\"\n          [node]=\"treeModel.virtualRoot\">\n        </tree-node-drop-slot>\n      </div>\n    </tree-viewport>\n  "
            },] },
];
/** @nocollapse */
TreeComponent.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_1__models_tree_model__["a" /* TreeModel */], },
    { type: __WEBPACK_IMPORTED_MODULE_2__models_tree_dragged_element_model__["a" /* TreeDraggedElement */], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
]; };
TreeComponent.propDecorators = {
    'loadingTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: ['loadingTemplate',] },],
    'treeNodeTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: ['treeNodeTemplate',] },],
    'treeNodeWrapperTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: ['treeNodeWrapperTemplate',] },],
    'treeNodeFullTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"], args: ['treeNodeFullTemplate',] },],
    'viewportComponent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"], args: ['viewport',] },],
    'nodes': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'options': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'focused': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'state': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onToggleExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onActivate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onDeactivate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onUpdateData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onInitialized': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onMoveNode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onLoadChildren': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onChangeFilter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onEvent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'toggleExpanded': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'activate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'deactivate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'focus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'blur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'updateData': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'initialized': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'moveNode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'loadChildren': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'changeFilter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'event': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'stateChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['body: keydown', ['$event'],] },],
    'onMousedown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['body: mousedown', ['$event'],] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb21wb25lbnRzL3RyZWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBQSxFQUFPLE1BQUEsRUFBbUIsWUFBQSxFQUFjLFFBQUEsRUFBVSxVQUFBLEVBQzdELGlCQUFpQixFQUFFLFlBQUEsRUFBMkIsWUFBQSxFQUFjLFNBQUEsRUFDN0QsTUFBTSxlQUFBLENBQWdCO0FBQ3ZCLE9BQU8sRUFBRSxTQUFBLEVBQVUsTUFBTyxzQkFBQSxDQUF1QjtBQUVqRCxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxzQ0FBQSxDQUF1QztBQUcxRSxPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyx3QkFBQSxDQUF5QjtBQUU1RCxPQUFPLEtBQUssQ0FBQSxNQUFPLFFBQUEsQ0FBUztBQUVwQixJQUFBLHFCQUFBLEVBQVUsYUFBQSxDQUFZO0FBRzlCO0lBZ0RFLHVCQUNTLFNBQW9CLEVBQ3BCLGtCQUFzQyxFQUNyQyxRQUFrQixFQUNsQixVQUFzQjtRQUpoQyxpQkFTQztRQVJRLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUNyQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFFNUIsa0JBQWtCLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDeEUsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUN4RSxDQUFD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QUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDcEMsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUNyQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFO0lBQzlCLGdCQUFnQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDckMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDL0IsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDNUIsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDM0IsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDakMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbEMsVUFBVSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDL0IsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbkMsT0FBTyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDNUIsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUU7SUFDbEMsV0FBVyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFHLEVBQUUsRUFBRTtJQUM3RSxhQUFhLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRyxFQUFFLEVBQUU7Q0FDaEYsQ0FBQyIsImZpbGUiOiJ0cmVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIE9uQ2hhbmdlcywgRXZlbnRFbWl0dGVyLCBSZW5kZXJlciwgRWxlbWVudFJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb24sIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuLi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscy90cmVlLW9wdGlvbnMubW9kZWwnO1xuaW1wb3J0IHsgVHJlZVZpZXdwb3J0Q29tcG9uZW50IH0gZnJvbSAnLi90cmVlLXZpZXdwb3J0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZXByZWNhdGVkU2VsZWN0b3IgfSBmcm9tICcuLi9kZXByZWNhdGVkLXNlbGVjdG9yJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB7IGluY2x1ZGVzLCBwaWNrIH0gID0gXztcblxuXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIF9ub2RlczogYW55W107XG4gIF9vcHRpb25zOiBUcmVlT3B0aW9ucztcblxuICAgbG9hZGluZ1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgdHJlZU5vZGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgIHRyZWVOb2RlV3JhcHBlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgdHJlZU5vZGVGdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgIHZpZXdwb3J0Q29tcG9uZW50OiBUcmVlVmlld3BvcnRDb21wb25lbnQ7XG5cbiAgLy8gV2lsbCBiZSBoYW5kbGVkIGluIG5nT25DaGFuZ2VzXG4gICBzZXQgbm9kZXMobm9kZXM6IGFueVtdKSB7IH07XG4gICBzZXQgb3B0aW9ucyhvcHRpb25zOiBUcmVlT3B0aW9ucykgeyB9O1xuXG4gICBzZXQgZm9jdXNlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKHZhbHVlKTtcbiAgfVxuXG4gICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICAgb25Ub2dnbGVFeHBhbmRlZDtcbiAgIG9uQWN0aXZhdGU7XG4gICBvbkRlYWN0aXZhdGU7XG4gICBvbkZvY3VzO1xuICAgb25CbHVyO1xuICAgb25VcGRhdGVEYXRhO1xuICAgb25Jbml0aWFsaXplZDtcbiAgIG9uTW92ZU5vZGU7XG4gICBvbkxvYWRDaGlsZHJlbjtcbiAgIG9uQ2hhbmdlRmlsdGVyO1xuICAgb25FdmVudDtcblxuICAgdG9nZ2xlRXhwYW5kZWQ7XG4gICBhY3RpdmF0ZTtcbiAgIGRlYWN0aXZhdGU7XG4gICBmb2N1cztcbiAgIGJsdXI7XG4gICB1cGRhdGVEYXRhO1xuICAgaW5pdGlhbGl6ZWQ7XG4gICBtb3ZlTm9kZTtcbiAgIGxvYWRDaGlsZHJlbjtcbiAgIGNoYW5nZUZpbHRlcjtcbiAgIGV2ZW50O1xuICAgc3RhdGVDaGFuZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHRyZWVNb2RlbDogVHJlZU1vZGVsLFxuICAgIHB1YmxpYyB0cmVlRHJhZ2dlZEVsZW1lbnQ6IFRyZWVEcmFnZ2VkRWxlbWVudCxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcblxuICAgICAgZGVwcmVjYXRlZFNlbGVjdG9yKCdUcmVlJywgJ3RyZWUtcm9vdCcsIGVsZW1lbnRSZWYpO1xuICAgICAgdHJlZU1vZGVsLmV2ZW50TmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gdGhpc1tuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKSk7XG4gICAgICB0cmVlTW9kZWwuc3Vic2NyaWJlVG9TdGF0ZSgoc3RhdGUpID0+IHRoaXMuc3RhdGVDaGFuZ2UuZW1pdChzdGF0ZSkpO1xuICB9XG5cbiAgXG4gIG9uS2V5ZG93bigkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMudHJlZU1vZGVsLmlzRm9jdXNlZCkgcmV0dXJuO1xuICAgIGlmIChpbmNsdWRlcyhbJ2lucHV0JywgJ3RleHRhcmVhJ10sXG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZm9jdXNlZE5vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuXG4gICAgdGhpcy50cmVlTW9kZWwucGVyZm9ybUtleUFjdGlvbihmb2N1c2VkTm9kZSwgJGV2ZW50KTtcbiAgfVxuXG4gIFxuICBvbk1vdXNlZG93bigkZXZlbnQpIHtcbiAgICBjb25zdCBpbnNpZGVDbGljayA9IHRoaXMucmVuZGVyZXIuaW52b2tlRWxlbWVudE1ldGhvZCgkZXZlbnQudGFyZ2V0LCAnY2xvc2VzdCcsIFsnVHJlZSddKTtcblxuICAgIGlmICghaW5zaWRlQ2xpY2spIHtcbiAgICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0RGF0YSh7XG4gICAgICBvcHRpb25zOiBjaGFuZ2VzLm9wdGlvbnMgJiYgY2hhbmdlcy5vcHRpb25zLmN1cnJlbnRWYWx1ZSxcbiAgICAgIG5vZGVzOiBjaGFuZ2VzLm5vZGVzICYmIGNoYW5nZXMubm9kZXMuY3VycmVudFZhbHVlLFxuICAgICAgZXZlbnRzOiBwaWNrKHRoaXMsIHRoaXMudHJlZU1vZGVsLmV2ZW50TmFtZXMpXG4gICAgfSk7XG4gIH1cblxuICBzaXplQ2hhbmdlZCgpIHtcbiAgICB0aGlzLnZpZXdwb3J0Q29tcG9uZW50LnNldFZpZXdwb3J0KCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IENvbXBvbmVudCwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdUcmVlLCB0cmVlLXJvb3QnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtUcmVlTW9kZWxdLFxuICBzdHlsZXM6IFtcbiAgICAnLnRyZWUtY2hpbGRyZW4geyBwYWRkaW5nLWxlZnQ6IDIwcHggfScsXG4gICAgJy5lbXB0eS10cmVlLWRyb3Atc2xvdCAubm9kZS1kcm9wLXNsb3QgeyBoZWlnaHQ6IDIwcHg7IG1pbi13aWR0aDogMTAwcHggfScsXG4gICAgYC50cmVlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IC8qIGlPUyBTYWZhcmkgKi9cbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7ICAgLyogQ2hyb21lL1NhZmFyaS9PcGVyYSAqL1xuICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAgICAvKiBLb25xdWVyb3IgKi9cbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7ICAgICAgLyogRmlyZWZveCAqL1xuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAgICAgICAvKiBJRS9FZGdlICovXG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTsgICAgICAgICAgIC8qIG5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHkgbm90IHN1cHBvcnRlZCBieSBhbnkgYnJvd3NlciAqL1xuICAgIH1gXG4gIF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRyZWUtdmlld3BvcnQgI3ZpZXdwb3J0PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cInRyZWVcIlxuICAgICAgICBbY2xhc3Mubm9kZS1kcmFnZ2luZ109XCJ0cmVlRHJhZ2dlZEVsZW1lbnQuaXNEcmFnZ2luZygpXCI+XG4gICAgICAgIDx0cmVlLW5vZGUtY29sbGVjdGlvblxuICAgICAgICAgICpuZ0lmPVwidHJlZU1vZGVsLnJvb3RzXCJcbiAgICAgICAgICBbbm9kZXNdPVwidHJlZU1vZGVsLnJvb3RzXCJcbiAgICAgICAgICBbdHJlZU1vZGVsXT1cInRyZWVNb2RlbFwiXG4gICAgICAgICAgW3RlbXBsYXRlc109XCJ7XG4gICAgICAgICAgICBsb2FkaW5nVGVtcGxhdGU6IGxvYWRpbmdUZW1wbGF0ZSxcbiAgICAgICAgICAgIHRyZWVOb2RlVGVtcGxhdGU6IHRyZWVOb2RlVGVtcGxhdGUsXG4gICAgICAgICAgICB0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZTogdHJlZU5vZGVXcmFwcGVyVGVtcGxhdGUsXG4gICAgICAgICAgICB0cmVlTm9kZUZ1bGxUZW1wbGF0ZTogdHJlZU5vZGVGdWxsVGVtcGxhdGVcbiAgICAgICAgICB9XCI+XG4gICAgICAgIDwvdHJlZS1ub2RlLWNvbGxlY3Rpb24+XG4gICAgICAgIDx0cmVlLW5vZGUtZHJvcC1zbG90XG4gICAgICAgICAgY2xhc3M9XCJlbXB0eS10cmVlLWRyb3Atc2xvdFwiXG4gICAgICAgICAgKm5nSWY9XCJ0cmVlTW9kZWwuaXNFbXB0eVRyZWUoKVwiXG4gICAgICAgICAgW2Ryb3BJbmRleF09XCIwXCJcbiAgICAgICAgICBbbm9kZV09XCJ0cmVlTW9kZWwudmlydHVhbFJvb3RcIj5cbiAgICAgICAgPC90cmVlLW5vZGUtZHJvcC1zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC90cmVlLXZpZXdwb3J0PlxuICBgXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFRyZWVNb2RlbCwgfSxcbnt0eXBlOiBUcmVlRHJhZ2dlZEVsZW1lbnQsIH0sXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbl07XG5zdGF0aWMgcHJvcERlY29yYXRvcnM6IHtba2V5OiBzdHJpbmddOiBEZWNvcmF0b3JJbnZvY2F0aW9uW119ID0ge1xuJ2xvYWRpbmdUZW1wbGF0ZSc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZCwgYXJnczogWydsb2FkaW5nVGVtcGxhdGUnLCBdIH0sXSxcbid0cmVlTm9kZVRlbXBsYXRlJzogW3sgdHlwZTogQ29udGVudENoaWxkLCBhcmdzOiBbJ3RyZWVOb2RlVGVtcGxhdGUnLCBdIH0sXSxcbid0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZSc6IFt7IHR5cGU6IENvbnRlbnRDaGlsZCwgYXJnczogWyd0cmVlTm9kZVdyYXBwZXJUZW1wbGF0ZScsIF0gfSxdLFxuJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJzogW3sgdHlwZTogQ29udGVudENoaWxkLCBhcmdzOiBbJ3RyZWVOb2RlRnVsbFRlbXBsYXRlJywgXSB9LF0sXG4ndmlld3BvcnRDb21wb25lbnQnOiBbeyB0eXBlOiBWaWV3Q2hpbGQsIGFyZ3M6IFsndmlld3BvcnQnLCBdIH0sXSxcbidub2Rlcyc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvcHRpb25zJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ2ZvY3VzZWQnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nc3RhdGUnOiBbeyB0eXBlOiBJbnB1dCB9LF0sXG4nb25Ub2dnbGVFeHBhbmRlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25BY3RpdmF0ZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25EZWFjdGl2YXRlJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkZvY3VzJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkJsdXInOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ29uVXBkYXRlRGF0YSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Jbml0aWFsaXplZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Nb3ZlTm9kZSc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nb25Mb2FkQ2hpbGRyZW4nOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ29uQ2hhbmdlRmlsdGVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidvbkV2ZW50JzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid0b2dnbGVFeHBhbmRlZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nYWN0aXZhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2RlYWN0aXZhdGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2ZvY3VzJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidibHVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbid1cGRhdGVEYXRhJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidpbml0aWFsaXplZCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nbW92ZU5vZGUnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ2xvYWRDaGlsZHJlbic6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nY2hhbmdlRmlsdGVyJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidldmVudCc6IFt7IHR5cGU6IE91dHB1dCB9LF0sXG4nc3RhdGVDaGFuZ2UnOiBbeyB0eXBlOiBPdXRwdXQgfSxdLFxuJ29uS2V5ZG93bic6IFt7IHR5cGU6IEhvc3RMaXN0ZW5lciwgYXJnczogWydib2R5OiBrZXlkb3duJywgWyckZXZlbnQnXSwgXSB9LF0sXG4nb25Nb3VzZWRvd24nOiBbeyB0eXBlOiBIb3N0TGlzdGVuZXIsIGFyZ3M6IFsnYm9keTogbW91c2Vkb3duJywgWyckZXZlbnQnXSwgXSB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/constants/events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TREE_EVENTS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = newName;
var TREE_EVENTS = {
    onToggleExpanded: 'onToggleExpanded',
    onActivate: 'onActivate',
    onDeactivate: 'onDeactivate',
    onFocus: 'onFocus',
    onBlur: 'onBlur',
    onInitialized: 'onInitialized',
    onUpdateData: 'onUpdateData',
    onMoveNode: 'onMoveNode',
    onEvent: 'onEvent',
    onLoadChildren: 'onLoadChildren',
    onChangeFilter: 'onChangeFilter',
    toggleExpanded: 'toggleExpanded',
    activate: 'activate',
    deactivate: 'deactivate',
    focus: 'focus',
    blur: 'blur',
    initialized: 'initialized',
    updateData: 'updateData',
    moveNode: 'moveNode',
    event: 'event',
    loadChildren: 'loadChildren',
    changeFilter: 'changeFilterr',
    stateChange: 'stateChange'
};
function newName(name) {
    return name[2].toLowerCase() + name.slice(3);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb25zdGFudHMvZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FBRztJQUN6QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsVUFBVSxFQUFFLFlBQVk7SUFDeEIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsYUFBYSxFQUFFLGVBQWU7SUFDOUIsWUFBWSxFQUFFLGNBQWM7SUFDNUIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxjQUFjLEVBQUUsZ0JBQWdCO0lBRWhDLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsUUFBUSxFQUFFLFVBQVU7SUFDcEIsVUFBVSxFQUFFLFlBQVk7SUFDeEIsS0FBSyxFQUFFLE9BQU87SUFDZCxJQUFJLEVBQUUsTUFBTTtJQUNaLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLEtBQUssRUFBRSxPQUFPO0lBQ2QsWUFBWSxFQUFFLGNBQWM7SUFDNUIsWUFBWSxFQUFFLGVBQWU7SUFDN0IsV0FBVyxFQUFFLGFBQWE7Q0FDM0IsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLElBQUk7SUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMiLCJmaWxlIjoiZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUUkVFX0VWRU5UUyA9IHtcbiAgb25Ub2dnbGVFeHBhbmRlZDogJ29uVG9nZ2xlRXhwYW5kZWQnLFxuICBvbkFjdGl2YXRlOiAnb25BY3RpdmF0ZScsXG4gIG9uRGVhY3RpdmF0ZTogJ29uRGVhY3RpdmF0ZScsXG4gIG9uRm9jdXM6ICdvbkZvY3VzJyxcbiAgb25CbHVyOiAnb25CbHVyJyxcbiAgb25Jbml0aWFsaXplZDogJ29uSW5pdGlhbGl6ZWQnLFxuICBvblVwZGF0ZURhdGE6ICdvblVwZGF0ZURhdGEnLFxuICBvbk1vdmVOb2RlOiAnb25Nb3ZlTm9kZScsXG4gIG9uRXZlbnQ6ICdvbkV2ZW50JyxcbiAgb25Mb2FkQ2hpbGRyZW46ICdvbkxvYWRDaGlsZHJlbicsXG4gIG9uQ2hhbmdlRmlsdGVyOiAnb25DaGFuZ2VGaWx0ZXInLFxuXG4gIHRvZ2dsZUV4cGFuZGVkOiAndG9nZ2xlRXhwYW5kZWQnLFxuICBhY3RpdmF0ZTogJ2FjdGl2YXRlJyxcbiAgZGVhY3RpdmF0ZTogJ2RlYWN0aXZhdGUnLFxuICBmb2N1czogJ2ZvY3VzJyxcbiAgYmx1cjogJ2JsdXInLFxuICBpbml0aWFsaXplZDogJ2luaXRpYWxpemVkJyxcbiAgdXBkYXRlRGF0YTogJ3VwZGF0ZURhdGEnLFxuICBtb3ZlTm9kZTogJ21vdmVOb2RlJyxcbiAgZXZlbnQ6ICdldmVudCcsXG4gIGxvYWRDaGlsZHJlbjogJ2xvYWRDaGlsZHJlbicsXG4gIGNoYW5nZUZpbHRlcjogJ2NoYW5nZUZpbHRlcnInLFxuICBzdGF0ZUNoYW5nZTogJ3N0YXRlQ2hhbmdlJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG5ld05hbWUobmFtZSkge1xuICByZXR1cm4gbmFtZVsyXS50b0xvd2VyQ2FzZSgpICsgbmFtZS5zbGljZSgzKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/constants/keys.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYS; });
var KEYS = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13,
    SPACE: 32
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9jb25zdGFudHMva2V5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsSUFBTSxJQUFJLEdBQUc7SUFDbEIsSUFBSSxFQUFFLEVBQUU7SUFDUixFQUFFLEVBQUUsRUFBRTtJQUNOLEtBQUssRUFBRSxFQUFFO0lBQ1QsSUFBSSxFQUFFLEVBQUU7SUFDUixLQUFLLEVBQUUsRUFBRTtJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1YsQ0FBQyIsImZpbGUiOiJrZXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBLRVlTID0ge1xuICBMRUZUOiAzNyxcbiAgVVA6IDM4LFxuICBSSUdIVDogMzksXG4gIERPV046IDQwLFxuICBFTlRFUjogMTMsXG4gIFNQQUNFOiAzMlxufTtcbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/deprecated-selector.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = deprecatedSelector;
function deprecatedSelector(oldSelector, newSelector, element) {
    if (element.nativeElement.tagName && element.nativeElement.tagName.toLowerCase() === oldSelector.toLowerCase()) {
        console.warn("If you are using the capitalized '" + oldSelector + "' selector please move to the \n      kebab-case '" + newSelector + "' selector, as the capitalized will be soon deprecated");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9kZXByZWNhdGVkLXNlbGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sNkJBQTZCLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTztJQUNsRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9HLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUNBQXNDLFdBQVcsMERBQzdDLFdBQVcsMkRBQXlELENBQUMsQ0FBQztJQUN6RixDQUFDO0FBQ0gsQ0FBQyIsImZpbGUiOiJkZXByZWNhdGVkLXNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZXByZWNhdGVkU2VsZWN0b3Iob2xkU2VsZWN0b3IsIG5ld1NlbGVjdG9yLCBlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZSAmJiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBvbGRTZWxlY3Rvci50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY29uc29sZS53YXJuKGBJZiB5b3UgYXJlIHVzaW5nIHRoZSBjYXBpdGFsaXplZCBcXCcke29sZFNlbGVjdG9yfVxcJyBzZWxlY3RvciBwbGVhc2UgbW92ZSB0byB0aGUgXG4gICAgICBrZWJhYi1jYXNlIFxcJyR7bmV3U2VsZWN0b3J9XFwnIHNlbGVjdG9yLCBhcyB0aGUgY2FwaXRhbGl6ZWQgd2lsbCBiZSBzb29uIGRlcHJlY2F0ZWRgKTtcbiAgfVxufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/directives/tree-animate-open.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeAnimateOpenDirective; });

var EASE_ACCELERATION = 1.005;
var TreeAnimateOpenDirective = (function () {
    function TreeAnimateOpenDirective(renderer, templateRef, viewContainerRef) {
        this.renderer = renderer;
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
    }
    Object.defineProperty(TreeAnimateOpenDirective.prototype, "isOpen", {
        set: function (value) {
            if (value) {
                this._show();
                if (this.isEnabled && this._isOpen === false) {
                    this._animateOpen();
                }
            }
            else {
                this.isEnabled ? this._animateClose() : this._hide();
            }
            this._isOpen = !!value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    TreeAnimateOpenDirective.prototype._show = function () {
        if (this.innerElement)
            return;
        // create child view
        this.innerElement = this.viewContainerRef.createEmbeddedView(this.templateRef).rootNodes[0];
    };
    TreeAnimateOpenDirective.prototype._hide = function () {
        this.viewContainerRef.clear();
        this.innerElement = null;
    };
    TreeAnimateOpenDirective.prototype._animateOpen = function () {
        var _this = this;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var maxHeight = 0;
        // set height to 0
        this.renderer.setElementStyle(this.innerElement, 'max-height', "0");
        // increase maxHeight until height doesn't change
        setTimeout(function () {
            var i = setInterval(function () {
                if (!_this._isOpen || !_this.innerElement)
                    return clearInterval(i);
                maxHeight += delta;
                var roundedMaxHeight = Math.round(maxHeight);
                _this.renderer.setElementStyle(_this.innerElement, 'max-height', roundedMaxHeight + "px");
                var height = _this.innerElement.getBoundingClientRect().height; // TBD use renderer
                delta *= ease;
                ease *= EASE_ACCELERATION;
                if (height < roundedMaxHeight) {
                    // Make maxHeight auto because animation finished and container might change height later on
                    _this.renderer.setElementStyle(_this.innerElement, 'max-height', null);
                    clearInterval(i);
                }
            }, 17);
        });
    };
    TreeAnimateOpenDirective.prototype._animateClose = function () {
        var _this = this;
        if (!this.innerElement)
            return;
        var delta = this.animateSpeed;
        var ease = this.animateAcceleration;
        var height = this.innerElement.getBoundingClientRect().height; // TBD use renderer
        // slowly decrease maxHeight to 0, starting from current height
        var i = setInterval(function () {
            if (_this._isOpen || !_this.innerElement)
                return clearInterval(i);
            height -= delta;
            _this.renderer.setElementStyle(_this.innerElement, 'max-height', height + "px");
            delta *= ease;
            ease *= EASE_ACCELERATION;
            if (height <= 0) {
                // after animation complete - remove child element
                _this.viewContainerRef.clear();
                _this.innerElement = null;
                clearInterval(i);
            }
        }, 17);
    };
    return TreeAnimateOpenDirective;
}());

TreeAnimateOpenDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[treeAnimateOpen]'
            },] },
];
/** @nocollapse */
TreeAnimateOpenDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
]; };
TreeAnimateOpenDirective.propDecorators = {
    'animateSpeed': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['treeAnimateOpenSpeed',] },],
    'animateAcceleration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['treeAnimateOpenAcceleration',] },],
    'isEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['treeAnimateOpenEnabled',] },],
    'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['treeAnimateOpen',] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtYW5pbWF0ZS1vcGVuLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLEtBQUEsRUFBcUIsUUFBQSxFQUN2QixXQUFBLEVBQWEsZ0JBQUEsRUFDdkIsTUFBTSxlQUFBLENBQWdCO0FBRXZCLElBQU0saUJBQUEsR0FBb0IsS0FBQSxDQUFNO0FBR2hDO0lBc0JFLGtDQUNVLFFBQWtCLEVBQ2xCLFdBQTZCLEVBQzdCLGdCQUFrQztRQUZsQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQWpCaEQsc0JBQUksNENBQU07YUFBVixVQUFXLEtBQWM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzdDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdkQsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFTTSx3Q0FBSyxHQUFiO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUFDLE1BQU0sQ0FBQztRQUU5QixvQkFBb0I7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJ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bnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgRWxlbWVudFJlZixcbiAgRG9DaGVjaywgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEVBU0VfQUNDRUxFUkFUSU9OID0gMS4wMDU7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVBbmltYXRlT3BlbkRpcmVjdGl2ZSB7XG4gIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcblxuICAgYW5pbWF0ZVNwZWVkOiBudW1iZXI7XG4gICBhbmltYXRlQWNjZWxlcmF0aW9uOiBudW1iZXI7XG4gICBpc0VuYWJsZWQ6IGJvb2xlYW47XG5cbiAgXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuX3Nob3coKTtcbiAgICAgIGlmICh0aGlzLmlzRW5hYmxlZCAmJiB0aGlzLl9pc09wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGVPcGVuKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNFbmFibGVkID8gdGhpcy5fYW5pbWF0ZUNsb3NlKCkgOiB0aGlzLl9oaWRlKCk7XG4gICAgfVxuICAgIHRoaXMuX2lzT3BlbiA9ICEhdmFsdWU7XG4gIH07XG5cbiAgcHJpdmF0ZSBpbm5lckVsZW1lbnQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICBwcml2YXRlIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBwcml2YXRlIF9zaG93KCkge1xuICAgIGlmICh0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgLy8gY3JlYXRlIGNoaWxkIHZpZXdcbiAgICB0aGlzLmlubmVyRWxlbWVudCA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZikucm9vdE5vZGVzWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZSgpIHtcbiAgICB0aGlzLnZpZXdDb250YWluZXJSZWYuY2xlYXIoKTtcbiAgICB0aGlzLmlubmVyRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9hbmltYXRlT3BlbigpIHtcbiAgICBsZXQgZGVsdGEgPSB0aGlzLmFuaW1hdGVTcGVlZDtcbiAgICBsZXQgZWFzZSA9IHRoaXMuYW5pbWF0ZUFjY2VsZXJhdGlvbjtcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcblxuICAgIC8vIHNldCBoZWlnaHQgdG8gMFxuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMuaW5uZXJFbGVtZW50LCAnbWF4LWhlaWdodCcsIGAwYCk7XG5cbiAgICAvLyBpbmNyZWFzZSBtYXhIZWlnaHQgdW50aWwgaGVpZ2h0IGRvZXNuJ3QgY2hhbmdlXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIEFsbG93IGlubmVyIGVsZW1lbnQgdG8gY3JlYXRlIGl0cyBjb250ZW50XG4gICAgICBjb25zdCBpID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbiB8fCAhdGhpcy5pbm5lckVsZW1lbnQpIHJldHVybiBjbGVhckludGVydmFsKGkpO1xuXG4gICAgICAgIG1heEhlaWdodCArPSBkZWx0YTtcbiAgICAgICAgY29uc3Qgcm91bmRlZE1heEhlaWdodCA9IE1hdGgucm91bmQobWF4SGVpZ2h0KTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBgJHtyb3VuZGVkTWF4SGVpZ2h0fXB4YCk7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaW5uZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDsgLy8gVEJEIHVzZSByZW5kZXJlclxuXG4gICAgICAgIGRlbHRhICo9IGVhc2U7XG4gICAgICAgIGVhc2UgKj0gRUFTRV9BQ0NFTEVSQVRJT047XG4gICAgICAgIGlmIChoZWlnaHQgPCByb3VuZGVkTWF4SGVpZ2h0KSB7XG4gICAgICAgICAgLy8gTWFrZSBtYXhIZWlnaHQgYXV0byBiZWNhdXNlIGFuaW1hdGlvbiBmaW5pc2hlZCBhbmQgY29udGFpbmVyIG1pZ2h0IGNoYW5nZSBoZWlnaHQgbGF0ZXIgb25cbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLmlubmVyRWxlbWVudCwgJ21heC1oZWlnaHQnLCBudWxsKTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGkpO1xuICAgICAgICB9XG4gICAgICB9LCAxNyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9hbmltYXRlQ2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLmlubmVyRWxlbWVudCkgcmV0dXJuO1xuXG4gICAgbGV0IGRlbHRhID0gdGhpcy5hbmltYXRlU3BlZWQ7XG4gICAgbGV0IGVhc2UgPSB0aGlzLmFuaW1hdGVBY2NlbGVyYXRpb247XG4gICAgbGV0IGhlaWdodCA9IHRoaXMuaW5uZXJFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDsgLy8gVEJEIHVzZSByZW5kZXJlclxuXG4gICAgLy8gc2xvd2x5IGRlY3JlYXNlIG1heEhlaWdodCB0byAwLCBzdGFydGluZyBmcm9tIGN1cnJlbnQgaGVpZ2h0XG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9pc09wZW4gfHwgIXRoaXMuaW5uZXJFbGVtZW50KSByZXR1cm4gY2xlYXJJbnRlcnZhbChpKTtcblxuICAgICAgaGVpZ2h0IC09IGRlbHRhO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50U3R5bGUodGhpcy5pbm5lckVsZW1lbnQsICdtYXgtaGVpZ2h0JywgYCR7aGVpZ2h0fXB4YCk7XG4gICAgICBkZWx0YSAqPSBlYXNlO1xuICAgICAgZWFzZSAqPSBFQVNFX0FDQ0VMRVJBVElPTjtcblxuICAgICAgaWYgKGhlaWdodCA8PSAwKSB7XG4gICAgICAgIC8vIGFmdGVyIGFuaW1hdGlvbiBjb21wbGV0ZSAtIHJlbW92ZSBjaGlsZCBlbGVtZW50XG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuICAgICAgICB0aGlzLmlubmVyRWxlbWVudCA9IG51bGw7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaSk7XG4gICAgICB9XG4gICAgfSwgMTcpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW3RyZWVBbmltYXRlT3Blbl0nXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IFJlbmRlcmVyLCB9LFxue3R5cGU6IFRlbXBsYXRlUmVmLCB9LFxue3R5cGU6IFZpZXdDb250YWluZXJSZWYsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidhbmltYXRlU3BlZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd0cmVlQW5pbWF0ZU9wZW5TcGVlZCcsIF0gfSxdLFxuJ2FuaW1hdGVBY2NlbGVyYXRpb24nOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd0cmVlQW5pbWF0ZU9wZW5BY2NlbGVyYXRpb24nLCBdIH0sXSxcbidpc0VuYWJsZWQnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWyd0cmVlQW5pbWF0ZU9wZW5FbmFibGVkJywgXSB9LF0sXG4naXNPcGVuJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsndHJlZUFuaW1hdGVPcGVuJywgXSB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/directives/tree-drag.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDragDirective; });


var DRAG_OVER_CLASS = 'is-dragging-over';
var TreeDragDirective = (function () {
    function TreeDragDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
    }
    TreeDragDirective.prototype.ngDoCheck = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', this.treeDragEnabled ? 'true' : 'false');
    };
    TreeDragDirective.prototype.onDragStart = function (ev) {
        var _this = this;
        // setting the data is required by firefox
        ev.dataTransfer.setData('text', ev.target.id);
        setTimeout(function () {
            _this.treeDraggedElement.set(_this.draggedElement);
            if (_this.draggedElement.mouseAction) {
                _this.draggedElement.mouseAction('dragStart', ev);
            }
        }, 30);
    };
    TreeDragDirective.prototype.onDragEnd = function () {
        if (this.draggedElement.mouseAction) {
            this.draggedElement.mouseAction('dragEnd');
        }
        this.treeDraggedElement.set(null);
    };
    return TreeDragDirective;
}());

TreeDragDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[treeDrag]'
            },] },
];
/** @nocollapse */
TreeDragDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__models_tree_dragged_element_model__["a" /* TreeDraggedElement */], },
]; };
TreeDragDirective.propDecorators = {
    'draggedElement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['treeDrag',] },],
    'treeDragEnabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onDragStart': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragstart', ['$event'],] },],
    'onDragEnd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragend',] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJhZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxLQUFBLEVBQU8sWUFBQSxFQUFjLFFBQUEsRUFBVSxVQUFBLEVBQW9CLE1BQU8sZUFBQSxDQUFnQjtBQUM5RixPQUFPLEVBQUUsa0JBQUEsRUFBbUIsTUFBTyxzQ0FBQSxDQUF1QztBQUUxRSxJQUFNLGVBQUEsR0FBa0Isa0JBQUEsQ0FBbUI7QUFHM0M7SUFJRSwyQkFBb0IsRUFBYyxFQUFVLFFBQWtCLEVBQVUsa0JBQXNDO1FBQTFGLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUM5RyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFQSx1Q0FBVyxHQUFYLFVBQVksRUFBRTtRQUFkLGlCQVVBO1FBVEMsMENBQTBDO1FBQzFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTlDLFVBQVUsQ0FBQztZQUNULEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELENBQUM7UUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDO0lBRUEscUNBQVMsR0FBVDtRQUNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBa0JILHdCQUFDO0FBQUQsQ0E5Q0EsQUE4Q0M7O0FBakJNLDRCQUFVLEdBQTBCO0lBQzNDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7YUFDdkIsRUFBRyxFQUFFO0NBQ0wsQ0FBQztBQUNGLGtCQUFrQjtBQUNYLGdDQUFjLEdBQW1FLGNBQU0sT0FBQTtJQUM5RixFQUFDLElBQUksRUFBRSxVQUFVLEdBQUc7SUFDcEIsRUFBQyxJQUFJLEVBQUUsUUFBUSxHQUFHO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixHQUFHO0NBQzNCLEVBSjZGLENBSTdGLENBQUM7QUFDSyxnQ0FBYyxHQUEyQztJQUNoRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUcsRUFBRSxFQUFFO0lBQzFELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDckMsYUFBYSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFHLEVBQUUsRUFBRTtJQUMzRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFHLEVBQUUsRUFBRTtDQUMxRCxDQUFDIiwiZmlsZSI6InRyZWUtZHJhZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgRWxlbWVudFJlZiwgRG9DaGVjayB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJlZURyYWdnZWRFbGVtZW50IH0gZnJvbSAnLi4vbW9kZWxzL3RyZWUtZHJhZ2dlZC1lbGVtZW50Lm1vZGVsJztcblxuY29uc3QgRFJBR19PVkVSX0NMQVNTID0gJ2lzLWRyYWdnaW5nLW92ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlRHJhZ0RpcmVjdGl2ZSBpbXBsZW1lbnRzIERvQ2hlY2sge1xuICAgZHJhZ2dlZEVsZW1lbnQ7XG4gICB0cmVlRHJhZ0VuYWJsZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsIHByaXZhdGUgdHJlZURyYWdnZWRFbGVtZW50OiBUcmVlRHJhZ2dlZEVsZW1lbnQpIHtcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZHJhZ2dhYmxlJywgdGhpcy50cmVlRHJhZ0VuYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgfVxuXG4gICBvbkRyYWdTdGFydChldikge1xuICAgIC8vIHNldHRpbmcgdGhlIGRhdGEgaXMgcmVxdWlyZWQgYnkgZmlyZWZveFxuICAgIGV2LmRhdGFUcmFuc2Zlci5zZXREYXRhKCd0ZXh0JywgZXYudGFyZ2V0LmlkKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KHRoaXMuZHJhZ2dlZEVsZW1lbnQpO1xuICAgICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcbiAgICAgICAgdGhpcy5kcmFnZ2VkRWxlbWVudC5tb3VzZUFjdGlvbignZHJhZ1N0YXJ0JywgZXYpO1xuICAgICAgfVxuICAgIH0sIDMwKTtcbiAgfVxuXG4gICBvbkRyYWdFbmQoKSB7XG4gICAgaWYgKHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24pIHtcbiAgICAgIHRoaXMuZHJhZ2dlZEVsZW1lbnQubW91c2VBY3Rpb24oJ2RyYWdFbmQnKTtcbiAgICB9XG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBEaXJlY3RpdmUsIGFyZ3M6IFt7XG4gIHNlbGVjdG9yOiAnW3RyZWVEcmFnXSdcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBSZW5kZXJlciwgfSxcbnt0eXBlOiBUcmVlRHJhZ2dlZEVsZW1lbnQsIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidkcmFnZ2VkRWxlbWVudCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ3RyZWVEcmFnJywgXSB9LF0sXG4ndHJlZURyYWdFbmFibGVkJzogW3sgdHlwZTogSW5wdXQgfSxdLFxuJ29uRHJhZ1N0YXJ0JzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10sIF0gfSxdLFxuJ29uRHJhZ0VuZCc6IFt7IHR5cGU6IEhvc3RMaXN0ZW5lciwgYXJnczogWydkcmFnZW5kJywgXSB9LF0sXG59O1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/directives/tree-drop.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tree_dragged_element_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-dragged-element.model.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDropDirective; });


var DRAG_OVER_CLASS = 'is-dragging-over';
var DRAG_DISABLED_CLASS = 'is-dragging-over-disabled';
var TreeDropDirective = (function () {
    function TreeDropDirective(el, renderer, treeDraggedElement) {
        this.el = el;
        this.renderer = renderer;
        this.treeDraggedElement = treeDraggedElement;
        this.onDropCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragOverCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragLeaveCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onDragEnterCallback = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._allowDrop = function (element, $event) { return true; };
    }
    Object.defineProperty(TreeDropDirective.prototype, "treeAllowDrop", {
        set: function (allowDrop) {
            if (allowDrop instanceof Function) {
                this._allowDrop = allowDrop;
            }
            else
                this._allowDrop = function (element, $event) { return allowDrop; };
        },
        enumerable: true,
        configurable: true
    });
    TreeDropDirective.prototype.allowDrop = function ($event) {
        return this._allowDrop(this.treeDraggedElement.get(), $event);
    };
    TreeDropDirective.prototype.onDragOver = function ($event) {
        if (!this.allowDrop($event))
            return this.addDisabledClass();
        this.onDragOverCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        $event.preventDefault();
        this.addClass();
    };
    TreeDropDirective.prototype.onDragEnter = function ($event) {
        if (!this.allowDrop($event))
            return;
        this.onDragEnterCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
    };
    TreeDropDirective.prototype.onDragLeave = function ($event) {
        if (!this.allowDrop($event))
            return this.removeDisabledClass();
        this.onDragLeaveCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        this.removeClass();
    };
    TreeDropDirective.prototype.onDrop = function ($event) {
        if (!this.allowDrop($event))
            return;
        $event.preventDefault();
        this.onDropCallback.emit({ event: $event, element: this.treeDraggedElement.get() });
        this.removeClass();
        this.treeDraggedElement.set(null);
    };
    TreeDropDirective.prototype.addClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_OVER_CLASS, true);
    };
    TreeDropDirective.prototype.removeClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_OVER_CLASS, false);
    };
    TreeDropDirective.prototype.addDisabledClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_DISABLED_CLASS, true);
    };
    TreeDropDirective.prototype.removeDisabledClass = function () {
        this.renderer.setElementClass(this.el.nativeElement, DRAG_DISABLED_CLASS, false);
    };
    return TreeDropDirective;
}());

TreeDropDirective.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                selector: '[treeDrop]'
            },] },
];
/** @nocollapse */
TreeDropDirective.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
    { type: __WEBPACK_IMPORTED_MODULE_1__models_tree_dragged_element_model__["a" /* TreeDraggedElement */], },
]; };
TreeDropDirective.propDecorators = {
    'onDropCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['treeDrop',] },],
    'onDragOverCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['treeDropDragOver',] },],
    'onDragLeaveCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['treeDropDragLeave',] },],
    'onDragEnterCallback': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"], args: ['treeDropDragEnter',] },],
    'treeAllowDrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    'onDragOver': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragover', ['$event'],] },],
    'onDragEnter': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragenter', ['$event'],] },],
    'onDragLeave': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['dragleave', ['$event'],] },],
    'onDrop': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['drop', ['$event'],] },],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL3RyZWUtZHJvcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQUEsRUFBVyxNQUFBLEVBQVEsS0FBQSxFQUFPLFlBQUEsRUFBYyxZQUFBLEVBQWMsUUFBQSxFQUFVLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFDM0csT0FBTyxFQUFFLGtCQUFBLEVBQW1CLE1BQU8sc0NBQUEsQ0FBdUM7QUFFMUUsSUFBTSxlQUFBLEdBQWtCLGtCQUFBLENBQW1CO0FBQzNDLElBQU0sbUJBQUEsR0FBc0IsMkJBQUEsQ0FBNEI7QUFHeEQ7SUFpQkUsMkJBQW9CLEVBQWMsRUFBVSxRQUFrQixFQUFVLGtCQUFzQztRQUExRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFoQjdHLG1CQUFjLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNwQyx1QkFBa0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLHdCQUFtQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekMsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVsQyxlQUFVLEdBQUcsVUFBQyxPQUFPLEVBQUUsTUFBTSxJQUFLLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztJQVkvQyxDQUFDO0lBWEEsc0JBQUksNENBQWE7YUFBakIsVUFBa0IsU0FBUztZQUMxQixFQUFFLENBQUMsQ0FBQyxTQUFTLFlBQVksUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDOUIsQ0FBQztZQUNELElBQUk7Z0JBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNLElBQUssT0FBQSxTQUFTLEVBQVQsQ0FBUyxDQUFDO1FBQ3hELENBQUM7OztP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QUFFO0lBQzNFLGFBQWEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRyxFQUFFLEVBQUU7SUFDM0UsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFHLEVBQUUsRUFBRTtDQUNoRSxDQUFDIiwiZmlsZSI6InRyZWUtZHJvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyZWVEcmFnZ2VkRWxlbWVudCB9IGZyb20gJy4uL21vZGVscy90cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbCc7XG5cbmNvbnN0IERSQUdfT1ZFUl9DTEFTUyA9ICdpcy1kcmFnZ2luZy1vdmVyJztcbmNvbnN0IERSQUdfRElTQUJMRURfQ0xBU1MgPSAnaXMtZHJhZ2dpbmctb3Zlci1kaXNhYmxlZCc7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVEcm9wRGlyZWN0aXZlIHtcbiAgIG9uRHJvcENhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgb25EcmFnT3ZlckNhbGxiYWNrID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgb25EcmFnTGVhdmVDYWxsYmFjayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgIG9uRHJhZ0VudGVyQ2FsbGJhY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBfYWxsb3dEcm9wID0gKGVsZW1lbnQsICRldmVudCkgPT4gdHJ1ZTtcbiAgIHNldCB0cmVlQWxsb3dEcm9wKGFsbG93RHJvcCkge1xuICAgIGlmIChhbGxvd0Ryb3AgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgdGhpcy5fYWxsb3dEcm9wID0gYWxsb3dEcm9wO1xuICAgIH1cbiAgICBlbHNlIHRoaXMuX2FsbG93RHJvcCA9IChlbGVtZW50LCAkZXZlbnQpID0+IGFsbG93RHJvcDtcbiAgfVxuICBhbGxvd0Ryb3AoJGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RHJvcCh0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKSwgJGV2ZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLCBwcml2YXRlIHRyZWVEcmFnZ2VkRWxlbWVudDogVHJlZURyYWdnZWRFbGVtZW50KSB7XG4gIH1cblxuICAgb25EcmFnT3ZlcigkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHJldHVybiB0aGlzLmFkZERpc2FibGVkQ2xhc3MoKTtcblxuICAgIHRoaXMub25EcmFnT3ZlckNhbGxiYWNrLmVtaXQoe2V2ZW50OiAkZXZlbnQsIGVsZW1lbnQ6IHRoaXMudHJlZURyYWdnZWRFbGVtZW50LmdldCgpfSk7XG5cbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmFkZENsYXNzKCk7XG4gIH1cblxuICAgb25EcmFnRW50ZXIoJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmFsbG93RHJvcCgkZXZlbnQpKSByZXR1cm47XG5cbiAgICB0aGlzLm9uRHJhZ0VudGVyQ2FsbGJhY2suZW1pdCh7ZXZlbnQ6ICRldmVudCwgZWxlbWVudDogdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuZ2V0KCl9KTtcbiAgfVxuXG4gICBvbkRyYWdMZWF2ZSgkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHJldHVybiB0aGlzLnJlbW92ZURpc2FibGVkQ2xhc3MoKTtcblxuICAgIHRoaXMub25EcmFnTGVhdmVDYWxsYmFjay5lbWl0KHtldmVudDogJGV2ZW50LCBlbGVtZW50OiB0aGlzLnRyZWVEcmFnZ2VkRWxlbWVudC5nZXQoKX0pO1xuXG4gICAgdGhpcy5yZW1vdmVDbGFzcygpO1xuICB9XG5cbiAgIG9uRHJvcCgkZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuYWxsb3dEcm9wKCRldmVudCkpIHJldHVybjtcblxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25Ecm9wQ2FsbGJhY2suZW1pdCh7ZXZlbnQ6ICRldmVudCwgZWxlbWVudDogdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuZ2V0KCl9KTtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XG4gICAgdGhpcy50cmVlRHJhZ2dlZEVsZW1lbnQuc2V0KG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfT1ZFUl9DTEFTUywgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNsYXNzKCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgRFJBR19PVkVSX0NMQVNTLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGFkZERpc2FibGVkQ2xhc3MoKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBEUkFHX0RJU0FCTEVEX0NMQVNTLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRGlzYWJsZWRDbGFzcygpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIERSQUdfRElTQUJMRURfQ0xBU1MsIGZhbHNlKTtcbiAgfVxuc3RhdGljIGRlY29yYXRvcnM6IERlY29yYXRvckludm9jYXRpb25bXSA9IFtcbnsgdHlwZTogRGlyZWN0aXZlLCBhcmdzOiBbe1xuICBzZWxlY3RvcjogJ1t0cmVlRHJvcF0nXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICgpID0+ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gKCkgPT4gW1xue3R5cGU6IEVsZW1lbnRSZWYsIH0sXG57dHlwZTogUmVuZGVyZXIsIH0sXG57dHlwZTogVHJlZURyYWdnZWRFbGVtZW50LCB9LFxuXTtcbnN0YXRpYyBwcm9wRGVjb3JhdG9yczoge1trZXk6IHN0cmluZ106IERlY29yYXRvckludm9jYXRpb25bXX0gPSB7XG4nb25Ecm9wQ2FsbGJhY2snOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsndHJlZURyb3AnLCBdIH0sXSxcbidvbkRyYWdPdmVyQ2FsbGJhY2snOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsndHJlZURyb3BEcmFnT3ZlcicsIF0gfSxdLFxuJ29uRHJhZ0xlYXZlQ2FsbGJhY2snOiBbeyB0eXBlOiBPdXRwdXQsIGFyZ3M6IFsndHJlZURyb3BEcmFnTGVhdmUnLCBdIH0sXSxcbidvbkRyYWdFbnRlckNhbGxiYWNrJzogW3sgdHlwZTogT3V0cHV0LCBhcmdzOiBbJ3RyZWVEcm9wRHJhZ0VudGVyJywgXSB9LF0sXG4ndHJlZUFsbG93RHJvcCc6IFt7IHR5cGU6IElucHV0IH0sXSxcbidvbkRyYWdPdmVyJzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ2RyYWdvdmVyJywgWyckZXZlbnQnXSwgXSB9LF0sXG4nb25EcmFnRW50ZXInOiBbeyB0eXBlOiBIb3N0TGlzdGVuZXIsIGFyZ3M6IFsnZHJhZ2VudGVyJywgWyckZXZlbnQnXSwgXSB9LF0sXG4nb25EcmFnTGVhdmUnOiBbeyB0eXBlOiBIb3N0TGlzdGVuZXIsIGFyZ3M6IFsnZHJhZ2xlYXZlJywgWyckZXZlbnQnXSwgXSB9LF0sXG4nb25Ecm9wJzogW3sgdHlwZTogSG9zdExpc3RlbmVyLCBhcmdzOiBbJ2Ryb3AnLCBbJyRldmVudCddLCBdIH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/models/tree-dragged-element.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeDraggedElement; });

var TreeDraggedElement = (function () {
    function TreeDraggedElement() {
        this._draggedElement = null;
    }
    TreeDraggedElement.prototype.set = function (draggedElement) {
        this._draggedElement = draggedElement;
    };
    TreeDraggedElement.prototype.get = function () {
        return this._draggedElement;
    };
    TreeDraggedElement.prototype.isDragging = function () {
        return !!this.get();
    };
    return TreeDraggedElement;
}());

TreeDraggedElement.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TreeDraggedElement.ctorParameters = function () { return []; };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS1kcmFnZ2VkLWVsZW1lbnQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQUEsRUFBVyxNQUFPLGVBQUEsQ0FBZ0I7QUFHM0M7SUFBQTtRQUNFLG9CQUFlLEdBQVEsSUFBSSxDQUFDO0lBbUI5QixDQUFDO0lBakJDLGdDQUFHLEdBQUgsVUFBSSxjQUFtQjtRQUNyQixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQUcsR0FBSDtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCx1Q0FBVSxHQUFWO1FBQ0UsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQU9ILHlCQUFDO0FBQUQsQ0FwQkEsQUFvQkM7O0FBTk0sNkJBQVUsR0FBMEI7SUFDM0MsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0NBQ25CLENBQUM7QUFDRixrQkFBa0I7QUFDWCxpQ0FBYyxHQUFtRSxjQUFNLE9BQUEsRUFDN0YsRUFENkYsQ0FDN0YsQ0FBQyIsImZpbGUiOiJ0cmVlLWRyYWdnZWQtZWxlbWVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIFRyZWVEcmFnZ2VkRWxlbWVudCB7XG4gIF9kcmFnZ2VkRWxlbWVudDogYW55ID0gbnVsbDtcblxuICBzZXQoZHJhZ2dlZEVsZW1lbnQ6IGFueSkge1xuICAgIHRoaXMuX2RyYWdnZWRFbGVtZW50ID0gZHJhZ2dlZEVsZW1lbnQ7XG4gIH1cblxuICBnZXQoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ2dlZEVsZW1lbnQ7XG4gIH1cblxuICBpc0RyYWdnaW5nKCkge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0KCk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/models/tree-node.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_events__ = __webpack_require__("../../../../angular-tree-component/dist/constants/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeNode; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var first = __WEBPACK_IMPORTED_MODULE_2_lodash__["first"], last = __WEBPACK_IMPORTED_MODULE_2_lodash__["last"];
var TreeNode = (function () {
    function TreeNode(data, parent, treeModel, index) {
        var _this = this;
        this.data = data;
        this.parent = parent;
        this.treeModel = treeModel;
        this.position = 0;
        this.allowDrop = function (element, $event) {
            return _this.options.allowDrop(element, { parent: _this, index: 0 }, $event);
        };
        if (this.id === undefined || this.id === null) {
            this.id = uuid();
        } // Make sure there's a unique id without overriding existing ids to work with immutable data structures
        this.index = index;
        if (this.getField('children')) {
            this._initChildren();
        }
    }
    Object.defineProperty(TreeNode.prototype, "isHidden", {
        get: function () { return this.treeModel.isHidden(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isExpanded", {
        get: function () { return this.treeModel.isExpanded(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isActive", {
        get: function () { return this.treeModel.isActive(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "isFocused", {
        get: function () { return this.treeModel.isNodeFocused(this); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "level", {
        get: function () {
            return this.parent ? this.parent.level + 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "path", {
        get: function () {
            return this.parent ? this.parent.path.concat([this.id]) : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "elementRef", {
        get: function () {
            throw "Element Ref is no longer supported since introducing virtual scroll\n\n      You may use a template to obtain a reference to the element";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "originalNode", {
        get: function () { return this._originalNode; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TreeNode.prototype, "hasChildren", {
        // helper get functions:
        get: function () {
            return !!(this.data.hasChildren || (this.children && this.children.length > 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isCollapsed", {
        get: function () { return !this.isExpanded; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isLeaf", {
        get: function () { return !this.hasChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "isRoot", {
        get: function () { return this.parent.data.virtual; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "realParent", {
        get: function () { return this.isRoot ? null : this.parent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "options", {
        // proxy functions:
        get: function () { return this.treeModel.options; },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.fireEvent = function (event) { this.treeModel.fireEvent(event); };
    Object.defineProperty(TreeNode.prototype, "displayField", {
        // field accessors:
        get: function () {
            return this.getField('display');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeNode.prototype, "id", {
        get: function () {
            return this.getField('id');
        },
        set: function (value) {
            this.setField('id', value);
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getField = function (key) {
        return this.data[this.options[key + "Field"]];
    };
    TreeNode.prototype.setField = function (key, value) {
        this.data[this.options[key + "Field"]] = value;
    };
    // traversing:
    TreeNode.prototype._findAdjacentSibling = function (steps, skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden)[this.index + steps];
    };
    TreeNode.prototype.findNextSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(+1, skipHidden);
    };
    TreeNode.prototype.findPreviousSibling = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._findAdjacentSibling(-1, skipHidden);
    };
    TreeNode.prototype.getVisibleChildren = function () {
        return this.visibleChildren;
    };
    Object.defineProperty(TreeNode.prototype, "visibleChildren", {
        get: function () {
            return (this.children || []).filter(function (node) { return !node.isHidden; });
        },
        enumerable: true,
        configurable: true
    });
    TreeNode.prototype.getFirstChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return first(children || []);
    };
    TreeNode.prototype.getLastChild = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = skipHidden ? this.visibleChildren : this.children;
        return last(children || []);
    };
    TreeNode.prototype.findNextNode = function (goInside, skipHidden) {
        if (goInside === void 0) { goInside = true; }
        if (skipHidden === void 0) { skipHidden = false; }
        return goInside && this.isExpanded && this.getFirstChild(skipHidden) ||
            this.findNextSibling(skipHidden) ||
            this.parent && this.parent.findNextNode(false, skipHidden);
    };
    TreeNode.prototype.findPreviousNode = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var previousSibling = this.findPreviousSibling(skipHidden);
        if (!previousSibling) {
            return this.realParent;
        }
        return previousSibling._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getLastOpenDescendant = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var lastChild = this.getLastChild(skipHidden);
        return (this.isCollapsed || !lastChild)
            ? this
            : lastChild._getLastOpenDescendant(skipHidden);
    };
    TreeNode.prototype._getParentsChildren = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        var children = this.parent &&
            (skipHidden ? this.parent.getVisibleChildren() : this.parent.children);
        return children || [];
    };
    TreeNode.prototype.getIndexInParent = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return this._getParentsChildren(skipHidden).indexOf(this);
    };
    TreeNode.prototype.isDescendantOf = function (node) {
        if (this === node)
            return true;
        else
            return this.parent && this.parent.isDescendantOf(node);
    };
    TreeNode.prototype.getNodePadding = function () {
        return this.options.levelPadding * (this.level - 1) + 'px';
    };
    TreeNode.prototype.getClass = function () {
        return [this.options.nodeClass(this), "tree-node-level-" + this.level].join(' ');
    };
    TreeNode.prototype.onDrop = function ($event) {
        this.mouseAction('drop', $event.event, {
            from: $event.element,
            to: { parent: this, index: 0, dropOnNode: true }
        });
    };
    TreeNode.prototype.allowDrag = function () {
        return this.options.allowDrag(this);
    };
    // helper methods:
    TreeNode.prototype.loadChildren = function () {
        var _this = this;
        if (!this.options.getChildren) {
            return Promise.resolve(); // Not getChildren method - for using redux
        }
        return Promise.resolve(this.options.getChildren(this))
            .then(function (children) {
            if (children) {
                _this.setField('children', children);
                _this._initChildren();
                _this.children.forEach(function (child) {
                    if (child.getField('isExpanded') && child.hasChildren) {
                        child.expand();
                    }
                });
            }
        }).then(function () {
            _this.fireEvent({
                eventName: __WEBPACK_IMPORTED_MODULE_1__constants_events__["a" /* TREE_EVENTS */].onLoadChildren,
                node: _this
            });
        });
    };
    TreeNode.prototype.expand = function () {
        if (!this.isExpanded) {
            return this.toggleExpanded();
        }
        return Promise.resolve();
    };
    TreeNode.prototype.collapse = function () {
        if (this.isExpanded) {
            this.toggleExpanded();
        }
        return this;
    };
    TreeNode.prototype.doForAll = function (fn) {
        var _this = this;
        Promise.resolve(fn(this)).then(function () {
            if (_this.children) {
                _this.children.forEach(function (child) { return child.doForAll(fn); });
            }
        });
    };
    TreeNode.prototype.expandAll = function () {
        this.doForAll(function (node) { return node.expand(); });
    };
    TreeNode.prototype.collapseAll = function () {
        this.doForAll(function (node) { return node.collapse(); });
    };
    TreeNode.prototype.ensureVisible = function () {
        if (this.realParent) {
            this.realParent.expand();
            this.realParent.ensureVisible();
        }
        return this;
    };
    TreeNode.prototype.toggleExpanded = function () {
        return this.setIsExpanded(!this.isExpanded);
    };
    TreeNode.prototype.setIsExpanded = function (value) {
        if (this.hasChildren) {
            this.treeModel.setExpandedNode(this, value);
            if (!this.children && this.hasChildren && value) {
                return this.loadChildren();
            }
        }
        return Promise.resolve();
    };
    ;
    TreeNode.prototype.setIsActive = function (value, multi) {
        if (multi === void 0) { multi = false; }
        this.treeModel.setActiveNode(this, value, multi);
        if (value) {
            this.focus(this.options.scrollOnSelect);
        }
        return this;
    };
    TreeNode.prototype.toggleActivated = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(!this.isActive, multi);
        return this;
    };
    TreeNode.prototype.setActiveAndVisible = function (multi) {
        if (multi === void 0) { multi = false; }
        this.setIsActive(true, multi)
            .ensureVisible();
        setTimeout(this.scrollIntoView.bind(this));
        return this;
    };
    TreeNode.prototype.scrollIntoView = function (force) {
        if (force === void 0) { force = false; }
        this.treeModel.virtualScroll.scrollIntoView(this, force);
    };
    TreeNode.prototype.focus = function (scroll) {
        if (scroll === void 0) { scroll = true; }
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(this);
        if (scroll) {
            this.scrollIntoView();
        }
        if (previousNode) {
            this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_1__constants_events__["a" /* TREE_EVENTS */].onBlur, node: previousNode });
        }
        this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_1__constants_events__["a" /* TREE_EVENTS */].onFocus, node: this });
        return this;
    };
    TreeNode.prototype.blur = function () {
        var previousNode = this.treeModel.getFocusedNode();
        this.treeModel.setFocusedNode(null);
        if (previousNode) {
            this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_1__constants_events__["a" /* TREE_EVENTS */].onBlur, node: this });
        }
        return this;
    };
    TreeNode.prototype.setIsHidden = function (value) {
        this.treeModel.setIsHidden(this, value);
    };
    TreeNode.prototype.hide = function () {
        this.setIsHidden(true);
    };
    TreeNode.prototype.show = function () {
        this.setIsHidden(false);
    };
    TreeNode.prototype.mouseAction = function (actionName, $event, data) {
        if (data === void 0) { data = null; }
        this.treeModel.setFocus(true);
        var actionMapping = this.options.actionMapping.mouse;
        var action = actionMapping[actionName];
        if (action) {
            action(this.treeModel, this, $event, data);
        }
    };
    TreeNode.prototype.getSelfHeight = function () {
        return this.options.nodeHeight(this);
    };
    TreeNode.prototype._initChildren = function () {
        var _this = this;
        this.children = this.getField('children')
            .map(function (c, index) { return new TreeNode(c, _this, _this.treeModel, index); });
    };
    return TreeNode;
}());

__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isHidden", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isExpanded", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isActive", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "isFocused", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"],
    __metadata("design:type", Array)
], TreeNode.prototype, "children", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "index", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"],
    __metadata("design:type", Object)
], TreeNode.prototype, "position", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"],
    __metadata("design:type", Number)
], TreeNode.prototype, "height", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "level", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "path", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeNode.prototype, "visibleChildren", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_0_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeNode.prototype, "_initChildren", null);
function uuid() {
    return Math.floor(Math.random() * 10000000000000);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS1ub2RlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFXLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUk3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDcEIsSUFBQSxlQUFLLEVBQUUsYUFBSSxDQUFPO0FBRTFCO0lBeUJFLGtCQUFtQixJQUFTLEVBQVMsTUFBZ0IsRUFBUyxTQUFvQixFQUFFLEtBQWE7UUFBakcsaUJBU0M7UUFUa0IsU0FBSSxHQUFKLElBQUksQ0FBSztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVU7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBakJ0RSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBbUp6QixjQUFTLEdBQUcsVUFBQyxPQUFPLEVBQUUsTUFBTztZQUMzQixNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFBO1FBbklDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyx1R0FBdUc7UUFDekcsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFFbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FB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RDtJQUFULFFBQVE7Ozt3Q0FBeUQ7QUFDeEQ7SUFBVCxRQUFROzs7eUNBQStEO0FBRTVEO0lBQVgsVUFBVTs7MENBQXNCO0FBQ3JCO0lBQVgsVUFBVTs7dUNBQWU7QUFDZDtJQUFYLFVBQVU7OzBDQUFjO0FBQ2I7SUFBWCxVQUFVOzt3Q0FBZ0I7QUFDakI7SUFBVCxRQUFROzs7cUNBRVI7QUFDUztJQUFULFFBQVE7OztvQ0FFUjtBQXdFUztJQUFULFFBQVE7OzsrQ0FFUjtBQTBPTztJQUFQLE1BQU07Ozs7NkNBR047QUFHSDtJQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFjLENBQUMsQ0FBQztBQUNwRCxDQUFDIiwiZmlsZSI6InRyZWUtbm9kZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgYXV0b3J1biwgYWN0aW9uIH0gZnJvbSAnbW9ieCc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBJVHJlZU5vZGUgfSBmcm9tICcuLi9kZWZzL2FwaSc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5jb25zdCB7IGZpcnN0LCBsYXN0IH0gPSBfO1xuXG5leHBvcnQgY2xhc3MgVHJlZU5vZGUgaW1wbGVtZW50cyBJVHJlZU5vZGUge1xuICBAY29tcHV0ZWQgZ2V0IGlzSGlkZGVuKCkgeyByZXR1cm4gdGhpcy50cmVlTW9kZWwuaXNIaWRkZW4odGhpcyk7IH07XG4gIEBjb21wdXRlZCBnZXQgaXNFeHBhbmRlZCgpIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLmlzRXhwYW5kZWQodGhpcyk7IH07XG4gIEBjb21wdXRlZCBnZXQgaXNBY3RpdmUoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc0FjdGl2ZSh0aGlzKTsgfTtcbiAgQGNvbXB1dGVkIGdldCBpc0ZvY3VzZWQoKSB7IHJldHVybiB0aGlzLnRyZWVNb2RlbC5pc05vZGVGb2N1c2VkKHRoaXMpOyB9O1xuXG4gIEBvYnNlcnZhYmxlIGNoaWxkcmVuOiBUcmVlTm9kZVtdO1xuICBAb2JzZXJ2YWJsZSBpbmRleDogbnVtYmVyO1xuICBAb2JzZXJ2YWJsZSBwb3NpdGlvbiA9IDA7XG4gIEBvYnNlcnZhYmxlIGhlaWdodDogbnVtYmVyO1xuICBAY29tcHV0ZWQgZ2V0IGxldmVsKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQubGV2ZWwgKyAxIDogMDtcbiAgfVxuICBAY29tcHV0ZWQgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnBhcmVudCA/IFsuLi50aGlzLnBhcmVudC5wYXRoLCB0aGlzLmlkXSA6IFtdO1xuICB9XG5cbiAgZ2V0IGVsZW1lbnRSZWYoKTogYW55IHtcbiAgICB0aHJvdyBgRWxlbWVudCBSZWYgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCBzaW5jZSBpbnRyb2R1Y2luZyB2aXJ0dWFsIHNjcm9sbFxcblxuICAgICAgWW91IG1heSB1c2UgYSB0ZW1wbGF0ZSB0byBvYnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGVsZW1lbnRgO1xuICB9XG5cbiAgcHJpdmF0ZSBfb3JpZ2luYWxOb2RlOiBhbnk7XG4gIGdldCBvcmlnaW5hbE5vZGUoKSB7IHJldHVybiB0aGlzLl9vcmlnaW5hbE5vZGU7IH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IGFueSwgcHVibGljIHBhcmVudDogVHJlZU5vZGUsIHB1YmxpYyB0cmVlTW9kZWw6IFRyZWVNb2RlbCwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmlkID09PSB1bmRlZmluZWQgfHwgdGhpcy5pZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5pZCA9IHV1aWQoKTtcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGVyZSdzIGEgdW5pcXVlIGlkIHdpdGhvdXQgb3ZlcnJpZGluZyBleGlzdGluZyBpZHMgdG8gd29yayB3aXRoIGltbXV0YWJsZSBkYXRhIHN0cnVjdHVyZXNcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAodGhpcy5nZXRGaWVsZCgnY2hpbGRyZW4nKSkge1xuICAgICAgdGhpcy5faW5pdENoaWxkcmVuKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaGVscGVyIGdldCBmdW5jdGlvbnM6XG4gIGdldCBoYXNDaGlsZHJlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISEodGhpcy5kYXRhLmhhc0NoaWxkcmVuIHx8ICh0aGlzLmNoaWxkcmVuICYmIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkpO1xuICB9XG4gIGdldCBpc0NvbGxhcHNlZCgpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmlzRXhwYW5kZWQ7IH1cbiAgZ2V0IGlzTGVhZigpOiBib29sZWFuIHsgcmV0dXJuICF0aGlzLmhhc0NoaWxkcmVuOyB9XG4gIGdldCBpc1Jvb3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnBhcmVudC5kYXRhLnZpcnR1YWw7IH1cbiAgZ2V0IHJlYWxQYXJlbnQoKTogVHJlZU5vZGUgeyByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogdGhpcy5wYXJlbnQ7IH1cblxuICAvLyBwcm94eSBmdW5jdGlvbnM6XG4gIGdldCBvcHRpb25zKCk6IFRyZWVPcHRpb25zIHsgcmV0dXJuIHRoaXMudHJlZU1vZGVsLm9wdGlvbnM7IH1cbiAgZmlyZUV2ZW50KGV2ZW50KSB7IHRoaXMudHJlZU1vZGVsLmZpcmVFdmVudChldmVudCk7IH1cblxuICAvLyBmaWVsZCBhY2Nlc3NvcnM6XG4gIGdldCBkaXNwbGF5RmllbGQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RmllbGQoJ2Rpc3BsYXknKTtcbiAgfVxuXG4gIGdldCBpZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRGaWVsZCgnaWQnKTtcbiAgfVxuXG4gIHNldCBpZCh2YWx1ZSkge1xuICAgIHRoaXMuc2V0RmllbGQoJ2lkJywgdmFsdWUpO1xuICB9XG5cbiAgZ2V0RmllbGQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dO1xuICB9XG5cbiAgc2V0RmllbGQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuZGF0YVt0aGlzLm9wdGlvbnNbYCR7a2V5fUZpZWxkYF1dID0gdmFsdWU7XG4gIH1cblxuICAvLyB0cmF2ZXJzaW5nOlxuICBfZmluZEFkamFjZW50U2libGluZyhzdGVwcywgc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFBhcmVudHNDaGlsZHJlbihza2lwSGlkZGVuKVt0aGlzLmluZGV4ICsgc3RlcHNdO1xuICB9XG5cbiAgZmluZE5leHRTaWJsaW5nKHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLl9maW5kQWRqYWNlbnRTaWJsaW5nKCsxLCBza2lwSGlkZGVuKTtcbiAgfVxuXG4gIGZpbmRQcmV2aW91c1NpYmxpbmcoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbmRBZGphY2VudFNpYmxpbmcoLTEsIHNraXBIaWRkZW4pO1xuICB9XG5cbiAgZ2V0VmlzaWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVDaGlsZHJlbjtcbiAgfVxuXG4gIEBjb21wdXRlZCBnZXQgdmlzaWJsZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiAodGhpcy5jaGlsZHJlbiB8fCBbXSkuZmlsdGVyKChub2RlKSA9PiAhbm9kZS5pc0hpZGRlbik7XG4gIH1cblxuICBnZXRGaXJzdENoaWxkKHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHNraXBIaWRkZW4gPyB0aGlzLnZpc2libGVDaGlsZHJlbiA6IHRoaXMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gZmlyc3QoY2hpbGRyZW4gfHwgW10pO1xuICB9XG5cbiAgZ2V0TGFzdENoaWxkKHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIGxldCBjaGlsZHJlbiA9IHNraXBIaWRkZW4gPyB0aGlzLnZpc2libGVDaGlsZHJlbiA6IHRoaXMuY2hpbGRyZW47XG5cbiAgICByZXR1cm4gbGFzdChjaGlsZHJlbiB8fCBbXSk7XG4gIH1cblxuICBmaW5kTmV4dE5vZGUoZ29JbnNpZGUgPSB0cnVlLCBza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gZ29JbnNpZGUgJiYgdGhpcy5pc0V4cGFuZGVkICYmIHRoaXMuZ2V0Rmlyc3RDaGlsZChza2lwSGlkZGVuKSB8fFxuICAgICAgICAgICB0aGlzLmZpbmROZXh0U2libGluZyhza2lwSGlkZGVuKSB8fFxuICAgICAgICAgICB0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC5maW5kTmV4dE5vZGUoZmFsc2UsIHNraXBIaWRkZW4pO1xuICB9XG5cbiAgZmluZFByZXZpb3VzTm9kZShza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICBsZXQgcHJldmlvdXNTaWJsaW5nID0gdGhpcy5maW5kUHJldmlvdXNTaWJsaW5nKHNraXBIaWRkZW4pO1xuICAgIGlmICghcHJldmlvdXNTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFsUGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gcHJldmlvdXNTaWJsaW5nLl9nZXRMYXN0T3BlbkRlc2NlbmRhbnQoc2tpcEhpZGRlbik7XG4gIH1cblxuICBfZ2V0TGFzdE9wZW5EZXNjZW5kYW50KHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIGNvbnN0IGxhc3RDaGlsZCA9IHRoaXMuZ2V0TGFzdENoaWxkKHNraXBIaWRkZW4pO1xuICAgIHJldHVybiAodGhpcy5pc0NvbGxhcHNlZCB8fCAhbGFzdENoaWxkKVxuICAgICAgPyB0aGlzXG4gICAgICA6IGxhc3RDaGlsZC5fZ2V0TGFzdE9wZW5EZXNjZW5kYW50KHNraXBIaWRkZW4pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UGFyZW50c0NoaWxkcmVuKHNraXBIaWRkZW4gPSBmYWxzZSk6IGFueVtdIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucGFyZW50ICYmXG4gICAgICAoc2tpcEhpZGRlbiA/IHRoaXMucGFyZW50LmdldFZpc2libGVDaGlsZHJlbigpIDogdGhpcy5wYXJlbnQuY2hpbGRyZW4pO1xuXG4gICAgcmV0dXJuIGNoaWxkcmVuIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRJbmRleEluUGFyZW50KHNraXBIaWRkZW4gPSBmYWxzZSkge1xuICAgIHJldHVybiB0aGlzLl9nZXRQYXJlbnRzQ2hpbGRyZW4oc2tpcEhpZGRlbikuaW5kZXhPZih0aGlzKTtcbiAgfVxuXG4gIGlzRGVzY2VuZGFudE9mKG5vZGU6IFRyZWVOb2RlKSB7XG4gICAgaWYgKHRoaXMgPT09IG5vZGUpIHJldHVybiB0cnVlO1xuICAgIGVsc2UgcmV0dXJuIHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmlzRGVzY2VuZGFudE9mKG5vZGUpO1xuICB9XG5cbiAgZ2V0Tm9kZVBhZGRpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxldmVsUGFkZGluZyAqICh0aGlzLmxldmVsIC0gMSkgKyAncHgnO1xuICB9XG5cbiAgZ2V0Q2xhc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gW3RoaXMub3B0aW9ucy5ub2RlQ2xhc3ModGhpcyksIGB0cmVlLW5vZGUtbGV2ZWwtJHsgdGhpcy5sZXZlbCB9YF0uam9pbignICcpO1xuICB9XG5cbiAgb25Ecm9wKCRldmVudCkge1xuICAgIHRoaXMubW91c2VBY3Rpb24oJ2Ryb3AnLCAkZXZlbnQuZXZlbnQsIHtcbiAgICAgIGZyb206ICRldmVudC5lbGVtZW50LFxuICAgICAgdG86IHsgcGFyZW50OiB0aGlzLCBpbmRleDogMCwgZHJvcE9uTm9kZTogdHJ1ZSB9XG4gICAgfSk7XG4gIH1cblxuICBhbGxvd0Ryb3AgPSAoZWxlbWVudCwgJGV2ZW50PykgPT4ge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcm9wKGVsZW1lbnQsIHsgcGFyZW50OiB0aGlzLCBpbmRleDogMCB9LCAkZXZlbnQpO1xuICB9XG5cbiAgYWxsb3dEcmFnKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcmFnKHRoaXMpO1xuICB9XG5cblxuICAvLyBoZWxwZXIgbWV0aG9kczpcbiAgbG9hZENoaWxkcmVuKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zLmdldENoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IC8vIE5vdCBnZXRDaGlsZHJlbiBtZXRob2QgLSBmb3IgdXNpbmcgcmVkdXhcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9wdGlvbnMuZ2V0Q2hpbGRyZW4odGhpcykpXG4gICAgICAudGhlbigoY2hpbGRyZW4pID0+IHtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaWVsZCgnY2hpbGRyZW4nLCBjaGlsZHJlbik7XG4gICAgICAgICAgdGhpcy5faW5pdENoaWxkcmVuKCk7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmdldEZpZWxkKCdpc0V4cGFuZGVkJykgJiYgY2hpbGQuaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgY2hpbGQuZXhwYW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9fSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KHtcbiAgICAgICAgICBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uTG9hZENoaWxkcmVuLFxuICAgICAgICAgIG5vZGU6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGV4cGFuZCgpIHtcbiAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBjb2xsYXBzZSgpIHtcbiAgICBpZiAodGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLnRvZ2dsZUV4cGFuZGVkKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkb0ZvckFsbChmbjogKG5vZGU6IElUcmVlTm9kZSkgPT4gYW55KSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKGZuKHRoaXMpKS50aGVuKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IGNoaWxkLmRvRm9yQWxsKGZuKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBleHBhbmRBbGwoKSB7XG4gICAgdGhpcy5kb0ZvckFsbCgobm9kZSkgPT4gbm9kZS5leHBhbmQoKSk7XG4gIH1cblxuICBjb2xsYXBzZUFsbCgpIHtcbiAgICB0aGlzLmRvRm9yQWxsKChub2RlKSA9PiBub2RlLmNvbGxhcHNlKCkpO1xuICB9XG5cbiAgZW5zdXJlVmlzaWJsZSgpIHtcbiAgICBpZiAodGhpcy5yZWFsUGFyZW50KSB7XG4gICAgICB0aGlzLnJlYWxQYXJlbnQuZXhwYW5kKCk7XG4gICAgICB0aGlzLnJlYWxQYXJlbnQuZW5zdXJlVmlzaWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlRXhwYW5kZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0SXNFeHBhbmRlZCghdGhpcy5pc0V4cGFuZGVkKTtcbiAgfVxuXG4gIHNldElzRXhwYW5kZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5oYXNDaGlsZHJlbikge1xuICAgICAgdGhpcy50cmVlTW9kZWwuc2V0RXhwYW5kZWROb2RlKHRoaXMsIHZhbHVlKTtcblxuICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuICYmIHRoaXMuaGFzQ2hpbGRyZW4gJiYgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZENoaWxkcmVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9O1xuXG4gIHNldElzQWN0aXZlKHZhbHVlLCBtdWx0aSA9IGZhbHNlKSB7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0QWN0aXZlTm9kZSh0aGlzLCB2YWx1ZSwgbXVsdGkpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5mb2N1cyh0aGlzLm9wdGlvbnMuc2Nyb2xsT25TZWxlY3QpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlQWN0aXZhdGVkKG11bHRpID0gZmFsc2UpIHtcbiAgICB0aGlzLnNldElzQWN0aXZlKCF0aGlzLmlzQWN0aXZlLCBtdWx0aSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFjdGl2ZUFuZFZpc2libGUobXVsdGkgPSBmYWxzZSkge1xuICAgIHRoaXMuc2V0SXNBY3RpdmUodHJ1ZSwgbXVsdGkpXG4gICAgICAuZW5zdXJlVmlzaWJsZSgpO1xuXG4gICAgc2V0VGltZW91dCh0aGlzLnNjcm9sbEludG9WaWV3LmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldyhmb3JjZSA9IGZhbHNlKSB7XG4gICAgdGhpcy50cmVlTW9kZWwudmlydHVhbFNjcm9sbC5zY3JvbGxJbnRvVmlldyh0aGlzLCBmb3JjZSk7XG4gIH1cblxuICBmb2N1cyhzY3JvbGwgPSB0cnVlKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMudHJlZU1vZGVsLmdldEZvY3VzZWROb2RlKCk7XG4gICAgdGhpcy50cmVlTW9kZWwuc2V0Rm9jdXNlZE5vZGUodGhpcyk7XG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNOb2RlKSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25CbHVyLCBub2RlOiBwcmV2aW91c05vZGUgfSk7XG4gICAgfVxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkZvY3VzLCBub2RlOiB0aGlzIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBibHVyKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLnRyZWVNb2RlbC5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzZWROb2RlKG51bGwpO1xuICAgIGlmIChwcmV2aW91c05vZGUpIHtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkJsdXIsIG5vZGU6IHRoaXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZXRJc0hpZGRlbih2YWx1ZSkge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldElzSGlkZGVuKHRoaXMsIHZhbHVlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRJc0hpZGRlbih0cnVlKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5zZXRJc0hpZGRlbihmYWxzZSk7XG4gIH1cblxuICBtb3VzZUFjdGlvbihhY3Rpb25OYW1lOiBzdHJpbmcsICRldmVudCwgZGF0YTogYW55ID0gbnVsbCkge1xuICAgIHRoaXMudHJlZU1vZGVsLnNldEZvY3VzKHRydWUpO1xuXG4gICAgY29uc3QgYWN0aW9uTWFwcGluZyA9IHRoaXMub3B0aW9ucy5hY3Rpb25NYXBwaW5nLm1vdXNlO1xuICAgIGNvbnN0IGFjdGlvbiA9IGFjdGlvbk1hcHBpbmdbYWN0aW9uTmFtZV07XG5cbiAgICBpZiAoYWN0aW9uKSB7XG4gICAgICBhY3Rpb24odGhpcy50cmVlTW9kZWwsIHRoaXMsICRldmVudCwgZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0U2VsZkhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLm5vZGVIZWlnaHQodGhpcyk7XG4gIH1cblxuICBAYWN0aW9uIF9pbml0Q2hpbGRyZW4oKSB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuZ2V0RmllbGQoJ2NoaWxkcmVuJylcbiAgICAgIC5tYXAoKGMsIGluZGV4KSA9PiBuZXcgVHJlZU5vZGUoYywgdGhpcywgdGhpcy50cmVlTW9kZWwsIGluZGV4KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXVpZCgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMDAwKTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/models/tree-options.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_keys__ = __webpack_require__("../../../../angular-tree-component/dist/constants/keys.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* unused harmony export TREE_ACTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeOptions; });


var TREE_ACTIONS = {
    TOGGLE_SELECTED: function (tree, node, $event) { return node && node.toggleActivated(); },
    TOGGLE_SELECTED_MULTI: function (tree, node, $event) { return node && node.toggleActivated(true); },
    SELECT: function (tree, node, $event) { return node.setIsActive(true); },
    DESELECT: function (tree, node, $event) { return node.setIsActive(false); },
    FOCUS: function (tree, node, $event) { return node.focus(); },
    TOGGLE_EXPANDED: function (tree, node, $event) { return node.hasChildren && node.toggleExpanded(); },
    EXPAND: function (tree, node, $event) { return node.expand(); },
    COLLAPSE: function (tree, node, $event) { return node.collapse(); },
    DRILL_DOWN: function (tree, node, $event) { return tree.focusDrillDown(); },
    DRILL_UP: function (tree, node, $event) { return tree.focusDrillUp(); },
    NEXT_NODE: function (tree, node, $event) { return tree.focusNextNode(); },
    PREVIOUS_NODE: function (tree, node, $event) { return tree.focusPreviousNode(); },
    MOVE_NODE: function (tree, node, $event, _a) {
        var from = _a.from, to = _a.to;
        // default action assumes from = node, to = {parent, index}
        tree.moveNode(from, to);
    }
};
var defaultActionMapping = {
    mouse: {
        click: TREE_ACTIONS.TOGGLE_SELECTED,
        dblClick: null,
        contextMenu: null,
        expanderClick: TREE_ACTIONS.TOGGLE_EXPANDED,
        drop: TREE_ACTIONS.MOVE_NODE
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].RIGHT] = TREE_ACTIONS.DRILL_DOWN,
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].LEFT] = TREE_ACTIONS.DRILL_UP,
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].DOWN] = TREE_ACTIONS.NEXT_NODE,
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].UP] = TREE_ACTIONS.PREVIOUS_NODE,
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].SPACE] = TREE_ACTIONS.TOGGLE_SELECTED,
        _a[__WEBPACK_IMPORTED_MODULE_0__constants_keys__["a" /* KEYS */].ENTER] = TREE_ACTIONS.TOGGLE_SELECTED,
        _a)
};
var TreeOptions = (function () {
    function TreeOptions(options) {
        if (options === void 0) { options = {}; }
        this.options = options;
        this.actionMapping = __WEBPACK_IMPORTED_MODULE_1_lodash__["defaultsDeep"]({}, this.options.actionMapping, defaultActionMapping);
    }
    Object.defineProperty(TreeOptions.prototype, "childrenField", {
        get: function () { return this.options.childrenField || 'children'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "displayField", {
        get: function () { return this.options.displayField || 'name'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "idField", {
        get: function () { return this.options.idField || 'id'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "isExpandedField", {
        get: function () { return this.options.isExpandedField || 'isExpanded'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "getChildren", {
        get: function () { return this.options.getChildren; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "levelPadding", {
        get: function () { return this.options.levelPadding || 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "useVirtualScroll", {
        get: function () { return this.options.useVirtualScroll; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateExpand", {
        get: function () { return this.options.animateExpand; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateSpeed", {
        get: function () { return this.options.animateSpeed || 30; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "animateAcceleration", {
        get: function () { return this.options.animateAcceleration || 1.2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeOptions.prototype, "scrollOnSelect", {
        get: function () { return this.options.scrollOnSelect === undefined ? true : this.options.scrollOnSelect; },
        enumerable: true,
        configurable: true
    });
    TreeOptions.prototype.allowDrop = function (element, to, $event) {
        if (this.options.allowDrop instanceof Function) {
            return this.options.allowDrop(element, to, $event);
        }
        else {
            return this.options.allowDrop === undefined ? true : this.options.allowDrop;
        }
    };
    TreeOptions.prototype.allowDrag = function (node) {
        if (this.options.allowDrag instanceof Function) {
            return this.options.allowDrag(node);
        }
        else {
            return this.options.allowDrag;
        }
    };
    TreeOptions.prototype.nodeClass = function (node) {
        return this.options.nodeClass ? this.options.nodeClass(node) : '';
    };
    TreeOptions.prototype.nodeHeight = function (node) {
        if (node.data.virtual) {
            return 0;
        }
        var nodeHeight = this.options.nodeHeight || 22;
        if (typeof nodeHeight === 'function') {
            nodeHeight = nodeHeight(node);
        }
        // account for drop slots:
        return nodeHeight + (node.index === 0 ? 2 : 1) * this.dropSlotHeight;
    };
    Object.defineProperty(TreeOptions.prototype, "dropSlotHeight", {
        get: function () {
            return this.options.dropSlotHeight || 2;
        },
        enumerable: true,
        configurable: true
    });
    return TreeOptions;
}());

var _a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS1vcHRpb25zLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUd6QyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQU01QixNQUFNLENBQUMsSUFBTSxZQUFZLEdBQUc7SUFDMUIsZUFBZSxFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUE5QixDQUE4QjtJQUNqRyxxQkFBcUIsRUFBRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQWxDLENBQWtDO0lBQzNHLE1BQU0sRUFBRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0I7SUFDaEYsUUFBUSxFQUFFLFVBQUMsSUFBZSxFQUFFLElBQWMsRUFBRSxNQUFXLElBQUssT0FBQSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QjtJQUNuRixLQUFLLEVBQUUsVUFBQyxJQUFlLEVBQUUsSUFBYyxFQUFFLE1BQVcsSUFBSyxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBWixDQUFZO0lBQ3JFLGVBQWUsRUFBRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQXpDLENBQXlDO0lBQzVHLE1BQU0sRUFBRSxVQUFDLElBQWUsRUFBRSxJQUFjLEVBQUUsTUFBVyxJQUFLLE9BQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFiLENBQWE7SUFDdkUsUUFBUSxFQUFFLFVB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QUQsQ0F6REEsQUF5REMsSUFBQSIsImZpbGUiOiJ0cmVlLW9wdGlvbnMubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZU5vZGUgfSBmcm9tICcuL3RyZWUtbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlTW9kZWwgfSBmcm9tICcuL3RyZWUubW9kZWwnO1xuaW1wb3J0IHsgS0VZUyB9IGZyb20gJy4uL2NvbnN0YW50cy9rZXlzJztcbmltcG9ydCB7IElUcmVlT3B0aW9ucyB9IGZyb20gJy4uL2RlZnMvYXBpJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpb25IYW5kbGVyIHtcbiAgKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55LCAuLi5yZXN0KTtcbn1cblxuZXhwb3J0IGNvbnN0IFRSRUVfQUNUSU9OUyA9IHtcbiAgVE9HR0xFX1NFTEVDVEVEOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUgJiYgbm9kZS50b2dnbGVBY3RpdmF0ZWQoKSxcbiAgVE9HR0xFX1NFTEVDVEVEX01VTFRJOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+IG5vZGUgJiYgbm9kZS50b2dnbGVBY3RpdmF0ZWQodHJ1ZSksXG4gIFNFTEVDVDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLnNldElzQWN0aXZlKHRydWUpLFxuICBERVNFTEVDVDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLnNldElzQWN0aXZlKGZhbHNlKSxcbiAgRk9DVVM6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5mb2N1cygpLFxuICBUT0dHTEVfRVhQQU5ERUQ6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gbm9kZS5oYXNDaGlsZHJlbiAmJiBub2RlLnRvZ2dsZUV4cGFuZGVkKCksXG4gIEVYUEFORDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLmV4cGFuZCgpLFxuICBDT0xMQVBTRTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiBub2RlLmNvbGxhcHNlKCksXG4gIERSSUxMX0RPV046ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gdHJlZS5mb2N1c0RyaWxsRG93bigpLFxuICBEUklMTF9VUDogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55KSA9PiB0cmVlLmZvY3VzRHJpbGxVcCgpLFxuICBORVhUX05PREU6ICh0cmVlOiBUcmVlTW9kZWwsIG5vZGU6IFRyZWVOb2RlLCAkZXZlbnQ6IGFueSkgPT4gIHRyZWUuZm9jdXNOZXh0Tm9kZSgpLFxuICBQUkVWSU9VU19OT0RFOiAodHJlZTogVHJlZU1vZGVsLCBub2RlOiBUcmVlTm9kZSwgJGV2ZW50OiBhbnkpID0+ICB0cmVlLmZvY3VzUHJldmlvdXNOb2RlKCksXG4gIE1PVkVfTk9ERTogKHRyZWU6IFRyZWVNb2RlbCwgbm9kZTogVHJlZU5vZGUsICRldmVudDogYW55LCB7ZnJvbSAsIHRvfToge2Zyb206IGFueSwgdG86IGFueX0pID0+IHtcbiAgICAvLyBkZWZhdWx0IGFjdGlvbiBhc3N1bWVzIGZyb20gPSBub2RlLCB0byA9IHtwYXJlbnQsIGluZGV4fVxuICAgIHRyZWUubW92ZU5vZGUoZnJvbSwgdG8pO1xuICB9XG59O1xuXG5jb25zdCBkZWZhdWx0QWN0aW9uTWFwcGluZzogSUFjdGlvbk1hcHBpbmcgPSB7XG4gIG1vdXNlOiB7XG4gICAgY2xpY2s6IFRSRUVfQUNUSU9OUy5UT0dHTEVfU0VMRUNURUQsXG4gICAgZGJsQ2xpY2s6IG51bGwsXG4gICAgY29udGV4dE1lbnU6IG51bGwsXG4gICAgZXhwYW5kZXJDbGljazogVFJFRV9BQ1RJT05TLlRPR0dMRV9FWFBBTkRFRCxcbiAgICBkcm9wOiBUUkVFX0FDVElPTlMuTU9WRV9OT0RFXG4gIH0sXG4gIGtleXM6IHtcbiAgICBbS0VZUy5SSUdIVF06IFRSRUVfQUNUSU9OUy5EUklMTF9ET1dOLFxuICAgIFtLRVlTLkxFRlRdOiBUUkVFX0FDVElPTlMuRFJJTExfVVAsXG4gICAgW0tFWVMuRE9XTl06IFRSRUVfQUNUSU9OUy5ORVhUX05PREUsXG4gICAgW0tFWVMuVVBdOiBUUkVFX0FDVElPTlMuUFJFVklPVVNfTk9ERSxcbiAgICBbS0VZUy5TUEFDRV06IFRSRUVfQUNUSU9OUy5UT0dHTEVfU0VMRUNURUQsXG4gICAgW0tFWVMuRU5URVJdOiBUUkVFX0FDVElPTlMuVE9HR0xFX1NFTEVDVEVEXG4gIH1cbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUFjdGlvbk1hcHBpbmcge1xuICBtb3VzZT86IHtcbiAgICBjbGljaz86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRibENsaWNrPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgY29udGV4dE1lbnU/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBleHBhbmRlckNsaWNrPzogSUFjdGlvbkhhbmRsZXIsXG4gICAgZHJhZ1N0YXJ0PzogSUFjdGlvbkhhbmRsZXIsXG4gICAgZHJhZz86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyYWdFbmQ/OiBJQWN0aW9uSGFuZGxlcixcbiAgICBkcmFnT3Zlcj86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyYWdMZWF2ZT86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyYWdFbnRlcj86IElBY3Rpb25IYW5kbGVyLFxuICAgIGRyb3A/OiBJQWN0aW9uSGFuZGxlclxuICB9O1xuICBrZXlzPzoge1xuICAgIFtrZXk6IG51bWJlcl06IElBY3Rpb25IYW5kbGVyXG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBUcmVlT3B0aW9ucyB7XG4gIGdldCBjaGlsZHJlbkZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuY2hpbGRyZW5GaWVsZCB8fCAnY2hpbGRyZW4nOyB9XG4gIGdldCBkaXNwbGF5RmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5kaXNwbGF5RmllbGQgfHwgJ25hbWUnOyB9XG4gIGdldCBpZEZpZWxkKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm9wdGlvbnMuaWRGaWVsZCB8fCAnaWQnOyB9XG4gIGdldCBpc0V4cGFuZGVkRmllbGQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0V4cGFuZGVkRmllbGQgfHwgJ2lzRXhwYW5kZWQnOyB9XG4gIGdldCBnZXRDaGlsZHJlbigpOiBhbnkgeyByZXR1cm4gdGhpcy5vcHRpb25zLmdldENoaWxkcmVuOyB9XG4gIGdldCBsZXZlbFBhZGRpbmcoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5sZXZlbFBhZGRpbmcgfHwgMDsgfVxuICBnZXQgdXNlVmlydHVhbFNjcm9sbCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsOyB9XG4gIGdldCBhbmltYXRlRXhwYW5kKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVFeHBhbmQ7IH1cbiAgZ2V0IGFuaW1hdGVTcGVlZCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVTcGVlZCB8fCAzMDsgfVxuICBnZXQgYW5pbWF0ZUFjY2VsZXJhdGlvbigpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLmFuaW1hdGVBY2NlbGVyYXRpb24gfHwgMS4yOyB9XG4gIGdldCBzY3JvbGxPblNlbGVjdCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5zY3JvbGxPblNlbGVjdCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy5zY3JvbGxPblNlbGVjdDsgfVxuICBhY3Rpb25NYXBwaW5nOiBJQWN0aW9uTWFwcGluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IElUcmVlT3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5hY3Rpb25NYXBwaW5nID0gXy5kZWZhdWx0c0RlZXAoe30sIHRoaXMub3B0aW9ucy5hY3Rpb25NYXBwaW5nLCBkZWZhdWx0QWN0aW9uTWFwcGluZyk7XG4gIH1cblxuICBhbGxvd0Ryb3AoZWxlbWVudCwgdG8sICRldmVudD8pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmFsbG93RHJvcCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93RHJvcChlbGVtZW50LCB0bywgJGV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmFsbG93RHJvcCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHRoaXMub3B0aW9ucy5hbGxvd0Ryb3A7XG4gICAgfVxuICB9XG5cbiAgYWxsb3dEcmFnKG5vZGU6IFRyZWVOb2RlKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5hbGxvd0RyYWcgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5hbGxvd0RyYWcobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuYWxsb3dEcmFnO1xuICAgIH1cbiAgfVxuXG4gIG5vZGVDbGFzcyhub2RlOiBUcmVlTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5ub2RlQ2xhc3MgPyB0aGlzLm9wdGlvbnMubm9kZUNsYXNzKG5vZGUpIDogJyc7XG4gIH1cblxuICBub2RlSGVpZ2h0KG5vZGU6IFRyZWVOb2RlKTogbnVtYmVyIHtcbiAgICBpZiAobm9kZS5kYXRhLnZpcnR1YWwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGxldCBub2RlSGVpZ2h0ID0gdGhpcy5vcHRpb25zLm5vZGVIZWlnaHQgfHwgMjI7XG5cbiAgICBpZiAodHlwZW9mIG5vZGVIZWlnaHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG5vZGVIZWlnaHQgPSBub2RlSGVpZ2h0KG5vZGUpO1xuICAgIH1cblxuICAgIC8vIGFjY291bnQgZm9yIGRyb3Agc2xvdHM6XG4gICAgcmV0dXJuIG5vZGVIZWlnaHQgKyAobm9kZS5pbmRleCA9PT0gMCA/ICAyIDogMSkgKiB0aGlzLmRyb3BTbG90SGVpZ2h0O1xuICB9XG5cbiAgZ2V0IGRyb3BTbG90SGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5kcm9wU2xvdEhlaWdodCB8fCAyO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/models/tree-virtual-scroll.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_events__ = __webpack_require__("../../../../angular-tree-component/dist/constants/events.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeVirtualScroll; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Y_OFFSET = 300; // Extra pixels outside the viewport, in each direction, to render nodes in
var Y_EPSILON = 50; // Minimum pixel change required to recalculate the rendered nodes
var TreeVirtualScroll = (function () {
    function TreeVirtualScroll(treeModel) {
        var _this = this;
        this.treeModel = treeModel;
        this.yBlocks = 0;
        this.x = 0;
        this.viewportHeight = null;
        this.viewport = null;
        treeModel.virtualScroll = this;
        this._dispose = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["autorun"])(function () { return _this.fixScroll(); })];
    }
    Object.defineProperty(TreeVirtualScroll.prototype, "y", {
        get: function () {
            return this.yBlocks * Y_EPSILON;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeVirtualScroll.prototype, "totalHeight", {
        get: function () {
            return this.treeModel.virtualRoot ? this.treeModel.virtualRoot.height : 0;
        },
        enumerable: true,
        configurable: true
    });
    TreeVirtualScroll.prototype.fireEvent = function (event) {
        this.treeModel.fireEvent(event);
    };
    TreeVirtualScroll.prototype.init = function () {
        var _this = this;
        var fn = this.recalcPositions.bind(this);
        fn();
        this._dispose = this._dispose.concat([
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(function () { return _this.treeModel.roots; }, fn),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(function () { return _this.treeModel.expandedNodeIds; }, fn),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(function () { return _this.treeModel.hiddenNodeIds; }, fn)
        ]);
        this.treeModel.subscribe(__WEBPACK_IMPORTED_MODULE_3__constants_events__["a" /* TREE_EVENTS */].onLoadChildren, fn);
    };
    TreeVirtualScroll.prototype.isEnabled = function () {
        return this.treeModel.options.useVirtualScroll;
    };
    TreeVirtualScroll.prototype._setYBlocks = function (value) {
        this.yBlocks = value;
    };
    TreeVirtualScroll.prototype.recalcPositions = function () {
        this.treeModel.virtualRoot.height = this._getPositionAfter(this.treeModel.getVisibleRoots(), 0);
    };
    TreeVirtualScroll.prototype._getPositionAfter = function (nodes, startPos) {
        var _this = this;
        var position = startPos;
        nodes.forEach(function (node) {
            node.position = position;
            position = _this._getPositionAfterNode(node, position);
        });
        return position;
    };
    TreeVirtualScroll.prototype._getPositionAfterNode = function (node, startPos) {
        var position = node.getSelfHeight() + startPos;
        if (node.children && node.isExpanded) {
            position = this._getPositionAfter(node.visibleChildren, position);
        }
        node.height = position - startPos;
        return position;
    };
    TreeVirtualScroll.prototype.clear = function () {
        this._dispose.forEach(function (d) { return d(); });
    };
    TreeVirtualScroll.prototype.setViewport = function (viewport) {
        Object.assign(this, {
            viewport: viewport,
            x: viewport.scrollLeft,
            yBlocks: Math.round(viewport.scrollTop / Y_EPSILON),
            viewportHeight: viewport.getBoundingClientRect().height
        });
    };
    TreeVirtualScroll.prototype.scrollIntoView = function (node, force, scrollToMiddle) {
        if (scrollToMiddle === void 0) { scrollToMiddle = true; }
        if (force ||
            node.position < this.y ||
            node.position + node.getSelfHeight() > this.y + this.viewportHeight) {
            if (this.viewport) {
                this.viewport.scrollTop = scrollToMiddle ?
                    node.position - this.viewportHeight / 2 :
                    node.position; // scroll to start
                this._setYBlocks(Math.floor(this.viewport.scrollTop / Y_EPSILON));
            }
        }
    };
    TreeVirtualScroll.prototype.getViewportNodes = function (nodes) {
        var _this = this;
        if (!nodes)
            return [];
        var visibleNodes = nodes.filter(function (node) { return !node.isHidden; });
        if (!this.isEnabled())
            return visibleNodes;
        if (!this.viewportHeight || !visibleNodes.length)
            return [];
        // Search for first node in the viewport using binary search
        // Look for first node that starts after the beginning of the viewport (with buffer)
        // Or that ends after the beginning of the viewport
        var firstIndex = binarySearch(visibleNodes, function (node) {
            return (node.position + Y_OFFSET > _this.y) ||
                (node.position + node.height > _this.y);
        });
        // Search for last node in the viewport using binary search
        // Look for first node that starts after the end of the viewport (with buffer)
        var lastIndex = binarySearch(visibleNodes, function (node) {
            return node.position - Y_OFFSET > _this.y + _this.viewportHeight;
        }, firstIndex);
        var viewportNodes = [];
        for (var i = firstIndex; i <= lastIndex; i++) {
            viewportNodes.push(visibleNodes[i]);
        }
        return viewportNodes;
    };
    TreeVirtualScroll.prototype.fixScroll = function () {
        var maxY = Math.max(0, this.totalHeight - this.viewportHeight);
        if (this.y < 0)
            this._setYBlocks(0);
        if (this.y > maxY)
            this._setYBlocks(maxY / Y_EPSILON);
    };
    return TreeVirtualScroll;
}());

TreeVirtualScroll.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TreeVirtualScroll.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__tree_model__["a" /* TreeModel */], },
]; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "yBlocks", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "x", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeVirtualScroll.prototype, "viewportHeight", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeVirtualScroll.prototype, "y", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeVirtualScroll.prototype, "totalHeight", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "_setYBlocks", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "recalcPositions", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "setViewport", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], TreeVirtualScroll.prototype, "scrollIntoView", null);
function binarySearch(nodes, condition, firstIndex) {
    if (firstIndex === void 0) { firstIndex = 0; }
    var index = firstIndex;
    var toIndex = nodes.length - 1;
    while (index !== toIndex) {
        var midIndex = Math.floor((index + toIndex) / 2);
        if (condition(nodes[midIndex])) {
            toIndex = midIndex;
        }
        else {
            if (index === midIndex)
                index = toIndex;
            else
                index = midIndex;
        }
    }
    return index;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBQSxFQUFXLE1BQU8sZUFBQSxDQUFnQjtBQUMzQyxPQUFPLEVBQUUsVUFBQSxFQUFZLFFBQUEsRUFBVSxNQUFBLEVBQVEsT0FBQSxFQUFTLFFBQUEsRUFBUyxNQUFPLE1BQUEsQ0FBTztBQUN2RSxPQUFPLEVBQUUsU0FBQSxFQUFVLE1BQU8sY0FBQSxDQUFlO0FBQ3pDLE9BQU8sRUFBRSxXQUFBLEVBQVksTUFBTyxxQkFBQSxDQUFzQjtBQUVsRCxJQUFNLFFBQUEsR0FBVyxHQUFBLENBQUksQ0FBQywyRUFBQTtBQUN0QixJQUFNLFNBQUEsR0FBWSxFQUFBLENBQUcsQ0FBQSxrRUFBQTtBQUdyQjtJQWdCRSwyQkFBb0IsU0FBb0I7UUFBeEMsaUJBR0M7UUFIbUIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQWI1QixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osTUFBQyxHQUFHLENBQUMsQ0FBQztRQUNOLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFXZCxTQUFTLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFYUyxzQkFBSSxnQ0FBQzthQUFMO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRVMsc0JBQUksMENBQVc7YUFBZjtZQUNSLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FB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UTlCLE9BQU8sR0FQRyxRQUFBLENBQVM7UUFRckIsQ0FBQztRQUNELElBQUksQ0FQQyxDQUFBO1lBUUgsRUFBRSxDQUFDLENBQUMsS0FQQyxLQUFTLFFBQUEsQ0FBUztnQkFBQyxLQUFBLEdBQVEsT0FBQSxDQUFRO1lBUXhDLElBQUk7Z0JBUEMsS0FBQSxHQUFRLFFBQUEsQ0FBUztRQVF4QixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FQQyxLQUFBLENBQU07QUFRZixDQUFDIiwiZmlsZSI6InRyZWUtdmlydHVhbC1zY3JvbGwubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIGFjdGlvbiwgYXV0b3J1biwgcmVhY3Rpb24gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IFRyZWVNb2RlbCB9IGZyb20gJy4vdHJlZS5tb2RlbCc7XG5pbXBvcnQgeyBUUkVFX0VWRU5UUyB9IGZyb20gJy4uL2NvbnN0YW50cy9ldmVudHMnO1xuXG5jb25zdCBZX09GRlNFVCA9IDMwMDsgLy8gRXh0cmEgcGl4ZWxzIG91dHNpZGUgdGhlIHZpZXdwb3J0LCBpbiBlYWNoIGRpcmVjdGlvbiwgdG8gcmVuZGVyIG5vZGVzIGluXG5jb25zdCBZX0VQU0lMT04gPSA1MDsgLy8gTWluaW11bSBwaXhlbCBjaGFuZ2UgcmVxdWlyZWQgdG8gcmVjYWxjdWxhdGUgdGhlIHJlbmRlcmVkIG5vZGVzXG5cblxuZXhwb3J0IGNsYXNzIFRyZWVWaXJ0dWFsU2Nyb2xsIHtcbiAgcHJpdmF0ZSBfZGlzcG9zZTogYW55O1xuXG4gIEBvYnNlcnZhYmxlIHlCbG9ja3MgPSAwO1xuICBAb2JzZXJ2YWJsZSB4ID0gMDtcbiAgQG9ic2VydmFibGUgdmlld3BvcnRIZWlnaHQgPSBudWxsO1xuICB2aWV3cG9ydCA9IG51bGw7XG5cbiAgQGNvbXB1dGVkIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnlCbG9ja3MgKiBZX0VQU0lMT047XG4gIH1cblxuICBAY29tcHV0ZWQgZ2V0IHRvdGFsSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdCA/IHRoaXMudHJlZU1vZGVsLnZpcnR1YWxSb290LmhlaWdodCA6IDA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyZWVNb2RlbDogVHJlZU1vZGVsKSB7XG4gICAgdHJlZU1vZGVsLnZpcnR1YWxTY3JvbGwgPSB0aGlzO1xuICAgIHRoaXMuX2Rpc3Bvc2UgPSBbYXV0b3J1bigoKSA9PiB0aGlzLmZpeFNjcm9sbCgpKV07XG4gIH1cblxuICBmaXJlRXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC5maXJlRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBjb25zdCBmbiA9IHRoaXMucmVjYWxjUG9zaXRpb25zLmJpbmQodGhpcyk7XG5cbiAgICBmbigpO1xuICAgIHRoaXMuX2Rpc3Bvc2UgPSBbXG4gICAgICAuLi50aGlzLl9kaXNwb3NlLFxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwucm9vdHMsIGZuKSxcbiAgICAgIHJlYWN0aW9uKCgpID0+IHRoaXMudHJlZU1vZGVsLmV4cGFuZGVkTm9kZUlkcywgZm4pLFxuICAgICAgcmVhY3Rpb24oKCkgPT4gdGhpcy50cmVlTW9kZWwuaGlkZGVuTm9kZUlkcywgZm4pXG4gICAgXTtcbiAgICB0aGlzLnRyZWVNb2RlbC5zdWJzY3JpYmUoVFJFRV9FVkVOVFMub25Mb2FkQ2hpbGRyZW4sIGZuKTtcbiAgfVxuXG4gIGlzRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmVlTW9kZWwub3B0aW9ucy51c2VWaXJ0dWFsU2Nyb2xsO1xuICB9XG5cbiAgQGFjdGlvbiBwcml2YXRlIF9zZXRZQmxvY2tzKHZhbHVlKSB7XG4gICAgdGhpcy55QmxvY2tzID0gdmFsdWU7XG4gIH1cblxuICBAYWN0aW9uIHJlY2FsY1Bvc2l0aW9ucygpIHtcbiAgICB0aGlzLnRyZWVNb2RlbC52aXJ0dWFsUm9vdC5oZWlnaHQgPSB0aGlzLl9nZXRQb3NpdGlvbkFmdGVyKHRoaXMudHJlZU1vZGVsLmdldFZpc2libGVSb290cygpLCAwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBvc2l0aW9uQWZ0ZXIobm9kZXMsIHN0YXJ0UG9zKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gc3RhcnRQb3M7XG5cbiAgICBub2Rlcy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXJOb2RlKG5vZGUsIHBvc2l0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBwcml2YXRlIF9nZXRQb3NpdGlvbkFmdGVyTm9kZShub2RlLCBzdGFydFBvcykge1xuICAgIGxldCBwb3NpdGlvbiA9IG5vZGUuZ2V0U2VsZkhlaWdodCgpICsgc3RhcnRQb3M7XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmlzRXhwYW5kZWQpIHsgLy8gVEJEOiBjb25zaWRlciBsb2FkaW5nIGNvbXBvbmVudCBhcyB3ZWxsXG4gICAgICBwb3NpdGlvbiA9IHRoaXMuX2dldFBvc2l0aW9uQWZ0ZXIobm9kZS52aXNpYmxlQ2hpbGRyZW4sIHBvc2l0aW9uKTtcbiAgICB9XG4gICAgbm9kZS5oZWlnaHQgPSBwb3NpdGlvbiAtIHN0YXJ0UG9zO1xuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5fZGlzcG9zZS5mb3JFYWNoKChkKSA9PiBkKCkpO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRWaWV3cG9ydCh2aWV3cG9ydCkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgdmlld3BvcnQsXG4gICAgICB4OiB2aWV3cG9ydC5zY3JvbGxMZWZ0LFxuICAgICAgeUJsb2NrczogTWF0aC5yb3VuZCh2aWV3cG9ydC5zY3JvbGxUb3AgLyBZX0VQU0lMT04pLFxuICAgICAgdmlld3BvcnRIZWlnaHQ6IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIH0pO1xuICB9XG5cbiAgQGFjdGlvbiBzY3JvbGxJbnRvVmlldyhub2RlLCBmb3JjZSwgc2Nyb2xsVG9NaWRkbGUgPSB0cnVlKSB7XG4gICAgaWYgKGZvcmNlIHx8IC8vIGZvcmNlIHNjcm9sbCB0byBub2RlXG4gICAgICBub2RlLnBvc2l0aW9uIDwgdGhpcy55IHx8IC8vIG5vZGUgaXMgYWJvdmUgdmlld3BvcnRcbiAgICAgIG5vZGUucG9zaXRpb24gKyBub2RlLmdldFNlbGZIZWlnaHQoKSA+IHRoaXMueSArIHRoaXMudmlld3BvcnRIZWlnaHQpIHsgLy8gbm9kZSBpcyBiZWxvdyB2aWV3cG9ydFxuICAgICAgaWYgKHRoaXMudmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy52aWV3cG9ydC5zY3JvbGxUb3AgPSBzY3JvbGxUb01pZGRsZSA/XG4gICAgICAgICAgbm9kZS5wb3NpdGlvbiAtIHRoaXMudmlld3BvcnRIZWlnaHQgLyAyIDogLy8gc2Nyb2xsIHRvIG1pZGRsZVxuICAgICAgICAgIG5vZGUucG9zaXRpb247IC8vIHNjcm9sbCB0byBzdGFydFxuXG4gICAgICAgIHRoaXMuX3NldFlCbG9ja3MoTWF0aC5mbG9vcih0aGlzLnZpZXdwb3J0LnNjcm9sbFRvcCAvIFlfRVBTSUxPTikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldFZpZXdwb3J0Tm9kZXMobm9kZXMpIHtcbiAgICBpZiAoIW5vZGVzKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB2aXNpYmxlTm9kZXMgPSBub2Rlcy5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmlzSGlkZGVuKTtcblxuICAgIGlmICghdGhpcy5pc0VuYWJsZWQoKSkgcmV0dXJuIHZpc2libGVOb2RlcztcblxuICAgIGlmICghdGhpcy52aWV3cG9ydEhlaWdodCB8fCAhdmlzaWJsZU5vZGVzLmxlbmd0aCkgcmV0dXJuIFtdO1xuXG4gICAgLy8gU2VhcmNoIGZvciBmaXJzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgYmVnaW5uaW5nIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgLy8gT3IgdGhhdCBlbmRzIGFmdGVyIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHZpZXdwb3J0XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGJpbmFyeVNlYXJjaCh2aXNpYmxlTm9kZXMsIChub2RlKSA9PiB7XG4gICAgICByZXR1cm4gKG5vZGUucG9zaXRpb24gKyBZX09GRlNFVCA+IHRoaXMueSkgfHxcbiAgICAgICAgICAgICAobm9kZS5wb3NpdGlvbiArIG5vZGUuaGVpZ2h0ID4gdGhpcy55KTtcbiAgICB9KTtcblxuICAgIC8vIFNlYXJjaCBmb3IgbGFzdCBub2RlIGluIHRoZSB2aWV3cG9ydCB1c2luZyBiaW5hcnkgc2VhcmNoXG4gICAgLy8gTG9vayBmb3IgZmlyc3Qgbm9kZSB0aGF0IHN0YXJ0cyBhZnRlciB0aGUgZW5kIG9mIHRoZSB2aWV3cG9ydCAod2l0aCBidWZmZXIpXG4gICAgY29uc3QgbGFzdEluZGV4ID0gYmluYXJ5U2VhcmNoKHZpc2libGVOb2RlcywgKG5vZGUpID0+IHtcbiAgICAgIHJldHVybiBub2RlLnBvc2l0aW9uIC0gWV9PRkZTRVQgPiB0aGlzLnkgKyB0aGlzLnZpZXdwb3J0SGVpZ2h0O1xuICAgIH0sIGZpcnN0SW5kZXgpO1xuXG4gICAgY29uc3Qgdmlld3BvcnROb2RlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XG4gICAgICB2aWV3cG9ydE5vZGVzLnB1c2godmlzaWJsZU5vZGVzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmlld3BvcnROb2RlcztcbiAgfVxuXG4gIGZpeFNjcm9sbCgpIHtcbiAgICBjb25zdCBtYXhZID0gTWF0aC5tYXgoMCwgdGhpcy50b3RhbEhlaWdodCAtIHRoaXMudmlld3BvcnRIZWlnaHQpO1xuXG4gICAgaWYgKHRoaXMueSA8IDApIHRoaXMuX3NldFlCbG9ja3MoMCk7XG4gICAgaWYgKHRoaXMueSA+IG1heFkpIHRoaXMuX3NldFlCbG9ja3MobWF4WSAvIFlfRVBTSUxPTik7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG57dHlwZTogVHJlZU1vZGVsLCB9LFxuXTtcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoKG5vZGVzLCBjb25kaXRpb24sIGZpcnN0SW5kZXggPSAwKSB7XG4gIGxldCBpbmRleCA9IGZpcnN0SW5kZXg7XG4gIGxldCB0b0luZGV4ID0gbm9kZXMubGVuZ3RoIC0gMTtcblxuICB3aGlsZSAoaW5kZXggIT09IHRvSW5kZXgpIHtcbiAgICBsZXQgbWlkSW5kZXggPSBNYXRoLmZsb29yKChpbmRleCArIHRvSW5kZXgpIC8gMik7XG5cbiAgICBpZiAoY29uZGl0aW9uKG5vZGVzW21pZEluZGV4XSkpIHtcbiAgICAgIHRvSW5kZXggPSBtaWRJbmRleDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoaW5kZXggPT09IG1pZEluZGV4KSBpbmRleCA9IHRvSW5kZXg7XG4gICAgICBlbHNlIGluZGV4ID0gbWlkSW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../angular-tree-component/dist/models/tree.model.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tree_node_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-node.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tree_options_model__ = __webpack_require__("../../../../angular-tree-component/dist/models/tree-options.model.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants_events__ = __webpack_require__("../../../../angular-tree-component/dist/constants/events.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeModel; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var first = __WEBPACK_IMPORTED_MODULE_5_lodash__["first"], last = __WEBPACK_IMPORTED_MODULE_5_lodash__["last"], compact = __WEBPACK_IMPORTED_MODULE_5_lodash__["compact"], find = __WEBPACK_IMPORTED_MODULE_5_lodash__["find"], includes = __WEBPACK_IMPORTED_MODULE_5_lodash__["includes"], remove = __WEBPACK_IMPORTED_MODULE_5_lodash__["remove"], indexOf = __WEBPACK_IMPORTED_MODULE_5_lodash__["indexOf"], pullAt = __WEBPACK_IMPORTED_MODULE_5_lodash__["pullAt"], isString = __WEBPACK_IMPORTED_MODULE_5_lodash__["isString"], isFunction = __WEBPACK_IMPORTED_MODULE_5_lodash__["isFunction"];
var TreeModel = (function () {
    function TreeModel() {
        this.options = new __WEBPACK_IMPORTED_MODULE_3__tree_options_model__["a" /* TreeOptions */]();
        this.eventNames = Object.keys(__WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */]);
        this.expandedNodeIds = {};
        this.activeNodeIds = {};
        this.hiddenNodeIds = {};
        this.focusedNodeId = null;
        this.firstUpdate = true;
    }
    // events
    TreeModel.prototype.fireEvent = function (event) {
        event.treeModel = this;
        var newEventName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__constants_events__["b" /* newName */])(event.eventName);
        var deprecatedEvent = Object.assign({}, event, {
            deprecated: "This event is deprecated, please use " + newEventName + " instead"
        });
        event.eventName = newEventName;
        this.events[deprecatedEvent.eventName].emit(deprecatedEvent);
        this.events[event.eventName].emit(event);
        this.events.onEvent.emit(deprecatedEvent);
        this.events.event.emit(event);
    };
    TreeModel.prototype.subscribe = function (eventName, fn) {
        this.events[eventName].subscribe(fn);
    };
    // getters
    TreeModel.prototype.getFocusedNode = function () {
        return this.focusedNode;
    };
    TreeModel.prototype.getActiveNode = function () {
        return this.activeNodes[0];
    };
    TreeModel.prototype.getActiveNodes = function () {
        return this.activeNodes;
    };
    TreeModel.prototype.getVisibleRoots = function () {
        return this.virtualRoot.visibleChildren;
    };
    TreeModel.prototype.getFirstRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return first(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    TreeModel.prototype.getLastRoot = function (skipHidden) {
        if (skipHidden === void 0) { skipHidden = false; }
        return last(skipHidden ? this.getVisibleRoots() : this.roots);
    };
    Object.defineProperty(TreeModel.prototype, "isFocused", {
        get: function () {
            return TreeModel.focusedTree === this;
        },
        enumerable: true,
        configurable: true
    });
    TreeModel.prototype.isNodeFocused = function (node) {
        return this.focusedNode === node;
    };
    TreeModel.prototype.isEmptyTree = function () {
        return this.roots && this.roots.length === 0;
    };
    Object.defineProperty(TreeModel.prototype, "focusedNode", {
        get: function () {
            return this.focusedNodeId ? this.getNodeById(this.focusedNodeId) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "expandedNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.expandedNodeIds)
                .filter(function (id) { return _this.expandedNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact(nodes);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TreeModel.prototype, "activeNodes", {
        get: function () {
            var _this = this;
            var nodes = Object.keys(this.activeNodeIds)
                .filter(function (id) { return _this.activeNodeIds[id]; })
                .map(function (id) { return _this.getNodeById(id); });
            return compact(nodes);
        },
        enumerable: true,
        configurable: true
    });
    // locating nodes
    TreeModel.prototype.getNodeByPath = function (path, startNode) {
        if (startNode === void 0) { startNode = null; }
        if (!path)
            return null;
        startNode = startNode || this.virtualRoot;
        if (path.length === 0)
            return startNode;
        if (!startNode.children)
            return null;
        var childId = path.shift();
        var childNode = find(startNode.children, { id: childId });
        if (!childNode)
            return null;
        return this.getNodeByPath(path, childNode);
    };
    TreeModel.prototype.getNodeById = function (id) {
        var idStr = id.toString();
        return this.getNodeBy(function (node) { return node.id.toString() === idStr; });
    };
    TreeModel.prototype.getNodeBy = function (predicate, startNode) {
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (!startNode.children)
            return null;
        var found = find(startNode.children, predicate);
        if (found) {
            return found;
        }
        else {
            for (var _i = 0, _a = startNode.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var foundInChildren = this.getNodeBy(predicate, child);
                if (foundInChildren)
                    return foundInChildren;
            }
        }
    };
    TreeModel.prototype.isExpanded = function (node) {
        return this.expandedNodeIds[node.id];
    };
    TreeModel.prototype.isHidden = function (node) {
        return this.hiddenNodeIds[node.id];
    };
    TreeModel.prototype.isActive = function (node) {
        return this.activeNodeIds[node.id];
    };
    // actions
    TreeModel.prototype.setData = function (_a) {
        var nodes = _a.nodes, _b = _a.options, options = _b === void 0 ? null : _b, _c = _a.events, events = _c === void 0 ? null : _c;
        if (options) {
            this.options = new __WEBPACK_IMPORTED_MODULE_3__tree_options_model__["a" /* TreeOptions */](options);
        }
        if (events) {
            this.events = events;
        }
        if (nodes) {
            this.nodes = nodes;
        }
        this.update();
    };
    TreeModel.prototype.update = function () {
        // Rebuild tree:
        var virtualRootConfig = (_a = {
                virtual: true
            },
            _a[this.options.childrenField] = this.nodes,
            _a);
        this.virtualRoot = new __WEBPACK_IMPORTED_MODULE_2__tree_node_model__["a" /* TreeNode */](virtualRootConfig, null, this, 0);
        this.roots = this.virtualRoot.children;
        // Fire event:
        if (this.firstUpdate) {
            if (this.roots) {
                this.firstUpdate = false;
                this._calculateExpandedNodes();
            }
        }
        else {
            this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onUpdateData });
        }
        var _a;
    };
    TreeModel.prototype.setFocusedNode = function (node) {
        this.focusedNodeId = node ? node.id : null;
    };
    TreeModel.prototype.setFocus = function (value) {
        TreeModel.focusedTree = value ? this : null;
    };
    TreeModel.prototype.doForAll = function (fn) {
        this.roots.forEach(function (root) { return root.doForAll(fn); });
    };
    TreeModel.prototype.focusNextNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findNextNode(true, true) : this.getFirstRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusPreviousNode = function () {
        var previousNode = this.getFocusedNode();
        var nextNode = previousNode ? previousNode.findPreviousNode(true) : this.getLastRoot(true);
        if (nextNode)
            nextNode.focus();
    };
    TreeModel.prototype.focusDrillDown = function () {
        var previousNode = this.getFocusedNode();
        if (previousNode && previousNode.isCollapsed && previousNode.hasChildren) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode ? previousNode.getFirstChild(true) : this.getFirstRoot(true);
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.focusDrillUp = function () {
        var previousNode = this.getFocusedNode();
        if (!previousNode)
            return;
        if (previousNode.isExpanded) {
            previousNode.toggleExpanded();
        }
        else {
            var nextNode = previousNode.realParent;
            if (nextNode)
                nextNode.focus();
        }
    };
    TreeModel.prototype.setActiveNode = function (node, value, multi) {
        if (multi === void 0) { multi = false; }
        if (multi) {
            this._setActiveNodeMulti(node, value);
        }
        else {
            this._setActiveNodeSingle(node, value);
        }
        if (value) {
            node.focus();
            this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onActivate, node: node });
        }
        else {
            this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onDeactivate, node: node });
        }
    };
    TreeModel.prototype.setExpandedNode = function (node, value) {
        this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[node.id] = value, _a));
        this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onToggleExpanded, node: node, isExpanded: value });
        var _a;
    };
    TreeModel.prototype.expandAll = function () {
        this.roots.forEach(function (root) { return root.expandAll(); });
    };
    TreeModel.prototype.collapseAll = function () {
        this.roots.forEach(function (root) { return root.collapseAll(); });
    };
    TreeModel.prototype.setIsHidden = function (node, value) {
        this.hiddenNodeIds = Object.assign({}, this.hiddenNodeIds, (_a = {}, _a[node.id] = value, _a));
        var _a;
    };
    TreeModel.prototype.setHiddenNodeIds = function (nodeIds) {
        this.hiddenNodeIds = nodeIds.reduce(function (id, hiddenNodeIds) {
            return Object.assign(hiddenNodeIds, (_a = {},
                _a[id] = true,
                _a));
            var _a;
        }, {});
    };
    TreeModel.prototype.performKeyAction = function (node, $event) {
        var action = this.options.actionMapping.keys[$event.keyCode];
        if (action) {
            $event.preventDefault();
            action(this, node, $event);
            return true;
        }
        else {
            return false;
        }
    };
    TreeModel.prototype.filterNodes = function (filter, autoShow) {
        var _this = this;
        if (autoShow === void 0) { autoShow = true; }
        var filterFn;
        if (!filter) {
            return this.clearFilter();
        }
        // support function and string filter
        if (isString(filter)) {
            filterFn = function (node) { return node.displayField.toLowerCase().indexOf(filter.toLowerCase()) !== -1; };
        }
        else if (isFunction(filter)) {
            filterFn = filter;
        }
        else {
            console.error('Don\'t know what to do with filter', filter);
            console.error('Should be either a string or function');
            return;
        }
        var ids = {};
        this.roots.forEach(function (node) { return _this._filterNode(ids, node, filterFn, autoShow); });
        this.hiddenNodeIds = ids;
        this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onChangeFilter });
    };
    TreeModel.prototype.clearFilter = function () {
        this.hiddenNodeIds = {};
        this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onChangeFilter });
    };
    TreeModel.prototype.moveNode = function (node, to) {
        var fromIndex = node.getIndexInParent();
        var fromParent = node.parent;
        if (!this._canMoveNode(node, fromIndex, to))
            return;
        var fromChildren = fromParent.getField('children');
        // If node doesn't have children - create children array
        if (!to.parent.getField('children')) {
            to.parent.setField('children', []);
        }
        var toChildren = to.parent.getField('children');
        var originalNode = fromChildren.splice(fromIndex, 1)[0];
        // Compensate for index if already removed from parent:
        var toIndex = (fromParent === to.parent && to.index > fromIndex) ? to.index - 1 : to.index;
        toChildren.splice(toIndex, 0, originalNode);
        fromParent.treeModel.update();
        if (to.parent.treeModel !== fromParent.treeModel) {
            to.parent.treeModel.update();
        }
        this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onMoveNode, node: originalNode, to: { parent: to.parent.data, index: toIndex } });
    };
    TreeModel.prototype.getState = function () {
        return {
            expandedNodeIds: this.expandedNodeIds,
            activeNodeIds: this.activeNodeIds,
            hiddenNodeIds: this.hiddenNodeIds,
            focusedNodeId: this.focusedNodeId
        };
    };
    TreeModel.prototype.setState = function (state) {
        if (!state)
            return;
        Object.assign(this, {
            expandedNodeIds: state.expandedNodeIds,
            activeNodeIds: state.activeNodeIds,
            hiddenNodeIds: state.hiddenNodeIds,
            focusedNodeId: state.focusedNodeId
        });
    };
    TreeModel.prototype.subscribeToState = function (fn) {
        var _this = this;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["autorun"])(function () { return fn(_this.getState()); });
    };
    // private methods
    TreeModel.prototype._canMoveNode = function (node, fromIndex, to) {
        // same node:
        if (node.parent === to.parent && fromIndex === to.index) {
            return false;
        }
        return !to.parent.isDescendantOf(node);
    };
    TreeModel.prototype._filterNode = function (ids, node, filterFn, autoShow) {
        var _this = this;
        // if node passes function then it's visible
        var isVisible = filterFn(node);
        if (node.children) {
            // if one of node's children passes filter then this node is also visible
            node.children.forEach(function (child) {
                if (_this._filterNode(ids, child, filterFn, autoShow)) {
                    isVisible = true;
                }
            });
        }
        // mark node as hidden
        if (!isVisible) {
            ids[node.id] = true;
        }
        // auto expand parents to make sure the filtered nodes are visible
        if (autoShow && isVisible) {
            node.ensureVisible();
        }
        return isVisible;
    };
    TreeModel.prototype._calculateExpandedNodes = function (startNode) {
        var _this = this;
        if (startNode === void 0) { startNode = null; }
        startNode = startNode || this.virtualRoot;
        if (startNode.data[this.options.isExpandedField]) {
            this.expandedNodeIds = Object.assign({}, this.expandedNodeIds, (_a = {}, _a[startNode.id] = true, _a));
        }
        if (startNode.children) {
            startNode.children.forEach(function (child) { return _this._calculateExpandedNodes(child); });
        }
        var _a;
    };
    TreeModel.prototype._setActiveNodeSingle = function (node, value) {
        var _this = this;
        // Deactivate all other nodes:
        this.activeNodes
            .filter(function (activeNode) { return activeNode !== node; })
            .forEach(function (activeNode) {
            _this.fireEvent({ eventName: __WEBPACK_IMPORTED_MODULE_4__constants_events__["a" /* TREE_EVENTS */].onDeactivate, node: activeNode });
        });
        if (value) {
            this.activeNodeIds = (_a = {}, _a[node.id] = true, _a);
        }
        else {
            this.activeNodeIds = {};
        }
        var _a;
    };
    TreeModel.prototype._setActiveNodeMulti = function (node, value) {
        this.activeNodeIds = Object.assign({}, this.activeNodeIds, (_a = {}, _a[node.id] = value, _a));
        var _a;
    };
    return TreeModel;
}());

TreeModel.focusedTree = null;
TreeModel.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
];
/** @nocollapse */
TreeModel.ctorParameters = function () { return []; };
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Array)
], TreeModel.prototype, "roots", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeModel.prototype, "expandedNodeIds", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeModel.prototype, "activeNodeIds", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", Object)
], TreeModel.prototype, "hiddenNodeIds", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", String)
], TreeModel.prototype, "focusedNodeId", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["observable"],
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__tree_node_model__["a" /* TreeNode */])
], TreeModel.prototype, "virtualRoot", void 0);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeModel.prototype, "focusedNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeModel.prototype, "expandedNodes", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["computed"],
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], TreeModel.prototype, "activeNodes", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setData", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "update", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setFocusedNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setFocus", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "doForAll", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "focusNextNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "focusPreviousNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "focusDrillDown", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "focusDrillUp", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setActiveNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setExpandedNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "expandAll", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "collapseAll", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setIsHidden", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setHiddenNodeIds", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "filterNodes", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "clearFilter", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "moveNode", null);
__decorate([
    __WEBPACK_IMPORTED_MODULE_1_mobx__["action"],
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TreeModel.prototype, "setState", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tb2RlbHMvdHJlZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBQSxFQUF5QixNQUFPLGVBQUEsQ0FBZ0I7QUFDekQsT0FBTyxFQUFFLFVBQUEsRUFBWSxRQUFBLEVBQVUsTUFBQSxFQUFRLE9BQUEsRUFBUSxNQUFPLE1BQUEsQ0FBTztBQUM3RCxPQUFPLEVBQUUsUUFBQSxFQUFTLE1BQU8sbUJBQUEsQ0FBb0I7QUFDN0MsT0FBTyxFQUFFLFdBQUEsRUFBWSxNQUFPLHNCQUFBLENBQXVCO0FBR25ELE9BQU8sRUFBRSxXQUFBLEVBQWEsT0FBQSxFQUFRLE1BQU8scUJBQUEsQ0FBc0I7QUFFM0QsT0FBTyxLQUFLLENBQUEsTUFBTyxRQUFBLENBQVM7QUFFcEIsSUFBQSxlQUFBLEVBQU8sYUFBQSxFQUFNLG1CQUFBLEVBQVMsYUFBQSxFQUFNLHFCQUFBLEVBQ2xDLGlCQUFNLEVBQUUsbUJBQUEsRUFBUyxpQkFBQSxFQUFRLHFCQUFBLEVBQVUseUJBQUEsQ0FBaUI7QUFHdEQ7SUFrQkU7UUFmQSxZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFFekMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFJMUIsb0JBQWUsR0FBOEIsRUFBRSxDQUFDO1FBQ2hELGtCQUFhLEdBQThCLEVBQUUsQ0FBQztRQUM5QyxrQkFBYSxHQUE4QixFQUFFLENBQUM7UUFDOUMsa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFHakMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7SUFJM0IsQ0FBQztJQUVELFNBQVM7SUFDVCw2QkFBUyxHQUFULFVBQVUsS0FBSztRQUNiLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBTSxlQUFlLEdBQUcsTUFBTSxD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WU47QUFFTztJQUFQLE1BQU07Ozs7dUNBb0JOO0FBR087SUFBUCxNQUFNOzs7OytDQUVOO0FBRU87SUFBUCxNQUFNOzs7O3lDQUVOO0FBRU87SUFBUCxNQUFNOzs7O3lDQUVOO0FBRU87SUFBUCxNQUFNOzs7OzhDQUlOO0FBRU87SUFBUCxNQUFNOzs7O2tEQUlOO0FBRU87SUFBUCxNQUFNOzs7OytDQVNOO0FBRU87SUFBUCxNQUFNOzs7OzZDQVVOO0FBRU87SUFBUCxNQUFNOzs7OzhDQWNOO0FBRU87SUFBUCxNQUFNOzs7O2dEQUdOO0FBRU87SUFBUCxNQUFNOzs7OzBDQUVOO0FBRU87SUFBUCxNQUFNOzs7OzRDQUVOO0FBRU87SUFBUCxNQUFNOzs7OzRDQUVOO0FBRU87SUFBUCxNQUFNOzs7O2lEQUlOO0FBYU87SUFBUCxNQUFNOzs7OzRDQXdCTjtBQUVPO0lBQVAsTUFBTTs7Ozs0Q0FHTjtBQUVPO0lBQVAsTUFBTTs7Ozt5Q0EyQk47QUFXTztJQUFQLE1BQU07Ozs7eUNBU04iLCJmaWxlIjoidHJlZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBhY3Rpb24sIGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IFRyZWVOb2RlIH0gZnJvbSAnLi90cmVlLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgVHJlZU9wdGlvbnMgfSBmcm9tICcuL3RyZWUtb3B0aW9ucy5tb2RlbCc7XG5pbXBvcnQgeyBUcmVlVmlydHVhbFNjcm9sbCB9IGZyb20gJy4vdHJlZS12aXJ0dWFsLXNjcm9sbC5tb2RlbCc7XG5pbXBvcnQgeyBJVHJlZU1vZGVsIH0gZnJvbSAnLi4vZGVmcy9hcGknO1xuaW1wb3J0IHsgVFJFRV9FVkVOVFMsIG5ld05hbWUgfSBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJztcblxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5jb25zdCB7IGZpcnN0LCBsYXN0LCBjb21wYWN0LCBmaW5kLCBpbmNsdWRlcyxcbiAgcmVtb3ZlLCBpbmRleE9mLCBwdWxsQXQsIGlzU3RyaW5nLCBpc0Z1bmN0aW9uIH0gPSBfO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTW9kZWwgaW1wbGVtZW50cyBJVHJlZU1vZGVsIHtcbiAgc3RhdGljIGZvY3VzZWRUcmVlID0gbnVsbDtcblxuICBvcHRpb25zOiBUcmVlT3B0aW9ucyA9IG5ldyBUcmVlT3B0aW9ucygpO1xuICBub2RlczogYW55W107XG4gIGV2ZW50TmFtZXMgPSBPYmplY3Qua2V5cyhUUkVFX0VWRU5UUyk7XG4gIHZpcnR1YWxTY3JvbGw6IFRyZWVWaXJ0dWFsU2Nyb2xsO1xuXG4gIEBvYnNlcnZhYmxlIHJvb3RzOiBUcmVlTm9kZVtdO1xuICBAb2JzZXJ2YWJsZSBleHBhbmRlZE5vZGVJZHM6IHsgW2lkOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgQG9ic2VydmFibGUgYWN0aXZlTm9kZUlkczogeyBbaWQ6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICBAb2JzZXJ2YWJsZSBoaWRkZW5Ob2RlSWRzOiB7IFtpZDogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gIEBvYnNlcnZhYmxlIGZvY3VzZWROb2RlSWQ6IHN0cmluZyA9IG51bGw7XG4gIEBvYnNlcnZhYmxlIHZpcnR1YWxSb290OiBUcmVlTm9kZTtcblxuICBwcml2YXRlIGZpcnN0VXBkYXRlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBldmVudHM6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIC8vIGV2ZW50c1xuICBmaXJlRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC50cmVlTW9kZWwgPSB0aGlzO1xuICAgIGNvbnN0IG5ld0V2ZW50TmFtZSA9IG5ld05hbWUoZXZlbnQuZXZlbnROYW1lKTtcbiAgICBjb25zdCBkZXByZWNhdGVkRXZlbnQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudCwge1xuICAgICAgZGVwcmVjYXRlZDogYFRoaXMgZXZlbnQgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSAke25ld0V2ZW50TmFtZX0gaW5zdGVhZGBcbiAgICB9KTtcbiAgICBldmVudC5ldmVudE5hbWUgPSBuZXdFdmVudE5hbWU7XG5cbiAgICB0aGlzLmV2ZW50c1tkZXByZWNhdGVkRXZlbnQuZXZlbnROYW1lXS5lbWl0KGRlcHJlY2F0ZWRFdmVudCk7XG4gICAgdGhpcy5ldmVudHNbZXZlbnQuZXZlbnROYW1lXS5lbWl0KGV2ZW50KTtcbiAgICB0aGlzLmV2ZW50cy5vbkV2ZW50LmVtaXQoZGVwcmVjYXRlZEV2ZW50KTtcbiAgICB0aGlzLmV2ZW50cy5ldmVudC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudE5hbWUsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5zdWJzY3JpYmUoZm4pO1xuICB9XG5cblxuICAvLyBnZXR0ZXJzXG4gIGdldEZvY3VzZWROb2RlKCk6IFRyZWVOb2RlIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkTm9kZTtcbiAgfVxuXG5cbiAgZ2V0QWN0aXZlTm9kZSgpOiBUcmVlTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlTm9kZXNbMF07XG4gIH1cblxuICBnZXRBY3RpdmVOb2RlcygpOiBUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVOb2RlcztcbiAgfVxuXG4gIGdldFZpc2libGVSb290cygpIHtcbiAgICByZXR1cm4gdGhpcy52aXJ0dWFsUm9vdC52aXNpYmxlQ2hpbGRyZW47XG4gIH1cblxuICBnZXRGaXJzdFJvb3Qoc2tpcEhpZGRlbiA9IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZpcnN0KHNraXBIaWRkZW4gPyB0aGlzLmdldFZpc2libGVSb290cygpIDogdGhpcy5yb290cyk7XG4gIH1cblxuICBnZXRMYXN0Um9vdChza2lwSGlkZGVuID0gZmFsc2UpIHtcbiAgICByZXR1cm4gbGFzdChza2lwSGlkZGVuID8gdGhpcy5nZXRWaXNpYmxlUm9vdHMoKSA6IHRoaXMucm9vdHMpO1xuICB9XG5cbiAgZ2V0IGlzRm9jdXNlZCgpIHtcbiAgICByZXR1cm4gVHJlZU1vZGVsLmZvY3VzZWRUcmVlID09PSB0aGlzO1xuICB9XG5cbiAgaXNOb2RlRm9jdXNlZChub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZE5vZGUgPT09IG5vZGU7XG4gIH1cblxuICBpc0VtcHR5VHJlZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5yb290cyAmJiB0aGlzLnJvb3RzLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIEBjb21wdXRlZCBnZXQgZm9jdXNlZE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZE5vZGVJZCA/IHRoaXMuZ2V0Tm9kZUJ5SWQodGhpcy5mb2N1c2VkTm9kZUlkKSA6IG51bGw7XG4gIH1cblxuICBAY29tcHV0ZWQgZ2V0IGV4cGFuZGVkTm9kZXMoKSB7XG4gICAgY29uc3Qgbm9kZXMgPSBPYmplY3Qua2V5cyh0aGlzLmV4cGFuZGVkTm9kZUlkcylcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiB0aGlzLmV4cGFuZGVkTm9kZUlkc1tpZF0pXG4gICAgICAubWFwKChpZCkgPT4gdGhpcy5nZXROb2RlQnlJZChpZCkpO1xuXG4gICAgcmV0dXJuIGNvbXBhY3Qobm9kZXMpO1xuICB9XG5cbiAgQGNvbXB1dGVkIGdldCBhY3RpdmVOb2RlcygpIHtcbiAgICBjb25zdCBub2RlcyA9IE9iamVjdC5rZXlzKHRoaXMuYWN0aXZlTm9kZUlkcylcbiAgICAgIC5maWx0ZXIoKGlkKSA9PiB0aGlzLmFjdGl2ZU5vZGVJZHNbaWRdKVxuICAgICAgLm1hcCgoaWQpID0+IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQpKTtcblxuICAgIHJldHVybiBjb21wYWN0KG5vZGVzKTtcbiAgfVxuXG4gIC8vIGxvY2F0aW5nIG5vZGVzXG4gIGdldE5vZGVCeVBhdGgocGF0aDogYW55W10sIHN0YXJ0Tm9kZT0gbnVsbCk6IFRyZWVOb2RlIHtcbiAgICBpZiAoIXBhdGgpIHJldHVybiBudWxsO1xuXG4gICAgc3RhcnROb2RlID0gc3RhcnROb2RlIHx8IHRoaXMudmlydHVhbFJvb3Q7XG4gICAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gc3RhcnROb2RlO1xuXG4gICAgaWYgKCFzdGFydE5vZGUuY2hpbGRyZW4pIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IHBhdGguc2hpZnQoKTtcbiAgICBjb25zdCBjaGlsZE5vZGUgPSBmaW5kKHN0YXJ0Tm9kZS5jaGlsZHJlbiwgeyBpZDogY2hpbGRJZCB9KTtcblxuICAgIGlmICghY2hpbGROb2RlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB0aGlzLmdldE5vZGVCeVBhdGgocGF0aCwgY2hpbGROb2RlKTtcbiAgfVxuXG4gIGdldE5vZGVCeUlkKGlkKSB7XG4gICAgY29uc3QgaWRTdHIgPSBpZC50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0Tm9kZUJ5KChub2RlKSA9PiBub2RlLmlkLnRvU3RyaW5nKCkgPT09IGlkU3RyKTtcbiAgfVxuXG4gIGdldE5vZGVCeShwcmVkaWNhdGUsIHN0YXJ0Tm9kZSA9IG51bGwpIHtcbiAgICBzdGFydE5vZGUgPSBzdGFydE5vZGUgfHwgdGhpcy52aXJ0dWFsUm9vdDtcblxuICAgIGlmICghc3RhcnROb2RlLmNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGZvdW5kID0gZmluZChzdGFydE5vZGUuY2hpbGRyZW4sIHByZWRpY2F0ZSk7XG5cbiAgICBpZiAoZm91bmQpIHsgLy8gZm91bmQgaW4gY2hpbGRyZW5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9IGVsc2UgeyAvLyBsb29rIGluIGNoaWxkcmVuJ3MgY2hpbGRyZW5cbiAgICAgIGZvciAobGV0IGNoaWxkIG9mIHN0YXJ0Tm9kZS5jaGlsZHJlbikge1xuICAgICAgICBjb25zdCBmb3VuZEluQ2hpbGRyZW4gPSB0aGlzLmdldE5vZGVCeShwcmVkaWNhdGUsIGNoaWxkKTtcbiAgICAgICAgaWYgKGZvdW5kSW5DaGlsZHJlbikgcmV0dXJuIGZvdW5kSW5DaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0V4cGFuZGVkKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5leHBhbmRlZE5vZGVJZHNbbm9kZS5pZF07XG4gIH1cblxuICBpc0hpZGRlbihub2RlKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlkZGVuTm9kZUlkc1tub2RlLmlkXTtcbiAgfVxuXG4gIGlzQWN0aXZlKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVOb2RlSWRzW25vZGUuaWRdO1xuICB9XG5cbiAgLy8gYWN0aW9uc1xuICBAYWN0aW9uIHNldERhdGEoeyBub2Rlcywgb3B0aW9ucyA9IG51bGwsIGV2ZW50cyA9IG51bGwgfToge25vZGVzOiBhbnksIG9wdGlvbnM6IGFueSwgZXZlbnRzOiBhbnl9KSB7XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG5ldyBUcmVlT3B0aW9ucyhvcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGV2ZW50cykge1xuICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgfVxuICAgIGlmIChub2Rlcykge1xuICAgICAgdGhpcy5ub2RlcyA9IG5vZGVzO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBAYWN0aW9uIHVwZGF0ZSgpIHtcbiAgICAvLyBSZWJ1aWxkIHRyZWU6XG4gICAgbGV0IHZpcnR1YWxSb290Q29uZmlnID0ge1xuICAgICAgdmlydHVhbDogdHJ1ZSxcbiAgICAgIFt0aGlzLm9wdGlvbnMuY2hpbGRyZW5GaWVsZF06IHRoaXMubm9kZXNcbiAgICB9O1xuXG4gICAgdGhpcy52aXJ0dWFsUm9vdCA9IG5ldyBUcmVlTm9kZSh2aXJ0dWFsUm9vdENvbmZpZywgbnVsbCwgdGhpcywgMCk7XG5cbiAgICB0aGlzLnJvb3RzID0gdGhpcy52aXJ0dWFsUm9vdC5jaGlsZHJlbjtcblxuICAgIC8vIEZpcmUgZXZlbnQ6XG4gICAgaWYgKHRoaXMuZmlyc3RVcGRhdGUpIHtcbiAgICAgIGlmICh0aGlzLnJvb3RzKSB7XG4gICAgICAgIHRoaXMuZmlyc3RVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FsY3VsYXRlRXhwYW5kZWROb2RlcygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25VcGRhdGVEYXRhIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgQGFjdGlvbiBzZXRGb2N1c2VkTm9kZShub2RlKSB7XG4gICAgdGhpcy5mb2N1c2VkTm9kZUlkID0gbm9kZSA/IG5vZGUuaWQgOiBudWxsO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRGb2N1cyh2YWx1ZSkge1xuICAgIFRyZWVNb2RlbC5mb2N1c2VkVHJlZSA9IHZhbHVlID8gdGhpcyA6IG51bGw7XG4gIH1cblxuICBAYWN0aW9uIGRvRm9yQWxsKGZuKSB7XG4gICAgdGhpcy5yb290cy5mb3JFYWNoKChyb290KSA9PiByb290LmRvRm9yQWxsKGZuKSk7XG4gIH1cblxuICBAYWN0aW9uIGZvY3VzTmV4dE5vZGUoKSB7XG4gICAgbGV0IHByZXZpb3VzTm9kZSA9IHRoaXMuZ2V0Rm9jdXNlZE5vZGUoKTtcbiAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUgPyBwcmV2aW91c05vZGUuZmluZE5leHROb2RlKHRydWUsIHRydWUpIDogdGhpcy5nZXRGaXJzdFJvb3QodHJ1ZSk7XG4gICAgaWYgKG5leHROb2RlKSBuZXh0Tm9kZS5mb2N1cygpO1xuICB9XG5cbiAgQGFjdGlvbiBmb2N1c1ByZXZpb3VzTm9kZSgpIHtcbiAgICBsZXQgcHJldmlvdXNOb2RlID0gdGhpcy5nZXRGb2N1c2VkTm9kZSgpO1xuICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZSA/IHByZXZpb3VzTm9kZS5maW5kUHJldmlvdXNOb2RlKHRydWUpIDogdGhpcy5nZXRMYXN0Um9vdCh0cnVlKTtcbiAgICBpZiAobmV4dE5vZGUpIG5leHROb2RlLmZvY3VzKCk7XG4gIH1cblxuICBAYWN0aW9uIGZvY3VzRHJpbGxEb3duKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgaWYgKHByZXZpb3VzTm9kZSAmJiBwcmV2aW91c05vZGUuaXNDb2xsYXBzZWQgJiYgcHJldmlvdXNOb2RlLmhhc0NoaWxkcmVuKSB7XG4gICAgICBwcmV2aW91c05vZGUudG9nZ2xlRXhwYW5kZWQoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBsZXQgbmV4dE5vZGUgPSBwcmV2aW91c05vZGUgPyBwcmV2aW91c05vZGUuZ2V0Rmlyc3RDaGlsZCh0cnVlKSA6IHRoaXMuZ2V0Rmlyc3RSb290KHRydWUpO1xuICAgICAgaWYgKG5leHROb2RlKSBuZXh0Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gZm9jdXNEcmlsbFVwKCkge1xuICAgIGxldCBwcmV2aW91c05vZGUgPSB0aGlzLmdldEZvY3VzZWROb2RlKCk7XG4gICAgaWYgKCFwcmV2aW91c05vZGUpIHJldHVybjtcbiAgICBpZiAocHJldmlvdXNOb2RlLmlzRXhwYW5kZWQpIHtcbiAgICAgIHByZXZpb3VzTm9kZS50b2dnbGVFeHBhbmRlZCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBuZXh0Tm9kZSA9IHByZXZpb3VzTm9kZS5yZWFsUGFyZW50O1xuICAgICAgaWYgKG5leHROb2RlKSBuZXh0Tm9kZS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gc2V0QWN0aXZlTm9kZShub2RlLCB2YWx1ZSwgbXVsdGkgPSBmYWxzZSkge1xuICAgIGlmIChtdWx0aSkge1xuICAgICAgdGhpcy5fc2V0QWN0aXZlTm9kZU11bHRpKG5vZGUsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9zZXRBY3RpdmVOb2RlU2luZ2xlKG5vZGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5vZGUuZm9jdXMoKTtcbiAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkFjdGl2YXRlLCBub2RlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25EZWFjdGl2YXRlLCBub2RlIH0pO1xuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gc2V0RXhwYW5kZWROb2RlKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5leHBhbmRlZE5vZGVJZHMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmV4cGFuZGVkTm9kZUlkcywge1tub2RlLmlkXTogdmFsdWV9KTtcbiAgICB0aGlzLmZpcmVFdmVudCh7IGV2ZW50TmFtZTogVFJFRV9FVkVOVFMub25Ub2dnbGVFeHBhbmRlZCwgbm9kZSwgaXNFeHBhbmRlZDogdmFsdWUgfSk7XG4gIH1cblxuICBAYWN0aW9uIGV4cGFuZEFsbCgpIHtcbiAgICB0aGlzLnJvb3RzLmZvckVhY2goKHJvb3QpID0+IHJvb3QuZXhwYW5kQWxsKCkpO1xuICB9XG5cbiAgQGFjdGlvbiBjb2xsYXBzZUFsbCgpIHtcbiAgICB0aGlzLnJvb3RzLmZvckVhY2goKHJvb3QpID0+IHJvb3QuY29sbGFwc2VBbGwoKSk7XG4gIH1cblxuICBAYWN0aW9uIHNldElzSGlkZGVuKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5oaWRkZW5Ob2RlSWRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5oaWRkZW5Ob2RlSWRzLCB7W25vZGUuaWRdOiB2YWx1ZX0pO1xuICB9XG5cbiAgQGFjdGlvbiBzZXRIaWRkZW5Ob2RlSWRzKG5vZGVJZHMpIHtcbiAgICB0aGlzLmhpZGRlbk5vZGVJZHMgPSBub2RlSWRzLnJlZHVjZSgoaWQsIGhpZGRlbk5vZGVJZHMpID0+IE9iamVjdC5hc3NpZ24oaGlkZGVuTm9kZUlkcywge1xuICAgICAgW2lkXTogdHJ1ZVxuICAgIH0pLCB7fSk7XG4gIH1cblxuICBwZXJmb3JtS2V5QWN0aW9uKG5vZGUsICRldmVudCkge1xuICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMub3B0aW9ucy5hY3Rpb25NYXBwaW5nLmtleXNbJGV2ZW50LmtleUNvZGVdO1xuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgYWN0aW9uKHRoaXMsIG5vZGUsICRldmVudCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBhY3Rpb24gZmlsdGVyTm9kZXMoZmlsdGVyLCBhdXRvU2hvdyA9IHRydWUpIHtcbiAgICBsZXQgZmlsdGVyRm47XG5cbiAgICBpZiAoIWZpbHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYXJGaWx0ZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzdXBwb3J0IGZ1bmN0aW9uIGFuZCBzdHJpbmcgZmlsdGVyXG4gICAgaWYgKGlzU3RyaW5nKGZpbHRlcikpIHtcbiAgICAgIGZpbHRlckZuID0gKG5vZGUpID0+IG5vZGUuZGlzcGxheUZpZWxkLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0Z1bmN0aW9uKGZpbHRlcikpIHtcbiAgICAgICBmaWx0ZXJGbiA9IGZpbHRlcjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdEb25cXCd0IGtub3cgd2hhdCB0byBkbyB3aXRoIGZpbHRlcicsIGZpbHRlcik7XG4gICAgICBjb25zb2xlLmVycm9yKCdTaG91bGQgYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGZ1bmN0aW9uJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaWRzID0ge307XG4gICAgdGhpcy5yb290cy5mb3JFYWNoKChub2RlKSA9PiB0aGlzLl9maWx0ZXJOb2RlKGlkcywgbm9kZSwgZmlsdGVyRm4sIGF1dG9TaG93KSk7XG4gICAgdGhpcy5oaWRkZW5Ob2RlSWRzID0gaWRzO1xuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkNoYW5nZUZpbHRlciB9KTtcbiAgfVxuXG4gIEBhY3Rpb24gY2xlYXJGaWx0ZXIoKSB7XG4gICAgdGhpcy5oaWRkZW5Ob2RlSWRzID0ge307XG4gICAgdGhpcy5maXJlRXZlbnQoeyBldmVudE5hbWU6IFRSRUVfRVZFTlRTLm9uQ2hhbmdlRmlsdGVyIH0pO1xuICB9XG5cbiAgQGFjdGlvbiBtb3ZlTm9kZShub2RlLCB0bykge1xuICAgIGNvbnN0IGZyb21JbmRleCA9IG5vZGUuZ2V0SW5kZXhJblBhcmVudCgpO1xuICAgIGNvbnN0IGZyb21QYXJlbnQgPSBub2RlLnBhcmVudDtcblxuICAgIGlmICghdGhpcy5fY2FuTW92ZU5vZGUobm9kZSwgZnJvbUluZGV4ICwgdG8pKSByZXR1cm47XG5cbiAgICBjb25zdCBmcm9tQ2hpbGRyZW4gPSBmcm9tUGFyZW50LmdldEZpZWxkKCdjaGlsZHJlbicpO1xuXG4gICAgLy8gSWYgbm9kZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4gLSBjcmVhdGUgY2hpbGRyZW4gYXJyYXlcbiAgICBpZiAoIXRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKSkge1xuICAgICAgdG8ucGFyZW50LnNldEZpZWxkKCdjaGlsZHJlbicsIFtdKTtcbiAgICB9XG4gICAgY29uc3QgdG9DaGlsZHJlbiA9IHRvLnBhcmVudC5nZXRGaWVsZCgnY2hpbGRyZW4nKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsTm9kZSA9IGZyb21DaGlsZHJlbi5zcGxpY2UoZnJvbUluZGV4LCAxKVswXTtcblxuICAgIC8vIENvbXBlbnNhdGUgZm9yIGluZGV4IGlmIGFscmVhZHkgcmVtb3ZlZCBmcm9tIHBhcmVudDpcbiAgICBsZXQgdG9JbmRleCA9IChmcm9tUGFyZW50ID09PSB0by5wYXJlbnQgJiYgdG8uaW5kZXggPiBmcm9tSW5kZXgpID8gdG8uaW5kZXggLSAxIDogdG8uaW5kZXg7XG5cbiAgICB0b0NoaWxkcmVuLnNwbGljZSh0b0luZGV4LCAwLCBvcmlnaW5hbE5vZGUpO1xuXG4gICAgZnJvbVBhcmVudC50cmVlTW9kZWwudXBkYXRlKCk7XG4gICAgaWYgKHRvLnBhcmVudC50cmVlTW9kZWwgIT09IGZyb21QYXJlbnQudHJlZU1vZGVsKSB7XG4gICAgICB0by5wYXJlbnQudHJlZU1vZGVsLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbk1vdmVOb2RlLCBub2RlOiBvcmlnaW5hbE5vZGUsIHRvOiB7IHBhcmVudDogdG8ucGFyZW50LmRhdGEsIGluZGV4OiB0b0luZGV4IH0gfSk7XG4gIH1cblxuICBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kZWROb2RlSWRzOiB0aGlzLmV4cGFuZGVkTm9kZUlkcyxcbiAgICAgIGFjdGl2ZU5vZGVJZHM6IHRoaXMuYWN0aXZlTm9kZUlkcyxcbiAgICAgIGhpZGRlbk5vZGVJZHM6IHRoaXMuaGlkZGVuTm9kZUlkcyxcbiAgICAgIGZvY3VzZWROb2RlSWQ6IHRoaXMuZm9jdXNlZE5vZGVJZFxuICAgIH07XG4gIH1cblxuICBAYWN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKCFzdGF0ZSkgcmV0dXJuO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB7XG4gICAgICBleHBhbmRlZE5vZGVJZHM6IHN0YXRlLmV4cGFuZGVkTm9kZUlkcyxcbiAgICAgIGFjdGl2ZU5vZGVJZHM6IHN0YXRlLmFjdGl2ZU5vZGVJZHMsXG4gICAgICBoaWRkZW5Ob2RlSWRzOiBzdGF0ZS5oaWRkZW5Ob2RlSWRzLFxuICAgICAgZm9jdXNlZE5vZGVJZDogc3RhdGUuZm9jdXNlZE5vZGVJZFxuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlVG9TdGF0ZShmbikge1xuICAgIGF1dG9ydW4oKCkgPT4gZm4odGhpcy5nZXRTdGF0ZSgpKSk7XG4gIH1cblxuICAvLyBwcml2YXRlIG1ldGhvZHNcbiAgcHJpdmF0ZSBfY2FuTW92ZU5vZGUobm9kZSwgZnJvbUluZGV4LCB0bykge1xuICAgIC8vIHNhbWUgbm9kZTpcbiAgICBpZiAobm9kZS5wYXJlbnQgPT09IHRvLnBhcmVudCAmJiBmcm9tSW5kZXggPT09IHRvLmluZGV4KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuICF0by5wYXJlbnQuaXNEZXNjZW5kYW50T2Yobm9kZSk7XG4gIH1cblxuXG4gIHByaXZhdGUgX2ZpbHRlck5vZGUoaWRzLCBub2RlLCBmaWx0ZXJGbiwgYXV0b1Nob3cpIHtcbiAgICAvLyBpZiBub2RlIHBhc3NlcyBmdW5jdGlvbiB0aGVuIGl0J3MgdmlzaWJsZVxuICAgIGxldCBpc1Zpc2libGUgPSBmaWx0ZXJGbihub2RlKTtcblxuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICAvLyBpZiBvbmUgb2Ygbm9kZSdzIGNoaWxkcmVuIHBhc3NlcyBmaWx0ZXIgdGhlbiB0aGlzIG5vZGUgaXMgYWxzbyB2aXNpYmxlXG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJOb2RlKGlkcywgY2hpbGQsIGZpbHRlckZuLCBhdXRvU2hvdykpIHtcbiAgICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBtYXJrIG5vZGUgYXMgaGlkZGVuXG4gICAgaWYgKCFpc1Zpc2libGUpIHtcbiAgICAgIGlkc1tub2RlLmlkXSA9IHRydWU7XG4gICAgfVxuICAgIC8vIGF1dG8gZXhwYW5kIHBhcmVudHMgdG8gbWFrZSBzdXJlIHRoZSBmaWx0ZXJlZCBub2RlcyBhcmUgdmlzaWJsZVxuICAgIGlmIChhdXRvU2hvdyAmJiBpc1Zpc2libGUpIHtcbiAgICAgIG5vZGUuZW5zdXJlVmlzaWJsZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaXNWaXNpYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2FsY3VsYXRlRXhwYW5kZWROb2RlcyhzdGFydE5vZGUgPSBudWxsKSB7XG4gICAgc3RhcnROb2RlID0gc3RhcnROb2RlIHx8IHRoaXMudmlydHVhbFJvb3Q7XG5cbiAgICBpZiAoc3RhcnROb2RlLmRhdGFbdGhpcy5vcHRpb25zLmlzRXhwYW5kZWRGaWVsZF0pIHtcbiAgICAgIHRoaXMuZXhwYW5kZWROb2RlSWRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5leHBhbmRlZE5vZGVJZHMsIHtbc3RhcnROb2RlLmlkXTogdHJ1ZX0pO1xuICAgIH1cbiAgICBpZiAoc3RhcnROb2RlLmNoaWxkcmVuKSB7XG4gICAgICBzdGFydE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHRoaXMuX2NhbGN1bGF0ZUV4cGFuZGVkTm9kZXMoY2hpbGQpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRBY3RpdmVOb2RlU2luZ2xlKG5vZGUsIHZhbHVlKSB7XG4gICAgLy8gRGVhY3RpdmF0ZSBhbGwgb3RoZXIgbm9kZXM6XG4gICAgdGhpcy5hY3RpdmVOb2Rlc1xuICAgICAgLmZpbHRlcigoYWN0aXZlTm9kZSkgPT4gYWN0aXZlTm9kZSAhPT0gbm9kZSlcbiAgICAgIC5mb3JFYWNoKChhY3RpdmVOb2RlKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KHsgZXZlbnROYW1lOiBUUkVFX0VWRU5UUy5vbkRlYWN0aXZhdGUsIG5vZGU6IGFjdGl2ZU5vZGUgfSk7XG4gICAgICB9KTtcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmVOb2RlSWRzID0ge1tub2RlLmlkXTogdHJ1ZX07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVOb2RlSWRzID0ge307XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc2V0QWN0aXZlTm9kZU11bHRpKG5vZGUsIHZhbHVlKSB7XG4gICAgdGhpcy5hY3RpdmVOb2RlSWRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hY3RpdmVOb2RlSWRzLCB7W25vZGUuaWRdOiB2YWx1ZX0pO1xuICB9XG5cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../angular-tree-component/dist/polyfills.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_closest__ = __webpack_require__("../../../../angular-tree-component/dist/vendor/closest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_closest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_closest__);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9wb2x5ZmlsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxrQkFBa0IsQ0FBQyIsImZpbGUiOiJwb2x5ZmlsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3ZlbmRvci9jbG9zZXN0JztcbiJdfQ==

/***/ }),

/***/ "../../../../angular-tree-component/dist/vendor/closest.js":
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest
if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype['mozMatchesSelector'] ||
        Element.prototype.webkitMatchesSelector ||
        function matches(selector) {
            var element = this;
            var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
            var index = 0;
            while (elements[index] && elements[index] !== element) {
                ++index;
            }
            return Boolean(elements[index]);
        };
}
if (typeof Element.prototype['closest'] !== 'function') {
    Element.prototype['closest'] = function closest(selector) {
        var element = this;
        while (element && element.nodeType === 1) {
            if (element.matches(selector)) {
                return element;
            }
            element = element.parentNode;
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi92ZW5kb3IvY2xvc2VzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFFL0QsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCO1FBQzdELE9BQU8sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDdkMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUI7UUFDdkMsaUJBQWlCLFFBQVE7WUFDekIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEYsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCxFQUFFLEtBQUssQ0FBQztZQUNWLENBQUM7WUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztJQUN2RCxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLGlCQUFpQixRQUFRO1FBQ3RELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUVuQixPQUFPLE9BQU8sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMvQixDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoiY2xvc2VzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlbGVtZW50LWNsb3Nlc3QgfCBDQzAtMS4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcblxuaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlWydtb3pNYXRjaGVzU2VsZWN0b3InXSB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIGZ1bmN0aW9uIG1hdGNoZXMoc2VsZWN0b3IpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXM7XG4gICAgbGV0IGVsZW1lbnRzID0gKGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudC5vd25lckRvY3VtZW50KS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgd2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcbiAgICAgICsraW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudHNbaW5kZXhdKTtcbiAgfTtcbn1cblxuaWYgKHR5cGVvZiBFbGVtZW50LnByb3RvdHlwZVsnY2xvc2VzdCddICE9PSAnZnVuY3Rpb24nKSB7XG4gIEVsZW1lbnQucHJvdG90eXBlWydjbG9zZXN0J10gPSBmdW5jdGlvbiBjbG9zZXN0KHNlbGVjdG9yKSB7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzO1xuXG4gICAgd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG59XG4iXX0=

/***/ }),

/***/ "../../../../mobx-angular/dist/directives/mobx-autorun-sync.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobx_autorun_directive__ = __webpack_require__("../../../../mobx-angular/dist/directives/mobx-autorun.directive.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobxAutorunSyncDirective; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobxAutorunSyncDirective = (function (_super) {
    __extends(MobxAutorunSyncDirective, _super);
    function MobxAutorunSyncDirective(templateRef, viewContainer, renderer) {
        var _this = _super.call(this, templateRef, viewContainer, renderer) || this;
        _this.templateRef = templateRef;
        _this.viewContainer = viewContainer;
        _this.renderer = renderer;
        return _this;
    }
    MobxAutorunSyncDirective.prototype.autoDetect = function (view) {
        console.warn('mobxAutorunSync is deprected, please use mobxAutorun instead - it\'s doing exactly the same thing');
        this.dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["autorun"])(function () {
            view['detectChanges']();
        });
    };
    return MobxAutorunSyncDirective;
}(__WEBPACK_IMPORTED_MODULE_2__mobx_autorun_directive__["a" /* MobxAutorunDirective */]));
MobxAutorunSyncDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mobxAutorunSync]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MobxAutorunSyncDirective);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hdXRvcnVuLXN5bmMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2RpcmVjdGl2ZXMvbW9ieC1hdXRvcnVuLXN5bmMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFHOUQsSUFBYSx3QkFBd0I7SUFBUyw0Q0FBb0I7SUFDaEUsa0NBQ1ksV0FBNkIsRUFDN0IsYUFBK0IsRUFDL0IsUUFBa0I7UUFIOUIsWUFHaUMsa0JBQU0sV0FBVyxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsU0FBRztRQUZuRSxpQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0IsbUJBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGNBQVEsR0FBUixRQUFRLENBQVU7O0lBQWdELENBQUM7SUFFL0UsNkNBQVUsR0FBVixVQUFXLElBQUk7UUFDYixPQUFPLENBQUMsSUFBSSxDQUFDLG1HQUFtRyxDQUFDLENBQUM7UUFFbEgsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsK0JBQUM7QUFBRCxDQUFDLEFBYkQsQ0FBOEMsb0JBQW9CLEdBYWpFO0FBYlksd0JBQXdCO0lBRHBDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxDQUFDO3FDQUdsQixXQUFXO1FBQ1QsZ0JBQWdCO1FBQ3JCLFFBQVE7R0FKbkIsd0JBQXdCLENBYXBDO1NBYlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgUmVuZGVyZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7TW9ieEF1dG9ydW5EaXJlY3RpdmV9IGZyb20gJy4vbW9ieC1hdXRvcnVuLmRpcmVjdGl2ZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1ttb2J4QXV0b3J1blN5bmNdJyB9KVxuZXhwb3J0IGNsYXNzIE1vYnhBdXRvcnVuU3luY0RpcmVjdGl2ZSBleHRlbmRzIE1vYnhBdXRvcnVuRGlyZWN0aXZlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIpIHtzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgcmVuZGVyZXIpOyB9XG5cbiAgYXV0b0RldGVjdCh2aWV3KSB7XG4gICAgY29uc29sZS53YXJuKCdtb2J4QXV0b3J1blN5bmMgaXMgZGVwcmVjdGVkLCBwbGVhc2UgdXNlIG1vYnhBdXRvcnVuIGluc3RlYWQgLSBpdFxcJ3MgZG9pbmcgZXhhY3RseSB0aGUgc2FtZSB0aGluZycpO1xuXG4gICAgdGhpcy5kaXNwb3NlID0gYXV0b3J1bigoKSA9PiB7XG4gICAgICB2aWV3WydkZXRlY3RDaGFuZ2VzJ10oKTtcbiAgICB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../mobx-angular/dist/directives/mobx-autorun.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_mobx_angular_debug__ = __webpack_require__("../../../../mobx-angular/dist/utils/mobx-angular-debug.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobxAutorunDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobxAutorunDirective = (function () {
    function MobxAutorunDirective(templateRef, viewContainer, renderer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.renderer = renderer;
        this.templateBindings = {};
    }
    MobxAutorunDirective.prototype.ngOnInit = function () {
        this.view = this.viewContainer.createEmbeddedView(this.templateRef);
        if (this.dispose)
            this.dispose();
        this.autoDetect(this.view);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_mobx_angular_debug__["a" /* mobxAngularDebug */])(this.view, this.renderer, this.dispose);
    };
    MobxAutorunDirective.prototype.autoDetect = function (view) {
        var autorunName = view._view.component
            ? view._view.component.constructor.name + ".detectChanges()" // angular 4+
            : view._view.parentView.context.constructor.name + ".detectChanges()"; // angular 2
        this.dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["autorun"])(autorunName, function () { return view['detectChanges'](); });
    };
    MobxAutorunDirective.prototype.ngOnDestroy = function () {
        if (this.dispose)
            this.dispose();
    };
    return MobxAutorunDirective;
}());
MobxAutorunDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mobxAutorun]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MobxAutorunDirective);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hdXRvcnVuLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaXJlY3RpdmVzL21vYngtYXV0b3J1bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQWdCLFFBQVEsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUcvRCxJQUFhLG9CQUFvQjtJQUsvQiw4QkFDWSxXQUE2QixFQUM3QixhQUErQixFQUMvQixRQUFrQjtRQUZsQixnQkFBVyxHQUFYLFdBQVcsQ0FBa0I7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQcEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBUTlCLENBQUM7SUFFSCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQ2IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2NBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLHFCQUFrQixDQUFDLGFBQWE7Y0FDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLHFCQUFrQixDQUFDLENBQUMsWUFBWTtRQUVyRixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FDcEIsV0FBVyxFQUNYLGNBQU0sT0FBQSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBdkIsQ0FBdUIsQ0FDOUIsQ0FBQztJQUNKLENBQUM7SUFFRCwwQ0FBVyxHQUFYO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBbENELElBa0NDO0FBbENZLG9CQUFvQjtJQURoQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLENBQUM7cUNBT2QsV0FBVztRQUNULGdCQUFnQjtRQUNyQixRQUFRO0dBUm5CLG9CQUFvQixDQWtDaEM7U0FsQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlciwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGF1dG9ydW4gfSBmcm9tICdtb2J4JztcbmltcG9ydCB7IG1vYnhBbmd1bGFyRGVidWcgfSBmcm9tICcuLi91dGlscy9tb2J4LWFuZ3VsYXItZGVidWcnO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbW9ieEF1dG9ydW5dJyB9KVxuZXhwb3J0IGNsYXNzIE1vYnhBdXRvcnVuRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgdGVtcGxhdGVCaW5kaW5ncyA9IHt9O1xuICBwcm90ZWN0ZWQgZGlzcG9zZTogYW55O1xuICBwcm90ZWN0ZWQgdmlldzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PixcbiAgICBwcm90ZWN0ZWQgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmlldyA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZVJlZik7XG5cbiAgICBpZiAodGhpcy5kaXNwb3NlKSB0aGlzLmRpc3Bvc2UoKTtcblxuICAgIHRoaXMuYXV0b0RldGVjdCh0aGlzLnZpZXcpO1xuICAgIG1vYnhBbmd1bGFyRGVidWcodGhpcy52aWV3LCB0aGlzLnJlbmRlcmVyLCB0aGlzLmRpc3Bvc2UpO1xuICB9XG5cbiAgYXV0b0RldGVjdCh2aWV3KSB7XG4gICAgY29uc3QgYXV0b3J1bk5hbWUgPSB2aWV3Ll92aWV3LmNvbXBvbmVudFxuICAgICAgPyBgJHt2aWV3Ll92aWV3LmNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lfS5kZXRlY3RDaGFuZ2VzKClgIC8vIGFuZ3VsYXIgNCtcbiAgICAgIDogYCR7dmlldy5fdmlldy5wYXJlbnRWaWV3LmNvbnRleHQuY29uc3RydWN0b3IubmFtZX0uZGV0ZWN0Q2hhbmdlcygpYDsgLy8gYW5ndWxhciAyXG5cbiAgICB0aGlzLmRpc3Bvc2UgPSBhdXRvcnVuKFxuICAgICAgYXV0b3J1bk5hbWUsXG4gICAgICAoKSA9PiB2aWV3WydkZXRlY3RDaGFuZ2VzJ10oKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5kaXNwb3NlKSB0aGlzLmRpc3Bvc2UoKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ }),

/***/ "../../../../mobx-angular/dist/directives/mobx-reaction.directive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobx_autorun_directive__ = __webpack_require__("../../../../mobx-angular/dist/directives/mobx-autorun.directive.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobxReactionDirective; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MobxReactionDirective = (function (_super) {
    __extends(MobxReactionDirective, _super);
    function MobxReactionDirective(templateRef, viewContainer, renderer) {
        var _this = _super.call(this, templateRef, viewContainer, renderer) || this;
        _this.templateRef = templateRef;
        _this.viewContainer = viewContainer;
        _this.renderer = renderer;
        return _this;
    }
    MobxReactionDirective.prototype.autoDetect = function (view) {
        this.dispose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_mobx__["reaction"])(this.mobxReaction, function () {
            view['detectChanges']();
        }, { fireImmediately: true });
    };
    return MobxReactionDirective;
}(__WEBPACK_IMPORTED_MODULE_2__mobx_autorun_directive__["a" /* MobxAutorunDirective */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], MobxReactionDirective.prototype, "mobxReaction", void 0);
MobxReactionDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mobxReaction]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], MobxReactionDirective);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1yZWFjdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZGlyZWN0aXZlcy9tb2J4LXJlYWN0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUc5RCxJQUFhLHFCQUFxQjtJQUFTLHlDQUFvQjtJQUc3RCwrQkFDWSxXQUE2QixFQUM3QixhQUErQixFQUMvQixRQUFrQjtRQUg5QixZQUdpQyxrQkFBTSxXQUFXLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQyxTQUFHO1FBRm5FLGlCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUM3QixtQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTs7SUFBZ0QsQ0FBQztJQUUvRSwwQ0FBVSxHQUFWLFVBQVcsSUFBSTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNILDRCQUFDO0FBQUQsQ0FBQyxBQWJELENBQTJDLG9CQUFvQixHQWE5RDtBQVpVO0lBQVIsS0FBSyxFQUFFOzsyREFBYztBQURYLHFCQUFxQjtJQURqQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztxQ0FLZixXQUFXO1FBQ1QsZ0JBQWdCO1FBQ3JCLFFBQVE7R0FObkIscUJBQXFCLENBYWpDO1NBYlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmLCBUZW1wbGF0ZVJlZiwgSW5wdXQsIFJlbmRlcmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByZWFjdGlvbiB9IGZyb20gJ21vYngnO1xuaW1wb3J0IHtNb2J4QXV0b3J1bkRpcmVjdGl2ZX0gZnJvbSAnLi9tb2J4LWF1dG9ydW4uZGlyZWN0aXZlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW21vYnhSZWFjdGlvbl0nIH0pXG5leHBvcnQgY2xhc3MgTW9ieFJlYWN0aW9uRGlyZWN0aXZlIGV4dGVuZHMgTW9ieEF1dG9ydW5EaXJlY3RpdmUge1xuICBASW5wdXQoKSBtb2J4UmVhY3Rpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+LFxuICAgIHByb3RlY3RlZCB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIpIHtzdXBlcih0ZW1wbGF0ZVJlZiwgdmlld0NvbnRhaW5lciwgcmVuZGVyZXIpOyB9XG5cbiAgYXV0b0RldGVjdCh2aWV3KSB7XG4gICAgdGhpcy5kaXNwb3NlID0gcmVhY3Rpb24odGhpcy5tb2J4UmVhY3Rpb24sICgpID0+IHtcbiAgICAgIHZpZXdbJ2RldGVjdENoYW5nZXMnXSgpO1xuICAgIH0sIHsgZmlyZUltbWVkaWF0ZWx5OiB0cnVlIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ }),

/***/ "../../../../mobx-angular/dist/mobx-angular.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_mobx_autorun_directive__ = __webpack_require__("../../../../mobx-angular/dist/directives/mobx-autorun.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_mobx_autorun_sync_directive__ = __webpack_require__("../../../../mobx-angular/dist/directives/mobx-autorun-sync.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_mobx_reaction_directive__ = __webpack_require__("../../../../mobx-angular/dist/directives/mobx-reaction.directive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mobx__);
/* unused harmony reexport MobxAutorunDirective */
/* unused harmony reexport MobxAutorunSyncDirective */
/* unused harmony reexport MobxReactionDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobxAngularModule; });
/* harmony export (immutable) */ __webpack_exports__["d"] = action;
/* harmony export (immutable) */ __webpack_exports__["c"] = computed;
/* harmony export (immutable) */ __webpack_exports__["b"] = observable;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DIRECTIVES = [__WEBPACK_IMPORTED_MODULE_1__directives_mobx_autorun_directive__["a" /* MobxAutorunDirective */], __WEBPACK_IMPORTED_MODULE_2__directives_mobx_autorun_sync_directive__["a" /* MobxAutorunSyncDirective */], __WEBPACK_IMPORTED_MODULE_3__directives_mobx_reaction_directive__["a" /* MobxReactionDirective */]];
var MobxAngularModule = (function () {
    function MobxAngularModule() {
    }
    return MobxAngularModule;
}());
MobxAngularModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: DIRECTIVES.slice(),
        exports: DIRECTIVES.slice(),
        imports: [],
        providers: []
    })
], MobxAngularModule);

function action() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_4_mobx__["action"].apply(void 0, args);
}
function computed() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_4_mobx__["computed"].apply(void 0, args);
}
function observable() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return __WEBPACK_IMPORTED_MODULE_4_mobx__["observable"].apply(void 0, args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hbmd1bGFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL21vYngtYW5ndWxhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxNQUFNLElBQUksVUFBVSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxRQUFRLElBQUksWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBQyxVQUFVLElBQUksY0FBYyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRWxELE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEVBQ3hCLHFCQUFxQixFQUN0QixDQUFBO0FBRUQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBVzNGLElBQWEsaUJBQWlCO0lBQTlCO0lBQ0EsQ0FBQztJQUFELHdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxpQkFBaUI7SUFWN0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUNQLFVBQVUsUUFDZDtRQUNELE9BQU8sRUFDRixVQUFVLFFBQ2Q7UUFDRCxPQUFPLEVBQUUsRUFBRTtRQUNYLFNBQVMsRUFBRSxFQUFFO0tBQ2QsQ0FBQztHQUNXLGlCQUFpQixDQUM3QjtTQURZLGlCQUFpQjtBQUc5QixNQUFNO0lBQWlCLGNBQU87U0FBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO1FBQVAseUJBQU87O0lBQzVCLE1BQU0sQ0FBRSxVQUFrQixlQUFJLElBQUksRUFBRTtBQUN0QyxDQUFDO0FBRUQsTUFBTTtJQUFtQixjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLHlCQUFPOztJQUM5QixNQUFNLENBQUUsWUFBb0IsZUFBSSxJQUFJLEVBQUU7QUFDeEMsQ0FBQztBQUVELE1BQU07SUFBcUIsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCx5QkFBTzs7SUFDaEMsTUFBTSxDQUFFLGNBQXNCLGVBQUksSUFBSSxFQUFFO0FBQzFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNb2J4QXV0b3J1bkRpcmVjdGl2ZX0gZnJvbSAnLi9kaXJlY3RpdmVzL21vYngtYXV0b3J1bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb2J4QXV0b3J1blN5bmNEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9tb2J4LWF1dG9ydW4tc3luYy5kaXJlY3RpdmUnO1xuaW1wb3J0IHtNb2J4UmVhY3Rpb25EaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9tb2J4LXJlYWN0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQge2FjdGlvbiBhcyBtb2J4QWN0aW9ufSBmcm9tICdtb2J4JztcbmltcG9ydCB7Y29tcHV0ZWQgYXMgbW9ieENvbXB1dGVkfSBmcm9tICdtb2J4JztcbmltcG9ydCB7b2JzZXJ2YWJsZSBhcyBtb2J4T2JzZXJ2YWJsZX0gZnJvbSAnbW9ieCc7XG5cbmV4cG9ydCB7XG4gIE1vYnhBdXRvcnVuRGlyZWN0aXZlLFxuICBNb2J4QXV0b3J1blN5bmNEaXJlY3RpdmUsXG4gIE1vYnhSZWFjdGlvbkRpcmVjdGl2ZVxufVxuXG5jb25zdCBESVJFQ1RJVkVTID0gW01vYnhBdXRvcnVuRGlyZWN0aXZlLCBNb2J4QXV0b3J1blN5bmNEaXJlY3RpdmUsIE1vYnhSZWFjdGlvbkRpcmVjdGl2ZV07XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5ESVJFQ1RJVkVTXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5ESVJFQ1RJVkVTXG4gIF0sXG4gIGltcG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE1vYnhBbmd1bGFyTW9kdWxlIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFjdGlvbiguLi5hcmdzKSB7XG4gIHJldHVybiAobW9ieEFjdGlvbiBhcyBhbnkpKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQoLi4uYXJncykge1xuICByZXR1cm4gKG1vYnhDb21wdXRlZCBhcyBhbnkpKC4uLmFyZ3MpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSguLi5hcmdzKSB7XG4gIHJldHVybiAobW9ieE9ic2VydmFibGUgYXMgYW55KSguLi5hcmdzKTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../mobx-angular/dist/utils/mobx-angular-debug.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__("../../../../mobx/lib/mobx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mobxAngularDebug; });
/* tslint:disable:max-line-length */
/* tslint:disable:no-console */

// function for turning debug on / off
var mobxAngularDebug = (function () {
    if (typeof localStorage === 'undefined' || typeof console === 'undefined') {
        return;
    }
    window['mobxAngularDebug'] = function (value) {
        if (value)
            localStorage['mobx-angular-debug'] = true;
        else
            delete localStorage['mobx-angular-debug'];
    };
    function isDebugOn() {
        return localStorage['mobx-angular-debug'];
    }
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["spy"])(function (change) { return isDebugOn() && consoleLogChange(change, function () { return true; }); });
    // Debugging element dependency tree
    function mobxAngularDebug(view, renderer, observer) {
        if (!isDebugOn())
            return;
        var element = view.rootNodes[0];
        var debugElement = document.createElement('span');
        element.prepend(debugElement); // No prepend in Angular Renderer
        renderer.setElementStyle(debugElement, 'position', 'absolute');
        renderer.setElementStyle(debugElement, 'border', '1px dotted red');
        renderer.setElementStyle(debugElement, 'transform', "translateY(-25px)");
        renderer.setElementStyle(debugElement, 'cursor', 'pointer');
        renderer.setElementStyle(debugElement, 'z-index', '1000000');
        renderer.setElementStyle(debugElement, 'padding', '5px 10px');
        renderer.setElementStyle(debugElement, 'font-size', '14px');
        renderer.setElementStyle(debugElement, 'line-height', '14px');
        renderer.setElementStyle(debugElement, 'display', 'none');
        renderer.createText(debugElement, 'mobx deps');
        renderer.listen(element, 'mouseenter', function () {
            renderer.setElementStyle(debugElement, 'display', 'inline');
        });
        renderer.listen(element, 'mouseleave', function () {
            renderer.setElementStyle(debugElement, 'display', 'none');
        });
        renderer.listen(debugElement, 'click', function () {
            console.log(__WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].getDependencyTree(observer));
        });
    }
    /////////////////////////////////////////////////////////
    // console logging (copied from mobx-react)
    var advicedToUseChrome = false;
    var currentDepth = 0;
    var isInsideSkippedGroup = false;
    function consoleLogChange(change, filter) {
        if (advicedToUseChrome === false && typeof navigator !== 'undefined' && navigator.userAgent.indexOf('Chrome') === -1) {
            console.warn('The output of the MobX logger is optimized for Chrome');
            advicedToUseChrome = true;
        }
        var isGroupStart = change.spyReportStart === true;
        var isGroupEnd = change.spyReportEnd === true;
        var show;
        if (currentDepth === 0) {
            show = filter(change);
            if (isGroupStart && !show) {
                isInsideSkippedGroup = true;
            }
        }
        else if (isGroupEnd && isInsideSkippedGroup && currentDepth === 1) {
            show = false;
            isInsideSkippedGroup = false;
        }
        else {
            show = isInsideSkippedGroup !== true;
        }
        if (show && isGroupEnd) {
            groupEnd(change.time);
        }
        else if (show) {
            var logNext = isGroupStart ? group : log;
            switch (change.type) {
                case 'action':
                    // name, target, arguments, fn
                    logNext("%caction '%s' %s", 'color:dodgerblue', change.name, autoWrap('(', getNameForThis(change.target)));
                    log(change.arguments);
                    trace();
                    break;
                case 'transaction':
                    // name, target
                    logNext("%ctransaction '%s' %s", 'color:gray', change.name, autoWrap('(', getNameForThis(change.target)));
                    break;
                case 'scheduled-reaction':
                    // object
                    logNext("%cscheduled async reaction '%s'", 'color:#10a210', observableName(change.object));
                    break;
                case 'reaction':
                    // object, fn
                    logNext("%creaction '%s'", 'color:#10a210', observableName(change.object));
                    // dir({
                    //     fn: change.fn
                    // });
                    trace();
                    break;
                case 'compute':
                    // object, target, fn
                    group("%ccomputed '%s' %s", 'color:#10a210', observableName(change.object), autoWrap('(', getNameForThis(change.target)));
                    // dir({
                    //    fn: change.fn,
                    //    target: change.target
                    // });
                    groupEnd();
                    break;
                case 'error':
                    // message
                    logNext('%cerror: %s', 'color:tomato', change.message);
                    trace();
                    closeGroupsOnError();
                    break;
                case 'update':
                    // (array) object, index, newValue, oldValue
                    // (map, obbject) object, name, newValue, oldValue
                    // (value) object, newValue, oldValue
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["isObservableArray"])(change.object)) {
                        logNext('updated \'%s[%s]\': %s (was: %s)', observableName(change.object), change.index, formatValue(change.newValue), formatValue(change.oldValue));
                    }
                    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_mobx__["isObservableObject"])(change.object)) {
                        logNext('updated \'%s.%s\': %s (was: %s)', observableName(change.object), change.name, formatValue(change.newValue), formatValue(change.oldValue));
                    }
                    else {
                        logNext('updated \'%s\': %s (was: %s)', observableName(change.object), change.name, formatValue(change.newValue), formatValue(change.oldValue));
                    }
                    dir({
                        newValue: change.newValue,
                        oldValue: change.oldValue
                    });
                    trace();
                    break;
                case 'splice':
                    // (array) object, index, added, removed, addedCount, removedCount
                    logNext('spliced \'%s\': index %d, added %d, removed %d', observableName(change.object), change.index, change.addedCount, change.removedCount);
                    dir({
                        added: change.added,
                        removed: change.removed
                    });
                    trace();
                    break;
                case 'add':
                    // (map, object) object, name, newValue
                    logNext('set \'%s.%s\': %s', observableName(change.object), change.name, formatValue(change.newValue));
                    dir({
                        newValue: change.newValue
                    });
                    trace();
                    break;
                case 'delete':
                    // (map) object, name, oldValue
                    logNext('removed \'%s.%s\' (was %s)', observableName(change.object), change.name, formatValue(change.oldValue));
                    dir({
                        oldValue: change.oldValue
                    });
                    trace();
                    break;
                case 'create':
                    // (value) object, newValue
                    logNext('set \'%s\': %s', observableName(change.object), formatValue(change.newValue));
                    dir({
                        newValue: change.newValue
                    });
                    trace();
                    break;
                default:
                    // generic fallback for future events
                    logNext(change.type);
                    dir(change);
                    break;
            }
        }
        if (isGroupStart)
            currentDepth++;
        if (isGroupEnd)
            currentDepth--;
    }
    var consoleSupportsGroups = typeof console.groupCollapsed === 'function';
    var currentlyLoggedDepth = 0;
    function group() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // TODO: firefox does not support formatting in groupStart methods..
        consoleSupportsGroups ?
            console.groupCollapsed.apply(console, args) :
            console.log.apply(console, args);
        currentlyLoggedDepth++;
    }
    function groupEnd(time) {
        currentlyLoggedDepth--;
        if (typeof time === 'number') {
            log('%ctotal time: %sms', 'color:gray', time);
        }
        if (consoleSupportsGroups)
            console.groupEnd();
    }
    function log() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    }
    function dir() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.dir.apply(console, args);
    }
    function trace() {
        // TODO: needs wrapping in firefox?
        if (console.trace) {
            console.trace('stack'); // TODO: use stacktrace.js or similar and strip off unrelevant stuff?
        }
    }
    function closeGroupsOnError() {
        for (var i = 0, m = currentlyLoggedDepth; i < m; i++)
            groupEnd();
    }
    var closeToken = {
        '"': '"',
        '\'': '\'',
        '(': ')',
        '[': ']',
        '<': ']',
        '#': ''
    };
    function autoWrap(token, value) {
        if (!value)
            return '';
        return (token || '') + value + (closeToken[token] || '');
    }
    function observableName(object) {
        return __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].getDebugName(object);
    }
    function formatValue(value) {
        if (isPrimitive(value)) {
            if (typeof value === 'string' && value.length > 100)
                return value.substr(0, 97) + '...';
            return value;
        }
        else
            return autoWrap('(', getNameForThis(value));
    }
    function getNameForThis(who) {
        if (who === null || who === undefined) {
            return '';
        }
        else if (who && typeof who === 'object') {
            if (who && who.$mobx) {
                return who.$mobx.name;
            }
            else if (who.constructor) {
                return who.constructor.name || 'object';
            }
        }
        return "" + typeof who;
    }
    function isPrimitive(value) {
        return value === null || value === undefined || typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean';
    }
    return mobxAngularDebug;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ieC1hbmd1bGFyLWRlYnVnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3V0aWxzL21vYngtYW5ndWxhci1kZWJ1Zy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFDcEMsK0JBQStCO0FBQy9CLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRTFFLHNDQUFzQztBQUN0QyxNQUFNLENBQUMsSUFBTSxnQkFBZ0IsR0FBRyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFdBQVcsSUFBSSxPQUFPLE9BQU8sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQztJQUNULENBQUM7SUFDRCxNQUFNLENBQUMsa0JBQWtCLENBQUMsR0FBRyxVQUFDLEtBQUs7UUFDakMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELElBQUk7WUFBQyxPQUFPLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2pELENBQUMsQ0FBQztJQUVGO1FBQ0UsTUFBTSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxHQUFHLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxTQUFTLEVBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsRUFBbkQsQ0FBbUQsQ0FBQyxDQUFDO0lBRXJFLG9DQUFvQztJQUNwQywwQkFBMEIsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQ2hELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFBQyxNQUFNLENBQUM7UUFFekIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FB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O0FBQzFCLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggKi9cbi8qIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGUgKi9cbmltcG9ydCB7IGV4dHJhcywgc3B5LCBpc09ic2VydmFibGVBcnJheSwgaXNPYnNlcnZhYmxlT2JqZWN0IH0gZnJvbSAnbW9ieCc7XG5cbi8vIGZ1bmN0aW9uIGZvciB0dXJuaW5nIGRlYnVnIG9uIC8gb2ZmXG5leHBvcnQgY29uc3QgbW9ieEFuZ3VsYXJEZWJ1ZyA9ICgoKSA9PiB7XG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgY29uc29sZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgd2luZG93Wydtb2J4QW5ndWxhckRlYnVnJ10gPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUpIGxvY2FsU3RvcmFnZVsnbW9ieC1hbmd1bGFyLWRlYnVnJ10gPSB0cnVlO1xuICAgIGVsc2UgZGVsZXRlIGxvY2FsU3RvcmFnZVsnbW9ieC1hbmd1bGFyLWRlYnVnJ107XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNEZWJ1Z09uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2VbJ21vYngtYW5ndWxhci1kZWJ1ZyddO1xuICB9XG5cbiAgc3B5KChjaGFuZ2UpID0+IGlzRGVidWdPbigpICYmIGNvbnNvbGVMb2dDaGFuZ2UoY2hhbmdlLCAoKSA9PiB0cnVlKSk7XG5cbiAgLy8gRGVidWdnaW5nIGVsZW1lbnQgZGVwZW5kZW5jeSB0cmVlXG4gIGZ1bmN0aW9uIG1vYnhBbmd1bGFyRGVidWcodmlldywgcmVuZGVyZXIsIG9ic2VydmVyKSB7XG4gICAgaWYgKCFpc0RlYnVnT24oKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IHZpZXcucm9vdE5vZGVzWzBdO1xuXG4gICAgY29uc3QgZGVidWdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVsZW1lbnQucHJlcGVuZChkZWJ1Z0VsZW1lbnQpOyAvLyBObyBwcmVwZW5kIGluIEFuZ3VsYXIgUmVuZGVyZXJcbiAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZGVidWdFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZGVidWdFbGVtZW50LCAnYm9yZGVyJywgJzFweCBkb3R0ZWQgcmVkJyk7XG4gICAgcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGRlYnVnRWxlbWVudCwgJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGVZKC0yNXB4KWApO1xuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkZWJ1Z0VsZW1lbnQsICdjdXJzb3InLCAncG9pbnRlcicpO1xuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkZWJ1Z0VsZW1lbnQsICd6LWluZGV4JywgJzEwMDAwMDAnKTtcbiAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZGVidWdFbGVtZW50LCAncGFkZGluZycsICc1cHggMTBweCcpO1xuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkZWJ1Z0VsZW1lbnQsICdmb250LXNpemUnLCAnMTRweCcpO1xuICAgIHJlbmRlcmVyLnNldEVsZW1lbnRTdHlsZShkZWJ1Z0VsZW1lbnQsICdsaW5lLWhlaWdodCcsICcxNHB4Jyk7XG4gICAgcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKGRlYnVnRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIHJlbmRlcmVyLmNyZWF0ZVRleHQoZGVidWdFbGVtZW50LCAnbW9ieCBkZXBzJyk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZWxlbWVudCwgJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZGVidWdFbGVtZW50LCAnZGlzcGxheScsICdpbmxpbmUnKTtcbiAgICB9KTtcbiAgICByZW5kZXJlci5saXN0ZW4oZWxlbWVudCwgJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICByZW5kZXJlci5zZXRFbGVtZW50U3R5bGUoZGVidWdFbGVtZW50LCAnZGlzcGxheScsICdub25lJyk7XG4gICAgfSk7XG5cbiAgICByZW5kZXJlci5saXN0ZW4oZGVidWdFbGVtZW50LCAnY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV4dHJhcy5nZXREZXBlbmRlbmN5VHJlZShvYnNlcnZlcikpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIC8vIGNvbnNvbGUgbG9nZ2luZyAoY29waWVkIGZyb20gbW9ieC1yZWFjdClcbiAgbGV0IGFkdmljZWRUb1VzZUNocm9tZSA9IGZhbHNlO1xuXG4gIGxldCBjdXJyZW50RGVwdGggPSAwO1xuICBsZXQgaXNJbnNpZGVTa2lwcGVkR3JvdXAgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBjb25zb2xlTG9nQ2hhbmdlKGNoYW5nZSwgZmlsdGVyKSB7XG5cbiAgICAgIGlmIChhZHZpY2VkVG9Vc2VDaHJvbWUgPT09IGZhbHNlICYmIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignQ2hyb21lJykgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgb3V0cHV0IG9mIHRoZSBNb2JYIGxvZ2dlciBpcyBvcHRpbWl6ZWQgZm9yIENocm9tZScpO1xuICAgICAgICAgIGFkdmljZWRUb1VzZUNocm9tZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlzR3JvdXBTdGFydCA9IGNoYW5nZS5zcHlSZXBvcnRTdGFydCA9PT0gdHJ1ZTtcbiAgICAgIGNvbnN0IGlzR3JvdXBFbmQgPSBjaGFuZ2Uuc3B5UmVwb3J0RW5kID09PSB0cnVlO1xuXG4gICAgICBsZXQgc2hvdztcbiAgICAgIGlmIChjdXJyZW50RGVwdGggPT09IDApIHtcbiAgICAgICAgICBzaG93ID0gZmlsdGVyKGNoYW5nZSk7XG4gICAgICAgICAgaWYgKGlzR3JvdXBTdGFydCAmJiAhc2hvdykgeyBpc0luc2lkZVNraXBwZWRHcm91cCA9IHRydWU7IH1cbiAgICAgIH0gZWxzZSBpZiAoaXNHcm91cEVuZCAmJiBpc0luc2lkZVNraXBwZWRHcm91cCAmJiBjdXJyZW50RGVwdGggPT09IDEpIHtcbiAgICAgICAgICBzaG93ID0gZmFsc2U7XG4gICAgICAgICAgaXNJbnNpZGVTa2lwcGVkR3JvdXAgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hvdyA9IGlzSW5zaWRlU2tpcHBlZEdyb3VwICE9PSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2hvdyAmJiBpc0dyb3VwRW5kKSB7XG4gICAgICAgICAgZ3JvdXBFbmQoY2hhbmdlLnRpbWUpO1xuICAgICAgfSBlbHNlIGlmIChzaG93KSB7XG4gICAgICAgICAgY29uc3QgbG9nTmV4dDogYW55ID0gaXNHcm91cFN0YXJ0ID8gZ3JvdXAgOiBsb2c7XG4gICAgICAgICAgc3dpdGNoIChjaGFuZ2UudHlwZSkge1xuICAgICAgICAgICAgICBjYXNlICdhY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgLy8gbmFtZSwgdGFyZ2V0LCBhcmd1bWVudHMsIGZuXG4gICAgICAgICAgICAgICAgICBsb2dOZXh0KGAlY2FjdGlvbiAnJXMnICVzYCwgJ2NvbG9yOmRvZGdlcmJsdWUnLCBjaGFuZ2UubmFtZSwgYXV0b1dyYXAoJygnLCBnZXROYW1lRm9yVGhpcyhjaGFuZ2UudGFyZ2V0KSkpO1xuICAgICAgICAgICAgICAgICAgbG9nKGNoYW5nZS5hcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgdHJhY2UoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICd0cmFuc2FjdGlvbic6XG4gICAgICAgICAgICAgICAgICAvLyBuYW1lLCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgIGxvZ05leHQoYCVjdHJhbnNhY3Rpb24gJyVzJyAlc2AsICdjb2xvcjpncmF5JywgY2hhbmdlLm5hbWUsIGF1dG9XcmFwKCcoJywgZ2V0TmFtZUZvclRoaXMoY2hhbmdlLnRhcmdldCkpKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdzY2hlZHVsZWQtcmVhY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0XG4gICAgICAgICAgICAgICAgICBsb2dOZXh0KGAlY3NjaGVkdWxlZCBhc3luYyByZWFjdGlvbiAnJXMnYCwgJ2NvbG9yOiMxMGEyMTAnLCBvYnNlcnZhYmxlTmFtZShjaGFuZ2Uub2JqZWN0KSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAncmVhY3Rpb24nOlxuICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0LCBmblxuICAgICAgICAgICAgICAgICAgbG9nTmV4dChgJWNyZWFjdGlvbiAnJXMnYCwgJ2NvbG9yOiMxMGEyMTAnLCBvYnNlcnZhYmxlTmFtZShjaGFuZ2Uub2JqZWN0KSk7XG4gICAgICAgICAgICAgICAgICAvLyBkaXIoe1xuICAgICAgICAgICAgICAgICAgLy8gICAgIGZuOiBjaGFuZ2UuZm5cbiAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgdHJhY2UoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjb21wdXRlJzpcbiAgICAgICAgICAgICAgICAgIC8vIG9iamVjdCwgdGFyZ2V0LCBmblxuICAgICAgICAgICAgICAgICAgZ3JvdXAoYCVjY29tcHV0ZWQgJyVzJyAlc2AsICdjb2xvcjojMTBhMjEwJywgb2JzZXJ2YWJsZU5hbWUoY2hhbmdlLm9iamVjdCksIGF1dG9XcmFwKCcoJywgZ2V0TmFtZUZvclRoaXMoY2hhbmdlLnRhcmdldCkpKTtcbiAgICAgICAgICAgICAgICAgIC8vIGRpcih7XG4gICAgICAgICAgICAgICAgICAvLyAgICBmbjogY2hhbmdlLmZuLFxuICAgICAgICAgICAgICAgICAgLy8gICAgdGFyZ2V0OiBjaGFuZ2UudGFyZ2V0XG4gICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgIGdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgLy8gbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgbG9nTmV4dCgnJWNlcnJvcjogJXMnLCAnY29sb3I6dG9tYXRvJywgY2hhbmdlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgdHJhY2UoKTtcbiAgICAgICAgICAgICAgICAgIGNsb3NlR3JvdXBzT25FcnJvcigpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgICAvLyAoYXJyYXkpIG9iamVjdCwgaW5kZXgsIG5ld1ZhbHVlLCBvbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgLy8gKG1hcCwgb2JiamVjdCkgb2JqZWN0LCBuYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgIC8vICh2YWx1ZSkgb2JqZWN0LCBuZXdWYWx1ZSwgb2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgIGlmIChpc09ic2VydmFibGVBcnJheShjaGFuZ2Uub2JqZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgIGxvZ05leHQoJ3VwZGF0ZWQgXFwnJXNbJXNdXFwnOiAlcyAod2FzOiAlcyknLCBvYnNlcnZhYmxlTmFtZShjaGFuZ2Uub2JqZWN0KSwgY2hhbmdlLmluZGV4LCBmb3JtYXRWYWx1ZShjaGFuZ2UubmV3VmFsdWUpLCBmb3JtYXRWYWx1ZShjaGFuZ2Uub2xkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNPYnNlcnZhYmxlT2JqZWN0KGNoYW5nZS5vYmplY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9nTmV4dCgndXBkYXRlZCBcXCclcy4lc1xcJzogJXMgKHdhczogJXMpJywgb2JzZXJ2YWJsZU5hbWUoY2hhbmdlLm9iamVjdCksIGNoYW5nZS5uYW1lLCBmb3JtYXRWYWx1ZShjaGFuZ2UubmV3VmFsdWUpLCBmb3JtYXRWYWx1ZShjaGFuZ2Uub2xkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgbG9nTmV4dCgndXBkYXRlZCBcXCclc1xcJzogJXMgKHdhczogJXMpJywgb2JzZXJ2YWJsZU5hbWUoY2hhbmdlLm9iamVjdCksIGNoYW5nZS5uYW1lLCBmb3JtYXRWYWx1ZShjaGFuZ2UubmV3VmFsdWUpLCBmb3JtYXRWYWx1ZShjaGFuZ2Uub2xkVmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGRpcih7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IGNoYW5nZS5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogY2hhbmdlLm9sZFZhbHVlXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRyYWNlKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnc3BsaWNlJzpcbiAgICAgICAgICAgICAgICAgIC8vIChhcnJheSkgb2JqZWN0LCBpbmRleCwgYWRkZWQsIHJlbW92ZWQsIGFkZGVkQ291bnQsIHJlbW92ZWRDb3VudFxuICAgICAgICAgICAgICAgICAgbG9nTmV4dCgnc3BsaWNlZCBcXCclc1xcJzogaW5kZXggJWQsIGFkZGVkICVkLCByZW1vdmVkICVkJywgb2JzZXJ2YWJsZU5hbWUoY2hhbmdlLm9iamVjdCksIGNoYW5nZS5pbmRleCwgY2hhbmdlLmFkZGVkQ291bnQsIGNoYW5nZS5yZW1vdmVkQ291bnQpO1xuICAgICAgICAgICAgICAgICAgZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgICBhZGRlZDogY2hhbmdlLmFkZGVkLFxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWQ6IGNoYW5nZS5yZW1vdmVkXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRyYWNlKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnYWRkJzpcbiAgICAgICAgICAgICAgICAgIC8vIChtYXAsIG9iamVjdCkgb2JqZWN0LCBuYW1lLCBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgICAgbG9nTmV4dCgnc2V0IFxcJyVzLiVzXFwnOiAlcycsIG9ic2VydmFibGVOYW1lKGNoYW5nZS5vYmplY3QpLCBjaGFuZ2UubmFtZSwgZm9ybWF0VmFsdWUoY2hhbmdlLm5ld1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBkaXIoe1xuICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBjaGFuZ2UubmV3VmFsdWVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdHJhY2UoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICAgICAgICAgICAgLy8gKG1hcCkgb2JqZWN0LCBuYW1lLCBvbGRWYWx1ZVxuICAgICAgICAgICAgICAgICAgbG9nTmV4dCgncmVtb3ZlZCBcXCclcy4lc1xcJyAod2FzICVzKScsIG9ic2VydmFibGVOYW1lKGNoYW5nZS5vYmplY3QpLCBjaGFuZ2UubmFtZSwgZm9ybWF0VmFsdWUoY2hhbmdlLm9sZFZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICBkaXIoe1xuICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBjaGFuZ2Uub2xkVmFsdWVcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgdHJhY2UoKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdjcmVhdGUnOlxuICAgICAgICAgICAgICAgICAgLy8gKHZhbHVlKSBvYmplY3QsIG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgICBsb2dOZXh0KCdzZXQgXFwnJXNcXCc6ICVzJywgb2JzZXJ2YWJsZU5hbWUoY2hhbmdlLm9iamVjdCksIGZvcm1hdFZhbHVlKGNoYW5nZS5uZXdWYWx1ZSkpO1xuICAgICAgICAgICAgICAgICAgZGlyKHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogY2hhbmdlLm5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIHRyYWNlKCk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIC8vIGdlbmVyaWMgZmFsbGJhY2sgZm9yIGZ1dHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgIGxvZ05leHQoY2hhbmdlLnR5cGUpO1xuICAgICAgICAgICAgICAgICAgZGlyKGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0dyb3VwU3RhcnQpIGN1cnJlbnREZXB0aCsrO1xuICAgICAgaWYgKGlzR3JvdXBFbmQpIGN1cnJlbnREZXB0aC0tO1xuICB9XG5cbiAgY29uc3QgY29uc29sZVN1cHBvcnRzR3JvdXBzID0gdHlwZW9mIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgPT09ICdmdW5jdGlvbic7XG4gIGxldCBjdXJyZW50bHlMb2dnZWREZXB0aCA9IDA7XG5cbiAgZnVuY3Rpb24gZ3JvdXAoLi4uYXJncykge1xuICAgICAgLy8gVE9ETzogZmlyZWZveCBkb2VzIG5vdCBzdXBwb3J0IGZvcm1hdHRpbmcgaW4gZ3JvdXBTdGFydCBtZXRob2RzLi5cbiAgICAgIGNvbnNvbGVTdXBwb3J0c0dyb3VwcyA/XG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYXBwbHkoY29uc29sZSwgYXJncykgOlxuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICAgIGN1cnJlbnRseUxvZ2dlZERlcHRoKys7XG4gIH1cblxuICBmdW5jdGlvbiBncm91cEVuZCh0aW1lPykge1xuICAgICAgY3VycmVudGx5TG9nZ2VkRGVwdGgtLTtcbiAgICAgIGlmICh0eXBlb2YgdGltZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBsb2coJyVjdG90YWwgdGltZTogJXNtcycsICdjb2xvcjpncmF5JywgdGltZSk7XG4gICAgICB9XG4gICAgICBpZiAoY29uc29sZVN1cHBvcnRzR3JvdXBzKVxuICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG4gICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpciguLi5hcmdzKSB7XG4gICAgICBjb25zb2xlLmRpci5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgICAgLy8gVE9ETzogbmVlZHMgd3JhcHBpbmcgaW4gZmlyZWZveD9cbiAgICBpZiAoY29uc29sZS50cmFjZSkge1xuICAgICAgY29uc29sZS50cmFjZSgnc3RhY2snKTsgLy8gVE9ETzogdXNlIHN0YWNrdHJhY2UuanMgb3Igc2ltaWxhciBhbmQgc3RyaXAgb2ZmIHVucmVsZXZhbnQgc3R1ZmY/XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VHcm91cHNPbkVycm9yKCkge1xuICAgICAgZm9yIChsZXQgaSA9IDAsIG0gPSBjdXJyZW50bHlMb2dnZWREZXB0aDsgaSA8IG07IGkrKylcbiAgICAgICAgICBncm91cEVuZCgpO1xuICB9XG5cbiAgY29uc3QgY2xvc2VUb2tlbiA9IHtcbiAgICAgICdcIicgOiAnXCInLFxuICAgICAgJ1xcJycgOiAnXFwnJyxcbiAgICAgICcoJyA6ICcpJyxcbiAgICAgICdbJyA6ICddJyxcbiAgICAgICc8JyA6ICddJyxcbiAgICAgICcjJyA6ICcnXG4gIH07XG5cbiAgZnVuY3Rpb24gYXV0b1dyYXAodG9rZW4sIHZhbHVlKSB7XG4gICAgICBpZiAoIXZhbHVlKVxuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIHJldHVybiAodG9rZW4gfHwgJycpICsgdmFsdWUgKyAoY2xvc2VUb2tlblt0b2tlbl0gfHwgJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZU5hbWUob2JqZWN0KSB7XG4gICAgICByZXR1cm4gZXh0cmFzLmdldERlYnVnTmFtZShvYmplY3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VmFsdWUodmFsdWUpIHtcbiAgICAgIGlmIChpc1ByaW1pdGl2ZSh2YWx1ZSkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAxMDApXG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5zdWJzdHIoMCwgOTcpICsgJy4uLic7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSBlbHNlXG4gICAgICAgICAgcmV0dXJuIGF1dG9XcmFwKCcoJywgZ2V0TmFtZUZvclRoaXModmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5hbWVGb3JUaGlzKHdobykge1xuICAgICAgaWYgKHdobyA9PT0gbnVsbCB8fCB3aG8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAod2hvICYmIHR5cGVvZiB3aG8gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh3aG8gJiYgd2hvLiRtb2J4KSB7XG4gICAgICAgICAgcmV0dXJuIHdoby4kbW9ieC5uYW1lO1xuICAgICAgICAgIH0gZWxzZSBpZiAod2hvLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICAgIHJldHVybiB3aG8uY29uc3RydWN0b3IubmFtZSB8fCAnb2JqZWN0JztcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHt0eXBlb2Ygd2hvfWA7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ByaW1pdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgfVxuXG4gIHJldHVybiBtb2J4QW5ndWxhckRlYnVnO1xufSkoKTtcblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ }),

/***/ "../../../../mobx/lib/mobx.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */


Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = exports.IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return (interceptable.interceptors && interceptable.interceptors.length > 0);
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", { set: function () { v = true; } });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
StubArray.prototype = [];
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || ("ObservableArray@" + getNextId()));
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return res;
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "update",
            index: index, newValue: newValue, oldValue: oldValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "splice",
            index: index, removed: removed, added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            adm.updateArrayLength(0, initialValues.length);
            adm.values = initialValues.map(function (v) { return enhancer(v, undefined, name + "[..]"); });
            adm.notifyArraySplice(0, adm.values.slice(), EMPTY_ARRAY);
        }
        else {
            adm.values = [];
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return isObservableArray(a) ? a.peek() : a; }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        return this.$mobx.values;
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.$mobx.values[idx];
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        this.$mobx.atom.reportObserved();
        var items = this.$mobx.values, l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
        functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
        since these functions alter the inner structure of the array, the have side effects.
        Because the have side effects, they should not be used in computed function,
        and for that reason the do not call dependencyState.notifyObserved
        */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        this.$mobx.atom.reportObserved();
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        this.$mobx.atom.reportObserved();
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.values.indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
        }
        else {
            newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    ObservableArray.prototype.toString = function () {
        this.$mobx.atom.reportObserved();
        return Array.prototype.toString.apply(this.$mobx.values, arguments);
    };
    ObservableArray.prototype.toLocaleString = function () {
        this.$mobx.atom.reportObserved();
        return Array.prototype.toLocaleString.apply(this.$mobx.values, arguments);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.values[index];
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index, newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
/**
 * Wrap function from prototype
 */
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        this.$mobx.atom.reportObserved();
        return baseFunc.apply(this.$mobx.values, arguments);
    });
});
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue, oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue
            ? newValue
            : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.value;
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    "m001": "It is not allowed to assign new values to @action fields",
    "m002": "`runInAction` expects a function",
    "m003": "`runInAction` expects a function without arguments",
    "m004": "autorun expects a function",
    "m005": "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m006": "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m007": "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    "m008": "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    "m009": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    "m010": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    "m011": "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    "m012": "computed takes one or two arguments if used as function",
    "m013": "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    "m014": "extendObservable expected 2 or more arguments",
    "m015": "extendObservable expects an object as first argument",
    "m016": "extendObservable should not be used on maps, use map.merge instead",
    "m017": "all arguments of extendObservable should be objects",
    "m018": "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    "m019": "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    "m020": "modifiers can only be used for individual object properties",
    "m021": "observable expects zero or one arguments",
    "m022": "@observable can not be used on getters, use @computed instead",
    "m023": "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
    "m024": "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    "m025": "whyRun can only be used on reactions and computed values",
    "m026": "`action` can only be invoked on functions",
    "m028": "It is not allowed to set `useStrict` when a derivation is running",
    "m029": "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    "m030a": "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    "m030b": "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    "m031": "Computed values are not allowed to not cause side effects by changing observables that are already being observed. Tried to modify: ",
    "m032": "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    "m033": "`observe` doesn't support the fire immediately property for observable maps.",
    "m034": "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    "m035": "Cannot make the designated object observable; it is not extensible",
    "m036": "It is not possible to get index atoms from arrays",
    "m037": "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    "m038": "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Construcs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
    /**
     * This function is invoked once, when the property is added to a new instance.
     * When this happens is not strictly determined due to differences in TS and Babel:
     * Typescript: Usually when constructing the new instance
     * Babel, sometimes Typescript: during the first get / set
     * Both: when calling `runLazyInitializers(instance)`
     */
    onInitialize, get, set, enumerable, 
    /**
     * Can this decorator invoked with arguments? e.g. @decorator(args)
     */
    allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
            });
            return {
                enumerable: enumerable, configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs, argLen); };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || ("Autorun@" + getNextId());
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = ("When@" + getNextId());
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || ("AutorunAsync@" + getNextId());
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() { func(r); }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name = opts.name || expression.name || effect.name || ("Reaction@" + getNextId());
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var nextValue;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var v = expression(r);
            changed = valueDidChange(opts.compareStructural, nextValue, v);
            nextValue = v;
        });
        if (firstTime && opts.fireImmediately)
            effect(nextValue, r);
        if (!firstTime && changed === true)
            effect(nextValue, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember result of the computation for duration of a batch, or being observed
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `compareStructural` property indicates whether the return values should be compared structurally.
     * Normally, a computed value will not notify an upstream observer if a newly produced value is strictly equal to the previously produced value.
     * However, enabling compareStructural can be convenient if you always produce an new aggregated object and don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, compareStructural, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.compareStructural = compareStructural;
        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = undefined;
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // just for small optimization, can be droped for simplicity
            // computed called outside of any mobx stuff. batch observing shuold be enough, don't need tracking
            // because it will never be called again inside this batch
            startBatch();
            if (shouldCompute(this))
                this.value = this.computeValue(false);
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var newValue = this.value = this.computeValue(true);
        return isCaughtException(newValue) || valueDidChange(this.compareStructural, newValue, oldValue);
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === exports.IDerivationState.NOT_TRACKING ? getMessage("m032") :
                " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
        * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
        * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
        * for callback details
        */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName]) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, false, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, compareStructural, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, compareStructural, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            setPropertyValue(this, propName, v);
        }
    });
}
function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
        configurable: true,
        enumerable: false,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            return this.$mobx.values[propName].set(v);
        }
    });
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name, newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy ? {
            type: "update",
            object: instance,
            oldValue: observable.value,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
        type: "add",
        object: object, name: name, newValue: newValue
    } : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
    * Returns true if the provided value is reactive.
    * @param value object, function or array
    * @param propertyName if propertyName is specified, checkes whether value.propertyName is reactive.
    */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!(isObservableMap(target)), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param value the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var IObservableFactories = (function () {
    function IObservableFactories() {
    }
    IObservableFactories.prototype.box = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowBox = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    };
    IObservableFactories.prototype.array = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowArray = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.map = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowMap = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.object = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.shallowObject = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.ref = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.shallow = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.deep = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.struct = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    };
    return IObservableFactories;
}());
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(IObservableFactories.prototype).forEach(function (key) { return observable[key] = IObservableFactories.prototype[key]; });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * @deprecated
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * Deprecated to simplify api; transactions offer no real benefit above actions.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    deprecated(getMessage("m023"));
    return runInTransaction.apply(undefined, arguments);
}
function runInTransaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    return executeAction("", action);
}

var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: this._data[key].value,
                name: key
            } : null;
            if (notifySpy)
                spyReportStart(change);
            runInTransaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "update",
                object: this,
                oldValue: observable$$1.value,
                name: name, newValue: newValue
            } : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        runInTransaction(function () {
            var observable$$1 = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            type: "add",
            object: this,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this._data[key].get();
        return undefined;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        runInTransaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        runInTransaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        runInTransaction(function () {
            _this.clear();
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return this.name + "[{ " + this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") + " }]";
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
function valueDidChange(compareStructural, oldValue, newValue) {
    if (typeof oldValue === 'number' && isNaN(oldValue)) {
        return typeof newValue !== 'number' || !isNaN(newValue);
    }
    return compareStructural
        ? !deepEqual(oldValue, newValue)
        : oldValue !== newValue;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function getEnumerableKeys(obj) {
    var res = [];
    for (var key in obj)
        res.push(key);
    return res;
}
/**
 * Naive deepEqual. Doesn't check for prototype, non-enumerable or out-of-range properties on arrays.
 * If you have such a case, you probably should use this function but something fancier :).
 */
function deepEqual(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    if (typeof a !== "object")
        return a === b;
    var aIsArray = isArrayLike(a);
    var aIsMap = isMapLike(a);
    if (aIsArray !== isArrayLike(b)) {
        return false;
    }
    else if (aIsMap !== isMapLike(b)) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length - 1; i >= 0; i--)
            if (!deepEqual(a[i], b[i]))
                return false;
        return true;
    }
    else if (aIsMap) {
        if (a.size !== b.size)
            return false;
        var equals_1 = true;
        a.forEach(function (value, key) {
            equals_1 = equals_1 && deepEqual(b.get(key), value);
        });
        return equals_1;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (isMapLike(a) && isMapLike(b)) {
            if (a.size !== b.size)
                return false;
            // Freaking inefficient.... Create PR if you run into this :) Much appreciated!
            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
        }
        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
            return false;
        for (var prop in a) {
            if (!(prop in b))
                return false;
            if (!deepEqual(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return false;
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isMapLike(x) {
    return isES6Map(x) || isObservableMap(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? ("" + value) : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
function shareGlobalState() {
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didnt add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesnt have holes
        if (filler !== node) {
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, shuold only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === exports.IDerivationState.STALE)
        return;
    observable.lowestObserverState = exports.IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE)
            d.onBecomeStale();
        d.dependenciesState = exports.IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === exports.IDerivationState.STALE)
        return;
    observable.lowestObserverState = exports.IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === exports.IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = exports.IDerivationState.STALE;
        else if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE)
            observable.lowestObserverState = exports.IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== exports.IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = exports.IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === exports.IDerivationState.UP_TO_DATE) {
            d.dependenciesState = exports.IDerivationState.POSSIBLY_STALE;
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}

(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // shallow dependency changed
    // will need to recompute when it's needed
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(exports.IDerivationState || (exports.IDerivationState = {}));
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out wether any dependency of derivation actually changed
 * If dependenciesState is 1 it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over dependencies in the same order they were reported and stoping on first change
 * all recalculations are called only for ComputedValues that will be tracked anyway by derivation.
 * That is because we assume that if first x dependencies of derivation doesn't change
 * than derivation shuold run the same way up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case exports.IDerivationState.UP_TO_DATE: return false;
        case exports.IDerivationState.NOT_TRACKING:
        case exports.IDerivationState.STALE: return true;
        case exports.IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === exports.IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = derivation.observing = derivation.newObserving;
    var lowestNewObservingDerivationState = exports.IDerivationState.UP_TO_DATE;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurence, change to 1 and keep it
    //   1: extra occurence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations might become stale during this derivation computation
    // so say had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== exports.IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = exports.IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === exports.IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = exports.IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = exports.IDerivationState.UP_TO_DATE;
}

var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = exports.IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brough you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                startBatch();
                clearObserving(this); // if disposed while running, clean up later. Maybe not optimal, but rare case
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n");
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations."
                + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(compareStructural) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, compareStructural, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(false);
var computedStructDecorator = createComputedDecorator(true);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = (function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    return new ComputedValue(arg1, opts.context, opts.compareStructural || opts.struct || false, opts.name || arg1.name || "", opts.setter);
});
computed.struct = computedStructDecorator;

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
    * expr can be used to create temporarily views inside views.
    * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
    *
    * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
    * instead it will only rerenders when the current todo is (de)selected.
    *
    * reactiveComponent((props) => {
    *     const todo = props.todo;
    *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
    *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
    * });
    *
    */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

// internal overload
function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, false, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === 'string' || typeof object === 'number')
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    switch (arguments.length) {
        case 0:
            thing = globalState.trackingDerivation;
            if (!thing)
                return log(getMessage("m024"));
            break;
        case 2:
            thing = getAtom(thing, prop);
            break;
    }
    thing = getAtom(thing);
    if (isComputedValue(thing))
        return log(thing.whyRun());
    else if (isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx(exports);
}

exports.extras = extras;
exports['default'] = exports;
exports.Reaction = Reaction;
exports.untracked = untracked;
exports.Atom = Atom;
exports.BaseAtom = BaseAtom;
exports.useStrict = useStrict;
exports.isStrictModeEnabled = isStrictModeEnabled;
exports.spy = spy;
exports.asReference = asReference;
exports.asFlat = asFlat;
exports.asStructure = asStructure;
exports.asMap = asMap;
exports.isModifierDescriptor = isModifierDescriptor;
exports.isObservableObject = isObservableObject;
exports.isBoxedObservable = isObservableValue;
exports.isObservableArray = isObservableArray;
exports.ObservableMap = ObservableMap;
exports.isObservableMap = isObservableMap;
exports.map = map;
exports.transaction = transaction;
exports.observable = observable;
exports.IObservableFactories = IObservableFactories;
exports.computed = computed;
exports.isObservable = isObservable;
exports.isComputed = isComputed;
exports.extendObservable = extendObservable;
exports.extendShallowObservable = extendShallowObservable;
exports.observe = observe;
exports.intercept = intercept;
exports.autorun = autorun;
exports.autorunAsync = autorunAsync;
exports.when = when;
exports.reaction = reaction;
exports.action = action;
exports.isAction = isAction;
exports.runInAction = runInAction;
exports.expr = expr;
exports.toJS = toJS;
exports.createTransformer = createTransformer;
exports.whyRun = whyRun;
exports.isArrayLike = isArrayLike;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ })

});
//# sourceMappingURL=0.chunk.js.map