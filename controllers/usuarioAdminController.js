var conexion = require("../config/conexion");
var usuarioAdmin = require("../model/usuarioAdmin");
// var borrar = require("fs");

module.exports = {
  index: function (req, res) {
    usuarioAdmin.obtener(conexion, function (err, datos) {
      // console.log(datos);
      //res.render("usuarioAdmin/index");
    // res.render("usuarioAdmin/index", { title: "Aplicación", bdpInmuebles: datos }); //views/casas/index
    res.render("usuarioAdmin/index", { bdpUsers:datos}); //views/casas/index
    //res.render("usuarioAdmin/index", { bdpInmuebles: datosInmueble, bdpNotificaiones: datosNotificaciones,bdpUsers:datosUser}); //views/casas/index

    });
  },
  index1: function (req, res) {
    usuarioAdmin.obtener1(conexion, function (err, datos) {
      // console.log(datos);
      //res.render("usuarioAdmin/index");
      res.render("usuarioAdmin/dos", {  bdpInmuebles: datos }); //views/casas/index
      //res.render("usuarioAdmin/index", { bdpInmuebles: datosInmueble, bdpNotificaiones: datosNotificaciones,bdpUsers:datosUser}); //views/casas/index

   });
  },
  obt: function (req, res) {
    usuarioAdmin.obtener(conexion, function (err, datos) {
      // console.log(datos);
      //res.render("usuarioAdmin/index");
      //res.render("usuarioAdmin/validacionDatos.js", {  bdpUsers: datos }); //views/casas/index
      res.send("../public/js/validacionDatos.js", {  bdpUsers: datos }); //views/casas/index
      //res.send(datos);
      //res.render("usuarioAdmin/index", { bdpInmuebles: datosInmueble, bdpNotificaiones: datosNotificaciones,bdpUsers:datosUser}); //views/casas/index

   });
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
  /*ver: function (req, res) {
    usuarioAdmin.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("usuarioAdmin/index", { title: "Aplicación", bdpInmuebles: datos }); //views/casas/index
      //res.render("usuarioAdmin/index", { bdpInmuebles: datosInmueble, bdpNotificaiones: datosNotificaciones,bdpUsers:datosUser}); //views/casas/index

    });
  },*
  /*ver: function (req, res) {
    usuarioAdmin.obtenerNotificaciones(conexion, function (err, datos) {
      // console.log(datos);
      res.render("usuarioAdmin/index", { title: "Aplicación", bdpNotificaciones: datos }); //views/casas/index
    });
  },
  ver: function (req, res) {
    usuarioAdmin.obtenerUsers(conexion, function (err, datos) {
      // console.log(datos);
      res.render("usuarioAdmin/index", { title: "Aplicación", bdpUsers: datos }); //views/casas/index
    });
  },*/
};