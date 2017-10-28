import * as mongoose from 'mongoose';

const userOrdersSchema = new mongoose.Schema({
	orderDetails: {},
	cartDetails: {},
	status: false
});

const userOrders = mongoose.model('UserOrders', userOrdersSchema);

export default userOrders;
