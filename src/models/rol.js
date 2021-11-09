const { Schema, model } = require("mongoose");

const rolSchema = new Schema(
	{
		name:{type:String, requirided: true},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);

module.exports = model("Rol", rolSchema);
