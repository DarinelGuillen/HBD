var express = require("express");
var router = express.Router();
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

/* GET home page. */
router.get("/", casasController.indexmain);
router.get("/", casasController.index);
router.get("/crear", casasController.crear);
router.post("/",cargar.single("archivo"),casasController.guardar)
router.post('/eliminar/:id',casasController.eliminar);
router.get('/editar/:id',casasController.editar);
router.post("/actualizar",cargar.single("archivo"),casasController.actualizar)
router.get("/ver", casasController.ver);


module.exports = router;
