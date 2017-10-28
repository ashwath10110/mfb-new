System.register(["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "rxjs/add/operator/mergeMap", "./../app/shared/toast/toast.component", "./../app/services/user.service"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, toast_component_1, user_service_1, AppService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (_2) {
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }
        ],
        execute: function () {
            AppService = /** @class */ (function () {
                function AppService(http, toast, userService) {
                    this.http = http;
                    this.toast = toast;
                    this.userService = userService;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                    this.selectedTab = 'Home';
                    this.x_ = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE";
                    this.currentUser = {
                        name: 'Ashwath',
                        userDetails: {
                            status: false,
                            data: {}
                        },
                        tokenId: '00110101100',
                        tokenForLocalStorage: 'mfb-storage',
                        locationData: {
                            status: false,
                            value: {}
                        },
                        toUseForRupeeSymbol: {
                            englishRupees: 'Rs.',
                            hindiRupees: '&#x20b9;'
                        },
                        locationInfo: {
                            status: false,
                            value: {}
                        },
                        distanceFromShop: {
                            status: 0,
                            value: 0
                        },
                        isLocationValid: {
                            status: false,
                            value: {}
                        },
                        cartValue: {
                            status: false,
                            value: {
                                products: [],
                                cartTotal: 0
                            }
                        }
                    };
                    this.isCartPrepared = false;
                    this.shopDetails = {
                        name: '',
                        locationChords: {
                            latitude: 17.4551658,
                            longitude: 78.4983102
                        },
                        locationInfo: {
                            value: "Shop is in Secunderabad"
                        },
                        validDistanceAllowedInKm: 20
                    };
                    this.googleApiKey = 'AIzaSyAkL6AxoO5S7ACBqvO-A2eMstnbx8pU9oE';
                    this.googleCaptchaKey = '6Lf5pzQUAAAAANCvQ8Z8vtOdhUCsaijP2xql6fbK';
                    this.googleCaptchaSecretKey = '6Lf5pzQUAAAAAOHS4BtR1XDWKHUnvMZGM0t2iUeL';
                    this.state = {
                        'isInitialised': false,
                        'data': {
                            'exotic-vegetables': {
                                'items': [],
                                'isInitialised': false
                            },
                            'leafy-green-vegetables': {
                                'items': [],
                                'isInitialised': false
                            },
                            'fresh-fruits': {
                                'items': [],
                                'isInitialised': false
                            },
                            'fresh-vegetables': {
                                'items': [],
                                'isInitialised': false
                            }
                        }
                    };
                    // this.userService.getUser();
                }
                AppService.prototype.getLocation = function () {
                    return Observable_1.Observable.create(function (observer) {
                        if (window.navigator && window.navigator.geolocation) {
                            window.navigator.geolocation.getCurrentPosition(function (position) {
                                observer.next(position);
                                observer.complete();
                            }, function (error) { return observer.error(error); });
                        }
                        else {
                            observer.error('Unsupported Browser');
                        }
                    });
                };
                AppService.prototype.locationInit = function () {
                    var _this = this;
                    return this.getLocation().flatMap(function (data) {
                        _this.currentUser.locationData = {
                            status: true,
                            value: data
                        };
                        var lat = _this.currentUser.locationData.value['coords'].latitude;
                        var long = _this.currentUser.locationData.value['coords'].longitude;
                        _this.currentUser.distanceFromShop = {
                            status: -1,
                            value: data
                        };
                        if (_this.isDistanceValid(_this.shopDetails.locationChords, _this.currentUser.locationData.value['coords'], _this.shopDetails.validDistanceAllowedInKm * 1000)) {
                            _this.currentUser.distanceFromShop = {
                                status: 1,
                                value: data
                            };
                        }
                        return _this.getLocationFromCords(data.coords.latitude, data.coords.longitude);
                    });
                };
                AppService.prototype.isDistanceValid = function (shop, customer, radiusValid) {
                    var rad = function (x) {
                        return x * Math.PI / 180;
                    };
                    var R = 6378137; // Earth’s mean radius in meter
                    var dLat = rad(customer.latitude - shop.latitude);
                    var dLong = rad(customer.longitude - shop.longitude);
                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(rad(shop.latitude)) * Math.cos(rad(customer.latitude)) *
                            Math.sin(dLong / 2) * Math.sin(dLong / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var distance = R * c;
                    this.currentUser.distanceFromShop.value = distance;
                    return (distance <= radiusValid); // returns the distance in meter
                };
                ;
                AppService.prototype.getLocationFromCords = function (lat, lon) {
                    var apiKey = this.googleApiKey;
                    var getLocationFromCordsUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + apiKey;
                    return this.http.get(getLocationFromCordsUrl);
                };
                AppService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http,
                        toast_component_1.ToastComponent,
                        user_service_1.UserService])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    };
});
//# sourceMappingURL=app.service.js.map