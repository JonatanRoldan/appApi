const User = require("../models/user");
const Rol = require("../models/rol");


const userControler = {};
const jwt = require("jsonwebtoken");

userControler.getUsers = async (req, res) => {
	const users = await User.find();
	res.json(users);
	console.log(" token2 ");
};

userControler.Signup = async (req, res) => {
	const { userName, password, rol } = req.body;
	const newUser = new User({
		userName,
		password: await User.encryptPassword(password),
		rol
	});
	const saveUser = await newUser.save();
	const token = jwt.sign({ _id: saveUser._id }, "api-taller", {
		expiresIn: 86400,
	});

	res.status(200).json({ token });
};

userControler.Signin = async (req, res) => {
	const userFound = await User.findOne({
		userName: req.body.userName,
	}).populate("rol");

	if (!userFound) return res.status(401).json({ msg: "El usuario no existe" });

	const matchpasword = await User.comparePassword(
		req.body.password,
		userFound.password
	);

	if (!matchpasword)
		return res.status(401).json({ msg: "Contraseña no existe" });

	const token = jwt.sign({ _id: userFound._id }, "api-taller", {
		expiresIn: 86400,
	});
	return res
		.status(200)
		.json({ token, user: userFound.rol, id: userFound._id });
};

userControler.getUser = async (req, res) => {
	const ruti = await User.findById(req.params.id);
	res.send(ruti);
};

userControler.deleteUser = async (req, res) => {
	await User.findByIdAndDelete(req.params.id);
	res.json({ status: "user delete" });
};

userControler.editUser = async (req, res) => {
	await User.findByIdAndUpdate(req.params.id, req.body);
	res.json({ status: "user update" });
};

module.exports = userControler;