const sqlite3 = require('sqlite3').verbose();

var DB;
try {
    DB = new sqlite3.Database('./database/movies_db.sqlite3');  
    console.log("Database Connected");
}
catch  {
  console.log("Failed to connect to database");
}

module.exports = DB;