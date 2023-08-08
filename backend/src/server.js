const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI; // Retrieve MongoDB connection string from the environment

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Import routes
const curtainRoutes = require('./routes/curtainRoutes');
app.use('/curtains', curtainRoutes);
