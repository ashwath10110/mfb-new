System.register(["@angular/core", "./../app.service", "@angular/router"], function (exports_1, context_1) {
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
    var core_1, app_service_1, router_1, TabsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            TabsComponent = /** @class */ (function () {
                function TabsComponent(router, appService) {
                    this.router = router;
                    this.appService = appService;
                    this.appService.selectedTab = 'exotic-vegetables';
                    this.router.navigate(['items', 'exotic-vegetables']);
                }
                TabsComponent.prototype.ngOnInit = function () {
                };
                TabsComponent.prototype.openTab = function (event, option) {
                    console.log(option);
                    this.appService.selectedTab = option;
                    this.router.navigate(['items', option]);
                };
                TabsComponent = __decorate([
                    core_1.Component({
                        selector: 'app-tabs',
                        templateUrl: './tabs.component.html',
                        styleUrls: ['./tabs.component.css']
                    }),
                    __metadata("design:paramtypes", [router_1.Router,
                        app_service_1.AppService])
                ], TabsComponent);
                return TabsComponent;
            }());
            exports_1("TabsComponent", TabsComponent);
        }
    };
});
//# sourceMappingURL=tabs.component.js.map