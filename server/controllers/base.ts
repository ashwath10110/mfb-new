abstract class BaseCtrl {

  abstract model: any;

  // Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    console.log(obj);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      console.log(obj);
      res.json(obj);
    });
  }

  // Update by id
  update = (req, res) => {
    // console.log(req.body);
    // console.log(req.body);
    // console.log('End------------------');
    this.model.update({ _id: req.params.id }, { $set: req.body }, (err, item) => {
      // console.log(item);
      if (err) {
        return console.error(err);
      }
      this.model.findOne({ _id: req.params.id }, (err, obj) => {
        if (err) { return console.error(err); }
        res.status(200).json(obj);
      });
      // res.status(200).json(item);
    });
  }

  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}

export default BaseCtrl;
