const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/freecodecamp.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL
    )
  `);
  db.run(`
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER NOT NULL,
      description TEXT NOT NULL,
      duration INTEGER NOT NULL,
      date TEXT NOT NULL,
      FOREIGN KEY (userId) REFERENCES users (id)
    )
  `);
});

const createUser = (username, callback) => {
  db.run("INSERT INTO users (username) VALUES (?)", [username], function (err) {
    if (err) {
      if (err.code === "SQLITE_CONSTRAINT") {
        return db.get(
          "SELECT * FROM users WHERE username = ?",
          [username],
          (err, row) => {
            if (err) return callback(err);
            callback(null, { username: row.username, _id: row.id });
          }
        );
      }
      return callback(err);
    }
    callback(null, { username, _id: this.lastID });
  });
};

const getAllUsers = (callback) => {
  db.all("SELECT * FROM users", (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

const createExercise = (_id, description, duration, date, callback) => {
  const exerciseDate = date ? new Date(date) : new Date();

  db.run(
    "INSERT INTO exercises (userId, description, duration, date) VALUES (?, ?, ?, ?)",
    [_id, description, duration, exerciseDate.toDateString()],
    function (err) {
      if (err) return callback(err);
      db.get("SELECT * FROM users WHERE id = ?", [_id], (err, userData) => {
        if (err) return callback(err);
        callback(null, {
          username: userData.username,
          description,
          duration,
          date: exerciseDate.toDateString(),
          _id: userData.id,
        });
      });
    }
  );
};

const getLogs = (_id, from, to, limit, callback) => {
  let query = `SELECT * FROM exercises WHERE userId = ${_id}`;
  if (from || to) {
    query += " AND ";
    if (from) query += `date >= '${from}'`;
    if (from && to) query += " AND ";
    if (to) query += `date <= '${to}'`;
  }
  query += ` ORDER BY date`;
  if (limit) query += ` LIMIT ${limit}`;

  db.all(query, (err, exerciseData) => {
    if (err) return callback(err);
    db.get("SELECT * FROM users WHERE id = ?", [_id], (err, userData) => {
      if (err) return callback(err);
      const log = exerciseData.map((exercise) => ({
        description: exercise.description,
        duration: exercise.duration,
        date: exercise.date,
      }));

      callback(null, {
        username: userData.username,
        count: exerciseData.length,
        _id: userData.id,
        log,
      });
    });
  });
};

module.exports = { createUser, getAllUsers, createExercise, getLogs };
