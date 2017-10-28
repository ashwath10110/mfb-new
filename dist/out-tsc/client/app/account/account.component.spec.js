System.register(["@angular/core/testing", "./account.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, account_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            }
        ],
        execute: function () {
            describe('AccountComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [account_component_1.AccountComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(account_component_1.AccountComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                /*it('should be created', () => {
                  expect(component).toBeTruthy();
                });*/
            });
        }
    };
});
//# sourceMappingURL=account.component.spec.js.map