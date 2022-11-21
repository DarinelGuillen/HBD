var express = require("express");//SE NECESITA PARA USERS
var router = express.Router();
const usuarioAdminController = require("../controllers/usuarioAdminController");
;


/* GET users listing. */
router.get("/ver", usuarioAdminController.ver);
// router.post("/",cargar.single("archivo"),librosController.guardar);
module.exports = router;