const mysql = require ("mysql");

let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.creeateconnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host : "localhost",
    port: 3306,
    user: "root",
    password: "82ithemar",
    database: "burgers_db"
  });
}

module.exports = connection;