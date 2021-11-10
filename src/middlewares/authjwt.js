import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/user";
import Rol from "../models/rol";

export const verifyToken = async (req, res, next) => {
	const token = req.headers["accesstoken"];

	try {
		if (!token) return res.status(404).json({ message: "not token provider" });
		const decoded = jwt.verify(token, config.SECRET);
		req.userId = decoded;
		const user = await User.findOne({ _id: decoded });

		if (!user) return res.status(404).json({ message: "user dont found" });
		next();
	} catch (error) {
		return res.status(404).json({ message: "No tiene autorizacion" });
	}
};

export const isManager = async (req, res, next) => {
	try {
		const user = await User.findOne({ _id: req.userId });
		const rol = await Rol.findOne({ _id: { $in: user.rol } });
		console.log(rol.name);

		if (rol.name === "manager") {
			next();
			return;
		}
		return res.status(404).json({ message: "no eres manager" });
	} catch (error) {
		return res
			.status(404)
			.json({ message: "no tienes autorizacion (manager)" });
	}
};

export const isAdmin = async (req, res, next) => {
	try {
		const user = await User.findOne({ _id: req.userId });
		const rol = await Rol.findOne({ _id: { $in: user.rol } });
		if (rol.name == "admin") {
			next();
			return;
		}
		return res.status(404).json({ message: "no eres admin" });
	} catch (error) {
		return res.status(404).json({ message: "no tienes autorizacion (admin)" });
	}
};
