System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, userOrdersSchema, userOrders;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            userOrdersSchema = new mongoose.Schema({
                orderDetails: {},
                cartDetails: {},
                status: false
            });
            userOrders = mongoose.model('UserOrders', userOrdersSchema);
            exports_1("default", userOrders);
        }
    };
});
//# sourceMappingURL=user-orders.js.map