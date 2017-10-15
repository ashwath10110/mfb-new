import * as mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	customerDetails: {},
	items: [],
	cartTotal: Number,
	deliveryDetials: {
		deliveryBoyDetails: {},
		deliveryDetails: {}
	}
});

const order = mongoose.model('Order', orderSchema);

export default order;
