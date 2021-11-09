import Rol from "../models/rol";
export const createRol = async () => {
	try {
		const contador = await Rol.estimatedDocumentCount();
		if (contador > 0) return;
		const valores = await Promise.all([
			new Rol({ name: "admin" }).save(),
			new Rol({ name: "mecanico" }).save(),
		]);
		console.log(valores);
	} catch (error) {
		console.error(error);
	}
};
