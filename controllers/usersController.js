var conexion = require("../config/conexion");
var user = require("../model/user");

module.exports = {
  index: function (req, res) {
    res.render("../index.ejs");
  },
  login: function (req, res) {
    res.render("users/login", { alert: "" });
  },
  guardarI: function (req, res) {
    user.insertar(conexion, req.body, req.file, function (err) {
      res.redirect("user/login");
    });
  },
  crear: function (req, res) {
    res.render("users/crear");
  },
  guardar: function (req, res) {
    console.log(req.body);
    user.insertarUser(conexion, req.body, function (err) {
      res.redirect("http://localhost:3000/");
    });
  },
  verificar: function (req, res) {
    var DATA = req.params.correo.split(",");
    console.log(DATA, " DATA");
    console.log(DATA[0], " DATA[0] CORREO");
    console.log(DATA[1], " DATA[1] CONTRASENA");
    user.verificarUsuario(conexion, DATA[0], function (err, registros) {
      //DATOS GLOBALES
      let varInmu = new Array();
      let varNotifi = new Array();
      let varFavori = new Array();
      let varUser = new Array();
      //END DATOS GLOBALES
      let array = new Array();
      array = registros;
      if (array.length == 0) {
        console.log("err == vacio []");
        res.redirect("/users/login");
      } else {
        let contrasena = registros[0].contrasena;
        if (DATA[1] == contrasena) {
          //Existes y es igual
          user.obtenerInmuebles(conexion, function (error, dataImu) {
            varInmu = dataImu;
          });
          user.obtenerNotificaciones(conexion, function (error, dataNotifi) {
            varNotifi = dataNotifi;
          });
          user.obtenerFavoritos(conexion, function (error, dataFavori) {
            varFavori = dataFavori;
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
              "END.LENGTH"
            );
            if (registros[0].admin) {
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
            }
          }, 1100);
        } else {
          console.log("Compruebe sus datos ");
          res.redirect("/users/login");
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
  deleteFav: function (req, res) {
    console.log("Recepción de datos FAVORITOS=====");
    var DATA = req.params.id.split(",");
    console.log(DATA, " DATA/\n");
    console.log(DATA[0], " DATA[0]/ID USER\n");
    console.log(DATA[1], " DATA[1]/ID FAVORITO\n");
    user.deleteFav(conexion, DATA[1], function (err) {
      console.log("I JUST DELETE FAVORITO : ", req.params.id);

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
    });
    //res.redirect("/casas"); //Eato es para redirecsionar a una nueva ventana si se quiere asi
  },
  deleteNofi: function (req, res) {
    console.log("Recepción de datos NOTIFICACIONES=====");
    var DATA = req.params.id.split(",");
    console.log(DATA, " DATA/\n");
    console.log(DATA[0], " DATA[0]/ID USER\n");
    console.log(DATA[1], " DATA[1]/ID FAVORITO\n");
    user.deleteNofi(conexion, DATA[1], function (err) {
      console.log("I JUST DELETE FAVORITO : ", req.params.id);

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
    });
  },
};
