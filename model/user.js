module.exports={
    insertarUser:function(conexion,datos,archivos,funcion){
        conexion.query("insert into libro (nombre, imagen) values (?,?)", [datos.nombre,archivos.filename], funcion);        
    },
};