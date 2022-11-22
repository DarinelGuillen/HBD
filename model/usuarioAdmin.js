module.exports = {
    obtener: function (conexion, funcion) {
      conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
      //conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
      // conexion.query("SELECT * FROM prueba", funcion);
      
    },
}