const { Schema, model } = require("mongoose");

const clienteSchema = new Schema(
    {
        nombre:{type:String, requirided: true},
        direccions:{type:String, requirided: true},
        nit:{type:Number, requirided: false},
        telefono:{type:String, requirided: true}
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("cliente", clienteSchema);