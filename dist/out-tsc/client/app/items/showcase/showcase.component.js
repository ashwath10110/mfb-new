System.register(["@angular/core", "../cart.service"], function (exports_1, context_1) {
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
    var core_1, cart_service_1, ShowcaseComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }
        ],
        execute: function () {
            ShowcaseComponent = /** @class */ (function () {
                function ShowcaseComponent(cartService) {
                    this.cartService = cartService;
                }
                ShowcaseComponent.prototype.ngOnInit = function () {
                };
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", Array)
                ], ShowcaseComponent.prototype, "products", void 0);
                __decorate([
                    core_1.Input(),
                    __metadata("design:type", String)
                ], ShowcaseComponent.prototype, "itemType", void 0);
                ShowcaseComponent = __decorate([
                    core_1.Component({
                        selector: 'showcase',
                        templateUrl: './showcase.component.html',
                        styleUrls: ['./showcase.component.scss']
                    }),
                    __metadata("design:paramtypes", [cart_service_1.CartService])
                ], ShowcaseComponent);
                return ShowcaseComponent;
            }());
            exports_1("ShowcaseComponent", ShowcaseComponent);
        }
    };
});
//# sourceMappingURL=showcase.component.js.map