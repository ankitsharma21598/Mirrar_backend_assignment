const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');

// Create an Express application
const app = express();

// Define the port for the server to listen on (use process.env.PORT or default to 3001)
const PORT = process.env.PORT || 3001;

// Enable parsing of JSON in request bodies
app.use(express.json());

// Use the productRoutes for handling API routes under the '/api' prefix
app.use('/api', productRoutes);

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/eCommerceDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Event listener for successful connection to MongoDB
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
