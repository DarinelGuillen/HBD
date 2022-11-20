var conexion = require("../config/conexion");
var casa = require("../model/user");
var borrar = require("fs");

module.exports = {
  crear: function (req, res) {
    res.render("users/crear");
  },
   login: function (req, res) {
    res.render("users/login");
  },
  
};