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
    var core_1, http_1, CatService;
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
            CatService = /** @class */ (function () {
                function CatService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                CatService.prototype.getCats = function () {
                    return this.http.get('/api/cats').map(function (res) { return res.json(); });
                };
                CatService.prototype.countCats = function () {
                    return this.http.get('/api/cats/count').map(function (res) { return res.json(); });
                };
                CatService.prototype.addCat = function (cat) {
                    return this.http.post('/api/cat', JSON.stringify(cat), this.options);
                };
                CatService.prototype.getCat = function (cat) {
                    return this.http.get("/api/cat/" + cat._id).map(function (res) { return res.json(); });
                };
                CatService.prototype.editCat = function (cat) {
                    return this.http.put("/api/cat/" + cat._id, JSON.stringify(cat), this.options);
                };
                CatService.prototype.deleteCat = function (cat) {
                    return this.http.delete("/api/cat/" + cat._id, this.options);
                };
                CatService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], CatService);
                return CatService;
            }());
            exports_1("CatService", CatService);
        }
    };
});
//# sourceMappingURL=cat.service.js.map