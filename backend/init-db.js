const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./claims.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS claims (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      flightNumber TEXT NOT NULL,
      airline TEXT,
      departureDate TEXT,
      issue TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error("Erro ao criar tabela:", err.message);
    } else {
      console.log("✅ Tabela criada com sucesso.");
    }
    db.close();
  });
});
