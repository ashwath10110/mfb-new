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
    var core_1, http_1, AddressService;
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
            AddressService = /** @class */ (function () {
                function AddressService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                AddressService.prototype.getAddresses = function () {
                    return this.http.get('/api/address').map(function (res) { return res.json(); });
                };
                AddressService.prototype.addAddress = function (cat) {
                    return this.http.post('/api/address', JSON.stringify(cat), this.options);
                };
                AddressService.prototype.editAddress = function (cat) {
                    return this.http.put("/api/address/" + cat._id, JSON.stringify(cat), this.options);
                };
                AddressService.prototype.deleteAddress = function (cat) {
                    return this.http.delete("/api/address/" + cat._id, this.options);
                };
                AddressService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], AddressService);
                return AddressService;
            }());
            exports_1("AddressService", AddressService);
        }
    };
});
//# sourceMappingURL=address.service.js.map