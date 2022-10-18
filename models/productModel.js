const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  // id: Number,
  // imgUrl: String,
  // title: String,
  // description: String,
  // price: Number,
  id: {
    type: Number,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  }
},
  { timestamps: true }
);

module.exports = mongoose.model("fproduct", productSchema);