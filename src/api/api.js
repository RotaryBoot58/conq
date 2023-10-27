import express from 'express';
import fs from 'fs';
import sqlite3 from 'sqlite3';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  const db =  createDatabase();

  db.all('SELECT * FROM tasks', (error, rows) => {
    if (error) {
      console.error(error.message)
    } else {
      res.status(200).json(rows)
    }
  })
});

app.post('/create', (req, res) => {
  /* const db = createDatabase();*/
  const db =  createDatabase();
  const { taskTitle, taskUrl } = req.body

  if (!taskUrl) {
    res.status(400).json({
      "error":"Missing task URL"
    });
    return;
  } if (!taskTitle) {
    taskTitle.value === "Unnamed task"
  }

  const sql = `INSERT INTO tasks (title, url) VALUES (?, ?)`;

  db.run(sql, [taskTitle, taskUrl], (error) => {
    if (error) {
      res.status(400).json({
        "error":error.message
      })
      return;
    }
    res.status(201)/* .json({
      "id": this.lastID
    }) */
  })

  /* res.send(req.body); */
  /* console.log(req.body); */

  /* res.status(400) */
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
      return db;
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