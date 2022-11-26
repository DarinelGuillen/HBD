let conexion = require("../config/conexion");
const indexM = require("../model/indexM");
let user = require("../model/indexM");

module.exports = {
  index: function (req, res) {
    indexM.obtener(conexion, function (err, datos) {
      // console.log(datos);
      res.render("../index.ejs", { title: "INDEX MAIN", data: datos }); //views/casas/index
    });
    //res.render("../index.ejs");
  },
};
