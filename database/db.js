const Database = require('better-sqlite3');
const db = new Database('npa.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    role TEXT
  );

  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    priority TEXT DEFAULT 'Medium',
    status TEXT DEFAULT 'Open',
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS assets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    asset_tag TEXT,
    name TEXT,
    category TEXT,
    status TEXT DEFAULT 'Available',
    location TEXT
  );
`);

db.prepare("INSERT OR IGNORE INTO users (id, name, role) VALUES (1, 'Support Officer', 'support')").run();

module.exports = db;