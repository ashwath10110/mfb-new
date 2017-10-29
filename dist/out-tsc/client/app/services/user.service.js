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
    var core_1, http_1, UserService;
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
            UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                UserService.prototype.register = function (user) {
                    debugger;
                    return this.http.post('/api/user', JSON.stringify(user), this.options);
                };
                UserService.prototype.login = function (credentials) {
                    return this.http.post('/api/login', JSON.stringify(credentials), this.options);
                };
                UserService.prototype.getUsers = function () {
                    return this.http.get('/api/users').map(function (res) { return res.json(); });
                };
                UserService.prototype.countUsers = function () {
                    return this.http.get('/api/users/count').map(function (res) { return res.json(); });
                };
                UserService.prototype.addUser = function (user) {
                    return this.http.post('/api/user', JSON.stringify(user), this.options);
                };
                UserService.prototype.getUser = function (user) {
                    return this.http.get("/api/user/" + user._id).map(function (res) { return res.json(); });
                };
                UserService.prototype.editUser = function (user) {
                    return this.http.put("/api/user/" + user._id, JSON.stringify(user), this.options);
                };
                UserService.prototype.deleteUser = function (user) {
                    return this.http.delete("/api/user/" + user._id, this.options);
                };
                UserService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [http_1.Http])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    };
});
//# sourceMappingURL=user.service.js.map