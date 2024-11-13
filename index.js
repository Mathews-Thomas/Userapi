
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', userRoutes); // Prefix all user routes with /api

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
