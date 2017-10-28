System.register(["@angular/core/testing", "@angular/platform-browser", "./loading.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, platform_browser_1, loading_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (loading_component_1_1) {
                loading_component_1 = loading_component_1_1;
            }
        ],
        execute: function () {
            describe('LoadingComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [loading_component_1.LoadingComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(loading_component_1.LoadingComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should be created', function () {
                    expect(component).toBeTruthy();
                });
                it('should not show the DOM element', function () {
                    var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
                    expect(de).toBeNull();
                });
                it('should show the DOM element', function () {
                    component.condition = true;
                    fixture.detectChanges();
                    expect(component).toBeTruthy();
                    var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
                    var el = de.nativeElement;
                    expect(de).toBeDefined();
                    expect(el.textContent).toContain('Loading...');
                });
            });
        }
    };
});
//# sourceMappingURL=loading.component.spec.js.map