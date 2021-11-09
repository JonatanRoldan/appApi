const { Router } = require("express");
const router = Router();

const categoriaCtrl = require("../controllers/categoria.controller");

router.get("/", categoriaCtrl.getcategorias);
router.post("/", categoriaCtrl.createcategoria);
router.get("/:id", categoriaCtrl.getcategoria);
router.put("/:id", categoriaCtrl.editcategoria);
router.delete("/:id", categoriaCtrl.deletecategoria);

module.exports= router;