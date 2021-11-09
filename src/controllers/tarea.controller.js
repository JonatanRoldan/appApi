const tareaCtrl = {};

const Tarea = require("../models/tarea");

tareaCtrl.gettareas = async (req, res) => {
	const tareas = await Tarea.find()
	res.json(tareas);
};
tareaCtrl.createtarea = async (req, res) => {
	const nuevatarea = new Tarea(req.body);
	console.log(req.body);
	await nuevatarea.save();
	console.log("creado");
	res.send("creado tarea")
};
tareaCtrl.gettarea = async (req, res) => {
	console.log(req.params);
	const tarea = await Carro.findById(req.params.id);
	res.send(tarea);
};

tareaCtrl.deletetarea = async (req, res) => {
	await Tarea.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};

tareaCtrl.editcarro = async (req, res) => {
	await Tarea.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = tareaCtrl;
