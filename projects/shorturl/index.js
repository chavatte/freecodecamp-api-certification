const dns = require("dns");
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/freecodecamp.db");

db.run(`CREATE TABLE IF NOT EXISTS urls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  original_url TEXT NOT NULL,
  short_url TEXT UNIQUE
)`);

const createShortUrl = (req, res) => {
  const originalUrl = req.body.url;

  try {
    const url = new URL(originalUrl);
    dns.lookup(url.hostname, (err) => {
      if (err) {
        return res.json({ error: "invalid url" });
      }

      const stmt = db.prepare("INSERT INTO urls (original_url) VALUES (?)");
      stmt.run(originalUrl, function (err) {
        if (err) {
          return res.json({ error: "Erro ao salvar a URL" });
        }
        db.get("SELECT last_insert_rowid() AS short_url", (err, row) => {
          if (err) {
            return res.json({ error: "Erro ao obter a short_url" });
          }
          res.json({ original_url: originalUrl, short_url: row.short_url });
        });
      });
      stmt.finalize();
    });
  } catch (error) {
    res.json({ error: "invalid url" });
  }
};

const redirectShortUrl = (req, res) => {
  const shortUrl = req.params.short_url;

  db.get(
    "SELECT original_url FROM urls WHERE id = ?",
    [shortUrl],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao buscar a URL" });
      }
      if (row) {
        res.redirect(row.original_url);
      } else {
        res.status(404).json({ error: "not found" });
      }
    }
  );
};

module.exports = { createShortUrl, redirectShortUrl };
