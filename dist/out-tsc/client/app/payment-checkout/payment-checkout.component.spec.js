System.register(["@angular/core/testing", "./payment-checkout.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, payment_checkout_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (payment_checkout_component_1_1) {
                payment_checkout_component_1 = payment_checkout_component_1_1;
            }
        ],
        execute: function () {
            describe('PaymentCheckoutComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [payment_checkout_component_1.PaymentCheckoutComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(payment_checkout_component_1.PaymentCheckoutComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
            });
        }
    };
});
//# sourceMappingURL=payment-checkout.component.spec.js.map