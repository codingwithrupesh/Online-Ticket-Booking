const pool = require('../db/config');

const getAvailableSeats = async (limit) => {
    const result = await pool.query(
        'SELECT * FROM seats WHERE reserved_by IS NULL LIMIT $1',
        [limit]
    );
    return result.rows;
};

const reserveSeat = async (seatId, userId) => {
    await pool.query('UPDATE seats SET reserved_by = $1 WHERE id = $2', [userId, seatId]);
};

module.exports = { getAvailableSeats, reserveSeat };
