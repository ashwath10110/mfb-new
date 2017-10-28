import userOrder from '../models/user-orders';
import BaseCtrl from './base';

export default class UserOrdersCtrl extends BaseCtrl {
  model = userOrder;
}
