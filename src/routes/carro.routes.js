const { Router } = require("express");
const router = Router();

const carroCtrl = require("../controllers/carro.controller");

router.get("/", carroCtrl.getcarros);
router.post("/", carroCtrl.createcarro);
router.get("/:id", carroCtrl.getcarro);
router.put("/:id", carroCtrl.editcarro);
router.delete("/:id", carroCtrl.deletecarro);


module.exports= router;