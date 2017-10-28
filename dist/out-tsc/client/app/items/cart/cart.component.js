System.register(["@angular/core", "../cart.service", "@angular/router", "./../../app.service", "./../../services/auth.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, cart_service_1, router_1, app_service_1, auth_service_1, OFFSET_HEIGHT, PRODUCT_HEIGHT, CartComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }
        ],
        execute: function () {
            OFFSET_HEIGHT = 170;
            PRODUCT_HEIGHT = 48;
            CartComponent = /** @class */ (function () {
                function CartComponent(cartService, changeDetectorRef, route, router, appService, auth) {
                    this.cartService = cartService;
                    this.route = route;
                    this.router = router;
                    this.appService = appService;
                    this.auth = auth;
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
                CartComponent.prototype.flushCart = function () {
                    this.cartService.flushCart();
                    this.router.navigate(['/items']);
                };
                CartComponent.prototype.checkout = function () {
                    this.expanded = false;
                    if (this.auth.loggedIn) {
                        this.router.navigate(['/addresses']);
                    }
                    else {
                        this.appService.isCartPrepared = true;
                        this.router.navigate(['/login']);
                    }
                    console.log("To Checkout");
                };
                CartComponent.prototype.onCartClick = function () {
                    this.expanded = !this.expanded;
                };
                CartComponent = __decorate([
                    core_1.Component({
                        selector: 'cart',
                        templateUrl: './cart.component.html',
                        styleUrls: ['./cart.component.scss']
                    }),
                    __metadata("design:paramtypes", [cart_service_1.CartService,
                        core_1.ChangeDetectorRef,
                        router_1.ActivatedRoute,
                        router_1.Router,
                        app_service_1.AppService,
                        auth_service_1.AuthService])
                ], CartComponent);
                return CartComponent;
            }());
            exports_1("CartComponent", CartComponent);
        }
    };
});
//# sourceMappingURL=cart.component.js.map