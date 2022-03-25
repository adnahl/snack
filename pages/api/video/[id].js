const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

process.unhandledRejections = 'strict';

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

export default async function getVideo(req, res) {

  const db = await openDb('./mydb.sqlite');
  const video = await db.all('SELECT * FROM Video WHERE id=?', req.query.id)

  if (video != "") {
    res.status(200).json({ video })
  } else {
    res.status(300).json({ title: 'Error: Video Not Found' })
  }
}
