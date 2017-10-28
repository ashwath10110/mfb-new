System.register(["@angular/core", "./data.service", "./cart.service", "./../services/items.service", "./../app.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, data_service_1, cart_service_1, items_service_1, app_service_1, router_1, ItemsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            },
            function (items_service_1_1) {
                items_service_1 = items_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            ItemsComponent = /** @class */ (function () {
                function ItemsComponent(dataService, cartService, itemsService, route, appService) {
                    this.dataService = dataService;
                    this.cartService = cartService;
                    this.itemsService = itemsService;
                    this.route = route;
                    this.appService = appService;
                    this.products = [];
                    this.leafyGreenVegetable = {};
                    this.leafyGreenVegetables = [];
                    this.isLoading = true;
                    this.isEditing = false;
                    this.originalData = [];
                }
                ItemsComponent.prototype.ngOnInit = function () {
                    this.initCart();
                };
                ItemsComponent.prototype.getItems = function (type) {
                    var _this = this;
                    if (this.itemsService.state['isInitialised']) {
                        this.products = this.itemsService.state['data'][type]['items'];
                        this.isLoading = false;
                    }
                    else {
                        this.isLoading = true;
                        this.itemsService.getItems().subscribe(function (data) {
                            _this.processItems(data, _this.itemsService.state);
                            _this.products = _this.itemsService.state['data'][type]['items'];
                            _this.isLoading = false;
                            _this.itemsService.state['isInitialised'] = true;
                        }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                    }
                };
                ItemsComponent.prototype.processItems = function (items, state) {
                    for (var i = 0; i < items.length; i++) {
                        var currentItem = items[i];
                        var type = currentItem['type'];
                        state.data[type]['items'].push(currentItem);
                    }
                };
                ItemsComponent.prototype.getLeafyGreenVegetables = function () {
                    var _this = this;
                    this.itemsService.getLeafyGreenVegetables().subscribe(function (data) {
                        _this.products = data;
                    }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                ItemsComponent.prototype.initCart = function () {
                    var _this = this;
                    this.sub = this.route.params.subscribe(function (params) {
                        _this.typeOfVegetables = params['id'];
                        if (_this.typeOfVegetables) {
                            _this.getItems(_this.typeOfVegetables);
                        }
                    });
                };
                ItemsComponent = __decorate([
                    core_1.Component({
                        selector: 'app-items',
                        templateUrl: './items.component.html',
                        styleUrls: ['./items.scss']
                    }),
                    __metadata("design:paramtypes", [data_service_1.DataService,
                        cart_service_1.CartService,
                        items_service_1.ItemsService,
                        router_1.ActivatedRoute,
                        app_service_1.AppService])
                ], ItemsComponent);
                return ItemsComponent;
            }());
            exports_1("ItemsComponent", ItemsComponent);
        }
    };
});
//# sourceMappingURL=items.component.js.map