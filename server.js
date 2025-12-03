require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors()); // allow frontend requests
app.use(express.json()); // parse JSON body

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running ✅');
});

// API route for form submission
app.post('/api/form', (req, res) => {
  console.log('📩 Form data received from frontend:', req.body);

  res.json({
    ...req.body,
    result: "Processed successfully!"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
