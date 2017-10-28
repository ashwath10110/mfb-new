System.register(["../models/orders", "./base"], function (exports_1, context_1) {
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
    var orders_1, base_1, OrdersCtrl;
    return {
        setters: [
            function (orders_1_1) {
                orders_1 = orders_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            }
        ],
        execute: function () {
            OrdersCtrl = /** @class */ (function (_super) {
                __extends(OrdersCtrl, _super);
                function OrdersCtrl() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.model = orders_1.default;
                    return _this;
                }
                return OrdersCtrl;
            }(base_1.default));
            exports_1("default", OrdersCtrl);
        }
    };
});
//# sourceMappingURL=orders.js.map