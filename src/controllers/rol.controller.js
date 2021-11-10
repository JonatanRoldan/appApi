const rolCtrl = {};

const Rol = require("../models/rol");

rolCtrl.getrols = async (req, res) => {
	const roles = await Rol.find()
	res.json(roles);
};
rolCtrl.createrol = async (req, res) => {
	const nuevoRol = new Rol(req.body);
	console.log(req.body);
	await nuevoRol.save();
	console.log("creado");
	res.send("creado")
};

module.exports = rolCtrl;
