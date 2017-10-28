System.register(["@angular/core/testing", "./admin.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, admin_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            }
        ],
        execute: function () {
            describe('AdminComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [admin_component_1.AdminComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(admin_component_1.AdminComponent);
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
//# sourceMappingURL=admin.component.spec.js.map