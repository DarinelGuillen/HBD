var express = require("express"); //SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");
const casasController = require("../controllers/casasController");

/* GET users listing. */
router.get("/index", usersController.index);
router.get("/login", usersController.login);
router.get("/verificar/:correo", usersController.verificar);
router.get("/crear", usersController.crear);
router.post("/", usersController.guardar);
router.get("/crear/:id", casasController.crear);
router.post('/favoritos/:id',usersController.favoritos);
router.post('/notificaciones/:datos',usersController.notificaciones);
router.post('/deleteFav/:id',usersController.deleteFav);
router.post('/deleteNofi/:id',usersController.deleteNofi);

module.exports = router;
