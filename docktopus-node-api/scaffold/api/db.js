// api/db.js
// #ddev-generated: If you want to edit and own this file, remove this line.
// Credentials come from the container environment (see
// .ddev/.env.ddev-docktopus-postgres for the defaults).
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

module.exports = pool;
