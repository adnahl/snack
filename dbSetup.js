const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

process.unhandledRejections = 'strict';

async function openDb() {
  return sqlite.open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb('./mydb.sqlite');
  await db.migrate({
    migrationsPath: './src/migrations',
    force: 'last'
  });

  const snackers = await db.all('SELECT * FROM Snacker');
  const videos = await db.all('SELECT * FROM Video');

  console.log('All Snackers', JSON.stringify(snackers, null, 2));
  console.log('All Videos', JSON.stringify(videos, null, 2));

}


setup();