var express = require("express"); //SE NECESITA PARA USERS
var router = express.Router();
const usersController = require("../controllers/usersController");
const casasController = require("../controllers/casasController");

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
router.get("/login", usersController.login);
router.get("/verificar/:correo", usersController.verificar);
//crear user//
router.get("/crear", usersController.crear);
router.post("/", usersController.guardar);
//crear END//
// //crearInmueble //
router.get("/crear/:id", casasController.crear);
// //crearInmueble END//
router.post('/favoritos/:id',usersController.favoritos);
router.post('/notificaciones/:datos',usersController.notificaciones);

//delete Favorito
router.post('/deleteFav/:id',usersController.deleteFav);
router.post('/deleteNofi/:id',usersController.deleteNofi);


module.exports = router;
