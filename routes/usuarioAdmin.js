var express = require("express");//SE NECESITA PARA USERS
var router = express.Router();
const usuarioAdminController = require("../controllers/usuarioAdminController");
;


/* GET users listing. */
router.get("/index", usuarioAdminController.index);
module.exports = router;