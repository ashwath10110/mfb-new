System.register(["../models/address", "./base"], function (exports_1, context_1) {
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
    var address_1, base_1, AddressCtrl;
    return {
        setters: [
            function (address_1_1) {
                address_1 = address_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }
        ],
        execute: function () {
            AddressCtrl = /** @class */ (function (_super) {
                __extends(AddressCtrl, _super);
                function AddressCtrl() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.model = address_1.default;
                    return _this;
                }
                return AddressCtrl;
            }(base_1.default));
            exports_1("default", AddressCtrl);
        }
    };
});
//# sourceMappingURL=address.js.map