import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
// import sha512 from 'js-sha512';
import setRoutes from './routes';

const app = express();
dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(morgan('dev'));

var mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
// var mongoDB = 'mongodb://localhost:27017/angularfullstack';
// var mongoDB = '';
console.log(mongoDB);
if (process.env.NODE_ENV === 'test') {
  
  // mongoDB = localMongoDb;
  // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';
}
else{
  // mongoDB = 'mongodb://admin:admin@ds111895.mlab.com:11895/mfb-db';  
}

mongoose.connect(mongoDB, {
  useMongoClient: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
   
   console.log('Connected to MongoDB');

  setRoutes(app);

  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  if (!module.parent) {
    app.listen(app.get('port'), () => {
      console.log('Angular Full Stack listening on port ' + app.get('port'));
    });
  }
});

export { app };
