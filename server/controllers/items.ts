import item from '../models/item';
import BaseCtrl from './base';

export default class ItemsCtrl extends BaseCtrl {

	model = item;
	// console.log(this);

	// getByType = (req, res) => {
		// console.log(req.params.type);
		// this.model.find({ 'type': 'req.params.type' }, (err, docs) => {
		// 	if (err) { return console.error(err); }
		// 	res.json(docs);
		// });
	// }
}
