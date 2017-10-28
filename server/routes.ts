import * as express from 'express';

import UserCtrl from './controllers/user';
import User from './models/user';

import CatCtrl from './controllers/cat';
import Cat from './models/cat';

import AddressCtrl from './controllers/address';
import address from './models/address';

import OrderCtrl from './controllers/orders';
import order from './models/orders';

import UserOrdersCtrl from './controllers/user-orders';
import userOrders from './models/user-orders';

import ItemsCtrl from './controllers/items';
import item from './models/item';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const itemsCtrl = new ItemsCtrl();
  const addressCtrl = new AddressCtrl();
  const orderCtrl = new OrderCtrl();
  const userOrdersCtrl = new UserOrdersCtrl();

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
  router.route('/items/:id').put(itemsCtrl.update);
  router.route('/items/:id').delete(itemsCtrl.delete);
  router.route('/items/isCartValid').post(itemsCtrl.isCartValid);

  //Address
  router.route('/address').get(addressCtrl.getAll);
  router.route('/address').post(addressCtrl.insert);
  router.route('/address/:id').get(addressCtrl.get);
  router.route('/address/:id').put(addressCtrl.update);
  router.route('/address/:id').delete(addressCtrl.delete);

  //All Orders
  router.route('/order').get(orderCtrl.getAll);
  router.route('/order').post(orderCtrl.insert);
  router.route('/order/count').get(orderCtrl.count);
  router.route('/order/:id').get(orderCtrl.get);
  router.route('/order/:id').put(orderCtrl.update);
  router.route('/order/:id').delete(orderCtrl.delete);

  //User Orders
  router.route('/user-orders').get(userOrdersCtrl.getAll);
  router.route('/user-orders').post(userOrdersCtrl.insert);
  router.route('/user-orders/count').get(userOrdersCtrl.count);
  router.route('/user-orders/:id').get(userOrdersCtrl.get);
  router.route('/user-orders/:id').put(userOrdersCtrl.update);
  router.route('/user-orders/:id').delete(userOrdersCtrl.delete);

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
