const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

// Setup and teardown for testing the database
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/testDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

// Test suite for product creation endpoint
describe('POST /api/products', () => {
  // Test case: Successful product creation
  it('should create a new product', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        price: 29.99,
      });

    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test Product');
  });

  // Test case: Invalid product data for creation
  it('should return 400 for invalid product data', async () => {
    const response = await request(app)
      .post('/api/products')
      .send({
        // Missing required fields
      });

    expect(response.status).toBe(400);
  });
});

// Test suite for deleting a product by ID endpoint
describe('DELETE /api/products/:id', () => {
  // Test case: Successful product deletion
  it('should delete a product by ID', async () => {
    // Assuming a valid product ID exists in the test database
    const product = await request(app)
      .post('/api/products')
      .send({
        name: 'Product to Delete',
        price: 39.99,
      });

    const response = await request(app)
      .delete(`/api/products/${product.body._id}`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Product deleted successfully');
  });

  // Test case: Product not found for deletion
  it('should return 404 if product not found for deletion', async () => {
    const invalidProductId = 'invalidID';
    const response = await request(app)
      .delete(`/api/products/${invalidProductId}`);

    expect(response.status).toBe(404);
  });
});

// Test suite for getting all products endpoint
describe('GET /api/products', () => {
  // Test case: Retrieve all products
  it('should get all products', async () => {
    const response = await request(app)
      .get('/api/products');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

// Test suite for searching products based on criteria endpoint
describe('GET /api/search', () => {
  // Test case: Search for products by name
  it('should search for products by name', async () => {
    const response = await request(app)
      .get('/api/search')
      .query({ name: 'Test' });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  // Test case: Search for products by variant name
  it('should search for products by variant name', async () => {
    const response = await request(app)
      .get('/api/search')
      .query({ variantName: 'Variant' });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
