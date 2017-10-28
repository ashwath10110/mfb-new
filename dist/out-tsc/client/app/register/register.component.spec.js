System.register(["@angular/core/testing", "./register.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, register_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            }
        ],
        execute: function () {
            describe('RegisterComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [register_component_1.RegisterComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(register_component_1.RegisterComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                /*it('should create', () => {
                  expect(component).toBeTruthy();
                });
              
                it('should display the string "Register" in h4', () => {
                  const el = fixture.debugElement.query(By.css('h4')).nativeElement;
                  expect(el.textContent).toContain('Register');
                });*/
            });
        }
    };
});
//# sourceMappingURL=register.component.spec.js.map