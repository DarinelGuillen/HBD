var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

module.exports = {
  index: function (req, res) {
    // res.render("prueba/index");
    res.render("../index.ejs"); //index de usuarios registrados no admin's
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
      res.redirect("http://localhost:3000/");
      // res.redirect("/casas");
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
      let array = new Array();
      array = registros;
      console.log(array, "  array    ");

      if (array.length == 0) {
        console.log("err == vacio []");
      } else {
        let contrasena = registros[0].contrasena;
        // console.log("DATOS     " + correo);

        if (DATA[1] == contrasena) {
          console.log("Existes y es igual ");
          if (registros[0].admin) {
            console.log("ADMIN");

            //  requestListener;
            // return requestListener;
            // return res.redirect('http://localhost:3000/usuarioAdmin/index');
            console.log(
              "REGISTROS===============",
              registros,
              "REGISTROS==============="
            );
            res.render('users/verificar',{title:'This is the title',data:registros})
            // return res.send(
            //   JSON.stringify({
            //     data: registros,
            //     login: true,
            //     redirect: "http://localhost:3000/users/indexAdmin",
            //   })
            // );
            // document.getElementById('impresion').innerHTML='<a href="/usuarioAdmin/index">users menu</a>';
            //return false;
          } else {
            console.log("NO ADMIN0000===");

            return res.send(
              JSON.stringify({
                login: true,
                redirect: "http://localhost:3000/users/index",
              })
            );

            // res.redirect("/casas"); //lo envio a casas ver
          }
        } else {
          console.log("Compruebe sus datos ");
          //return res.send(JSON.stringify({login:true, redirect:'http://localhost:3000/'}));
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
