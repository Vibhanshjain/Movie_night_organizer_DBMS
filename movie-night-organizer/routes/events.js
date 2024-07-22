const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Create a new event
router.post('/', async (req, res) => {
    const { movie_id, event_date, location } = req.body;

    try {
        await db.query('INSERT INTO events (movie_id, event_date, location) VALUES (?, ?, ?)', [movie_id, event_date, location]);
        res.status(201).json({ message: 'Event created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

