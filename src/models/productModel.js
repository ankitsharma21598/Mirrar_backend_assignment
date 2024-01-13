const mongoose = require('mongoose');

// Define a Mongoose schema for product variants
const variantSchema = new mongoose.Schema({
  name: String,               // Name of the product variant
  sku: String,                // Stock Keeping Unit (SKU) for the variant
  additionalCost: Number,     // Additional cost for this variant
  stockCount: Number,         // Stock count for this variant
});

// Define a Mongoose schema for products
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the product (required)
  description: String,                      // Description of the product
  price: { type: Number, required: true },  // Price of the product (required)
  variants: [variantSchema],                // Array of product variants
});

// Create a Mongoose model based on the product schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model for use in other files
module.exports = Product;
