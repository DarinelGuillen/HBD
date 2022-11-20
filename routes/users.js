var express = require("express");
var router = express.Router();
const loginController = require("../controllers/usersController");

var multer = require("multer");
var fecha = Date.now();
var rutaAlmacen = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/images/");
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, fecha + "_" + file.originalname);
  },
});

var cargar = multer({ storage: rutaAlmacen });

/* GET users listing. */
router.get("/login", loginController.login);
router.get("/crear", loginController.crear);
module.exports = router;