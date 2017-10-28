System.register(["@angular/core/testing", "@angular/platform-browser", "./toast.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, platform_browser_1, toast_component_1;
    return {
        setters: [
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (toast_component_1_1) {
                toast_component_1 = toast_component_1_1;
            }
        ],
        execute: function () {
            describe('ToastComponent', function () {
                var component;
                var fixture;
                beforeEach(testing_1.async(function () {
                    testing_1.TestBed.configureTestingModule({
                        declarations: [toast_component_1.ToastComponent]
                    })
                        .compileComponents();
                }));
                beforeEach(function () {
                    fixture = testing_1.TestBed.createComponent(toast_component_1.ToastComponent);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                });
                it('should create', function () {
                    expect(component).toBeTruthy();
                });
                it('should not have message set nor DOM element', function () {
                    expect(component.message.body).toBeFalsy();
                    expect(component.message.type).toBeFalsy();
                    var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
                    expect(de).toBeNull();
                });
                it('should set the message and create the DOM element', function () {
                    var mockMessage = {
                        body: 'test message',
                        type: 'warning'
                    };
                    component.setMessage(mockMessage.body, mockMessage.type);
                    expect(component.message.body).toBe(mockMessage.body);
                    expect(component.message.type).toBe(mockMessage.type);
                    fixture.detectChanges();
                    var de = fixture.debugElement.query(platform_browser_1.By.css('div'));
                    var el = de.nativeElement;
                    expect(de).toBeDefined();
                    expect(el.textContent).toContain(mockMessage.body);
                    expect(el.className).toContain(mockMessage.type);
                });
            });
        }
    };
});
//# sourceMappingURL=toast.component.spec.js.map