var express = require("express");//SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");
;
// var multer = require("multer");
// const { route } = require(".");
// const usersController = require("../controllers/usersController");
// var fecha = Date.now();
// var rutaAlmacen = multer.diskStorage({
//   destination: function (request, file, callback) {
//     callback(null, "./public/images/");
//   },
//   filename: function (request, file, callback) {
//     console.log(file);
//     callback(null, fecha + "_" + file.originalname);
//   },
// });

// var cargar = multer({ storage: rutaAlmacen });

/* GET users listing. */
router.get("/login", usersController.login);
router.get("/crear", usersController.crear);
router.post("/",usersController.guardar);
// router.post("/",cargar.single("archivo"),librosController.guardar);
module.exports = router;