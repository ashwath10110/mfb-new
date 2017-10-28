System.register(["../models/cat", "./base"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var cat_1, base_1, CatCtrl;
    return {
        setters: [
            function (cat_1_1) {
                cat_1 = cat_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }
        ],
        execute: function () {
            CatCtrl = /** @class */ (function (_super) {
                __extends(CatCtrl, _super);
                function CatCtrl() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.model = cat_1.default;
                    return _this;
                }
                return CatCtrl;
            }(base_1.default));
            exports_1("default", CatCtrl);
        }
    };
});
//# sourceMappingURL=cat.js.map