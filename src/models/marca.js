const { Schema, model } = require("mongoose");

const marcaSchema = new Schema(
    {
        nombre:{type:String, requirided: true},
        descripcion:{type:String, requirided: true},
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("marca", marcaSchema);