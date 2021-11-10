const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
	{
		userName: { type: String, requerided: true, unique: true },
		password: { type: String, requerided: true },
		rol: {type: Schema.ObjectId, ref: "Rol", requerided:true},
	},
	{
		timestamps: true,
		versionKey: false,
	}
);
userSchema.statics.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
};
userSchema.statics.comparePassword = async (password, receivepassword) => {
	return await bcrypt.compare(password, receivepassword);
};

module.exports = model("User", userSchema);