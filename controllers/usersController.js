var conexion = require("../config/conexion");
var user = require("../model/user");

module.exports = {
  index: function (req, res) {
    // res.render("prueba/index");
    res.render("../index.ejs"); //index de usuarios registrados no admin's
  },

  // crearInmueble: function (req, res) {
  //   console.log("crearInmueble: function (req, res) {============");
  //   res.render("users/crearInmueble");
  // },
  // guardarInmueble: function (req, res) {
  //   console.log("ENTRE A GUARDAAR INMUEBLES");
  //   console.log("DATOS===============", req.body);
  //   console.log("FILE NAME===============", req.file.filename);
  //   // //llama la funcion inserrtar
  //   user.insertarInmueble(conexion, req.body, req.file, function (err) {
  //     res.redirect("../");
  //   });
  // },
  login: function (req, res) {
    // console.log(datos);
    res.render("users/login", { alert: ";)" });
    // res.render("users/login");
  },
  crearI: function (req, res) {
    console.log('CREAR I req.params.id==== ',req.params);
    user.retornarDatosID(conexion, req.params.id, function (err, dato) {
      console.log('crear I dato===+'+dato[0]);
      //console.log(stringify(dato));
      res.render("users/crearI", { data: dato[0] });
      //res.render("users/crearI",{dataUser:registros[0]});
    });
    
    //res.render("users/crearI");
  },
 
  crear: function (req, res) {
    
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
      //DATOS GLOBALES
      let varInmu = new Array();
      let varNotifi = new Array();
      //END DATOS GLOBALES 
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
                  user.obtenerInmuebles(conexion, function (error, dataImu) {
                        console.log(
                          "====dataImu" + JSON.stringify(dataImu[0]) + "=END===dataImu"
                        );
                        varInmu = dataImu;
                        console.log("===varInmu=varInmu[0]= " + varInmu[0]+'=END==varInmu');
                      });
                  user.obtenerNotificaciones(conexion, function (error, dataNotifi) {
                        console.log(
                          "====dataNotifi" + JSON.stringify(dataNotifi[0]) + "=END===dataNotifi"
                        );
                        varNotifi = dataNotifi;
                        console.log("===varNotifi =varNotifi[0]== " + varNotifi[0]+'=END==varNotifi');
                      });
          setTimeout(() => {
            if (registros[0].admin) {
              console.log("ADMIN=====", varInmu[0],'\nADMIN=== NOTIFI=='+varNotifi[0]);
              res.render("users/verificar", {
                dataInmueblesRegistrados: varInmu,
                dataNotifiUser:varNotifi,
                title: "USER ADMIN",
                dataParaVerificadoUser: registros,
              });
            } else {
              console.log("NO ADMIN0000=== ", varInmu);
              res.render("users/verificar", {
                dataInmueblesRegistrados: varInmu,
                dataNotifiUser:varNotifi,
                title: "USER NO ADMIN",
                dataParaVerificadoUser: registros,
              });
              /*res.render("users/noVerificado", {
                dataImunmueblesRegistrados: varInmu,
                title: "This is the title",
                dataparaNoVerificadoUser: registros,
              });*/
            }
          }, 1500);
        } else {
          console.log("Compruebe sus datos ");
         // res.render("users/login/", { alert: ";)datos mal mijo " });
          res.redirect("/users/login");
          //res.redirect("/users/login");
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
