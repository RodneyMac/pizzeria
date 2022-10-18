const Product = require("../models/productModel");
const mongoose = require("mongoose");

const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({createdAt: - 1});
  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "No se encontró el producto"});
  }
  const product = await Product.findById(id);
  if(!product) {
    return res.status(404).json({error: "No se encontró el producto"});
  }
  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const {id, imgUrl, title, description, price} = req.body;
  // let emptyProduct = []
  // if(!fproduct) {
  //   emptyProduct.push("fproduct");
  // }
  // if(emptyProduct.length === 0) {
  //   return res.status(400).json({error: "No se encuentra el producto", emptyProduct});
  // }
  try {
    const product = await Product.create({id, imgUrl, title, description, price});
    res.status(200).json(product);
  } catch(error) {
    res.status(400).json({error: error.message});
  }
}

const deleteProduct = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: "No se encontró el producto"});
  }
  const product = await Product.findOneAndDelete({
    id: _id,
  }, {...req.body,});
  if(!product) {
    return res.status(400).json({error: "No se encontró el producto"});
  }
  res.status(200).json(product);
}

const updateProduct = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: "No se encontró el producto"});
  }
  const product = await Product.findOneAndUpdate({
    _id: id,
  }, {...req.body});
  if(!product) {
    return res.status(400).json({error: "No se encontró el producto"});
  }
  res.status(200).json(product);
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
};

