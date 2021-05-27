-- UP
CREATE TABLE Snacker (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstname TEXT,
  lastname TEXT,
  username TEXT,
  email TEXT,
  followers INTEGER DEFAULT 0,
  since TEXT DEFAULT (datetime('now'))
);

CREATE TABLE Video (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  coverImage TEXT,
  chapterName TEXT,
  season INTEGER DEFAULT 1,
  chapter INTEGER DEFAULT 1,
  views INTEGER DEFAULT 0,
  timeView INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  dislikes INTEGER DEFAULT 0,
  tags TEXT,
  since TEXT DEFAULT (datetime('now')),
  userId INTEGER REFERENCES Snacker(id)
);


-- ADD
INSERT
INTO Snacker (firstname, lastname, username, email) 
VALUES ('Paul','Smith','pauly','pauly@mail.com');

INSERT
INTO Snacker (firstname, lastname, username, email) 
VALUES ('Violeta','Rex','violetarex','violetarex@mail.com');

INSERT 
INTO Video (title, coverImage, chapterName, tags, userId)
VALUES ('Not Kidding','C1.png','I work here!','funny,comedy,jokes,pranks',1);

INSERT
INTO Video (title, coverImage, chapterName, tags, userId)
VALUES ('A mad nigth show','C2.png','The mortal kiss','music,concert,sogn,singing,electronic,party',2);

INSERT
INTO Video (title, coverImage, chapterName, season, chapter, tags, userId)
VALUES ('Not Kidding','C1.png','Bye Bye Butterfly!',1,2,'funny,comedy,jokes,pranks]',1);


-- DOWN
DROP TABLE Snacker;
DROP TABLE Video;
