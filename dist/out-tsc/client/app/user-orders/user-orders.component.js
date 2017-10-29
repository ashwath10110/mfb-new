System.register(["@angular/core", "@angular/forms", "@angular/router", "../services/user-orders.service", "../shared/toast/toast.component", "./../items/cart.service", "../services/auth.service", "../services/user.service", "./../app.service"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, user_orders_service_1, toast_component_1, cart_service_1, auth_service_1, user_service_1, app_service_1, UserOrdersComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (user_orders_service_1_1) {
                user_orders_service_1 = user_orders_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            UserOrdersComponent = /** @class */ (function () {
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
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.age = new forms_1.FormControl('', forms_1.Validators.required);
                    this.weight = new forms_1.FormControl('', forms_1.Validators.required);
                    this.userOrders = [];
                    this.userOrder = {};
                }
                UserOrdersComponent.prototype.ngOnInit = function () {
                    this.getUserOrders();
                };
                UserOrdersComponent.prototype.getUserOrders = function () {
                    var _this = this;
                    if (this.appService.currentUser.userDetails.orders.status) {
                        this.userOrders = this.appService.currentUser.userDetails.orders['data'];
                    }
                    else {
                        this.isLoading = true;
                        this.userService.getUser(this.auth.currentUser).subscribe(function (data) {
                            // const newAddresses = res.json();
                            _this.appService.currentUser.userDetails.orders.data = data['orders'];
                            _this.appService.currentUser.userDetails.orders.status = true;
                            _this.userOrders = _this.appService.currentUser.userDetails.orders.data;
                            _this.isLoading = false;
                        }, function (error) { return console.log(error); }, function () {
                            _this.isLoading = false;
                        });
                    }
                };
                UserOrdersComponent.prototype.repeatOrder = function (order) {
                    this.cartService.flushCart();
                    this.cartService.addProductsToCart(order.cartDetails.items);
                    this.router.navigate(['/addresses']);
                };
                UserOrdersComponent = __decorate([
                    core_1.Component({
                        selector: 'app-user-orders',
                        templateUrl: './user-orders.component.html',
                        styleUrls: ['./user-orders.component.scss']
                    }),
                    __metadata("design:paramtypes", [user_orders_service_1.UserOrdersService,
                        forms_1.FormBuilder,
                        toast_component_1.ToastComponent,
                        router_1.Router,
                        cart_service_1.CartService,
                        auth_service_1.AuthService,
                        app_service_1.AppService,
                        user_service_1.UserService])
                ], UserOrdersComponent);
                return UserOrdersComponent;
            }());
            exports_1("UserOrdersComponent", UserOrdersComponent);
        }
    };
});
//# sourceMappingURL=user-orders.component.js.map