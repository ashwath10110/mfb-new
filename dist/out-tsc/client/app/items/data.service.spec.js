/* tslint:disable:no-unused-variable */
System.register(["@angular/core/testing", "./data.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, data_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {/* tslint:disable:no-unused-variable */
            describe('Service: Data', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [data_service_1.DataService]
                    });
                });
                it('should ...', testing_1.inject([data_service_1.DataService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=data.service.spec.js.map