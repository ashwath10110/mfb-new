System.register(["@angular/core/testing", "@angular/platform-browser", "./about.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, platform_browser_1, about_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }
        ],
        execute: function () {
            describe('Component: About', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [about_component_1.AboutComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(about_component_1.AboutComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
                it('should display the string "About" in h4', function () {
                    var el = fixture.debugElement.query(platform_browser_1.By.css('h4')).nativeElement;
                    expect(el.textContent).toContain('About');
                });
            });
        }
    };
});
//# sourceMappingURL=about.component.spec.js.map