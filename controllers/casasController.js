let conexion = require("../config/conexion");
let casa = require("../model/casa");
let borrar = require("fs");

module.exports = {
  ver: function (req, res) {
    casa.obtener(conexion, function (err, datos) {
      res.render("casas/ver", { title: "Aplicación", DATOSinmueblesCD: datos }); //views/casas/index
    });
  },
  crear: function (req, res) {
    //res.render("casas/crear");
    console.log("req.params.id== =" + req.params.id + "==============\n");
    casa.retornarDatosIDuser(conexion, req.params.id, function (err, REGISTRO) {
      console.log("REGISTRO " + REGISTRO[0]);
      res.render("casas/crear", { dataUser: REGISTRO[0] });
    });
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
      let nombreImagen = "public/images/" + registros[0].img;
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
    console.log("req.params.id== =" + req.params);
    var DATA = req.params.id.split(",");
    console.log(DATA, " DATA");
    console.log(DATA[0], " DATA[0] ID Inmueble");
    console.log(DATA[1], " DATA[1] ID USER");
    //
    let inmueble=new Array();
    let user=new Array();
    casa.retornarDatosIDuser(conexion, DATA[1], function (err, dataUser) {
      console.log("Registros " + dataUser[0]);

      user=dataUser
    });
    casa.retornarDatosID(conexion, DATA[0], function (err, dataInmu) {
      console.log("Registros " + dataInmu[0]);
      inmueble=dataInmu
    });
    setTimeout(() => {
      res.render("casas/editar", { casa: inmueble[0] ,user:user[0]});
    }, 1000);
  },

  actualizar: function name(req, res) {
    console.log(req.body.id);
    console.log(req.body.municipio);
console.log('ID PROPIETARIO= ',req.body.id_propietario);
    if (req.file) {
      if (req.file.filename) {
        casa.retornarDatosID(conexion, req.body.id, function (err, registros) {
          let nombreImagen = "public/images/" + registros[0].img;
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
    
    //res.redirect("/casas");
  },
};
