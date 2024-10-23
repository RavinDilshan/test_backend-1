const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/users');
const db = require('./db'); // Ensure db is properly configured

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use CORS
app.use(cors({
    origin: "*",  // This allows requests from all origins by default or from a specified origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // If you're using cookies or other credentials
}));

// Middleware for parsing JSON data
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
