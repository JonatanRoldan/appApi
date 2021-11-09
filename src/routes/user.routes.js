const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const userCtrl = require("../controllers/user.controllers");

router.post("/signup", userCtrl.Signup);
router.post("/signin", userCtrl.Signin);

//router.get("/", verifyToken, userCtrl.getUsers);
router.get("/", userCtrl.getUsers);
router.get("/:id", userCtrl.getUser);
router.put("/:id", userCtrl.editUser);
router.delete("/:id", userCtrl.deleteUser);

module.exports = router;


