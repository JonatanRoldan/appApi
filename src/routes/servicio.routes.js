const { Router } = require("express");
const router = Router();

const servicioCtrl = require("../controllers/servicio.controller");

router.get("/", servicioCtrl.getservisios);
router.post("/", servicioCtrl.createservicio);
router.get("/:id", servicioCtrl.getservicio);
router.put("/:id", servicioCtrl.editservicio);
router.delete("/:id", servicioCtrl.deleteservicio);

module.exports= router;