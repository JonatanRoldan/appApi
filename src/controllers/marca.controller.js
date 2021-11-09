const marcaCtrl = {};

const Marca = require("../models/marca");

marcaCtrl.getmarcas = async (req, res) => {
	const marcas = await Marca.find();
	res.json(marcas);
};
marcaCtrl.createmarcas = async (req, res) => {
	const nuevaMarca = new Marca(req.body);
	console.log(req.body);
	await nuevaMarca.save();
	res.send("creando marca")
};
marcaCtrl.getmarca = async (req, res) => {
	console.log(req.params);
	const marca = await Marca.findById(req.params.id);
	res.send(marca);
};
marcaCtrl.deletemarca = async (req, res) => {
	await Marca.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};
marcaCtrl.editmarca = async (req, res) => {
	await Marca.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = marcaCtrl;
