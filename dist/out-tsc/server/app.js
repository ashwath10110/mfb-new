System.register(["body-parser", "dotenv", "express", "morgan", "mongoose", "path", "./routes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bodyParser, dotenv, express, morgan, mongoose, path, routes_1, app, mongoDB, db;
    return {
        setters: [
            function (bodyParser_1) {
                bodyParser = bodyParser_1;
            },
            function (dotenv_1) {
                dotenv = dotenv_1;
            },
            function (express_1) {
                express = express_1;
            },
            function (morgan_1) {
                morgan = morgan_1;
            },
            function (mongoose_1) {
                mongoose = mongoose_1;
            },
            function (path_1) {
                path = path_1;
            },
            function (routes_1_1) {
                routes_1 = routes_1_1;
            }
        ],
        execute: function () {
            app = express();
            exports_1("app", app);
            dotenv.load({ path: '.env' });
            app.set('port', (process.env.PORT || 3000));
            app.use('/', express.static(path.join(__dirname, '../public')));
            app.use(bodyParser.json());
            // app.use(bodyParser.urlencoded({ extended: false }));
            app.use(bodyParser.json({ limit: '50mb' }));
            app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
            app.use(morgan('dev'));
            mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
            // var mongoDB = 'mongodb://localhost:27017/angularfullstack';
            // var mongoDB = '';
            console.log(mongoDB);
            if (process.env.NODE_ENV === 'test') {
                // mongoDB = localMongoDb;
                // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
            }
            else {
                // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';  
            }
            mongoose.connect(mongoDB, {
                useMongoClient: true
            });
            db = mongoose.connection;
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
        }
    };
});
//# sourceMappingURL=app.js.map