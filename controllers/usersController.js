var conexion = require("../config/conexion");
var user = require("../model/user");

module.exports = {
  index: function (req, res) {
    // res.render("prueba/index");
    res.render("../index.ejs"); //index de usuarios registrados no admin's
  },
  crear: function (req, res) {
    res.render("users/crear");
  },
  login: function (req, res) {
    // console.log(datos);
    res.render("users/login", { alert: ";)" });
    // res.render("users/login");
  },
  guardar: function (req, res) {
    console.log(req.body);
    // console.log(req.file.filename);
    user.insertarUser(conexion, req.body, function (err) {
      res.redirect("http://localhost:3000/");
      // res.redirect("/casas");
    });
  },
  verificar: function (req, res) {
    console.log("Recepción de datos");
    var DATA = req.params.correo.split(",");
    console.log(DATA, " DATA");
    user.verificarUsuario(conexion, DATA[0], function (err, registros) {
      let varInmuebles = new Array();
      console.log(
        " ========= resgistros    ",
        registros,
        " ========= resgistros    "
      );

      let array = new Array();
      array = registros;
      //console.log(array, "  array    ");

      if (array.length == 0) {
        console.log("err == vacio []");
        res.redirect("/users/login");
      } else {
        let contrasena = registros[0].contrasena;
        // console.log("DATOS     " + correo);

        if (DATA[1] == contrasena) {
          console.log("Existes y es igual ");
          user.obtenerInmuebles(conexion, function (error, dataI) {
            console.log(
              "====dataI" + JSON.stringify(dataI[0].id) + "====dataI"
            );
            varInmuebles = dataI;
            console.log("===varInmuebles " + varInmuebles[0]);
          });
          setTimeout(() => {
            if (registros[0].admin) {
              console.log("ADMIN=====", varInmuebles[0]);
              res.render("users/verificar", {
                dataInmueblesRegistrados: varInmuebles,
                title: "This is the title",
                dataParaVerificadoUser: registros,
              });
            } else {
              console.log("NO ADMIN0000=== ", varInmuebles);
              res.render("users/noVerificado", {
                dataInmueblesRegistrados: varInmuebles,
                title: "This is the title",
                dataparaNoVerificadoUser: registros,
              });
            }
          }, 1000);
        } else {
          console.log("Compruebe sus datos ");
          res.redirect("/users/login");
        }
      }
    });
  },
  noVerificado: function (req, res) {
    user.obtenerInmuebles(conexion, datos, function (err) {
      //res.render("users/noVerificado",{title2:'This is the title2',dataparaNoVerificadoUserInmuebles:datos})
      res.render("users/noVerificado");
      // res.redirect("/casas");
    });
  },
};
