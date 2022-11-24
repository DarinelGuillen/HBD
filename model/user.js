module.exports={//SE NECESITA PARA USERS
    obtener: function (conexion, funcion) {
        conexion.query("SELECT * FROM users_HBD", funcion);
        // conexion.query("SELECT * FROM prueba", funcion);
      },
    insertarUser:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO "+
         "users_HBD (nombre,apellido,edad,correo,contrasena,sexo,curp,admin) values (?,?,?,?,?,?,?,?)"
         ,[
           
            datos.nombre,
            datos.apellido,
            datos.edad,
            datos.correo,
            datos.contrasena,
            datos.sexo,
            datos.curp,
            datos.admin,
        ], funcion);        
    },
    verificarUsuario: function (conexion, correo, funcion) {
        conexion.query("SELECT * FROM users_HBD WHERE correo=? ", [correo], funcion);
      },
      retornarDatosID: function (conexion, id, funcion) {
        conexion.query("SELECT * FROM users_HBD WHERE id=?", [id], funcion);
      },
      VerificarUser: function (conexion, id, funcion) {
        conexion.query("DELETE FROM  users_HBD WHERE id=?", [id], funcion);
      },
};