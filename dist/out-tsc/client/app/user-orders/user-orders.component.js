System.register(["@angular/core", "@angular/forms", "@angular/router", "../services/user-orders.service", "../shared/toast/toast.component", "./../items/cart.service"], function (exports_1, context_1) {
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
    var core_1, forms_1, router_1, user_orders_service_1, toast_component_1, cart_service_1, UserOrdersComponent;
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
            }
        ],
        execute: function () {
            UserOrdersComponent = /** @class */ (function () {
                function UserOrdersComponent(userOrdersService, formBuilder, toast, router, cartService) {
                    this.userOrdersService = userOrdersService;
                    this.formBuilder = formBuilder;
                    this.toast = toast;
                    this.router = router;
                    this.cartService = cartService;
                    this.isLoading = true;
                    this.isEditing = false;
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.age = new forms_1.FormControl('', forms_1.Validators.required);
                    this.weight = new forms_1.FormControl('', forms_1.Validators.required);
                    this.userOrders = [];
                    this.userOrder = {};
                }
                UserOrdersComponent.prototype.ngOnInit = function () {
                    this.getUserOrders();
                    this.addCatForm = this.formBuilder.group({
                        name: this.name,
                        age: this.age,
                        weight: this.weight
                    });
                };
                UserOrdersComponent.prototype.getUserOrders = function () {
                    var _this = this;
                    this.userOrdersService.getUserOrders().subscribe(function (data) {
                        _this.userOrders = data;
                    }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                UserOrdersComponent.prototype.repeatOrder = function (order) {
                    this.cartService.flushCart();
                    this.cartService.addProductsToCart(order.cartDetails.items);
                    this.router.navigate(['/addresses']);
                };
                UserOrdersComponent.prototype.addCat = function () {
                    var _this = this;
                    this.userOrdersService.addUserOrder(this.addCatForm.value).subscribe(function (res) {
                        var newUserOrder = res.json();
                        _this.userOrders.push(newUserOrder);
                        _this.addCatForm.reset();
                        _this.toast.setMessage('Order added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                UserOrdersComponent.prototype.enableEditing = function (userOrder) {
                    this.isEditing = true;
                    this.userOrder = userOrder;
                };
                UserOrdersComponent.prototype.cancelEditing = function () {
                    this.isEditing = false;
                    this.userOrder = {};
                    this.toast.setMessage('Order editing cancelled.', 'warning');
                    this.getUserOrders();
                };
                UserOrdersComponent.prototype.editCat = function (userOrder) {
                    var _this = this;
                    this.userOrdersService.editUserOrder(userOrder).subscribe(function (res) {
                        _this.isEditing = false;
                        _this.userOrder = userOrder;
                        _this.toast.setMessage('Order edited successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                UserOrdersComponent.prototype.deleteCat = function (userOrder) {
                    var _this = this;
                    if (window.confirm('Are you sure you want to permanently delete this Order?')) {
                        this.userOrdersService.deleteUserOrder(userOrder).subscribe(function (res) {
                            var pos = _this.userOrders.map(function (elem) { return elem._id; }).indexOf(userOrder._id);
                            _this.userOrders.splice(pos, 1);
                            _this.toast.setMessage('Order deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                    }
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
                        cart_service_1.CartService])
                ], UserOrdersComponent);
                return UserOrdersComponent;
            }());
            exports_1("UserOrdersComponent", UserOrdersComponent);
        }
    };
});
//# sourceMappingURL=user-orders.component.js.map