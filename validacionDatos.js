const mysql = require("mysql");
const con = mysql.createConnection({
  host: "sql9.freesqldatabase.com",
  database: "sql9565107",
  user: "sql9565107",
  password: "cqDxVJ8jTd",
  port: 3306,
});
con.connect((err)=>{
    if(err)throw err
    console.log('conexion sissssssssssssss');
}
);
con.query("SELECT * FROM users_HBD",  (err ,rows)=>{
  if(err)throw err
  console.log('Datos======');
  console.log(rows);
  obtecionDeDaatos(rows);
});
//con.end()

function obtecionDeDaatos(bdpUsers){
  console.log('============='+bdpUsers[0].id);
  console.log('funcion obtecionDeDaatos')
}
function DOS() {
  document.getElementById('impresion').innerHTML=' <a href="/usuarioAdmin/index">users menu</a>';
  console.log('DOS EN VALI PUBLIC')
  console.log('consola  prueba  funcionDeValidacion 333');
  obtecionDeDaatos(con.query);
}













/*var conexion = require("../config/conexion");
var user = require("../model/user");
// var borrar = require("fs");

  module.exports = {
    funcionpruebValidacion: function (req, res) {
      user.obtener(conexion, function (err, datos) {
        // console.log(datos);
        let contrasena = document.getElementById("contrasena").value;
        let correo = document.getElementById("correo").value;
        for (let i = 0; i < datos.length; i++) {
          if (datos[i].correo == correo) {
            console.log("user  make correo ");
            if (datos[i].contrasena == contrasena) {
              console.log("user  make contrasena ");
            } else {
              console.log("NO contrasena ");
            }
          } else {
            console.log("No correo ");
          }
        }
      });
    },
  };
*/

/*
  <script>
      function funcionprueba(){
        let correo= document.getElementById("correo").value;
        let contrasena= document.getElementById("contrasena").value;
        
        for(let i = 0; i < UnicoDatosUsers.length; i++){
          if(UnicoDatosUsers[i].correo==correo){
              alert("Correo OK")
              if(UnicoDatosUsers[i].contrasena==contrasena){
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
          
  } 

  </script>*/
