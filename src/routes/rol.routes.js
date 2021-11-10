const { Router } = require("express");
const router = Router();

const rolCtrl = require("../controllers/rol.controller");

router.get("/", rolCtrl.getrols);
router.post("/", rolCtrl.createrol);

module.exports= router;