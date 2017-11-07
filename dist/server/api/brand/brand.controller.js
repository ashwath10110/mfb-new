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
var brand_model_1 = require("./brand.model");
var base_1 = require("./../base");
var BrandsCtrl = (function (_super) {
    __extends(BrandsCtrl, _super);
    function BrandsCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = brand_model_1.default;
        _this.my = function (req, res) {
            var q = { uid: req.user._id };
            if (req.query.search) {
                q.name = new RegExp(req.query.search.name.toLowerCase(), 'i');
            }
            req.query.where = q;
            req.query.sort = '-updatedAt';
            _this.index(req, res);
        };
        _this.create = function (req, res) {
            req.body.uid = req.user._id;
            _this.insert(req, res);
        };
        return _this;
    }
    return BrandsCtrl;
}(base_1.default));
exports.default = BrandsCtrl;
//# sourceMappingURL=brand.controller.js.map