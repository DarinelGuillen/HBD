var express = require("express"); //SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");


// var cargar = multer({ storage: rutaAlmacen });

/* GET users listing. */
router.get("/index", usersController.index);
router.get("/verificar/:correo", usersController.verificar);

router.get("/crear", usersController.crear);
router.post("/", usersController.guardar);
router.get("/login", usersController.login);
//router.post('/verificar/:correo',usersController.verificar);


// router.post("/",cargar.single("archivo"),librosController.guardar);
module.exports = router;
