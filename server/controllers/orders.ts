import Order from '../models/orders';
import BaseCtrl from './base';

export default class OrdersCtrl extends BaseCtrl {
  model = Order;
}
