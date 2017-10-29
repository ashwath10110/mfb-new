System.register(["@angular/core", "@angular/router", "@angular/forms", "../services/user.service", "../services/local-storage/local-storage.service", "../shared/toast/toast.component", "../app.service"], function (exports_1, context_1) {
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
    var core_1, router_1, forms_1, user_service_1, local_storage_service_1, toast_component_1, app_service_1, RegisterComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            RegisterComponent = /** @class */ (function () {
                function RegisterComponent(formBuilder, router, appService, toast, userService, localStorageService) {
                    this.formBuilder = formBuilder;
                    this.router = router;
                    this.appService = appService;
                    this.toast = toast;
                    this.userService = userService;
                    this.localStorageService = localStorageService;
                    this.username = new forms_1.FormControl('', [forms_1.Validators.required,
                        forms_1.Validators.minLength(2),
                        forms_1.Validators.maxLength(30),
                        forms_1.Validators.pattern('[a-zA-Z0-9_-\\s]*')]);
                    this.email = new forms_1.FormControl('', [forms_1.Validators.required,
                        forms_1.Validators.minLength(3),
                        forms_1.Validators.maxLength(100)]);
                    this.password = new forms_1.FormControl('', [forms_1.Validators.required,
                        forms_1.Validators.minLength(6)]);
                    this.role = new forms_1.FormControl('', [forms_1.Validators.required]);
                    this.captchaFlag = '';
                    this.captchaValid = false;
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    this.registerForm = this.formBuilder.group({
                        username: this.username,
                        email: this.email,
                        password: this.password,
                        role: this.role
                    });
                };
                RegisterComponent.prototype.setClassUsername = function () {
                    return { 'has-danger': !this.username.pristine && !this.username.valid };
                };
                RegisterComponent.prototype.setClassEmail = function () {
                    return { 'has-danger': !this.email.pristine && !this.email.valid };
                };
                RegisterComponent.prototype.setClassPassword = function () {
                    return { 'has-danger': !this.password.pristine && !this.password.valid };
                };
                RegisterComponent.prototype.resolved = function (event) {
                    this.captchaFlag = event;
                    this.captchaValid = true;
                };
                RegisterComponent.prototype.prepareForRegister = function () {
                    if (this.captchaValid) {
                        this.register();
                    }
                    else {
                        this.toast.setMessage('Press the captcha!', 'warning');
                    }
                };
                RegisterComponent.prototype.refresh = function () {
                    window.location.reload();
                };
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    var user = this.registerForm.value;
                    this.userService.register(user).subscribe(function (res) {
                        _this.toast.setMessage('you successfully registered!', 'success');
                        _this.localStorageService.clearLocalStorageItem();
                        _this.router.navigate(['/login']);
                    }, function (error) {
                        _this.toast.setMessage('email already exists', 'danger');
                        if (_this.captchaFlag) {
                            _this.refresh();
                        }
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: 'app-register',
                        templateUrl: './register.component.html',
                        styleUrls: ['./register.component.scss']
                    }),
                    __metadata("design:paramtypes", [forms_1.FormBuilder,
                        router_1.Router,
                        app_service_1.AppService,
                        toast_component_1.ToastComponent,
                        user_service_1.UserService,
                        local_storage_service_1.LocalStorageService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    };
});
//# sourceMappingURL=register.component.js.map