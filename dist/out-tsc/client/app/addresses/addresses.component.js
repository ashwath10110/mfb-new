System.register(["@angular/core", "@angular/http", "@angular/forms", "@angular/router", "../services/address.service", "./../app.service", "../shared/toast/toast.component", "./../items/cart.service", "./../services/items.service", "./../services/auth.service", "./../services/user.service"], function (exports_1, context_1) {
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
    var core_1, http_1, forms_1, router_1, address_service_1, app_service_1, toast_component_1, cart_service_1, items_service_1, auth_service_1, user_service_1, AddressesComponent;
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
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            AddressesComponent = /** @class */ (function () {
                function AddressesComponent(addressService, cartService, appService, itemsService, formBuilder, http, toast, router, userService, auth) {
                    this.addressService = addressService;
                    this.cartService = cartService;
                    this.appService = appService;
                    this.itemsService = itemsService;
                    this.formBuilder = formBuilder;
                    this.http = http;
                    this.toast = toast;
                    this.router = router;
                    this.userService = userService;
                    this.auth = auth;
                    this.address = {};
                    this.addresses = [];
                    this.isLoading = false;
                    this.isEditing = false;
                    this.name = new forms_1.FormControl('', forms_1.Validators.required);
                    this.showLocationDataFlag = false;
                    this.locationData = '';
                    this.addressSelected = '';
                    this.locationLoading = false;
                    this.showLocationButton = true;
                    this.isAddressValidInDistance = false;
                    this.loadWholeScreen = false;
                }
                AddressesComponent.prototype.ngOnInit = function () {
                    this.addAddressForm = this.formBuilder.group({
                        name: this.name
                    });
                    this.getAddresses();
                };
                AddressesComponent.prototype.getLocationData = function () {
                    var _this = this;
                    this.isLoading = true;
                    this.showLocationButton = false;
                    this.appService.locationInit().subscribe(function (data) {
                        var address = JSON.parse(data["_body"]).results[0].formatted_address;
                        _this.addresses.push({ name: address });
                        _this.showLocationButton = false;
                        _this.appService.currentUser.locationInfo = {
                            status: true,
                            value: address
                        };
                        if (_this.appService.currentUser.distanceFromShop.status == 1) {
                            _this.isAddressValidInDistance = true;
                        }
                        _this.isLoading = false;
                    }, function () {
                        _this.isLoading = false;
                    });
                };
                AddressesComponent.prototype.getAddresses = function () {
                    var _this = this;
                    if (this.appService.currentUser.userData.status) {
                        this.addresses = this.appService.currentUser.userData.data['addresses'];
                    }
                    else {
                        this.isLoading = true;
                        this.userService.getUser(this.auth.currentUser).subscribe(function (data) {
                            _this.addresses = data['addresses'];
                            _this.appService.currentUser.userData = {
                                status: true,
                                data: data
                            };
                            _this.isLoading = false;
                        }, function (error) { return console.log(error); }, function () {
                            _this.isLoading = false;
                        });
                    }
                };
                AddressesComponent.prototype.addAddress = function (address) {
                    // let address = {
                    //   name: this.addAddressForm.value.name,
                    //   value: {
                    //     HNo: 'dhdhdhdhh',
                    //     StreetNo: 'yyeueueueuueue',
                    //     AreaName: 'Bowenpally',
                    //     LandMark: 'assdsddjjdjdjdjdjjdjd'
                    //   }
                    // };
                    var _this = this;
                    var User = this.appService.currentUser.userData.data;
                    User['address'].push(address);
                    this.userService.editUser(User).subscribe(function (res) {
                        var updatedUser = res.json();
                        _this.appService.currentUser.userData.data = updatedUser;
                        _this.addAddressForm.reset();
                        _this.toast.setMessage('Address added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                AddressesComponent.prototype.addUserHelper = function (typeOfAddress, address) {
                    if (typeOfAddress == 'locationAddress') {
                        this.addAddress(address);
                    }
                    else {
                    }
                };
                AddressesComponent.prototype.addCurrentAddress = function (address) {
                    var _this = this;
                    var User = this.appService.currentUser.userData.data;
                    User['address'].push(address);
                    this.userService.editUser(User).subscribe(function (res) {
                        var updatedUser = res.json();
                        _this.appService.currentUser.userData.data = updatedUser;
                        _this.addAddressForm.reset();
                        _this.toast.setMessage('Address added successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                AddressesComponent.prototype.enableEditing = function (address) {
                    this.isEditing = true;
                    this.address = address;
                };
                AddressesComponent.prototype.cancelEditing = function () {
                    this.isEditing = false;
                    this.address = {};
                    this.toast.setMessage('Address editing cancelled.', 'warning');
                };
                AddressesComponent.prototype.editAddress = function (address) {
                    var _this = this;
                    var user = this.appService.currentUser.userDetails.addresses.data;
                    for (var i = 0; i < user['addresses'].length; i++) {
                        if (user['addresses'][i].name == address.name) {
                            user['addresses'][i].value = address;
                        }
                    }
                    this.userService.editUser(user).subscribe(function (res) {
                        _this.addresses = _this.appService.currentUser.userDetails.addresses.data['addresses'];
                        var newAddresses = res.json();
                        debugger;
                        _this.appService.currentUser.userDetails.addresses.status = true;
                        _this.appService.currentUser.userDetails.addresses.data = res;
                        _this.addresses = newAddresses.addresses;
                        // this.addAddressForm.reset();
                        _this.isEditing = false;
                        // this.address = res;
                        _this.toast.setMessage('Address Edited successfully.', 'success');
                    }, function (error) { return console.log(error); });
                };
                AddressesComponent.prototype.deleteAddress = function (address) {
                    var _this = this;
                    if (window.confirm('Are you sure you want to permanently delete this item?')) {
                        var user = this.auth.currentUser;
                        for (var i = 0; i < user.addresses.length; i++) {
                            if (user.addresses[i].name == address.name) {
                                user.addresses.splice(i, 1);
                                break;
                            }
                        }
                        this.userService.editUser(user).subscribe(function (res) {
                            var pos = _this.addresses.map(function (elem) { return elem._id; }).indexOf(address._id);
                            _this.isEditing = false;
                            // this.addresses = res['']
                            _this.toast.setMessage('Address deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                        this.addressService.deleteAddress(address).subscribe(function (res) {
                            var pos = _this.addresses.map(function (elem) { return elem._id; }).indexOf(address._id);
                            _this.addresses.splice(pos, 1);
                            _this.toast.setMessage('Address deleted successfully.', 'success');
                        }, function (error) { return console.log(error); });
                    }
                };
                AddressesComponent.prototype.proceedToPay = function () {
                    var _this = this;
                    var prod = this.cartService.products;
                    var newProd = [];
                    for (var i = 0; i < prod.length; i++) {
                        newProd.push({ '_id': prod[i]['product']['_id'] });
                    }
                    var cartProducts = {
                        products: newProd
                    };
                    this.loadWholeScreen = true;
                    if (this.appService.currentUser.locationInfo.status) {
                        this.addCurrentAddress({ name: this.appService.currentUser.locationInfo.value });
                    }
                    this.itemsService.isCartValid(cartProducts).subscribe(function (res) {
                        _this.loadWholeScreen = false;
                        if (res['status']) {
                            if (res['data']['value']) {
                                _this.router.navigate(['/checkout']);
                            }
                            else {
                                alert('Some items might not be available. Your cart has been refreshed.');
                                _this.toast.setMessage('Some items might not be available Your cart has been refreshed.', 'warning');
                                _this.cartService.refreshCart();
                            }
                        }
                    }, function (error) {
                        _this.loadWholeScreen = false;
                        console.log(error);
                    });
                };
                AddressesComponent = __decorate([
                    core_1.Component({
                        selector: 'app-addresses',
                        templateUrl: './addresses.component.html',
                        styleUrls: ['./addresses.component.scss']
                    }),
                    __metadata("design:paramtypes", [address_service_1.AddressService,
                        cart_service_1.CartService,
                        app_service_1.AppService,
                        items_service_1.ItemsService,
                        forms_1.FormBuilder,
                        http_1.Http,
                        toast_component_1.ToastComponent,
                        router_1.Router,
                        user_service_1.UserService,
                        auth_service_1.AuthService])
                ], AddressesComponent);
                return AddressesComponent;
            }());
            exports_1("AddressesComponent", AddressesComponent);
        }
    };
});
//# sourceMappingURL=addresses.component.js.map