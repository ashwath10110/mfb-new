System.register(["@angular/core", "@angular/platform-browser", "@angular/forms", "@angular/http", "./toast/toast.component", "./loading/loading.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, forms_1, http_1, toast_component_1, loading_component_1, SharedModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            }
        ],
        execute: function () {
            SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                SharedModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            http_1.HttpModule
                        ],
                        exports: [
                            // Shared Modules
                            platform_browser_1.BrowserModule,
                            forms_1.FormsModule,
                            forms_1.ReactiveFormsModule,
                            http_1.HttpModule,
                            // Shared Components
                            toast_component_1.ToastComponent,
                            loading_component_1.LoadingComponent
                        ],
                        declarations: [
                            toast_component_1.ToastComponent,
                            loading_component_1.LoadingComponent
                        ],
                        providers: [
                            toast_component_1.ToastComponent
                        ]
                    })
                ], SharedModule);
                return SharedModule;
            }());
            exports_1("SharedModule", SharedModule);
        }
    };
});
//# sourceMappingURL=shared.module.js.map