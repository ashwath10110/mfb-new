import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
let session = require('express-session');
import setRoutes from './routes';
let compression = require('compression');
const app = express();
app.use(compression());
dotenv.load({ path: '.env' });
// app.set('port', (process.env.PORT || 3000));
app.set('port', (3000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET || 'materialshop-secret'
}));
let passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, '../client')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db', { useMongoClient: true });
const db = mongoose.connection;
(<any>mongoose).Promise = global.Promise;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  require('./seed'); // Seed database with some sample data
  setRoutes(app);

  app.listen(app.get('port'), () => {
    console.log('ShopNx listening on port ' + app.get('port'));
  });

});

export { app };
