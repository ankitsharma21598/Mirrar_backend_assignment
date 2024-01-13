const Product = require("../models/productModel");

// Controller function to create a new product
const createProduct = async (req, res) => {
  try {
    // Create a new Product instance using request body
    const product = new Product(req.body);
    
    // Log a message indicating that the product is created
    console.log("Product created", req.body);

    // Save the product to the database
    await product.save();

    // Respond with the created product and HTTP status 201 (Created)
    res.status(201).json(product);
  } catch (error) {
    // Handle errors by responding with a 400 status and the error message
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get a product by its ID
const getProductById = async (req, res) => {
  try {
    // Find a product by its ID
    const product = await Product.findById(req.params.id);

    // Respond with the found product
    res.json(product);
  } catch (error) {
    // Handle errors by responding with a 404 status and an error message
    res.status(404).json({ error: "Product not found" });
  }
};

// Controller function to delete a product by its ID
const deleteProductById = async (req, res) => {
  try {
    // Find and delete a product by its ID
    const product = await Product.findByIdAndDelete(req.params.id);

    // Check if the product was not found
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Respond with a success message
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    // Handle errors by responding with a 500 status and an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to get all products
const getAllProducts = async (req, res) => {
  try {
    // Find all products in the database
    const products = await Product.find();

    // Respond with the array of products
    res.json(products);
  } catch (error) {
    // Handle errors by responding with a 500 status and an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller function to search for products based on criteria
const searchProducts = async (req, res) => {
  // Extract search criteria from query parameters
  const { name, description, variantName } = req.query;

  try {
    // Define an object to hold search criteria
    let searchCriteria = {};

    // Add name search criteria if provided
    if (name) {
      searchCriteria.name = { $regex: name, $options: "i" };
    }

    // Add description search criteria if provided
    if (description) {
      searchCriteria.description = { $regex: description, $options: "i" };
    }

    // Add variant name search criteria if provided
    if (variantName) {
      searchCriteria["variants.name"] = { $regex: variantName, $options: "i" };
    }

    // Find products based on the constructed search criteria
    const searchResult = await Product.find(searchCriteria);

    // Respond with the search result
    res.json(searchResult);
  } catch (error) {
    // Handle errors by responding with a 500 status and an error message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Export all controller functions for use in routes
module.exports = {
  createProduct,
  getProductById,
  deleteProductById,
  getAllProducts,
  searchProducts,
};
