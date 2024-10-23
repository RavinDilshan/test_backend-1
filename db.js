// const mysql = require('mysql');
// const dotenv = require('dotenv');

// dotenv.config();

// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database.');
// });

// module.exports = db;

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
