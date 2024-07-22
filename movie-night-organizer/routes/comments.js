const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add a comment to a movie
router.post('/', async (req, res) => {
    const { movie_id, user_id, comment } = req.body;

    try {
        await db.query('INSERT INTO comments (movie_id, user_id, comment) VALUES (?, ?, ?)', [movie_id, user_id, comment]);
        res.status(201).json({ message: 'Comment added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

