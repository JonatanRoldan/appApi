const { Router } = require("express");
const router = Router();

const marcaCtrl = require("../controllers/marca.controller");

router.get("/", marcaCtrl.getmarcas);

router.post("/", marcaCtrl.createmarcas);
router.get("/:id", marcaCtrl.getmarca);
router.put("/:id", marcaCtrl.editmarca);
router.delete("/:id", marcaCtrl.deletemarca);


module.exports= router;