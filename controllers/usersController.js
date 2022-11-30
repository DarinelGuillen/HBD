var conexion = require("../config/conexion");
var user = require("../model/user");

module.exports = {
  index: function (req, res) {
    // res.render("prueba/index");
    res.render("../index.ejs"); //index de usuarios registrados no admin's
  },
  login: function (req, res) {
    // console.log(datos);
    res.render("users/login", { alert: "" });
    // res.render("users/login");
  },
  guardarI: function (req, res) {
    console.log("HOLAAAAAAAAA!!=ENTRE\n\n");
    //Cuando se ejecuta el controlador
    console.log(req.body);
    console.log(req.file.filename);
    // //llama la funcion inserrtar
    user.insertar(conexion, req.body, req.file, function (err) {
      res.redirect("user/login");
    });
  },
  crear: function (req, res) {
    res.render("users/crear");
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
      let varFavori = new Array();

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
            console.log(
              "===varInmu=varInmu[0]= " + varInmu[0] + "=END==varInmu"
            );
          });
          user.obtenerNotificaciones(conexion, function (error, dataNotifi) {
            console.log(
              "====dataNotifi" +
                JSON.stringify(dataNotifi[0]) +
                "=END===dataNotifi"
            );
            varNotifi = dataNotifi;
            console.log(
              "===varNotifi =varNotifi[0]== " + varNotifi[0] + "=END==varNotifi"
            );
          });
          user.obtenerFavoritos(conexion, function (error, dataFavori) {
            console.log(
              "====dataNotifi" +
                JSON.stringify(dataFavori[0]) +
                "=END===dataNotifi"
            );
            varFavori = dataFavori;
            console.log(
              "===varFavori =varFavori[0]== " + varFavori[0] + "=END==varFavori"
            );
          });
          setTimeout(() => {
            if (registros[0].admin) {
              console.log(
                "ADMIN=====",
                varInmu[0],
                "\nADMIN=== NOTIFI==" + varNotifi[0]
              );
              res.render("users/verificar", {
                dbInmuebles: varInmu,
                dbNotifi: varNotifi,
                title: "USER ADMIN",
                dbUserQ: registros,
                dbFavUs: varFavori,
              });
            } else {
              console.log("NO ADMIN0000=== ", varInmu.length);
              res.render("users/verificar", {
                dbInmuebles: varInmu,
                dbNotifi: varNotifi,
                title: "USER NO ADMIN",
                dbUserQ: registros,
                dbFavUs: varFavori,
              });
              /*res.render("users/noVerificado", {
                dataImunmueblesRegistrados: varInmu,
                title: "This is the title",
                dataparaNoVerificadoUser: registros,
              });*/
            }
          }, 1100);
        } else {
          console.log("Compruebe sus datos ");
          // res.render("users/login/", { alert: ";)datos mal mijo " });
          res.redirect("/users/login");
          //res.redirect("/users/login");
        }
      }
    });
  },
  favoritos: function (req, res) {
    console.log("Recepción de datos FAVORITOS=====");
    var DATA = req.params.id.split(",");
    console.log(DATA, " DATA");
    console.log(DATA[0], " DATA[0]");
    console.log(DATA[1], " DATA[1]");
    user.insertarFavoritos(
      conexion,
      DATA[0],
      DATA[1],
      function (err, registros) {
        console.log("HOLAAAAAAA ENTRE INSEETARFAVORITOS/////////////////");
        //DATOS GLOBALES
        let varInmu = new Array();
        let varNotifi = new Array();
        let varFavori = new Array();
        let varUser = new Array();
        //END DATOS GLOBALES
        user.obtenerInmuebles(conexion, function (error, dataImu) {
          varInmu = dataImu;
        });
        user.obtenerNotificaciones(conexion, function (error, dataNotifi) {
          varNotifi = dataNotifi;
        });
        user.obtenerFavoritos(conexion, function (error, dataFavori) {
          varFavori = dataFavori;
        });
        user.retornarDatosID(conexion, DATA[0], function (err, dataUser) {
          varUser = dataUser;
        });
        setTimeout(() => {
          console.log(
            "LAST STEP SEE IF AM I ADMIN OR NOT N\n",
            "DATAIMU",
            varInmu.length,
            "////\n",
            "varNotifi",
            varNotifi.length,
            "////\n",
            "varFavori",
            varFavori.length,
            "////\n",
            "varUser",
            varUser.length,
            "////\n",
            "END.LENGTH"
          );
          if (varUser[0].admin) {
            res.render("users/verificar", {
              dbInmuebles: varInmu,
              dbNotifi: varNotifi,
              title: "USER ADMIN",
              dbUserQ: varUser,
              dbFavUs: varFavori,
            });
          } else {
            res.render("users/verificar", {
              dbInmuebles: varInmu,
              dbNotifi: varNotifi,
              title: "USER NO ADMIN",
              dbUserQ: varUser,
              dbFavUs: varFavori,
            });
          }
        }, 1100);
      }
    );
  },
  notificaciones: function (req, res) {
    console.log("Recepción de datos FAVORITOS=====");
    var DATA = req.params.datos.split(",");
    console.log(DATA, " DATA/\n");
    console.log(DATA[0], " DATA[0]/ID USER\n");
    console.log(DATA[1], " DATA[1]/MENSAJE\n");
    console.log(DATA[2], " DATA[2]/ID PROPIETARIO\n");
    console.log(DATA[3], " DATA[3]/ID INMUEBLE\n");
    user.insertarNotificaciones(
      conexion,
      DATA[0],
      DATA[1],
      DATA[2],
      DATA[3],
      function (err, registros) {
        console.log("HOLAAAAAAA ENTRE INSERTAR NOTIFICACION/////////////////");
        //DATOS GLOBALES
        let varInmu = new Array();
        let varNotifi = new Array();
        let varFavori = new Array();
        let varUser = new Array();
        //END DATOS GLOBALES
        user.obtenerInmuebles(conexion, function (error, dataImu) {
          varInmu = dataImu;
        });
        user.obtenerNotificaciones(conexion, function (error, dataNotifi) {
          varNotifi = dataNotifi;
        });
        user.obtenerFavoritos(conexion, function (error, dataFavori) {
          varFavori = dataFavori;
        });
        user.retornarDatosID(conexion, DATA[0], function (err, dataUser) {
          varUser = dataUser;
        });
        setTimeout(() => {
          console.log(
            "LAST STEP SEE IF AM I ADMIN OR NOT N\n",
            "DATAIMU",
            varInmu.length,
            "////\n",
            "varNotifi",
            varNotifi.length,
            "////\n",
            "varFavori",
            varFavori.length,
            "////\n",
            "varUser",
            varUser.length,
            "////\n",
            "END.LENGTH"
          );
          if (varUser[0].admin) {
            res.render("users/verificar", {
              dbInmuebles: varInmu,
              dbNotifi: varNotifi,
              title: "USER ADMIN",
              dbUserQ: varUser,
              dbFavUs: varFavori,
            });
          } else {
            res.render("users/verificar", {
              dbInmuebles: varInmu,
              dbNotifi: varNotifi,
              title: "USER NO ADMIN",
              dbUserQ: varUser,
              dbFavUs: varFavori,
            });
          }
        }, 1100);
      }
    );
  },
};
