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
  const snackers = await db.all('SELECT * FROM Snacker')

  res.status(200).json({ snackers })
}
