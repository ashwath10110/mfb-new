System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, orderSchema, order;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            orderSchema = new mongoose.Schema({
                customerDetails: {},
                items: [],
                cartTotal: Number,
                deliveryDetials: {
                    deliveryBoyDetails: {},
                    deliveryDetails: {}
                }
            });
            order = mongoose.model('Order', orderSchema);
            exports_1("default", order);
        }
    };
});
//# sourceMappingURL=orders.js.map