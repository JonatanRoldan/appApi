const servicioCtrl = {};

const Servicio = require("../models/servicio");

servicioCtrl.getservisios = async (req, res) => {
	const carros = await Servicio.find();
	res.json(carros);
};
servicioCtrl.createservicio = async (req, res) => {
	const nuevoserv = new Servicio(req.body);
	console.log(req.body);
	await nuevoserv.save();
	console.log("creado");
	res.send("creado servicio")
};
servicioCtrl.getservicio = async (req, res) => {
	console.log(req.params);
	const servicio = await Servicio.findById(req.params.id);
	res.send(servicio);
};

servicioCtrl.deleteservicio = async (req, res) => {
	await Servicio.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};

servicioCtrl.editservicio = async (req, res) => {
	await Servicio.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = servicioCtrl;
