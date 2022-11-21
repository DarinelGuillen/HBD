module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
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
    // conexion.query("INSERT INTO prueba (`id`, `img`) VALUES(?,?);",[datos.id,archivos.filename],funcion)
  },
  retornarDatosID: function (conexion, id, funcion) {
    conexion.query("SELECT * FROM Depa_Casa_HBD WHERE id=?", [id], funcion);
  },
  borrar: function (conexion, id, funcion) {
    conexion.query("DELETE FROM Depa_Casa_HBD WHERE ID=?", [id], funcion);
  },
  actualizar: function (conexion, datos, funcion) {
    conexion.query(
      "UPDATE Depa_Casa_HBD SET " +
        " municipio=?, calle=?,codigo_postal=?,numero_exterior=?," +
        "dimenciones=?,c_banos=?,c_recamaras=?,amueblado=?,internet=?,aire_acondicionado=?," +
        "precio=?,descripcion_general=?,tipo_depa0_casa1=?,id_propietario=?, disponible1_No0=? " +
        " WHERE id=?",
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
        datos.id,
      ],
      funcion
    );
  },
  actualizarArchivo: function (conexion, datos, archivo, funcion) {
    conexion.query(
      "UPDATE Depa_Casa_HBD SET img=? WHERE id=?",
      [archivo.filename, datos.id],
      funcion
    );
  },
};
