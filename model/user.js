module.exports={//SE NECESITA PARA USERS
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
};