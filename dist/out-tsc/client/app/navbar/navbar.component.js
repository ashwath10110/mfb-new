System.register(["@angular/core", "@angular/router", "./../services/auth.service", "./../items/cart.service"], function (exports_1, context_1) {
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
    var core_1, router_1, auth_service_1, cart_service_1, NavbarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }
        ],
        execute: function () {
            NavbarComponent = /** @class */ (function () {
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
                NavbarComponent = __decorate([
                    core_1.Component({
                        selector: 'app-navbar',
                        templateUrl: './navbar.component.html',
                        styleUrls: ['./navbar.component.css']
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        auth_service_1.AuthService,
                        cart_service_1.CartService])
                ], NavbarComponent);
                return NavbarComponent;
            }());
            exports_1("NavbarComponent", NavbarComponent);
        }
    };
});
//# sourceMappingURL=navbar.component.js.map