import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';
import * as sha512 from 'js-sha512';
import * as path from 'path';

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {
      if (!user) { return res.sendStatus(403); }
      user.comparePassword(req.body.password, (error, isMatch) => {
        if (!isMatch) { return res.sendStatus(403); }
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
        res.status(200).json({ token: token });
      });
    });
  }

  createHash = (req, res) => {
    var salt = 'eCwWELxi';
    var hash = {};
    var hash = sha512(req.body.preHashString + salt);
    console.log(hash);
    res.send({success : true, hash: hash});
  }

  PaymentStatus = (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../public/index.html'));
    // res.send({success : true, status: req.body.status});
  }

}
