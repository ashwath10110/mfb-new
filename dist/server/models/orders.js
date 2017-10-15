"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var orderSchema = new mongoose.Schema({
    customerDetails: {},
    items: [],
    cartTotal: Number,
    deliveryDetials: {
        deliveryBoyDetails: {},
        deliveryDetails: {}
    }
});
var order = mongoose.model('Order', orderSchema);
exports.default = order;
//# sourceMappingURL=orders.js.map