// models/product.js
const { Schema, model } = require('mongoose');

const baseOptions = {
  discriminatorKey: 'category',
  collection: 'products', // all in one collection
};

const BaseProductSchema = new Schema({
  productName: { type: String, required: true },
  price: Number,
  details: String,
  star: Number,
  productImage: String,
  subCategory: String, // e.g. “mobile” or “fiction”
}, baseOptions);

const Product = model('Product', BaseProductSchema);

// Electronics-specific fields
const Electronics = Product.discriminator('electronics', new Schema({
  brand: String,
  model: String,
  warrantyPeriod: Number,
}));
const Cloth = Product.discriminator('cloth', new Schema({
  brand: String,
  size: String,
  color: String,
  material: String,
 
}));

// Books-specific fields
const Books = Product.discriminator('books', new Schema({
  author: String,
  publisher: String,
  isbn: String,
}));

module.exports = { Product, Electronics, Books,Cloth };
