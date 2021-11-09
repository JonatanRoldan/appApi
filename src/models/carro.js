const { Schema, model } = require("mongoose");

const carroSchema = new Schema(
    {
        marca:{type: Schema.ObjectId, ref: "marca", requerided:true},
        categoria:{type: Schema.ObjectId, ref: "categoria", requerided:true},
        linea:{type:String, requirided: true},
        caja:{type:String, requirided: true},
        motor:{type:String, requirided: true},
        modelo:{type:Number, requirided: true}
        
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("carro", carroSchema);