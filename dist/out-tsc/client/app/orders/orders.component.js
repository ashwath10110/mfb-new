System.register(["@angular/core", "@angular/http", "@angular/forms", "@angular/router", "../services/address.service", "./../app.service", "../shared/toast/toast.component", "./../services/orders.service"], function (exports_1, context_1) {
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
    var core_1, http_1, forms_1, router_1, address_service_1, app_service_1, toast_component_1, orders_service_1, OrdersComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (orders_service_1_1) {
                orders_service_1 = orders_service_1_1;
            }
        ],
        execute: function () {
            OrdersComponent = /** @class */ (function () {
                function OrdersComponent(addressService, orderService, appService, formBuilder, http, toast, router) {
                    this.addressService = addressService;
                    this.orderService = orderService;
                    this.appService = appService;
                    this.formBuilder = formBuilder;
                    this.http = http;
                    this.toast = toast;
                    this.router = router;
                    this.address = {};
                    this.addresses = [];
                    this.isLoading = true;
                    this.isEditing = false;
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.showLocationDataFlag = false;
                    this.locationData = '';
                    this.addressSelected = '';
                    this.locationLoading = false;
                    this.showLocationButton = true;
                    this.isAddressValidInDistance = false;
                }
                OrdersComponent.prototype.ngOnInit = function () {
                    this.addAddressForm = this.formBuilder.group({
                        name: this.name,
                        customerDetails: this.customerDetails,
                        items: this.items,
                        cartTotal: this.cartTotal,
                        deliveryDetails: this.deliveryDetails
                    });
                    this.getAddresses();
                };
                OrdersComponent.prototype.getAddresses = function () {
                    var _this = this;
                    this.addressService.getAddresses().subscribe(function (data) {
                        _this.addresses = data;
                    }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                OrdersComponent.prototype.addAddress = function () {
                    var _this = this;
                    this.addressService.addAddress(this.addAddressForm.value).subscribe(function (res) {
                        var newAddress = res.json();
                        _this.addresses.push(newAddress);
                        _this.addAddressForm.reset();
                        _this.toast.setMessage('Address added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                OrdersComponent.prototype.addCurrentAddress = function (address) {
                    var _this = this;
                    this.addressService.addAddress(address).subscribe(function (res) {
                        var newAddress = res.json();
                        _this.addresses.push(newAddress);
                        _this.addAddressForm.reset();
                        _this.toast.setMessage('Address added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                OrdersComponent.prototype.enableEditing = function (address) {
                    this.isEditing = true;
                    this.address = address;
                };
                OrdersComponent.prototype.cancelEditing = function () {
                    this.isEditing = false;
                    this.address = {};
                    this.toast.setMessage('Address editing cancelled.', 'warning');
                };
                OrdersComponent.prototype.editAddress = function (address) {
                    var _this = this;
                    this.addressService.editAddress(address).subscribe(function (res) {
                        _this.isEditing = false;
                        _this.address = address;
                        _this.toast.setMessage('Address edited successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                OrdersComponent.prototype.deleteAddress = function (address) {
                    var _this = this;
                    if (window.confirm('Are you sure you want to permanently delete this item?')) {
                        this.addressService.deleteAddress(address).subscribe(function (res) {
                            var pos = _this.addresses.map(function (elem) { return elem._id; }).indexOf(address._id);
                            _this.addresses.splice(pos, 1);
                            _this.toast.setMessage('Address deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                    }
                };
                OrdersComponent = __decorate([
                    core_1.Component({
                        selector: 'app-orders',
                        templateUrl: './orders.component.html',
                        styleUrls: ['./orders.component.css']
                    }),
                    __metadata("design:paramtypes", [address_service_1.AddressService,
                        orders_service_1.OrderService,
                        app_service_1.AppService,
                        forms_1.FormBuilder,
                        http_1.Http,
                        toast_component_1.ToastComponent,
                        router_1.Router])
                ], OrdersComponent);
                return OrdersComponent;
            }());
            exports_1("OrdersComponent", OrdersComponent);
        }
    };
});
//# sourceMappingURL=orders.component.js.map