module.exports = {
  //SE NECESITA PARA USERS
  obtenerUser: function (conexion, funcion) {
    conexion.query("SELECT * FROM users_HBD", funcion);
    // conexion.query("SELECT * FROM prueba", funcion);
  },
  obtenerInmuebles: function (conexion, funcion) {
    conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
    // conexion.query("SELECT * FROM prueba", funcion);
  },
  obtenerNotificaciones: function (conexion, funcion) {
    conexion.query("SELECT * FROM notificaciones", funcion);
    // conexion.query("SELECT * FROM prueba", funcion);
  },
  obtenerFavoritos: function (conexion, funcion) {
    conexion.query("SELECT * FROM favoritos", funcion);
    // conexion.query("SELECT * FROM prueba", funcion);
  },
  
  insertar: function (conexion, datos, archivos, funcion) {
    conexion.query(
      "INSERT INTO Depa_Casa_HBD " +
        "( `municipio`, `calle`, `codigo_postal`, `numero_exterior`, `dimenciones`, `c_banos`, `c_recamaras`, `amueblado`, `internet`, `aire_acondicionado`, `precio`, `descripcion_general`, `tipo_depa0_casa1`, `id_propietario`,`disponible1_No0`,`img`)" +
        " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);",
      [
        datos.municipio,
        datos.calle,
        datos.codigo_postal,
        datos.numero_exterior,
        datos.dimenciones,
        datos.c_banos,
        datos.c_recamaras,
        datos.amueblado,
        datos.internet,
        datos.aire_acondicionado,
        datos.precio,
        datos.descripcion_general,
        datos.tipo_depa0_casa1,
        datos.id_propietario,
        datos.disponible1_No0,
        archivos.filename,
      ],
      funcion
    );
  },
  insertarUser: function (conexion, datos, funcion) {
    conexion.query(
      "INSERT INTO users_HBD " +
        "( `nombre`,`apellido`,`edad`,`correo`,`contrasena`,`sexo`,`curp`,`admin`,`numero_tel`) VALUES (?,?,?,?,?,?,?,?,?);",
      [
        datos.nombre,
        datos.apellido,
        datos.edad,
        datos.correo,
        datos.contrasena,
        datos.sexo,
        datos.curp,
        datos.admin,
        datos.numero_tel,
      ],
      funcion
    );
  },
  verificarUsuario: function (conexion, correo, funcion) {
    conexion.query(
      "SELECT * FROM users_HBD WHERE correo=? ",
      [correo],
      funcion
    );
    
  },
   insertarFavoritos: function (conexion, id_user , id_casa, funcion) {
    conexion.query(
      "INSERT INTO favoritos " +
        "( `id_user`,`id_casa`) VALUES (?,?);",
      [
        id_user,
        id_casa
      ],
      funcion
    );
  },
  retornarDatosID: function (conexion, id, funcion) {
    conexion.query("SELECT * FROM users_HBD WHERE id=?", [id], funcion);
  },
};
