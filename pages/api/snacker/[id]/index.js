const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

process.unhandledRejections = 'strict';

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

export default async function getSnacker(req, res) {

  const db = await openDb('./mydb.sqlite');
  const user = await db.all('SELECT username FROM Snacker WHERE id=?', req.query.id)

  if (user != "") {
    res.status(200).json({ user })
  } else {
    res.status(300).json({ Error: 'Snacker Not Found' })
  }
}
