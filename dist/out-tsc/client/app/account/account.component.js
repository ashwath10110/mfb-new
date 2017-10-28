System.register(["@angular/core", "../shared/toast/toast.component", "../services/auth.service", "../services/user.service", "./../app.service"], function (exports_1, context_1) {
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
    var core_1, toast_component_1, auth_service_1, user_service_1, app_service_1, AccountComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            AccountComponent = /** @class */ (function () {
                function AccountComponent(auth, toast, userService, appService) {
                    this.auth = auth;
                    this.toast = toast;
                    this.userService = userService;
                    this.appService = appService;
                    this.user = {};
                    this.isLoading = true;
                }
                AccountComponent.prototype.ngOnInit = function () {
                    this.getUser();
                };
                AccountComponent.prototype.getUser = function () {
                    var _this = this;
                    this.userService.getUser(this.auth.currentUser).subscribe(function (data) {
                        _this.appService.currentUser.userDetails = data;
                        _this.user = data;
                    }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
                };
                AccountComponent.prototype.save = function (user) {
                    var _this = this;
                    this.userService.editUser(user).subscribe(function (res) { return _this.toast.setMessage('account settings saved!', 'success'); }, function (error) { return console.log(error); });
                };
                AccountComponent = __decorate([
                    core_1.Component({
                        selector: 'app-account',
                        templateUrl: './account.component.html',
                        styleUrls: ['./account.component.scss']
                    }),
                    __metadata("design:paramtypes", [auth_service_1.AuthService,
                        toast_component_1.ToastComponent,
                        user_service_1.UserService,
                        app_service_1.AppService])
                ], AccountComponent);
                return AccountComponent;
            }());
            exports_1("AccountComponent", AccountComponent);
        }
    };
});
//# sourceMappingURL=account.component.js.map