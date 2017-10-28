System.register(["jsonwebtoken", "../models/user", "./base", "path"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var jwt, user_1, base_1, path, UserCtrl;
    return {
        setters: [
            function (jwt_1) {
                jwt = jwt_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (base_1_1) {
                base_1 = base_1_1;
            },
            function (path_1) {
                path = path_1;
            }
        ],
        execute: function () {
            UserCtrl = /** @class */ (function (_super) {
                __extends(UserCtrl, _super);
                function UserCtrl() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.model = user_1.default;
                    _this.login = function (req, res) {
                        _this.model.findOne({ email: req.body.email }, function (err, user) {
                            if (!user) {
                                return res.sendStatus(403);
                            }
                            user.comparePassword(req.body.password, function (error, isMatch) {
                                if (!isMatch) {
                                    return res.sendStatus(403);
                                }
                                var token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                                res.status(200).json({ token: token });
                            });
                        });
                    };
                    _this.createHash = function (req, res) {
                        var salt = 'eCwWELxi';
                        var hash = {};
                        // var hash = sha512(req.body.preHashString + salt);
                        // console.log(hash);
                        res.send({ success: true, hash: hash });
                    };
                    _this.PaymentStatus = function (req, res) {
                        console.log(req.body);
                        res.sendFile(path.join(__dirname, '../public/index.html'));
                        // res.send({success : true, status: req.body.status});
                    };
                    return _this;
                }
                return UserCtrl;
            }(base_1.default));
            exports_1("default", UserCtrl);
        }
    };
});
//# sourceMappingURL=user.js.map