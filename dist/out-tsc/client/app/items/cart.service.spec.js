/* tslint:disable:no-unused-variable */
System.register(["@angular/core/testing", "./cart.service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, cart_service_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cart_service_1_1) {
                cart_service_1 = cart_service_1_1;
            }
        ],
        execute: function () {/* tslint:disable:no-unused-variable */
            describe('Service: Cart', function () {
                beforeEach(function () {
                    testing_1.TestBed.configureTestingModule({
                        providers: [cart_service_1.CartService]
                    });
                });
                it('should ...', testing_1.inject([cart_service_1.CartService], function (service) {
                    expect(service).toBeTruthy();
                }));
            });
        }
    };
});
//# sourceMappingURL=cart.service.spec.js.map