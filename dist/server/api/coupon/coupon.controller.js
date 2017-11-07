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
Object.defineProperty(exports, "__esModule", { value: true });
var coupon_model_1 = require("./coupon.model");
var base_1 = require("./../base");
var CouponCtrl = (function (_super) {
    __extends(CouponCtrl, _super);
    function CouponCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = coupon_model_1.default;
        _this.my = function (req, res) {
            req.query.where = { uid: req.user._id };
            req.query.sort = '-updatedAt';
            _this.index(req, res);
        };
        _this.create = function (req, res) {
            req.body.uid = req.user._id;
            _this.insert(req, res);
        };
        return _this;
    }
    return CouponCtrl;
}(base_1.default));
exports.default = CouponCtrl;
//# sourceMappingURL=coupon.controller.js.map