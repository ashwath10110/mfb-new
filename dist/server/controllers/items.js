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
var item_1 = require("../models/item");
var base_1 = require("./base");
var ItemsCtrl = (function (_super) {
    __extends(ItemsCtrl, _super);
    function ItemsCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = item_1.default;
        _this.isCartValid = function (req, res) {
            var products = req.body.products;
            _this.model.find({}, function (err, docs) {
                if (err) {
                    res.status(503).json({
                        status: true,
                        data: {
                            value: false
                        }
                    });
                }
                var flag = true;
                var i = 0;
                var j = 0;
                for (i = 0; i < products.length; i++) {
                    for (j = 0; j < docs.length; j++) {
                        console.log("Hi");
                        if (products[i]['product']._id == docs[j]._id) {
                            if (docs[j].available == 'false') {
                                flag = false;
                            }
                        }
                    }
                }
                if (i == products.length) {
                    if (flag == true) {
                        res.status(200).json({
                            status: true,
                            data: {
                                value: true
                            }
                        });
                    }
                    else {
                        res.status(200).json({
                            status: true,
                            data: {
                                value: false
                            }
                        });
                    }
                }
            });
        };
        return _this;
    }
    return ItemsCtrl;
}(base_1.default));
exports.default = ItemsCtrl;
//# sourceMappingURL=items.js.map