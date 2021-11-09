const carroCtrl = {};

const Carro = require("../models/carro");

carroCtrl.getcarros = async (req, res) => {
	const carros = await Carro.find()
	.populate('marca','nombre')
	.populate('categoria','nombre');
	res.json(carros);
};
carroCtrl.createcarro = async (req, res) => {
	const nuevoCarro = new Carro(req.body);
	console.log(req.body);
	await nuevoCarro.save();
	console.log("creado");
	res.send("creado carro")
};
carroCtrl.getcarro = async (req, res) => {
	console.log(req.params);
	const carro = await Carro.findById(req.params.id);
	res.send(carro);
};

carroCtrl.deletecarro = async (req, res) => {
	await Carro.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};

carroCtrl.editcarro = async (req, res) => {
	await Carro.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = carroCtrl;
