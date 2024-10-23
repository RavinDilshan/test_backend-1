// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/users');
// const home = require("./routes/home");
// const db = require('./db'); // Ensure db is properly configured

// // Load environment variables
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Use CORS
// app.use(cors({
//     origin: "*",  // This allows requests from all origins by default or from a specified origin
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true, // If you're using cookies or other credentials
// }));

// // Middleware for parsing JSON data
// app.use(express.json());

// // API routes
// app.use('/users', userRoutes);

// app.use("/home", home);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
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

// Middleware to add custom headers
app.use((req, res, next) => {
    res.set({
        'Date': new Date().toUTCString(), // Automatically set current date
        'Content-Type': 'application/json', // Ensure JSON responses
        'Transfer-Encoding': 'chunked', // Transfer-Encoding header
        'Connection': 'keep-alive', // Keep connections alive
        'X-Powered-By': 'Express', // Custom header to show Express is powering the server
    });
    next(); // Continue to the next middleware or route handler
});

// API routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
