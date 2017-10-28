System.register(["@angular/core", "rxjs/Subject", "./../services/local-storage/local-storage.service", "./../services/items.service", "./../app.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, Subject_1, local_storage_service_1, items_service_1, app_service_1, router_1, CartService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            CartService = /** @class */ (function () {
                function CartService(localStorageService, appService, itemsService, router) {
                    this.localStorageService = localStorageService;
                    this.appService = appService;
                    this.itemsService = itemsService;
                    this.router = router;
                    this.products = [];
                    this.cartTotal = 0;
                    this.productAddedSource = new Subject_1.Subject();
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
                        this.addProductToCart(products[i].product);
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
                CartService.prototype.flushCart = function () {
                    this.products = [];
                    this.cartTotal = 0;
                    this.updateLocalStorage();
                    this.productAddedSource.next({ products: this.products, cartTotal: this.cartTotal });
                };
                CartService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [local_storage_service_1.LocalStorageService,
                        app_service_1.AppService,
                        items_service_1.ItemsService,
                        router_1.Router])
                ], CartService);
                return CartService;
            }());
            exports_1("CartService", CartService);
        }
    };
});
//# sourceMappingURL=cart.service.js.map