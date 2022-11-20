var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");
/* GET home page. */
// router.get(
//   "index",
//   function (req, res, next) {
//     res.send("<h1>Bienvenido a las House By Damo</h1>");

//     // setTimeout(() => {
//     //   res.send(
//     //     "<h1>Colocar Aqui todo el codigo del Index Y colocar los botones </h1><br>" +
//     //       '<a href="casas" class="btn btn-primary" type="button"><h1>Ir a la ventana de visualizar casas</h1></a>' +
//     //       "<h1>Como el boton de Arriva que te envia a index de casas</h1>"
//     //   );
//     // }, 1000);
//   }

//   // ,casasController.index //Para visualizar lo que esta en casa index
// );
router.get("/", indexController.index);

module.exports = router;
