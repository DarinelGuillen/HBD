var conexion = require("../config/conexion");

module.exports = {
    index: function (req, res) {
        // res.render("prueba/index"); 
            res.render("../index.ejs");

    },
}