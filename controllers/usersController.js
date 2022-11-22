var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

module.exports = {
  crear: function (req, res) {
    res.render("users/crear");
  },
  login: function (req, res) {
    user.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("users/login", {
        title: "Aplicación",
        UnicoDatosUsers1: datos,
      }); //views/casas/index
    });
    // res.render("users/login");
  },
  guardar: function (req, res) {
    console.log(req.body);
    // console.log(req.file.filename);
    user.insertarUser(conexion, req.body, function (err) {
      //res.redirect("http://localhost:3000/");
      //   res.redirect("/casas");
    });
  },
};
