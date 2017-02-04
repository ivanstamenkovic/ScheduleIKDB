/**
 * Created by Ivan on 2/4/2017.
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost', function (err) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Mongoose connected.");
  }
});