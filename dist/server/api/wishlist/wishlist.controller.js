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
var wishlist_model_1 = require("./wishlist.model");
var base_1 = require("./../base");
var WishlistCtrl = (function (_super) {
    __extends(WishlistCtrl, _super);
    function WishlistCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = wishlist_model_1.default;
        _this.create = function (req, res) {
            req.body.uid = req.user._id;
            _this.insert(req, res);
        };
        _this.productWish = function (req, res) {
            req.query.where = { uid: req.user._id, 'product._id': req.params.pid, 'variant._id': req.params.vid };
            return _this.index(req, res);
        };
        // Gets a list of Wishlists
        _this.my = function (req, res) {
            var q = {};
            if (req.user) {
                q.email = req.user.email;
            }
            else {
                q.name = '~!!@~!~*&^%$#!@@!#asds12'; // Some randome string so that blank value will be returned
            }
            req.query.where = q;
            req.query.sort = '-created';
            return _this.index(req, res);
        };
        // Creates a new Wishlist in the DB
        _this.createOrRemove = function (req, res) {
            var q = _this.toJson(req.body);
            var q1 = {};
            var vm = _this;
            q1 = { 'variant._id': q.variant._id, 'product._id': q.product._id, email: req.user.email, uid: req.user._id };
            wishlist_model_1.default.find(q1).exec().then(function (r) {
                if (r.length > 0) {
                    req.params.id = r[0]._id;
                    vm.delete(req, res);
                }
                else {
                    req.body.uid = req.user._id;
                    req.body.email = req.user.email;
                    vm.insert(req, res);
                }
            });
        };
        return _this;
    }
    return WishlistCtrl;
}(base_1.default));
exports.default = WishlistCtrl;
//# sourceMappingURL=wishlist.controller.js.map