import * as express from 'express';

import UserCtrl from './controllers/user';
import User from './models/user';

import CatCtrl from './controllers/cat';
import Cat from './models/cat';

import ItemsCtrl from './controllers/items';
import item from './models/item';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const itemsCtrl = new ItemsCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Items
  // itemsCtrl.getByType('');
  router.route('/items').get(itemsCtrl.getAll);
  router.route('/items/count').get(itemsCtrl.count);
  router.route('/items').post(itemsCtrl.insert);
  router.route('/items/:id').get(itemsCtrl.get);
  // router.route('/items/:type').get(itemsCtrl.getByType);
  router.route('/items/:id').put(itemsCtrl.update);
  router.route('/items/:id').delete(itemsCtrl.delete);

  // Users
  router.route('/login').post(userCtrl.login);
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  router.route('/createHash').post(userCtrl.createHash);
  router.route('/PaymentStatus').post(userCtrl.PaymentStatus);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
