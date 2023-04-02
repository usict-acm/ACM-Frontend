const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  // port: 8111,
  database: "acmbackend",
});

module.exports = db;
