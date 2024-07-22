const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add a new movie
router.post('/', async (req, res) => {
    const { title, description, release_date } = req.body;

    try {
        await db.query('INSERT INTO movies (title, description, release_date) VALUES (?, ?, ?)', [title, description, release_date]);
        res.status(201).json({ message: 'Movie added successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Fetch a list of movies
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM movies');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

