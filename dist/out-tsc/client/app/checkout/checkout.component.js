System.register(["@angular/core", "@angular/router", "../services/user-orders.service", "../shared/toast/toast.component", "./../items/cart.service"], function (exports_1, context_1) {
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
    var core_1, router_1, user_orders_service_1, toast_component_1, cart_service_1, CheckoutComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
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
            }
        ],
        execute: function () {
            CheckoutComponent = /** @class */ (function () {
                function CheckoutComponent(userOrdersService, toast, cartService, router) {
                    this.userOrdersService = userOrdersService;
                    this.toast = toast;
                    this.cartService = cartService;
                    this.router = router;
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
                    this.userOrdersService.addUserOrder(order).subscribe(function (res) {
                        if (res.status == 200) {
                            _this.toast.setMessage('Order added successfully.', 'success');
                            _this.cartService.flushCart();
                            _this.router.navigate(['/order-success']);
                        }
                    }, function (error) { return console.log(error); });
                };
                CheckoutComponent = __decorate([
                    core_1.Component({
                        selector: 'app-checkout',
                        templateUrl: './checkout.component.html',
                        styleUrls: ['./checkout.component.css']
                    }),
                    __metadata("design:paramtypes", [user_orders_service_1.UserOrdersService,
                        toast_component_1.ToastComponent,
                        cart_service_1.CartService,
                        router_1.Router])
                ], CheckoutComponent);
                return CheckoutComponent;
            }());
            exports_1("CheckoutComponent", CheckoutComponent);
        }
    };
});
//# sourceMappingURL=checkout.component.js.map