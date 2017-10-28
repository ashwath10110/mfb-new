System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function (exports_1, context_1) {
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
    var core_1, http_1, ItemsService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            ItemsService = /** @class */ (function () {
                function ItemsService(http) {
                    this.http = http;
                    this.isLoading = false;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                    this.products = [];
                    this.state = {
                        'isInitialised': false,
                        'data': {
                            'exotic-vegetables': {
                                'items': []
                            },
                            'leafy-green-vegetables': {
                                'items': []
                            },
                            'fresh-fruits': {
                                'items': []
                            },
                            'fresh-vegetables': {
                                'items': []
                            }
                        }
                    };
                }
                ItemsService.prototype.processItems = function (items) {
                    for (var i = 0; i < items.length; i++) {
                        var currentItem = items[i];
                        var type = currentItem.type;
                        this.state.data[type].push(currentItem);
                    }
                };
                ItemsService.prototype.isCartValid = function (leafyGreenVegetables) {
                    return this.http.post('/api/items/isCartValid', JSON.stringify(leafyGreenVegetables), this.options).map(function (res) { return res.json(); });
                };
                ItemsService.prototype.getItems = function () {
                    return this.http.get('/api/items').map(function (res) { return res.json(); });
                };
                ItemsService.prototype.getItemsByType = function (type) {
                    return this.http.get('/api/items' + type).map(function (res) { return res.json(); });
                };
                ItemsService.prototype.getLeafyGreenVegetables = function () {
                    return this.http.get('/api/items').map(function (res) { return res.json(); });
                };
                ItemsService.prototype.countLeafyGreenVegetables = function () {
                    return this.http.get('/api/items/count').map(function (res) { return res.json(); });
                };
                ItemsService.prototype.addLeafyGreenVegetable = function (leafyGreenVegetables) {
                    return this.http.post('/api/items', JSON.stringify(leafyGreenVegetables), this.options);
                };
                ItemsService.prototype.getLeafyGreenVegetable = function (leafyGreenVegetables) {
                    return this.http.get("/api/items/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
                };
                ItemsService.prototype.editLeafyGreenVegetable = function (leafyGreenVegetables) {
                    debugger;
                    return this.http.put("/api/items/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
                };
                ItemsService.prototype.deleteLeafyGreenVegetable = function (leafyGreenVegetables) {
                    return this.http.delete("/api/items/" + leafyGreenVegetables._id, this.options);
                };
                ItemsService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], ItemsService);
                return ItemsService;
            }());
            exports_1("ItemsService", ItemsService);
        }
    };
});
//# sourceMappingURL=items.service.js.map