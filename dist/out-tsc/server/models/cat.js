System.register(["mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mongoose, catSchema, Cat;
    return {
        setters: [
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            catSchema = new mongoose.Schema({
                name: String,
                weight: Number,
                age: Number
            });
            Cat = mongoose.model('Cat', catSchema);
            exports_1("default", Cat);
        }
    };
});
//# sourceMappingURL=cat.js.map