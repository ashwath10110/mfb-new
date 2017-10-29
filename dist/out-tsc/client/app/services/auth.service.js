System.register(["@angular/core", "@angular/router", "angular2-jwt", "../services/user.service", "./../items/cart.service", "./../app.service"], function (exports_1, context_1) {
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
    var core_1, router_1, angular2_jwt_1, user_service_1, cart_service_1, app_service_1, AuthService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            AuthService = /** @class */ (function () {
                function AuthService(userService, router, cartService, appService) {
                    this.userService = userService;
                    this.router = router;
                    this.cartService = cartService;
                    this.appService = appService;
                    this.loggedIn = false;
                    this.isAdmin = false;
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.currentUser = {
                        _id: '',
                        username: '',
                        email: '',
                        role: '',
                        addresses: [],
                        orders: [],
                        contactDetails: {}
                    };
                    this.freshUser();
                    var token = localStorage.getItem('token');
                    if (token) {
                        var decodedUser = this.decodeUserFromToken(token);
                        this.setCurrentUser(decodedUser);
                    }
                }
                AuthService.prototype.freshUser = function () {
                    this.currentUser = {
                        _id: '',
                        username: '',
                        email: '',
                        role: '',
                        addresses: [],
                        orders: [],
                        contactDetails: {}
                    };
                };
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
                    this.freshUser();
                    this.cartService.flushCart();
                    this.appService.isCartPrepared = false;
                    this.router.navigate(['/']);
                };
                AuthService.prototype.decodeUserFromToken = function (token) {
                    return this.jwtHelper.decodeToken(token).user;
                };
                AuthService.prototype.setCurrentUser = function (decodedUser) {
                    this.loggedIn = true;
                    this.currentUser = decodedUser;
                    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
                    delete decodedUser.role;
                };
                AuthService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [user_service_1.UserService,
                        router_1.Router,
                        cart_service_1.CartService,
                        app_service_1.AppService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    };
});
//# sourceMappingURL=auth.service.js.map