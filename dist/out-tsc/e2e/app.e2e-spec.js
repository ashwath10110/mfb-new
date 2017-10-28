System.register(["./app.po"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_po_1;
    return {
        setters: [
            function (app_po_1_1) {
                app_po_1 = app_po_1_1;
            }
        ],
        execute: function () {
            describe('angular2-full-stack App', function () {
                var page;
                beforeEach(function () {
                    page = new app_po_1.Angular2FullStackPage();
                });
                it('should display the navbar correctly', function () {
                    page.navigateTo();
                    expect(page.getNavbarElement(0)).toEqual('Home');
                    expect(page.getNavbarElement(1)).toEqual('Cats');
                    expect(page.getNavbarElement(2)).toEqual('Login');
                    expect(page.getNavbarElement(3)).toEqual('Register');
                });
            });
        }
    };
});
//# sourceMappingURL=app.e2e-spec.js.map