System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, addressSchema, Address;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            addressSchema = new mongoose.Schema({
                name: String,
                value: {}
            });
            Address = mongoose.model('Address', addressSchema);
            exports_1("default", Address);
        }
    };
});
//# sourceMappingURL=address.js.map