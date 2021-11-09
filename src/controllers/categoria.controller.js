const categoriaCtrl = {};
const Categoria = require("../models/categoria");

categoriaCtrl.getcategorias = async (req, res) => {
	const categorias = await Categoria.find();
	res.json(categorias);
};
categoriaCtrl.createcategoria = async (req, res) => {
	const nuevaCategoria = new Categoria(req.body);
	console.log(req.body);
	await nuevaCategoria.save();
	console.log("creado");
	res.send("creado categoria")
};
categoriaCtrl.getcategoria = async (req, res) => {
	console.log(req.params);
	const categoria = await Categoria.findById(req.params.id);
	res.send(categoria);
};
categoriaCtrl.deletecategoria = async (req, res) => {
	await Categoria.findByIdAndDelete(req.params.id);
	res.json({ status: "eliminado" });
};
categoriaCtrl.editcategoria = async (req, res) => {
	await Categoria.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "actualizado" });
};
module.exports = categoriaCtrl;
