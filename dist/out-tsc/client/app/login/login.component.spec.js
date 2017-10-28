System.register(["@angular/core/testing", "./login.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, login_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            }
        ],
        execute: function () {
            describe('LoginComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [login_component_1.LoginComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                /*it('should create', () => {
                  expect(component).toBeTruthy();
                });
              
                it('should display the string "Login" in h4', () => {
                  const el = fixture.debugElement.query(By.css('h4')).nativeElement;
                  expect(el.textContent).toContain('Login');
                });*/
            });
        }
    };
});
//# sourceMappingURL=login.component.spec.js.map