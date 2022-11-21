var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");
function prueba(){
module.exports = {
  login: function (req, res) {
    user.obtener(conexion, function (err, datos) {
      // console.log(datos);
      let contrasena=document.getElementById("contrasena").value;
      let correo=document.getElementById("correo").value;
      // if(contrasena)
      res.render("", {
        title: "Aplicación",
        nicoDatosUsers: datos,
      }); //views/casas/index
    });
    // res.render("users/login");
  },
};
}
alert();

/*
  <script>
      function funcionprueba(){
        let correo= document.getElementById("correo").value;
        let contrasena= document.getElementById("contrasena").value;
        
        for(let i = 0; i < nicoDatosUsers.length; i++){
          if(nicoDatosUsers[i].correo==correo){
              alert("Correo OK")
              if(nicoDatosUsers[i].contrasena==contrasena){
                  alert("Contraseña")
                  document.getElementById("impresion").innerHTML=""+
              '<a class="btn btn-primary" href="../casas">Cancelar </a>';
              }
              alert("segundo if")
              // alert("Holaaaaaaa")
              
              // window.location.href = "https://professor-falken.com";
              // res.render("/usuarioAdmin/ver")
          }

        }
        alert("No POSIBLE")
          document.getElementById("impresion").innerHTML=""+
              'ALGUN DATO ESTA MAL';
  } 

  </script>*/
