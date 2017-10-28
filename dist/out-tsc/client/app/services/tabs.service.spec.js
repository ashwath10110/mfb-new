System.register(["@angular/core/testing", "./tabs.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, tabs_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (tabs_service_1_1) {
                tabs_service_1 = tabs_service_1_1;
            }
        ],
        execute: function () {
            describe('TabsService', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [tabs_service_1.TabsService]
                    });
                });
                it('should be created', testing_1.inject([tabs_service_1.TabsService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=tabs.service.spec.js.map