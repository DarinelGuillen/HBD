var express = require("express"); //SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");

/* GET users listing. */
router.get("/index", usersController.index);
router.get("/verificar/:correo", usersController.verificar);
router.get("/noVerificados", usersController.noVerificado);
router.get("/crear", usersController.crear);
router.post("/", usersController.guardar);
router.get("/login", usersController.login);

module.exports = router;
