//express dependencies
import express from 'express';
//fs dependencies
import fs from 'fs'
//sqlite dependencies
import sqlite3 from 'sqlite3';

const app = express();

app.get('/read', (req, res) => {
  const db = createDatabase();

  db.all('SELECT * FROM tasks', (error, rows) => {
    if (error) {
      console.error(error.message)
    } else {
      res.status(200).json(rows)
    }
  })
});

app.post('/database', (req, res) => {
  res.json({
    "statusCode": 200
  });
});

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
});

/////////////////////////////////////////////////////////////////////////////////////////
const dbFilelocation = './src/database.sqlite';

function createDatabase() {
  if (fs.existsSync(dbFilelocation)) {
    console.log("Database exist");
    return new sqlite3.Database(dbFilelocation);
  } else {
      console.log("Database didn't existed, created now");
      const db = new sqlite3.Database(dbFilelocation, (error) => {
        if (error) {
          return console.error(error.message)
        } else {
          createDatabaseTable(db);
        }
      });
      return new sqlite3.Database(dbFilelocation);
  };
}

function createDatabaseTable(db) {
    db.exec(`
        CREATE TABLE tasks (
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            task_url VARCHAR(1024) NOT NULL,
            task_title VARCHAT(64)
        );
    `);
};

/////////////////////////////////////////////////////////////////////////////////////////