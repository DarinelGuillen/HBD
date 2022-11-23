var express = require("express");//SE NECESITA PARA USERS
var router = express.Router();
const usuarioAdminController = require("../controllers/usuarioAdminController");
;


/* GET users listing. */
router.get("/index", usuarioAdminController.index);
router.get("/dos", usuarioAdminController.index1);
router.get("/validacionDatos.js", usuarioAdminController.obt);
//router.get("../public/js/validacionDatos.js", usuarioAdminController.obt);


module.exports = router;