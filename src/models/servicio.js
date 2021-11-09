const { Schema, model } = require("mongoose");

const servicioSchema = new Schema(
    {
        car:{type: Schema.ObjectId, ref: "carro", requerided:true},
        cliente:{type: Schema.ObjectId, ref: "cliente", requerided:true},
        descripcion:{type:String, requirided: false},
        tareas:[
            {
                comentario:{type:String, requirided: false},
                tarea:{type:Schema.ObjectId, ref:"tarea", default:null}
            }
        ],
        plazo:{type:Number, requirided: true},
        costo:{type:Number, requirided: true},
    },
    {
        timestamps: true,
		versionKey: false,
    }
);
module.exports = model("servicio", servicioSchema);