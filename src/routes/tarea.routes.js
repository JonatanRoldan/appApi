const { Router } = require("express");
const router = Router();

const tareaCtrl = require("../controllers/tarea.controller");

router.get("/", tareaCtrl.gettareas);

router.post("/", tareaCtrl.createtarea);
router.get("/:id", tareaCtrl.gettarea);
router.put("/:id", tareaCtrl.editcarro);
router.delete("/:id", tareaCtrl.deletetarea);


module.exports= router;