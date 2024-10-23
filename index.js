// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/users');
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
// app.use('/api/users', userRoutes);

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.MYSQL_ADDON_HOST || 'btyzilrnxunckhqigrqd-mysql.services.clever-cloud.com',
    user: process.env.MYSQL_ADDON_USER || 'u43q5f3hqaujutha',
    password: process.env.MYSQL_ADDON_PASSWORD || 'wiZPsag6NPGWJ3RbtRDS',
    database: process.env.MYSQL_ADDON_DB || 'btyzilrnxunckhqigrqd',
    port: process.env.MYSQL_ADDON_PORT || 3306, // default MySQL port
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
