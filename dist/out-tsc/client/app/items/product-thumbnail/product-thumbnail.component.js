System.register(["@angular/core", "../shared/product.model", "../cart.service", "./../../app.service"], function (exports_1, context_1) {
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
    var core_1, product_model_1, cart_service_1, app_service_1, ProductThumbnailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_model_1_1) {
                product_model_1 = product_model_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            ProductThumbnailComponent = /** @class */ (function () {
                function ProductThumbnailComponent(cartService, appService) {
                    this.cartService = cartService;
                    this.appService = appService;
                    this.rupeeSymbol = 'Rs.';
                    // this.rupeeSymbol = this.appService.currentUser.toUseForRupeeSymbol.hindiRupees;
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
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", product_model_1.Product)
                ], ProductThumbnailComponent.prototype, "product", void 0);
                ProductThumbnailComponent = __decorate([
                    core_1.Component({
                        selector: 'product-thumbnail',
                        templateUrl: './product-thumbnail.component.html',
                        styleUrls: ['./product-thumbnail.component.scss']
                    }),
                    __metadata("design:paramtypes", [cart_service_1.CartService,
                        app_service_1.AppService])
                ], ProductThumbnailComponent);
                return ProductThumbnailComponent;
            }());
            exports_1("ProductThumbnailComponent", ProductThumbnailComponent);
        }
    };
});
//# sourceMappingURL=product-thumbnail.component.js.map