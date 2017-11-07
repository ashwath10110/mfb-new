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
var payment_method_model_1 = require("./payment-method.model");
var base_1 = require("./../base");
var PaymentMethodCtrl = (function (_super) {
    __extends(PaymentMethodCtrl, _super);
    function PaymentMethodCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = payment_method_model_1.default;
        _this.my = function (req, res) {
            req.query.where = { uid: req.user._id };
            req.query.sort = '-updatedAt';
            _this.index(req, res);
        };
        _this.create = function (req, res) {
            req.body.uid = req.user._id;
            _this.insert(req, res);
        };
        //Get list of active PaymentMethods
        _this.active = function (req, res) {
            payment_method_model_1.default.find({ active: true }).exec(function (err, PaymentMethods) {
                if (err) {
                    return this.handleError(res, err);
                }
                return res.status(200).json(PaymentMethods);
            });
        };
        return _this;
    }
    return PaymentMethodCtrl;
}(base_1.default));
exports.default = PaymentMethodCtrl;
//# sourceMappingURL=payment-method.controller.js.map