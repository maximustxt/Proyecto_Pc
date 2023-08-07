import { Schema, model } from "mongoose";
//- Interface:
import { Silla_Butaca } from "../../interfaces/InterfaceSillas_Butacas/InterfaceSillas_Butacas";
//- Instance:
const Sillas_Butacas = new Schema<Silla_Butaca>({
  name: { type: String, required: true },
  Imagen: { type: String, required: true, unique: true },
  PrecioUnitario: { type: Number, required: true },
  Contador: { type: Number, required: true },
  Imagenes: { type: [String], required: true },
  Descripcion: { type: String, required: true },
  Marca: { type: String, required: true },
  Precio: { type: Number, required: true },
  Stock: { type: Number, required: true },
  Identificador: { type: String, required: true },
  Destacado: { type: Boolean, required: true },
});

export default model("Sillas_Butacas", Sillas_Butacas);
