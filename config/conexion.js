let mysql = require("mysql");
let con = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  database: "sql9565107",
  user: "sql9565107",
  password: "cqDxVJ8jTd",
  port: 3306,
});
con.connect((err) => {
  if (!err) {
    console.log("Conexion establecidad 100%");
  } else {
    console.log("no conexion 0%");
  }
});
module.exports = con;
