const { Router } = require("express");
const router = Router();

const clienteCtrl = require("../controllers/cliente.controllers");

router.get("/", clienteCtrl.getclientes);
router.post("/", clienteCtrl.createcliente);
router.get("/:id", clienteCtrl.getcliente);
router.put("/:id", clienteCtrl.deletecliente);
router.delete("/:id", clienteCtrl.editcliente);

module.exports= router;