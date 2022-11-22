var conexion = require("../config/conexion");
var user = require("../model/usuarioAdmin");
// var borrar = require("fs");

module.exports = {
  //index: function (req, res) {
  //  res.render("usuarioAdmin/index");
  //},
  index: function (req, res) {
    res.render("usuarioAdmin/index");
  },
};