System.register(["bcryptjs", "mongoose"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bcrypt, mongoose, userSchema, User;
    return {
        setters: [
            function (bcrypt_1) {
                bcrypt = bcrypt_1;
            },
            function (mongoose_1) {
                mongoose = mongoose_1;
            }
        ],
        execute: function () {
            userSchema = new mongoose.Schema({
                username: String,
                password: String,
                email: { type: String, unique: true, lowercase: true, trim: true },
                role: String,
                addresses: [],
                orders: [],
                contactDetails: {}
            });
            // Before saving the user, hash the password
            userSchema.pre('save', function (next) {
                var user = this;
                if (!user.isModified('password')) {
                    return next();
                }
                bcrypt.genSalt(10, function (err, salt) {
                    if (err) {
                        return next(err);
                    }
                    bcrypt.hash(user.password, salt, function (error, hash) {
                        if (error) {
                            return next(error);
                        }
                        user.password = hash;
                        next();
                    });
                });
            });
            userSchema.methods.comparePassword = function (candidatePassword, callback) {
                bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
                    if (err) {
                        return callback(err);
                    }
                    callback(null, isMatch);
                });
            };
            // Omit the password when returning a user
            userSchema.set('toJSON', {
                transform: function (doc, ret, options) {
                    delete ret.password;
                    return ret;
                }
            });
            User = mongoose.model('User', userSchema);
            exports_1("default", User);
        }
    };
});
//# sourceMappingURL=user.js.map