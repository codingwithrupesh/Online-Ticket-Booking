const pool = require('./config');

const seedDatabase = async () => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS seats (
        id SERIAL PRIMARY KEY,
        row INT NOT NULL,
        seat_number INT NOT NULL,
        reserved_by INT REFERENCES users(id),
        UNIQUE (row, seat_number)
      );

      INSERT INTO seats (row, seat_number) SELECT r, s FROM generate_series(1, 11) r, generate_series(1, 7) s;
    `);
        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
