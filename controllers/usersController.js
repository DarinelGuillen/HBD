var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

module.exports = {
  index: function (req, res) {
    // res.render("prueba/index");
    res.render("../index.ejs");
  },
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
  otroVerificar: function name(req, res) {
    console.log(req.body.correo);
    console.log(req.body.contrasena);

    user.verificarUsuario(
      conexion,
      req.body.correo,
      req.body.contrasena,
      function (err, registros) {
        console.log("re  corre y contrsena " + registros);
      }
    );

    //if (req.body.municipio) {
    // casa.actualizar(conexion, req.body, function (err) {});
    // }
    res.redirect("/index");
  },
  esElverificar: function (req, res) {
    console.log("Recepción de datos");
    console.log(req.params.id + "============");
    user.retornarDatosID(conexion, req.params.id, function (err, registros) {
      let correo = registros[0].correo;
      let contrasena = registros[0].contrasena;
      correo += "   este es la contra " + contrasena + "====id" + req.params.id;
      user.VerificarUser(conexion, req.params.id_libro, function (err) {
        //res.redirect("/casas");//lo envio a casas ver
        // res.redirect('/usuarioAdmin/index/:',registros[0].id)//lo envio a user admin index e intento enviar el ID

        if (registros[0].admin) {
          res.redirect("/usuarioAdmin/index");
        } else {
          res.redirect("/casas"); //lo envio a casas ver
        }
      });
    });
  },
  verificar: function (req, res) {
    console.log("Recepción de datos");
    var DATA = req.params.correo.split(",");
    console.log(DATA, " DATA");
    //console.log(req.params.correo+'============');
    // console.log(req.params.contrasena+'============');

    user.verificarUsuario(conexion, DATA[0], function (err, registros) {
      console.log(registros, "  resgistros    ");
      let array=new Array;
      array=registros
      console.log(array, "  array    ");

      if (array.length == 0) {
        console.log("err == vacio []");
       
      } else {
       

        let contrasena = registros[0].contrasena;
        // console.log("DATOS     " + correo);

        if (DATA[1] == contrasena) {
          console.log("Existes y es igual ");
          if (registros[0].admin) {
            res.redirect("/usuarioAdmin/index");
          } else {
            res.redirect("/casas"); //lo envio a casas ver
          }
        } else {
          console.log("Compruebe sus datos ");
        }
      }

      /*user.verificarUsuario(conexion,req.params.id_libro,function(err){
    //res.redirect("/casas");//lo envio a casas ver
   // res.redirect('/usuarioAdmin/index/:',registros[0].id)//lo envio a user admin index e intento enviar el ID
   if(registros[0].admin){
    res.redirect('/usuarioAdmin/index')
   }else{
    res.redirect("/casas");//lo envio a casas ver
   }
  })*/
    });
  },
};
