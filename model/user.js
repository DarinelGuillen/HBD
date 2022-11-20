module.exports={//SE NECESITA PARA USERS
    insertarUser:function(conexion,datos,archivos,funcion){
        conexion.query("INSERT INTO "+
         "libro (nombre, contrasena) values (?,?)"
         ,[datos.nombre,datos.contrasena], funcion);        
    },
};