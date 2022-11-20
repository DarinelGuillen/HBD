var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

module.exports = {
  crear: function (req, res) {
    res.render("users/crear");
  },
  login: function (req, res) {
    res.render("users/login");
  },
  guardar: function (req, res) {
    console.log(req.body);
    // console.log(req.file.filename);
    user.insertarUser(conexion, req.body, function (err) {
      console.log("HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEREEEEEEEEEEEEEEEEE");
      res.render("users/crear");
    });
  },
};
