module.exports = {
  obtener: function (conexion, funcion) {
    conexion.query("SELECT * FROM users_HBD", funcion);
    //conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
    //conexion.query("SELECT * FROM notificaciones", funcion);
    
  },
  obtener1: function (conexion, funcion) {
    //conexion.query("SELECT * FROM users_HBD", funcion);
    conexion.query("SELECT * FROM Depa_Casa_HBD", funcion);
    //conexion.query("SELECT * FROM notificaciones", funcion);
    
  },

  /*obtenerNotificaciones: function (conexion, funcion) {
    conexion.query("SELECT * FROM notificaciones", funcion);

  },
  obtenerUsers: function (conexion, funcion) {
    conexion.query("SELECT * users_HBD", funcion);

  },*/
}