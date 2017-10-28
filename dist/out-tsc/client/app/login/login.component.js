System.register(["@angular/core", "@angular/router", "@angular/forms", "../services/auth.service", "../app.service", "../services/local-storage/local-storage.service", "../shared/toast/toast.component"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, auth_service_1, app_service_1, local_storage_service_1, toast_component_1, LoginComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            }
        ],
        execute: function () {
            LoginComponent = /** @class */ (function () {
                function LoginComponent(auth, appService, formBuilder, router, toast, localStorageService) {
                    this.auth = auth;
                    this.appService = appService;
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.toast = toast;
                    this.localStorageService = localStorageService;
                    this.email = new forms_1.FormControl('', [forms_1.Validators.required,
                        forms_1.Validators.minLength(3),
                        forms_1.Validators.maxLength(100)]);
                    this.password = new forms_1.FormControl('', [forms_1.Validators.required,
                        forms_1.Validators.minLength(6)]);
                    this.captchaFlag = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (this.auth.loggedIn) {
                        this.router.navigate(['/']);
                    }
                    else {
                        this.loginForm = this.formBuilder.group({
                            email: this.email,
                            password: this.password
                        });
                    }
                };
                LoginComponent.prototype.setClassEmail = function () {
                    return { 'has-danger': !this.email.pristine && !this.email.valid };
                };
                LoginComponent.prototype.setClassPassword = function () {
                    return { 'has-danger': !this.password.pristine && !this.password.valid };
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.auth.login(this.loginForm.value).subscribe(function (res) {
                        _this.localStorageService.clearLocalStorageItem();
                        if (_this.appService.isCartPrepared) {
                            _this.router.navigate(['/addresses']);
                        }
                        else {
                            _this.router.navigate(['/']);
                        }
                    }, function (error) { return _this.toast.setMessage('invalid email or password!', 'danger'); });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        templateUrl: './login.component.html',
                        styleUrls: ['./login.component.scss']
                    }),
                    __metadata("design:paramtypes", [auth_service_1.AuthService,
                        app_service_1.AppService,
                        forms_1.FormBuilder,
                        router_1.Router,
                        toast_component_1.ToastComponent,
                        local_storage_service_1.LocalStorageService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    };
});
//# sourceMappingURL=login.component.js.map