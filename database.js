import Database from "better-sqlite3";

const db = new Database("spm-agency.db");

db.pragma("journal_mode = WAL");

db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL,
    yoyo_id TEXT NOT NULL,
    receiver_id TEXT,
    name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    package_name TEXT,
    price TEXT,
    status TEXT NOT NULL DEFAULT 'Pending',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'Active',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS visitors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ip_address TEXT,
    country TEXT,
    city TEXT,
    user_agent TEXT,
    page TEXT,
    vpn_detected INTEGER DEFAULT 0,
    visited_at TEXT NOT NULL
  );
`);

export default db;
