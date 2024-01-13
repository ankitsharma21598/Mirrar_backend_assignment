# E-Commerce API (Node.js)

This project is a RESTful API for an e-commerce system, implemented using Node.js. The API provides functionalities for managing products, including product variants, and a search endpoint for querying products based on name, description, or variant name.

## Features

1. **Product and Product Variant CRUD Operations:**
    - Endpoints to create, update, delete, and retrieve products.
    - Products have attributes such as name, description, price, and can have multiple variants.
    - Variants include name, SKU, additional cost compared to the base product cost, and stock count.
    - The API handles creating, updating, and deleting variants when interacting with products.

2. **Search Functionality:**
    - An endpoint that allows searching products by product name, description, or variant name.

3. **Test Driven Development (TDD):**
    - Tests have been written for the model to ensure data is stored and retrieved correctly.
    - Tests have been written for each endpoint to ensure their functionality.
    - Tests have been written to ensure the search functionality works as expected.

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB or any other database supported by your Node.js framework (e.g., Mongoose for MongoDB)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/e-commerce-api-nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-commerce-api-nodejs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

The API should now be accessible at `http://localhost:3000`.

## API Documentation

For detailed API documentation, refer to the Postman collection : https://documenter.getpostman.com/view/28236734/2s9YsNdpxt

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Create a pull request.
    