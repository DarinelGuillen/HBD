console.log("Hola aqui");
var conexion = require("../config/conexion");
var casa = require("../model/casa");
var borrar = require("fs");

module.exports = {
  indexmain: function (req, res) {
    ////Si se requiere de datos en el index agregar esta fincion
    res.render("../index.ejs");
  },
  index: function (req, res) {
    casa.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("casas/ver", {
        title: "Aplicación",
        DATOScasasDep1: datos,
      }); //views/casas/index
    });
  },

  ///

  ver: function (req, res) {
    casa.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("casas/ver", { title: "Aplicación", DATOScasasDep1: datos }); //views/casas/index
    });
  },

  crear: function (req, res) {
    res.render("casas/crear");
  },

  guardar: function (req, res) {
    //Cuando se ejecuta el controlador
    console.log(req.body);
    console.log(req.file.filename);
    // //llama la funcion inserrtar
    casa.insertar(conexion, req.body, req.file, function (err) {
      res.redirect("/casas");
    });
  },
  eliminar: function (req, res) {
    console.log("Recepción de datos");
    console.log(req.params.id);
    casa.retornarDatosID(conexion, req.params.id, function (err, registros) {
      var nombreImagen = "public/images/" + registros[0].img;
      //Aqui ira el if para saber si USER el dueño de la casa
      if (borrar.existsSync(nombreImagen)) {
        borrar.unlinkSync(nombreImagen);
      }
      console.log(nombreImagen);
      casa.borrar(conexion, req.params.id, function (err) {});
      // libro.borrar(conexion,req.params.id_libro,function(err){
      res.redirect("/casas"); //Eato es para redirecsionar a una nueva ventana si se quiere asi
    });

    // });
  },
  editar: function (req, res) {
    casa.retornarDatosID(conexion, req.params.id, function (err, registros) {
      console.log(registros[0]);
      res.render("casas/editar", { casa: registros[0] });
    });
  },

  actualizar: function name(req, res) {
    console.log(req.body.id);
    console.log(req.body.municipio);

    if (req.file) {
      if (req.file.filename) {
        casa.retornarDatosID(conexion, req.body.id, function (err, registros) {
          var nombreImagen = "public/images/" + registros[0].img;
          //Aqui ira el if para saber si USER el dueño de la casa
          if (borrar.existsSync(nombreImagen)) {
            borrar.unlinkSync(nombreImagen);
          }
          casa.actualizarArchivo(
            conexion,
            req.body,
            req.file,
            function (err) {}
          );
        });
      }
    }
    if (req.body.municipio) {
      casa.actualizar(conexion, req.body, function (err) {});
    }
    res.redirect("/casas");
  },
};
