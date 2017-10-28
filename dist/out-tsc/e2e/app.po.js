System.register(["protractor"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var protractor_1, Angular2FullStackPage;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            Angular2FullStackPage = /** @class */ (function () {
                function Angular2FullStackPage() {
                }
                Angular2FullStackPage.prototype.navigateTo = function () {
                    return protractor_1.browser.get('/');
                };
                Angular2FullStackPage.prototype.getNavbarElement = function (n) {
                    return protractor_1.$$('app-root a').get(n).getText();
                };
                return Angular2FullStackPage;
            }());
            exports_1("Angular2FullStackPage", Angular2FullStackPage);
        }
    };
});
//# sourceMappingURL=app.po.js.map