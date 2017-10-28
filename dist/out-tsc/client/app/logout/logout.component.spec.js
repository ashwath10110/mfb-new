System.register(["@angular/core/testing", "./logout.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, logout_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            }
        ],
        execute: function () {
            describe('LogoutComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [logout_component_1.LogoutComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(logout_component_1.LogoutComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                /*it('should create', () => {
                  expect(component).toBeTruthy();
                });*/
            });
        }
    };
});
//# sourceMappingURL=logout.component.spec.js.map