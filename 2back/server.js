const { Pool } = require('pg');

// Create a new PostgreSQL client pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'listingz_listings',
  password: '1234',
  port: 5432, // usually 5432
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err);
  } else {
    console.log('Connected to PostgreSQL database at:', res.rows[0].now);
  }
});

// Example query
pool.query('SELECT * FROM listings', (err, res) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Query result:', res.rows);
  }
});
