import item from '../models/item';
import BaseCtrl from './base';

export default class ItemsCtrl extends BaseCtrl {

	model = item;

	isCartValid = (req, res) => {

		let products = req.body.products;
		this.model.find({}, (err, docs) => {
			if (err) {
				res.status(503).json({
					status: true,
					data: {
						value: false
					}
				});
			}
			let flag = true;
			var i = 0;
			var j = 0;

			for (i = 0; i < products.length; i++) {
				for (j = 0; j < docs.length; j++) {
					console.log("Hi");
					if (products[i]._id == docs[j]._id) {
						if (docs[j].available == 'false') {
							flag = false;
						}
					}
				}
			}

			if (i == products.length) {
				if (flag == true) {
					res.status(200).json({
						status: true,
						data: {
							value: true
						}
					});
				} else {
					res.status(200).json({
						status: true,
						data: {
							value: false
						}
					});
				}
			}
		});
	}
}
