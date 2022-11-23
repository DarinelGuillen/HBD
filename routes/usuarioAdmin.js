var express = require("express");//SE NECESITA PARA USERS
var router = express.Router();
const usuarioAdminController = require("../controllers/usuarioAdminController");
;


/* GET users listing. */
router.get("/index", usuarioAdminController.index);
router.get("/dos", usuarioAdminController.index1);
module.exports = router;