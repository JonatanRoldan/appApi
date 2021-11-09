const clienteCtrl = {};

const Cliente = require("../models/cliente");

clienteCtrl.getclientes = async (req, res) => {
	const clientes = await Cliente.find();
	res.json(clientes);
};
clienteCtrl.createcliente = async (req, res) => {
	const nuevoCliente = new Cliente(req.body);
	console.log(req.body);
	await nuevoCliente.save();
	console.log("creado");
	res.send("creado cliente")
};
clienteCtrl.getcliente = async (req, res) => {
	console.log(req.params);
	const cliente = await Cliente.findById(req.params.id);
	res.send(cliente);
};

clienteCtrl.deletecliente = async (req, res) => {
	await Cliente.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};

clienteCtrl.editcliente = async (req, res) => {
	await cliente.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = clienteCtrl;