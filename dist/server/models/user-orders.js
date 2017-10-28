"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var userOrdersSchema = new mongoose.Schema({
    orderDetails: {},
    cartDetails: {},
    status: false
});
var userOrders = mongoose.model('UserOrders', userOrdersSchema);
exports.default = userOrders;
//# sourceMappingURL=user-orders.js.map