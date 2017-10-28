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
    var core_1, http_1, OrderService;
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
            OrderService = /** @class */ (function () {
                function OrderService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                OrderService.prototype.getOrders = function () {
                    return this.http.get('/api/order').map(function (res) { return res.json(); });
                };
                OrderService.prototype.countOrders = function () {
                    return this.http.get('/api/order/count').map(function (res) { return res.json(); });
                };
                OrderService.prototype.addOrder = function (leafyGreenVegetables) {
                    return this.http.post('/api/order', JSON.stringify(leafyGreenVegetables), this.options);
                };
                OrderService.prototype.getOrder = function (leafyGreenVegetables) {
                    return this.http.get("/api/order/" + leafyGreenVegetables._id).map(function (res) { return res.json(); });
                };
                OrderService.prototype.editOrder = function (leafyGreenVegetables) {
                    return this.http.put("/api/order/" + leafyGreenVegetables._id, JSON.stringify(leafyGreenVegetables), this.options);
                };
                OrderService.prototype.deleteOrder = function (leafyGreenVegetables) {
                    return this.http.delete("/api/order/" + leafyGreenVegetables._id, this.options);
                };
                OrderService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], OrderService);
                return OrderService;
            }());
            exports_1("OrderService", OrderService);
        }
    };
});
//# sourceMappingURL=orders.service.js.map