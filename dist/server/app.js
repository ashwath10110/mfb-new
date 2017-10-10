"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var dotenv = require("dotenv");
var express = require("express");
var morgan = require("morgan");
var mongoose = require("mongoose");
var path = require("path");
var routes_1 = require("./routes");
var app = express();
exports.app = app;
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));
app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(morgan('dev'));
var mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
// var mongoDB = '';
if (process.env.NODE_ENV === 'test') {
    // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
}
else {
    // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';  
}
mongoose.connect(mongoDB, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
    routes_1.default(app);
    app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    if (!module.parent) {
        app.listen(app.get('port'), function () {
            console.log('Angular Full Stack listening on port ' + app.get('port'));
        });
    }
});
//# sourceMappingURL=app.js.map