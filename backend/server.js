// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3002;

// ────────────────────────── MIDDLEWARE ──────────────────────────
app.use(cors());
app.use(bodyParser.json());

// ─────────────── BANCO DE DADOS EM MEMÓRIA (TEMPORÁRIO) ───────────────
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) return console.error("❌ Erro ao abrir DB:", err.message);

  console.log("✅ Banco SQLite em memória aberto.");

  // Criação da tabela
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
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) console.error("❌ Erro ao criar tabela:", err.message);
    else console.log("🗄️ Tabela 'claims' pronta (em memória).");
  });
});

// ──────────────────────────── ROTAS ────────────────────────────

// POST → /api/claim → Grava uma reclamação
app.post("/api/claim", (req, res) => {
  const { flightNumber, airline, departureDate, issue, name, email, phone } = req.body;

  if (!flightNumber || !issue || !name || !email || !phone) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes" });
  }

  const sql = `
    INSERT INTO claims 
    (flightNumber, airline, departureDate, issue, name, email, phone) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [flightNumber, airline, departureDate, issue.join(", "), name, email, phone], function (err) {
    if (err) {
      console.error("❌ Erro ao salvar:", err.message);
      return res.status(500).json({ error: "Erro ao salvar no banco" });
    }

    res.status(201).json({ message: "Reclamação salva com sucesso", id: this.lastID });
  });
});

// GET → /api/claim/all → Lista todas as reclamações
app.get("/api/claim/all", (req, res) => {
  db.all("SELECT * FROM claims ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      console.error("❌ Erro ao buscar dados:", err.message);
      return res.status(500).json({ error: "Erro ao buscar dados" });
    }

    res.json(rows);
  });
});

// GET → / → Página raiz
app.get("/", (req, res) => {
  res.send("✅ API de Reembolsos no ar!");
});

// ──────────────────────────── START ────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});
