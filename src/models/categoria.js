const { Schema, model } = require("mongoose");

const categoriaSchema = new Schema(
    {
        nombre:{type:String, requirided: true},
        descripcion:{type:String, requirided: true},
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("categoria", categoriaSchema);