const express = require('express');
const db = require('../db');
const router = express.Router();

// Get all users
router.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
        console.log(results)
    });
});

module.exports = router;
