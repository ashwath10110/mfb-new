"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var itemSchema = new mongoose.Schema({
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
var item = mongoose.model('itemSchema', itemSchema);
exports.default = item;
//# sourceMappingURL=item.js.map