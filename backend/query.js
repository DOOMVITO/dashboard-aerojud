const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./claims.db', (err) => {
  if (err) return console.error(err.message);
  console.log('📦 Conectado ao banco claims.db');
});

db.all('SELECT * FROM claims', [], (err, rows) => {
  if (err) return console.error(err.message);
  console.log('\n📋 Registros encontrados:\n', rows);
  db.close();
});
