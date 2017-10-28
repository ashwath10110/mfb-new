"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var addressSchema = new mongoose.Schema({
    name: String,
    value: {}
});
var Address = mongoose.model('Address', addressSchema);
exports.default = Address;
//# sourceMappingURL=address.js.map