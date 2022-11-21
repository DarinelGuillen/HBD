var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

module.exports ={
    login: function (req, res) {
        user.obtener(conexion, function (err, datos) {
          // console.log(datos);
          document.getElementById("").value;
           // if()
          res.render("", {
            title: "Aplicación",
            UnicoDatosUser: datos,
          }); //views/casas/index
        });
        // res.render("users/login");
      },
      
}

alert()

/*
  <script>
      function funcionprueba(){
        let correo= document.getElementById("correo").value;
        let contrasena= document.getElementById("contrasena").value;
        
        for(let i = 0; i < UnicoDatosUser.length; i++){
          if(UnicoDatosUser[i].correo==correo){
              alert("Correo OK")
              if(UnicoDatosUser[i].contrasena==contrasena){
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