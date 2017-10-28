System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, itemSchema, item;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            itemSchema = new mongoose.Schema({
                name: String,
                nameForTelugu: String,
                nameForHindi: String,
                type: String,
                countPerKg: String,
                averageWeightPerPiece: String,
                price: String,
                imageForShowCase: String,
                imageForCart: String,
                available: String,
                description: String
            });
            item = mongoose.model('itemSchema', itemSchema);
            exports_1("default", item);
        }
    };
});
//# sourceMappingURL=item.js.map