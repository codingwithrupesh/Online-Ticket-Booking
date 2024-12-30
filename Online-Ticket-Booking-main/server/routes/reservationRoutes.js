const express = require('express');
const pool = require('../db/config');
const router = express.Router();
const { getAvailableSeats, reserveSeat } = require('../models/seatModel');

router.post('/reserve', async (req, res) => {
    const { userId, seatsRequested } = req.body;

    try {
        const availableSeats = await pool.query(
            'SELECT * FROM seats WHERE reserved_by IS NULL LIMIT $1',
            [seatsRequested]
        );

        if (availableSeats.rows.length < seatsRequested) {
            return res.status(400).json({ error: 'Not enough seats available' });
        }

        for (let seat of availableSeats.rows) {
            await pool.query('UPDATE seats SET reserved_by = $1 WHERE id = $2', [userId, seat.id]);
        }

        res.json({ message: 'Seats reserved successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error reserving seats' });
    }
});

module.exports = router;
