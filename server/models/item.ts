import * as mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
	name: String,
	nameForTelugu: String,
	nameForHindi: String,
	type: String,
	countPerKg: String,
	averageWeightPerPiece: String,
	price: String,
	imageForShowCase: String,
	imageForCart: String,
	available: String,
	description: String
});


const item = mongoose.model('itemSchema', itemSchema);

export default item;
