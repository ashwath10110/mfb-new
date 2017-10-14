import * as mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  name: String
});

const Address = mongoose.model('Address', addressSchema);

export default Address;
