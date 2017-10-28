System.register(["@angular/core", "@angular/core/testing", "./app.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, testing_1, app_component_1;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }
        ],
        execute: function () {
            describe('Component: App', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [app_component_1.AppComponent],
                        schemas: [core_1.NO_ERRORS_SCHEMA]
                    })
                        .compileComponents().then(function () {
                        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
                        component = fixture.componentInstance;
                        fixture.detectChanges();
                    });
                }));
            });
        }
    };
});
//# sourceMappingURL=app.component.spec.js.map