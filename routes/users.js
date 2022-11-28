var express = require("express"); //SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");

var multer= require('multer');
var fecha= Date.now();
var rutaAlmacen=multer.diskStorage(
   {
    destination:function (request,file,callback){
        callback(null,'./public/images/');
    },
    filename:function(request,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
   }     
);

var cargar=multer({storage:rutaAlmacen});


/* GET users listing. */
router.get("/index", usersController.index);
router.get("/verificar/:correo", usersController.verificar);
router.get("/noVerificados", usersController.noVerificado);
//crear user//
router.get("/crear", usersController.crear);
router.post("/", usersController.guardar);
//crear END//
// //crearInmueble//
router.get("/crearI/:id",usersController.crearI);

router.post("/",cargar.single("archivo"),usersController.guardar);
// router.get("/crearInmueble", usersController.crearInmueble);
// router.post("/",cargar.single("archivo"),usersController.guardarInmueble)
// //crearInmueble END//

router.get("/login", usersController.login);

module.exports = router;
