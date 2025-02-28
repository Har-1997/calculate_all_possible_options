const mysql = require("mysql2");
require("dotenv").config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL");

  db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`, (err) => {
    if (err) {
      console.error("❌ Error creating database:", err);
      return;
    }
    console.log(`✅ Database ${DB_NAME} created or already exists`);

    db.query(`USE ${DB_NAME}`, (err) => {
      if (err) {
        console.error("❌ Error using database:", err);
        return;
      }

      const createItemsTable = `
        CREATE TABLE IF NOT EXISTS items (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `;

      db.query(createItemsTable, (err) => {
        if (err) {
          console.error("❌ Error creating 'items' table:", err);
          return;
        }
        console.log("✅ 'items' table created or already exists");
      });

      const createCombinationsTable = `
        CREATE TABLE IF NOT EXISTS combinations (
          id INT AUTO_INCREMENT PRIMARY KEY,
          combination VARCHAR(255)
        )
      `;

      db.query(createCombinationsTable, (err) => {
        if (err) {
          console.error("❌ Error creating 'combinations' table:", err);
          return;
        }
        console.log("✅ 'combinations' table created or already exists");
      });
    });
  });
});

module.exports = db;