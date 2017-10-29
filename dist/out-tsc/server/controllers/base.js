System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseCtrl;
    return {
        setters: [],
        execute: function () {
            BaseCtrl = /** @class */ (function () {
                function BaseCtrl() {
                    var _this = this;
                    // Get all
                    this.getAll = function (req, res) {
                        _this.model.find({}, function (err, docs) {
                            if (err) {
                                return console.error(err);
                            }
                            res.json(docs);
                        });
                    };
                    // Count all
                    this.count = function (req, res) {
                        _this.model.count(function (err, count) {
                            if (err) {
                                return console.error(err);
                            }
                            res.json(count);
                        });
                    };
                    // Insert
                    this.insert = function (req, res) {
                        var obj = new _this.model(req.body);
                        console.log(obj);
                        obj.save(function (err, item) {
                            // 11000 is the code for duplicate key error
                            if (err && err.code === 11000) {
                                res.sendStatus(400);
                            }
                            if (err) {
                                return console.error(err);
                            }
                            res.status(200).json(item);
                        });
                    };
                    // Get by id
                    this.get = function (req, res) {
                        _this.model.findOne({ _id: req.params.id }, function (err, obj) {
                            if (err) {
                                return console.error(err);
                            }
                            res.json(obj);
                        });
                    };
                    // Update by id
                    this.update = function (req, res) {
                        console.log(req.body);
                        console.log(req.body);
                        console.log('End------------------');
                        _this.model.update({ _id: req.params.id }, { $set: req.body }, function (err, item) {
                            console.log(item);
                            if (err) {
                                return console.error(err);
                            }
                            _this.model.findOne({ _id: req.params.id }, function (err, obj) {
                                if (err) {
                                    return console.error(err);
                                }
                                res.status(200).json(obj);
                            });
                            // res.status(200).json(item);
                        });
                    };
                    // Delete by id
                    this.delete = function (req, res) {
                        _this.model.findOneAndRemove({ _id: req.params.id }, function (err) {
                            if (err) {
                                return console.error(err);
                            }
                            res.sendStatus(200);
                        });
                    };
                }
                return BaseCtrl;
            }());
            exports_1("default", BaseCtrl);
        }
    };
});
//# sourceMappingURL=base.js.map