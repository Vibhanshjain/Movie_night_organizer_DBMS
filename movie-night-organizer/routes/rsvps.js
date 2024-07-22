const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Handle RSVP submission
router.post('/', async (req, res) => {
    const { event_id, user_id, response } = req.body;

    try {
        await db.query('INSERT INTO rsvps (event_id, user_id, response) VALUES (?, ?, ?)', [event_id, user_id, response]);
        res.status(201).json({ message: 'RSVP submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

