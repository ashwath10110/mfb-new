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
var media_model_1 = require("./media.model");
var base_1 = require("./../base");
var MediaCtrl = (function (_super) {
    __extends(MediaCtrl, _super);
    function MediaCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = media_model_1.default;
        _this.my = function (req, res) {
            req.query.where = { uid: req.user._id };
            req.query.sort = '-updatedAt';
            _this.index(req, res);
        };
        // Creates a new Media in the DB
        _this.create = function (req, res) {
            req.body = req.files.file;
            req.body.uid = req.user._id;
            req.body.uname = req.user.name;
            req.body.uemail = req.user.email;
            _this.insert(req, res);
        };
        return _this;
    }
    return MediaCtrl;
}(base_1.default));
exports.default = MediaCtrl;
//# sourceMappingURL=media.controller.js.map