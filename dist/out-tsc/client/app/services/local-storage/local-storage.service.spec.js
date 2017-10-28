System.register(["@angular/core/testing", "./local-storage.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, local_storage_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (local_storage_service_1_1) {
                local_storage_service_1 = local_storage_service_1_1;
            }
        ],
        execute: function () {
            describe('LocalStorageService', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [local_storage_service_1.LocalStorageService]
                    });
                });
                it('should be created', testing_1.inject([local_storage_service_1.LocalStorageService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=local-storage.service.spec.js.map